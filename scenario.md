# Skenario 1 - Polosan
## Body Req
```json
{
  "target_macros": {
    "calories": 1762,
    "protein_g": 110,
    "fat_g": 59,
    "carb_g": 198
  },
  "allergies": {
    "gluten": 0,
    "dairy": 0,
    "nuts": 0,
    "peanut": 0,
    "seafood": 0,
    "egg": 0,
    "soy": 0,
    "celery": 0
  },
  "breakfast_prefs": {
    "food_category": [],
    "main_ingredients": []
  },
  "lunch_prefs": {
    "food_category": [],
    "main_ingredients": []
  },
  "dinner_prefs": {
    "food_category": [],
    "main_ingredients": []
  },
  "user_text": "",
  "start_date": "2026-05-28",
  "days": 7,
  "variety_penalty": 0.15,
  "halal_only": false
}
```
## Response
```json
{
  "daily_plan": [
    {
      "meal_name": "Hari 1 - Kamis - Sarapan (25%)",
      "target_calories": 440.5,
      "recommendations": [
        {
          "food_id": "FD0397",
          "food_name": "[Camilan/Roti] noga kacang tanah",
          "image_url": "https://t-2.tstatic.net/priangan/foto/bank/images/Noga-Suuk.jpg",
          "pairing_group": "sweet_snack",
          "pairing_role": "sweet_snack",
          "calories_100g": 600,
          "ideal_grams": 47.72083333333333,
          "ideal_calories": 286.325,
          "ideal_protein": 6.680916666666667,
          "ideal_fat": 19.899587500000003,
          "ideal_carb": 20.042749999999998,
          "match_score": 2.451378881931305
        },
        {
          "food_id": "FD0277",
          "food_name": "[Pendamping] keju kacang tanah",
          "image_url": "https://img.freepik.com/free-photo/cheddar-cheese-dark-wooden-surface_1150-41937.jpg?w=1060&t=st=1684238932~exp=1684239532~hmac=578424a4cc6bde6d195628ec281e5daa943e767e0e6d813354904914dc34af51",
          "pairing_group": "dairy_pairing",
          "pairing_role": "dairy",
          "calories_100g": 590,
          "ideal_grams": 30,
          "ideal_calories": 177,
          "ideal_protein": 8.100000000000001,
          "ideal_fat": 14.7,
          "ideal_carb": 6.27,
          "match_score": 0.9515949487686157
        }
      ]
    },
    {
      "meal_name": "Hari 1 - Kamis - Makan Siang (40%)",
      "target_calories": 704.8000000000001,
      "recommendations": [
        {
          "food_id": "FD0392",
          "food_name": "[Karbo] nasi jagung",
          "image_url": "https://tokohinspiratif.id/wp-content/uploads/2019/03/WhatsApp-Image-2019-03-25-at-16.10.19-1280x640.jpeg",
          "pairing_group": "rice_noodle_staple",
          "pairing_role": "staple",
          "calories_100g": 357,
          "ideal_grams": 88.84033613445379,
          "ideal_calories": 317.16,
          "ideal_protein": 7.817949579831935,
          "ideal_fat": 0.44420168067226895,
          "ideal_carb": 70.62806722689076,
          "match_score": 3.366125702857971
        },
        {
          "food_id": "FD0169",
          "food_name": "[Lauk] ikan asin pepetek goreng",
          "image_url": "https://img-global.cpcdn.com/recipes/63c1692184e591d6/1200x630cq70/photo.jpg",
          "pairing_group": "traditional_protein",
          "pairing_role": "protein",
          "calories_100g": 652,
          "ideal_grams": 50,
          "ideal_calories": 326,
          "ideal_protein": 20.2,
          "ideal_fat": 27.149999999999995,
          "ideal_carb": 0,
          "match_score": 0.9723965525627136
        },
        {
          "food_id": "FD0213",
          "food_name": "[Sayur] jamur kuping kering",
          "image_url": "https://asset.kompas.com/crops/3caJpamNwFqn62cq9Tf8ZRPsIh4=/0x41:1000x707/750x500/data/photo/2021/12/06/61ad642aaebd0.jpg",
          "pairing_group": "cooked_or_ready_vegetable",
          "pairing_role": "vegetable",
          "calories_100g": 294,
          "ideal_grams": 50,
          "ideal_calories": 147,
          "ideal_protein": 8,
          "ideal_fat": 0.45000000000000007,
          "ideal_carb": 32.3,
          "match_score": 0.831725537776947
        }
      ]
    },
    {
      "meal_name": "Hari 1 - Kamis - Makan Malam (35%)",
      "target_calories": 616.6999999999999,
      "recommendations": [
        {
          "food_id": "FD0593",
          "food_name": "[Karbo] nasi putih",
          "image_url": "https://tokohinspiratif.id/wp-content/uploads/2019/03/WhatsApp-Image-2019-03-25-at-16.10.19-1280x640.jpeg",
          "pairing_group": "rice_noodle_staple",
          "pairing_role": "staple",
          "calories_100g": 357,
          "ideal_grams": 77.73529411764706,
          "ideal_calories": 277.515,
          "ideal_protein": 6.840705882352942,
          "ideal_fat": 0.3886764705882353,
          "ideal_carb": 61.799558823529416,
          "match_score": 3.0148921251296996
        },
        {
          "food_id": "FD0118",
          "food_name": "[Lauk] dendeng mujahir goreng",
          "image_url": "https://img-global.cpcdn.com/recipes/c49ebd05c391ae54/680x482cq70/dendeng-mujair-foto-resep-utama.jpg",
          "pairing_group": "traditional_protein",
          "pairing_role": "protein",
          "calories_100g": 598,
          "ideal_grams": 50,
          "ideal_calories": 299,
          "ideal_protein": 37.15,
          "ideal_fat": 13.449999999999998,
          "ideal_carb": 4.6,
          "match_score": 0.9682889580726624
        },
        {
          "food_id": "FD0566",
          "food_name": "[Sayur] tempe sayur",
          "image_url": "https://fibercreme.com/wp-content/uploads/2021/05/tempe-lombok-ijo-santan_.jpg",
          "pairing_group": "cooked_or_ready_vegetable",
          "pairing_role": "vegetable",
          "calories_100g": 240,
          "ideal_grams": 50,
          "ideal_calories": 120,
          "ideal_protein": 3,
          "ideal_fat": 1.35,
          "ideal_carb": 24.65,
          "match_score": 0.7671626210212708
        }
      ]
    },
    {
      "meal_name": "Hari 2 - Jumat - Sarapan (25%)",
      "target_calories": 440.5,
      "recommendations": [
        {
          "food_id": "FD0321",
          "food_name": "[Camilan/Roti] kue kelapa",
          "image_url": "https://assets.suaramerdeka.com/crop/0x0:0x0/750x500/webp/photo/2023/01/03/3184254010.png",
          "pairing_group": "sweet_snack",
          "pairing_role": "sweet_snack",
          "calories_100g": 591,
          "ideal_grams": 48.447546531302876,
          "ideal_calories": 286.325,
          "ideal_protein": 2.713062605752961,
          "ideal_fat": 20.39641708967851,
          "ideal_carb": 23.012584602368864,
          "match_score": 2.4477989077568054
        },
        {
          "food_id": "FD0100",
          "food_name": "[Pendamping] coklat susu batang",
          "image_url": "https://www.nyonyor.com/wp-content/uploads/2018/11/Harga-Coklat-Batangan-Terbaru-540x350.jpg",
          "pairing_group": "dairy_pairing",
          "pairing_role": "dairy",
          "calories_100g": 381,
          "ideal_grams": 40.46587926509186,
          "ideal_calories": 154.17499999999998,
          "ideal_protein": 3.641929133858267,
          "ideal_fat": 14.163057742782149,
          "ideal_carb": 21.689711286089235,
          "match_score": 0.8961499929428101
        }
      ]
    },
    {
      "meal_name": "Hari 2 - Jumat - Makan Siang (40%)",
      "target_calories": 704.8000000000001,
      "recommendations": [
        {
          "food_id": "FD0593",
          "food_name": "[Karbo] nasi merah",
          "image_url": "https://tokohinspiratif.id/wp-content/uploads/2019/03/WhatsApp-Image-2019-03-25-at-16.10.19-1280x640.jpeg",
          "pairing_group": "rice_noodle_staple",
          "pairing_role": "staple",
          "calories_100g": 357,
          "ideal_grams": 88.84033613445379,
          "ideal_calories": 317.16,
          "ideal_protein": 7.817949579831935,
          "ideal_fat": 0.44420168067226895,
          "ideal_carb": 70.62806722689076,
          "match_score": 3.016125702857971
        },
        {
          "food_id": "FD0181",
          "food_name": "[Lauk] ikan mujair dendeng goreng",
          "image_url": "https://img-global.cpcdn.com/recipes/c49ebd05c391ae54/680x482cq70/dendeng-mujair-foto-resep-utama.jpg",
          "pairing_group": "traditional_protein",
          "pairing_role": "protein",
          "calories_100g": 598,
          "ideal_grams": 50,
          "ideal_calories": 299,
          "ideal_protein": 37.15,
          "ideal_fat": 13.449999999999998,
          "ideal_carb": 4.6,
          "match_score": 0.9696840047836304
        },
        {
          "food_id": "FD0505",
          "food_name": "[Sayur] semur jengkol",
          "image_url": "https://assets.pikiran-rakyat.com/crop/0x135:1080x1215/x/photo/2020/11/25/1187166638.jpg",
          "pairing_group": "cooked_or_ready_vegetable",
          "pairing_role": "vegetable",
          "calories_100g": 192.5,
          "ideal_grams": 54.91948051948052,
          "ideal_calories": 105.72000000000001,
          "ideal_protein": 2.4713766233766234,
          "ideal_fat": 3.2951688311688314,
          "ideal_carb": 16.640602597402598,
          "match_score": 0.7146427035331726
        }
      ]
    },
    {
      "meal_name": "Hari 2 - Jumat - Makan Malam (35%)",
      "target_calories": 616.6999999999999,
      "recommendations": [
        {
          "food_id": "FD0392",
          "food_name": "[Karbo] nasi jagung",
          "image_url": "https://tokohinspiratif.id/wp-content/uploads/2019/03/WhatsApp-Image-2019-03-25-at-16.10.19-1280x640.jpeg",
          "pairing_group": "rice_noodle_staple",
          "pairing_role": "staple",
          "calories_100g": 357,
          "ideal_grams": 77.73529411764706,
          "ideal_calories": 277.515,
          "ideal_protein": 6.840705882352942,
          "ideal_fat": 0.3886764705882353,
          "ideal_carb": 61.799558823529416,
          "match_score": 2.8648921251296997
        },
        {
          "food_id": "FD0237",
          "food_name": "[Lauk] kacang kedelai goreng",
          "image_url": "https://img-global.cpcdn.com/recipes/e4e2747431572f24/680x482cq70/kacang-kedelai-goreng-foto-resep-utama.jpg",
          "pairing_group": "traditional_protein",
          "pairing_role": "protein",
          "calories_100g": 521,
          "ideal_grams": 50,
          "ideal_calories": 260.5,
          "ideal_protein": 16.1,
          "ideal_fat": 18.85,
          "ideal_carb": 11.45,
          "match_score": 0.9479821920394897
        },
        {
          "food_id": "FD0203",
          "food_name": "[Sayur] jagung sayur tumis",
          "image_url": "https://ibusayur.my.id/wp-content/uploads/2022/08/ibusayur.my.id-sayur-nangka-51661b26-eb56-4072-8613-65cb6b4c2ecb.png",
          "pairing_group": "cooked_or_ready_vegetable",
          "pairing_role": "vegetable",
          "calories_100g": 148.9,
          "ideal_grams": 62.12558764271322,
          "ideal_calories": 92.505,
          "ideal_protein": 6.461061114842176,
          "ideal_fat": 6.461061114842176,
          "ideal_carb": 12.487243116185358,
          "match_score": 0.6888877153396606
        }
      ]
    },
    {
      "meal_name": "Hari 3 - Sabtu - Sarapan (25%)",
      "target_calories": 440.5,
      "recommendations": [
        {
          "food_id": "FD0333",
          "food_name": "[Camilan/Roti] kue tambang",
          "image_url": "https://asset.kompas.com/crops/x2yGurVUxpP-COxvvOjVx2P7lL0=/100x67:900x600/750x500/data/photo/2022/04/14/62578f6fbc8b8.jpg",
          "pairing_group": "sweet_snack",
          "pairing_role": "sweet_snack",
          "calories_100g": 512,
          "ideal_grams": 55.9228515625,
          "ideal_calories": 286.325,
          "ideal_protein": 14.53994140625,
          "ideal_fat": 14.53994140625,
          "ideal_carb": 33.77740234375,
          "match_score": 2.440267264842987
        },
        {
          "food_id": "FD0539",
          "food_name": "[Pendamping] susu kental manis",
          "image_url": "https://asset.kompas.com/crops/C220cRbRPu0EoI8SMHWr0HeFGuU=/0x0:750x500/750x500/data/photo/2022/06/03/6299dc0edf868.jpg",
          "pairing_group": "dairy_pairing",
          "pairing_role": "dairy",
          "calories_100g": 336,
          "ideal_grams": 45.885416666666664,
          "ideal_calories": 154.17499999999998,
          "ideal_protein": 3.762604166666666,
          "ideal_fat": 4.588541666666667,
          "ideal_carb": 25.236979166666668,
          "match_score": 0.8438206315040588
        }
      ]
    },
    {
      "meal_name": "Hari 3 - Sabtu - Makan Siang (40%)",
      "target_calories": 704.8000000000001,
      "recommendations": [
        {
          "food_id": "FD0392",
          "food_name": "[Karbo] nasi jagung",
          "image_url": "https://tokohinspiratif.id/wp-content/uploads/2019/03/WhatsApp-Image-2019-03-25-at-16.10.19-1280x640.jpeg",
          "pairing_group": "rice_noodle_staple",
          "pairing_role": "staple",
          "calories_100g": 357,
          "ideal_grams": 88.84033613445379,
          "ideal_calories": 317.16,
          "ideal_protein": 7.817949579831935,
          "ideal_fat": 0.44420168067226895,
          "ideal_carb": 70.62806722689076,
          "match_score": 2.866125702857971
        },
        {
          "food_id": "FD0002",
          "food_name": "[Lauk] abon haruwan",
          "image_url": "https://img-global.cpcdn.com/recipes/cbf330fbd1ba6316/1200x630cq70/photo.jpg",
          "pairing_group": "traditional_protein",
          "pairing_role": "protein",
          "calories_100g": 513,
          "ideal_grams": 54.9551656920078,
          "ideal_calories": 281.92,
          "ideal_protein": 13.024374269005849,
          "ideal_fat": 20.333411306042887,
          "ideal_carb": 11.705450292397662,
          "match_score": 0.9417112469673157
        },
        {
          "food_id": "FD0495",
          "food_name": "[Sayur] sayur garu",
          "image_url": "https://image.akurat.co/images/uploads/images/akurat_20181220020604_MYQ3rr.jpg",
          "pairing_group": "cooked_or_ready_vegetable",
          "pairing_role": "vegetable",
          "calories_100g": 178,
          "ideal_grams": 59.3932584269663,
          "ideal_calories": 105.72000000000001,
          "ideal_protein": 1.5442247191011238,
          "ideal_fat": 8.255662921348316,
          "ideal_carb": 6.295685393258427,
          "match_score": 0.6866510510444641
        }
      ]
    },
    {
      "meal_name": "Hari 3 - Sabtu - Makan Malam (35%)",
      "target_calories": 616.6999999999999,
      "recommendations": [
        {
          "food_id": "FD0392",
          "food_name": "[Karbo] nasi jagung",
          "image_url": "https://tokohinspiratif.id/wp-content/uploads/2019/03/WhatsApp-Image-2019-03-25-at-16.10.19-1280x640.jpeg",
          "pairing_group": "rice_noodle_staple",
          "pairing_role": "staple",
          "calories_100g": 357,
          "ideal_grams": 77.73529411764706,
          "ideal_calories": 277.515,
          "ideal_protein": 6.840705882352942,
          "ideal_fat": 0.3886764705882353,
          "ideal_carb": 61.799558823529416,
          "match_score": 2.8648921251296997
        },
        {
          "food_id": "FD0027",
          "food_name": "[Lauk] ayam usus goreng",
          "image_url": "https://img-global.cpcdn.com/recipes/fa7c9443ce9efcb5/1200x630cq70/photo.jpg",
          "pairing_group": "traditional_protein",
          "pairing_role": "protein",
          "calories_100g": 473,
          "ideal_grams": 52.152219873150095,
          "ideal_calories": 246.67999999999998,
          "ideal_protein": 23.572803382663842,
          "ideal_fat": 13.716033826638476,
          "ideal_carb": 7.249158562367864,
          "match_score": 0.9332248568534851
        },
        {
          "food_id": "FD0583",
          "food_name": "[Sayur] ubi jalar sayur",
          "image_url": "https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/jawapos/2022/11/daun-ubi-jalar.jpg",
          "pairing_group": "cooked_or_ready_vegetable",
          "pairing_role": "vegetable",
          "calories_100g": 184,
          "ideal_grams": 50.27445652173912,
          "ideal_calories": 92.50499999999998,
          "ideal_protein": 0.7038423913043476,
          "ideal_fat": 0.15082336956521736,
          "ideal_carb": 11.311752717391302,
          "match_score": 0.6859257817268372
        }
      ]
    },
    {
      "meal_name": "Hari 4 - Minggu - Sarapan (25%)",
      "target_calories": 440.5,
      "recommendations": [
        {
          "food_id": "FD0031",
          "food_name": "[Camilan/Roti] bagea kenari asin",
          "image_url": "https://images.tokopedia.net/img/cache/700/hDjmkQ/2021/10/4/73219f10-0149-4af7-b1ca-c51d90ca767b.jpg",
          "pairing_group": "sweet_snack",
          "pairing_role": "sweet_snack",
          "calories_100g": 529,
          "ideal_grams": 54.12570888468808,
          "ideal_calories": 286.32499999999993,
          "ideal_protein": 1.7320226843100186,
          "ideal_fat": 15.750581285444234,
          "ideal_carb": 34.42395085066162,
          "match_score": 2.432470142841339
        },
        {
          "food_id": "FD0276",
          "food_name": "[Pendamping] keju",
          "image_url": "https://cdns.klimg.com/merdeka.com/i/w/news/2020/05/08/1175035/content_images/670x335/20200508114326-1-ilustrasi-keju-008-destriyana.jpg",
          "pairing_group": "dairy_pairing",
          "pairing_role": "dairy",
          "calories_100g": 326,
          "ideal_grams": 47.29294478527607,
          "ideal_calories": 154.17499999999998,
          "ideal_protein": 10.782791411042945,
          "ideal_fat": 9.600467791411043,
          "ideal_carb": 6.195375766871165,
          "match_score": 0.831823468208313
        }
      ]
    },
    {
      "meal_name": "Hari 4 - Minggu - Makan Siang (40%)",
      "target_calories": 704.8000000000001,
      "recommendations": [
        {
          "food_id": "FD0392",
          "food_name": "[Karbo] nasi jagung",
          "image_url": "https://tokohinspiratif.id/wp-content/uploads/2019/03/WhatsApp-Image-2019-03-25-at-16.10.19-1280x640.jpeg",
          "pairing_group": "rice_noodle_staple",
          "pairing_role": "staple",
          "calories_100g": 357,
          "ideal_grams": 88.84033613445379,
          "ideal_calories": 317.16,
          "ideal_protein": 7.817949579831935,
          "ideal_fat": 0.44420168067226895,
          "ideal_carb": 70.62806722689076,
          "match_score": 2.866125702857971
        },
        {
          "food_id": "FD0381",
          "food_name": "[Lauk] naan maran sapi masakan",
          "image_url": "https://drive.google.com/file/d/1LZOGoU3M3XcPbU5_HaAZ26ybCTbiTXpT/view?usp=sharing",
          "pairing_group": "traditional_protein",
          "pairing_role": "protein",
          "calories_100g": 478,
          "ideal_grams": 58.97907949790795,
          "ideal_calories": 281.92,
          "ideal_protein": 22.58898744769874,
          "ideal_fat": 19.993907949790792,
          "ideal_carb": 3.007933054393305,
          "match_score": 0.9328125715255737
        },
        {
          "food_id": "FD0213",
          "food_name": "[Sayur] jamur kuping kering",
          "image_url": "https://asset.kompas.com/crops/3caJpamNwFqn62cq9Tf8ZRPsIh4=/0x41:1000x707/750x500/data/photo/2021/12/06/61ad642aaebd0.jpg",
          "pairing_group": "cooked_or_ready_vegetable",
          "pairing_role": "vegetable",
          "calories_100g": 294,
          "ideal_grams": 50,
          "ideal_calories": 147,
          "ideal_protein": 8,
          "ideal_fat": 0.45000000000000007,
          "ideal_carb": 32.3,
          "match_score": 0.681725537776947
        }
      ]
    },
    {
      "meal_name": "Hari 4 - Minggu - Makan Malam (35%)",
      "target_calories": 616.6999999999999,
      "recommendations": [
        {
          "food_id": "FD0392",
          "food_name": "[Karbo] nasi jagung",
          "image_url": "https://tokohinspiratif.id/wp-content/uploads/2019/03/WhatsApp-Image-2019-03-25-at-16.10.19-1280x640.jpeg",
          "pairing_group": "rice_noodle_staple",
          "pairing_role": "staple",
          "calories_100g": 357,
          "ideal_grams": 77.73529411764706,
          "ideal_calories": 277.515,
          "ideal_protein": 6.840705882352942,
          "ideal_fat": 0.3886764705882353,
          "ideal_carb": 61.799558823529416,
          "match_score": 2.8648921251296997
        },
        {
          "food_id": "FD0168",
          "food_name": "[Lauk] ikan asin pari goreng",
          "image_url": "https://img-global.cpcdn.com/recipes/Recipe_2015_01_31_12_33_39_810_87c9c03bd7c9a069b268/680x482cq70/ikan-pari-goreng-foto-resep-utama.jpg",
          "pairing_group": "traditional_protein",
          "pairing_role": "protein",
          "calories_100g": 430,
          "ideal_grams": 57.36744186046511,
          "ideal_calories": 246.67999999999995,
          "ideal_protein": 33.387851162790696,
          "ideal_fat": 13.538716279069765,
          "ideal_carb": 0,
          "match_score": 0.9217216968536377
        },
        {
          "food_id": "FD0213",
          "food_name": "[Sayur] jamur kuping kering",
          "image_url": "https://asset.kompas.com/crops/3caJpamNwFqn62cq9Tf8ZRPsIh4=/0x41:1000x707/750x500/data/photo/2021/12/06/61ad642aaebd0.jpg",
          "pairing_group": "cooked_or_ready_vegetable",
          "pairing_role": "vegetable",
          "calories_100g": 294,
          "ideal_grams": 50,
          "ideal_calories": 147,
          "ideal_protein": 8,
          "ideal_fat": 0.45000000000000007,
          "ideal_carb": 32.3,
          "match_score": 0.6807356834411621
        }
      ]
    },
    {
      "meal_name": "Hari 5 - Senin - Sarapan (25%)",
      "target_calories": 440.5,
      "recommendations": [
        {
          "food_id": "FD0032",
          "food_name": "[Camilan/Roti] bagea kenari manis",
          "image_url": "https://indonesiakaya.com/wp-content/uploads/2020/10/1__IMG_0796_CROP_Renyah_gurih_dan_manis_begitulah_kira-kira_gambaran_saat_mencicipi_kue_bagea_khas_Sulawesi_Utara.jpg",
          "pairing_group": "sweet_snack",
          "pairing_role": "sweet_snack",
          "calories_100g": 523,
          "ideal_grams": 54.74665391969407,
          "ideal_calories": 286.325,
          "ideal_protein": 1.7518929254302102,
          "ideal_fat": 15.438556405353726,
          "ideal_carb": 35.147351816443596,
          "match_score": 2.430725336074829
        },
        {
          "food_id": "FD0277",
          "food_name": "[Pendamping] keju kacang tanah",
          "image_url": "https://img.freepik.com/free-photo/cheddar-cheese-dark-wooden-surface_1150-41937.jpg?w=1060&t=st=1684238932~exp=1684239532~hmac=578424a4cc6bde6d195628ec281e5daa943e767e0e6d813354904914dc34af51",
          "pairing_group": "dairy_pairing",
          "pairing_role": "dairy",
          "calories_100g": 590,
          "ideal_grams": 30,
          "ideal_calories": 177,
          "ideal_protein": 8.100000000000001,
          "ideal_fat": 14.7,
          "ideal_carb": 6.27,
          "match_score": 0.8015949487686157
        }
      ]
    },
    {
      "meal_name": "Hari 5 - Senin - Makan Siang (40%)",
      "target_calories": 704.8000000000001,
      "recommendations": [
        {
          "food_id": "FD0392",
          "food_name": "[Karbo] nasi jagung",
          "image_url": "https://tokohinspiratif.id/wp-content/uploads/2019/03/WhatsApp-Image-2019-03-25-at-16.10.19-1280x640.jpeg",
          "pairing_group": "rice_noodle_staple",
          "pairing_role": "staple",
          "calories_100g": 357,
          "ideal_grams": 88.84033613445379,
          "ideal_calories": 317.16,
          "ideal_protein": 7.817949579831935,
          "ideal_fat": 0.44420168067226895,
          "ideal_carb": 70.62806722689076,
          "match_score": 2.866125702857971
        },
        {
          "food_id": "FD0166",
          "food_name": "[Lauk] ikan asin gabus goreng",
          "image_url": "https://images.tokopedia.net/img/cache/700/product-1/2019/7/27/6486945/6486945_99c1b375-e266-42bb-b539-f5731fb74114_960_960.jpg",
          "pairing_group": "traditional_protein",
          "pairing_role": "protein",
          "calories_100g": 456,
          "ideal_grams": 61.824561403508774,
          "ideal_calories": 281.91999999999996,
          "ideal_protein": 28.74842105263158,
          "ideal_fat": 15.08519298245614,
          "ideal_carb": 0,
          "match_score": 0.9215877652168274
        },
        {
          "food_id": "FD0213",
          "food_name": "[Sayur] jamur kuping kering",
          "image_url": "https://asset.kompas.com/crops/3caJpamNwFqn62cq9Tf8ZRPsIh4=/0x41:1000x707/750x500/data/photo/2021/12/06/61ad642aaebd0.jpg",
          "pairing_group": "cooked_or_ready_vegetable",
          "pairing_role": "vegetable",
          "calories_100g": 294,
          "ideal_grams": 50,
          "ideal_calories": 147,
          "ideal_protein": 8,
          "ideal_fat": 0.45000000000000007,
          "ideal_carb": 32.3,
          "match_score": 0.681725537776947
        }
      ]
    },
    {
      "meal_name": "Hari 5 - Senin - Makan Malam (35%)",
      "target_calories": 616.6999999999999,
      "recommendations": [
        {
          "food_id": "FD0392",
          "food_name": "[Karbo] nasi jagung",
          "image_url": "https://tokohinspiratif.id/wp-content/uploads/2019/03/WhatsApp-Image-2019-03-25-at-16.10.19-1280x640.jpeg",
          "pairing_group": "rice_noodle_staple",
          "pairing_role": "staple",
          "calories_100g": 357,
          "ideal_grams": 77.73529411764706,
          "ideal_calories": 277.515,
          "ideal_protein": 6.840705882352942,
          "ideal_fat": 0.3886764705882353,
          "ideal_carb": 61.799558823529416,
          "match_score": 2.8648921251296997
        },
        {
          "food_id": "FD0171",
          "food_name": "[Lauk] ikan asin teri goreng",
          "image_url": "https://img-global.cpcdn.com/recipes/15714e008b15f3e0/680x482cq70/teri-segar-goreng-tanpa-minyak-foto-resep-utama.jpg",
          "pairing_group": "traditional_protein",
          "pairing_role": "protein",
          "calories_100g": 430,
          "ideal_grams": 57.36744186046511,
          "ideal_calories": 246.67999999999995,
          "ideal_protein": 19.160725581395344,
          "ideal_fat": 18.587051162790694,
          "ideal_carb": 0,
          "match_score": 0.9080705642700195
        },
        {
          "food_id": "FD0213",
          "food_name": "[Sayur] jamur kuping kering",
          "image_url": "https://asset.kompas.com/crops/3caJpamNwFqn62cq9Tf8ZRPsIh4=/0x41:1000x707/750x500/data/photo/2021/12/06/61ad642aaebd0.jpg",
          "pairing_group": "cooked_or_ready_vegetable",
          "pairing_role": "vegetable",
          "calories_100g": 294,
          "ideal_grams": 50,
          "ideal_calories": 147,
          "ideal_protein": 8,
          "ideal_fat": 0.45000000000000007,
          "ideal_carb": 32.3,
          "match_score": 0.6807356834411621
        }
      ]
    },
    {
      "meal_name": "Hari 6 - Selasa - Sarapan (25%)",
      "target_calories": 440.5,
      "recommendations": [
        {
          "food_id": "FD0099",
          "food_name": "[Camilan/Roti] coklat pahit batang",
          "image_url": "https://nilaigizi.com/assets/images/produk/produk_1535873875.jpg",
          "pairing_group": "sweet_snack",
          "pairing_role": "sweet_snack",
          "calories_100g": 504,
          "ideal_grams": 56.810515873015866,
          "ideal_calories": 286.325,
          "ideal_protein": 3.1245783730158725,
          "ideal_fat": 30.052762896825396,
          "ideal_carb": 16.588670634920632,
          "match_score": 2.4298349022865295
        },
        {
          "food_id": "FD0277",
          "food_name": "[Pendamping] keju kacang tanah",
          "image_url": "https://img.freepik.com/free-photo/cheddar-cheese-dark-wooden-surface_1150-41937.jpg?w=1060&t=st=1684238932~exp=1684239532~hmac=578424a4cc6bde6d195628ec281e5daa943e767e0e6d813354904914dc34af51",
          "pairing_group": "dairy_pairing",
          "pairing_role": "dairy",
          "calories_100g": 590,
          "ideal_grams": 30,
          "ideal_calories": 177,
          "ideal_protein": 8.100000000000001,
          "ideal_fat": 14.7,
          "ideal_carb": 6.27,
          "match_score": 0.8015949487686157
        }
      ]
    },
    {
      "meal_name": "Hari 6 - Selasa - Makan Siang (40%)",
      "target_calories": 704.8000000000001,
      "recommendations": [
        {
          "food_id": "FD0392",
          "food_name": "[Karbo] nasi jagung",
          "image_url": "https://tokohinspiratif.id/wp-content/uploads/2019/03/WhatsApp-Image-2019-03-25-at-16.10.19-1280x640.jpeg",
          "pairing_group": "rice_noodle_staple",
          "pairing_role": "staple",
          "calories_100g": 357,
          "ideal_grams": 88.84033613445379,
          "ideal_calories": 317.16,
          "ideal_protein": 7.817949579831935,
          "ideal_fat": 0.44420168067226895,
          "ideal_carb": 70.62806722689076,
          "match_score": 2.866125702857971
        },
        {
          "food_id": "FD0182",
          "food_name": "[Lauk] ikan mujair goreng",
          "image_url": "https://kurio-img.kurioapps.com/22/10/07/3521e216-d7b3-498d-a045-95973e196c36.jpg",
          "pairing_group": "traditional_protein",
          "pairing_role": "protein",
          "calories_100g": 416,
          "ideal_grams": 67.76923076923077,
          "ideal_calories": 281.92,
          "ideal_protein": 31.78376923076923,
          "ideal_fat": 16.196846153846153,
          "ideal_carb": 0,
          "match_score": 0.9096342325210571
        },
        {
          "food_id": "FD0213",
          "food_name": "[Sayur] jamur kuping kering",
          "image_url": "https://asset.kompas.com/crops/3caJpamNwFqn62cq9Tf8ZRPsIh4=/0x41:1000x707/750x500/data/photo/2021/12/06/61ad642aaebd0.jpg",
          "pairing_group": "cooked_or_ready_vegetable",
          "pairing_role": "vegetable",
          "calories_100g": 294,
          "ideal_grams": 50,
          "ideal_calories": 147,
          "ideal_protein": 8,
          "ideal_fat": 0.45000000000000007,
          "ideal_carb": 32.3,
          "match_score": 0.681725537776947
        }
      ]
    },
    {
      "meal_name": "Hari 6 - Selasa - Makan Malam (35%)",
      "target_calories": 616.6999999999999,
      "recommendations": [
        {
          "food_id": "FD0392",
          "food_name": "[Karbo] nasi jagung",
          "image_url": "https://tokohinspiratif.id/wp-content/uploads/2019/03/WhatsApp-Image-2019-03-25-at-16.10.19-1280x640.jpeg",
          "pairing_group": "rice_noodle_staple",
          "pairing_role": "staple",
          "calories_100g": 357,
          "ideal_grams": 77.73529411764706,
          "ideal_calories": 277.515,
          "ideal_protein": 6.840705882352942,
          "ideal_fat": 0.3886764705882353,
          "ideal_carb": 61.799558823529416,
          "match_score": 2.8648921251296997
        },
        {
          "food_id": "FD0053",
          "food_name": "[Lauk] belut goreng",
          "image_url": "https://asset.kompas.com/crops/EIwKgK9ZA21scjpbrA9zMJehUIU=/100x67:900x600/750x500/data/photo/2021/03/23/6059483f259e2.jpeg",
          "pairing_group": "traditional_protein",
          "pairing_role": "protein",
          "calories_100g": 417,
          "ideal_grams": 59.15587529976018,
          "ideal_calories": 246.67999999999995,
          "ideal_protein": 15.321371702637888,
          "ideal_fat": 11.476239808153474,
          "ideal_carb": 18.92988009592326,
          "match_score": 0.9062333106994629
        },
        {
          "food_id": "FD0213",
          "food_name": "[Sayur] jamur kuping kering",
          "image_url": "https://asset.kompas.com/crops/3caJpamNwFqn62cq9Tf8ZRPsIh4=/0x41:1000x707/750x500/data/photo/2021/12/06/61ad642aaebd0.jpg",
          "pairing_group": "cooked_or_ready_vegetable",
          "pairing_role": "vegetable",
          "calories_100g": 294,
          "ideal_grams": 50,
          "ideal_calories": 147,
          "ideal_protein": 8,
          "ideal_fat": 0.45000000000000007,
          "ideal_carb": 32.3,
          "match_score": 0.6807356834411621
        }
      ]
    },
    {
      "meal_name": "Hari 7 - Rabu - Sarapan (25%)",
      "target_calories": 440.5,
      "recommendations": [
        {
          "food_id": "FD0098",
          "food_name": "[Camilan/Roti] coklat manis batang",
          "image_url": "https://www.mampu.or.id/wp-content/uploads/2022/10/6007a9065cace.jpeg",
          "pairing_group": "sweet_snack",
          "pairing_role": "sweet_snack",
          "calories_100g": 472,
          "ideal_grams": 60.662076271186436,
          "ideal_calories": 286.325,
          "ideal_protein": 1.2132415254237288,
          "ideal_fat": 18.077298728813556,
          "ideal_carb": 38.035121822033894,
          "match_score": 2.4180684089660645
        },
        {
          "food_id": "FD0277",
          "food_name": "[Pendamping] keju kacang tanah",
          "image_url": "https://img.freepik.com/free-photo/cheddar-cheese-dark-wooden-surface_1150-41937.jpg?w=1060&t=st=1684238932~exp=1684239532~hmac=578424a4cc6bde6d195628ec281e5daa943e767e0e6d813354904914dc34af51",
          "pairing_group": "dairy_pairing",
          "pairing_role": "dairy",
          "calories_100g": 590,
          "ideal_grams": 30,
          "ideal_calories": 177,
          "ideal_protein": 8.100000000000001,
          "ideal_fat": 14.7,
          "ideal_carb": 6.27,
          "match_score": 0.8015949487686157
        }
      ]
    },
    {
      "meal_name": "Hari 7 - Rabu - Makan Siang (40%)",
      "target_calories": 704.8000000000001,
      "recommendations": [
        {
          "food_id": "FD0392",
          "food_name": "[Karbo] nasi jagung",
          "image_url": "https://tokohinspiratif.id/wp-content/uploads/2019/03/WhatsApp-Image-2019-03-25-at-16.10.19-1280x640.jpeg",
          "pairing_group": "rice_noodle_staple",
          "pairing_role": "staple",
          "calories_100g": 357,
          "ideal_grams": 88.84033613445379,
          "ideal_calories": 317.16,
          "ideal_protein": 7.817949579831935,
          "ideal_fat": 0.44420168067226895,
          "ideal_carb": 70.62806722689076,
          "match_score": 2.866125702857971
        },
        {
          "food_id": "FD0117",
          "food_name": "[Lauk] dendeng daging sapi",
          "image_url": "https://awsimages.detik.net.id/community/media/visual/2022/02/20/resep-dendeng-sapi-medan_43.jpeg?w=700&q=90",
          "pairing_group": "traditional_protein",
          "pairing_role": "protein",
          "calories_100g": 433,
          "ideal_grams": 65.10854503464203,
          "ideal_calories": 281.92,
          "ideal_protein": 35.809699769053125,
          "ideal_fat": 5.859769053117783,
          "ideal_carb": 0,
          "match_score": 0.9056323170661926
        },
        {
          "food_id": "FD0213",
          "food_name": "[Sayur] jamur kuping kering",
          "image_url": "https://asset.kompas.com/crops/3caJpamNwFqn62cq9Tf8ZRPsIh4=/0x41:1000x707/750x500/data/photo/2021/12/06/61ad642aaebd0.jpg",
          "pairing_group": "cooked_or_ready_vegetable",
          "pairing_role": "vegetable",
          "calories_100g": 294,
          "ideal_grams": 50,
          "ideal_calories": 147,
          "ideal_protein": 8,
          "ideal_fat": 0.45000000000000007,
          "ideal_carb": 32.3,
          "match_score": 0.681725537776947
        }
      ]
    },
    {
      "meal_name": "Hari 7 - Rabu - Makan Malam (35%)",
      "target_calories": 616.6999999999999,
      "recommendations": [
        {
          "food_id": "FD0392",
          "food_name": "[Karbo] nasi jagung",
          "image_url": "https://tokohinspiratif.id/wp-content/uploads/2019/03/WhatsApp-Image-2019-03-25-at-16.10.19-1280x640.jpeg",
          "pairing_group": "rice_noodle_staple",
          "pairing_role": "staple",
          "calories_100g": 357,
          "ideal_grams": 77.73529411764706,
          "ideal_calories": 277.515,
          "ideal_protein": 6.840705882352942,
          "ideal_fat": 0.3886764705882353,
          "ideal_carb": 61.799558823529416,
          "match_score": 2.8648921251296997
        },
        {
          "food_id": "FD0116",
          "food_name": "[Lauk] dendeng belut goreng",
          "image_url": "https://selerasa.com/wp-content/uploads/2015/11/images_dendeng-belut.JPG",
          "pairing_group": "traditional_protein",
          "pairing_role": "protein",
          "calories_100g": 382,
          "ideal_grams": 64.57591623036649,
          "ideal_calories": 246.67999999999998,
          "ideal_protein": 35.968785340314135,
          "ideal_fat": 9.105204188481673,
          "ideal_carb": 5.166073298429319,
          "match_score": 0.900144636631012
        },
        {
          "food_id": "FD0213",
          "food_name": "[Sayur] jamur kuping kering",
          "image_url": "https://asset.kompas.com/crops/3caJpamNwFqn62cq9Tf8ZRPsIh4=/0x41:1000x707/750x500/data/photo/2021/12/06/61ad642aaebd0.jpg",
          "pairing_group": "cooked_or_ready_vegetable",
          "pairing_role": "vegetable",
          "calories_100g": 294,
          "ideal_grams": 50,
          "ideal_calories": 147,
          "ideal_protein": 8,
          "ideal_fat": 0.45000000000000007,
          "ideal_carb": 32.3,
          "match_score": 0.6807356834411621
        }
      ]
    }
  ],
  "narrative_summary": "Wah, pilihan yang cerdas banget nih! Mencari makanan sehat sekaligus mengenyangkan itu memang kunci biar nggak gampang lapar dan tetap semangat beraktivitas, NutriAI paham banget kok keinginanmu itu. Nah, berdasarkan kebutuhanmu, NutriAI merekomendasikan nasi jagung sebagai pilihan yang tepat dan pasti bikin kenyang! Dengan porsi ideal sekitar 89 gram, nasi jagung ini bisa bantu memenuhi kebutuhanmu hingga 1762 kalori, pas banget untuk menjaga energimu dan bikin perut tetap nyaman sepanjang hari."
}
```


