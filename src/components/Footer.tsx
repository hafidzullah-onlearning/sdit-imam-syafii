import Image from "next/image";
import Link from "next/link";
import mapLocation from "@/assets/map-location.jpg";

export default function Footer() {
  return (
    <footer className="bg-inverse-surface dark:bg-surface-container-lowest text-tertiary-fixed dark:text-tertiary w-full rounded-t-xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-md py-xl px-gutter max-w-container-max mx-auto">
        {/* Brand & Bio */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-sm group">
            <div className="relative w-8 h-8 overflow-hidden">
              <Image
                src="/logo.png"
                alt="Logo SDIT Imam Syafi'i"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-headline-lg font-headline-lg text-surface-bright dark:text-on-surface group-hover:opacity-90 transition-opacity">
              SDIT Imam Syafi&apos;i
            </span>
          </Link>
          <p className="font-body-sm text-body-sm text-surface-variant dark:text-on-surface-variant max-w-xs">
            Mencetak Generasi Qur&apos;ani dan Berprestasi. Berlokasi di lingkungan asri BTN Tirasa, Sudiang, Makassar.
          </p>
          <div className="flex gap-3 mt-2">
            <a
              className="w-10 h-10 rounded-full bg-surface/10 flex items-center justify-center hover:bg-primary-container transition-colors duration-200"
              href="https://sditimamsyafii.sch.id"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Website Resmi"
            >
              <span className="material-symbols-outlined">public</span>
            </a>
            <a
              className="w-10 h-10 rounded-full bg-surface/10 flex items-center justify-center hover:bg-primary-container transition-colors duration-200"
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <span className="material-symbols-outlined">photo_camera</span>
            </a>
          </div>
        </div>

        {/* Quick Links & Contact */}
        <div className="flex flex-col gap-4">
          <h4 className="font-headline-sm text-headline-sm text-surface-bright dark:text-on-surface">Tautan Penting</h4>
          <div className="flex flex-col gap-2">
            <Link
              className="text-surface-variant dark:text-on-surface-variant font-label-bold text-label-bold hover:text-primary-container dark:hover:text-primary transition-colors duration-200 opacity-80 hover:opacity-100"
              href="/profil"
            >
              Profil Sekolah
            </Link>
            <Link
              className="text-surface-variant dark:text-on-surface-variant font-label-bold text-label-bold hover:text-primary-container dark:hover:text-primary transition-colors duration-200 opacity-80 hover:opacity-100"
              href="/berita"
            >
              Berita &amp; Informasi
            </Link>
            <Link
              className="text-surface-variant dark:text-on-surface-variant font-label-bold text-label-bold hover:text-primary-container dark:hover:text-primary transition-colors duration-200 opacity-80 hover:opacity-100"
              href="/tahfidz"
            >
              Portal Progres Tahfidz
            </Link>
            <Link
              className="text-surface-variant dark:text-on-surface-variant font-label-bold text-label-bold hover:text-primary-container dark:hover:text-primary transition-colors duration-200 opacity-80 hover:opacity-100"
              href="/ppdb"
            >
              Informasi PPDB
            </Link>
          </div>
          <a
            className="mt-4 inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg font-label-bold text-label-bold w-max hover:opacity-90 transition-opacity"
            href="https://wa.me/628123456789?text=Assalamu%27alaikum%2C%20saya%20ingin%20bertanya%20informasi%20PPDB%20SDIT%20Imam%20Syafi%27i"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined">chat</span>
            Hubungi Panitia PPDB
          </a>
        </div>

        {/* Location Map */}
        <div className="flex flex-col gap-4">
          <h4 className="font-headline-sm text-headline-sm text-surface-bright dark:text-on-surface">Lokasi Kami</h4>
          <a
            href="https://maps.google.com/?q=BTN+Tirasa+Sudiang+Makassar"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-40 bg-surface/10 rounded-lg overflow-hidden border border-surface/20 relative group block"
          >
            <Image
              src={mapLocation}
              alt="Peta Lokasi SDIT Imam Syafi'i di Sudiang, Makassar"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
              <span className="bg-surface/90 text-on-surface text-xs font-bold px-3 py-1.5 rounded-full shadow flex items-center gap-1">
                <span className="material-symbols-outlined text-primary text-[16px]">location_on</span>
                Buka di Google Maps
              </span>
            </div>
          </a>
          <p className="font-body-sm text-body-sm text-surface-variant dark:text-on-surface-variant">
            BTN Tirasa, Sudiang, Kec. Biringkanaya,
            <br />
            Kota Makassar, Sulawesi Selatan.
          </p>
        </div>
      </div>
      <div className="border-t border-surface/10 py-6 text-center">
        <p className="font-body-sm text-body-sm text-surface-variant dark:text-on-surface-variant">
          &copy; {new Date().getFullYear()} SDIT Imam Syafi&apos;i. Mencetak Generasi Qur&apos;ani dan Berprestasi.
        </p>
      </div>
    </footer>
  );
}

