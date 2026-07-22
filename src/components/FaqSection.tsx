"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Apakah pendaftaran bisa dilakukan secara offline?",
    answer:
      "Ya, pendaftaran dapat dilakukan secara offline dengan mengunjungi sekretariat PPDB SDIT Imam Syafi'i di BTN Tirasa, Sudiang, Makassar setiap hari Senin – Sabtu pukul 08.00 – 14.00 WITA.",
  },
  {
    question: "Apa saja materi observasi untuk calon santri?",
    answer:
      "Materi observasi meliputi pemetaan kesiapan belajar anak, kemandirian, perkembangan motorik, pengenalan huruf/angka, serta wawancara singkat dengan orang tua/wali santri.",
  },
  {
    question: "Bagaimana skema pembayaran biaya pendaftaran & daftar ulang?",
    answer:
      "Biaya pendaftaran dibayarkan saat registrasi awal. Untuk biaya uang pangkal/pembangunan dapat diangsur sesuai skema kesepakatan saat wawancara keuangan dengan pihak sekolah.",
  },
  {
    question: "Apakah ada batas kuota pendaftaran?",
    answer:
      "Ya, kuota penerimaan santri baru dibatasi untuk menjaga rasio ideal antara guru dan santri demi kualitas pembimbingan yang optimal.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-xl bg-surface border-t border-outline-variant/30">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-lg">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Pertanyaan Sering Ditanyakan (FAQ)
          </h2>
          <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto mt-2">
            Informasi penting seputar proses pendaftaran dan observasi di SDIT Imam Syafi'i.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-base">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-primary bg-surface-container-lowest shadow-sm"
                    : "border-outline-variant/30 bg-surface-container-low"
                }`}
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between p-md text-left focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-bold text-on-surface text-base">
                    {item.question}
                  </span>
                  <span
                    className={`material-symbols-outlined transition-transform duration-300 text-primary ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    expand_more
                  </span>
                </button>

                {isOpen && (
                  <div className="p-md pt-0 text-on-surface-variant text-sm leading-relaxed border-t border-outline-variant/20 mt-2">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