# Skenario 2 - Dengan User Text
## Body Req
```json
{
  "target_macros": {
    "calories": 1762,
    "protein_g": 110,
    "fat_g": 59,
    "carb_g": 198
  },
  "allergies": {
    "gluten": 0,
    "dairy": 0,
    "nuts": 0,
    "peanut": 0,
    "seafood": 0,
    "egg": 0,
    "soy": 0,
    "celery": 0
  },
  "breakfast_prefs": {
    "food_category": [],
    "main_ingredients": []
  },
  "lunch_prefs": {
    "food_category": [],
    "main_ingredients": []
  },
  "dinner_prefs": {
    "food_category": [],
    "main_ingredients": []
  },
  "user_text": "Saya tidak ingin makan ikan kapanpun itu",
  "start_date": "2026-05-28",
  "days": 7,
  "variety_penalty": 0.15,
  "halal_only": false
}
```
## Response
```json
{
  "daily_plan": [
    {
      "meal_name": "Hari 1 - Kamis - Sarapan (25%)",
      "target_calories": 440.5,
      "recommendations": [
        {
          "food_id": "FD0397",
          "food_name": "[Camilan/Roti] noga kacang tanah",
          "image_url": "https://t-2.tstatic.net/priangan/foto/bank/images/Noga-Suuk.jpg",
          "pairing_group": "sweet_snack",
          "pairing_role": "sweet_snack",
          "calories_100g": 600,
          "ideal_grams": 47.72083333333333,
          "ideal_calories": 286.325,
          "ideal_protein": 6.680916666666667,
          "ideal_fat": 19.899587500000003,
          "ideal_carb": 20.042749999999998,
          "match_score": 2.457033693790436
        },
        {
          "food_id": "FD0277",
          "food_name": "[Pendamping] keju kacang tanah",
          "image_url": "https://img.freepik.com/free-photo/cheddar-cheese-dark-wooden-surface_1150-41937.jpg?w=1060&t=st=1684238932~exp=1684239532~hmac=578424a4cc6bde6d195628ec281e5daa943e767e0e6d813354904914dc34af51",
          "pairing_group": "dairy_pairing",
          "pairing_role": "dairy",
          "calories_100g": 590,
          "ideal_grams": 30,
          "ideal_calories": 177,
          "ideal_protein": 8.100000000000001,
          "ideal_fat": 14.7,
          "ideal_carb": 6.27,
          "match_score": 0.9592453241348267
        }
      ]
    },
    {
      "meal_name": "Hari 1 - Kamis - Makan Siang (40%)",
      "target_calories": 704.8000000000001,
      "recommendations": [
        {
          "food_id": "FD0392",
          "food_name": "[Karbo] nasi jagung",
          "image_url": "https://tokohinspiratif.id/wp-content/uploads/2019/03/WhatsApp-Image-2019-03-25-at-16.10.19-1280x640.jpeg",
          "pairing_group": "rice_noodle_staple",
          "pairing_role": "staple",
          "calories_100g": 357,
          "ideal_grams": 88.84033613445379,
          "ideal_calories": 317.16,
          "ideal_protein": 7.817949579831935,
          "ideal_fat": 0.44420168067226895,
          "ideal_carb": 70.62806722689076,
          "match_score": 3.401209533214569
        },
        {
          "food_id": "FD0237",
          "food_name": "[Lauk] kacang kedelai goreng",
          "image_url": "https://img-global.cpcdn.com/recipes/e4e2747431572f24/680x482cq70/kacang-kedelai-goreng-foto-resep-utama.jpg",
          "pairing_group": "traditional_protein",
          "pairing_role": "protein",
          "calories_100g": 521,
          "ideal_grams": 54.11132437619962,
          "ideal_calories": 281.92,
          "ideal_protein": 17.423846449136278,
          "ideal_fat": 20.399969289827258,
          "ideal_carb": 12.391493282149712,
          "match_score": 0.9784045219421387
        },
        {
          "food_id": "FD0213",
          "food_name": "[Sayur] jamur kuping kering",
          "image_url": "https://asset.kompas.com/crops/3caJpamNwFqn62cq9Tf8ZRPsIh4=/0x41:1000x707/750x500/data/photo/2021/12/06/61ad642aaebd0.jpg",
          "pairing_group": "cooked_or_ready_vegetable",
          "pairing_role": "vegetable",
          "calories_100g": 294,
          "ideal_grams": 50,
          "ideal_calories": 147,
          "ideal_protein": 8,
          "ideal_fat": 0.45000000000000007,
          "ideal_carb": 32.3,
          "match_score": 0.871487021446228
        }
      ]
    },
    {
      "meal_name": "Hari 1 - Kamis - Makan Malam (35%)",
      "target_calories": 616.6999999999999,
      "recommendations": [
        {
          "food_id": "FD0593",
          "food_name": "[Karbo] nasi putih",
          "image_url": "https://tokohinspiratif.id/wp-content/uploads/2019/03/WhatsApp-Image-2019-03-25-at-16.10.19-1280x640.jpeg",
          "pairing_group": "rice_noodle_staple",
          "pairing_role": "staple",
          "calories_100g": 357,
          "ideal_grams": 77.73529411764706,
          "ideal_calories": 277.515,
          "ideal_protein": 6.840705882352942,
          "ideal_fat": 0.3886764705882353,
          "ideal_carb": 61.799558823529416,
          "match_score": 3.0500113010406493
        },
        {
          "food_id": "FD0027",
          "food_name": "[Lauk] ayam usus goreng",
          "image_url": "https://img-global.cpcdn.com/recipes/fa7c9443ce9efcb5/1200x630cq70/photo.jpg",
          "pairing_group": "traditional_protein",
          "pairing_role": "protein",
          "calories_100g": 473,
          "ideal_grams": 52.152219873150095,
          "ideal_calories": 246.67999999999998,
          "ideal_protein": 23.572803382663842,
          "ideal_fat": 13.716033826638476,
          "ideal_carb": 7.249158562367864,
          "match_score": 0.9687352180480957
        },
        {
          "food_id": "FD0566",
          "food_name": "[Sayur] tempe sayur",
          "image_url": "https://fibercreme.com/wp-content/uploads/2021/05/tempe-lombok-ijo-santan_.jpg",
          "pairing_group": "cooked_or_ready_vegetable",
          "pairing_role": "vegetable",
          "calories_100g": 240,
          "ideal_grams": 50,
          "ideal_calories": 120,
          "ideal_protein": 3,
          "ideal_fat": 1.35,
          "ideal_carb": 24.65,
          "match_score": 0.8073569536209106
        }
      ]
    },
    {
      "meal_name": "Hari 2 - Jumat - Sarapan (25%)",
      "target_calories": 440.5,
      "recommendations": [
        {
          "food_id": "FD0031",
          "food_name": "[Camilan/Roti] bagea kenari asin",
          "image_url": "https://images.tokopedia.net/img/cache/700/hDjmkQ/2021/10/4/73219f10-0149-4af7-b1ca-c51d90ca767b.jpg",
          "pairing_group": "sweet_snack",
          "pairing_role": "sweet_snack",
          "calories_100g": 529,
          "ideal_grams": 54.12570888468808,
          "ideal_calories": 286.32499999999993,
          "ideal_protein": 1.7320226843100186,
          "ideal_fat": 15.750581285444234,
          "ideal_carb": 34.42395085066162,
          "match_score": 2.4371031522750854
        },
        {
          "food_id": "FD0100",
          "food_name": "[Pendamping] coklat susu batang",
          "image_url": "https://www.nyonyor.com/wp-content/uploads/2018/11/Harga-Coklat-Batangan-Terbaru-540x350.jpg",
          "pairing_group": "dairy_pairing",
          "pairing_role": "dairy",
          "calories_100g": 381,
          "ideal_grams": 40.46587926509186,
          "ideal_calories": 154.17499999999998,
          "ideal_protein": 3.641929133858267,
          "ideal_fat": 14.163057742782149,
          "ideal_carb": 21.689711286089235,
          "match_score": 0.9036336541175842
        }
      ]
    },
    {
      "meal_name": "Hari 2 - Jumat - Makan Siang (40%)",
      "target_calories": 704.8000000000001,
      "recommendations": [
        {
          "food_id": "FD0593",
          "food_name": "[Karbo] nasi merah",
          "image_url": "https://tokohinspiratif.id/wp-content/uploads/2019/03/WhatsApp-Image-2019-03-25-at-16.10.19-1280x640.jpeg",
          "pairing_group": "rice_noodle_staple",
          "pairing_role": "staple",
          "calories_100g": 357,
          "ideal_grams": 88.84033613445379,
          "ideal_calories": 317.16,
          "ideal_protein": 7.817949579831935,
          "ideal_fat": 0.44420168067226895,
          "ideal_carb": 70.62806722689076,
          "match_score": 3.051209533214569
        },
        {
          "food_id": "FD0381",
          "food_name": "[Lauk] naan maran sapi masakan",
          "image_url": "https://drive.google.com/file/d/1LZOGoU3M3XcPbU5_HaAZ26ybCTbiTXpT/view?usp=sharing",
          "pairing_group": "traditional_protein",
          "pairing_role": "protein",
          "calories_100g": 478,
          "ideal_grams": 58.97907949790795,
          "ideal_calories": 281.92,
          "ideal_protein": 22.58898744769874,
          "ideal_fat": 19.993907949790792,
          "ideal_carb": 3.007933054393305,
          "match_score": 0.9696530103683472
        },
        {
          "food_id": "FD0505",
          "food_name": "[Sayur] semur jengkol",
          "image_url": "https://assets.pikiran-rakyat.com/crop/0x135:1080x1215/x/photo/2020/11/25/1187166638.jpg",
          "pairing_group": "cooked_or_ready_vegetable",
          "pairing_role": "vegetable",
          "calories_100g": 192.5,
          "ideal_grams": 54.91948051948052,
          "ideal_calories": 105.72000000000001,
          "ideal_protein": 2.4713766233766234,
          "ideal_fat": 3.2951688311688314,
          "ideal_carb": 16.640602597402598,
          "match_score": 0.753059446811676
        }
      ]
    },
    {
      "meal_name": "Hari 2 - Jumat - Makan Malam (35%)",
      "target_calories": 616.6999999999999,
      "recommendations": [
        {
          "food_id": "FD0389",
          "food_name": "[Karbo] nasi gemuk",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Nasi_Gmk.jpg/1200px-Nasi_Gmk.jpg",
          "pairing_group": "rice_noodle_staple",
          "pairing_role": "staple",
          "calories_100g": 192,
          "ideal_grams": 144.5390625,
          "ideal_calories": 277.515,
          "ideal_protein": 5.492484375,
          "ideal_fat": 12.719437500000002,
          "ideal_carb": 35.26753125,
          "match_score": 2.900885248184204
        },
        {
          "food_id": "FD0117",
          "food_name": "[Lauk] dendeng daging sapi",
          "image_url": "https://awsimages.detik.net.id/community/media/visual/2022/02/20/resep-dendeng-sapi-medan_43.jpeg?w=700&q=90",
          "pairing_group": "traditional_protein",
          "pairing_role": "protein",
          "calories_100g": 433,
          "ideal_grams": 56.96997690531177,
          "ideal_calories": 246.67999999999995,
          "ideal_protein": 31.333487297921476,
          "ideal_fat": 5.127297921478059,
          "ideal_carb": 0,
          "match_score": 0.9492941498756409
        },
        {
          "food_id": "FD0203",
          "food_name": "[Sayur] jagung sayur tumis",
          "image_url": "https://ibusayur.my.id/wp-content/uploads/2022/08/ibusayur.my.id-sayur-nangka-51661b26-eb56-4072-8613-65cb6b4c2ecb.png",
          "pairing_group": "cooked_or_ready_vegetable",
          "pairing_role": "vegetable",
          "calories_100g": 148.9,
          "ideal_grams": 62.12558764271322,
          "ideal_calories": 92.505,
          "ideal_protein": 6.461061114842176,
          "ideal_fat": 6.461061114842176,
          "ideal_carb": 12.487243116185358,
          "match_score": 0.7333576679229736
        }
      ]
    },
    {
      "meal_name": "Hari 3 - Sabtu - Sarapan (25%)",
      "target_calories": 440.5,
      "recommendations": [
        {
          "food_id": "FD0032",
          "food_name": "[Camilan/Roti] bagea kenari manis",
          "image_url": "https://indonesiakaya.com/wp-content/uploads/2020/10/1__IMG_0796_CROP_Renyah_gurih_dan_manis_begitulah_kira-kira_gambaran_saat_mencicipi_kue_bagea_khas_Sulawesi_Utara.jpg",
          "pairing_group": "sweet_snack",
          "pairing_role": "sweet_snack",
          "calories_100g": 523,
          "ideal_grams": 54.74665391969407,
          "ideal_calories": 286.325,
          "ideal_protein": 1.7518929254302102,
          "ideal_fat": 15.438556405353726,
          "ideal_carb": 35.147351816443596,
          "match_score": 2.435493052005768
        },
        {
          "food_id": "FD0539",
          "food_name": "[Pendamping] susu kental manis",
          "image_url": "https://asset.kompas.com/crops/C220cRbRPu0EoI8SMHWr0HeFGuU=/0x0:750x500/750x500/data/photo/2022/06/03/6299dc0edf868.jpg",
          "pairing_group": "dairy_pairing",
          "pairing_role": "dairy",
          "calories_100g": 336,
          "ideal_grams": 45.885416666666664,
          "ideal_calories": 154.17499999999998,
          "ideal_protein": 3.762604166666666,
          "ideal_fat": 4.588541666666667,
          "ideal_carb": 25.236979166666668,
          "match_score": 0.8533673286437988
        }
      ]
    },
    {
      "meal_name": "Hari 3 - Sabtu - Makan Siang (40%)",
      "target_calories": 704.8000000000001,
      "recommendations": [
        {
          "food_id": "FD0392",
          "food_name": "[Karbo] nasi jagung",
          "image_url": "https://tokohinspiratif.id/wp-content/uploads/2019/03/WhatsApp-Image-2019-03-25-at-16.10.19-1280x640.jpeg",
          "pairing_group": "rice_noodle_staple",
          "pairing_role": "staple",
          "calories_100g": 357,
          "ideal_grams": 88.84033613445379,
          "ideal_calories": 317.16,
          "ideal_protein": 7.817949579831935,
          "ideal_fat": 0.44420168067226895,
          "ideal_carb": 70.62806722689076,
          "match_score": 2.901209533214569
        },
        {
          "food_id": "FD0559",
          "food_name": "[Lauk] telur ayam ceplok",
          "image_url": "https://asset.kompas.com/crops/iCoT-Kr0xhu1V1MGOEhihIfgbYk=/0x0:498x332/750x500/data/photo/2020/02/07/5e3d3ae57251e.jpg",
          "pairing_group": "traditional_protein",
          "pairing_role": "protein",
          "calories_100g": 383,
          "ideal_grams": 73.60835509138381,
          "ideal_calories": 281.92,
          "ideal_protein": 11.114861618798956,
          "ideal_fat": 24.217148825065273,
          "ideal_carb": 6.109493472584857,
          "match_score": 0.9333402514457703
        },
        {
          "food_id": "FD0495",
          "food_name": "[Sayur] sayur garu",
          "image_url": "https://image.akurat.co/images/uploads/images/akurat_20181220020604_MYQ3rr.jpg",
          "pairing_group": "cooked_or_ready_vegetable",
          "pairing_role": "vegetable",
          "calories_100g": 178,
          "ideal_grams": 59.3932584269663,
          "ideal_calories": 105.72000000000001,
          "ideal_protein": 1.5442247191011238,
          "ideal_fat": 8.255662921348316,
          "ideal_carb": 6.295685393258427,
          "match_score": 0.7320591807365417
        }
      ]
    },
    {
      "meal_name": "Hari 3 - Sabtu - Makan Malam (35%)",
      "target_calories": 616.6999999999999,
      "recommendations": [
        {
          "food_id": "FD0392",
          "food_name": "[Karbo] nasi jagung",
          "image_url": "https://tokohinspiratif.id/wp-content/uploads/2019/03/WhatsApp-Image-2019-03-25-at-16.10.19-1280x640.jpeg",
          "pairing_group": "rice_noodle_staple",
          "pairing_role": "staple",
          "calories_100g": 357,
          "ideal_grams": 77.73529411764706,
          "ideal_calories": 277.515,
          "ideal_protein": 6.840705882352942,
          "ideal_fat": 0.3886764705882353,
          "ideal_carb": 61.799558823529416,
          "match_score": 2.9000113010406494
        },
        {
          "food_id": "FD0399",
          "food_name": "[Lauk] oncom goreng",
          "image_url": "https://t-2.tstatic.net/medan/foto/bank/images/Resep-Oncom-Goreng-Tepung.jpg",
          "pairing_group": "traditional_protein",
          "pairing_role": "protein",
          "calories_100g": 363.3,
          "ideal_grams": 67.89980732177263,
          "ideal_calories": 246.67999999999995,
          "ideal_protein": 13.104662813102117,
          "ideal_fat": 13.104662813102117,
          "ideal_carb": 27.363622350674365,
          "match_score": 0.9312006831169128
        },
        {
          "food_id": "FD0213",
          "food_name": "[Sayur] jamur kuping kering",
          "image_url": "https://asset.kompas.com/crops/3caJpamNwFqn62cq9Tf8ZRPsIh4=/0x41:1000x707/750x500/data/photo/2021/12/06/61ad642aaebd0.jpg",
          "pairing_group": "cooked_or_ready_vegetable",
          "pairing_role": "vegetable",
          "calories_100g": 294,
          "ideal_grams": 50,
          "ideal_calories": 147,
          "ideal_protein": 8,
          "ideal_fat": 0.45000000000000007,
          "ideal_carb": 32.3,
          "match_score": 0.7204671859741211
        }
      ]
    },
    {
      "meal_name": "Hari 4 - Minggu - Sarapan (25%)",
      "target_calories": 440.5,
      "recommendations": [
        {
          "food_id": "FD0099",
          "food_name": "[Camilan/Roti] coklat pahit batang",
          "image_url": "https://nilaigizi.com/assets/images/produk/produk_1535873875.jpg",
          "pairing_group": "sweet_snack",
          "pairing_role": "sweet_snack",
          "calories_100g": 504,
          "ideal_grams": 56.810515873015866,
          "ideal_calories": 286.325,
          "ideal_protein": 3.1245783730158725,
          "ideal_fat": 30.052762896825396,
          "ideal_carb": 16.588670634920632,
          "match_score": 2.435207486152649
        },
        {
          "food_id": "FD0276",
          "food_name": "[Pendamping] keju",
          "image_url": "https://cdns.klimg.com/merdeka.com/i/w/news/2020/05/08/1175035/content_images/670x335/20200508114326-1-ilustrasi-keju-008-destriyana.jpg",
          "pairing_group": "dairy_pairing",
          "pairing_role": "dairy",
          "calories_100g": 326,
          "ideal_grams": 47.29294478527607,
          "ideal_calories": 154.17499999999998,
          "ideal_protein": 10.782791411042945,
          "ideal_fat": 9.600467791411043,
          "ideal_carb": 6.195375766871165,
          "match_score": 0.8492928147315979
        }
      ]
    },
    {
      "meal_name": "Hari 4 - Minggu - Makan Siang (40%)",
      "target_calories": 704.8000000000001,
      "recommendations": [
        {
          "food_id": "FD0392",
          "food_name": "[Karbo] nasi jagung",
          "image_url": "https://tokohinspiratif.id/wp-content/uploads/2019/03/WhatsApp-Image-2019-03-25-at-16.10.19-1280x640.jpeg",
          "pairing_group": "rice_noodle_staple",
          "pairing_role": "staple",
          "calories_100g": 357,
          "ideal_grams": 88.84033613445379,
          "ideal_calories": 317.16,
          "ideal_protein": 7.817949579831935,
          "ideal_fat": 0.44420168067226895,
          "ideal_carb": 70.62806722689076,
          "match_score": 2.901209533214569
        },
        {
          "food_id": "FD0255",
          "food_name": "[Lauk] kacang tanah rebus",
          "image_url": "https://img-global.cpcdn.com/recipes/ff019c14f757cfbf/1200x630cq70/photo.jpg",
          "pairing_group": "traditional_protein",
          "pairing_role": "protein",
          "calories_100g": 385,
          "ideal_grams": 73.22597402597403,
          "ideal_calories": 281.92,
          "ideal_protein": 10.251636363636365,
          "ideal_fat": 22.700051948051946,
          "ideal_carb": 9.519376623376624,
          "match_score": 0.9331324100494385
        },
        {
          "food_id": "FD0213",
          "food_name": "[Sayur] jamur kuping kering",
          "image_url": "https://asset.kompas.com/crops/3caJpamNwFqn62cq9Tf8ZRPsIh4=/0x41:1000x707/750x500/data/photo/2021/12/06/61ad642aaebd0.jpg",
          "pairing_group": "cooked_or_ready_vegetable",
          "pairing_role": "vegetable",
          "calories_100g": 294,
          "ideal_grams": 50,
          "ideal_calories": 147,
          "ideal_protein": 8,
          "ideal_fat": 0.45000000000000007,
          "ideal_carb": 32.3,
          "match_score": 0.721487021446228
        }
      ]
    },
    {
      "meal_name": "Hari 4 - Minggu - Makan Malam (35%)",
      "target_calories": 616.6999999999999,
      "recommendations": [
        {
          "food_id": "FD0392",
          "food_name": "[Karbo] nasi jagung",
          "image_url": "https://tokohinspiratif.id/wp-content/uploads/2019/03/WhatsApp-Image-2019-03-25-at-16.10.19-1280x640.jpeg",
          "pairing_group": "rice_noodle_staple",
          "pairing_role": "staple",
          "calories_100g": 357,
          "ideal_grams": 77.73529411764706,
          "ideal_calories": 277.515,
          "ideal_protein": 6.840705882352942,
          "ideal_fat": 0.3886764705882353,
          "ideal_carb": 61.799558823529416,
          "match_score": 2.9000113010406494
        },
        {
          "food_id": "FD0564",
          "food_name": "[Lauk] tempe kedelai murni goreng",
          "image_url": "https://media.hitekno.com/thumbs/2020/02/24/21141-ilustrasi-tempe-goreng-shutterstock/730x480-img-21141-ilustrasi-tempe-goreng-shutterstock.jpg",
          "pairing_group": "traditional_protein",
          "pairing_role": "protein",
          "calories_100g": 350,
          "ideal_grams": 70.48,
          "ideal_calories": 246.68,
          "ideal_protein": 17.2676,
          "ideal_fat": 18.747680000000003,
          "ideal_carb": 7.329920000000001,
          "match_score": 0.9238294959068298
        },
        {
          "food_id": "FD0213",
          "food_name": "[Sayur] jamur kuping kering",
          "image_url": "https://asset.kompas.com/crops/3caJpamNwFqn62cq9Tf8ZRPsIh4=/0x41:1000x707/750x500/data/photo/2021/12/06/61ad642aaebd0.jpg",
          "pairing_group": "cooked_or_ready_vegetable",
          "pairing_role": "vegetable",
          "calories_100g": 294,
          "ideal_grams": 50,
          "ideal_calories": 147,
          "ideal_protein": 8,
          "ideal_fat": 0.45000000000000007,
          "ideal_carb": 32.3,
          "match_score": 0.7204671859741211
        }
      ]
    },
    {
      "meal_name": "Hari 5 - Senin - Sarapan (25%)",
      "target_calories": 440.5,
      "recommendations": [
        {
          "food_id": "FD0098",
          "food_name": "[Camilan/Roti] coklat manis batang",
          "image_url": "https://www.mampu.or.id/wp-content/uploads/2022/10/6007a9065cace.jpeg",
          "pairing_group": "sweet_snack",
          "pairing_role": "sweet_snack",
          "calories_100g": 472,
          "ideal_grams": 60.662076271186436,
          "ideal_calories": 286.325,
          "ideal_protein": 1.2132415254237288,
          "ideal_fat": 18.077298728813556,
          "ideal_carb": 38.035121822033894,
          "match_score": 2.423006236553192
        },
        {
          "food_id": "FD0277",
          "food_name": "[Pendamping] keju kacang tanah",
          "image_url": "https://img.freepik.com/free-photo/cheddar-cheese-dark-wooden-surface_1150-41937.jpg?w=1060&t=st=1684238932~exp=1684239532~hmac=578424a4cc6bde6d195628ec281e5daa943e767e0e6d813354904914dc34af51",
          "pairing_group": "dairy_pairing",
          "pairing_role": "dairy",
          "calories_100g": 590,
          "ideal_grams": 30,
          "ideal_calories": 177,
          "ideal_protein": 8.100000000000001,
          "ideal_fat": 14.7,
          "ideal_carb": 6.27,
          "match_score": 0.8092453241348266
        }
      ]
    },
    {
      "meal_name": "Hari 5 - Senin - Makan Siang (40%)",
      "target_calories": 704.8000000000001,
      "recommendations": [
        {
          "food_id": "FD0392",
          "food_name": "[Karbo] nasi jagung",
          "image_url": "https://tokohinspiratif.id/wp-content/uploads/2019/03/WhatsApp-Image-2019-03-25-at-16.10.19-1280x640.jpeg",
          "pairing_group": "rice_noodle_staple",
          "pairing_role": "staple",
          "calories_100g": 357,
          "ideal_grams": 88.84033613445379,
          "ideal_calories": 317.16,
          "ideal_protein": 7.817949579831935,
          "ideal_fat": 0.44420168067226895,
          "ideal_carb": 70.62806722689076,
          "match_score": 2.901209533214569
        },
        {
          "food_id": "FD0256",
          "food_name": "[Lauk] kacang tanah rebus berkulit",
          "image_url": "https://www.wikihow.com/images/8/85/Boil-Peanuts-Step-14-Version-2.jpg",
          "pairing_group": "traditional_protein",
          "pairing_role": "protein",
          "calories_100g": 360,
          "ideal_grams": 78.31111111111112,
          "ideal_calories": 281.92,
          "ideal_protein": 10.572000000000001,
          "ideal_fat": 24.43306666666667,
          "ideal_carb": 10.023822222222224,
          "match_score": 0.9248670339584351
        },
        {
          "food_id": "FD0213",
          "food_name": "[Sayur] jamur kuping kering",
          "image_url": "https://asset.kompas.com/crops/3caJpamNwFqn62cq9Tf8ZRPsIh4=/0x41:1000x707/750x500/data/photo/2021/12/06/61ad642aaebd0.jpg",
          "pairing_group": "cooked_or_ready_vegetable",
          "pairing_role": "vegetable",
          "calories_100g": 294,
          "ideal_grams": 50,
          "ideal_calories": 147,
          "ideal_protein": 8,
          "ideal_fat": 0.45000000000000007,
          "ideal_carb": 32.3,
          "match_score": 0.721487021446228
        }
      ]
    },
    {
      "meal_name": "Hari 5 - Senin - Makan Malam (35%)",
      "target_calories": 616.6999999999999,
      "recommendations": [
        {
          "food_id": "FD0392",
          "food_name": "[Karbo] nasi jagung",
          "image_url": "https://tokohinspiratif.id/wp-content/uploads/2019/03/WhatsApp-Image-2019-03-25-at-16.10.19-1280x640.jpeg",
          "pairing_group": "rice_noodle_staple",
          "pairing_role": "staple",
          "calories_100g": 357,
          "ideal_grams": 77.73529411764706,
          "ideal_calories": 277.515,
          "ideal_protein": 6.840705882352942,
          "ideal_fat": 0.3886764705882353,
          "ideal_carb": 61.799558823529416,
          "match_score": 2.9000113010406494
        },
        {
          "food_id": "FD0015",
          "food_name": "[Lauk] ayam goreng church texas dada",
          "image_url": "https://i0.wp.com/harga.web.id/wp-content/uploads/Harga-Texas-Chicken-Reguler-dan-Promo.jpg?fit=680%2C300&ssl=1",
          "pairing_group": "traditional_protein",
          "pairing_role": "protein",
          "calories_100g": 338,
          "ideal_grams": 72.98224852071006,
          "ideal_calories": 246.67999999999998,
          "ideal_protein": 25.689751479289942,
          "ideal_fat": 15.034343195266274,
          "ideal_carb": 0.29192899408284023,
          "match_score": 0.9168221354484558
        },
        {
          "food_id": "FD0213",
          "food_name": "[Sayur] jamur kuping kering",
          "image_url": "https://asset.kompas.com/crops/3caJpamNwFqn62cq9Tf8ZRPsIh4=/0x41:1000x707/750x500/data/photo/2021/12/06/61ad642aaebd0.jpg",
          "pairing_group": "cooked_or_ready_vegetable",
          "pairing_role": "vegetable",
          "calories_100g": 294,
          "ideal_grams": 50,
          "ideal_calories": 147,
          "ideal_protein": 8,
          "ideal_fat": 0.45000000000000007,
          "ideal_carb": 32.3,
          "match_score": 0.7204671859741211
        }
      ]
    },
    {
      "meal_name": "Hari 6 - Selasa - Sarapan (25%)",
      "target_calories": 440.5,
      "recommendations": [
        {
          "food_id": "FD0066",
          "food_name": "[Camilan/Roti] biskuit",
          "image_url": "https://s4.bukalapak.com/bukalapak-kontenz-production/content_attachments/57314/original/main_merek_biskuit_enak_shutterstock.jpg",
          "pairing_group": "sweet_snack",
          "pairing_role": "sweet_snack",
          "calories_100g": 458,
          "ideal_grams": 62.516375545851524,
          "ideal_calories": 286.325,
          "ideal_protein": 4.313629912663756,
          "ideal_fat": 9.00235807860262,
          "ideal_carb": 46.94979803493449,
          "match_score": 2.4177803993225098
        },
        {
          "food_id": "FD0277",
          "food_name": "[Pendamping] keju kacang tanah",
          "image_url": "https://img.freepik.com/free-photo/cheddar-cheese-dark-wooden-surface_1150-41937.jpg?w=1060&t=st=1684238932~exp=1684239532~hmac=578424a4cc6bde6d195628ec281e5daa943e767e0e6d813354904914dc34af51",
          "pairing_group": "dairy_pairing",
          "pairing_role": "dairy",
          "calories_100g": 590,
          "ideal_grams": 30,
          "ideal_calories": 177,
          "ideal_protein": 8.100000000000001,
          "ideal_fat": 14.7,
          "ideal_carb": 6.27,
          "match_score": 0.8092453241348266
        }
      ]
    },
    {
      "meal_name": "Hari 6 - Selasa - Makan Siang (40%)",
      "target_calories": 704.8000000000001,
      "recommendations": [
        {
          "food_id": "FD0392",
          "food_name": "[Karbo] nasi jagung",
          "image_url": "https://tokohinspiratif.id/wp-content/uploads/2019/03/WhatsApp-Image-2019-03-25-at-16.10.19-1280x640.jpeg",
          "pairing_group": "rice_noodle_staple",
          "pairing_role": "staple",
          "calories_100g": 357,
          "ideal_grams": 88.84033613445379,
          "ideal_calories": 317.16,
          "ideal_protein": 7.817949579831935,
          "ideal_fat": 0.44420168067226895,
          "ideal_carb": 70.62806722689076,
          "match_score": 2.901209533214569
        },
        {
          "food_id": "FD0348",
          "food_name": "[Lauk] leverwost sosis hati",
          "image_url": "https://st3.depositphotos.com/1008077/13205/i/600/depositphotos_132052478-stock-photo-calf-liver-sausage.jpg",
          "pairing_group": "traditional_protein",
          "pairing_role": "protein",
          "calories_100g": 387,
          "ideal_grams": 72.84754521963825,
          "ideal_calories": 281.92,
          "ideal_protein": 11.65560723514212,
          "ideal_fat": 16.026459948320415,
          "ideal_carb": 2.185426356589147,
          "match_score": 0.9169166088104248
        },
        {
          "food_id": "FD0213",
          "food_name": "[Sayur] jamur kuping kering",
          "image_url": "https://asset.kompas.com/crops/3caJpamNwFqn62cq9Tf8ZRPsIh4=/0x41:1000x707/750x500/data/photo/2021/12/06/61ad642aaebd0.jpg",
          "pairing_group": "cooked_or_ready_vegetable",
          "pairing_role": "vegetable",
          "calories_100g": 294,
          "ideal_grams": 50,
          "ideal_calories": 147,
          "ideal_protein": 8,
          "ideal_fat": 0.45000000000000007,
          "ideal_carb": 32.3,
          "match_score": 0.721487021446228
        }
      ]
    },
    {
      "meal_name": "Hari 6 - Selasa - Makan Malam (35%)",
      "target_calories": 616.6999999999999,
      "recommendations": [
        {
          "food_id": "FD0392",
          "food_name": "[Karbo] nasi jagung",
          "image_url": "https://tokohinspiratif.id/wp-content/uploads/2019/03/WhatsApp-Image-2019-03-25-at-16.10.19-1280x640.jpeg",
          "pairing_group": "rice_noodle_staple",
          "pairing_role": "staple",
          "calories_100g": 357,
          "ideal_grams": 77.73529411764706,
          "ideal_calories": 277.515,
          "ideal_protein": 6.840705882352942,
          "ideal_fat": 0.3886764705882353,
          "ideal_carb": 61.799558823529416,
          "match_score": 2.9000113010406494
        },
        {
          "food_id": "FD0565",
          "food_name": "[Lauk] tempe pasar goreng",
          "image_url": "https://cdn.antaranews.com/cache/800x533/2021/01/23/tempe.jpg",
          "pairing_group": "traditional_protein",
          "pairing_role": "protein",
          "calories_100g": 336,
          "ideal_grams": 73.41666666666666,
          "ideal_calories": 246.67999999999995,
          "ideal_protein": 14.683333333333332,
          "ideal_fat": 20.556666666666665,
          "ideal_carb": 5.726499999999999,
          "match_score": 0.9137939214706421
        },
        {
          "food_id": "FD0213",
          "food_name": "[Sayur] jamur kuping kering",
          "image_url": "https://asset.kompas.com/crops/3caJpamNwFqn62cq9Tf8ZRPsIh4=/0x41:1000x707/750x500/data/photo/2021/12/06/61ad642aaebd0.jpg",
          "pairing_group": "cooked_or_ready_vegetable",
          "pairing_role": "vegetable",
          "calories_100g": 294,
          "ideal_grams": 50,
          "ideal_calories": 147,
          "ideal_protein": 8,
          "ideal_fat": 0.45000000000000007,
          "ideal_carb": 32.3,
          "match_score": 0.7204671859741211
        }
      ]
    },
    {
      "meal_name": "Hari 7 - Rabu - Sarapan (25%)",
      "target_calories": 440.5,
      "recommendations": [
        {
          "food_id": "FD0029",
          "food_name": "[Camilan/Roti] bagea kelapa asin",
          "image_url": "https://resepkoki.id/wp-content/uploads/2018/02/Resep-Kue-Bagea.jpg",
          "pairing_group": "sweet_snack",
          "pairing_role": "sweet_snack",
          "calories_100g": 450,
          "ideal_grams": 63.62777777777777,
          "ideal_calories": 286.325,
          "ideal_protein": 2.0360888888888886,
          "ideal_fat": 8.844261111111111,
          "ideal_carb": 49.69329444444443,
          "match_score": 2.4126476049423218
        },
        {
          "food_id": "FD0277",
          "food_name": "[Pendamping] keju kacang tanah",
          "image_url": "https://img.freepik.com/free-photo/cheddar-cheese-dark-wooden-surface_1150-41937.jpg?w=1060&t=st=1684238932~exp=1684239532~hmac=578424a4cc6bde6d195628ec281e5daa943e767e0e6d813354904914dc34af51",
          "pairing_group": "dairy_pairing",
          "pairing_role": "dairy",
          "calories_100g": 590,
          "ideal_grams": 30,
          "ideal_calories": 177,
          "ideal_protein": 8.100000000000001,
          "ideal_fat": 14.7,
          "ideal_carb": 6.27,
          "match_score": 0.8092453241348266
        }
      ]
    },
    {
      "meal_name": "Hari 7 - Rabu - Makan Siang (40%)",
      "target_calories": 704.8000000000001,
      "recommendations": [
        {
          "food_id": "FD0392",
          "food_name": "[Karbo] nasi jagung",
          "image_url": "https://tokohinspiratif.id/wp-content/uploads/2019/03/WhatsApp-Image-2019-03-25-at-16.10.19-1280x640.jpeg",
          "pairing_group": "rice_noodle_staple",
          "pairing_role": "staple",
          "calories_100g": 357,
          "ideal_grams": 88.84033613445379,
          "ideal_calories": 317.16,
          "ideal_protein": 7.817949579831935,
          "ideal_fat": 0.44420168067226895,
          "ideal_carb": 70.62806722689076,
          "match_score": 2.901209533214569
        },
        {
          "food_id": "FD0563",
          "food_name": "[Lauk] tempe goreng",
          "image_url": "https://asset.kompas.com/crops/tnGS6LHPv4vxzDYTS-JJdLXBrjo=/0x41:1000x708/1200x800/data/photo/2020/04/01/5e841eccea33c.jpg",
          "pairing_group": "traditional_protein",
          "pairing_role": "protein",
          "calories_100g": 328,
          "ideal_grams": 85.95121951219514,
          "ideal_calories": 281.92,
          "ideal_protein": 15.815024390243906,
          "ideal_fat": 19.940682926829272,
          "ideal_carb": 11.001756097560978,
          "match_score": 0.9067600965499878
        },
        {
          "food_id": "FD0213",
          "food_name": "[Sayur] jamur kuping kering",
          "image_url": "https://asset.kompas.com/crops/3caJpamNwFqn62cq9Tf8ZRPsIh4=/0x41:1000x707/750x500/data/photo/2021/12/06/61ad642aaebd0.jpg",
          "pairing_group": "cooked_or_ready_vegetable",
          "pairing_role": "vegetable",
          "calories_100g": 294,
          "ideal_grams": 50,
          "ideal_calories": 147,
          "ideal_protein": 8,
          "ideal_fat": 0.45000000000000007,
          "ideal_carb": 32.3,
          "match_score": 0.721487021446228
        }
      ]
    },
    {
      "meal_name": "Hari 7 - Rabu - Makan Malam (35%)",
      "target_calories": 616.6999999999999,
      "recommendations": [
        {
          "food_id": "FD0392",
          "food_name": "[Karbo] nasi jagung",
          "image_url": "https://tokohinspiratif.id/wp-content/uploads/2019/03/WhatsApp-Image-2019-03-25-at-16.10.19-1280x640.jpeg",
          "pairing_group": "rice_noodle_staple",
          "pairing_role": "staple",
          "calories_100g": 357,
          "ideal_grams": 77.73529411764706,
          "ideal_calories": 277.515,
          "ideal_protein": 6.840705882352942,
          "ideal_fat": 0.3886764705882353,
          "ideal_carb": 61.799558823529416,
          "match_score": 2.9000113010406494
        },
        {
          "food_id": "FD0561",
          "food_name": "[Lauk] telur bebek ceplok",
          "image_url": "https://statik.tempo.co/data/2020/06/02/id_942491/942491_720.jpg",
          "pairing_group": "traditional_protein",
          "pairing_role": "protein",
          "calories_100g": 320,
          "ideal_grams": 77.08749999999999,
          "ideal_calories": 246.67999999999998,
          "ideal_protein": 11.640212499999999,
          "ideal_fat": 23.511687499999997,
          "ideal_carb": 0.6937875,
          "match_score": 0.8995609879493713
        },
        {
          "food_id": "FD0213",
          "food_name": "[Sayur] jamur kuping kering",
          "image_url": "https://asset.kompas.com/crops/3caJpamNwFqn62cq9Tf8ZRPsIh4=/0x41:1000x707/750x500/data/photo/2021/12/06/61ad642aaebd0.jpg",
          "pairing_group": "cooked_or_ready_vegetable",
          "pairing_role": "vegetable",
          "calories_100g": 294,
          "ideal_grams": 50,
          "ideal_calories": 147,
          "ideal_protein": 8,
          "ideal_fat": 0.45000000000000007,
          "ideal_carb": 32.3,
          "match_score": 0.7204671859741211
        }
      ]
    }
  ],
  "narrative_summary": "Wah, oke banget, NutriAI ngerti kok kalau preferensi makan tiap orang itu beda-beda, dan itu sah-sah aja! Kita pasti bisa kok cari alternatif nutrisi terbaik yang cocok buat kamu tanpa perlu mikirin ikan sama sekali. Nah, untuk kali ini, NutriAI rekomendasiin nasi jagung sebanyak 89 gram, yang bisa jadi pilihan asik buat kebutuhan nutrisimu. Dengan porsi ini, kamu sudah memenuhi target 1762 kalori yang pas untuk menjaga energimu seharian, dan pastinya bebas ikan favoritmu!"
}
```

