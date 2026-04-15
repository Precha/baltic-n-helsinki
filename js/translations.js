const i18n = {
  zh: {
    siteTitle: "Amber & Iron: SamMichelle's Northern Journey",
    siteSubtitle: "Sammy & Michelle 的波羅的海逃脫計畫",
    dates: "2026年4月16日 — 4月26日",
    heroes: "Sammy & Michelle",
    navOverview: "行程總覽",
    navTimeline: "每日行程",
    navVilnius: "維爾紐斯",
    navRiga: "里加",
    navTallinn: "塔林",
    navHelsinki: "赫爾辛基",
    navCost: "費用",
    overviewTitle: "11天 · 4座城市 · 1段放鬆之旅",
    cities: [
      { name: "維爾紐斯", country: "🇱🇹 立陶宛", dates: "4/16 – 4/18", nights: "2 晚" },
      { name: "里加", country: "🇱🇻 拉脫維亞", dates: "4/18 – 4/20", nights: "2 晚" },
      { name: "塔林", country: "🇪🇪 愛沙尼亞", dates: "4/20 – 4/22", nights: "2 晚" },
      { name: "赫爾辛基", country: "🇫🇮 芬蘭", dates: "4/22 – 4/26", nights: "4 晚" },
    ],
    timelineTitle: "每日行程",
    days: [
      {
        date: "4/16 (三)", label: "抵達維爾紐斯",
        city: "vilnius",
        items: [
          { time: "19:50", text: "抵達 VNO 維爾紐斯機場（KLM，阿姆斯特丹出發）" },
          { time: "20:30", text: "計程車入住酒店（€15–20）" },
          { time: "21:00", text: "Pilies gatvė 老城區附近輕食晚餐" },
        ]
      },
      {
        date: "4/17 (四)", label: "維爾紐斯全日探索",
        city: "vilnius",
        items: [
          { time: "09:00", text: "Gediminas 城堡塔 — 俯瞰全城（€5）" },
          { time: "10:30", text: "Three Crosses Hill ⭐ — 必去！城市＋森林＋紅屋頂全景" },
          { time: "12:00", text: "大教堂廣場（UNESCO 老城區）" },
          { time: "13:00", text: "午餐 Lokys 🐻（中世紀風格人氣餐廳）或 Ertlio Namas" },
          { time: "15:00", text: "Užupis 藝術共和國漫步 — Angel 雕像、壁畫、河邊" },
          { time: "16:30", text: "☕ Backstage Café 或 StrangeLove Coffee" },
          { time: "19:00", text: "晚餐 Etno Dvaras（立陶宛傳統料理首選 — Cepelinai馬鈴薯餃！）" },
        ]
      },
      {
        date: "4/18 (五)", label: "火車前往里加 🚂",
        city: "riga",
        items: [
          { time: "06:30", text: "早餐後退房（Panorama Hotel）" },
          { time: "07:03", text: "🚂 LTG Link 火車出發（889/890次，車廂2，座位79&90，€24/人）" },
          { time: "11:34", text: "抵達里加中央車站" },
          { time: "12:30", text: "入住 Pullman Riga Old Town（Jekaba Iela 24，ref: QHGDGZPS）" },
          { time: "14:00", text: "House of Blackheads 黑頭兄弟會之屋（€7）" },
          { time: "15:30", text: "St Peter Church 展望台 ⭐ — 里加城市景觀最強" },
          { time: "17:00", text: "Dome Square + Swedish Gate 散步" },
          { time: "19:30", text: "晚餐 Folkklubs Ala Pagrabs 🍺（必吃，在地酒館氛圍）" },
        ]
      },
      {
        date: "4/19 (六)", label: "里加全日探索",
        city: "riga",
        items: [
          { time: "09:00", text: "Riga Central Market ⭐⭐⭐ 燻魚、黑麵包、蜂蜜、起司" },
          { time: "11:00", text: "Alberta iela 新藝術建築街（免費）+ Art Nouveau Museum" },
          { time: "13:00", text: "午餐 Milda（拉脫維亞傳統料理升級版）" },
          { time: "14:30", text: "Bastejkalna Park 市中心公園散步 + Freedom Monument" },
          { time: "16:00", text: "☕ Rocket Bean Roastery 🚀（喜歡咖啡必去）" },
          { time: "19:00", text: "晚餐 Barents 🦪（高級海鮮）或 3 Pavāru Restorāns（名廚餐廳）" },
        ]
      },
      {
        date: "4/20 (日)", label: "里加 → 塔林 🚌",
        city: "tallinn",
        items: [
          { time: "09:00", text: "輕鬆早晨：買黑香草酒紀念品 + 舊城最後散步" },
          { time: "12:00", text: "午餐 LIDO 🍽️（高CP值）或 Burzma Food Hall" },
          { time: "15:00", text: "🚌 Lux Express 巴士出發（€17/人，Platform 1，座位5&6）" },
          { time: "19:35", text: "抵達塔林，入住 Citybox Tallinn City Center（Laeva 1）" },
          { time: "20:15", text: "🌙 塔林夜景散步：Viru Gate → Town Hall Square → 小巷弄" },
        ]
      },
      {
        date: "4/21 (一)", label: "塔林整日",
        city: "tallinn",
        items: [
          { time: "09:00", text: "Toompea Hill 展望台 ⭐⭐⭐ — 塔林代表景色，俯瞰紅屋頂" },
          { time: "10:00", text: "Alexander Nevsky Cathedral（免費）" },
          { time: "11:00", text: "Kohtuotsa Viewing Platform — 明信片角度" },
          { time: "13:00", text: "午餐 Rataskaevu 16（一定要吃！）" },
          { time: "14:30", text: "Telliskivi Creative City ⭐ — 選物店、設計店、咖啡廳" },
          { time: "16:30", text: "Balti Jaam Market — 市場＋美食區" },
          { time: "19:00", text: "晚餐 Lee Brasserie 🍷 或 NOA（海景餐廳）" },
        ]
      },
      {
        date: "4/22 (三)", label: "塔林 → 赫爾辛基（渡輪日）",
        city: "tallinn",
        alert: "⚠️ 11:30 前必須登船（Eckerö Line，Terminal A）",
        split: true,
        splitNote: "部分成員搭 14:05 Baltic Air 班機直飛阿姆斯特丹",
        items: [
          { time: "09:00", text: "老城區早晨散步 + Telliskivi 創意街區早午餐" },
          { time: "11:30", text: "🚢 Eckerö Line 登船截止（Terminal A）" },
          { time: "12:00", text: "渡輪出發 Tallinn → Helsinki" },
          { time: "14:15", text: "抵達赫爾辛基 West Terminal T2" },
          { time: "15:00", text: "入住赫爾辛基酒店" },
          { time: "16:00", text: "參議院廣場初探" },
          { time: "18:00", text: "晚餐：市集廣場周邊" },
        ]
      },
      {
        date: "4/23 (四)", label: "芬蘭堡 + 岩石教堂",
        city: "helsinki",
        items: [
          { time: "09:00", text: "Market Square 搭渡輪前往 Suomenlinna 芬蘭堡（€3.5 往返，UNESCO）" },
          { time: "11:30", text: "島上要塞探索 + 海景拍照" },
          { time: "13:00", text: "返回市區，午餐" },
          { time: "14:30", text: "Temppeliaukio Church 岩石教堂（鑿岩而建，€3）" },
          { time: "16:00", text: "Design District 設計品牌、紀念品" },
          { time: "19:00", text: "晚餐 Restaurant Savotta（傳統芬蘭料理，€30–45）" },
        ]
      },
      {
        date: "4/24 (五)", label: "藝術 + 市場探索",
        city: "helsinki",
        items: [
          { time: "09:30", text: "Ateneum Art Museum 芬蘭國家美術館（€18）" },
          { time: "12:00", text: "赫爾辛基中央火車站（建築欣賞）+ 午餐" },
          { time: "14:00", text: "Hakaniemi Market Hall 哈卡涅米市場" },
          { time: "16:00", text: "Kallio 區咖啡廳探索" },
          { time: "19:00", text: "晚餐 Restaurant Nokka（芬蘭在地食材，€45–65）" },
        ]
      },
      {
        date: "4/25 (六)", label: "大教堂 + 購物日",
        city: "helsinki",
        items: [
          { time: "09:30", text: "Helsinki Cathedral 大教堂（免費）" },
          { time: "10:30", text: "Uspenski Cathedral 烏斯別斯基大教堂" },
          { time: "12:00", text: "午餐 + Esplanadi Park 漫步" },
          { time: "14:00", text: "Stockmann 百貨 + Marimekko + Iittala 採買" },
          { time: "19:00", text: "晚餐 Spis（北歐精緻菜單，需訂位，€60–90）" },
        ]
      },
      {
        date: "4/26 (日)", label: "Kuusijärvi 桑拿 + 返回阿姆斯特丹",
        city: "helsinki",
        items: [
          { time: "08:30", text: "早餐後前往 Kuusijärvi Old Smoke Sauna 🧖（Vantaa，傳統芬蘭煙燻桑拿體驗）" },
          { time: "12:00", text: "返回市區，退房 + 最後午餐" },
          { time: "13:30", text: "前往赫爾辛基機場（機場巴士 35 分鐘）" },
          { time: "14:30", text: "機場 check-in" },
          { time: "16:40", text: "✈️ HEL → AMS 起飛（Finnair）" },
          { time: "18:15", text: "抵達阿姆斯特丹" },
        ]
      },
    ],
    cityTitles: {
      vilnius: "維爾紐斯",
      riga: "里加",
      tallinn: "塔林",
      helsinki: "赫爾辛基",
    },
    sectionAttractions: "景點",
    sectionFood: "餐廳",
    sectionStay: "住宿",
    sectionTransport: "交通",
    costTitle: "費用估算",
    costSubtitle: "每人參考費用（不含已購機票）",
    costItems: [
      { label: "機票（已購）", value: "€639" },
      { label: "住宿 10 晚（經濟型）", value: "€300–500" },
      { label: "城市間巴士交通", value: "€100–120" },
      { label: "市內交通", value: "€80–100" },
      { label: "餐飲（每日 €30–50）", value: "€330–550" },
      { label: "景點門票", value: "€80–100" },
      { label: "總計估算", value: "€1,529–2,009", highlight: true },
    ],
    footerTips: "實用資訊",
    tipItems: [
      { icon: "🔌", label: "插座", text: "歐規 Type C/E（220V）" },
      { icon: "💶", label: "貨幣", text: "歐元（€）全程通用" },
      { icon: "🚌", label: "巴士訂票", text: "Lux Express 官網提前訂較便宜" },
      { icon: "🚢", label: "渡輪提醒", text: "4/22 Eckerö Line 11:30 截止登船！" },
      { icon: "📶", label: "網路", text: "歐盟 SIM 卡或 eSIM 全程可用" },
    ],
    madeWith: "為 Sammy & Michelle 製作",
  },

  ko: {
    siteTitle: "Amber & Iron: SamMichelle's Northern Journey",
    siteSubtitle: "샘과 미쉘의 발틱 탈출기",
    dates: "2026년 4월 16일 — 4월 26일",
    heroes: "Sammy & Michelle",
    navOverview: "여정 개요",
    navTimeline: "일별 일정",
    navVilnius: "빌뉴스",
    navRiga: "리가",
    navTallinn: "탈린",
    navHelsinki: "헬싱키",
    navCost: "비용",
    overviewTitle: "11일 · 4개 도시 · 하나의 힐링 여행",
    cities: [
      { name: "빌뉴스", country: "🇱🇹 리투아니아", dates: "4/16 – 4/18", nights: "2박" },
      { name: "리가", country: "🇱🇻 라트비아", dates: "4/18 – 4/20", nights: "2박" },
      { name: "탈린", country: "🇪🇪 에스토니아", dates: "4/20 – 4/22", nights: "2박" },
      { name: "헬싱키", country: "🇫🇮 핀란드", dates: "4/22 – 4/26", nights: "4박" },
    ],
    timelineTitle: "일별 일정",
    days: [
      {
        date: "4/16 (수)", label: "빌뉴스 도착",
        city: "vilnius",
        items: [
          { time: "19:50", text: "VNO 빌뉴스 공항 도착 (KLM, 암스테르담 출발)" },
          { time: "20:30", text: "택시로 호텔 체크인 (€15–20)" },
          { time: "21:00", text: "Pilies gatvė 구시가지 근처 저녁 식사" },
        ]
      },
      {
        date: "4/17 (목)", label: "빌뉴스 하루 탐험",
        city: "vilnius",
        items: [
          { time: "09:00", text: "게디미나스 성탑 — 도시 전망 (€5)" },
          { time: "10:30", text: "Three Crosses Hill ⭐ — 필수! 도시+숲+붉은 지붕 전경" },
          { time: "12:00", text: "대성당 광장 (유네스코 구시가지)" },
          { time: "13:00", text: "점심 Lokys 🐻 (중세 스타일 인기 레스토랑) 또는 Ertlio Namas" },
          { time: "15:00", text: "우주피스 예술 공화국 산책 — 천사 조각상, 벽화, 강변" },
          { time: "16:30", text: "☕ Backstage Café 또는 StrangeLove Coffee" },
          { time: "19:00", text: "저녁 Etno Dvaras (리투아니아 전통 요리 입문 — Cepelinai 감자 만두!)" },
        ]
      },
      {
        date: "4/18 (금)", label: "기차로 리가 이동 🚂",
        city: "riga",
        items: [
          { time: "06:30", text: "아침 식사 후 체크아웃 (Panorama Hotel)" },
          { time: "07:03", text: "🚂 LTG Link 기차 출발 (889/890편, 2호차, 좌석 79&90, €24/인)" },
          { time: "11:34", text: "리가 중앙역 도착" },
          { time: "12:30", text: "Pullman Riga Old Town 체크인 (Jekaba Iela 24, ref: QHGDGZPS)" },
          { time: "14:00", text: "블랙헤즈의 집 (€7)" },
          { time: "15:30", text: "St Peter Church 전망대 ⭐ — 리가 최고의 도시 경관" },
          { time: "17:00", text: "Dome Square + Swedish Gate 산책" },
          { time: "19:30", text: "저녁 Folkklubs Ala Pagrabs 🍺 (현지 선술집 필수 방문)" },
        ]
      },
      {
        date: "4/19 (토)", label: "리가 하루 탐험",
        city: "riga",
        items: [
          { time: "09:00", text: "Riga Central Market ⭐⭐⭐ 훈제 생선, 흑빵, 꿀, 치즈" },
          { time: "11:00", text: "Alberta iela 아르누보 건축 거리 (무료) + Art Nouveau Museum" },
          { time: "13:00", text: "점심 Milda (라트비아 전통 요리 업그레이드)" },
          { time: "14:30", text: "Bastejkalna Park 공원 산책 + Freedom Monument" },
          { time: "16:00", text: "☕ Rocket Bean Roastery 🚀 (커피 마니아 필수)" },
          { time: "19:00", text: "저녁 Barents 🦪 (고급 해산물) 또는 3 Pavāru Restorāns (명셰프 레스토랑)" },
        ]
      },
      {
        date: "4/20 (일)", label: "리가 → 탈린 🚌",
        city: "tallinn",
        items: [
          { time: "09:00", text: "여유로운 아침: 흑향초 술 기념품 구매 + 구시가지 마지막 산책" },
          { time: "12:00", text: "점심 LIDO 🍽️ (가성비 최고) 또는 Burzma Food Hall" },
          { time: "15:00", text: "🚌 Lux Express 버스 출발 (€17/인, Platform 1, 좌석 5&6)" },
          { time: "19:35", text: "탈린 도착, Citybox Tallinn City Center 체크인 (Laeva 1)" },
          { time: "20:15", text: "🌙 탈린 야경 산책: Viru Gate → Town Hall Square → 골목길" },
        ]
      },
      {
        date: "4/21 (월)", label: "탈린 하루",
        city: "tallinn",
        items: [
          { time: "09:00", text: "Toompea Hill 전망대 ⭐⭐⭐ — 탈린의 상징, 붉은 지붕 구시가지 전망" },
          { time: "10:00", text: "알렉산드르 넵스키 대성당 (무료)" },
          { time: "11:00", text: "Kohtuotsa 전망대 — 엽서 앵글" },
          { time: "13:00", text: "점심 Rataskaevu 16 (꼭 가야 할 곳!)" },
          { time: "14:30", text: "Telliskivi Creative City ⭐ — 셀렉트숍, 디자인숍, 카페" },
          { time: "16:30", text: "Balti Jaam Market — 시장 + 미식 구역" },
          { time: "19:00", text: "저녁 Lee Brasserie 🍷 또는 NOA (해경 레스토랑)" },
        ]
      },
      {
        date: "4/22 (수)", label: "탈린 → 헬싱키 (페리)",
        city: "tallinn",
        alert: "⚠️ 11:30까지 승선 완료 (Eckerö Line, Terminal A)",
        split: true,
        splitNote: "일부 멤버는 14:05 Baltic Air로 암스테르담 직항",
        items: [
          { time: "09:00", text: "구시가지 아침 산책 + Telliskivi 창작 구역 브런치" },
          { time: "11:30", text: "🚢 Eckerö Line 승선 마감 (Terminal A)" },
          { time: "12:00", text: "페리 출발 Tallinn → Helsinki" },
          { time: "14:15", text: "헬싱키 West Terminal T2 도착" },
          { time: "15:00", text: "호텔 체크인" },
          { time: "16:00", text: "원로원 광장 첫 탐방" },
          { time: "18:00", text: "저녁: 마켓 광장 주변" },
        ]
      },
      {
        date: "4/23 (목)", label: "수오멘린나 + 암석 교회",
        city: "helsinki",
        items: [
          { time: "09:00", text: "마켓 광장에서 수오멘린나 페리 (€3.5 왕복, 유네스코)" },
          { time: "11:30", text: "섬 요새 탐험 + 해경 촬영" },
          { time: "13:00", text: "시내 귀환, 점심" },
          { time: "14:30", text: "템펠리아우키오 교회 암석 교회 (€3)" },
          { time: "16:00", text: "디자인 디스트릭트 쇼핑" },
          { time: "19:00", text: "저녁 Restaurant Savotta (전통 핀란드 요리, €30–45)" },
        ]
      },
      {
        date: "4/24 (금)", label: "예술 + 시장 탐험",
        city: "helsinki",
        items: [
          { time: "09:30", text: "아테네움 미술관 (€18)" },
          { time: "12:00", text: "헬싱키 중앙역 (건축 감상) + 점심" },
          { time: "14:00", text: "하카니에미 시장 홀" },
          { time: "16:00", text: "칼리오 지구 카페 탐방" },
          { time: "19:00", text: "저녁 Restaurant Nokka (핀란드 식재료, €45–65)" },
        ]
      },
      {
        date: "4/25 (토)", label: "대성당 + 쇼핑",
        city: "helsinki",
        items: [
          { time: "09:30", text: "헬싱키 대성당 (무료)" },
          { time: "10:30", text: "우스펜스키 대성당" },
          { time: "12:00", text: "점심 + 에스플라나디 공원 산책" },
          { time: "14:00", text: "Stockmann 백화점 + Marimekko + Iittala 쇼핑" },
          { time: "19:00", text: "저녁 Spis (북유럽 정찬, 예약 필수, €60–90)" },
        ]
      },
      {
        date: "4/26 (일)", label: "Kuusijärvi 사우나 + 암스테르담 귀환",
        city: "helsinki",
        items: [
          { time: "08:30", text: "Kuusijärvi Old Smoke Sauna 🧖 (Vantaa, 핀란드 전통 스모크 사우나 체험)" },
          { time: "12:00", text: "시내 귀환, 체크아웃 + 마지막 점심" },
          { time: "13:30", text: "헬싱키 공항 이동 (공항버스 35분)" },
          { time: "14:30", text: "공항 체크인" },
          { time: "16:40", text: "✈️ HEL → AMS 출발 (Finnair)" },
          { time: "18:15", text: "암스테르담 도착" },
        ]
      },
    ],
    cityTitles: {
      vilnius: "빌뉴스",
      riga: "리가",
      tallinn: "탈린",
      helsinki: "헬싱키",
    },
    sectionAttractions: "관광지",
    sectionFood: "레스토랑",
    sectionStay: "숙박",
    sectionTransport: "교통",
    costTitle: "비용 추산",
    costSubtitle: "1인 참고 비용 (구매한 항공권 포함)",
    costItems: [
      { label: "항공권 (구매 완료)", value: "€639" },
      { label: "숙박 10박 (이코노미)", value: "€300–500" },
      { label: "도시간 버스 교통", value: "€100–120" },
      { label: "시내 교통", value: "€80–100" },
      { label: "식비 (일 €30–50)", value: "€330–550" },
      { label: "입장료", value: "€80–100" },
      { label: "총 추산", value: "€1,529–2,009", highlight: true },
    ],
    footerTips: "여행 팁",
    tipItems: [
      { icon: "🔌", label: "콘센트", text: "유럽형 Type C/E (220V)" },
      { icon: "💶", label: "통화", text: "유로 (€) 전 구간 사용 가능" },
      { icon: "🚌", label: "버스 예약", text: "Lux Express 공식 홈페이지에서 미리 예약 추천" },
      { icon: "🚢", label: "페리 알림", text: "4/22 Eckerö Line 11:30 승선 마감!" },
      { icon: "📶", label: "인터넷", text: "EU SIM 카드 또는 eSIM 사용 가능" },
    ],
    madeWith: "Sammy & Michelle을 위해 제작",
  },

  en: {
    siteTitle: "Amber & Iron: SamMichelle's Northern Journey",
    siteSubtitle: "Sammy & Michelle's Northern Journey",
    dates: "April 16 — April 26, 2026",
    heroes: "Sammy & Michelle",
    navOverview: "Overview",
    navTimeline: "Day by Day",
    navVilnius: "Vilnius",
    navRiga: "Riga",
    navTallinn: "Tallinn",
    navHelsinki: "Helsinki",
    navCost: "Costs",
    overviewTitle: "11 Days · 4 Cities · One Perfect Getaway",
    cities: [
      { name: "Vilnius", country: "🇱🇹 Lithuania", dates: "Apr 16 – 18", nights: "2 nights" },
      { name: "Riga", country: "🇱🇻 Latvia", dates: "Apr 18 – 20", nights: "2 nights" },
      { name: "Tallinn", country: "🇪🇪 Estonia", dates: "Apr 20 – 22", nights: "2 nights" },
      { name: "Helsinki", country: "🇫🇮 Finland", dates: "Apr 22 – 26", nights: "4 nights" },
    ],
    timelineTitle: "Day-by-Day Itinerary",
    days: [
      {
        date: "Apr 16 (Wed)", label: "Arrive in Vilnius",
        city: "vilnius",
        items: [
          { time: "19:50", text: "Arrive at VNO Vilnius Airport (KLM from Amsterdam)" },
          { time: "20:30", text: "Taxi to hotel check-in (€15–20)" },
          { time: "21:00", text: "Light dinner near Pilies gatvė in the Old Town" },
        ]
      },
      {
        date: "Apr 17 (Thu)", label: "Full Day in Vilnius",
        city: "vilnius",
        items: [
          { time: "09:00", text: "Gediminas Castle Tower — panoramic city views (€5)" },
          { time: "10:30", text: "Three Crosses Hill ⭐ — must-do! City + forest + red rooftops panorama" },
          { time: "12:00", text: "Cathedral Square (UNESCO Old Town)" },
          { time: "13:00", text: "Lunch at Lokys 🐻 (medieval-style popular restaurant) or Ertlio Namas" },
          { time: "15:00", text: "Užupis Republic of Artists — Angel statue, murals, riverside walk" },
          { time: "16:30", text: "☕ Backstage Café or StrangeLove Coffee" },
          { time: "19:00", text: "Dinner at Etno Dvaras — Lithuanian traditional cuisine intro (try Cepelinai!)" },
        ]
      },
      {
        date: "Apr 18 (Fri)", label: "Train to Riga 🚂",
        city: "riga",
        items: [
          { time: "06:30", text: "Breakfast then check out (Panorama Hotel)" },
          { time: "07:03", text: "🚂 LTG Link train departs (Train 889/890, Coach 2, Seats 79&90, €24/person)" },
          { time: "11:34", text: "Arrive Riga Central Station" },
          { time: "12:30", text: "Check in at Pullman Riga Old Town (Jekaba Iela 24, ref: QHGDGZPS)" },
          { time: "14:00", text: "House of the Blackheads (€7)" },
          { time: "15:30", text: "St Peter Church Tower ⭐ — best city views in Riga" },
          { time: "17:00", text: "Dome Square + Swedish Gate stroll" },
          { time: "19:30", text: "Dinner at Folkklubs Ala Pagrabs 🍺 — must-visit local tavern" },
        ]
      },
      {
        date: "Apr 19 (Sat)", label: "Full Day in Riga",
        city: "riga",
        items: [
          { time: "09:00", text: "Riga Central Market ⭐⭐⭐ — smoked fish, rye bread, honey, cheese" },
          { time: "11:00", text: "Alberta iela Art Nouveau architecture (free) + Art Nouveau Museum" },
          { time: "13:00", text: "Lunch at Milda — elevated Latvian cuisine" },
          { time: "14:30", text: "Bastejkalna Park stroll + Freedom Monument" },
          { time: "16:00", text: "☕ Rocket Bean Roastery 🚀 — a must for coffee lovers" },
          { time: "19:00", text: "Dinner at Barents 🦪 (upscale seafood) or 3 Pavāru Restorāns (chef's table)" },
        ]
      },
      {
        date: "Apr 20 (Sun)", label: "Riga → Tallinn 🚌",
        city: "tallinn",
        items: [
          { time: "09:00", text: "Relaxed morning: souvenirs + final Old Town stroll" },
          { time: "12:00", text: "Lunch at LIDO 🍽️ (great value) or Burzma Food Hall" },
          { time: "15:00", text: "🚌 Lux Express bus departs (€17/person, Platform 1, Seats 5&6)" },
          { time: "19:35", text: "Arrive Tallinn, check in at Citybox Tallinn City Center (Laeva 1)" },
          { time: "20:15", text: "🌙 Tallinn night walk: Viru Gate → Town Hall Square → medieval alleys" },
        ]
      },
      {
        date: "Apr 21 (Mon)", label: "Full Day in Tallinn",
        city: "tallinn",
        items: [
          { time: "09:00", text: "Toompea Hill Viewpoint ⭐⭐⭐ — iconic red-roofed Old Town panorama" },
          { time: "10:00", text: "Alexander Nevsky Cathedral (free)" },
          { time: "11:00", text: "Kohtuotsa Viewing Platform — the postcard shot" },
          { time: "13:00", text: "Lunch at Rataskaevu 16 — don't miss this one!" },
          { time: "14:30", text: "Telliskivi Creative City ⭐ — vintage shops, design studios, cafés" },
          { time: "16:30", text: "Balti Jaam Market — street food and local vibes" },
          { time: "19:00", text: "Dinner at Lee Brasserie 🍷 or NOA (sea-view restaurant)" },
        ]
      },
      {
        date: "Apr 22 (Wed)", label: "Tallinn → Helsinki (Ferry Day)",
        city: "tallinn",
        alert: "⚠️ Board by 11:30 at the latest (Eckerö Line, Terminal A)",
        split: true,
        splitNote: "Some members depart 14:05 Baltic Air direct to Amsterdam",
        items: [
          { time: "09:00", text: "Morning stroll in Old Town + brunch at Telliskivi Creative City" },
          { time: "11:30", text: "🚢 Eckerö Line boarding closes (Terminal A)" },
          { time: "12:00", text: "Ferry departs Tallinn → Helsinki" },
          { time: "14:15", text: "Arrive Helsinki West Terminal T2" },
          { time: "15:00", text: "Hotel check-in" },
          { time: "16:00", text: "First look around Senate Square" },
          { time: "18:00", text: "Dinner near the Market Square" },
        ]
      },
      {
        date: "Apr 23 (Thu)", label: "Suomenlinna + Rock Church",
        city: "helsinki",
        items: [
          { time: "09:00", text: "Ferry from Market Square to Suomenlinna (€3.5 return, UNESCO)" },
          { time: "11:30", text: "Explore the island fortress + sea views" },
          { time: "13:00", text: "Return to city, lunch" },
          { time: "14:30", text: "Temppeliaukio Church — carved into solid rock (€3)" },
          { time: "16:00", text: "Design District — Finnish design brands and souvenirs" },
          { time: "19:00", text: "Dinner at Restaurant Savotta — Finnish classics (€30–45)" },
        ]
      },
      {
        date: "Apr 24 (Fri)", label: "Art + Market Day",
        city: "helsinki",
        items: [
          { time: "09:30", text: "Ateneum Art Museum — Finnish national art (€18)" },
          { time: "12:00", text: "Helsinki Central Station (architectural landmark) + lunch" },
          { time: "14:00", text: "Hakaniemi Market Hall" },
          { time: "16:00", text: "Kallio neighbourhood café crawl" },
          { time: "19:00", text: "Dinner at Restaurant Nokka — local Finnish ingredients (€45–65)" },
        ]
      },
      {
        date: "Apr 25 (Sat)", label: "Cathedrals + Shopping Day",
        city: "helsinki",
        items: [
          { time: "09:30", text: "Helsinki Cathedral (free)" },
          { time: "10:30", text: "Uspenski Cathedral" },
          { time: "12:00", text: "Lunch + stroll in Esplanadi Park" },
          { time: "14:00", text: "Stockmann dept store + Marimekko + Iittala shopping" },
          { time: "19:00", text: "Dinner at Spis — intimate Nordic tasting menu (€60–90, book ahead)" },
        ]
      },
      {
        date: "Apr 26 (Sun)", label: "Kuusijärvi Sauna + Fly Home",
        city: "helsinki",
        items: [
          { time: "08:30", text: "Kuusijärvi Old Smoke Sauna 🧖 (Vantaa — traditional Finnish smoke sauna experience)" },
          { time: "12:00", text: "Return to city, check out + final lunch" },
          { time: "13:30", text: "Head to Helsinki Airport (bus ~35 min)" },
          { time: "14:30", text: "Airport check-in" },
          { time: "16:40", text: "✈️ HEL → AMS departs (Finnair)" },
          { time: "18:15", text: "Arrive Amsterdam" },
        ]
      },
    ],
    cityTitles: {
      vilnius: "Vilnius",
      riga: "Riga",
      tallinn: "Tallinn",
      helsinki: "Helsinki",
    },
    sectionAttractions: "Attractions",
    sectionFood: "Restaurants",
    sectionStay: "Accommodation",
    sectionTransport: "Getting Around",
    costTitle: "Budget Estimate",
    costSubtitle: "Per person reference (flights already purchased)",
    costItems: [
      { label: "Flights (purchased)", value: "€639" },
      { label: "Accommodation 10 nights (budget)", value: "€300–500" },
      { label: "Inter-city buses", value: "€100–120" },
      { label: "Local transport", value: "€80–100" },
      { label: "Food & drink (€30–50/day)", value: "€330–550" },
      { label: "Entrance fees", value: "€80–100" },
      { label: "Total estimate", value: "€1,529–2,009", highlight: true },
    ],
    footerTips: "Useful Info",
    tipItems: [
      { icon: "🔌", label: "Power", text: "European Type C/E (220V)" },
      { icon: "💶", label: "Currency", text: "Euro (€) accepted throughout" },
      { icon: "🚌", label: "Bus tickets", text: "Book Lux Express in advance for better prices" },
      { icon: "🚢", label: "Ferry reminder", text: "Apr 22 Eckerö Line boards by 11:30!" },
      { icon: "📶", label: "Data", text: "EU SIM card or eSIM works across all countries" },
    ],
    madeWith: "Made for Sammy & Michelle",
  }
};
