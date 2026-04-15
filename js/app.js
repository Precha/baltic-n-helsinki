/* =============================================
   SamMichelle's Escape — App Logic
   ============================================= */

// ---------- State ----------
let currentLang = localStorage.getItem('sme-lang') || 'zh';

// ---------- City data (images + attraction details) ----------
const cityData = {
  vilnius: {
    flag: '🇱🇹',
    heroImg: 'https://images.unsplash.com/photo-1541772995-60d28c8feba3?w=1200&q=80',
    attractions: [
      {
        nameZh: 'Gediminas 城堡塔', nameKo: '게디미나스 성탑', nameEn: 'Gediminas Castle Tower',
        descZh: '俯瞰維爾紐斯全城的最佳制高點，擁有壯麗的老城區景觀。',
        descKo: '빌뉴스 도시 전체를 한눈에 볼 수 있는 최고의 전망대.',
        descEn: 'The best vantage point over Vilnius with stunning panoramic views of the UNESCO Old Town.',
        img: 'https://images.unsplash.com/photo-1541772995-60d28c8feba3?w=600&q=80',
        badge1: '€5', badge1Type: 'amber', badge2: 'UNESCO', badge2Type: 'green'
      },
      {
        nameZh: '特拉凱湖中城堡', nameKo: '트라카이 섬 성', nameEn: 'Trakai Island Castle',
        descZh: '立陶宛最具代表性的景觀之一，建於湖中島嶼上的紅磚城堡。',
        descKo: '리투아니아의 가장 상징적인 랜드마크 중 하나로, 호수 섬 위에 세워진 붉은 벽돌 성.',
        descEn: 'One of Lithuania\'s most iconic landmarks — a red brick castle built on an island in the lake.',
        img: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=600&q=80',
        badge1: '€8', badge1Type: 'amber', badge2: '30min bus', badge2Type: 'blue'
      },
      {
        nameZh: 'Three Crosses Hill', nameKo: '세 개의 십자가 언덕', nameEn: 'Three Crosses Hill',
        descZh: '維爾紐斯最震撼的景觀制高點，城市＋森林＋紅屋頂全景，很多人認為比城堡塔更美。',
        descKo: '빌뉴스에서 가장 인상적인 전망 명소. 도시+숲+붉은 지붕 파노라마로 성탑보다 더 아름답다는 평도.',
        descEn: 'Arguably the most stunning viewpoint in Vilnius — city, forest, and red rooftops all in one frame.',
        img: 'https://images.unsplash.com/photo-1541772995-60d28c8feba3?w=600&q=80',
        badge1: 'Free', badge1Type: 'green', badge2: 'Must See ⭐', badge2Type: 'purple'
      },
      {
        nameZh: 'Užupis 藝術共和國', nameKo: '우주피스 예술 공화국', nameEn: 'Užupis Republic',
        descZh: '維爾紐斯的波希米亞藝術區，自我宣告獨立的創意天地，充滿街頭藝術與咖啡廳。',
        descKo: '빌뉴스의 보헤미안 예술 구역, 독립을 선언한 창의적인 공간으로 거리 예술과 카페로 가득.',
        descEn: 'Vilnius\'s bohemian arts district that declared itself an independent republic — full of murals, studios, and cafés.',
        img: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&q=80',
        badge1: 'Free', badge1Type: 'green', badge2: 'Unique', badge2Type: 'purple'
      },
      {
        nameZh: 'KGB 博物館', nameKo: 'KGB 박물관', nameEn: 'KGB Museum',
        descZh: '了解立陶宛蘇聯占領歷史的重要場所，保留原始牢房的震撼體驗。',
        descKo: '리투아니아 소련 점령 역사를 이해하는 중요한 장소로, 원래 감방을 보존한 충격적인 경험.',
        descEn: 'A sobering look at Soviet occupation history, with preserved prison cells from the KGB headquarters.',
        img: 'https://images.unsplash.com/photo-1562095544-35ed1b11bf43?w=600&q=80',
        badge1: '€8', badge1Type: 'amber', badge2: 'History', badge2Type: 'blue'
      },
    ],
    restaurants: [
      {
        nameZh: 'Etno Dvaras', nameKo: '에트노 드바라스', nameEn: 'Etno Dvaras',
        descZh: '立陶宛傳統料理入門首選！必點 Cepelinai（馬鈴薯餃）、甜菜湯、蘑菇醬馬鈴薯。',
        descKo: '리투아니아 전통 요리 입문 최고의 선택! Cepelinai(감자 만두), 비트 수프, 버섯 소스 감자 필수 주문.',
        descEn: 'The go-to introduction to Lithuanian cuisine! Must-order: Cepelinai (potato dumplings), beet soup.',
        img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
        badge1: '€15–25', badge1Type: 'green', badge2: 'Traditional', badge2Type: 'blue'
      },
      {
        nameZh: 'Lokys', nameKo: '로키스', nameEn: 'Lokys',
        descZh: '中世紀風格人氣餐廳，傳統立陶宛野味料理，酒窖環境氛圍絕佳。',
        descKo: '중세 스타일 인기 레스토랑. 전통 리투아니아 야생 요리, 와인 셀러 분위기.',
        descEn: 'Popular medieval-style restaurant with traditional Lithuanian wild game. Atmospheric cellar setting.',
        img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80',
        badge1: '€25–35', badge1Type: 'amber', badge2: 'Must Try', badge2Type: 'purple'
      },
    ],
    stays: [
      {
        nameZh: 'Panorama Hotel', nameKo: '파노라마 호텔', nameEn: 'Panorama Hotel',
        price: { zh: '已確認訂房 ✓', ko: '예약 확정 ✓', en: 'Confirmed ✓' },
        note: { zh: 'Sodu str. 14 · 4/16–4/18 · 2晚 · Agoda #648863979', ko: 'Sodu str. 14 · 4/16–4/18 · 2박 · Agoda #648863979', en: 'Sodu str. 14 · Apr 16–18 · 2 nights · Agoda #648863979' },
        icon: '🏨', confirmed: true,
        sub: { zh: 'Superior Twin · 含早餐 · 旅客名：SUNJOO PARK', ko: '슈페리어 트윈 · 조식 포함 · 투숙객: SUNJOO PARK', en: 'Superior Twin · Breakfast included · Guest: SUNJOO PARK' }
      },
    ],
    transport: [
      { icon: '✈️', titleZh: '機場 → 市區', descZh: '計程車約 €15–20，機場巴士約 €2（1 號），30–40 分鐘',
        titleKo: '공항 → 시내', descKo: '택시 €15–20, 공항버스 €2 (1번), 30–40분',
        titleEn: 'Airport → City Centre', descEn: 'Taxi €15–20, bus line 1 €2, about 30–40 min' },
      { icon: '🚌', titleZh: '市區交通', descZh: '市區可步行為主，巴士票 €1 / 日票 €3',
        titleKo: '시내 교통', descKo: '시내는 주로 도보, 버스 €1 / 1일권 €3',
        titleEn: 'City Transport', descEn: 'Most sights walkable. Bus €1 per ride, day pass €3' },
      { icon: '🚂', titleZh: '前往里加（火車）', descZh: 'LTG Link 火車 889/890，4/18 07:03 出發，11:34 抵達里加（€24/人）',
        titleKo: '리가로 이동 (기차)', descKo: 'LTG Link 기차 889/890, 4/18 07:03 출발, 11:34 리가 도착 (€24/인)',
        titleEn: 'To Riga (Train)', descEn: 'LTG Link Train 889/890, Apr 18 departs 07:03, arrives Riga 11:34 (€24/person)' },
    ]
  },

  riga: {
    flag: '🇱🇻',
    heroImg: 'https://images.unsplash.com/photo-1467803738586-46b7eb7b16a9?w=1200&q=80',
    attractions: [
      {
        nameZh: 'Alberta Street 新藝術建築', nameKo: '알베르타 거리 아르누보 건축', nameEn: 'Alberta Street Art Nouveau',
        descZh: '歐洲最密集的新藝術風格建築群之一，精緻的立面讓人目不暇接。',
        descKo: '유럽에서 가장 밀집된 아르누보 건축 군 중 하나로, 정교한 외관이 눈을 사로잡는다.',
        descEn: 'One of Europe\'s densest concentrations of Art Nouveau architecture. The ornate facades are breathtaking.',
        img: 'https://images.unsplash.com/photo-1467803738586-46b7eb7b16a9?w=600&q=80',
        badge1: 'Free', badge1Type: 'green', badge2: 'Architecture', badge2Type: 'blue'
      },
      {
        nameZh: 'House of the Blackheads', nameKo: '블랙헤즈의 집', nameEn: 'House of the Blackheads',
        descZh: '里加最具標誌性的哥德式建築，精緻的磚砌立面是打卡必備。',
        descKo: '리가에서 가장 상징적인 고딕 양식 건물로, 정교한 벽돌 외관이 인증샷 필수.',
        descEn: 'Riga\'s most iconic Gothic building with its intricate brick facade — the photo spot of the city.',
        img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80',
        badge1: '€7', badge1Type: 'amber', badge2: 'UNESCO', badge2Type: 'green'
      },
      {
        nameZh: '里加中央市場', nameKo: '리가 중앙 시장', nameEn: 'Riga Central Market',
        descZh: '前德軍飛船庫改建，歐洲最大的市場之一，充滿在地食材與活力。',
        descKo: '구 독일 군용 비행선 격납고를 개조한 유럽 최대 시장 중 하나로, 현지 식재료와 활기로 가득.',
        descEn: 'One of Europe\'s largest markets, housed in former German zeppelin hangars. A feast for the senses.',
        img: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&q=80',
        badge1: 'Free', badge1Type: 'green', badge2: 'Local Life', badge2Type: 'purple'
      },
    ],
    restaurants: [
      {
        nameZh: 'Restaurant 3', nameKo: '레스토랑 3', nameEn: 'Restaurant 3',
        descZh: '現代拉脫維亞料理，使用在地當季食材，環境優雅。',
        descKo: '현대 라트비아 요리, 현지 제철 식재료 사용, 우아한 분위기.',
        descEn: 'Modern Latvian cuisine using seasonal local ingredients in an elegant setting.',
        img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
        badge1: '€30–45', badge1Type: 'amber', badge2: 'Local', badge2Type: 'green'
      },
      {
        nameZh: 'Folkklubs Ala Pagrabs', nameKo: '포크클럽스 알라 파그랩스', nameEn: 'Folkklubs Ala Pagrabs',
        descZh: '拉脫維亞民俗風情地下酒吧，傳統食物配啤酒，充滿在地生活氣息。',
        descKo: '라트비아 민속 스타일의 지하 바, 전통 음식과 맥주, 현지 분위기 가득.',
        descEn: 'A folk-themed underground bar with traditional food and beer. Lively and authentically local.',
        img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80',
        badge1: '€15–25', badge1Type: 'green', badge2: 'Atmospheric', badge2Type: 'purple'
      },
    ],
    stays: [
      {
        nameZh: 'Pullman Riga Old Town', nameKo: '풀만 리가 올드 타운', nameEn: 'Pullman Riga Old Town',
        price: { zh: '已確認訂房 ✓', ko: '예약 확정 ✓', en: 'Confirmed ✓' },
        note: { zh: 'Jekaba Iela 24 · 4/18–4/20 · 2晚 · 編號 QHGDGZPS', ko: 'Jekaba Iela 24 · 4/18–4/20 · 2박 · 예약번호 QHGDGZPS', en: 'Jekaba Iela 24 · Apr 18–20 · 2 nights · Ref QHGDGZPS' },
        icon: '🏨', confirmed: true,
        sub: { zh: '2025年翻新，Accor 旗下精品酒店，老城區核心', ko: '2025년 리노베이션, Accor 계열 부티크 호텔, 구시가지 중심', en: 'Renovated 2025 · Accor luxury brand · Heart of Old Town' }
      },
    ],
    transport: [
      { icon: '🚌', titleZh: '市區交通', descZh: '老城區可步行，電車 €1.15 / 日票 €5',
        titleKo: '시내 교통', descKo: '구시가지는 도보 가능, 트램 €1.15 / 1일권 €5',
        titleEn: 'City Transport', descEn: 'Old Town walkable. Tram €1.15 per ride, day pass €5' },
      { icon: '🚌', titleZh: '前往塔林', descZh: 'Lux Express 巴士，4/20 15:00 出發，19:35 抵達塔林（€17/人，Platform 1，座位5&6）',
        titleKo: '탈린으로 이동', descKo: 'Lux Express 버스, 4/20 15:00 출발, 19:35 탈린 도착 (€17/인, Platform 1, 좌석 5&6)',
        titleEn: 'To Tallinn', descEn: 'Lux Express bus, Apr 20 departs 15:00, arrives 19:35 (€17/person, Platform 1, Seats 5&6)' },
    ]
  },

  tallinn: {
    flag: '🇪🇪',
    heroImg: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=1200&q=80',
    attractions: [
      {
        nameZh: 'Toompea 圓頂山城堡區', nameKo: '톰페아 언덕', nameEn: 'Toompea Hill',
        descZh: '俯瞰塔林紅屋頂老城的最佳視角，設有多個觀景台，是愛沙尼亞議會所在地。',
        descKo: '탈린 붉은 지붕 구시가지를 내려다보는 최고의 전망지로, 에스토니아 의회가 위치.',
        descEn: 'The best viewpoint over Tallinn\'s red-roofed Old Town, home to the Estonian Parliament.',
        img: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=600&q=80',
        badge1: 'Free', badge1Type: 'green', badge2: 'UNESCO', badge2Type: 'green'
      },
      {
        nameZh: 'Alexander Nevsky 大教堂', nameKo: '알렉산드르 넵스키 대성당', nameEn: 'Alexander Nevsky Cathedral',
        descZh: '俄羅斯東正教大教堂，洋蔥圓頂在老城中格外顯眼，內部裝飾金碧輝煌。',
        descKo: '러시아 정교회 대성당, 양파 돔이 구시가지에서 눈에 띄며 내부 장식은 화려하다.',
        descEn: 'Russian Orthodox cathedral with striking onion domes. The gilded interior is magnificent.',
        img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80',
        badge1: 'Free', badge1Type: 'green', badge2: 'Architecture', badge2Type: 'blue'
      },
      {
        nameZh: 'Viru Gate 老城門', nameKo: '비루 게이트', nameEn: 'Viru Gate',
        descZh: '塔林中世紀城牆的標誌性入口，周邊咖啡廳和工藝品商店林立。',
        descKo: '탈린 중세 성벽의 상징적인 입구로, 주변에 카페와 공예품 상점이 즐비.',
        descEn: 'The iconic gateway to Tallinn\'s medieval walled city, lined with craft shops and cafés.',
        img: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=600&q=80',
        badge1: 'Free', badge1Type: 'green', badge2: 'Medieval', badge2Type: 'blue'
      },
    ],
    restaurants: [
      {
        nameZh: 'Olde Hansa', nameKo: '올데 한사', nameEn: 'Olde Hansa',
        descZh: '中世紀主題餐廳，服務員穿古裝，菜單全為中世紀食譜，獨特體驗必去。',
        descKo: '중세 테마 레스토랑, 직원들이 고풍스러운 의상을 입고 중세 조리법 메뉴 제공, 독특한 경험 필수.',
        descEn: 'Medieval-themed restaurant where staff wear period costumes. The food follows historical recipes.',
        img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
        badge1: '€25–35', badge1Type: 'amber', badge2: 'Must Try', badge2Type: 'purple'
      },
    ],
    stays: [
      {
        nameZh: 'Citybox Tallinn City Center', nameKo: '씨티박스 탈린 시티센터', nameEn: 'Citybox Tallinn City Center',
        price: { zh: '已確認訂房 ✓（€97.20 / 2晚含稅）', ko: '예약 확정 ✓ (€97.20 / 2박 세금 포함)', en: 'Confirmed ✓ (€97.20 / 2 nights incl. taxes)' },
        note: { zh: 'Laeva 1 · 4/20–4/22 · 2晚 · 雙人房', ko: 'Laeva 1 · 4/20–4/22 · 2박 · 더블룸', en: 'Laeva 1 · Apr 20–22 · 2 nights · Double room' },
        icon: '🏨', confirmed: true,
        sub: { zh: '⚠️ 4/22 早上 11:30 前需到 Terminal A（步行約 5 分鐘）', ko: '⚠️ 4/22 오전 11:30까지 Terminal A 도착 필요 (도보 약 5분)', en: '⚠️ Reach Terminal A by 11:30 on Apr 22 (approx. 5 min walk)' }
      },
    ],
    transport: [
      { icon: '🚶', titleZh: '市區交通', descZh: '老城區可完全步行，景點距離很近',
        titleKo: '시내 교통', descKo: '구시가지는 완전히 도보 가능, 관광지 간 거리가 매우 가깝다',
        titleEn: 'City Transport', descEn: 'The Old Town is entirely walkable — all sights are close together' },
      { icon: '🚢', titleZh: '渡輪 → 赫爾辛基', descZh: 'Eckerö Line，Terminal A，12:00 出發，⚠️ 11:30 前登船！',
        titleKo: '페리 → 헬싱키', descKo: 'Eckerö Line, Terminal A, 12:00 출발, ⚠️ 11:30까지 승선!',
        titleEn: 'Ferry → Helsinki', descEn: 'Eckerö Line, Terminal A, departs 12:00. ⚠️ Board by 11:30!' },
    ]
  },

  helsinki: {
    flag: '🇫🇮',
    heroImg: 'https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?w=1200&q=80',
    attractions: [
      {
        nameZh: 'Suomenlinna 芬蘭堡', nameKo: '수오멘린나', nameEn: 'Suomenlinna Sea Fortress',
        descZh: 'UNESCO 世界文化遺產，坐船 15 分鐘即可抵達，島上要塞景觀絕美。',
        descKo: 'UNESCO 세계 문화 유산, 보트로 15분이면 도착, 섬의 요새 경관이 절경.',
        descEn: 'UNESCO World Heritage island fortress accessible by a 15-minute ferry. Stunning sea views.',
        img: 'https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?w=600&q=80',
        badge1: '€3.5', badge1Type: 'amber', badge2: 'UNESCO', badge2Type: 'green'
      },
      {
        nameZh: 'Temppeliaukio 岩石教堂', nameKo: '템펠리아우키오 교회', nameEn: 'Rock Church',
        descZh: '直接鑿入花崗岩建造的教堂，自然採光和音響效果絕佳，建築奇觀。',
        descKo: '화강암을 직접 깎아 만든 교회로, 자연 채광과 음향 효과가 뛰어난 건축 기적.',
        descEn: 'A church carved directly into solid granite bedrock. Natural lighting and acoustics are extraordinary.',
        img: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=600&q=80',
        badge1: '€3', badge1Type: 'amber', badge2: 'Unique', badge2Type: 'purple'
      },
      {
        nameZh: '赫爾辛基大教堂', nameKo: '헬싱키 대성당', nameEn: 'Helsinki Cathedral',
        descZh: '新古典主義白色大教堂，俯瞰赫爾辛基參議院廣場，是城市最具代表性的地標。',
        descKo: '신고전주의 흰색 대성당, 헬싱키 원로원 광장을 내려다보는 도시의 가장 상징적인 랜드마크.',
        descEn: 'Neoclassical white cathedral overlooking Senate Square. The defining landmark of Helsinki.',
        img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80',
        badge1: 'Free', badge1Type: 'green', badge2: 'Landmark', badge2Type: 'blue'
      },
      {
        nameZh: 'Design District', nameKo: '디자인 디스트릭트', nameEn: 'Design District',
        descZh: '芬蘭設計品牌雲集，Marimekko、Iittala、Artek 等旗艦店及獨立設計師工作室。',
        descKo: '핀란드 디자인 브랜드 밀집 지역, Marimekko, Iittala, Artek 등 플래그십 스토어 및 독립 디자이너 작업실.',
        descEn: 'Home to Finnish design flagships — Marimekko, Iittala, Artek — and independent designer studios.',
        img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
        badge1: 'Free', badge1Type: 'green', badge2: 'Shopping', badge2Type: 'blue'
      },
      {
        nameZh: 'Löyly Helsinki（海濱桑拿）', nameKo: '뢰일뤼 헬싱키 (해변 사우나)', nameEn: 'Löyly Helsinki (Waterfront Sauna)',
        descZh: '赫爾辛基最時髦的海濱桑拿餐廳，芬蘭傳統桑拿體驗加絕美海景，是必訪的打卡聖地。',
        descKo: '헬싱키에서 가장 트렌디한 해변 사우나 레스토랑. 핀란드 전통 사우나 체험과 아름다운 바다 전망을 즐길 수 있는 필수 방문 명소.',
        descEn: 'Helsinki\'s trendiest waterfront sauna and restaurant. Experience traditional Finnish sauna with stunning sea views.',
        img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80',
        badge1: 'Sauna €19+', badge1Type: 'amber', badge2: 'Waterfront', badge2Type: 'blue',
        mapUrl: 'https://maps.app.goo.gl/3YF9CVgsQL5bdRCc8'
      },
      {
        nameZh: 'Kuusijärvi Old Smoke Sauna（傳統煙燻桑拿）', nameKo: '쿠우시야르비 스모크 사우나 (전통 훈제 사우나)', nameEn: 'Kuusijärvi Old Smoke Sauna',
        descZh: '位於萬塔的百年傳統芬蘭煙燻桑拿，在湖畔享受最純粹的芬蘭體驗，4/26 早上的完美收尾！',
        descKo: '반타에 위치한 100년 전통 핀란드 훈제 사우나. 호숫가에서 가장 순수한 핀란드 체험을 즐기세요. 4/26 아침의 완벽한 마무리!',
        descEn: 'A century-old traditional Finnish smoke sauna by the lake in Vantaa. The perfect finale for Apr 26 morning!',
        img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80',
        badge1: '4/26 Morning', badge1Type: 'green', badge2: 'Near Airport', badge2Type: 'blue',
        mapUrl: 'https://maps.app.goo.gl/o4d8nGiEmHksngzY9'
      },
    ],
    restaurants: [
      {
        nameZh: 'Restaurant Savotta', nameKo: '레스토랑 사보타', nameEn: 'Restaurant Savotta',
        descZh: '傳統芬蘭家庭料理，木屋風格裝潢，提供馴鹿、熊肉等芬蘭特色菜。',
        descKo: '전통 핀란드 가정 요리, 통나무집 스타일 인테리어, 순록, 곰 고기 등 핀란드 특색 요리 제공.',
        descEn: 'Traditional Finnish home cooking in a log-cabin setting. Try the reindeer and local game dishes.',
        img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
        badge1: '€30–45', badge1Type: 'amber', badge2: 'Traditional', badge2Type: 'green'
      },
      {
        nameZh: 'Restaurant Nokka', nameKo: '레스토랑 노카', nameEn: 'Restaurant Nokka',
        descZh: '使用芬蘭在地當季食材，海港旁的美麗餐廳，菜單隨季節變化。',
        descKo: '핀란드 현지 제철 식재료 사용, 항구 옆 아름다운 레스토랑, 시즌마다 메뉴 변경.',
        descEn: 'Farm-to-table Finnish cuisine on the harbour. The seasonal menu changes with local harvests.',
        img: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3b84?w=600&q=80',
        badge1: '€45–65', badge1Type: 'amber', badge2: 'Harbour View', badge2Type: 'blue'
      },
    ],
    stays: [
      {
        nameZh: 'Hostel Diana Park', nameKo: '호스텔 다이아나 파크', nameEn: 'Hostel Diana Park',
        price: { zh: '已確認訂房 ✓（€211.50 / 4晚含稅）', ko: '예약 확정 ✓ (€211.50 / 4박 세금 포함)', en: 'Confirmed ✓ (€211.50 / 4 nights incl. taxes)' },
        note: { zh: 'Uudenmaankatu 9 · 4/22–4/26 · 4晚 · 市中心位置', ko: 'Uudenmaankatu 9 · 4/22–4/26 · 4박 · 시내 중심', en: 'Uudenmaankatu 9 · Apr 22–26 · 4 nights · City centre location' },
        icon: '🏠', confirmed: true,
        sub: { zh: '步行至赫爾辛基大教堂約 10 分鐘', ko: '헬싱키 대성당까지 도보 약 10분', en: 'About 10 min walk to Helsinki Cathedral' }
      },
    ],
    transport: [
      { icon: '🚌', titleZh: '機場 → 市區', descZh: '機場快線巴士約 35 分鐘，€5.5，或計程車約 €40',
        titleKo: '공항 → 시내', descKo: '공항 급행버스 약 35분, €5.5, 또는 택시 약 €40',
        titleEn: 'Airport → City', descEn: 'Airport Express bus ~35 min, €5.5. Taxi ~€40' },
      { icon: '🚃', titleZh: '市區交通', descZh: 'HSL 交通卡，2日票 €12，3日票 €18，電車/巴士/地鐵通用',
        titleKo: '시내 교통', descKo: 'HSL 교통카드, 2일권 €12, 3일권 €18, 트램/버스/지하철 통합 사용',
        titleEn: 'City Transport', descEn: 'HSL travel card: 2-day €12, 3-day €18. Covers tram, bus and metro' },
      { icon: '⛴️', titleZh: '前往芬蘭堡', descZh: '市集廣場搭渡輪，約 15 分鐘，使用 HSL 交通卡或購票 €3.5',
        titleKo: '수오멘린나 이동', descKo: '마켓 광장에서 페리, 약 15분, HSL 교통카드 또는 €3.5 구매',
        titleEn: 'To Suomenlinna', descEn: 'Ferry from Market Square, ~15 min. HSL card valid or buy ticket €3.5' },
    ]
  }
};

