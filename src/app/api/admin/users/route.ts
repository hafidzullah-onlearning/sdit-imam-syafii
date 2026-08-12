import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

// GET /api/admin/users - List all users with profile & roles
export async function GET() {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Verify SuperAdmin status
    const isSuperAdminEmail = user.email === "superadmin@sdit-imamsyafii.sch.id";
    const { data: currentProfile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single();

    const role = currentProfile?.role || (isSuperAdminEmail ? "superadmin" : "admin");
    if (role !== "superadmin") {
      return NextResponse.json({ error: "Forbidden: SuperAdmin access required" }, { status: 403 });
    }

    // Fetch all profiles from public.profiles
    const { data: profiles, error } = await supabase
      .from("profiles")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      // Fallback response with initial SuperAdmin if database tables are not yet synced
      return NextResponse.json({
        users: [
          {
            id: user.id,
            email: user.email,
            full_name: "Super Admin Utama",
            role: "superadmin",
            created_at: new Date().toISOString(),
          },
        ],
      });
    }

    return NextResponse.json({ users: profiles || [] });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Internal Error" }, { status: 500 });
  }
}

// POST /api/admin/users - Create new user with specific role
export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const {
      data: { user: currentUser },
    } = await supabase.auth.getUser();

    if (!currentUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const isSuperAdminEmail = currentUser.email === "superadmin@sdit-imamsyafii.sch.id";
    const { data: currentProfile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", currentUser.id)
      .single();

    const role = currentProfile?.role || (isSuperAdminEmail ? "superadmin" : "admin");
    if (role !== "superadmin") {
      return NextResponse.json({ error: "Forbidden: SuperAdmin access required" }, { status: 403 });
    }

    const body = await request.json();
    const { email, password, fullName, userRole } = body;

    if (!email || !password || !fullName || !userRole) {
      return NextResponse.json(
        { error: "Field email, password, nama lengkap, dan role wajib diisi" },
        { status: 400 }
      );
    }

    const adminSupabase = createAdminClient();

    // 1. Create User in Supabase Auth
    const { data: authData, error: authError } = await adminSupabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: {
        full_name: fullName,
        role: userRole,
      },
    });

    if (authError) {
      return NextResponse.json({ error: authError.message }, { status: 400 });
    }

    const newUserId = authData.user?.id;

    // 2. Insert/Upsert into public.profiles table
    if (newUserId) {
      await adminSupabase.from("profiles").upsert({
        id: newUserId,
        email,
        full_name: fullName,
        role: userRole,
      });
    }

    return NextResponse.json({
      success: true,
      user: {
        id: newUserId,
        email,
        full_name: fullName,
        role: userRole,
      },
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Gagal membuat pengguna" }, { status: 500 });
  }
}

// PUT /api/admin/users - Update user role & details
export async function PUT(request: Request) {
  try {
    const supabase = await createClient();
    const {
      data: { user: currentUser },
    } = await supabase.auth.getUser();

    if (!currentUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { userId, userRole, fullName } = body;

    if (!userId || !userRole) {
      return NextResponse.json({ error: "ID dan Role wajib diisi" }, { status: 400 });
    }

    const adminSupabase = createAdminClient();

    // Update profiles table
    const { error: profileError } = await adminSupabase
      .from("profiles")
      .update({
        role: userRole,
        ...(fullName ? { full_name: fullName } : {}),
      })
      .eq("id", userId);

    if (profileError) {
      return NextResponse.json({ error: profileError.message }, { status: 400 });
    }

    // Update auth user_metadata
    await adminSupabase.auth.admin.updateUserById(userId, {
      user_metadata: { role: userRole, ...(fullName ? { full_name: fullName } : {}) },
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Gagal memperbarui role" }, { status: 500 });
  }
}

// DELETE /api/admin/users - Delete user
export async function DELETE(request: Request) {
  try {
    const supabase = await createClient();
    const {
      data: { user: currentUser },
    } = await supabase.auth.getUser();

    if (!currentUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("id");

    if (!userId) {
      return NextResponse.json({ error: "ID Pengguna tidak ditemukan" }, { status: 400 });
    }

    const adminSupabase = createAdminClient();

    // Delete from auth.users (cascade deletes profiles)
    await adminSupabase.auth.admin.deleteUser(userId);
    await adminSupabase.from("profiles").delete().eq("id", userId);

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Gagal menghapus pengguna" }, { status: 500 });
  }
}
