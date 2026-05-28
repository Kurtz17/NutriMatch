# NutriMatch

NutriMatch adalah prototype aplikasi rekomendasi meal plan yang membantu pengguna menyusun rencana makan berdasarkan kebutuhan nutrisi pribadi dan alergi makanan. Aplikasi ini dirancang untuk memberikan pengalaman yang lebih aman, personal, dan mudah dipahami ketika pengguna ingin mengatur pola makan harian.

## Latar Belakang

Banyak orang ingin menjaga pola makan, tetapi sering kesulitan menentukan makanan yang sesuai dengan kebutuhan tubuh mereka. Kebutuhan kalori setiap orang berbeda, tergantung usia, jenis kelamin, tinggi badan, berat badan, aktivitas harian, dan tujuan diet.

Di sisi lain, pengguna dengan alergi makanan membutuhkan perhatian tambahan. Rekomendasi makanan yang tidak mempertimbangkan alergi dapat berisiko bagi kesehatan. Karena itu, NutriMatch dibuat untuk menggabungkan kebutuhan nutrisi dan keamanan alergi dalam satu alur aplikasi.

## Tujuan Project

NutriMatch bertujuan untuk:

- Membantu pengguna membuat profil nutrisi pribadi.
- Menghitung kebutuhan energi seperti BMR, TDEE, dan target kalori harian.
- Memberikan rekomendasi meal plan yang menyesuaikan tujuan diet pengguna.
- Menampilkan informasi alergi agar rekomendasi makanan lebih aman.
- Menyajikan insight nutrisi dengan tampilan yang sederhana dan mudah dipahami.

## Konsep Aplikasi

NutriMatch bekerja dengan mengumpulkan informasi dasar pengguna, seperti data tubuh, aktivitas, tujuan diet, dan alergi. Dari data tersebut, aplikasi menyimpan profil pengguna, menghitung ringkasan kebutuhan nutrisi, dan membuat rekomendasi meal plan mingguan melalui API aplikasi.

## Alur Pengguna

1. Pengguna membuka aplikasi dan melihat informasi singkat mengenai NutriMatch.
2. Pengguna melakukan register atau login.
3. Pengguna mengisi onboarding profile, termasuk data personal, body profile, activity level, diet goal, dan alergi makanan.
4. Aplikasi menampilkan dashboard berisi ringkasan kebutuhan nutrisi pengguna.
5. Pengguna dapat melihat rekomendasi 7-day meal plan.
6. Pengguna dapat membuka detail makanan untuk melihat kalori, makro nutrisi, bahan makanan, dan analisis alergi.
7. Pengguna dapat mengubah data profil melalui halaman profile.

## Fitur Utama

### Personalized Nutrition Profile

Pengguna dapat mengisi data seperti nama, usia, gender, tinggi badan, berat badan, tingkat aktivitas, dan tujuan diet. Data ini menjadi dasar untuk menentukan kebutuhan nutrisi pengguna.

### Nutrition Summary

Aplikasi menampilkan ringkasan nutrisi seperti:

- BMR atau Basal Metabolic Rate.
- TDEE atau Total Daily Energy Expenditure.
- Target kalori harian.
- Distribusi makro nutrisi seperti protein, karbohidrat, dan lemak.

### Allergy-Aware Meal Planning

NutriMatch mempertimbangkan alergi makanan yang dipilih pengguna. Meal plan ditampilkan dengan konteks keamanan alergi agar pengguna lebih mudah memahami apakah makanan tersebut sesuai dengan kondisi mereka.

### 7-Day Meal Plan

Aplikasi menyediakan tampilan rekomendasi makanan selama tujuh hari. Setiap hari memiliki beberapa meal option, seperti breakfast, lunch, dinner, dan snack.

### Meal Detail

Setiap makanan memiliki detail berupa:

- Nama makanan.
- Jenis makanan.
- Kalori.
- Protein, karbohidrat, dan lemak.
- Daftar bahan makanan.
- Analisis alergi.
- Alasan mengapa makanan tersebut sesuai dengan profil pengguna.

### AI Nutrition Insight

Dashboard menampilkan insight nutrisi dari profil tersimpan, seperti target kalori, BMR, TDEE, dan jumlah filter alergi aktif agar rekomendasi lebih mudah dipahami pengguna.

## Halaman Aplikasi

- Landing page: memperkenalkan NutriMatch dan manfaat utamanya.
- Login page: halaman masuk pengguna.
- Register page: halaman pembuatan akun.
- Onboarding page: halaman pengisian profil awal.
- Dashboard page: ringkasan nutrisi dan status alergi.
- Meal plan page: rekomendasi meal plan mingguan.
- Profile page: halaman untuk melihat dan mengubah data pengguna.
