# Ready-to-Use Data Science Dataset

Folder ini berisi dataset final dari tim Data Science yang sudah siap dipakai oleh tim AI Engineer dan Fullstack.

## File Utama

| File | Keterangan |
|---|---|
| `train_ready_dataset.csv` | Dataset makanan final berisi nutrisi per 100g, label alergen multi-label, confidence, dan status merge. |
| `user_profile_features_schema.csv` | Schema fitur profil pengguna untuk perhitungan BMR/TDEE, target kalori, dan target makro. |
| `food_master_standardized.csv` | Food master bersih dari Orang A sebelum digabung dengan label alergen. |
| `merge_summary.csv` | Ringkasan hasil merge Orang A + Orang B. |
| `merge_metadata.json` | Metadata input/output proses merge. |
| `feature_enrichment_summary.csv` | Ringkasan distribusi kategori makanan, bahan dasar, dan waktu makan. |
| `feature_enrichment_metadata.json` | Metadata rule enrichment fitur konteks makanan. |

## Kolom Penting `train_ready_dataset.csv`

- Identitas makanan: `food_id`, `food_name`, `food_name_clean`
- Nutrisi: `calories_100g`, `protein_100g`, `fat_100g`, `carbohydrate_100g`
- Label alergen: `contains_gluten`, `contains_dairy`, `contains_nuts`, `contains_peanut`, `contains_seafood`, `contains_egg`, `contains_soy`, `contains_celery`, `contains_mustard`, `contains_sesame`, `contains_sulfite`, `contains_other`, `contains_unknown`
- Kualitas label: `confidence`, `allergen_sources`, `label_sources`, `allergen_match_count`, `merge_status`
- Konteks makanan: `food_category`, `base_ingredient`, `suitable_breakfast`, `suitable_lunch`, `suitable_dinner`, `meal_time_tags`, `primary_meal_time`

## Fitur Konteks Makanan

Fitur konteks ditambahkan agar rekomendasi tidak hanya memilih makanan dengan skor gizi tertinggi yang sama terus-menerus. AI Engineer dapat memakai:

- `food_category` untuk diversifikasi jenis makanan, misalnya `berkuah`, `gorengan`, `sayuran`, `lauk_hewani`, `lauk_nabati`, `buah`, dan lainnya.
- `base_ingredient` untuk variasi bahan dasar, misalnya `ayam`, `sapi`, `ikan`, `telur`, `kedelai`, `beras`, `umbi`, dan lainnya.
- `suitable_breakfast`, `suitable_lunch`, `suitable_dinner` sebagai filter multilabel waktu makan.
- `primary_meal_time` sebagai kelas utama jika model/API butuh satu label saja.

## Catatan Keamanan Alergi

Jika `contains_unknown=True`, makanan tersebut belum punya bukti label alergen yang cukup. Untuk mode conservative, makanan seperti ini sebaiknya tidak direkomendasikan kepada pengguna yang memiliki alergi kritis.

## Ringkasan Merge

```text
food_master_rows      : 1332
train_ready_rows      : 1332
exact_name_rows       : 258
keyword_fallback_rows : 3
not_matched_rows      : 1071
conservative_unknown  : True
```