# Skenario 3 - Dengan Allergy
## Body Req
```json
{
  "target_macros": {
    "calories": 1762,
    "protein_g": 110,
    "fat_g": 59,
    "carb_g": 198
  },
  "allergies": {
    "gluten": 0,
    "dairy": 0,
    "nuts": 1,
    "peanut": 1,
    "seafood": 1,
    "egg": 0,
    "soy": 0,
    "celery": 0
  },
  "breakfast_prefs": {
    "food_category": [],
    "main_ingredients": []
  },
  "lunch_prefs": {
    "food_category": [],
    "main_ingredients": []
  },
  "dinner_prefs": {
    "food_category": [],
    "main_ingredients": []
  },
  "user_text": "",
  "start_date": "2026-05-28",
  "days": 7,
  "variety_penalty": 0.15,
  "halal_only": false
}
```
## Response
```json
{
  "daily_plan": [
    {
      "meal_name": "Hari 1 - Kamis - Sarapan (25%)",
      "target_calories": 440.5,
      "recommendations": [
        {
          "food_id": "FD0321",
          "food_name": "[Camilan/Roti] kue kelapa",
          "image_url": "https://assets.suaramerdeka.com/crop/0x0:0x0/750x500/webp/photo/2023/01/03/3184254010.png",
          "pairing_group": "sweet_snack",
          "pairing_role": "sweet_snack",
          "calories_100g": 591,
          "ideal_grams": 48.447546531302876,
          "ideal_calories": 286.325,
          "ideal_protein": 2.713062605752961,
          "ideal_fat": 20.39641708967851,
          "ideal_carb": 23.012584602368864,
          "match_score": 2.4477989077568054
        },
        {
          "food_id": "FD0100",
          "food_name": "[Pendamping] coklat susu batang",
          "image_url": "https://www.nyonyor.com/wp-content/uploads/2018/11/Harga-Coklat-Batangan-Terbaru-540x350.jpg",
          "pairing_group": "dairy_pairing",
          "pairing_role": "dairy",
          "calories_100g": 381,
          "ideal_grams": 40.46587926509186,
          "ideal_calories": 154.17499999999998,
          "ideal_protein": 3.641929133858267,
          "ideal_fat": 14.163057742782149,
          "ideal_carb": 21.689711286089235,
          "match_score": 0.8961499929428101
        }
      ]
    },
    {
      "meal_name": "Hari 1 - Kamis - Makan Siang (40%)",
      "target_calories": 704.8000000000001,
      "recommendations": [
        {
          "food_id": "FD0392",
          "food_name": "[Karbo] nasi jagung",
          "image_url": "https://tokohinspiratif.id/wp-content/uploads/2019/03/WhatsApp-Image-2019-03-25-at-16.10.19-1280x640.jpeg",
          "pairing_group": "rice_noodle_staple",
          "pairing_role": "staple",
          "calories_100g": 357,
          "ideal_grams": 88.84033613445379,
          "ideal_calories": 317.16,
          "ideal_protein": 7.817949579831935,
          "ideal_fat": 0.44420168067226895,
          "ideal_carb": 70.62806722689076,
          "match_score": 3.366125702857971
        },
        {
          "food_id": "FD0027",
          "food_name": "[Lauk] ayam usus goreng",
          "image_url": "https://img-global.cpcdn.com/recipes/fa7c9443ce9efcb5/1200x630cq70/photo.jpg",
          "pairing_group": "traditional_protein",
          "pairing_role": "protein",
          "calories_100g": 473,
          "ideal_grams": 59.602536997885835,
          "ideal_calories": 281.92,
          "ideal_protein": 26.9403467230444,
          "ideal_fat": 15.675467230443976,
          "ideal_carb": 8.284752642706131,
          "match_score": 0.9352343082427979
        },
        {
          "food_id": "FD0213",
          "food_name": "[Sayur] jamur kuping kering",
          "image_url": "https://asset.kompas.com/crops/3caJpamNwFqn62cq9Tf8ZRPsIh4=/0x41:1000x707/750x500/data/photo/2021/12/06/61ad642aaebd0.jpg",
          "pairing_group": "cooked_or_ready_vegetable",
          "pairing_role": "vegetable",
          "calories_100g": 294,
          "ideal_grams": 50,
          "ideal_calories": 147,
          "ideal_protein": 8,
          "ideal_fat": 0.45000000000000007,
          "ideal_carb": 32.3,
          "match_score": 0.831725537776947
        }
      ]
    },
    {
      "meal_name": "Hari 1 - Kamis - Makan Malam (35%)",
      "target_calories": 616.6999999999999,
      "recommendations": [
        {
          "food_id": "FD0593",
          "food_name": "[Karbo] nasi putih",
          "image_url": "https://tokohinspiratif.id/wp-content/uploads/2019/03/WhatsApp-Image-2019-03-25-at-16.10.19-1280x640.jpeg",
          "pairing_group": "rice_noodle_staple",
          "pairing_role": "staple",
          "calories_100g": 357,
          "ideal_grams": 77.73529411764706,
          "ideal_calories": 277.515,
          "ideal_protein": 6.840705882352942,
          "ideal_fat": 0.3886764705882353,
          "ideal_carb": 61.799558823529416,
          "match_score": 3.0148921251296996
        },
        {
          "food_id": "FD0381",
          "food_name": "[Lauk] naan maran sapi masakan",
          "image_url": "https://drive.google.com/file/d/1LZOGoU3M3XcPbU5_HaAZ26ybCTbiTXpT/view?usp=sharing",
          "pairing_group": "traditional_protein",
          "pairing_role": "protein",
          "calories_100g": 478,
          "ideal_grams": 51.60669456066945,
          "ideal_calories": 246.68,
          "ideal_protein": 19.7653640167364,
          "ideal_fat": 17.494669456066944,
          "ideal_carb": 2.6319414225941418,
          "match_score": 0.9306619167327881
        },
        {
          "food_id": "FD0566",
          "food_name": "[Sayur] tempe sayur",
          "image_url": "https://fibercreme.com/wp-content/uploads/2021/05/tempe-lombok-ijo-santan_.jpg",
          "pairing_group": "cooked_or_ready_vegetable",
          "pairing_role": "vegetable",
          "calories_100g": 240,
          "ideal_grams": 50,
          "ideal_calories": 120,
          "ideal_protein": 3,
          "ideal_fat": 1.35,
          "ideal_carb": 24.65,
          "match_score": 0.7671626210212708
        }
      ]
    },
    {
      "meal_name": "Hari 2 - Jumat - Sarapan (25%)",
      "target_calories": 440.5,
      "recommendations": [
        {
          "food_id": "FD0333",
          "food_name": "[Camilan/Roti] kue tambang",
          "image_url": "https://asset.kompas.com/crops/x2yGurVUxpP-COxvvOjVx2P7lL0=/100x67:900x600/750x500/data/photo/2022/04/14/62578f6fbc8b8.jpg",
          "pairing_group": "sweet_snack",
          "pairing_role": "sweet_snack",
          "calories_100g": 512,
          "ideal_grams": 55.9228515625,
          "ideal_calories": 286.325,
          "ideal_protein": 14.53994140625,
          "ideal_fat": 14.53994140625,
          "ideal_carb": 33.77740234375,
          "match_score": 2.440267264842987
        },
        {
          "food_id": "FD0539",
          "food_name": "[Pendamping] susu kental manis",
          "image_url": "https://asset.kompas.com/crops/C220cRbRPu0EoI8SMHWr0HeFGuU=/0x0:750x500/750x500/data/photo/2022/06/03/6299dc0edf868.jpg",
          "pairing_group": "dairy_pairing",
          "pairing_role": "dairy",
          "calories_100g": 336,
          "ideal_grams": 45.885416666666664,
          "ideal_calories": 154.17499999999998,
          "ideal_protein": 3.762604166666666,
          "ideal_fat": 4.588541666666667,
          "ideal_carb": 25.236979166666668,
          "match_score": 0.8438206315040588
        }
      ]
    },
    {
      "meal_name": "Hari 2 - Jumat - Makan Siang (40%)",
      "target_calories": 704.8000000000001,
      "recommendations": [
        {
          "food_id": "FD0593",
          "food_name": "[Karbo] nasi merah",
          "image_url": "https://tokohinspiratif.id/wp-content/uploads/2019/03/WhatsApp-Image-2019-03-25-at-16.10.19-1280x640.jpeg",
          "pairing_group": "rice_noodle_staple",
          "pairing_role": "staple",
          "calories_100g": 357,
          "ideal_grams": 88.84033613445379,
          "ideal_calories": 317.16,
          "ideal_protein": 7.817949579831935,
          "ideal_fat": 0.44420168067226895,
          "ideal_carb": 70.62806722689076,
          "match_score": 3.016125702857971
        },
        {
          "food_id": "FD0117",
          "food_name": "[Lauk] dendeng daging sapi",
          "image_url": "https://awsimages.detik.net.id/community/media/visual/2022/02/20/resep-dendeng-sapi-medan_43.jpeg?w=700&q=90",
          "pairing_group": "traditional_protein",
          "pairing_role": "protein",
          "calories_100g": 433,
          "ideal_grams": 65.10854503464203,
          "ideal_calories": 281.92,
          "ideal_protein": 35.809699769053125,
          "ideal_fat": 5.859769053117783,
          "ideal_carb": 0,
          "match_score": 0.9056323170661926
        },
        {
          "food_id": "FD0505",
          "food_name": "[Sayur] semur jengkol",
          "image_url": "https://assets.pikiran-rakyat.com/crop/0x135:1080x1215/x/photo/2020/11/25/1187166638.jpg",
          "pairing_group": "cooked_or_ready_vegetable",
          "pairing_role": "vegetable",
          "calories_100g": 192.5,
          "ideal_grams": 54.91948051948052,
          "ideal_calories": 105.72000000000001,
          "ideal_protein": 2.4713766233766234,
          "ideal_fat": 3.2951688311688314,
          "ideal_carb": 16.640602597402598,
          "match_score": 0.7146427035331726
        }
      ]
    },
    {
      "meal_name": "Hari 2 - Jumat - Makan Malam (35%)",
      "target_calories": 616.6999999999999,
      "recommendations": [
        {
          "food_id": "FD0392",
          "food_name": "[Karbo] nasi jagung",
          "image_url": "https://tokohinspiratif.id/wp-content/uploads/2019/03/WhatsApp-Image-2019-03-25-at-16.10.19-1280x640.jpeg",
          "pairing_group": "rice_noodle_staple",
          "pairing_role": "staple",
          "calories_100g": 357,
          "ideal_grams": 77.73529411764706,
          "ideal_calories": 277.515,
          "ideal_protein": 6.840705882352942,
          "ideal_fat": 0.3886764705882353,
          "ideal_carb": 61.799558823529416,
          "match_score": 2.8648921251296997
        },
        {
          "food_id": "FD0399",
          "food_name": "[Lauk] oncom goreng",
          "image_url": "https://t-2.tstatic.net/medan/foto/bank/images/Resep-Oncom-Goreng-Tepung.jpg",
          "pairing_group": "traditional_protein",
          "pairing_role": "protein",
          "calories_100g": 363.3,
          "ideal_grams": 67.89980732177263,
          "ideal_calories": 246.67999999999995,
          "ideal_protein": 13.104662813102117,
          "ideal_fat": 13.104662813102117,
          "ideal_carb": 27.363622350674365,
          "match_score": 0.8873828053474426
        },
        {
          "food_id": "FD0203",
          "food_name": "[Sayur] jagung sayur tumis",
          "image_url": "https://ibusayur.my.id/wp-content/uploads/2022/08/ibusayur.my.id-sayur-nangka-51661b26-eb56-4072-8613-65cb6b4c2ecb.png",
          "pairing_group": "cooked_or_ready_vegetable",
          "pairing_role": "vegetable",
          "calories_100g": 148.9,
          "ideal_grams": 62.12558764271322,
          "ideal_calories": 92.505,
          "ideal_protein": 6.461061114842176,
          "ideal_fat": 6.461061114842176,
          "ideal_carb": 12.487243116185358,
          "match_score": 0.6888877153396606
        }
      ]
    },
    {
      "meal_name": "Hari 3 - Sabtu - Sarapan (25%)",
      "target_calories": 440.5,
      "recommendations": [
        {
          "food_id": "FD0099",
          "food_name": "[Camilan/Roti] coklat pahit batang",
          "image_url": "https://nilaigizi.com/assets/images/produk/produk_1535873875.jpg",
          "pairing_group": "sweet_snack",
          "pairing_role": "sweet_snack",
          "calories_100g": 504,
          "ideal_grams": 56.810515873015866,
          "ideal_calories": 286.325,
          "ideal_protein": 3.1245783730158725,
          "ideal_fat": 30.052762896825396,
          "ideal_carb": 16.588670634920632,
          "match_score": 2.4298349022865295
        },
        {
          "food_id": "FD0276",
          "food_name": "[Pendamping] keju",
          "image_url": "https://cdns.klimg.com/merdeka.com/i/w/news/2020/05/08/1175035/content_images/670x335/20200508114326-1-ilustrasi-keju-008-destriyana.jpg",
          "pairing_group": "dairy_pairing",
          "pairing_role": "dairy",
          "calories_100g": 326,
          "ideal_grams": 47.29294478527607,
          "ideal_calories": 154.17499999999998,
          "ideal_protein": 10.782791411042945,
          "ideal_fat": 9.600467791411043,
          "ideal_carb": 6.195375766871165,
          "match_score": 0.831823468208313
        }
      ]
    },
    {
      "meal_name": "Hari 3 - Sabtu - Makan Siang (40%)",
      "target_calories": 704.8000000000001,
      "recommendations": [
        {
          "food_id": "FD0392",
          "food_name": "[Karbo] nasi jagung",
          "image_url": "https://tokohinspiratif.id/wp-content/uploads/2019/03/WhatsApp-Image-2019-03-25-at-16.10.19-1280x640.jpeg",
          "pairing_group": "rice_noodle_staple",
          "pairing_role": "staple",
          "calories_100g": 357,
          "ideal_grams": 88.84033613445379,
          "ideal_calories": 317.16,
          "ideal_protein": 7.817949579831935,
          "ideal_fat": 0.44420168067226895,
          "ideal_carb": 70.62806722689076,
          "match_score": 2.866125702857971
        },
        {
          "food_id": "FD0559",
          "food_name": "[Lauk] telur ayam ceplok",
          "image_url": "https://asset.kompas.com/crops/iCoT-Kr0xhu1V1MGOEhihIfgbYk=/0x0:498x332/750x500/data/photo/2020/02/07/5e3d3ae57251e.jpg",
          "pairing_group": "traditional_protein",
          "pairing_role": "protein",
          "calories_100g": 383,
          "ideal_grams": 73.60835509138381,
          "ideal_calories": 281.92,
          "ideal_protein": 11.114861618798956,
          "ideal_fat": 24.217148825065273,
          "ideal_carb": 6.109493472584857,
          "match_score": 0.8810030221939087
        },
        {
          "food_id": "FD0495",
          "food_name": "[Sayur] sayur garu",
          "image_url": "https://image.akurat.co/images/uploads/images/akurat_20181220020604_MYQ3rr.jpg",
          "pairing_group": "cooked_or_ready_vegetable",
          "pairing_role": "vegetable",
          "calories_100g": 178,
          "ideal_grams": 59.3932584269663,
          "ideal_calories": 105.72000000000001,
          "ideal_protein": 1.5442247191011238,
          "ideal_fat": 8.255662921348316,
          "ideal_carb": 6.295685393258427,
          "match_score": 0.6866510510444641
        }
      ]
    },
    {
      "meal_name": "Hari 3 - Sabtu - Makan Malam (35%)",
      "target_calories": 616.6999999999999,
      "recommendations": [
        {
          "food_id": "FD0392",
          "food_name": "[Karbo] nasi jagung",
          "image_url": "https://tokohinspiratif.id/wp-content/uploads/2019/03/WhatsApp-Image-2019-03-25-at-16.10.19-1280x640.jpeg",
          "pairing_group": "rice_noodle_staple",
          "pairing_role": "staple",
          "calories_100g": 357,
          "ideal_grams": 77.73529411764706,
          "ideal_calories": 277.515,
          "ideal_protein": 6.840705882352942,
          "ideal_fat": 0.3886764705882353,
          "ideal_carb": 61.799558823529416,
          "match_score": 2.8648921251296997
        },
        {
          "food_id": "FD0564",
          "food_name": "[Lauk] tempe kedelai murni goreng",
          "image_url": "https://media.hitekno.com/thumbs/2020/02/24/21141-ilustrasi-tempe-goreng-shutterstock/730x480-img-21141-ilustrasi-tempe-goreng-shutterstock.jpg",
          "pairing_group": "traditional_protein",
          "pairing_role": "protein",
          "calories_100g": 350,
          "ideal_grams": 70.48,
          "ideal_calories": 246.68,
          "ideal_protein": 17.2676,
          "ideal_fat": 18.747680000000003,
          "ideal_carb": 7.329920000000001,
          "match_score": 0.869939386844635
        },
        {
          "food_id": "FD0583",
          "food_name": "[Sayur] ubi jalar sayur",
          "image_url": "https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/jawapos/2022/11/daun-ubi-jalar.jpg",
          "pairing_group": "cooked_or_ready_vegetable",
          "pairing_role": "vegetable",
          "calories_100g": 184,
          "ideal_grams": 50.27445652173912,
          "ideal_calories": 92.50499999999998,
          "ideal_protein": 0.7038423913043476,
          "ideal_fat": 0.15082336956521736,
          "ideal_carb": 11.311752717391302,
          "match_score": 0.6859257817268372
        }
      ]
    },
    {
      "meal_name": "Hari 4 - Minggu - Sarapan (25%)",
      "target_calories": 440.5,
      "recommendations": [
        {
          "food_id": "FD0098",
          "food_name": "[Camilan/Roti] coklat manis batang",
          "image_url": "https://www.mampu.or.id/wp-content/uploads/2022/10/6007a9065cace.jpeg",
          "pairing_group": "sweet_snack",
          "pairing_role": "sweet_snack",
          "calories_100g": 472,
          "ideal_grams": 60.662076271186436,
          "ideal_calories": 286.325,
          "ideal_protein": 1.2132415254237288,
          "ideal_fat": 18.077298728813556,
          "ideal_carb": 38.035121822033894,
          "match_score": 2.4180684089660645
        },
        {
          "food_id": "FD0100",
          "food_name": "[Pendamping] coklat susu batang",
          "image_url": "https://www.nyonyor.com/wp-content/uploads/2018/11/Harga-Coklat-Batangan-Terbaru-540x350.jpg",
          "pairing_group": "dairy_pairing",
          "pairing_role": "dairy",
          "calories_100g": 381,
          "ideal_grams": 40.46587926509186,
          "ideal_calories": 154.17499999999998,
          "ideal_protein": 3.641929133858267,
          "ideal_fat": 14.163057742782149,
          "ideal_carb": 21.689711286089235,
          "match_score": 0.74614999294281
        }
      ]
    },
    {
      "meal_name": "Hari 4 - Minggu - Makan Siang (40%)",
      "target_calories": 704.8000000000001,
      "recommendations": [
        {
          "food_id": "FD0392",
          "food_name": "[Karbo] nasi jagung",
          "image_url": "https://tokohinspiratif.id/wp-content/uploads/2019/03/WhatsApp-Image-2019-03-25-at-16.10.19-1280x640.jpeg",
          "pairing_group": "rice_noodle_staple",
          "pairing_role": "staple",
          "calories_100g": 357,
          "ideal_grams": 88.84033613445379,
          "ideal_calories": 317.16,
          "ideal_protein": 7.817949579831935,
          "ideal_fat": 0.44420168067226895,
          "ideal_carb": 70.62806722689076,
          "match_score": 2.866125702857971
        },
        {
          "food_id": "FD0015",
          "food_name": "[Lauk] ayam goreng church texas dada",
          "image_url": "https://i0.wp.com/harga.web.id/wp-content/uploads/Harga-Texas-Chicken-Reguler-dan-Promo.jpg?fit=680%2C300&ssl=1",
          "pairing_group": "traditional_protein",
          "pairing_role": "protein",
          "calories_100g": 338,
          "ideal_grams": 83.40828402366864,
          "ideal_calories": 281.92,
          "ideal_protein": 29.359715976331366,
          "ideal_fat": 17.18210650887574,
          "ideal_carb": 0.3336331360946746,
          "match_score": 0.8613165616989136
        },
        {
          "food_id": "FD0213",
          "food_name": "[Sayur] jamur kuping kering",
          "image_url": "https://asset.kompas.com/crops/3caJpamNwFqn62cq9Tf8ZRPsIh4=/0x41:1000x707/750x500/data/photo/2021/12/06/61ad642aaebd0.jpg",
          "pairing_group": "cooked_or_ready_vegetable",
          "pairing_role": "vegetable",
          "calories_100g": 294,
          "ideal_grams": 50,
          "ideal_calories": 147,
          "ideal_protein": 8,
          "ideal_fat": 0.45000000000000007,
          "ideal_carb": 32.3,
          "match_score": 0.681725537776947
        }
      ]
    },
    {
      "meal_name": "Hari 4 - Minggu - Makan Malam (35%)",
      "target_calories": 616.6999999999999,
      "recommendations": [
        {
          "food_id": "FD0392",
          "food_name": "[Karbo] nasi jagung",
          "image_url": "https://tokohinspiratif.id/wp-content/uploads/2019/03/WhatsApp-Image-2019-03-25-at-16.10.19-1280x640.jpeg",
          "pairing_group": "rice_noodle_staple",
          "pairing_role": "staple",
          "calories_100g": 357,
          "ideal_grams": 77.73529411764706,
          "ideal_calories": 277.515,
          "ideal_protein": 6.840705882352942,
          "ideal_fat": 0.3886764705882353,
          "ideal_carb": 61.799558823529416,
          "match_score": 2.8648921251296997
        },
        {
          "food_id": "FD0348",
          "food_name": "[Lauk] leverwost sosis hati",
          "image_url": "https://st3.depositphotos.com/1008077/13205/i/600/depositphotos_132052478-stock-photo-calf-liver-sausage.jpg",
          "pairing_group": "traditional_protein",
          "pairing_role": "protein",
          "calories_100g": 387,
          "ideal_grams": 63.74160206718346,
          "ideal_calories": 246.67999999999998,
          "ideal_protein": 10.198656330749353,
          "ideal_fat": 14.02315245478036,
          "ideal_carb": 1.9122480620155036,
          "match_score": 0.858604371547699
        },
        {
          "food_id": "FD0213",
          "food_name": "[Sayur] jamur kuping kering",
          "image_url": "https://asset.kompas.com/crops/3caJpamNwFqn62cq9Tf8ZRPsIh4=/0x41:1000x707/750x500/data/photo/2021/12/06/61ad642aaebd0.jpg",
          "pairing_group": "cooked_or_ready_vegetable",
          "pairing_role": "vegetable",
          "calories_100g": 294,
          "ideal_grams": 50,
          "ideal_calories": 147,
          "ideal_protein": 8,
          "ideal_fat": 0.45000000000000007,
          "ideal_carb": 32.3,
          "match_score": 0.6807356834411621
        }
      ]
    },
    {
      "meal_name": "Hari 5 - Senin - Sarapan (25%)",
      "target_calories": 440.5,
      "recommendations": [
        {
          "food_id": "FD0066",
          "food_name": "[Camilan/Roti] biskuit",
          "image_url": "https://s4.bukalapak.com/bukalapak-kontenz-production/content_attachments/57314/original/main_merek_biskuit_enak_shutterstock.jpg",
          "pairing_group": "sweet_snack",
          "pairing_role": "sweet_snack",
          "calories_100g": 458,
          "ideal_grams": 62.516375545851524,
          "ideal_calories": 286.325,
          "ideal_protein": 4.313629912663756,
          "ideal_fat": 9.00235807860262,
          "ideal_carb": 46.94979803493449,
          "match_score": 2.411121666431427
        },
        {
          "food_id": "FD0100",
          "food_name": "[Pendamping] coklat susu batang",
          "image_url": "https://www.nyonyor.com/wp-content/uploads/2018/11/Harga-Coklat-Batangan-Terbaru-540x350.jpg",
          "pairing_group": "dairy_pairing",
          "pairing_role": "dairy",
          "calories_100g": 381,
          "ideal_grams": 40.46587926509186,
          "ideal_calories": 154.17499999999998,
          "ideal_protein": 3.641929133858267,
          "ideal_fat": 14.163057742782149,
          "ideal_carb": 21.689711286089235,
          "match_score": 0.74614999294281
        }
      ]
    },
    {
      "meal_name": "Hari 5 - Senin - Makan Siang (40%)",
      "target_calories": 704.8000000000001,
      "recommendations": [
        {
          "food_id": "FD0392",
          "food_name": "[Karbo] nasi jagung",
          "image_url": "https://tokohinspiratif.id/wp-content/uploads/2019/03/WhatsApp-Image-2019-03-25-at-16.10.19-1280x640.jpeg",
          "pairing_group": "rice_noodle_staple",
          "pairing_role": "staple",
          "calories_100g": 357,
          "ideal_grams": 88.84033613445379,
          "ideal_calories": 317.16,
          "ideal_protein": 7.817949579831935,
          "ideal_fat": 0.44420168067226895,
          "ideal_carb": 70.62806722689076,
          "match_score": 2.866125702857971
        },
        {
          "food_id": "FD0565",
          "food_name": "[Lauk] tempe pasar goreng",
          "image_url": "https://cdn.antaranews.com/cache/800x533/2021/01/23/tempe.jpg",
          "pairing_group": "traditional_protein",
          "pairing_role": "protein",
          "calories_100g": 336,
          "ideal_grams": 83.9047619047619,
          "ideal_calories": 281.91999999999996,
          "ideal_protein": 16.78095238095238,
          "ideal_fat": 23.493333333333332,
          "ideal_carb": 6.544571428571428,
          "match_score": 0.8591155409812927
        },
        {
          "food_id": "FD0213",
          "food_name": "[Sayur] jamur kuping kering",
          "image_url": "https://asset.kompas.com/crops/3caJpamNwFqn62cq9Tf8ZRPsIh4=/0x41:1000x707/750x500/data/photo/2021/12/06/61ad642aaebd0.jpg",
          "pairing_group": "cooked_or_ready_vegetable",
          "pairing_role": "vegetable",
          "calories_100g": 294,
          "ideal_grams": 50,
          "ideal_calories": 147,
          "ideal_protein": 8,
          "ideal_fat": 0.45000000000000007,
          "ideal_carb": 32.3,
          "match_score": 0.681725537776947
        }
      ]
    },
    {
      "meal_name": "Hari 5 - Senin - Makan Malam (35%)",
      "target_calories": 616.6999999999999,
      "recommendations": [
        {
          "food_id": "FD0392",
          "food_name": "[Karbo] nasi jagung",
          "image_url": "https://tokohinspiratif.id/wp-content/uploads/2019/03/WhatsApp-Image-2019-03-25-at-16.10.19-1280x640.jpeg",
          "pairing_group": "rice_noodle_staple",
          "pairing_role": "staple",
          "calories_100g": 357,
          "ideal_grams": 77.73529411764706,
          "ideal_calories": 277.515,
          "ideal_protein": 6.840705882352942,
          "ideal_fat": 0.3886764705882353,
          "ideal_carb": 61.799558823529416,
          "match_score": 2.8648921251296997
        },
        {
          "food_id": "FD0563",
          "food_name": "[Lauk] tempe goreng",
          "image_url": "https://asset.kompas.com/crops/tnGS6LHPv4vxzDYTS-JJdLXBrjo=/0x41:1000x708/1200x800/data/photo/2020/04/01/5e841eccea33c.jpg",
          "pairing_group": "traditional_protein",
          "pairing_role": "protein",
          "calories_100g": 328,
          "ideal_grams": 75.20731707317071,
          "ideal_calories": 246.67999999999992,
          "ideal_protein": 13.83814634146341,
          "ideal_fat": 17.448097560975604,
          "ideal_carb": 9.626536585365852,
          "match_score": 0.8481196761131287
        },
        {
          "food_id": "FD0213",
          "food_name": "[Sayur] jamur kuping kering",
          "image_url": "https://asset.kompas.com/crops/3caJpamNwFqn62cq9Tf8ZRPsIh4=/0x41:1000x707/750x500/data/photo/2021/12/06/61ad642aaebd0.jpg",
          "pairing_group": "cooked_or_ready_vegetable",
          "pairing_role": "vegetable",
          "calories_100g": 294,
          "ideal_grams": 50,
          "ideal_calories": 147,
          "ideal_protein": 8,
          "ideal_fat": 0.45000000000000007,
          "ideal_carb": 32.3,
          "match_score": 0.6807356834411621
        }
      ]
    },
    {
      "meal_name": "Hari 6 - Selasa - Sarapan (25%)",
      "target_calories": 440.5,
      "recommendations": [
        {
          "food_id": "FD0030",
          "food_name": "[Camilan/Roti] bagea kelapa manis",
          "image_url": "https://s3.theasianparent.com/tap-assets-prod/wp-content/uploads/sites/24/2022/03/kue-bagea-featured-650x339.jpg",
          "pairing_group": "sweet_snack",
          "pairing_role": "sweet_snack",
          "calories_100g": 452,
          "ideal_grams": 63.34623893805309,
          "ideal_calories": 286.32499999999993,
          "ideal_protein": 0.8235011061946903,
          "ideal_fat": 8.741780973451327,
          "ideal_carb": 51.057068584070784,
          "match_score": 2.4073943495750427
        },
        {
          "food_id": "FD0100",
          "food_name": "[Pendamping] coklat susu batang",
          "image_url": "https://www.nyonyor.com/wp-content/uploads/2018/11/Harga-Coklat-Batangan-Terbaru-540x350.jpg",
          "pairing_group": "dairy_pairing",
          "pairing_role": "dairy",
          "calories_100g": 381,
          "ideal_grams": 40.46587926509186,
          "ideal_calories": 154.17499999999998,
          "ideal_protein": 3.641929133858267,
          "ideal_fat": 14.163057742782149,
          "ideal_carb": 21.689711286089235,
          "match_score": 0.74614999294281
        }
      ]
    },
    {
      "meal_name": "Hari 6 - Selasa - Makan Siang (40%)",
      "target_calories": 704.8000000000001,
      "recommendations": [
        {
          "food_id": "FD0392",
          "food_name": "[Karbo] nasi jagung",
          "image_url": "https://tokohinspiratif.id/wp-content/uploads/2019/03/WhatsApp-Image-2019-03-25-at-16.10.19-1280x640.jpeg",
          "pairing_group": "rice_noodle_staple",
          "pairing_role": "staple",
          "calories_100g": 357,
          "ideal_grams": 88.84033613445379,
          "ideal_calories": 317.16,
          "ideal_protein": 7.817949579831935,
          "ideal_fat": 0.44420168067226895,
          "ideal_carb": 70.62806722689076,
          "match_score": 2.866125702857971
        },
        {
          "food_id": "FD0561",
          "food_name": "[Lauk] telur bebek ceplok",
          "image_url": "https://statik.tempo.co/data/2020/06/02/id_942491/942491_720.jpg",
          "pairing_group": "traditional_protein",
          "pairing_role": "protein",
          "calories_100g": 320,
          "ideal_grams": 88.1,
          "ideal_calories": 281.92,
          "ideal_protein": 13.303099999999999,
          "ideal_fat": 26.870499999999996,
          "ideal_carb": 0.7929,
          "match_score": 0.8400092720985413
        },
        {
          "food_id": "FD0213",
          "food_name": "[Sayur] jamur kuping kering",
          "image_url": "https://asset.kompas.com/crops/3caJpamNwFqn62cq9Tf8ZRPsIh4=/0x41:1000x707/750x500/data/photo/2021/12/06/61ad642aaebd0.jpg",
          "pairing_group": "cooked_or_ready_vegetable",
          "pairing_role": "vegetable",
          "calories_100g": 294,
          "ideal_grams": 50,
          "ideal_calories": 147,
          "ideal_protein": 8,
          "ideal_fat": 0.45000000000000007,
          "ideal_carb": 32.3,
          "match_score": 0.681725537776947
        }
      ]
    },
    {
      "meal_name": "Hari 6 - Selasa - Makan Malam (35%)",
      "target_calories": 616.6999999999999,
      "recommendations": [
        {
          "food_id": "FD0392",
          "food_name": "[Karbo] nasi jagung",
          "image_url": "https://tokohinspiratif.id/wp-content/uploads/2019/03/WhatsApp-Image-2019-03-25-at-16.10.19-1280x640.jpeg",
          "pairing_group": "rice_noodle_staple",
          "pairing_role": "staple",
          "calories_100g": 357,
          "ideal_grams": 77.73529411764706,
          "ideal_calories": 277.515,
          "ideal_protein": 6.840705882352942,
          "ideal_fat": 0.3886764705882353,
          "ideal_carb": 61.799558823529416,
          "match_score": 2.8648921251296997
        },
        {
          "food_id": "FD0019",
          "food_name": "[Lauk] ayam goreng mbok berek dada",
          "image_url": "https://img-global.cpcdn.com/recipes/d15c8abab4246c58/680x482cq70/ayam-goreng-mbok-berek-foto-resep-utama.jpg",
          "pairing_group": "traditional_protein",
          "pairing_role": "protein",
          "calories_100g": 295,
          "ideal_grams": 83.62033898305083,
          "ideal_calories": 246.67999999999995,
          "ideal_protein": 32.779172881355926,
          "ideal_fat": 11.372366101694913,
          "ideal_carb": 0.8362033898305083,
          "match_score": 0.8324769735336304
        },
        {
          "food_id": "FD0213",
          "food_name": "[Sayur] jamur kuping kering",
          "image_url": "https://asset.kompas.com/crops/3caJpamNwFqn62cq9Tf8ZRPsIh4=/0x41:1000x707/750x500/data/photo/2021/12/06/61ad642aaebd0.jpg",
          "pairing_group": "cooked_or_ready_vegetable",
          "pairing_role": "vegetable",
          "calories_100g": 294,
          "ideal_grams": 50,
          "ideal_calories": 147,
          "ideal_protein": 8,
          "ideal_fat": 0.45000000000000007,
          "ideal_carb": 32.3,
          "match_score": 0.6807356834411621
        }
      ]
    },
    {
      "meal_name": "Hari 7 - Rabu - Sarapan (25%)",
      "target_calories": 440.5,
      "recommendations": [
        {
          "food_id": "FD0029",
          "food_name": "[Camilan/Roti] bagea kelapa asin",
          "image_url": "https://resepkoki.id/wp-content/uploads/2018/02/Resep-Kue-Bagea.jpg",
          "pairing_group": "sweet_snack",
          "pairing_role": "sweet_snack",
          "calories_100g": 450,
          "ideal_grams": 63.62777777777777,
          "ideal_calories": 286.325,
          "ideal_protein": 2.0360888888888886,
          "ideal_fat": 8.844261111111111,
          "ideal_carb": 49.69329444444443,
          "match_score": 2.4069460034370422
        },
        {
          "food_id": "FD0100",
          "food_name": "[Pendamping] coklat susu batang",
          "image_url": "https://www.nyonyor.com/wp-content/uploads/2018/11/Harga-Coklat-Batangan-Terbaru-540x350.jpg",
          "pairing_group": "dairy_pairing",
          "pairing_role": "dairy",
          "calories_100g": 381,
          "ideal_grams": 40.46587926509186,
          "ideal_calories": 154.17499999999998,
          "ideal_protein": 3.641929133858267,
          "ideal_fat": 14.163057742782149,
          "ideal_carb": 21.689711286089235,
          "match_score": 0.74614999294281
        }
      ]
    },
    {
      "meal_name": "Hari 7 - Rabu - Makan Siang (40%)",
      "target_calories": 704.8000000000001,
      "recommendations": [
        {
          "food_id": "FD0392",
          "food_name": "[Karbo] nasi jagung",
          "image_url": "https://tokohinspiratif.id/wp-content/uploads/2019/03/WhatsApp-Image-2019-03-25-at-16.10.19-1280x640.jpeg",
          "pairing_group": "rice_noodle_staple",
          "pairing_role": "staple",
          "calories_100g": 357,
          "ideal_grams": 88.84033613445379,
          "ideal_calories": 317.16,
          "ideal_protein": 7.817949579831935,
          "ideal_fat": 0.44420168067226895,
          "ideal_carb": 70.62806722689076,
          "match_score": 2.866125702857971
        },
        {
          "food_id": "FD0012",
          "food_name": "[Lauk] ayam goreng kentuckysayap",
          "image_url": "https://img-global.cpcdn.com/recipes/2ecb088a495ef73a/680x482cq70/ayam-goreng-kentucky-foto-resep-utama.jpg",
          "pairing_group": "traditional_protein",
          "pairing_role": "protein",
          "calories_100g": 297,
          "ideal_grams": 94.92255892255893,
          "ideal_calories": 281.9200000000001,
          "ideal_protein": 34.07719865319866,
          "ideal_fat": 14.428228956228958,
          "ideal_carb": 1.518760942760943,
          "match_score": 0.8338227868080139
        },
        {
          "food_id": "FD0213",
          "food_name": "[Sayur] jamur kuping kering",
          "image_url": "https://asset.kompas.com/crops/3caJpamNwFqn62cq9Tf8ZRPsIh4=/0x41:1000x707/750x500/data/photo/2021/12/06/61ad642aaebd0.jpg",
          "pairing_group": "cooked_or_ready_vegetable",
          "pairing_role": "vegetable",
          "calories_100g": 294,
          "ideal_grams": 50,
          "ideal_calories": 147,
          "ideal_protein": 8,
          "ideal_fat": 0.45000000000000007,
          "ideal_carb": 32.3,
          "match_score": 0.681725537776947
        }
      ]
    },
    {
      "meal_name": "Hari 7 - Rabu - Makan Malam (35%)",
      "target_calories": 616.6999999999999,
      "recommendations": [
        {
          "food_id": "FD0392",
          "food_name": "[Karbo] nasi jagung",
          "image_url": "https://tokohinspiratif.id/wp-content/uploads/2019/03/WhatsApp-Image-2019-03-25-at-16.10.19-1280x640.jpeg",
          "pairing_group": "rice_noodle_staple",
          "pairing_role": "staple",
          "calories_100g": 357,
          "ideal_grams": 77.73529411764706,
          "ideal_calories": 277.515,
          "ideal_protein": 6.840705882352942,
          "ideal_fat": 0.3886764705882353,
          "ideal_carb": 61.799558823529416,
          "match_score": 2.8648921251296997
        },
        {
          "food_id": "FD0023",
          "food_name": "[Lauk] ayam goreng pioneer dada",
          "image_url": "https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/IDITE20210726121341017693/detail/menueditor_item_428cb0ea19e44146a00e1cfbef85faae_1627524568218570621.webp",
          "pairing_group": "traditional_protein",
          "pairing_role": "protein",
          "calories_100g": 295,
          "ideal_grams": 83.62033898305083,
          "ideal_calories": 246.67999999999995,
          "ideal_protein": 31.27400677966101,
          "ideal_fat": 12.292189830508471,
          "ideal_carb": 0.5017220338983049,
          "match_score": 0.831069827079773
        },
        {
          "food_id": "FD0213",
          "food_name": "[Sayur] jamur kuping kering",
          "image_url": "https://asset.kompas.com/crops/3caJpamNwFqn62cq9Tf8ZRPsIh4=/0x41:1000x707/750x500/data/photo/2021/12/06/61ad642aaebd0.jpg",
          "pairing_group": "cooked_or_ready_vegetable",
          "pairing_role": "vegetable",
          "calories_100g": 294,
          "ideal_grams": 50,
          "ideal_calories": 147,
          "ideal_protein": 8,
          "ideal_fat": 0.45000000000000007,
          "ideal_carb": 32.3,
          "match_score": 0.6807356834411621
        }
      ]
    }
  ],
  "narrative_summary": "Wah, ide bagus banget nih pengen makan sehat dan pastinya bikin kenyang! Penting banget lho memilih asupan yang bisa bikin kita nyaman tanpa merasa kelaparan lagi, biar aktivitas harian tetap semangat. Nah, NutriAI punya rekomendasi seru nih: coba deh nasi jagung sebanyak 89 gram, pas banget buat bantu kamu mencapai target 1762 kalori. Dijamin perut kenyang, nutrisi terpenuhi, dan kamu pun siap beraktivitas lagi dengan energi maksimal!"
}
```

