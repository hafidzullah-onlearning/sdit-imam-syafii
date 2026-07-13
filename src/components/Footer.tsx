import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-inverse-surface dark:bg-surface-container-lowest text-tertiary-fixed dark:text-tertiary w-full rounded-t-xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-md py-xl px-gutter max-w-container-max mx-auto">
        {/* Brand & Bio */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-sm">
            <div className="relative w-8 h-8 overflow-hidden">
              <Image
                src="/logo.png"
                alt="Logo SDIT Imam Syafi'i"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-headline-lg font-headline-lg text-surface-bright dark:text-on-surface">
              SDIT Imam Syafi&apos;i
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-surface-variant dark:text-on-surface-variant max-w-xs">
            Mencetak Generasi Qur&apos;ani dan Berprestasi. Berlokasi di lingkungan asri BTN Tirasa, Sudiang, Makassar.
          </p>
          <div className="flex gap-3 mt-2">
            {/* Social Placeholders with aria-labels */}
            <a
              className="w-10 h-10 rounded-full bg-surface/10 flex items-center justify-center hover:bg-primary-container transition-colors duration-200"
              href="#website"
              aria-label="Website Resmi"
            >
              <span className="material-symbols-outlined">public</span>
            </a>
            <a
              className="w-10 h-10 rounded-full bg-surface/10 flex items-center justify-center hover:bg-primary-container transition-colors duration-200"
              href="#instagram"
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
            <a
              className="text-surface-variant dark:text-on-surface-variant font-label-bold text-label-bold hover:text-primary-container dark:hover:text-primary transition-colors duration-200 opacity-80 hover:opacity-100"
              href="#contact"
            >
              Kontak Kami
            </a>
            <a
              className="text-surface-variant dark:text-on-surface-variant font-label-bold text-label-bold hover:text-primary-container dark:hover:text-primary transition-colors duration-200 opacity-80 hover:opacity-100"
              href="#location"
            >
              Lokasi Sekolah
            </a>
            <a
              className="text-surface-variant dark:text-on-surface-variant font-label-bold text-label-bold hover:text-primary-container dark:hover:text-primary transition-colors duration-200 opacity-80 hover:opacity-100"
              href="#privacy"
            >
              Kebijakan Privasi
            </a>
            <a
              className="text-surface-variant dark:text-on-surface-variant font-label-bold text-label-bold hover:text-primary-container dark:hover:text-primary transition-colors duration-200 opacity-80 hover:opacity-100"
              href="#terms"
            >
              Syarat &amp; Ketentuan
            </a>
          </div>
          <a
            className="mt-4 inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg font-label-bold text-label-bold w-max hover:opacity-90 transition-opacity"
            href="https://wa.me/628123456789"
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
          <div className="w-full h-40 bg-surface/10 rounded-lg overflow-hidden border border-surface/20 relative">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWws3EcXe_xZKkKACVWv1_FRbgi4gr7V9y-iFZbgApZFfyqSv7Ifw9zNFZ_q3CUspDuO_P-CGeZVa0WwWxQ30XRAuk1Ls8sLol02L2-Qxxnz9OaaTlTIQfNA6Q8bCxWhy7S5BQOxIK3dx1F9rU0Ul6sshv6Sbl6A6TFHcHS8WdNYevVrl30YCWCU9bLN1O4710QbGJqjnDOwB9t0ylooE3KlQ6NuEavIFV7PFL7HvcVfXnsRlhDSTjdw"
              alt="Peta Lokasi SDIT Imam Syafi'i di Sudiang, Makassar"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <p className="font-body-sm text-body-sm text-surface-variant dark:text-on-surface-variant">
            BTN Tirasa, Sudiang, Kec. Biringkanaya,
            <br />
            Kota Makassar, Sulawesi Selatan.
          </p>
        </div>
      </div>
      <div className="border-t border-surface/10 py-6 text-center">
        <p className="font-body-sm text-body-sm text-surface-variant dark:text-on-surface-variant">
          &copy; 2024 SDIT Imam Syafi&apos;i. Mencetak Generasi Qur&apos;ani dan Berprestasi.
        </p>
      </div>
    </footer>
  );
}
