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
      { name: "里加", country: "🇱🇻 拉脫維亞", dates: "4/19 – 4/20", nights: "2 晚" },
      { name: "塔林", country: "🇪🇪 愛沙尼亞", dates: "4/21 – 4/22", nights: "1 晚" },
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
          { time: "10:30", text: "大教堂廣場 + 地下室（UNESCO 老城區）" },
          { time: "13:00", text: "午餐 Ertlio Namas（在地家常菜，€15–20）" },
          { time: "14:30", text: "黎明之門（Gates of Dawn）+ 聖安娜教堂" },
          { time: "16:00", text: "Užupis 藝術共和國漫步（免費）" },
          { time: "19:00", text: "晚餐 Lokys — 傳統立陶宛野味料理（€25–35）" },
        ]
      },
      {
        date: "4/18 (五)", label: "特拉凱湖中城堡 Day Trip",
        city: "vilnius",
        items: [
          { time: "09:30", text: "巴士前往 Trakai 特拉凱（30 分鐘，€2）" },
          { time: "10:30", text: "Trakai 湖中城堡（€8 門票）" },
          { time: "12:30", text: "品嚐 Kibinai 傳統餡餅" },
          { time: "14:30", text: "返回維爾紐斯" },
          { time: "15:30", text: "KGB 博物館（蘇聯占領歷史，€8）" },
          { time: "17:30", text: "Halės 市集採買" },
          { time: "19:00", text: "晚餐 Cili Kaimas（農莊風味，€15–25）" },
        ]
      },
      {
        date: "4/19 (六)", label: "維爾紐斯 → 里加",
        city: "riga",
        items: [
          { time: "08:00", text: "早餐後退房" },
          { time: "09:00", text: "Lux Express 巴士 → 里加（4 小時，€20–30）" },
          { time: "13:00", text: "抵達里加，入住酒店" },
          { time: "14:30", text: "House of the Blackheads 黑頭兄弟會之屋（€7）" },
          { time: "16:00", text: "里加大教堂 + 自由紀念碑" },
          { time: "19:00", text: "晚餐 Restaurant 3（現代拉脫維亞料理，€30–45）" },
        ]
      },
      {
        date: "4/20 (日)", label: "里加全日",
        city: "riga",
        items: [
          { time: "09:30", text: "Alberta Street 新藝術建築街（免費）" },
          { time: "11:00", text: "拉脫維亞國家博物館" },
          { time: "13:00", text: "午餐 Folkklubs Ala Pagrabs（民俗風情，€15–25）" },
          { time: "14:30", text: "里加中央市場（前飛船庫改建，免費）" },
          { time: "16:30", text: "老城區漫步 + 手工藝品採買" },
          { time: "19:00", text: "晚餐 Vincents（米其林推薦，€50–80）" },
        ]
      },
      {
        date: "4/21 (一)", label: "里加 → 塔林",
        city: "tallinn",
        items: [
          { time: "08:30", text: "早餐後退房" },
          { time: "09:30", text: "Lux Express 巴士 → 塔林（4.5 小時，€20–30）" },
          { time: "14:00", text: "抵達塔林，入住酒店（近 Terminal A）" },
          { time: "15:00", text: "Toompea 圓頂山城堡區" },
          { time: "16:30", text: "Alexander Nevsky 大教堂（免費）" },
          { time: "17:30", text: "Viru Gate 老城門漫步" },
          { time: "19:00", text: "晚餐 Olde Hansa — 中世紀主題餐廳（€25–35，必去！）" },
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
        date: "4/26 (日)", label: "返回阿姆斯特丹",
        city: "helsinki",
        items: [
          { time: "08:00", text: "早餐 + 最後採買 / 咖啡廳" },
          { time: "13:00", text: "退房，前往赫爾辛基機場（機場巴士 35 分鐘）" },
          { time: "14:30", text: "機場 check-in" },
          { time: "16:40", text: "✈️ HEL → AMS 起飛（Finair）" },
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
      { name: "리가", country: "🇱🇻 라트비아", dates: "4/19 – 4/20", nights: "2박" },
      { name: "탈린", country: "🇪🇪 에스토니아", dates: "4/21 – 4/22", nights: "1박" },
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
          { time: "10:30", text: "대성당 광장 + 지하실 (유네스코 구시가지)" },
          { time: "13:00", text: "점심 Ertlio Namas (현지 가정식, €15–20)" },
          { time: "14:30", text: "새벽의 문 + 성 안나 교회" },
          { time: "16:00", text: "우주피스 예술 공화국 산책 (무료)" },
          { time: "19:00", text: "저녁 Lokys — 전통 리투아니아 요리 (€25–35)" },
        ]
      },
      {
        date: "4/18 (금)", label: "트라카이 호수 성 당일치기",
        city: "vilnius",
        items: [
          { time: "09:30", text: "버스로 트라카이 이동 (30분, €2)" },
          { time: "10:30", text: "트라카이 섬 성 (€8)" },
          { time: "12:30", text: "키비나이 전통 파이 맛보기" },
          { time: "14:30", text: "빌뉴스 귀환" },
          { time: "15:30", text: "KGB 박물관 (€8)" },
          { time: "17:30", text: "Halės 시장 쇼핑" },
          { time: "19:00", text: "저녁 Cili Kaimas (농장 스타일, €15–25)" },
        ]
      },
      {
        date: "4/19 (토)", label: "빌뉴스 → 리가",
        city: "riga",
        items: [
          { time: "08:00", text: "아침 식사 후 체크아웃" },
          { time: "09:00", text: "Lux Express 버스 → 리가 (4시간, €20–30)" },
          { time: "13:00", text: "리가 도착, 호텔 체크인" },
          { time: "14:30", text: "블랙헤즈의 집 (€7)" },
          { time: "16:00", text: "리가 대성당 + 자유의 기념비" },
          { time: "19:00", text: "저녁 Restaurant 3 (현대 라트비아 요리, €30–45)" },
        ]
      },
      {
        date: "4/20 (일)", label: "리가 하루",
        city: "riga",
        items: [
          { time: "09:30", text: "알베르타 거리 아르누보 건축 (무료)" },
          { time: "11:00", text: "라트비아 국립 박물관" },
          { time: "13:00", text: "점심 Folkklubs Ala Pagrabs (€15–25)" },
          { time: "14:30", text: "리가 중앙 시장 (구 비행선 격납고, 무료)" },
          { time: "16:30", text: "구시가지 산책 + 공예품 쇼핑" },
          { time: "19:00", text: "저녁 Vincents (미슐랭 추천, €50–80)" },
        ]
      },
      {
        date: "4/21 (월)", label: "리가 → 탈린",
        city: "tallinn",
        items: [
          { time: "08:30", text: "아침 식사 후 체크아웃" },
          { time: "09:30", text: "Lux Express 버스 → 탈린 (4.5시간, €20–30)" },
          { time: "14:00", text: "탈린 도착, 호텔 체크인 (Terminal A 근처)" },
          { time: "15:00", text: "톰페아 언덕 성 지구" },
          { time: "16:30", text: "알렉산드르 넵스키 대성당 (무료)" },
          { time: "17:30", text: "비루 게이트 구시가지 산책" },
          { time: "19:00", text: "저녁 Olde Hansa — 중세 테마 레스토랑 (€25–35, 필수!)" },
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
        date: "4/26 (일)", label: "암스테르담으로 귀환",
        city: "helsinki",
        items: [
          { time: "08:00", text: "아침 식사 + 마지막 쇼핑 / 카페" },
          { time: "13:00", text: "체크아웃, 공항 이동 (공항버스 35분)" },
          { time: "14:30", text: "공항 체크인" },
          { time: "16:40", text: "✈️ HEL → AMS 출발 (Finair)" },
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
      { name: "Riga", country: "🇱🇻 Latvia", dates: "Apr 19 – 20", nights: "2 nights" },
      { name: "Tallinn", country: "🇪🇪 Estonia", dates: "Apr 21 – 22", nights: "1 night" },
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
          { time: "10:30", text: "Cathedral Square + crypt (UNESCO Old Town)" },
          { time: "13:00", text: "Lunch at Ertlio Namas — local home cooking (€15–20)" },
          { time: "14:30", text: "Gates of Dawn + St. Anne's Church" },
          { time: "16:00", text: "Užupis Republic of Artists — free to roam" },
          { time: "19:00", text: "Dinner at Lokys — traditional Lithuanian wild game (€25–35)" },
        ]
      },
      {
        date: "Apr 18 (Fri)", label: "Trakai Island Castle Day Trip",
        city: "vilnius",
        items: [
          { time: "09:30", text: "Bus to Trakai (30 min, €2)" },
          { time: "10:30", text: "Trakai Island Castle (€8)" },
          { time: "12:30", text: "Try Kibinai — traditional Karaite pastries" },
          { time: "14:30", text: "Return to Vilnius" },
          { time: "15:30", text: "KGB Museum (€8)" },
          { time: "17:30", text: "Halės Market browse" },
          { time: "19:00", text: "Dinner at Cili Kaimas — farmhouse cuisine (€15–25)" },
        ]
      },
      {
        date: "Apr 19 (Sat)", label: "Vilnius → Riga",
        city: "riga",
        items: [
          { time: "08:00", text: "Breakfast then check out" },
          { time: "09:00", text: "Lux Express bus to Riga (4 hrs, €20–30)" },
          { time: "13:00", text: "Arrive Riga, check in" },
          { time: "14:30", text: "House of the Blackheads (€7)" },
          { time: "16:00", text: "Riga Cathedral + Freedom Monument" },
          { time: "19:00", text: "Dinner at Restaurant 3 — modern Latvian (€30–45)" },
        ]
      },
      {
        date: "Apr 20 (Sun)", label: "Full Day in Riga",
        city: "riga",
        items: [
          { time: "09:30", text: "Alberta Street — Art Nouveau architecture (free)" },
          { time: "11:00", text: "Latvian National Museum of Art" },
          { time: "13:00", text: "Lunch at Folkklubs Ala Pagrabs — folk atmosphere (€15–25)" },
          { time: "14:30", text: "Riga Central Market (former zeppelin hangars, free)" },
          { time: "16:30", text: "Old Town wander + craft shopping" },
          { time: "19:00", text: "Dinner at Vincents — Michelin-recommended (€50–80)" },
        ]
      },
      {
        date: "Apr 21 (Mon)", label: "Riga → Tallinn",
        city: "tallinn",
        items: [
          { time: "08:30", text: "Breakfast then check out" },
          { time: "09:30", text: "Lux Express bus to Tallinn (4.5 hrs, €20–30)" },
          { time: "14:00", text: "Arrive Tallinn, check in (near Terminal A)" },
          { time: "15:00", text: "Toompea Hill — castle and parliament district" },
          { time: "16:30", text: "Alexander Nevsky Cathedral (free)" },
          { time: "17:30", text: "Viru Gate and Old Town stroll" },
          { time: "19:00", text: "Dinner at Olde Hansa — medieval themed restaurant (€25–35, unmissable!)" },
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
        date: "Apr 26 (Sun)", label: "Fly Back to Amsterdam",
        city: "helsinki",
        items: [
          { time: "08:00", text: "Breakfast + last-minute shopping / café" },
          { time: "13:00", text: "Check out, head to Helsinki Airport (bus ~35 min)" },
          { time: "14:30", text: "Airport check-in" },
          { time: "16:40", text: "✈️ HEL → AMS departs (Finair)" },
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