# Skenario 4 - Dengan Food Preferences
## Body Req
```json
{
  "target_macros": {
    "calories": 1762,
    "protein_g": 110,
    "fat_g": 59,
    "carb_g": 198
  },
  "allergies": {
    "gluten": 0,
    "dairy": 0,
    "nuts": 0,
    "peanut": 0,
    "seafood": 0,
    "egg": 0,
    "soy": 0,
    "celery": 0
  },
  "breakfast_prefs": {
    "food_category": [],
    "main_ingredients": []
  },
  "lunch_prefs": {
    "food_category": ["berkuah"],
    "main_ingredients": []
  },
  "dinner_prefs": {
    "food_category": ["karbohidrat_pokok"],
    "main_ingredients": []
  },
  "user_text": "",
  "start_date": "2026-05-28",
  "days": 7,
  "variety_penalty": 0.15,
  "halal_only": false
}
```
## Response
```json
{
  "daily_plan": [
    {
      "meal_name": "Hari 1 - Kamis - Sarapan (25%)",
      "target_calories": 440.5,
      "recommendations": [
        {
          "food_id": "FD0397",
          "food_name": "[Camilan/Roti] noga kacang tanah",
          "image_url": "https://t-2.tstatic.net/priangan/foto/bank/images/Noga-Suuk.jpg",
          "pairing_group": "sweet_snack",
          "pairing_role": "sweet_snack",
          "calories_100g": 600,
          "ideal_grams": 47.72083333333333,
          "ideal_calories": 286.325,
          "ideal_protein": 6.680916666666667,
          "ideal_fat": 19.899587500000003,
          "ideal_carb": 20.042749999999998,
          "match_score": 2.451378881931305
        },
        {
          "food_id": "FD0277",
          "food_name": "[Pendamping] keju kacang tanah",
          "image_url": "https://img.freepik.com/free-photo/cheddar-cheese-dark-wooden-surface_1150-41937.jpg?w=1060&t=st=1684238932~exp=1684239532~hmac=578424a4cc6bde6d195628ec281e5daa943e767e0e6d813354904914dc34af51",
          "pairing_group": "dairy_pairing",
          "pairing_role": "dairy",
          "calories_100g": 590,
          "ideal_grams": 30,
          "ideal_calories": 177,
          "ideal_protein": 8.100000000000001,
          "ideal_fat": 14.7,
          "ideal_carb": 6.27,
          "match_score": 0.9515949487686157
        }
      ]
    },
    {
      "meal_name": "Hari 1 - Kamis - Makan Siang (40%)",
      "target_calories": 704.8000000000001,
      "recommendations": [
        {
          "food_id": "FD0367",
          "food_name": "[Makanan Utama] martabak mesir",
          "image_url": "https://www.resepkuerenyah.com/wp-content/uploads/2016/11/45.-resep-martabak-mesir.jpg",
          "pairing_group": "complete_menu",
          "pairing_role": "complete",
          "calories_100g": 278,
          "ideal_grams": 253.5251798561151,
          "ideal_calories": 704.8,
          "ideal_protein": 12.929784172661869,
          "ideal_fat": 21.8031654676259,
          "ideal_carb": 114.0863309352518,
          "match_score": 0.987657904624939
        }
      ]
    },
    {
      "meal_name": "Hari 1 - Kamis - Makan Malam (35%)",
      "target_calories": 616.6999999999999,
      "recommendations": [
        {
          "food_id": "FD0377",
          "food_name": "[Makanan Utama] mie goreng",
          "image_url": "https://kbu-cdn.com/dk/wp-content/uploads/mie-goreng-korea.jpg",
          "pairing_group": "complete_menu",
          "pairing_role": "complete",
          "calories_100g": 468,
          "ideal_grams": 131.77350427350424,
          "ideal_calories": 616.6999999999998,
          "ideal_protein": 10.014786324786323,
          "ideal_fat": 26.881794871794863,
          "ideal_carb": 82.22666666666665,
          "match_score": 0.9845648407936096
        }
      ]
    },
    {
      "meal_name": "Hari 2 - Jumat - Sarapan (25%)",
      "target_calories": 440.5,
      "recommendations": [
        {
          "food_id": "FD0321",
          "food_name": "[Camilan/Roti] kue kelapa",
          "image_url": "https://assets.suaramerdeka.com/crop/0x0:0x0/750x500/webp/photo/2023/01/03/3184254010.png",
          "pairing_group": "sweet_snack",
          "pairing_role": "sweet_snack",
          "calories_100g": 591,
          "ideal_grams": 48.447546531302876,
          "ideal_calories": 286.325,
          "ideal_protein": 2.713062605752961,
          "ideal_fat": 20.39641708967851,
          "ideal_carb": 23.012584602368864,
          "match_score": 2.4477989077568054
        },
        {
          "food_id": "FD0100",
          "food_name": "[Pendamping] coklat susu batang",
          "image_url": "https://www.nyonyor.com/wp-content/uploads/2018/11/Harga-Coklat-Batangan-Terbaru-540x350.jpg",
          "pairing_group": "dairy_pairing",
          "pairing_role": "dairy",
          "calories_100g": 381,
          "ideal_grams": 40.46587926509186,
          "ideal_calories": 154.17499999999998,
          "ideal_protein": 3.641929133858267,
          "ideal_fat": 14.163057742782149,
          "ideal_carb": 21.689711286089235,
          "match_score": 0.8961499929428101
        }
      ]
    },
    {
      "meal_name": "Hari 2 - Jumat - Makan Siang (40%)",
      "target_calories": 704.8000000000001,
      "recommendations": [
        {
          "food_id": "FD0050",
          "food_name": "[Makanan Utama] beef yakiniku masakan",
          "image_url": "https://asset.kompas.com/crops/awoHyKStB8lI_yqs1PTI3VjIHsE=/78x42:958x629/750x500/data/photo/2022/12/08/6391613d09412.jpg",
          "pairing_group": "complete_menu",
          "pairing_role": "complete",
          "calories_100g": 132,
          "ideal_grams": 500,
          "ideal_calories": 660,
          "ideal_protein": 49,
          "ideal_fat": 5.500000000000001,
          "ideal_carb": 103.5,
          "match_score": 0.896346390247345
        }
      ]
    },
    {
      "meal_name": "Hari 2 - Jumat - Makan Malam (35%)",
      "target_calories": 616.6999999999999,
      "recommendations": [
        {
          "food_id": "FD0393",
          "food_name": "[Makanan Utama] nasi rames",
          "image_url": "https://o-cdn-cas.sirclocdn.com/parenting/images/nasi-rames.width-800.format-webp.webp",
          "pairing_group": "complete_menu",
          "pairing_role": "complete",
          "calories_100g": 155,
          "ideal_grams": 397.87096774193543,
          "ideal_calories": 616.6999999999999,
          "ideal_protein": 40.980709677419355,
          "ideal_fat": 16.71058064516129,
          "ideal_carb": 75.99335483870966,
          "match_score": 0.8464219570159912
        }
      ]
    },
    {
      "meal_name": "Hari 3 - Sabtu - Sarapan (25%)",
      "target_calories": 440.5,
      "recommendations": [
        {
          "food_id": "FD0333",
          "food_name": "[Camilan/Roti] kue tambang",
          "image_url": "https://asset.kompas.com/crops/x2yGurVUxpP-COxvvOjVx2P7lL0=/100x67:900x600/750x500/data/photo/2022/04/14/62578f6fbc8b8.jpg",
          "pairing_group": "sweet_snack",
          "pairing_role": "sweet_snack",
          "calories_100g": 512,
          "ideal_grams": 55.9228515625,
          "ideal_calories": 286.325,
          "ideal_protein": 14.53994140625,
          "ideal_fat": 14.53994140625,
          "ideal_carb": 33.77740234375,
          "match_score": 2.440267264842987
        },
        {
          "food_id": "FD0539",
          "food_name": "[Pendamping] susu kental manis",
          "image_url": "https://asset.kompas.com/crops/C220cRbRPu0EoI8SMHWr0HeFGuU=/0x0:750x500/750x500/data/photo/2022/06/03/6299dc0edf868.jpg",
          "pairing_group": "dairy_pairing",
          "pairing_role": "dairy",
          "calories_100g": 336,
          "ideal_grams": 45.885416666666664,
          "ideal_calories": 154.17499999999998,
          "ideal_protein": 3.762604166666666,
          "ideal_fat": 4.588541666666667,
          "ideal_carb": 25.236979166666668,
          "match_score": 0.8438206315040588
        }
      ]
    },
    {
      "meal_name": "Hari 3 - Sabtu - Makan Siang (40%)",
      "target_calories": 704.8000000000001,
      "recommendations": [
        {
          "food_id": "FD0139",
          "food_name": "[Makanan Utama] gado-gado",
          "image_url": "https://img.kurio.network/rlKzeW_1_iLZ-JMm9fFHX-rGdIE=/1200x1200/filters:quality(80)/https://kurio-img.kurioapps.com/22/06/22/53264347-b7ba-4257-852d-04e3d1b4e4e5.jpe",
          "pairing_group": "complete_menu",
          "pairing_role": "complete",
          "calories_100g": 137,
          "ideal_grams": 500,
          "ideal_calories": 685,
          "ideal_protein": 30.5,
          "ideal_fat": 16,
          "ideal_carb": 105,
          "match_score": 0.894630491733551
        }
      ]
    },
    {
      "meal_name": "Hari 3 - Sabtu - Makan Malam (35%)",
      "target_calories": 616.6999999999999,
      "recommendations": [
        {
          "food_id": "FD0377",
          "food_name": "[Makanan Utama] mie goreng",
          "image_url": "https://kbu-cdn.com/dk/wp-content/uploads/mie-goreng-korea.jpg",
          "pairing_group": "complete_menu",
          "pairing_role": "complete",
          "calories_100g": 468,
          "ideal_grams": 131.77350427350424,
          "ideal_calories": 616.6999999999998,
          "ideal_protein": 10.014786324786323,
          "ideal_fat": 26.881794871794863,
          "ideal_carb": 82.22666666666665,
          "match_score": 0.8345648407936096
        }
      ]
    },
    {
      "meal_name": "Hari 4 - Minggu - Sarapan (25%)",
      "target_calories": 440.5,
      "recommendations": [
        {
          "food_id": "FD0031",
          "food_name": "[Camilan/Roti] bagea kenari asin",
          "image_url": "https://images.tokopedia.net/img/cache/700/hDjmkQ/2021/10/4/73219f10-0149-4af7-b1ca-c51d90ca767b.jpg",
          "pairing_group": "sweet_snack",
          "pairing_role": "sweet_snack",
          "calories_100g": 529,
          "ideal_grams": 54.12570888468808,
          "ideal_calories": 286.32499999999993,
          "ideal_protein": 1.7320226843100186,
          "ideal_fat": 15.750581285444234,
          "ideal_carb": 34.42395085066162,
          "match_score": 2.432470142841339
        },
        {
          "food_id": "FD0276",
          "food_name": "[Pendamping] keju",
          "image_url": "https://cdns.klimg.com/merdeka.com/i/w/news/2020/05/08/1175035/content_images/670x335/20200508114326-1-ilustrasi-keju-008-destriyana.jpg",
          "pairing_group": "dairy_pairing",
          "pairing_role": "dairy",
          "calories_100g": 326,
          "ideal_grams": 47.29294478527607,
          "ideal_calories": 154.17499999999998,
          "ideal_protein": 10.782791411042945,
          "ideal_fat": 9.600467791411043,
          "ideal_carb": 6.195375766871165,
          "match_score": 0.831823468208313
        }
      ]
    },
    {
      "meal_name": "Hari 4 - Minggu - Makan Siang (40%)",
      "target_calories": 704.8000000000001,
      "recommendations": [
        {
          "food_id": "FD0529",
          "food_name": "[Makanan Utama] soto padang masakan",
          "image_url": "https://topwisata.info/wp-content/uploads/2020/11/resep2Bsoto2Bpadang2B252812529.jpg",
          "pairing_group": "complete_menu",
          "pairing_role": "complete",
          "calories_100g": 127,
          "ideal_grams": 500,
          "ideal_calories": 635,
          "ideal_protein": 29.500000000000004,
          "ideal_fat": 33,
          "ideal_carb": 55,
          "match_score": 0.8940659165382385
        }
      ]
    },
    {
      "meal_name": "Hari 4 - Minggu - Makan Malam (35%)",
      "target_calories": 616.6999999999999,
      "recommendations": [
        {
          "food_id": "FD0377",
          "food_name": "[Makanan Utama] mie goreng",
          "image_url": "https://kbu-cdn.com/dk/wp-content/uploads/mie-goreng-korea.jpg",
          "pairing_group": "complete_menu",
          "pairing_role": "complete",
          "calories_100g": 468,
          "ideal_grams": 131.77350427350424,
          "ideal_calories": 616.6999999999998,
          "ideal_protein": 10.014786324786323,
          "ideal_fat": 26.881794871794863,
          "ideal_carb": 82.22666666666665,
          "match_score": 0.8345648407936096
        }
      ]
    },
    {
      "meal_name": "Hari 5 - Senin - Sarapan (25%)",
      "target_calories": 440.5,
      "recommendations": [
        {
          "food_id": "FD0032",
          "food_name": "[Camilan/Roti] bagea kenari manis",
          "image_url": "https://indonesiakaya.com/wp-content/uploads/2020/10/1__IMG_0796_CROP_Renyah_gurih_dan_manis_begitulah_kira-kira_gambaran_saat_mencicipi_kue_bagea_khas_Sulawesi_Utara.jpg",
          "pairing_group": "sweet_snack",
          "pairing_role": "sweet_snack",
          "calories_100g": 523,
          "ideal_grams": 54.74665391969407,
          "ideal_calories": 286.325,
          "ideal_protein": 1.7518929254302102,
          "ideal_fat": 15.438556405353726,
          "ideal_carb": 35.147351816443596,
          "match_score": 2.430725336074829
        },
        {
          "food_id": "FD0277",
          "food_name": "[Pendamping] keju kacang tanah",
          "image_url": "https://img.freepik.com/free-photo/cheddar-cheese-dark-wooden-surface_1150-41937.jpg?w=1060&t=st=1684238932~exp=1684239532~hmac=578424a4cc6bde6d195628ec281e5daa943e767e0e6d813354904914dc34af51",
          "pairing_group": "dairy_pairing",
          "pairing_role": "dairy",
          "calories_100g": 590,
          "ideal_grams": 30,
          "ideal_calories": 177,
          "ideal_protein": 8.100000000000001,
          "ideal_fat": 14.7,
          "ideal_carb": 6.27,
          "match_score": 0.8015949487686157
        }
      ]
    },
    {
      "meal_name": "Hari 5 - Senin - Makan Siang (40%)",
      "target_calories": 704.8000000000001,
      "recommendations": [
        {
          "food_id": "FD0367",
          "food_name": "[Makanan Utama] martabak mesir",
          "image_url": "https://www.resepkuerenyah.com/wp-content/uploads/2016/11/45.-resep-martabak-mesir.jpg",
          "pairing_group": "complete_menu",
          "pairing_role": "complete",
          "calories_100g": 278,
          "ideal_grams": 253.5251798561151,
          "ideal_calories": 704.8,
          "ideal_protein": 12.929784172661869,
          "ideal_fat": 21.8031654676259,
          "ideal_carb": 114.0863309352518,
          "match_score": 0.8376579046249389
        }
      ]
    },
    {
      "meal_name": "Hari 5 - Senin - Makan Malam (35%)",
      "target_calories": 616.6999999999999,
      "recommendations": [
        {
          "food_id": "FD0377",
          "food_name": "[Makanan Utama] mie goreng",
          "image_url": "https://kbu-cdn.com/dk/wp-content/uploads/mie-goreng-korea.jpg",
          "pairing_group": "complete_menu",
          "pairing_role": "complete",
          "calories_100g": 468,
          "ideal_grams": 131.77350427350424,
          "ideal_calories": 616.6999999999998,
          "ideal_protein": 10.014786324786323,
          "ideal_fat": 26.881794871794863,
          "ideal_carb": 82.22666666666665,
          "match_score": 0.8345648407936096
        }
      ]
    },
    {
      "meal_name": "Hari 6 - Selasa - Sarapan (25%)",
      "target_calories": 440.5,
      "recommendations": [
        {
          "food_id": "FD0099",
          "food_name": "[Camilan/Roti] coklat pahit batang",
          "image_url": "https://nilaigizi.com/assets/images/produk/produk_1535873875.jpg",
          "pairing_group": "sweet_snack",
          "pairing_role": "sweet_snack",
          "calories_100g": 504,
          "ideal_grams": 56.810515873015866,
          "ideal_calories": 286.325,
          "ideal_protein": 3.1245783730158725,
          "ideal_fat": 30.052762896825396,
          "ideal_carb": 16.588670634920632,
          "match_score": 2.4298349022865295
        },
        {
          "food_id": "FD0277",
          "food_name": "[Pendamping] keju kacang tanah",
          "image_url": "https://img.freepik.com/free-photo/cheddar-cheese-dark-wooden-surface_1150-41937.jpg?w=1060&t=st=1684238932~exp=1684239532~hmac=578424a4cc6bde6d195628ec281e5daa943e767e0e6d813354904914dc34af51",
          "pairing_group": "dairy_pairing",
          "pairing_role": "dairy",
          "calories_100g": 590,
          "ideal_grams": 30,
          "ideal_calories": 177,
          "ideal_protein": 8.100000000000001,
          "ideal_fat": 14.7,
          "ideal_carb": 6.27,
          "match_score": 0.8015949487686157
        }
      ]
    },
    {
      "meal_name": "Hari 6 - Selasa - Makan Siang (40%)",
      "target_calories": 704.8000000000001,
      "recommendations": [
        {
          "food_id": "FD0367",
          "food_name": "[Makanan Utama] martabak mesir",
          "image_url": "https://www.resepkuerenyah.com/wp-content/uploads/2016/11/45.-resep-martabak-mesir.jpg",
          "pairing_group": "complete_menu",
          "pairing_role": "complete",
          "calories_100g": 278,
          "ideal_grams": 253.5251798561151,
          "ideal_calories": 704.8,
          "ideal_protein": 12.929784172661869,
          "ideal_fat": 21.8031654676259,
          "ideal_carb": 114.0863309352518,
          "match_score": 0.8376579046249389
        }
      ]
    },
    {
      "meal_name": "Hari 6 - Selasa - Makan Malam (35%)",
      "target_calories": 616.6999999999999,
      "recommendations": [
        {
          "food_id": "FD0377",
          "food_name": "[Makanan Utama] mie goreng",
          "image_url": "https://kbu-cdn.com/dk/wp-content/uploads/mie-goreng-korea.jpg",
          "pairing_group": "complete_menu",
          "pairing_role": "complete",
          "calories_100g": 468,
          "ideal_grams": 131.77350427350424,
          "ideal_calories": 616.6999999999998,
          "ideal_protein": 10.014786324786323,
          "ideal_fat": 26.881794871794863,
          "ideal_carb": 82.22666666666665,
          "match_score": 0.8345648407936096
        }
      ]
    },
    {
      "meal_name": "Hari 7 - Rabu - Sarapan (25%)",
      "target_calories": 440.5,
      "recommendations": [
        {
          "food_id": "FD0098",
          "food_name": "[Camilan/Roti] coklat manis batang",
          "image_url": "https://www.mampu.or.id/wp-content/uploads/2022/10/6007a9065cace.jpeg",
          "pairing_group": "sweet_snack",
          "pairing_role": "sweet_snack",
          "calories_100g": 472,
          "ideal_grams": 60.662076271186436,
          "ideal_calories": 286.325,
          "ideal_protein": 1.2132415254237288,
          "ideal_fat": 18.077298728813556,
          "ideal_carb": 38.035121822033894,
          "match_score": 2.4180684089660645
        },
        {
          "food_id": "FD0277",
          "food_name": "[Pendamping] keju kacang tanah",
          "image_url": "https://img.freepik.com/free-photo/cheddar-cheese-dark-wooden-surface_1150-41937.jpg?w=1060&t=st=1684238932~exp=1684239532~hmac=578424a4cc6bde6d195628ec281e5daa943e767e0e6d813354904914dc34af51",
          "pairing_group": "dairy_pairing",
          "pairing_role": "dairy",
          "calories_100g": 590,
          "ideal_grams": 30,
          "ideal_calories": 177,
          "ideal_protein": 8.100000000000001,
          "ideal_fat": 14.7,
          "ideal_carb": 6.27,
          "match_score": 0.8015949487686157
        }
      ]
    },
    {
      "meal_name": "Hari 7 - Rabu - Makan Siang (40%)",
      "target_calories": 704.8000000000001,
      "recommendations": [
        {
          "food_id": "FD0367",
          "food_name": "[Makanan Utama] martabak mesir",
          "image_url": "https://www.resepkuerenyah.com/wp-content/uploads/2016/11/45.-resep-martabak-mesir.jpg",
          "pairing_group": "complete_menu",
          "pairing_role": "complete",
          "calories_100g": 278,
          "ideal_grams": 253.5251798561151,
          "ideal_calories": 704.8,
          "ideal_protein": 12.929784172661869,
          "ideal_fat": 21.8031654676259,
          "ideal_carb": 114.0863309352518,
          "match_score": 0.8376579046249389
        }
      ]
    },
    {
      "meal_name": "Hari 7 - Rabu - Makan Malam (35%)",
      "target_calories": 616.6999999999999,
      "recommendations": [
        {
          "food_id": "FD0377",
          "food_name": "[Makanan Utama] mie goreng",
          "image_url": "https://kbu-cdn.com/dk/wp-content/uploads/mie-goreng-korea.jpg",
          "pairing_group": "complete_menu",
          "pairing_role": "complete",
          "calories_100g": 468,
          "ideal_grams": 131.77350427350424,
          "ideal_calories": 616.6999999999998,
          "ideal_protein": 10.014786324786323,
          "ideal_fat": 26.881794871794863,
          "ideal_carb": 82.22666666666665,
          "match_score": 0.8345648407936096
        }
      ]
    }
  ],
  "narrative_summary": "Pilihan yang pas banget buat kamu! Cobalah martabak mesir sebanyak 254 gram ya, biar target 1762 kalori harianmu tetap aman tercapai."
}
```

