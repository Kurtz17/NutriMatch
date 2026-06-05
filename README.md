# NutriMatch

NutriMatch adalah aplikasi web rekomendasi meal plan berbasis AI yang membantu pengguna menyusun rencana makan mingguan berdasarkan kebutuhan nutrisi pribadi dan keamanan alergi makanan. Aplikasi ini menggabungkan perhitungan nutrisi (BMR, TDEE, target kalori), preferensi diet, serta filter alergi untuk menghasilkan rekomendasi makanan yang aman, personal, dan mudah dipahami.

## Tim Pengembang

| ID Cohort | Nama Anggota | Role |
|---|---|---|
| CFCC011D6Y1555 | Muhammad Zahran Muntazar | Full-Stack Web Developer |
| CFCC011D6Y1066 | Alfarisy Nafaro Gymnastiar | Full-Stack Web Developer |
| CDCC011D6Y1666 | Athallah Azhar Aulia Hadi | Data Scientist |
| CDCC237D6Y1336 | Moch Nafis Azhar | Data Scientist |
| CACC011D6Y0879 | Hamud Abdul Aziz | AI Engineer |
| CACC011D6Y2553 | Dzikri Bassyril Mu'Minin | AI Engineer |

## Tautan Model ML dan Dashboard

| Tautan | Keterangan |
|---|---|
| [Dashboard Interaktif (Streamlit)](https://cc26-dashbpard-interaktif-nutrimatch.streamlit.app/) | Dashboard analisis data nutrisi dan visualisasi dataset |
| [Model AI (Google Drive)](https://drive.google.com/drive/u/0/folders/1vayBijae542zwS2FVSUJq7_lh77N1p9e) | Folder berisi model Machine Learning yang digunakan dalam aplikasi |

## Latar Belakang

Banyak orang ingin menjaga pola makan, tetapi sering kesulitan menentukan makanan yang sesuai dengan kebutuhan tubuh mereka. Kebutuhan kalori setiap orang berbeda-beda tergantung usia, jenis kelamin, tinggi badan, berat badan, tingkat aktivitas harian, dan tujuan diet.

Di sisi lain, pengguna dengan alergi makanan membutuhkan perhatian tambahan. Rekomendasi makanan yang tidak mempertimbangkan alergi dapat berisiko bagi kesehatan. NutriMatch hadir untuk menggabungkan kebutuhan nutrisi dan keamanan alergi dalam satu alur aplikasi yang terintegrasi.

## Tujuan Proyek

- Membantu pengguna membuat profil nutrisi pribadi secara lengkap.
- Menghitung kebutuhan energi harian (BMR, TDEE, target kalori) berdasarkan data profil.
- Memberikan rekomendasi meal plan 7 hari yang disesuaikan dengan tujuan diet pengguna.
- Memfilter rekomendasi makanan berdasarkan alergi yang dimiliki pengguna.
- Menyajikan insight nutrisi dan analisis keamanan alergi dengan tampilan yang informatif.

## Fitur Utama

### Personalized Nutrition Profile
Pengguna mengisi data seperti nama, usia, gender, tinggi badan, berat badan, tingkat aktivitas, dan tujuan diet melalui proses onboarding terarah. Data ini menjadi dasar seluruh perhitungan dan rekomendasi.

### Nutrition Summary
Aplikasi menampilkan ringkasan nutrisi yang meliputi:
- BMR (Basal Metabolic Rate)
- TDEE (Total Daily Energy Expenditure)
- Target kalori harian
- Distribusi makro nutrisi (protein, karbohidrat, lemak) dalam bentuk persentase dan grafik

### Allergy-Aware Meal Planning
NutriMatch mempertimbangkan alergi makanan yang dipilih pengguna. Seluruh rekomendasi meal plan difilter secara ketat sehingga makanan yang mengandung alergen pengguna tidak akan ditampilkan.

### 7-Day AI Meal Plan
Aplikasi menghasilkan rekomendasi makanan selama 7 hari melalui AI. Setiap hari memiliki pembagian berdasarkan waktu makan: Breakfast, Lunch, Dinner, dan Snack. Pengguna dapat melihat total kalori per hari serta detail nutrisi per makanan.

### Meal Detail dan AI Insight
Setiap makanan yang direkomendasikan dilengkapi dengan:
- Informasi kalori, protein, karbohidrat, dan lemak
- Daftar bahan makanan (ingredients)
- Analisis keamanan alergi
- Alasan dari AI mengapa makanan tersebut cocok dengan profil pengguna

### Halal Filter
Pengguna dapat mengaktifkan filter halal saat generate meal plan untuk memastikan rekomendasi sesuai preferensi.

## Alur Pengguna

1. Pengguna mengakses landing page dan melihat informasi singkat mengenai NutriMatch.
2. Pengguna melakukan registrasi akun baru atau login dengan akun yang sudah ada (termasuk opsi Google OAuth).
3. Pengguna mengisi onboarding profile yang terdiri dari 4 tahap: data personal, body profile, nutrition goal, dan pemilihan alergi.
4. Aplikasi menampilkan dashboard berisi ringkasan kebutuhan nutrisi, distribusi makro, status alergi, dan preview rekomendasi.
5. Pengguna membuka halaman Meal Plan dan melakukan generate untuk mendapatkan rekomendasi 7 hari.
6. Pengguna dapat menelusuri detail setiap makanan untuk melihat informasi nutrisi lengkap dan analisis alergi.
7. Pengguna dapat mengubah data profil dan preferensi rekomendasi kapan saja melalui halaman Profile.

## Halaman Aplikasi

| Halaman | Deskripsi |
|---|---|
| Landing Page | Memperkenalkan NutriMatch, fitur utama, dan alur penggunaan |
| Login | Halaman masuk pengguna dengan email/password atau Google OAuth |
| Register | Halaman pembuatan akun baru |
| Onboarding | Proses pengisian profil awal (4 tahap: Personal, Body, Goal, Allergies) |
| Dashboard | Ringkasan nutrisi, distribusi makro, status alergi, dan preview rekomendasi |
| Meal Plan | Rekomendasi meal plan mingguan dengan pembagian per waktu makan |
| Profile | Halaman untuk melihat dan mengubah data profil serta preferensi rekomendasi |

## Tech Stack

| Kategori | Teknologi |
|---|---|
| Framework | Next.js (App Router) |
| Bahasa | TypeScript |
| Styling | Tailwind CSS |
| Database | PostgreSQL (via Supabase) |
| ORM | Prisma |
| Autentikasi | Supabase Auth (email/password, Google OAuth) |
| AI/ML | Model Machine Learning untuk rekomendasi makanan |
| Deployment | Vercel |

## Petunjuk Setup Environment

Untuk menyiapkan lingkungan kerja di lokal, ikuti langkah-langkah berikut:

### Prasyarat
- Node.js versi 18.x atau lebih baru
- npm (sudah termasuk dalam instalasi Node.js)
- Akun Supabase untuk konfigurasi database dan autentikasi

### Langkah Instalasi

1. Clone repository:
   ```bash
   git clone https://github.com/Kurtz17/NutriMatch
   cd NutriMatch
   ```

2. Buat file `.env` di root proyek dan isi dengan environment variables yang dibutuhkan:
   ```
   DATABASE_URL=<url-database-postgresql>
   DIRECT_URL=<url-direct-database>
   NEXT_PUBLIC_SUPABASE_URL=<url-supabase>
   NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon-key-supabase>
   ```

3. Instal semua dependensi:
   ```bash
   npm install
   ```

4. Generate Prisma client dan sinkronkan skema database:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

## Cara Menjalankan Aplikasi

Setelah setup environment selesai, jalankan development server:

```bash
npm run dev
```

Buka browser dan akses `http://localhost:3000` untuk menggunakan aplikasi.

Untuk build production:

```bash
npm run build
npm start
```
