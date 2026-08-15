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
      "Twenty-four products shipped this year, and the same question sits under every one of them: after the machine acts, can a person still check what happened? Most of my work draws that line and then makes it inspectable by someone who has no reason to trust me.",
    "home.cta.work": "See the work",
    "home.cta.long": "Read the long version",

    "home.selected.eyebrow": "Selected work",
    "home.selected.title": "Six of the twenty-four",
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

    "work.eyebrow": "Twenty-four deployments",
    "work.title": "Everything with a live URL",
    "work.lede":
      "Each of these is deployed and reachable. Where something runs on Solana devnet it says devnet, and where it is a prototype it says prototype — the distinction matters more than the headline does. Screenshots are real captures, not mockups.",

    "journey.eyebrow": "2010 — now",
    "journey.title": "Sixteen years of the same habit",
    "journey.lede":
      "It looks like four unrelated careers on paper — esports, photography, NFT art, infrastructure engineering. It is one thing repeated. Find a group of people with nothing built for them, and build them something. The medium changed; the reflex did not.",
    "journey.note":
      "Every entry below names where it is publicly stated, so none of it has to be taken on trust.",

    "archive.eyebrow": "Archive",
    "archive.title": "The repositories behind the products",
    "archive.lede":
      "There are {repos} public repositories on the account and only {deployed} of them have a polished front door. These are the ones from the other pile that are worth pointing at — some because the engineering underneath is the interesting part, some because they solve a problem in the city I actually live in.",
    "archive.index": "Complete index",

    "sources.eyebrow": "Checked 14 August 2026",
    "sources.title": "Every claim, and where it came from",
    "sources.lede":
      "A portfolio is a document written by the person it flatters. This page exists so none of it has to be taken on faith: {fields} fields, each traced to a public source and to the page that renders it. Open the source, compare, and disagree if it does not match.",
    "sources.note":
      "It also records the {omitted} things a source contains that this site deliberately does not show, because an honest map has to include what was left off it.",

    "photo.eyebrow": "Since {date}",
    "photo.title": "A frame a day, for over a year",
    "photo.lede":
      "Instagram lists me as a photographer before it lists anything else, and for a long time this site did not show a single frame. That was a misrepresentation by omission, so here it is.",
    "photo.body":
      "Every one of these was minted on Tezos on the day it was taken, which means the date is not a claim I am making now about work I did then — it is a timestamp somebody else's node recorded. The discipline is the interesting part rather than any single image: {days} distinct days carry a publication.",
    "photo.provenance": "Provenance",

    "about.eyebrow": "About",
    "about.experience": "Experience",
    "about.education": "Education",
    "about.certifications": "Certifications",
    "about.skills": "What I work in",
    "about.elsewhere": "Elsewhere",

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
      "Dua puluh empat produk rilis tahun ini, dan satu pertanyaan yang sama ada di bawah semuanya: setelah mesin bertindak, apakah manusia masih bisa memeriksa apa yang terjadi? Sebagian besar kerja saya menarik garis itu, lalu membuatnya bisa diperiksa oleh orang yang tidak punya alasan untuk percaya pada saya.",
    "home.cta.work": "Lihat karyanya",
    "home.cta.long": "Baca versi panjangnya",

    "home.selected.eyebrow": "Karya pilihan",
    "home.selected.title": "Enam dari dua puluh empat",
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

    "work.eyebrow": "Dua puluh empat rilis",
    "work.title": "Semua yang punya URL aktif",
    "work.lede":
      "Semua ini sudah ter-deploy dan bisa diakses. Yang berjalan di Solana devnet ditulis devnet, dan yang masih prototipe ditulis prototipe — perbedaan itu lebih penting daripada judulnya. Tangkapan layarnya nyata, bukan mockup.",

    "journey.eyebrow": "2010 — sekarang",
    "journey.title": "Enam belas tahun dengan kebiasaan yang sama",
    "journey.lede":
      "Di atas kertas ini tampak seperti empat karier yang tidak berhubungan — esport, fotografi, karya NFT, rekayasa infrastruktur. Sebenarnya satu hal yang diulang. Temukan sekelompok orang yang belum ada yang membangunkan apa pun untuk mereka, lalu bangunkan sesuatu. Mediumnya berganti; refleksnya tidak.",
    "journey.note":
      "Setiap entri di bawah menyebut di mana hal itu dinyatakan secara publik, jadi tidak ada yang perlu ditelan mentah-mentah.",

    "archive.eyebrow": "Arsip",
    "archive.title": "Repositori di balik produk-produk itu",
    "archive.lede":
      "Ada {repos} repositori publik di akun ini dan hanya {deployed} yang punya pintu depan yang rapi. Yang di bawah ini diambil dari tumpukan sisanya karena memang layak ditunjuk — sebagian karena bagian tekniknya yang menarik, sebagian karena menyelesaikan persoalan nyata di kota tempat saya tinggal.",
    "archive.index": "Indeks lengkap",

    "sources.eyebrow": "Diperiksa 14 Agustus 2026",
    "sources.title": "Setiap klaim, dan dari mana asalnya",
    "sources.lede":
      "Portofolio adalah dokumen yang ditulis oleh orang yang diuntungkannya. Halaman ini ada supaya tidak ada satu pun bagiannya yang perlu dipercaya begitu saja: {fields} bidang data, masing-masing dilacak ke sumber publiknya dan ke halaman yang menampilkannya. Buka sumbernya, bandingkan, dan bantah kalau tidak cocok.",
    "sources.note":
      "Halaman ini juga mencatat {omitted} hal yang ada di sumbernya tetapi sengaja tidak ditampilkan di situs ini, karena peta yang jujur harus memuat juga apa yang tidak dimasukkan.",

    "photo.eyebrow": "Sejak {date}",
    "photo.title": "Satu bingkai sehari, lebih dari setahun",
    "photo.lede":
      "Instagram menyebut saya fotografer sebelum menyebut hal lain apa pun, dan cukup lama situs ini tidak menampilkan satu bingkai pun. Itu keliru karena menghilangkan sesuatu, jadi sekarang ada di sini.",
    "photo.body":
      "Semuanya dicetak di Tezos pada hari foto itu diambil, artinya tanggalnya bukan klaim yang saya buat sekarang tentang kerja saya dulu — itu stempel waktu yang dicatat node milik orang lain. Yang menarik adalah kedisiplinannya, bukan satu gambar tertentu: {days} hari berbeda memuat satu penerbitan.",
    "photo.provenance": "Asal-usul",

    "about.eyebrow": "Tentang",
    "about.experience": "Pengalaman",
    "about.education": "Pendidikan",
    "about.certifications": "Sertifikasi",
    "about.skills": "Bidang yang saya kerjakan",
    "about.elsewhere": "Di tempat lain",

    "lang.label": "Bahasa",
  },
} as const;

export type Key = keyof (typeof dict)["en"];