// ---------- Build page ----------
function buildPage() {
  applyStaticTranslations(); // Apply nav/static text immediately, before any dynamic build
  try { buildOverview(); } catch(e) { console.warn('buildOverview', e); }
  try { buildTimeline(); } catch(e) { console.warn('buildTimeline', e); }
  try { buildCitySections(); } catch(e) { console.warn('buildCitySections', e); }
  try { buildCost(); } catch(e) { console.warn('buildCost', e); }
  try { buildFooter(); } catch(e) { console.warn('buildFooter', e); }
}

// Fallback emoji per city for broken images
const cityFallbackEmoji = { vilnius: '🏰', riga: '🏛️', tallinn: '⛪', helsinki: '🏙️' };

function imgWithFallback(src, alt, cls, fallbackKey) {
  const emoji = cityFallbackEmoji[fallbackKey] || '📸';
  return `<img class="${cls}" src="${src}" alt="${alt}" loading="lazy"
    onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='flex';">
    <div class="${cls} img-placeholder" style="display:none;align-items:center;justify-content:center;font-size:3rem;background:var(--gray-100);">${emoji}</div>`;
}

function buildOverview() {
  const t = i18n[currentLang];
  const grid = document.getElementById('overview-grid');
  if (!grid) return;
  // Use cityData heroImg as overview image source
  const keys = ['vilnius', 'riga', 'tallinn', 'helsinki'];
  grid.innerHTML = t.cities.map((c, i) => {
    const key = keys[i];
    const src = cityData[key].heroImg;
    return `
    <a href="#${key}" class="city-card" data-city="${key}">
      ${imgWithFallback(src, c.name, 'city-card-img', key)}
      <div class="city-card-body">
        <div class="city-card-country">${c.country}</div>
        <div class="city-card-name">${c.name}</div>
        <div class="city-card-meta">
          <span>${c.dates}</span>
          <span>${c.nights}</span>
        </div>
      </div>
    </a>`;
  }).join('');
}

