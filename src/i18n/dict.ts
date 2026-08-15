export type Lang = "en" | "id";

/**
 * Bilingual copy for the site's narrative surfaces. The Indonesian is written,
 * not machine-translated: it keeps the register of someone speaking plainly
 * about their own work rather than a literal word-for-word carry-over.
 *
 * Project notes and the on-chain evidence tables stay in English — those quote
 * each repository's own README, and translating a quotation would misrepresent
 * the source.
 */
export const dict = {
  en: {
    "nav.work": "Work",
    "nav.journey": "Journey",
    "nav.photography": "Photography",
    "nav.sources": "Sources",
    "nav.about": "About",
    "nav.archive": "Archive",
    "nav.cv": "CV",
    "nav.menu": "Menu",
    "nav.close": "Close",

    "home.hero.1": "I build software that",
    "home.hero.2a": "leaves a ",
    "home.hero.2b": "trail",
    "home.lede":
      "Twenty-one products shipped this year, and the same question sits under every one of them: after the machine acts, can a person still check what happened? Most of my work draws that line and then makes it inspectable by someone who has no reason to trust me.",
    "home.cta.work": "See the work",
    "home.cta.long": "Read the long version",

    "home.selected.eyebrow": "Selected work",
    "home.selected.title": "Six of the twenty-one",
    "home.selected.all": "All {n} products",

    "home.quote":
      "The interesting engineering is rarely making the agent smarter. It is drawing the line the agent cannot cross.",
    "home.quote.body":
      "Nearly every product on this site is a variation on that. A firewall in front of execution. A limit held in Rust rather than in a prompt. A receipt that survives the argument three months later. The pattern turned up first in payments, then in freight, childcare, home care, and municipal services — different industries, same missing part.",

    "home.craft.eyebrow": "Before the code",
    "home.craft.title": "A camera, and a room full of players",
    "home.craft.body":
      "I ran an esports outfit before I could write a line of production code, and I have been publishing art on chain since 2022. Neither stopped when the engineering started. One of the products on this site exists purely because I got tired of culling my own photographs.",
    "home.craft.link": "The whole arc, 2010 to now",

    "home.roles.eyebrow": "Where I turn up",
    "home.roles.title": "Roles, current and running",

    "home.archive.eyebrow": "The rest of it",
    "home.archive.title": "Another hundred-odd repositories, public and unpolished",
    "home.archive.body":
      "Post-quantum chain experiments, a water tanker system for the city utility, an editor rebuilt in the browser, and a browser game I made to remember what building without a compliance requirement feels like.",
    "home.archive.cta": "Open the archive",

    "home.close.eyebrow": "Open to",
    "home.close.title": "Work worth putting my name on.",
    "home.close.body":
      "Collaboration on agentic infrastructure, Solana work, or anything where the accountability question is the hard part. Also photography, and anything to do with building a community from nothing.",

    "lang.label": "Language",
  },

  id: {
    "nav.work": "Karya",
    "nav.journey": "Perjalanan",
    "nav.photography": "Fotografi",
    "nav.sources": "Sumber",
    "nav.about": "Tentang",
    "nav.archive": "Arsip",
    "nav.cv": "CV",
    "nav.menu": "Menu",
    "nav.close": "Tutup",

    "home.hero.1": "Saya membangun perangkat lunak",
    "home.hero.2a": "yang meninggalkan ",
    "home.hero.2b": "jejak",
    "home.lede":
      "Dua puluh satu produk rilis tahun ini, dan satu pertanyaan yang sama ada di bawah semuanya: setelah mesin bertindak, apakah manusia masih bisa memeriksa apa yang terjadi? Sebagian besar kerja saya menarik garis itu, lalu membuatnya bisa diperiksa oleh orang yang tidak punya alasan untuk percaya pada saya.",
    "home.cta.work": "Lihat karyanya",
    "home.cta.long": "Baca versi panjangnya",

    "home.selected.eyebrow": "Karya pilihan",
    "home.selected.title": "Enam dari dua puluh satu",
    "home.selected.all": "Semua {n} produk",

    "home.quote":
      "Bagian teknik yang menarik jarang soal membuat agen lebih pintar. Yang menarik adalah menarik garis yang tidak boleh dilewati agen itu.",
    "home.quote.body":
      "Hampir semua produk di situs ini adalah variasi dari hal tersebut. Dinding pengaman di depan eksekusi. Batas yang dipegang di Rust, bukan di prompt. Tanda terima yang masih bertahan ketika perdebatan muncul tiga bulan kemudian. Polanya pertama kali muncul di pembayaran, lalu di logistik, penitipan anak, perawatan di rumah, dan layanan publik — industri berbeda, bagian yang hilang sama.",

    "home.craft.eyebrow": "Sebelum menulis kode",
    "home.craft.title": "Sebuah kamera, dan satu ruangan penuh pemain",
    "home.craft.body":
      "Saya menjalankan tim esport sebelum bisa menulis satu baris kode produksi, dan sudah menerbitkan karya di blockchain sejak 2022. Keduanya tidak berhenti ketika saya mulai membangun perangkat lunak. Salah satu produk di situs ini ada justru karena saya lelah menyortir foto saya sendiri.",
    "home.craft.link": "Seluruh perjalanannya, 2010 sampai sekarang",

    "home.roles.eyebrow": "Di mana saya terlibat",
    "home.roles.title": "Peran yang sedang berjalan",

    "home.archive.eyebrow": "Sisanya",
    "home.archive.title": "Seratus lebih repositori lain, publik dan belum dipoles",
    "home.archive.body":
      "Eksperimen rantai pasca-kuantum, sistem tangki air untuk perusahaan daerah, editor yang dibangun ulang di browser, dan satu gim browser yang saya buat untuk mengingat rasanya membangun tanpa syarat kepatuhan.",
    "home.archive.cta": "Buka arsip",

    "home.close.eyebrow": "Terbuka untuk",
    "home.close.title": "Pekerjaan yang layak dibubuhi nama saya.",
    "home.close.body":
      "Kolaborasi di infrastruktur agentik, pekerjaan Solana, atau apa pun yang bagian sulitnya adalah soal pertanggungjawaban. Juga fotografi, dan apa pun yang berkaitan dengan membangun komunitas dari nol.",

    "lang.label": "Bahasa",
  },
} as const;

export type Key = keyof (typeof dict)["en"];
