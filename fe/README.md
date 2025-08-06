src/
├── assets/       # Untuk gambar, ikon, font
├── components/   # Untuk komponen KECIL yang bisa dipakai ulang (Button, Card, Input)
├── pages/        # Untuk komponen HALAMAN UTUH (HomePage, AboutPage, PostsPage)
├── services/     # Untuk logika API (file api.js yang kita bahas sebelumnya)
├── utils/        # (Opsional) Untuk fungsi bantuan (misal: format tanggal)
└── App.jsx       # Pengatur rute utama
└── main.jsx
└── index.css


| Bagian                       | Animasi                                    |
| ---------------------------- | ------------------------------------------ |
| `Hero`, `AboutSection`       | `fade-up`                                  |
| `ProjectsSection`            | `zoom-in` *(agar terlihat lebih menonjol)* |
| `DivisionSection`, `Gallery` | `fade-up`                                  |
| `BlogSection`, `FaqSection`  | `slide-up`                                 |
| Tombol atau CTA              | `zoom-in` atau `fade` dengan delay         |


data-aos="fade-up"
data-aos-delay="100"
data-aos-duration="800"
data-aos-offset="150"