function buildTimeline() {
  const t = i18n[currentLang];
  const list = document.getElementById('timeline-list');
  if (!list) return;
  list.innerHTML = t.days.map((day, idx) => `
    <li class="timeline-item" data-city="${day.city}">
      <div class="timeline-dot">${idx + 1}</div>
      <div class="timeline-card ${idx === 0 ? 'open' : ''}" data-city="${day.city}">
        <div class="timeline-card-header" onclick="toggleTimeline(this)">
          <span class="timeline-card-date">${day.date}</span>
          <span class="timeline-card-label">${day.label}</span>
          <span class="timeline-toggle">▾</span>
        </div>
        <div class="timeline-card-body">
          ${day.alert ? `<div class="alert-banner">${day.alert}</div>` : ''}
          ${day.split ? `<div class="split-banner">✈️ ${day.splitNote}</div>` : ''}
          <ul class="schedule-list">
            ${day.items.map(it => `
              <li class="schedule-item">
                <span class="schedule-time">${it.time}</span>
                <span class="schedule-text">${it.text}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    </li>
  `).join('');
}

function toggleTimeline(header) {
  const card = header.closest('.timeline-card');
  card.classList.toggle('open');
}

function buildCitySections() {
  const cityOrder = ['vilnius', 'riga', 'tallinn', 'helsinki'];
  const container = document.getElementById('city-sections');
  if (!container) return;
  container.innerHTML = cityOrder.map(key => buildCitySection(key)).join('');
  // init tabs
  document.querySelectorAll('.city-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const section = tab.closest('.city-section-inner');
      section.querySelectorAll('.city-tab').forEach(t => t.classList.remove('active'));
      section.querySelectorAll('.city-tab-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      section.querySelector(`[data-panel="${tab.dataset.tab}"]`).classList.add('active');
    });
  });
}

function buildCitySection(key) {
  const t = i18n[currentLang];
  const d = cityData[key];
  const title = t.cityTitles[key];
  const countryEmoji = { vilnius: '🇱🇹 Lithuania', riga: '🇱🇻 Latvia', tallinn: '🇪🇪 Estonia', helsinki: '🇫🇮 Finland' };

  const attractionCards = d.attractions.map(a => {
    const name = currentLang === 'zh' ? a.nameZh : currentLang === 'ko' ? a.nameKo : a.nameEn;
    const desc = currentLang === 'zh' ? a.descZh : currentLang === 'ko' ? a.descKo : a.descEn;
    const mapLabel = currentLang === 'zh' ? '📍 地圖' : currentLang === 'ko' ? '📍 지도' : '📍 Map';
    const mapLink = a.mapUrl ? `<a href="${a.mapUrl}" target="_blank" rel="noopener" class="badge blue map-link">${mapLabel}</a>` : '';
    return `
      <div class="info-card">
        ${imgWithFallback(a.img, name, 'info-card-img', key)}
        <div class="info-card-body">
          <div class="info-card-name">${name}</div>
          <div class="info-card-desc">${desc}</div>
          <div class="info-card-meta">
            <span class="badge ${a.badge1Type}">${a.badge1}</span>
            <span class="badge ${a.badge2Type}">${a.badge2}</span>
            ${mapLink}
          </div>
        </div>
      </div>`;
  }).join('');

  const restaurantCards = d.restaurants.map(r => {
    const name = currentLang === 'zh' ? r.nameZh : currentLang === 'ko' ? r.nameKo : r.nameEn;
    const desc = currentLang === 'zh' ? r.descZh : currentLang === 'ko' ? r.descKo : r.descEn;
    return `
      <div class="info-card">
        ${imgWithFallback(r.img, name, 'info-card-img', key)}
        <div class="info-card-body">
          <div class="info-card-name">${name}</div>
          <div class="info-card-desc">${desc}</div>
          <div class="info-card-meta">
            <span class="badge ${r.badge1Type}">${r.badge1}</span>
            <span class="badge ${r.badge2Type}">${r.badge2}</span>
          </div>
        </div>
      </div>`;
  }).join('');

  const stayCards = d.stays.map(s => {
    // Support both old string format and new i18n object format
    const name = typeof s.nameZh !== 'undefined'
      ? (currentLang === 'zh' ? s.nameZh : currentLang === 'ko' ? s.nameKo : s.nameEn)
      : s.nameZh;
    const priceLabel = typeof s.price === 'object'
      ? s.price[currentLang]
      : s.price.replace('晚', currentLang === 'ko' ? '박' : currentLang === 'en' ? 'night' : '晚');
    const noteText = typeof s.note === 'object' ? s.note[currentLang] : s.note;
    const subText = s.sub ? s.sub[currentLang] : '';
    const confirmedBadge = s.confirmed === true
      ? `<span class="confirmed-badge">✓ ${currentLang === 'zh' ? '已訂' : currentLang === 'ko' ? '예약완료' : 'Booked'}</span>`
      : s.confirmed === false
        ? `<span class="tbc-badge">${currentLang === 'zh' ? '待訂' : currentLang === 'ko' ? '미정' : 'TBC'}</span>`
        : '';
    return `
      <div class="stay-card ${s.confirmed === true ? 'stay-confirmed' : s.confirmed === false ? 'stay-tbc' : ''}">
        <span class="stay-icon">${s.icon}</span>
        <div>
          <div class="stay-name-row">
            <span class="stay-name">${name}</span>
            ${confirmedBadge}
          </div>
          <div class="stay-price">${priceLabel}</div>
          <div class="stay-note">${noteText}</div>
          ${subText ? `<div class="stay-sub">${subText}</div>` : ''}
        </div>
      </div>`;
  }).join('');

  const transportItems = d.transport.map(tr => {
    const tTitle = currentLang === 'zh' ? tr.titleZh : currentLang === 'ko' ? tr.titleKo : tr.titleEn;
    const tDesc = currentLang === 'zh' ? tr.descZh : currentLang === 'ko' ? tr.descKo : tr.descEn;
    return `
      <li class="transport-item">
        <span class="transport-icon">${tr.icon}</span>
        <div class="transport-body">
          <div class="transport-title">${tTitle}</div>
          <div class="transport-desc">${tDesc}</div>
        </div>
      </li>`;
  }).join('');

  return `
    <section class="city-section" id="${key}">
      <div class="city-section-inner">
        <div class="city-section-title">
          <span class="city-flag">${d.flag}</span>
          <h2 class="city-heading">${title}</h2>
        </div>
        <p class="city-subtitle">${countryEmoji[key]}</p>
        <div class="city-tabs">
          <button class="city-tab active" data-tab="attractions">${t.sectionAttractions}</button>
          <button class="city-tab" data-tab="food">${t.sectionFood}</button>
          <button class="city-tab" data-tab="stay">${t.sectionStay}</button>
          <button class="city-tab" data-tab="transport">${t.sectionTransport}</button>
        </div>
        <div class="city-tab-panel active" data-panel="attractions">
          <div class="cards-grid">${attractionCards}</div>
        </div>
        <div class="city-tab-panel" data-panel="food">
          <div class="cards-grid">${restaurantCards}</div>
        </div>
        <div class="city-tab-panel" data-panel="stay">
          <div class="stay-list">${stayCards}</div>
        </div>
        <div class="city-tab-panel" data-panel="transport">
          <ul class="transport-list">${transportItems}</ul>
        </div>
      </div>
    </section>`;
}

function buildCost() {
  const t = i18n[currentLang];
  const wrap = document.getElementById('cost-table');
  if (!wrap) return;
  wrap.innerHTML = t.costItems.map(item => `
    <div class="cost-row ${item.highlight ? 'highlight' : ''}">
      <span class="cost-label">${item.label}</span>
      <span class="cost-value">${item.value}</span>
    </div>
  `).join('');
}

function buildFooter() {
  const t = i18n[currentLang];
  const grid = document.getElementById('tips-grid');
  if (!grid) return;
  grid.innerHTML = t.tipItems.map(tip => `
    <div class="tip-card">
      <span class="tip-icon">${tip.icon}</span>
      <div>
        <div class="tip-label">${tip.label}</div>
        <div class="tip-text">${tip.text}</div>
      </div>
    </div>
  `).join('');
  const madeWith = document.getElementById('made-with');
  if (madeWith) madeWith.textContent = t.madeWith;
}

// ---------- Language ----------
function applyStaticTranslations() {
  const t = i18n[currentLang];
  if (!t) return;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
}

function applyLang() {
  applyStaticTranslations();
  // Rebuild dynamic sections
  try { buildOverview(); } catch(e) { console.warn('buildOverview', e); }
  try { buildTimeline(); } catch(e) { console.warn('buildTimeline', e); }
  try { buildCitySections(); } catch(e) { console.warn('buildCitySections', e); }
  try { buildCost(); } catch(e) { console.warn('buildCost', e); }
  try { buildFooter(); } catch(e) { console.warn('buildFooter', e); }
  // Restore tab events
  document.querySelectorAll('.city-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const section = tab.closest('.city-section-inner');
      section.querySelectorAll('.city-tab').forEach(t => t.classList.remove('active'));
      section.querySelectorAll('.city-tab-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      section.querySelector(`[data-panel="${tab.dataset.tab}"]`).classList.add('active');
    });
  });
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('sme-lang', lang);
  document.body.classList.add('lang-switching');
  setTimeout(() => {
    applyLang();
    document.body.classList.remove('lang-switching');
  }, 120);
}

// ---------- Mobile nav ----------
function toggleNav() {
  document.getElementById('main-nav').classList.toggle('open');
}

// ---------- Hero background (static) ----------
const HERO_BG = 'https://images.unsplash.com/photo-1548625361-58a9b86aa83b?w=1600&q=80';

// ---------- Init ----------
document.addEventListener('DOMContentLoaded', () => {
  buildPage();
  const bg = document.getElementById('hero-bg');
  if (bg) bg.style.backgroundImage = `url('${HERO_BG}')`;
});