# Skenario 5 - Campuran
## Body Req
```json
{
  "target_macros": {
    "calories": 1762,
    "protein_g": 110,
    "fat_g": 59,
    "carb_g": 198
  },
  "allergies": {
    "gluten": 1,
    "dairy": 0,
    "nuts": 0,
    "peanut": 0,
    "seafood": 0,
    "egg": 0,
    "soy": 1,
    "celery": 0
  },
  "breakfast_prefs": {
    "food_category": [],
    "main_ingredients": []
  },
  "lunch_prefs": {
    "food_category": [],
    "main_ingredients": []
  },
  "dinner_prefs": {
    "food_category": ["berkuah"],
    "main_ingredients": []
  },
  "user_text": "saya ingin makan cumi cumi di malam hari yang penting jangan makan ayam",
  "start_date": "2026-05-28",
  "days": 7,
  "variety_penalty": 0.15,
  "halal_only": false
}
```
## Response
```json
{
  "daily_plan": [
    {
      "meal_name": "Hari 1 - Kamis - Sarapan (25%)",
      "target_calories": 440.5,
      "recommendations": [
        {
          "food_id": "FD0397",
          "food_name": "[Camilan/Roti] noga kacang tanah",
          "image_url": "https://t-2.tstatic.net/priangan/foto/bank/images/Noga-Suuk.jpg",
          "pairing_group": "sweet_snack",
          "pairing_role": "sweet_snack",
          "calories_100g": 600,
          "ideal_grams": 47.72083333333333,
          "ideal_calories": 286.325,
          "ideal_protein": 6.680916666666667,
          "ideal_fat": 19.899587500000003,
          "ideal_carb": 20.042749999999998,
          "match_score": 2.451378881931305
        },
        {
          "food_id": "FD0277",
          "food_name": "[Pendamping] keju kacang tanah",
          "image_url": "https://img.freepik.com/free-photo/cheddar-cheese-dark-wooden-surface_1150-41937.jpg?w=1060&t=st=1684238932~exp=1684239532~hmac=578424a4cc6bde6d195628ec281e5daa943e767e0e6d813354904914dc34af51",
          "pairing_group": "dairy_pairing",
          "pairing_role": "dairy",
          "calories_100g": 590,
          "ideal_grams": 30,
          "ideal_calories": 177,
          "ideal_protein": 8.100000000000001,
          "ideal_fat": 14.7,
          "ideal_carb": 6.27,
          "match_score": 0.9515949487686157
        }
      ]
    },
    {
      "meal_name": "Hari 1 - Kamis - Makan Siang (40%)",
      "target_calories": 704.8000000000001,
      "recommendations": [
        {
          "food_id": "FD0392",
          "food_name": "[Karbo] nasi jagung",
          "image_url": "https://tokohinspiratif.id/wp-content/uploads/2019/03/WhatsApp-Image-2019-03-25-at-16.10.19-1280x640.jpeg",
          "pairing_group": "rice_noodle_staple",
          "pairing_role": "staple",
          "calories_100g": 357,
          "ideal_grams": 88.84033613445379,
          "ideal_calories": 317.16,
          "ideal_protein": 7.817949579831935,
          "ideal_fat": 0.44420168067226895,
          "ideal_carb": 70.62806722689076,
          "match_score": 3.366125702857971
        },
        {
          "food_id": "FD0169",
          "food_name": "[Lauk] ikan asin pepetek goreng",
          "image_url": "https://img-global.cpcdn.com/recipes/63c1692184e591d6/1200x630cq70/photo.jpg",
          "pairing_group": "traditional_protein",
          "pairing_role": "protein",
          "calories_100g": 652,
          "ideal_grams": 50,
          "ideal_calories": 326,
          "ideal_protein": 20.2,
          "ideal_fat": 27.149999999999995,
          "ideal_carb": 0,
          "match_score": 0.9723965525627136
        },
        {
          "food_id": "FD0213",
          "food_name": "[Sayur] jamur kuping kering",
          "image_url": "https://asset.kompas.com/crops/3caJpamNwFqn62cq9Tf8ZRPsIh4=/0x41:1000x707/750x500/data/photo/2021/12/06/61ad642aaebd0.jpg",
          "pairing_group": "cooked_or_ready_vegetable",
          "pairing_role": "vegetable",
          "calories_100g": 294,
          "ideal_grams": 50,
          "ideal_calories": 147,
          "ideal_protein": 8,
          "ideal_fat": 0.45000000000000007,
          "ideal_carb": 32.3,
          "match_score": 0.831725537776947
        }
      ]
    },
    {
      "meal_name": "Hari 1 - Kamis - Makan Malam (35%)",
      "target_calories": 616.6999999999999,
      "recommendations": [
        {
          "food_id": "FD0367",
          "food_name": "[Makanan Utama] martabak mesir",
          "image_url": "https://www.resepkuerenyah.com/wp-content/uploads/2016/11/45.-resep-martabak-mesir.jpg",
          "pairing_group": "complete_menu",
          "pairing_role": "complete",
          "calories_100g": 278,
          "ideal_grams": 221.83453237410072,
          "ideal_calories": 616.6999999999999,
          "ideal_protein": 11.313561151079137,
          "ideal_fat": 19.07776978417266,
          "ideal_carb": 99.82553956834532,
          "match_score": 0.987953782081604
        }
      ]
    },
    {
      "meal_name": "Hari 2 - Jumat - Sarapan (25%)",
      "target_calories": 440.5,
      "recommendations": [
        {
          "food_id": "FD0031",
          "food_name": "[Camilan/Roti] bagea kenari asin",
          "image_url": "https://images.tokopedia.net/img/cache/700/hDjmkQ/2021/10/4/73219f10-0149-4af7-b1ca-c51d90ca767b.jpg",
          "pairing_group": "sweet_snack",
          "pairing_role": "sweet_snack",
          "calories_100g": 529,
          "ideal_grams": 54.12570888468808,
          "ideal_calories": 286.32499999999993,
          "ideal_protein": 1.7320226843100186,
          "ideal_fat": 15.750581285444234,
          "ideal_carb": 34.42395085066162,
          "match_score": 2.432470142841339
        },
        {
          "food_id": "FD0100",
          "food_name": "[Pendamping] coklat susu batang",
          "image_url": "https://www.nyonyor.com/wp-content/uploads/2018/11/Harga-Coklat-Batangan-Terbaru-540x350.jpg",
          "pairing_group": "dairy_pairing",
          "pairing_role": "dairy",
          "calories_100g": 381,
          "ideal_grams": 40.46587926509186,
          "ideal_calories": 154.17499999999998,
          "ideal_protein": 3.641929133858267,
          "ideal_fat": 14.163057742782149,
          "ideal_carb": 21.689711286089235,
          "match_score": 0.8961499929428101
        }
      ]
    },
    {
      "meal_name": "Hari 2 - Jumat - Makan Siang (40%)",
      "target_calories": 704.8000000000001,
      "recommendations": [
        {
          "food_id": "FD0593",
          "food_name": "[Karbo] nasi putih",
          "image_url": "https://tokohinspiratif.id/wp-content/uploads/2019/03/WhatsApp-Image-2019-03-25-at-16.10.19-1280x640.jpeg",
          "pairing_group": "rice_noodle_staple",
          "pairing_role": "staple",
          "calories_100g": 357,
          "ideal_grams": 88.84033613445379,
          "ideal_calories": 317.16,
          "ideal_protein": 7.817949579831935,
          "ideal_fat": 0.44420168067226895,
          "ideal_carb": 70.62806722689076,
          "match_score": 3.016125702857971
        },
        {
          "food_id": "FD0118",
          "food_name": "[Lauk] dendeng mujahir goreng",
          "image_url": "https://img-global.cpcdn.com/recipes/c49ebd05c391ae54/680x482cq70/dendeng-mujair-foto-resep-utama.jpg",
          "pairing_group": "traditional_protein",
          "pairing_role": "protein",
          "calories_100g": 598,
          "ideal_grams": 50,
          "ideal_calories": 299,
          "ideal_protein": 37.15,
          "ideal_fat": 13.449999999999998,
          "ideal_carb": 4.6,
          "match_score": 0.9696840047836304
        },
        {
          "food_id": "FD0505",
          "food_name": "[Sayur] semur jengkol",
          "image_url": "https://assets.pikiran-rakyat.com/crop/0x135:1080x1215/x/photo/2020/11/25/1187166638.jpg",
          "pairing_group": "cooked_or_ready_vegetable",
          "pairing_role": "vegetable",
          "calories_100g": 192.5,
          "ideal_grams": 54.91948051948052,
          "ideal_calories": 105.72000000000001,
          "ideal_protein": 2.4713766233766234,
          "ideal_fat": 3.2951688311688314,
          "ideal_carb": 16.640602597402598,
          "match_score": 0.7146427035331726
        }
      ]
    },
    {
      "meal_name": "Hari 2 - Jumat - Makan Malam (35%)",
      "target_calories": 616.6999999999999,
      "recommendations": [
        {
          "food_id": "FD0050",
          "food_name": "[Makanan Utama] beef yakiniku masakan",
          "image_url": "https://asset.kompas.com/crops/awoHyKStB8lI_yqs1PTI3VjIHsE=/78x42:958x629/750x500/data/photo/2022/12/08/6391613d09412.jpg",
          "pairing_group": "complete_menu",
          "pairing_role": "complete",
          "calories_100g": 132,
          "ideal_grams": 467.1969696969697,
          "ideal_calories": 616.7,
          "ideal_protein": 45.785303030303034,
          "ideal_fat": 5.139166666666667,
          "ideal_carb": 96.70977272727272,
          "match_score": 0.9049329161643982
        }
      ]
    },
    {
      "meal_name": "Hari 3 - Sabtu - Sarapan (25%)",
      "target_calories": 440.5,
      "recommendations": [
        {
          "food_id": "FD0032",
          "food_name": "[Camilan/Roti] bagea kenari manis",
          "image_url": "https://indonesiakaya.com/wp-content/uploads/2020/10/1__IMG_0796_CROP_Renyah_gurih_dan_manis_begitulah_kira-kira_gambaran_saat_mencicipi_kue_bagea_khas_Sulawesi_Utara.jpg",
          "pairing_group": "sweet_snack",
          "pairing_role": "sweet_snack",
          "calories_100g": 523,
          "ideal_grams": 54.74665391969407,
          "ideal_calories": 286.325,
          "ideal_protein": 1.7518929254302102,
          "ideal_fat": 15.438556405353726,
          "ideal_carb": 35.147351816443596,
          "match_score": 2.430725336074829
        },
        {
          "food_id": "FD0539",
          "food_name": "[Pendamping] susu kental manis",
          "image_url": "https://asset.kompas.com/crops/C220cRbRPu0EoI8SMHWr0HeFGuU=/0x0:750x500/750x500/data/photo/2022/06/03/6299dc0edf868.jpg",
          "pairing_group": "dairy_pairing",
          "pairing_role": "dairy",
          "calories_100g": 336,
          "ideal_grams": 45.885416666666664,
          "ideal_calories": 154.17499999999998,
          "ideal_protein": 3.762604166666666,
          "ideal_fat": 4.588541666666667,
          "ideal_carb": 25.236979166666668,
          "match_score": 0.8438206315040588
        }
      ]
    },
    {
      "meal_name": "Hari 3 - Sabtu - Makan Siang (40%)",
      "target_calories": 704.8000000000001,
      "recommendations": [
        {
          "food_id": "FD0593",
          "food_name": "[Karbo] nasi merah",
          "image_url": "https://tokohinspiratif.id/wp-content/uploads/2019/03/WhatsApp-Image-2019-03-25-at-16.10.19-1280x640.jpeg",
          "pairing_group": "rice_noodle_staple",
          "pairing_role": "staple",
          "calories_100g": 357,
          "ideal_grams": 88.84033613445379,
          "ideal_calories": 317.16,
          "ideal_protein": 7.817949579831935,
          "ideal_fat": 0.44420168067226895,
          "ideal_carb": 70.62806722689076,
          "match_score": 3.016125702857971
        },
        {
          "food_id": "FD0181",
          "food_name": "[Lauk] ikan mujair dendeng goreng",
          "image_url": "https://img-global.cpcdn.com/recipes/c49ebd05c391ae54/680x482cq70/dendeng-mujair-foto-resep-utama.jpg",
          "pairing_group": "traditional_protein",
          "pairing_role": "protein",
          "calories_100g": 598,
          "ideal_grams": 50,
          "ideal_calories": 299,
          "ideal_protein": 37.15,
          "ideal_fat": 13.449999999999998,
          "ideal_carb": 4.6,
          "match_score": 0.9696840047836304
        },
        {
          "food_id": "FD0203",
          "food_name": "[Sayur] jagung sayur tumis",
          "image_url": "https://ibusayur.my.id/wp-content/uploads/2022/08/ibusayur.my.id-sayur-nangka-51661b26-eb56-4072-8613-65cb6b4c2ecb.png",
          "pairing_group": "cooked_or_ready_vegetable",
          "pairing_role": "vegetable",
          "calories_100g": 148.9,
          "ideal_grams": 71.00067159167227,
          "ideal_calories": 105.72000000000003,
          "ideal_protein": 7.384069845533917,
          "ideal_fat": 7.384069845533917,
          "ideal_carb": 14.271134989926127,
          "match_score": 0.6892574429512024
        }
      ]
    },
    {
      "meal_name": "Hari 3 - Sabtu - Makan Malam (35%)",
      "target_calories": 616.6999999999999,
      "recommendations": [
        {
          "food_id": "FD0139",
          "food_name": "[Makanan Utama] gado-gado",
          "image_url": "https://img.kurio.network/rlKzeW_1_iLZ-JMm9fFHX-rGdIE=/1200x1200/filters:quality(80)/https://kurio-img.kurioapps.com/22/06/22/53264347-b7ba-4257-852d-04e3d1b4e4e5.jpe",
          "pairing_group": "complete_menu",
          "pairing_role": "complete",
          "calories_100g": 137,
          "ideal_grams": 450.1459854014598,
          "ideal_calories": 616.7,
          "ideal_protein": 27.45890510948905,
          "ideal_fat": 14.404671532846715,
          "ideal_carb": 94.53065693430656,
          "match_score": 0.9004402160644531
        }
      ]
    },
    {
      "meal_name": "Hari 4 - Minggu - Sarapan (25%)",
      "target_calories": 440.5,
      "recommendations": [
        {
          "food_id": "FD0099",
          "food_name": "[Camilan/Roti] coklat pahit batang",
          "image_url": "https://nilaigizi.com/assets/images/produk/produk_1535873875.jpg",
          "pairing_group": "sweet_snack",
          "pairing_role": "sweet_snack",
          "calories_100g": 504,
          "ideal_grams": 56.810515873015866,
          "ideal_calories": 286.325,
          "ideal_protein": 3.1245783730158725,
          "ideal_fat": 30.052762896825396,
          "ideal_carb": 16.588670634920632,
          "match_score": 2.4298349022865295
        },
        {
          "food_id": "FD0276",
          "food_name": "[Pendamping] keju",
          "image_url": "https://cdns.klimg.com/merdeka.com/i/w/news/2020/05/08/1175035/content_images/670x335/20200508114326-1-ilustrasi-keju-008-destriyana.jpg",
          "pairing_group": "dairy_pairing",
          "pairing_role": "dairy",
          "calories_100g": 326,
          "ideal_grams": 47.29294478527607,
          "ideal_calories": 154.17499999999998,
          "ideal_protein": 10.782791411042945,
          "ideal_fat": 9.600467791411043,
          "ideal_carb": 6.195375766871165,
          "match_score": 0.831823468208313
        }
      ]
    },
    {
      "meal_name": "Hari 4 - Minggu - Makan Siang (40%)",
      "target_calories": 704.8000000000001,
      "recommendations": [
        {
          "food_id": "FD0392",
          "food_name": "[Karbo] nasi jagung",
          "image_url": "https://tokohinspiratif.id/wp-content/uploads/2019/03/WhatsApp-Image-2019-03-25-at-16.10.19-1280x640.jpeg",
          "pairing_group": "rice_noodle_staple",
          "pairing_role": "staple",
          "calories_100g": 357,
          "ideal_grams": 88.84033613445379,
          "ideal_calories": 317.16,
          "ideal_protein": 7.817949579831935,
          "ideal_fat": 0.44420168067226895,
          "ideal_carb": 70.62806722689076,
          "match_score": 2.866125702857971
        },
        {
          "food_id": "FD0002",
          "food_name": "[Lauk] abon haruwan",
          "image_url": "https://img-global.cpcdn.com/recipes/cbf330fbd1ba6316/1200x630cq70/photo.jpg",
          "pairing_group": "traditional_protein",
          "pairing_role": "protein",
          "calories_100g": 513,
          "ideal_grams": 54.9551656920078,
          "ideal_calories": 281.92,
          "ideal_protein": 13.024374269005849,
          "ideal_fat": 20.333411306042887,
          "ideal_carb": 11.705450292397662,
          "match_score": 0.9417112469673157
        },
        {
          "food_id": "FD0495",
          "food_name": "[Sayur] sayur garu",
          "image_url": "https://image.akurat.co/images/uploads/images/akurat_20181220020604_MYQ3rr.jpg",
          "pairing_group": "cooked_or_ready_vegetable",
          "pairing_role": "vegetable",
          "calories_100g": 178,
          "ideal_grams": 59.3932584269663,
          "ideal_calories": 105.72000000000001,
          "ideal_protein": 1.5442247191011238,
          "ideal_fat": 8.255662921348316,
          "ideal_carb": 6.295685393258427,
          "match_score": 0.6866510510444641
        }
      ]
    },
    {
      "meal_name": "Hari 4 - Minggu - Makan Malam (35%)",
      "target_calories": 616.6999999999999,
      "recommendations": [
        {
          "food_id": "FD0529",
          "food_name": "[Makanan Utama] soto padang masakan",
          "image_url": "https://topwisata.info/wp-content/uploads/2020/11/resep2Bsoto2Bpadang2B252812529.jpg",
          "pairing_group": "complete_menu",
          "pairing_role": "complete",
          "calories_100g": 127,
          "ideal_grams": 485.5905511811023,
          "ideal_calories": 616.6999999999999,
          "ideal_protein": 28.649842519685038,
          "ideal_fat": 32.048976377952755,
          "ideal_carb": 53.414960629921254,
          "match_score": 0.8993976712226868
        }
      ]
    },
    {
      "meal_name": "Hari 5 - Senin - Sarapan (25%)",
      "target_calories": 440.5,
      "recommendations": [
        {
          "food_id": "FD0098",
          "food_name": "[Camilan/Roti] coklat manis batang",
          "image_url": "https://www.mampu.or.id/wp-content/uploads/2022/10/6007a9065cace.jpeg",
          "pairing_group": "sweet_snack",
          "pairing_role": "sweet_snack",
          "calories_100g": 472,
          "ideal_grams": 60.662076271186436,
          "ideal_calories": 286.325,
          "ideal_protein": 1.2132415254237288,
          "ideal_fat": 18.077298728813556,
          "ideal_carb": 38.035121822033894,
          "match_score": 2.4180684089660645
        },
        {
          "food_id": "FD0277",
          "food_name": "[Pendamping] keju kacang tanah",
          "image_url": "https://img.freepik.com/free-photo/cheddar-cheese-dark-wooden-surface_1150-41937.jpg?w=1060&t=st=1684238932~exp=1684239532~hmac=578424a4cc6bde6d195628ec281e5daa943e767e0e6d813354904914dc34af51",
          "pairing_group": "dairy_pairing",
          "pairing_role": "dairy",
          "calories_100g": 590,
          "ideal_grams": 30,
          "ideal_calories": 177,
          "ideal_protein": 8.100000000000001,
          "ideal_fat": 14.7,
          "ideal_carb": 6.27,
          "match_score": 0.8015949487686157
        }
      ]
    },
    {
      "meal_name": "Hari 5 - Senin - Makan Siang (40%)",
      "target_calories": 704.8000000000001,
      "recommendations": [
        {
          "food_id": "FD0392",
          "food_name": "[Karbo] nasi jagung",
          "image_url": "https://tokohinspiratif.id/wp-content/uploads/2019/03/WhatsApp-Image-2019-03-25-at-16.10.19-1280x640.jpeg",
          "pairing_group": "rice_noodle_staple",
          "pairing_role": "staple",
          "calories_100g": 357,
          "ideal_grams": 88.84033613445379,
          "ideal_calories": 317.16,
          "ideal_protein": 7.817949579831935,
          "ideal_fat": 0.44420168067226895,
          "ideal_carb": 70.62806722689076,
          "match_score": 2.866125702857971
        },
        {
          "food_id": "FD0027",
          "food_name": "[Lauk] ayam usus goreng",
          "image_url": "https://img-global.cpcdn.com/recipes/fa7c9443ce9efcb5/1200x630cq70/photo.jpg",
          "pairing_group": "traditional_protein",
          "pairing_role": "protein",
          "calories_100g": 473,
          "ideal_grams": 59.602536997885835,
          "ideal_calories": 281.92,
          "ideal_protein": 26.9403467230444,
          "ideal_fat": 15.675467230443976,
          "ideal_carb": 8.284752642706131,
          "match_score": 0.9352343082427979
        },
        {
          "food_id": "FD0583",
          "food_name": "[Sayur] ubi jalar sayur",
          "image_url": "https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/jawapos/2022/11/daun-ubi-jalar.jpg",
          "pairing_group": "cooked_or_ready_vegetable",
          "pairing_role": "vegetable",
          "calories_100g": 184,
          "ideal_grams": 57.45652173913044,
          "ideal_calories": 105.72000000000001,
          "ideal_protein": 0.804391304347826,
          "ideal_fat": 0.1723695652173913,
          "ideal_carb": 12.927717391304348,
          "match_score": 0.6863852739334106
        }
      ]
    },
    {
      "meal_name": "Hari 5 - Senin - Makan Malam (35%)",
      "target_calories": 616.6999999999999,
      "recommendations": [
        {
          "food_id": "FD0367",
          "food_name": "[Makanan Utama] martabak mesir",
          "image_url": "https://www.resepkuerenyah.com/wp-content/uploads/2016/11/45.-resep-martabak-mesir.jpg",
          "pairing_group": "complete_menu",
          "pairing_role": "complete",
          "calories_100g": 278,
          "ideal_grams": 221.83453237410072,
          "ideal_calories": 616.6999999999999,
          "ideal_protein": 11.313561151079137,
          "ideal_fat": 19.07776978417266,
          "ideal_carb": 99.82553956834532,
          "match_score": 0.837953782081604
        }
      ]
    },
    {
      "meal_name": "Hari 6 - Selasa - Sarapan (25%)",
      "target_calories": 440.5,
      "recommendations": [
        {
          "food_id": "FD0030",
          "food_name": "[Camilan/Roti] bagea kelapa manis",
          "image_url": "https://s3.theasianparent.com/tap-assets-prod/wp-content/uploads/sites/24/2022/03/kue-bagea-featured-650x339.jpg",
          "pairing_group": "sweet_snack",
          "pairing_role": "sweet_snack",
          "calories_100g": 452,
          "ideal_grams": 63.34623893805309,
          "ideal_calories": 286.32499999999993,
          "ideal_protein": 0.8235011061946903,
          "ideal_fat": 8.741780973451327,
          "ideal_carb": 51.057068584070784,
          "match_score": 2.4073943495750427
        },
        {
          "food_id": "FD0277",
          "food_name": "[Pendamping] keju kacang tanah",
          "image_url": "https://img.freepik.com/free-photo/cheddar-cheese-dark-wooden-surface_1150-41937.jpg?w=1060&t=st=1684238932~exp=1684239532~hmac=578424a4cc6bde6d195628ec281e5daa943e767e0e6d813354904914dc34af51",
          "pairing_group": "dairy_pairing",
          "pairing_role": "dairy",
          "calories_100g": 590,
          "ideal_grams": 30,
          "ideal_calories": 177,
          "ideal_protein": 8.100000000000001,
          "ideal_fat": 14.7,
          "ideal_carb": 6.27,
          "match_score": 0.8015949487686157
        }
      ]
    },
    {
      "meal_name": "Hari 6 - Selasa - Makan Siang (40%)",
      "target_calories": 704.8000000000001,
      "recommendations": [
        {
          "food_id": "FD0392",
          "food_name": "[Karbo] nasi jagung",
          "image_url": "https://tokohinspiratif.id/wp-content/uploads/2019/03/WhatsApp-Image-2019-03-25-at-16.10.19-1280x640.jpeg",
          "pairing_group": "rice_noodle_staple",
          "pairing_role": "staple",
          "calories_100g": 357,
          "ideal_grams": 88.84033613445379,
          "ideal_calories": 317.16,
          "ideal_protein": 7.817949579831935,
          "ideal_fat": 0.44420168067226895,
          "ideal_carb": 70.62806722689076,
          "match_score": 2.866125702857971
        },
        {
          "food_id": "FD0381",
          "food_name": "[Lauk] naan maran sapi masakan",
          "image_url": "https://drive.google.com/file/d/1LZOGoU3M3XcPbU5_HaAZ26ybCTbiTXpT/view?usp=sharing",
          "pairing_group": "traditional_protein",
          "pairing_role": "protein",
          "calories_100g": 478,
          "ideal_grams": 58.97907949790795,
          "ideal_calories": 281.92,
          "ideal_protein": 22.58898744769874,
          "ideal_fat": 19.993907949790792,
          "ideal_carb": 3.007933054393305,
          "match_score": 0.9328125715255737
        },
        {
          "food_id": "FD0213",
          "food_name": "[Sayur] jamur kuping kering",
          "image_url": "https://asset.kompas.com/crops/3caJpamNwFqn62cq9Tf8ZRPsIh4=/0x41:1000x707/750x500/data/photo/2021/12/06/61ad642aaebd0.jpg",
          "pairing_group": "cooked_or_ready_vegetable",
          "pairing_role": "vegetable",
          "calories_100g": 294,
          "ideal_grams": 50,
          "ideal_calories": 147,
          "ideal_protein": 8,
          "ideal_fat": 0.45000000000000007,
          "ideal_carb": 32.3,
          "match_score": 0.681725537776947
        }
      ]
    },
    {
      "meal_name": "Hari 6 - Selasa - Makan Malam (35%)",
      "target_calories": 616.6999999999999,
      "recommendations": [
        {
          "food_id": "FD0367",
          "food_name": "[Makanan Utama] martabak mesir",
          "image_url": "https://www.resepkuerenyah.com/wp-content/uploads/2016/11/45.-resep-martabak-mesir.jpg",
          "pairing_group": "complete_menu",
          "pairing_role": "complete",
          "calories_100g": 278,
          "ideal_grams": 221.83453237410072,
          "ideal_calories": 616.6999999999999,
          "ideal_protein": 11.313561151079137,
          "ideal_fat": 19.07776978417266,
          "ideal_carb": 99.82553956834532,
          "match_score": 0.837953782081604
        }
      ]
    },
    {
      "meal_name": "Hari 7 - Rabu - Sarapan (25%)",
      "target_calories": 440.5,
      "recommendations": [
        {
          "food_id": "FD0029",
          "food_name": "[Camilan/Roti] bagea kelapa asin",
          "image_url": "https://resepkoki.id/wp-content/uploads/2018/02/Resep-Kue-Bagea.jpg",
          "pairing_group": "sweet_snack",
          "pairing_role": "sweet_snack",
          "calories_100g": 450,
          "ideal_grams": 63.62777777777777,
          "ideal_calories": 286.325,
          "ideal_protein": 2.0360888888888886,
          "ideal_fat": 8.844261111111111,
          "ideal_carb": 49.69329444444443,
          "match_score": 2.4069460034370422
        },
        {
          "food_id": "FD0277",
          "food_name": "[Pendamping] keju kacang tanah",
          "image_url": "https://img.freepik.com/free-photo/cheddar-cheese-dark-wooden-surface_1150-41937.jpg?w=1060&t=st=1684238932~exp=1684239532~hmac=578424a4cc6bde6d195628ec281e5daa943e767e0e6d813354904914dc34af51",
          "pairing_group": "dairy_pairing",
          "pairing_role": "dairy",
          "calories_100g": 590,
          "ideal_grams": 30,
          "ideal_calories": 177,
          "ideal_protein": 8.100000000000001,
          "ideal_fat": 14.7,
          "ideal_carb": 6.27,
          "match_score": 0.8015949487686157
        }
      ]
    },
    {
      "meal_name": "Hari 7 - Rabu - Makan Siang (40%)",
      "target_calories": 704.8000000000001,
      "recommendations": [
        {
          "food_id": "FD0392",
          "food_name": "[Karbo] nasi jagung",
          "image_url": "https://tokohinspiratif.id/wp-content/uploads/2019/03/WhatsApp-Image-2019-03-25-at-16.10.19-1280x640.jpeg",
          "pairing_group": "rice_noodle_staple",
          "pairing_role": "staple",
          "calories_100g": 357,
          "ideal_grams": 88.84033613445379,
          "ideal_calories": 317.16,
          "ideal_protein": 7.817949579831935,
          "ideal_fat": 0.44420168067226895,
          "ideal_carb": 70.62806722689076,
          "match_score": 2.866125702857971
        },
        {
          "food_id": "FD0168",
          "food_name": "[Lauk] ikan asin pari goreng",
          "image_url": "https://img-global.cpcdn.com/recipes/Recipe_2015_01_31_12_33_39_810_87c9c03bd7c9a069b268/680x482cq70/ikan-pari-goreng-foto-resep-utama.jpg",
          "pairing_group": "traditional_protein",
          "pairing_role": "protein",
          "calories_100g": 430,
          "ideal_grams": 65.56279069767442,
          "ideal_calories": 281.91999999999996,
          "ideal_protein": 38.157544186046515,
          "ideal_fat": 15.472818604651163,
          "ideal_carb": 0,
          "match_score": 0.9238348007202148
        },
        {
          "food_id": "FD0213",
          "food_name": "[Sayur] jamur kuping kering",
          "image_url": "https://asset.kompas.com/crops/3caJpamNwFqn62cq9Tf8ZRPsIh4=/0x41:1000x707/750x500/data/photo/2021/12/06/61ad642aaebd0.jpg",
          "pairing_group": "cooked_or_ready_vegetable",
          "pairing_role": "vegetable",
          "calories_100g": 294,
          "ideal_grams": 50,
          "ideal_calories": 147,
          "ideal_protein": 8,
          "ideal_fat": 0.45000000000000007,
          "ideal_carb": 32.3,
          "match_score": 0.681725537776947
        }
      ]
    },
    {
      "meal_name": "Hari 7 - Rabu - Makan Malam (35%)",
      "target_calories": 616.6999999999999,
      "recommendations": [
        {
          "food_id": "FD0367",
          "food_name": "[Makanan Utama] martabak mesir",
          "image_url": "https://www.resepkuerenyah.com/wp-content/uploads/2016/11/45.-resep-martabak-mesir.jpg",
          "pairing_group": "complete_menu",
          "pairing_role": "complete",
          "calories_100g": 278,
          "ideal_grams": 221.83453237410072,
          "ideal_calories": 616.6999999999999,
          "ideal_protein": 11.313561151079137,
          "ideal_fat": 19.07776978417266,
          "ideal_carb": 99.82553956834532,
          "match_score": 0.837953782081604
        }
      ]
    }
  ],
  "narrative_summary": "Pilihan yang pas banget buat kamu! Cobalah nasi jagung sebanyak 89 gram ya, biar target 1762 kalori harianmu tetap aman tercapai."
}
```