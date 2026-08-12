import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://opruzmcmofwytzxessrk.supabase.co";
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "opruzmcmofwytzxessrk";

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) =>
          request.cookies.set(name, value)
        );
        response = NextResponse.next({
          request,
        });
        cookiesToSet.forEach(({ name, value, options }) =>
          response.cookies.set(name, value, options)
        );
      },
    },
  });

  // Check auth session
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const sditSession = request.cookies.get("sdit_session")?.value;
  const pathname = request.nextUrl.pathname;

  // 1. Protect /admin routes (except /admin/login)
  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    if (!user && !sditSession) {
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.pathname = "/admin/login";
      return NextResponse.redirect(redirectUrl);
    }

    // Determine role
    let role = "admin";
    if (user?.email === "superadmin@sdit-imamsyafii.sch.id" || sditSession === "superadmin") {
      role = "superadmin";
    } else if (sditSession === "ustadz") {
      role = "ustadz";
    }

    try {
      if (user) {
        const { data: profile } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", user.id)
          .single();

        if (profile?.role) {
          role = profile.role;
        }
      }
    } catch {}

    // Route RBAC Checks
    // /admin/users -> SuperAdmin only
    if (pathname.startsWith("/admin/users") && role !== "superadmin") {
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.pathname = "/admin/dashboard";
      return NextResponse.redirect(redirectUrl);
    }

    // /admin/berita, /admin/ppdb, /admin/struktur -> superadmin & admin only
    const adminOnlyRoutes = ["/admin/berita", "/admin/ppdb", "/admin/struktur"];
    if (adminOnlyRoutes.some((route) => pathname.startsWith(route)) && role === "ustadz") {
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.pathname = "/admin/dashboard";
      return NextResponse.redirect(redirectUrl);
    }
  }

  // 2. Redirect away from /admin/login if already authenticated
  if (pathname === "/admin/login" && (user || sditSession)) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = "/admin/dashboard";
    return NextResponse.redirect(redirectUrl);
  }

  return response;
}

export const config = {
  matcher: ["/admin/:path*"],
};
