/* =========================================================================
   皮克敏 Bloom 成功原因解析 · data.js
   單一資料檔，全站共用。每個 SITE_PAGES 條目 = 一個 .html 頁面。
   所有人可見字串皆為 {en,zh}，語言切換時整站重繪、無殘留。
   ========================================================================= */

window.SITE_META = {
  title:    { en: "Why Pikmin Bloom Won", zh: "皮克敏 Bloom 為什麼成功" },
  subtitle: { en: "A multi-framework analysis of a quiet hit.",
              zh: "一場用多重理論框架拆解的成功解剖。" },
  footer:   { en: "Static research site · compiled from public sources. Non-official.",
              zh: "純靜態研究網站 · 資料整理自公開來源 · 非官方。" }
};

window.SITE_PAGES = [

/* ===================== HOME / HUB ===================== */
{
  slug: "home", layout: "hub", icon: "local_florist",
  title:    { en: "Why Pikmin Bloom Won", zh: "皮克敏 Bloom 為什麼成功" },
  subtitle: { en: "Niantic × Nintendo turned daily steps into flowers, postcards and quiet companionship — no PvP, no FOMO. This is a multi-framework dissection: what was designed, and what merely grew. Core thesis: imperfection, not perfection, is the engine of virality.",
              zh: "Niantic × 任天堂把每日步數變成種花、收明信片與低壓陪伴——無 PvP、無 FOMO。這是一場多重框架的解剖：哪些成功是「設計」出來的，哪些只是「長」出來的。核心命題：不完美，而非完美，才是傳播的引擎。" },
  stats: [
    { value: 100, label: { en: "Lifetime spend (US$M, by Dec 2025)", zh: "累計玩家消費（百萬美元，2025/12）" } },
    { value: 5,   label: { en: "Theoretical lenses used", zh: "套用的理論框架" } },
    { value: 0,   label: { en: "PvP modes (deliberately zero)", zh: "PvP 對戰（刻意為零）" } },
    { value: 120, label: { en: "Monthly active users (×10k)", zh: "月活躍用戶（萬）" } }
  ]
},

/* ===================== THESIS / SCROLLY ===================== */
{
  slug: "thesis", layout: "scrolly", icon: "auto_stories",
  title:    { en: "The Core Thesis: Imperfection Is the Engine", zh: "核心命題：不完美才是傳播引擎" },
  subtitle: { en: "Your own hunch was right — the 'ruined' postcard is the story. Scroll through why a flaw out-travels a masterpiece.",
              zh: "你最初的直覺是對的——「拍爛掉的明信片」就是故事本身。捲動看看，為什麼一個缺陷比一張完美作品傳得更遠。" },
  steps: [
    { text: { en: "A 'perfect' postcard — a clean shot of the landmark — earns one thing: a like. Then the chain stops.",
              zh: "一張「完美」的明信片——把地標拍得乾乾淨淨——只換來一件事：一個讚。然後傳播鏈就斷了。" },
      visual: { type: "stat", value: { en: "A like = the end", zh: "一個讚 = 終點" }, color: "#6B6258" } },
    { text: { en: "But a postcard where a giant Pikmin blocks the landmark? That earns a contest: 'who has the ugliest one?'",
              zh: "但一張被巨大皮克敏擋住地標的明信片呢？它換來一場比賽：「誰的最醜？」" },
      visual: { type: "stat", value: { en: "A contest begins", zh: "一場比賽開始" }, color: "#C8442E" } },
    { text: { en: "Why? An ugly shot is high-arousal funny (people share it), feels real (unedited), and is trivially imitable.",
              zh: "為什麼？醜照是「高喚醒」的好笑（人會分享）、看起來真實（沒修圖）、而且模仿門檻趨近於零。" },
      visual: { type: "bars", color: "#C8442E", bars: [
        { label: { en: "Perfect", zh: "完美作品" }, value: 18 },
        { label: { en: "Imperfect", zh: "不完美作品" }, value: 92 }
      ] } },
    { text: { en: "Perfect content's chain ends at 'admiration'. Imperfect content self-replicates: laugh → I'll make one too → a new flaw → laughed at again.",
              zh: "完美作品的傳播鏈在「讚賞」就斷了。不完美作品會自我複製：嘲笑 → 我也來一張 → 新的不完美 → 再被嘲笑。" },
      visual: { type: "bars", color: "#4F7A3A", bars: [
        { label: { en: "Admire", zh: "讚賞" }, value: 20 },
        { label: { en: "Imitate", zh: "模仿" }, value: 70 },
        { label: { en: "Re-spread", zh: "再傳播" }, value: 95 }
      ] } },
    { text: { en: "Five independent marketing frameworks — Berger, Sharp, Godin, transmission psychology, localization — all point to the same conclusion.",
              zh: "五個獨立的行銷框架——Berger、Sharp、Godin、傳播心理、在地化——全部指向同一個結論。" },
      visual: { type: "stat", value: { en: "5 / 5 agree", zh: "5 / 5 一致" }, color: "#B7791F" } },
    { text: { en: "Perfection is where transmission ends. Imperfection is where it begins.",
              zh: "完美是傳播的終點，不完美是傳播的引擎。" },
      visual: { type: "stat", value: { en: "Imperfection wins", zh: "不完美的逆襲" }, color: "#C8442E" } }
  ]
},

/* ===================== CAUSAL vs EFFECTUAL / COMPARISON ===================== */
{
  slug: "causal-vs-effectual", layout: "comparison", icon: "compare_arrows",
  title:    { en: "Causation vs. Effectuation", zh: "因果邏輯 vs 效果邏輯" },
  subtitle: { en: "Sarasvathy's two logics, side by side. Causal logic designs the stage and rules; effectual logic grows the improvised play on top.",
              zh: "Sarasvathy 的兩種邏輯並列。因果邏輯設計「舞台與規則」；效果邏輯長出「舞台上即興的戲」。" },
  plans: [
    { key: "causal",    name: { en: "Causation", zh: "因果邏輯" }, price: { en: "Designed", zh: "設計出來的" }, note: { en: "Set goal, then pick means", zh: "先設目標、再選手段" } },
    { key: "effectual", name: { en: "Effectuation", zh: "效果邏輯" }, price: { en: "Emerged", zh: "長出來的" }, highlight: true, note: { en: "Start from means, embrace surprise", zh: "從手段出發、擁抱意外" } }
  ],
  features: [
    { label: { en: "Starting point", zh: "起點" }, values: {
        causal:    { en: "A fixed goal: build a long-term walking habit", zh: "固定目標：養成長期健康步行習慣" },
        effectual: { en: "Means at hand: existing platform + open tools", zh: "手中資源：既有平台 + 開放工具" } } },
    { label: { en: "Audience", zh: "客群" }, values: {
        causal:    { en: "Rational STP segment (people Pokémon GO over-served)", zh: "STP 理性區隔（被 Pokémon GO 過度服務的人）" },
        effectual: { en: "Community pulls itself in; word-of-mouth snowball", zh: "社群自我吸引、口碑滾雪球" } } },
    { label: { en: "Product", zh: "產品" }, values: {
        causal:    { en: "No FOMO / no death / idle-able (reverse-engineered from goal)", zh: "無 FOMO／無死亡／可掛機（目標反推）" },
        effectual: { en: "Postcards played into an 'ugly' meme & life-album", zh: "明信片被玩成「醜梗」與生活相簿" } } },
    { label: { en: "Marketing", zh: "行銷" }, values: {
        causal:    { en: "Predictable monthly Community Day; global goals", zh: "可預測的每月 Community Day、全球目標" },
        effectual: { en: "'Qing-dynasty Pikmin' & other spontaneous memes", zh: "「大清皮克敏」等自發迷因" } } },
    { label: { en: "View of control", zh: "控制觀" }, values: {
        causal:    { en: "Predict and control the environment", zh: "預測並控制環境" },
        effectual: { en: "Accept uncertainty, exploit contingency, co-create", zh: "接受不確定、利用偶發、與使用者共創" } } },
    { label: { en: "In one line", zh: "一句話" }, values: {
        causal:    { en: "\"Decide where to go, then build a car.\"", zh: "「先想好要去哪，再造一台車。」" },
        effectual: { en: "\"Who rode along and what they sang happened on the road.\"", zh: "「路上載了誰、唱什麼歌，是路上才發生的。」" } } }
  ]
},

/* ===================== EFFECTUATION / ARTICLE ===================== */
{
  slug: "effectuation", layout: "article", icon: "spa",
  title:    { en: "Effectuation: A Success That Was Brewed", zh: "效果邏輯：被「釀」出來的成功" },
  subtitle: { en: "Sarasvathy's five principles. Pikmin Bloom is less a planned success than a brewed one.",
              zh: "Sarasvathy 的五大原則。皮克敏與其說是規劃出來的成功，不如說是被釀出來的。" },
  sections: [
    { id: "eff-intro", heading: { en: "Why this is an effectuation case", zh: "為何這是效果邏輯案例" }, blocks: [
      { type: "p", text: { en: "Causation rests on prediction (set a goal, choose means); effectuation rests on control (start from means, see what's possible). Pikmin Bloom's success was almost never reverse-engineered from market research.",
                           zh: "因果邏輯建立在「預測」（設目標、選手段）；效果邏輯建立在「控制」（從手段出發、看能創造什麼）。皮克敏的成功幾乎沒有一項是先做市場研究、再反推產品得來的。" } },
      { type: "quote", text: { en: "To the extent we can control the future, we do not need to predict it. — Sarasvathy",
                               zh: "只要我們能控制未來，就不需要預測它。——Sarasvathy" } }
    ] },
    { id: "eff-bird", heading: { en: "1 · Bird-in-Hand", zh: "一、手中鳥原則" }, blocks: [
      { type: "p", text: { en: "Start from who you are, what you know, whom you know. Pikmin Bloom is a pure recombination of Niantic's existing assets: the Ingress (2012) waypoint database, AR tech, and Nintendo's Pikmin IP — even the postcard's lifelog idea is borrowed from Olimar's ship log in the original Pikmin.",
                           zh: "從「我是誰、我知道什麼、我認識誰」出發。皮克敏是 Niantic 既有資產的純粹重組：Ingress（2012）的地點資料庫、AR 技術、任天堂的皮克敏 IP——連明信片的 lifelog 概念都挪用自初代主角 Olimar 的船艦日誌。" } },
      { type: "h3", text: { en: "The accident hidden in 'making do'", zh: "「將就」裡藏著的意外" } },
      { type: "p", text: { en: "Reusing the old Ingress waypoints — a pure cost-saving move — is exactly what created the viral asset later: Taiwan's 'ugly postcards / electrical-box landmarks'. Those spots exist because early Ingress players registered utility boxes and tiny temples without thinking about beauty. The bird-in-hand shortcut became the lemonade's raw material.",
                           zh: "「沿用 Ingress 老地點」這個純粹省事的決定，恰恰造就了後來的病毒資產：台灣的「醜明信片／變電箱景點」。這些地點之所以存在，是因為早年 Ingress 玩家不考慮美觀就把變電箱、小公廟都申請成地標。手中鳥的「將就」，成了檸檬水的原料。" } }
    ] },
    { id: "eff-loss", heading: { en: "2 · Affordable Loss", zh: "二、可承受損失原則" }, blocks: [
      { type: "p", text: { en: "Bet what you can afford to lose, not what you might gain. Pikmin Bloom is ~1% of Niantic's revenue — its failure was never existential, so it could run low-cost (no PvP, no heavy events) and patiently long-tail.",
                           zh: "賭「賠得起多少」而非「能賺多少」。皮克敏只佔 Niantic 約 1% 營收，失敗從來不是公司存亡問題，因此可以低成本經營（無 PvP、無重度活動）並耐心長尾。" } },
      { type: "p", text: { en: "Affordable loss buys time and patience: a 'must-win' product can't leave the 'block the landmark' bug unfixed, but an affordable bet can let the community slowly turn 'ugly' into 'local flavor'.",
                           zh: "可承受損失買到的是時間與耐心：一款「必須贏」的產品承擔不起放著「擋住地標」的 bug 不修，但一個賠得起的小注，反而容得下社群慢慢把「醜」釀成「在地味」。" } }
    ] },
    { id: "eff-lemon", heading: { en: "3 · Lemonade (the key one)", zh: "三、檸檬水原則（最關鍵）" }, blocks: [
      { type: "p", text: { en: "Surprises aren't noise to eliminate — they're leads to new opportunity. The 'ugly postcard' ran the full chain: a bug (Pikmin blown up huge, blocking the view) → met an old flaw (electrical-box spots) → community reframed 'ugly' as 'Taiwanese sensibility' → official soft-adoption (zh Threads, 18k day-1 followers).",
                           zh: "意外不是要消滅的雜訊，而是通往新機會的線索。「醜明信片」走完整條鏈：一個 bug（皮克敏被放超大、擋住風景）→ 撞上舊缺陷（變電箱景點）→ 社群把「醜」重新詮釋為「台灣感性」→ 官方順勢收編（繁中 Threads 首日 1.8 萬追蹤）。" } },
      { type: "ul", items: {
        en: ["The flaw and the asset are the same thing — rivals can copy 'cute + walking + AR', but not 'Taiwanese players claiming ugly utility boxes as local humor'.",
             "The chef is the community, not the company — Niantic's job was simply not to delete the lemon.",
             "It turned a product defect into a participatory content engine — once 'ugliest wins', every player is a creator."],
        zh: ["缺陷與資產是同一個東西——對手能抄「可愛 + 步行 + AR」，但抄不到「台灣玩家把醜變電箱認領成在地幽默」。",
             "檸檬水的主廚是社群，不是公司——Niantic 做對的事是「沒去消滅這顆檸檬」。",
             "它把產品缺陷變成參與式內容引擎——一旦「比醜」成為玩法，每個玩家都是內容生產者。"] } }
    ] },
    { id: "eff-quilt", heading: { en: "4 · Crazy Quilt", zh: "四、瘋狂拼布原則" }, blocks: [
      { type: "p", text: { en: "Ally with anyone willing to commit, and let them reshape the product. Pikmin Bloom stitched together zoos, Kura Sushi, JR Kyushu, the Super Mario movie, 4,300 FamilyMart stores, and city governments (Kaohsiung, Chiayi, Kyoto) — plus the most valuable patch of all: players who built tools (Pikmin Atlas) and memes for free.",
                           zh: "和任何「願意承諾」的人結盟，讓他們共同改寫產品。皮克敏縫進了動物園、藏壽司、JR 九州、超級瑪利歐電影、全家 4,300 店，以及地方政府（高雄、嘉義、京都）——還有最有價值的一塊布：免費做工具（Pikmin Atlas）與迷因的玩家。" } },
      { type: "p", text: { en: "And the player-created patch only happened because the product left an open seam — the 'ugly' that could be re-interpreted. Imperfection is the quilt's glue.",
                           zh: "而玩家共創之所以能發生，是因為產品留了一道開放的縫隙——那個可被重新詮釋的「醜」。不完美，是這床被子的黏著劑。" } }
    ] },
    { id: "eff-pilot", heading: { en: "5 · Pilot-in-the-Plane", zh: "五、飛行員原則" }, blocks: [
      { type: "p", text: { en: "The future is shaped by action, not foretold. Niantic couldn't predict 'Taiwan would do ugliest-postcard contests' — instead it controlled a container where surprises could ferment: collaborative not competitive rules, an open re-mixable postcard surface, collective goal events.",
                           zh: "未來靠行動塑造，不靠預測。Niantic 無法預測「台灣會流行比醜」——它控制的是一個讓意外能發酵的容器：協作而非競爭的規則、可二創的明信片介面、集體目標式的活動。" } },
      { type: "quote", text: { en: "The product philosophy IS the methodology: no-death = affordable loss, co-planting = crazy quilt, keeping the ugly = lemonade, building a container = pilot-in-the-plane.",
                               zh: "產品哲學本身就是方法論：不會死＝可承受損失、集體種花＝瘋狂拼布、留著醜＝檸檬水、打造容器＝飛行員。" } }
    ] },
    { id: "eff-end", heading: { en: "In one line", zh: "一句話總結" }, blocks: [
      { type: "p", text: { en: "Through effectuation, Pikmin Bloom's success is: with an affordable bet, Niantic recombined existing assets, deliberately built a no-competition, no-death, re-mixable container instead of predicting the market — so when the 'ugly postcard' bug arrived, the community, governments, stores and idols could stitch it into culture, brewing a defect into an inimitable local identity.",
                           zh: "用效果邏輯看，皮克敏的成功是：Niantic 用「賠得起的一小注」，把既有資產重新拼裝，刻意造出一個無競爭、無死亡、可二創的容器而非去預測市場——於是當「醜明信片」這個 bug 撞進來時，社群、政府、商店與偶像得以一起把它縫成文化，把缺陷釀成競品抄不走的在地認同。" } }
    ] }
  ]
},

/* ===================== CAUSATION / ARTICLE ===================== */
{
  slug: "causation", layout: "article", icon: "architecture",
  title:    { en: "Causation: A TAM Expander by Design", zh: "因果邏輯：被設計出來的 TAM 擴張器" },
  subtitle: { en: "Predictive, goal-driven planning. A game that's ~1% of revenue, designed to expand the whole ecosystem's reachable market.",
              zh: "預測式、目標導向的規劃。一個只佔約 1% 營收的遊戲，被設計成擴張整個生態可服務市場的工具。" },
  sections: [
    { id: "cau-stp", heading: { en: "1 · Segmentation & targeting (STP)", zh: "一、市場區隔與目標客群（STP）" }, blocks: [
      { type: "p", text: { en: "Holding the largest behavioral database in location-based gaming, Niantic could see Pokémon GO's under-served edge: people who walk a lot but are repelled by competition. Pikmin Bloom targets exactly them — 'people who find Pokémon GO too competitive, too complex'. The '8 to 80' framing is a deliberate positioning line: it means 'not for the hardcore'.",
                           zh: "握有 LBS 遊戲最大的行為資料庫，Niantic 看得到 Pokémon GO 的「未被服務邊緣」：愛走路、卻被競爭勸退的人。皮克敏精準鎖定他們——「覺得 Pokémon GO 太競爭、太複雜」的人。「8 到 80 歲」是刻意的定位語言：它在說「不是給硬核玩家的」。" } }
    ] },
    { id: "cau-pos", heading: { en: "2 · Competitive positioning", zh: "二、競爭定位" }, blocks: [
      { type: "p", text: { en: "Its main rival is Niantic's own Pokémon GO — so it was positioned on the opposite emotional axis: one sells excitement/conquest, the other calm/companionship. That avoids cannibalization and expands Niantic's TAM from 'players willing to compete' to 'anyone willing to walk'.",
                           zh: "它的主要對手是自家的 Pokémon GO——所以被刻意放到對立的情緒象限：一個賣興奮／征服，一個賣平靜／陪伴。這避免自我蠶食，把 Niantic 的 TAM 從「願意競爭的玩家」擴張到「願意走路的所有人」。" } },
      { type: "p", text: { en: "Every collaboration (Super Mario movie, Kura Sushi, JR Kyushu, San Diego Zoo) is family-friendly and local — none points toward hardcore gaming. The positioning discipline is intentional.",
                           zh: "每個聯名（超級瑪利歐電影、藏壽司、JR 九州、聖地牙哥動物園）都是家庭友善、實體在地——沒有一個往硬核方向走。定位紀律是刻意維持的。" } }
    ] },
    { id: "cau-design", heading: { en: "3 · Goal-reversed product design", zh: "三、產品設計的目標反推" }, blocks: [
      { type: "p", text: { en: "Lock the goal — 'make people walk a bit more, every day, and not churn' — and the design decisions are almost solved, not invented:",
                           zh: "鎖定目標——「讓人每天多走一點、且長期不流失」——設計決策幾乎是被「解出來」的，而非「發明」的：" } },
      { type: "ul", items: {
        en: ["No FOMO — it builds anxiety and churn long-term.",
             "No PvP / enemies / death — anything you can 'lose' repels non-gamers and elders.",
             "Idle-able in the background — habits must fit into daily life.",
             "Step-driven core loop — real walking is the only progress currency.",
             "Postcard lifelog — turns the game into a 'life album' you return to."],
        zh: ["移除 FOMO——它長期製造焦慮與棄坑。",
             "移除 PvP／敵人／死亡——任何「會輸」的機制都勸退非玩家與長者。",
             "可背景掛機——習慣要能嵌進日常。",
             "步數驅動核心迴圈——現實走路是唯一的進度貨幣。",
             "明信片 lifelog——把遊戲變成你會回來的「生活相簿」。"] } },
      { type: "quote", text: { en: "'Make Every Step Count!' isn't a slogan — it's the product spec. The innovation is mostly in what was deliberately removed.",
                               zh: "「Make Every Step Count!」不是文案，而是產品規格書。它的創新主要在於「刻意拿掉」什麼。" } }
    ] },
    { id: "cau-machine", heading: { en: "4 · A predictable marketing machine", zh: "四、可預測的行銷機器" }, blocks: [
      { type: "p", text: { en: "Marketing is a content cadence engine: monthly Community Day (walk 10k steps for a badge) + flower-of-the-month, Big Flower (300 co-planted flowers / 23h), anniversary weeks, Earth Day tiered global goals (3B → 6B → 10B flowers). It trades regularity for retention — and lets a tiny team sustain a growing product.",
                           zh: "行銷是一台內容排程引擎：每月 Community Day（走 1 萬步拿徽章）＋當月之花、Big Flower（多人合種 300 朵／23 小時）、週年社群週、Earth Day 分層全球目標（30 億 → 60 億 → 100 億朵）。它用規律性換留存——並讓很小的團隊維持一個成長中的產品。" } }
    ] },
    { id: "cau-platform", heading: { en: "5 · Platform reuse", zh: "五、資料資產與平台複用" }, blocks: [
      { type: "p", text: { en: "Reusing Niantic's geospatial platform, Wayfarer location database, AR rendering, anti-cheat and backend makes Pikmin Bloom's marginal cost tiny — essentially 'another game skin' on an amortized platform. One asset, multiple uses: spots serve gameplay, commercial footfall (FamilyMart), and public goals (Kyoto's over-tourism dispersal).",
                           zh: "複用 Niantic 的地理空間平台、Wayfarer 地點庫、AR 渲染、反作弊與後端，使皮克敏的邊際成本極低——本質是在已攤提平台上「再開一張皮」。一份資產、多重用途：地點同時服務遊戲體驗、商業導流（全家）與公共目標（京都的人潮分散）。" } }
    ] },
    { id: "cau-money", heading: { en: "6 · Staged monetization", zh: "六、階段性變現" }, blocks: [
      { type: "p", text: { en: "Deliberately low monetization first (build habit) → 2024/08 D2C web shop (skip the 30% cut) → long-tail growth ($8.4M → $34.8M, $100M cumulative) → capital exit.",
                           zh: "刻意先低度變現（養習慣）→ 2024/08 D2C 網頁商店（繞過 30% 抽成）→ 長尾成長（$8.4M → $34.8M，累計破 1 億）→ 資本退出。" } },
      { type: "quote", text: { en: "Honest correction: the US$3.5B was the price for Niantic's WHOLE games division (incl. Pokémon GO, Monster Hunter Now). Pikmin Bloom was one asset within it — not valued at $3.5B alone.",
                               zh: "誠實校正：35 億美元是 Niantic「整個遊戲事業群」（含 Pokémon GO、Monster Hunter Now）的售價。皮克敏是其中一塊資產，並非單獨估值 35 億。" } }
    ] },
    { id: "cau-limit", heading: { en: "What causation can't explain", zh: "因果邏輯解釋不了什麼" }, blocks: [
      { type: "p", text: { en: "Causation explains the stage and rules (who the audience is, the no-FOMO design, the cadence engine). It cannot explain the improvised play: the ugly-postcard meme, 'Qing-dynasty Pikmin', the depth of local emotional bonds. Niantic's brilliance was laying a foundation open and low-pressure enough for effectuation to grow on top — but that emergent dividend was allowed, not assigned.",
                           zh: "因果解釋的是舞台與規則（誰是客群、無 FOMO 設計、排程引擎）。它解釋不了即興的戲：醜明信片迷因、大清皮克敏、在地情感連結的強度。Niantic 的高明，是把地基打到「夠開放、夠低壓，足以讓效果邏輯在上面長東西」——但這份湧現的紅利是被允許的，不是被指定的。" } }
    ] },
    { id: "cau-end", heading: { en: "In one line", zh: "一句話總結" }, blocks: [
      { type: "p", text: { en: "Through causation, Pikmin Bloom's success is: Niantic used Pokémon GO's data and platform to lock a goal — 'make ordinary, competition-averse people walk a few more steps daily' — then reverse-engineered a low-pressure, idle-able, healing product, and ran a predictable cadence + staged monetization, turning a 1%-revenue game into the ecosystem's TAM expander and only ever-growing second curve.",
                           zh: "用因果邏輯看，皮克敏的成功是：Niantic 用 Pokémon GO 的資料與平台，把目標鎖定在「讓被競爭勸退的普通人也願意每天多走幾步」，反推出低壓、可掛機、有療癒感的產品，並用可預測的排程＋階段性變現，把一個佔 1% 營收的小遊戲做成整個生態的 TAM 擴張器與唯一逐年成長的第二曲線。" } }
    ] }
  ]
},

/* ===================== BEHAVIOR / ARTICLE ===================== */
{
  slug: "behavior", layout: "article", icon: "directions_walk",
  title:    { en: "Habit Design: Hooked Without the Poison", zh: "習慣設計：有鉤子，沒有毒" },
  subtitle: { en: "Eyal, Fogg, Duhigg and Self-Determination Theory — how a game with no FOMO and no death still builds a daily habit.",
              zh: "Eyal、Fogg、Duhigg 與自我決定論——一款無 FOMO、無死亡的遊戲，如何養成每日習慣。" },
  sections: [
    { id: "beh-hook", heading: { en: "1 · Nir Eyal — the Hooked model", zh: "一、Nir Eyal —《鉤癮效應》" }, blocks: [
      { type: "p", text: { en: "Trigger → Action → Variable Reward → Investment. The postcard is a textbook variable reward (random place, random Pikmin pose, rare 'big-head' shots). But it's de-casino-ified: the randomness is tied to real-world movement — you must actually walk for it.",
                           zh: "觸發 → 行動 → 變動獎勵 → 投入。明信片是教科書級的變動獎勵（隨機地點、隨機皮克敏姿勢、稀有「大頭照」），但它被「去賭場化」了：隨機性綁在真實移動上——你得真的走，才有獎勵。" } },
      { type: "p", text: { en: "The most underrated moat is Investment: naming a Pikmin, it remembering its birthplace, the flower trail, the lifelog. Players invest not money, but an autobiography — making churn costly without any anxiety.",
                           zh: "最被低估的護城河是「投入」：替皮克敏命名、它記得出生地、累積花徑、生活日誌。玩家投入的不是錢，而是一部自傳——讓流失成本極高，卻完全不靠焦慮。" } }
    ] },
    { id: "beh-fogg", heading: { en: "2 · BJ Fogg — B=MAP & Tiny Habits", zh: "二、BJ Fogg — B=MAP 與微習慣" }, blocks: [
      { type: "p", text: { en: "Behavior = Motivation × Ability × Prompt. Pikmin maxes Ability (walking is zero-cost, auto-counted in the background), keeps Motivation positive via cuteness (not fear), anchors the Prompt to existing walking, and 'celebrates' instantly with the flower-blooming animation.",
                           zh: "行為 = 動機 × 能力 × 提示。皮克敏把「能力」拉滿（走路零成本、背景自動計步）、用可愛維持「動機」（而非恐懼）、把「提示」錨定在既有的走路行為上，並用開花動畫即時「慶祝」。" } },
      { type: "p", text: { en: "Most health apps fail on the multiplication: they pump motivation but never lower the bar or celebrate. That's why they 'only serve people who already exercise' — while Pikmin reaches people who don't.",
                           zh: "多數健康 app 敗在這個乘法：狂拉動機，卻沒降低門檻、沒即時慶祝。這就是為何它們「只服務本來就運動的人」——而皮克敏能觸及不運動的人。" } }
    ] },
    { id: "beh-duhigg", heading: { en: "3 · Charles Duhigg — habit loop", zh: "三、Charles Duhigg — 習慣迴圈" }, blocks: [
      { type: "p", text: { en: "Cue → Routine → Reward. Pikmin doesn't build 'walking' from scratch — it stacks game cues and rewards onto walking, an existing routine (habit stacking). Walking is a keystone habit with real public-health spillover (JMIR: heavy players walked +1,473 steps/day).",
                           zh: "提示 → 慣常行為 → 獎賞。皮克敏不從零建立「走路」——它把遊戲的 cue 與 reward 疊加到「走路」這個既有 routine 上（習慣堆疊）。走路是有公衛外溢效益的「核心習慣」（JMIR：重度玩家每日多走 1,473 步）。" } }
    ] },
    { id: "beh-sdt", heading: { en: "4 · Self-Determination Theory", zh: "四、自我決定論 SDT" }, blocks: [
      { type: "p", text: { en: "Autonomy (no coercion, no FOMO), Competence (zero-threshold, guaranteed achievement), Relatedness (co-op mushroom battles, co-planting, postcards). Intrinsic motivation outlasts extrinsic.",
                           zh: "自主（無強迫、無 FOMO）、勝任（零門檻、必然兌現的成就）、聯繫（協作打菇、合種、明信片）。內在動機比外在動機更持久。" } },
      { type: "p", text: { en: "This explains the rare long-tail revenue: external motivation (competition, rarity, ranks) is consumable fuel that burns out; intrinsic motivation is renewable. Pikmin sells 'a nourished daily life that's yours' — players don't quit because they 'can't win', because it asks them to win nothing.",
                           zh: "這解釋了罕見的長尾營收：外在動機（競爭、稀有、排名）是會燒完的消耗性燃料；內在動機是可再生的。皮克敏賣的是「一段被滋養、屬於自己的日常」——玩家不會因為「打不過」而離開，因為它沒要你贏任何人。" } }
    ] },
    { id: "beh-econ", heading: { en: "5 · Behavioral economics", zh: "五、行為經濟學" }, blocks: [
      { type: "p", text: { en: "Endowment effect (you can't part with a named Pikmin), goal-gradient (Big Flower 'a few flowers from blooming'), and loss aversion deliberately turned DOWN (no death, no FOMO). It swaps push forces (anxiety) for pull forces (attachment, progress, the joy of walking).",
                           zh: "稟賦效應（捨不得已命名的皮克敏）、目標梯度（Big Flower「差幾朵就開」）、以及被刻意調弱的損失趨避（不會死、無 FOMO）。它把推力（焦慮）換成拉力（眷戀、進度、走路的愉悅）。" } }
    ] },
    { id: "beh-tension", heading: { en: "The core tension: must Hooked manipulate?", zh: "核心張力：Hooked 一定要操弄嗎？" }, blocks: [
      { type: "p", text: { en: "Pikmin uses Hooked's full four-stage structure yet refuses its manipulative tactics. The Hook is a neutral architecture; whether it manipulates depends on what the reward is tied to, whether motivation is positive or negative, and whether autonomy is respected.",
                           zh: "皮克敏用了 Hooked 的完整四階段結構，卻拒絕了它的操弄手段。「鉤」是中性的架構；它是否操弄，取決於獎勵綁在什麼行為上、動機是正向還是負向、自主權是否被尊重。" } },
      { type: "quote", text: { en: "Eyal's regret test: would users regret it? Nobody regrets walking 1,473 more steps. The hook can cultivate a habit you genuinely want, not just hijack attention.",
                               zh: "Eyal 的後悔測試：使用者會後悔嗎？沒有人會後悔自己多走了 1,473 步。鉤子可以用來培養你真心想要的習慣，而不只是劫持注意力。" } }
    ] },
    { id: "beh-end", heading: { en: "In one line", zh: "一句話總結" }, blocks: [
      { type: "p", text: { en: "Pikmin Bloom proves the hook needn't be laced with poison — it hooks you with the structure, but ties the variable reward to walking, replaces anxiety with positive emotion, and trades respect-for-autonomy for long-term trust, turning a good thing (daily walking) into a habit you can't put down yet never regret.",
                           zh: "皮克敏證明了鉤子不必淬毒——它用結構鉤住你，卻把變動獎勵綁在走路、用正向情緒取代焦慮、用尊重自主換取長期信任，把「每天走路」這件好事，變成你捨不得放下、卻完全不後悔的日常。" } }
    ] }
  ]
},

/* ===================== VIRALITY / ARTICLE (the star) ===================== */
{
  slug: "virality", layout: "article", icon: "share",
  title:    { en: "Virality: The Revenge of the Bad Shot", zh: "病毒傳播：失敗構圖的逆襲" },
  subtitle: { en: "Berger, Sharp, Godin and transmission psychology — why the 'ugly postcard' became Taiwan's most powerful marketing material in early 2026.",
              zh: "Berger、Sharp、Godin 與傳播心理——為何「醜明信片」成了 2026 年初台灣最強的行銷素材。" },
  sections: [
    { id: "vir-stepps", heading: { en: "1 · Jonah Berger — STEPPS", zh: "一、Jonah Berger — STEPPS 六原則" }, blocks: [
      { type: "p", text: { en: "Social Currency, Triggers, Emotion, Public, Practical Value, Stories. The ugly postcard is a rare five-in-one carrier:",
                           zh: "社交貨幣、觸發物、情緒、公開、實用價值、故事。醜明信片是罕見的「五合一」載體："} },
      { type: "ul", items: {
        en: ["Social Currency — chasing the rare 'ugliest' shot signals you're an insider who knows the game.",
             "Triggers — every utility box and small temple on the street is a free, all-day trigger.",
             "Emotion — 'funny' is high-arousal (shared); a pretty healing photo is low-arousal (not shared).",
             "Public — one-tap Share to Threads/IG is a built-in public-spread engine.",
             "Stories — 'why so many electrical boxes?' (reused Ingress data) is a tellable Trojan horse the brand rides along."],
        zh: ["社交貨幣——追求稀有的「最醜」款，等於展示你是懂門道的內行人。",
             "觸發物——街上每個變電箱、小公廟都是免費、全天候的觸發。",
             "情緒——「好笑」是高喚醒（會分享）；精美療癒照是低喚醒（不分享）。",
             "公開——一鍵 Share 到 Threads/IG 是內建的公開外溢引擎。",
             "故事——「為何這麼多變電箱？」（沿用 Ingress 老資料）是可轉述的特洛伊木馬，品牌搭便車一起傳。"] } },
      { type: "p", text: { en: "'Qing-dynasty Pikmin' (Lunar New Year, the Empresses in the Palace marathon: red-hatted eunuchs carrying flowerpots look exactly like Pikmin) is borrowed-trigger genius — Niantic paid nothing to ride a nationwide cultural event.",
                           zh: "「大清皮克敏」（過年《甄嬛傳》馬拉松：戴紅帽搬花盆的太監神似皮克敏）是「借勢觸發」的天才——Niantic 沒花一毛錢，就搭上一個全民文化事件。" } }
    ] },
    { id: "vir-sharp", heading: { en: "2 · Byron Sharp — How Brands Grow", zh: "二、Byron Sharp —《品牌如何成長》" }, blocks: [
      { type: "p", text: { en: "Growth comes from penetration and light buyers, via mental + physical availability and distinctive brand assets. Pikmin's leaf, colors and round shape are recognizable from a silhouette alone (the eunuch meme proves it).",
                           zh: "成長來自滲透率與輕度使用者，靠心智＋實體可得性與獨特品牌資產。皮克敏的葉子、配色、圓造型，光看剪影就能認出（太監迷因就是證明）。" } },
      { type: "quote", text: { en: "From Sharp's angle, the 'Pikmin blown up huge' in ugly shots isn't a bug — it maximizes exposure of the distinctive brand asset. The failed composition maximizes mental availability.",
                               zh: "從 Sharp 的角度，醜照裡「皮克敏被放超大」根本不是 bug——它把獨特品牌資產的曝光最大化。失敗的構圖反而最大化了心智可得性。" } },
      { type: "p", text: { en: "Physical availability is real too: 4,300 FamilyMart spots, city events. Mental availability: zh Threads (18k day-1), a 311k-member FB group, #2 global Google search interest.",
                           zh: "實體可得性也很扎實：全家 4,300 個據點、城市活動。心智可得性：繁中 Threads（首日 1.8 萬）、31 萬人的 FB 社團、Google 搜尋熱度全球第二。" } }
    ] },
    { id: "vir-godin", heading: { en: "3 · Seth Godin — Purple Cow", zh: "三、Seth Godin —《紫牛》" }, blocks: [
      { type: "p", text: { en: "In an attention flood, 'good enough' is invisible; only the remarkable gets talked about. A pretty postcard is a brown cow; an ugly-blocking-the-landmark one is a purple cow. The product mechanic itself mass-produces purple cows — and a 'sneezer' (@sososolarr) added the 'ugliest contest' frame to amplify them.",
                           zh: "在注意力洪流中，「夠好」等於隱形；只有「值得一說」的才會被談。精美明信片是棕牛；醜到擋住地標的是紫牛。產品機制本身就在量產紫牛——而一位「噴嚏者」（@sososolarr）加上「比醜大賽」的框架放大了它。" } }
    ] },
    { id: "vir-imperfect", heading: { en: "4 ★ Imperfection > perfection", zh: "四、★ 不完美 > 完美" }, blocks: [
      { type: "p", text: { en: "The original, counter-intuitive thesis. Four mechanisms explain why a self-deprecating failure out-travels a polished work:",
                           zh: "最有原創性、最反直覺的主線。四個機制解釋為何自嘲式的失敗作品比精美作品傳得更遠："} },
      { type: "h3", text: { en: "Authenticity", zh: "真實感" } },
      { type: "p", text: { en: "In the AI era, polished content is assumed to be fake/edited. An ugly shot proves 'this is real' — and realness creates the emotional bond that drives word-of-mouth.",
                           zh: "AI 時代，精美內容被預設為「假的、修過的」。醜照證明「這是真的」——而真實創造驅動口碑的情感連結。" } },
      { type: "h3", text: { en: "Psychological safety (zero image pressure)", zh: "心理安全（零形象壓力）" } },
      { type: "p", text: { en: "Posting a 'perfect life' on IG invites comparison. But a 'ugliest contest' inverts the axis — once you compete on ugly, the image-management pressure drops to zero and everyone dares to post. It turns 'showing off' from anxious image-management into a low-pressure self-deprecating game.",
                           zh: "在 IG 曬「完美生活」招來比較。但「比醜大賽」反轉了軸線——一旦比醜，形象管理的壓力瞬間歸零，人人都敢曬。它把「曬」從高壓的形象管理，變成低壓的自嘲遊戲。" } },
      { type: "h3", text: { en: "Low imitation threshold", zh: "模仿門檻極低" } },
      { type: "p", text: { en: "Perfect work makes you admire but not imitate ('I can't shoot that well'). Ugly work makes you say 'I'll make one too' ('I can be this ugly, even uglier'). Low imitation threshold = high replication rate (high R).",
                           zh: "完美作品讓人仰望但不敢模仿（「我拍不出這麼美」）。醜作品讓人「我也來一張」（「這麼醜我也行，甚至更醜」）。模仿門檻低＝病毒複製速率高（高 R 值）。" } },
      { type: "h3", text: { en: "Gap-moe / ugly-cute", zh: "反差萌／醜萌" } },
      { type: "p", text: { en: "A cute creature absurdly blocking Mt. Fuji is high-arousal funny. 'Ugly-cute' is a mature aesthetic in Chinese/Japanese culture — ugly enough to be funny, but cute enough not to repel. That's the safety belt that lets it spread without disgust.",
                           zh: "一隻可愛生物荒謬地擋住富士山，是高喚醒的笑點。「醜萌」在華語／日語圈是成熟審美——醜到好笑，但因可愛而不反感。這是它能持續被分享而不引起厭惡的安全帶。" } },
      { type: "quote", text: { en: "Perfect content's chain ends at 'a like'. Imperfect content's chain self-replicates: laugh → I'll make one → a new flaw → laughed at again. Perfection is the terminus; imperfection is the engine.",
                               zh: "完美作品的傳播鏈在「一個讚」就斷了。不完美作品的鏈會自我複製：嘲笑 → 我也來一張 → 新的不完美 → 再被嘲笑。完美是終點，不完美是引擎。" } }
    ] },
    { id: "vir-local", heading: { en: "5 · Localization & cultural appropriation", zh: "五、在地化與文化挪用" }, blocks: [
      { type: "p", text: { en: "Reframing 'ugly' as 'Taiwanese sensibility' turns a global product bug into a local identity that outsiders can't copy. 'Qing-dynasty Pikmin' grafts the global product onto The Empresses in the Palace — a meme foreigners feel nothing about, but Taiwanese instantly get. Localized memes have a moat: they can't be translated.",
                           zh: "把「醜」重新框架為「台灣感性」，使全球產品的 bug 變成外人抄不來的在地認同。「大清皮克敏」把全球產品嫁接到《甄嬛傳》——一個外國人無感、台灣人秒懂的梗。在地迷因有護城河：它無法被翻譯。" } },
      { type: "p", text: { en: "Officials build the stage (zh Threads, city collaborations, FamilyMart spots); players write the play. And the play they sing is 'imperfection' — the easiest chorus to join.",
                           zh: "官方搭舞台（繁中 Threads、城市合作、全家據點）；玩家唱戲。而他們唱的，正是「不完美」這齣最容易合唱的戲。" } }
    ] },
    { id: "vir-converge", heading: { en: "Five frameworks, one answer", zh: "五個框架，同一答案" }, blocks: [
      { type: "ul", items: {
        en: ["Berger STEPPS → imperfection WILL be shared (5-in-1 carrier).",
             "Sharp → imperfection EXPANDS availability (reaches light/non-users).",
             "Godin → imperfection is what's WORTH talking about (purple cow).",
             "Transmission psychology → imperfection can be REPLICATED (real, low-pressure, easy).",
             "Localization → imperfection, once localized, has a MOAT."],
        zh: ["Berger STEPPS → 不完美「會被分享」（五合一載體）。",
             "Sharp → 不完美「擴大可得性」（觸及輕度／非使用者）。",
             "Godin → 不完美「才值得被討論」（紫牛）。",
             "傳播心理 → 不完美「才能被複製」（真實、低壓、易模仿）。",
             "在地化 → 不完美「在地化後有護城河」。"] } },
      { type: "p", text: { en: "Five independent frameworks, five different angles, one counter-intuitive conclusion: the virality engine is the imperfection, not the perfection.",
                           zh: "五個獨立框架、五個不同角度，同一個反直覺結論：病毒引擎是它的不完美，而非完美。" } }
    ] },
    { id: "vir-end", heading: { en: "In one line", zh: "一句話總結" }, blocks: [
      { type: "p", text: { en: "Pikmin Bloom's surge is the revenge of the bad shot — a 'purple cow' the product unintentionally mass-produced, which (being real, pressure-free and imitable) became a high-arousal social currency anyone could copy, then got translated by Taiwanese players into local-only memes; when perfection buys one like but imperfection buys a mass imitation, the engine of transmission passed from the company's hands into every player who dared to post an ugly one.",
                           zh: "皮克敏的爆紅是失敗構圖的逆襲——產品無意間量產的「紫牛」，因真實、零壓力、易模仿而成為人人能複製的高喚醒社交貨幣，再被台灣玩家翻譯成只有台灣人才懂的在地迷因；當完美只換來一個讚、不完美卻換來一場全民模仿，傳播的引擎就從公司手中，交到了每一個敢曬醜片的台灣人手上。" } }
    ] }
  ]
},

/* ===================== STRATEGY / ARTICLE ===================== */
{
  slug: "strategy", layout: "article", icon: "insights",
  title:    { en: "Strategy: Won by Going Small", zh: "策略創新：贏在刻意做小" },
  subtitle: { en: "Jobs-to-be-Done, Blue Ocean, core competence, network effects — and an honest look at its fragility. Every reason it won is also a reason it's fragile.",
              zh: "用途理論、藍海、核心競爭力、網路效應——以及對其脆弱性的誠實檢視。每個成功原因，同時是脆弱原因。" },
  sections: [
    { id: "str-jtbd", heading: { en: "1 · Christensen — Jobs to be Done", zh: "一、Christensen — 用途理論（JTBD）" }, blocks: [
      { type: "p", text: { en: "People 'hire' a product to do a job. Pikmin Bloom is hired on three layers: functional (make a reason to walk that wouldn't otherwise happen), emotional (low-cost, zero-failure, in-control healing time), social (connect gently, non-competitively, showing 'who I am').",
                           zh: "人們「雇用」產品來完成任務。皮克敏被雇用來做三層 Job：功能性（製造一個本來不會發生的走路理由）、情感性（低成本、零失敗、有掌控感的療癒時光）、社會性（溫和、不競爭地連結，呈現「我是誰」）。" } },
      { type: "ul", items: {
        en: ["Its real rival isn't Pokémon GO — it's the couch (sitting still).",
             "The moat is the stitching of all three jobs into one loop: walk → cute Pikmin → postcard to a friend.",
             "Disruption from both ends: low-end (for the over-served Pokémon GO player) and new-market (for non-gamers)."],
        zh: ["它真正的對手不是 Pokémon GO，而是「沙發」（久坐）。",
             "護城河是把三層 Job 縫進同一個迴圈：走路 → 可愛皮克敏 → 拍明信片寄好友。",
             "兩端破壞：低階（給被過度服務的 Pokémon GO 玩家）＋新市場（給非玩家）。"] } }
    ] },
    { id: "str-blue", heading: { en: "2 · Blue Ocean — ERRC", zh: "二、藍海策略 — ERRC" }, blocks: [
      { type: "p", text: { en: "Value innovation = differentiation AND low cost at once, via the Eliminate-Reduce-Raise-Create grid (vs. traditional mobile games / Pokémon GO):",
                           zh: "價值創新 = 同時做到差異化與低成本，用 消除-減少-提升-創造 四動作框架（對照傳統手遊／Pokémon GO）："} },
      { type: "ul", items: {
        en: ["Eliminate: PvP, enemies/death, combat complexity, timed FOMO, zero-sum ranks.",
             "Reduce: operation complexity, learning curve, active screen time, skill/win-loss demands.",
             "Raise: healing, cuteness, real health value, depth of attachment, low-pressure co-op.",
             "Create: postcard = life album; 'walking itself becomes content' — a brand-new value axis."],
        zh: ["消除：PvP、敵人／死亡、戰鬥複雜度、限時 FOMO、零和排名。",
             "減少：操作複雜度、學習曲線、主動操作時間、技巧/勝負要求。",
             "提升：療癒、可愛、真實健康價值、情感投射深度、無壓力協作。",
             "創造：明信片＝生活相簿；「把走路本身變成內容」——全新的價值維度。"] } },
      { type: "quote", text: { en: "'Create' is the real blue ocean; the first three are just the entry ticket. The postcard-as-life-album moves the product out of the 'game' red ocean into 'life logging', where almost no one competes from a game angle.",
                               zh: "「創造」才是真藍海，前三格只是進場券。明信片＝生活相簿，把產品從「遊戲」紅海挪到「生活記錄」——幾乎無人從遊戲角度切入的空白。" } }
    ] },
    { id: "str-core", heading: { en: "3 · Hamel & Prahalad — core competence", zh: "三、Hamel & Prahalad — 核心競爭力" }, blocks: [
      { type: "p", text: { en: "Niantic's competence is a 'real-world AR gaming platform': the geospatial AR engine, the global location DB (Ingress → Pokémon GO → Pikmin Bloom), and LBS operations know-how. Pikmin Bloom is the third fruit on one root — tiny marginal cost.",
                           zh: "Niantic 的核心能力是「真實世界 AR 遊戲平台」：地理空間 AR 引擎、全球地點庫（Ingress → Pokémon GO → Pikmin Bloom）、LBS 營運 know-how。皮克敏是同一棵根長出的第三顆果子——邊際成本極低。" } },
      { type: "p", text: { en: "But here's the tension: the competence explains why it could be built cheaply, not why it won. The platform is the cost advantage; the win comes from emotional design + Nintendo IP — neither of which is a technical moat. Core competence is the foundation, not the city wall.",
                           zh: "但張力在此：核心能力解釋「為何能便宜地造出來」，而非「為何成功」。平台是成本優勢；致勝來自情感設計＋任天堂 IP——兩者都不是技術護城河。核心競爭力是地基，不是城牆。" } }
    ] },
    { id: "str-network", heading: { en: "4 · Network effects (local, on purpose)", zh: "四、網路效應（刻意做局部）" }, blocks: [
      { type: "p", text: { en: "Co-planting, co-op battles, postcard exchange, player tools (Pikmin Atlas) create local network effects. Deliberately local, not global: no cold-start curse (one person walking still works), but also no n² winner-take-all lock-in. It traded strong network effects for a low-pressure experience.",
                           zh: "合種、協作打菇、明信片互寄、玩家工具（Pikmin Atlas）形成局部網路效應。刻意局部而非全域：沒有冷啟動詛咒（一個人散步也能玩），但也沒有 n² 的贏家通吃鎖定。它用強網路效應換取了低壓體驗。" } }
    ] },
    { id: "str-fragile", heading: { en: "5 · Strategic fragility (to be honest)", zh: "五、策略的脆弱性（誠實面對）" }, blocks: [
      { type: "ul", items: {
        en: ["Thin gameplay: it's a beautiful pedometer — once the habit internalizes, the functional job dissolves and the app can be 'fired'.",
             "Moat is emotion + timing, not tech: the cuteness, postcards and Nintendo IP are all copyable; the post-pandemic wellness wave will fade.",
             "Weak network effects: low switching penalty.",
             "Low revenue ceiling: ~1% of Niantic; giving up FOMO/PvP monetization means structurally low ARPU.",
             "Sold off: now under Scopely — the biggest risk is being injected with the very things it deliberately removed (gacha, FOMO, competition), which would destroy the blue-ocean positioning."],
        zh: ["玩法薄：本質是漂亮計步器——習慣一旦內化，功能性 Job 自我消解，App 可能被「解雇」。",
             "護城河是情感＋時機，不是技術：可愛、明信片、任天堂 IP 都可被模仿；後疫情 wellness 紅利會褪色。",
             "網路效應弱：離開懲罰很小。",
             "變現天花板低：佔 Niantic 約 1%；放棄 FOMO/PvP 課金＝結構性低 ARPU。",
             "已被出售：現在 Scopely 手上——最大風險是被注入它當初刻意消除的東西（課金、FOMO、競爭），毀掉藍海定位。"] } },
      { type: "quote", text: { en: "Every reason it won — stripping complexity, low pressure, low monetization — is also a reason it's fragile. It's a precise bet on going small, light and gentle: the upside is real, but the ceiling and moat are the very things it chose to give up.",
                               zh: "它的每一個成功原因——剝掉複雜度、低壓、低變現——同時是脆弱原因。這是一場「刻意做小、做輕、做溫柔」的精準賭注：贏面真實，但天花板與護城河都是它自己選擇放棄的。" } }
    ] },
    { id: "str-end", heading: { en: "In one line", zh: "一句話總結" }, blocks: [
      { type: "p", text: { en: "Pikmin Bloom's strategic innovation isn't a clever feature — it's the courage to eliminate at scale: stripping the competition, combat and FOMO mobile games live on, entering cheaply on Niantic's existing AR map ability, and stitching the never-gamified daily 'job' of walking into functional, emotional and social needs — opening a healing blue ocean for non-gamers beside Pokémon GO's red ocean. Its success and fragility are the same coin: won by going small, trapped by going small.",
                           zh: "皮克敏的策略創新不在某個厲害功能，而在「敢於大量消除」：剝掉手遊賴以為生的競爭、戰鬥與 FOMO，用 Niantic 既有的 AR 地圖能力以極低成本進場，把「散步」這份從未被遊戲化的日常 Job 縫進功能、情感、社會三層需求——在 Pokémon GO 的紅海旁開出一片只服務非玩家的療癒藍海。它的成功與脆弱是同一枚硬幣：贏在刻意做小，也困於刻意做小。" } }
    ] }
  ]
},

/* ===================== DATA / DASHBOARD ===================== */
{
  slug: "data", layout: "dashboard", icon: "monitoring",
  title:    { en: "The Numbers", zh: "商業數據" },
  subtitle: { en: "Third-party estimates (AppMagic / Sensor Tower); App Store + Google Play IAP only, so the real figures are higher. The standout fact: revenue grows every year — the opposite of most mobile games.",
              zh: "第三方估算（AppMagic／Sensor Tower）；僅含 App Store + Google Play 內購，真實營收應更高。最突出的事實：營收逐年成長——與多數手遊相反。" },
  stats: [
    { label: { en: "Downloads, first 2 weeks", zh: "上市兩週下載" }, value: "2M+", unit: { en: "", zh: "" } },
    { label: { en: "Lifetime player spend", zh: "累計玩家消費" }, value: "$100M", unit: { en: "by Dec 2025", zh: "2025/12" } },
    { label: { en: "2025 revenue (best year)", zh: "2025 年營收（史上最佳）" }, value: "$34.8M", unit: { en: "", zh: "" }, delta: 4 },
    { label: { en: "Monthly active users", zh: "月活躍用戶" }, value: "~1.2M", unit: { en: "est.", zh: "估算" } },
    { label: { en: "Share of Niantic revenue", zh: "佔 Niantic 營收" }, value: "~1%", unit: { en: "(GO ~95%)", zh: "（GO 約 95%）" } },
    { label: { en: "Steps walked in 2024", zh: "2024 玩家總步數" }, value: "3.9T", unit: { en: "", zh: "" } }
  ],
  bars: { title: { en: "Annual revenue (US$M) — up every year", zh: "年度營收（百萬美元）— 逐年成長" }, series: [
    { label: { en: "2022", zh: "2022" }, value: 8.4 },
    { label: { en: "2023", zh: "2023" }, value: 20.9 },
    { label: { en: "2024", zh: "2024" }, value: 33.4 },
    { label: { en: "2025", zh: "2025" }, value: 34.8 }
  ] },
  line: { title: { en: "Cumulative revenue (US$M) — the long-tail climb to $100M", zh: "累計營收（百萬美元）— 通往 1 億的長尾爬升" }, points: [
    { x: "2022", y: 8.4 }, { x: "2023", y: 29.3 }, { x: "2024", y: 62.7 }, { x: "2025", y: 100 }
  ] },
  table: {
    columns: [
      { key: "game", label: { en: "Niantic game", zh: "Niantic 遊戲" } },
      { key: "lifetime", label: { en: "Lifetime revenue", zh: "累計營收" } },
      { key: "y2024", label: { en: "2024 revenue", zh: "2024 營收" } },
      { key: "share", label: { en: "Share", zh: "佔比" } }
    ],
    rows: [
      { game: { en: "Pokémon GO", zh: "Pokémon GO" }, lifetime: "$8.5B", y2024: "$796.6M", share: "~95%" },
      { game: { en: "Monster Hunter Now", zh: "Monster Hunter Now" }, lifetime: "$276M", y2024: "—", share: "~3%" },
      { game: { en: "Pikmin Bloom", zh: "皮克敏 Bloom" }, lifetime: "$100M", y2024: "$33.4M", share: "<1%" }
    ]
  }
},

/* ===================== TIMELINE ===================== */
{
  slug: "timeline", layout: "timeline", icon: "timeline",
  title:    { en: "From GameCube to a Viral Walk", zh: "從 GameCube 到全民散步" },
  subtitle: { en: "Key moments — product, business, and the Taiwan surge.", zh: "關鍵時刻——產品、商業，與台灣爆紅。" },
  events: [
    { date: { en: "2001", zh: "2001" }, title: { en: "Pikmin is born", zh: "皮克敏初代誕生" }, body: { en: "Miyamoto's GameCube RTS, inspired by his new hobby: gardening.", zh: "宮本茂的 GameCube 即時戰略，靈感來自他的新興趣：園藝。" } },
    { date: { en: "2021 · Nov", zh: "2021 · 11" }, title: { en: "Pikmin Bloom launches", zh: "Pikmin Bloom 全球上線" }, body: { en: "2M downloads in two weeks (Japan 43%).", zh: "兩週 200 萬下載（日本佔 43%）。" } },
    { date: { en: "2022 · Jul", zh: "2022 · 07" }, title: { en: "Co-op update", zh: "協作功能更新" }, body: { en: "Weekly flower-planting challenges and friend invites.", zh: "每週種花挑戰與好友邀請。" } },
    { date: { en: "2024 · Jul", zh: "2024 · 07" }, title: { en: "Postcard cap 400 -> 3,000", zh: "明信片上限 400 → 3,000" }, body: { en: "Players were collecting (and 'curating ugly ones') faster than storage allowed.", zh: "玩家收集（與「典藏醜片」）的速度超過了儲存上限。" } },
    { date: { en: "2024 · Aug", zh: "2024 · 08" }, title: { en: "D2C web shop", zh: "官方網頁商店（D2C）" }, body: { en: "Direct sales bypassing the 30% app-store cut.", zh: "繞過 30% 商店抽成的直接銷售。" } },
    { date: { en: "2024 · Nov", zh: "2024 · 11" }, title: { en: "Kyoto Hidden Gems", zh: "京都 Hidden Gems" }, body: { en: "City collaboration explicitly framed as over-tourism dispersal.", zh: "與京都市合作，明說是 over-tourism 的人潮分散對策。" } },
    { date: { en: "2025 · May", zh: "2025 · 05" }, title: { en: "Sold to Scopely", zh: "賣給 Scopely" }, body: { en: "Niantic's whole games division sold for US$3.5B (Pikmin Bloom is one asset within it).", zh: "Niantic 整個遊戲事業群以 35 億美元出售（皮克敏是其中一塊資產）。" } },
    { date: { en: "2025 · Oct", zh: "2025 · 10" }, title: { en: "Kaohsiung Tour", zh: "高雄 Tour" }, body: { en: "Taiwan's first official large-scale Tour, with the city government.", zh: "台灣首場官方大型 Tour，與高雄市政府合作。" } },
    { date: { en: "2025 · Dec", zh: "2025 · 12" }, title: { en: "$100M lifetime spend", zh: "累計消費破 1 億美元" }, body: { en: "Best year yet — the only Niantic game growing every year.", zh: "史上最佳年——Niantic 唯一逐年成長的遊戲。" } },
    { date: { en: "2026 · Jan", zh: "2026 · 01" }, title: { en: "Official zh Threads opens", zh: "官方繁中 Threads 開站" }, body: { en: "~18,000 followers on day one — a key node in Taiwan's surge.", zh: "首日約 1.8 萬追蹤——台灣爆紅的關鍵節點。" } },
    { date: { en: "2026 · Feb", zh: "2026 · 02" }, title: { en: "'Qing-dynasty Pikmin' meme", zh: "「大清皮克敏」迷因" }, body: { en: "Lunar New Year x Empresses in the Palace marathon: flowerpot-carrying eunuchs go viral as 'real-life Pikmin'.", zh: "過年 ×《甄嬛傳》馬拉松：搬花盆的太監爆紅成「真人版皮克敏」。" } },
    { date: { en: "2026 · May", zh: "2026 · 05" }, title: { en: "4.5th anniversary + Chiayi mini-walk", zh: "4.5 週年 + 嘉義藝術節迷你散步" }, body: { en: "Still hitting activity highs years after launch.", zh: "上線多年後仍創活躍新高。" } }
  ]
},

/* ===================== FACTS / FAQ ===================== */
{
  slug: "facts", layout: "faq", icon: "fact_check",
  title:    { en: "Facts & Honest Caveats", zh: "事實檔案與誠實標註" },
  subtitle: { en: "What's verified, and what isn't. Cross-checked by multiple research passes; uncertainties are flagged, not hidden.",
              zh: "哪些已查證、哪些沒有。經多輪研究交叉驗證；不確定的地方標明，不藏。" },
  qa: [
    { q: { en: "Who makes Pikmin Bloom?", zh: "皮克敏 Bloom 是誰做的？" },
      a: { en: "Developed by Niantic (Pokémon GO, Ingress) under license from Nintendo. Launched Nov 2021. Now operated by Scopely after the 2025 acquisition.",
           zh: "由 Niantic（Pokémon GO、Ingress 的開發商）在任天堂授權下開發，2021 年 11 月上線。2025 年被收購後，現由 Scopely 營運。" } },
    { q: { en: "What's the core gameplay?", zh: "核心玩法是什麼？" },
      a: { en: "Walk -> grow seedlings into Pikmin -> feed nectar to bloom flowers -> collect petals -> plant flowers -> expeditions / co-op mushroom battles / Big Flowers -> collect postcards. It connects to Apple Health / Google Fit.",
           zh: "走路 → 種苗長成皮克敏 → 餵花蜜開花 → 收花瓣 → 種花 → 遠征／協作打菇／Big Flower → 收明信片。連接 Apple Health／Google Fit。" } },
    { q: { en: "Why do postcards 'block the landmark'?", zh: "明信片為什麼會「擋住地標」？" },
      a: { en: "The postcard overlays your Pikmin onto a real location photo. The FEWER Pikmin you send, the BIGGER they appear — so sending just one produces a giant 'big-head' shot that covers the view. Players chase these rare shots on purpose.",
           zh: "明信片把你的皮克敏疊到真實地點照片上。派出的皮克敏「越少」，畫面上「越大」——派 1 隻就會產生擋住風景的巨大「大頭照」。玩家反而刻意追求這種稀有款。" } },
    { q: { en: "Is the 'blocking Mt. Fuji' story real?", zh: "「擋住富士山」是真的嗎？" },
      a: { en: "Honest answer: the MECHANISM (Pikmin blocking landmarks) is real and documented, but a specific viral 'blocked Mt. Fuji' case couldn't be verified. The verified viral mainline is Taiwan's 'ugly postcards / electrical-box landmarks' (e.g. @sososolarr's 'ugliest contest' post, and a Liberty Times feature on 'why so many electrical boxes').",
           zh: "誠實回答：「皮克敏擋住地標」的機制真實且有記載，但「擋住富士山」這個特定爆紅案例查無實證。已查證的爆紅主線是台灣的「醜明信片／變電箱景點」（如 @sososolarr 的「比醜大賽」貼文、自由時報「為何這麼多變電箱」專文）。" } },
    { q: { en: "Does revenue really grow every year?", zh: "營收真的逐年成長嗎？" },
      a: { en: "Yes (per AppMagic estimates): $8.4M (2022) -> $20.9M -> $33.4M -> $34.8M (2025), crossing $100M cumulative by Dec 2025. It's the only Niantic game growing every year — unusual, since most mobile games peak at launch.",
           zh: "是的（依 AppMagic 估算）：$8.4M（2022）→ $20.9M → $33.4M → $34.8M（2025），2025/12 累計突破 1 億美元。它是 Niantic 唯一逐年成長的遊戲——很罕見，因為多數手遊上市即巔峰。" } },
    { q: { en: "Are players mostly older / female / non-gamers?", zh: "玩家真的以長者／女性／非玩家為主嗎？" },
      a: { en: "Honest answer: there is NO credible quantitative age/gender breakdown for Pikmin Bloom. Design intent and media framing support 'casual / non-gamer' strongly; 'older / female' is plausible but unproven. Treat any specific percentages floating around as unsourced.",
           zh: "誠實回答：皮克敏 Bloom「沒有」可信的量化年齡／性別數據。設計定位與媒體定性強烈支持「休閒／非玩家」；「長者／女性」方向合理但無證據。坊間流傳的具體百分比應視為查無出處。" } },
    { q: { en: "Why did it suddenly blow up in Taiwan?", zh: "為什麼台灣突然爆紅？" },
      a: { en: "A convergence: the official zh Threads opened (Jan 2026, ~18k day-1), the 'ugliest postcard' UGC, the 'Qing-dynasty Pikmin' meme, idol exposure, a 311k-member FB group, city/FamilyMart tie-ins — and a low-pressure, cute product that fit post-pandemic wellness needs.",
           zh: "多重匯流：官方繁中 Threads 開站（2026/1，首日約 1.8 萬）、「比醜」UGC、「大清皮克敏」迷因、偶像曝光、31 萬人 FB 社團、城市／全家連動——加上一款低壓、可愛、契合後疫情身心需求的產品。" } },
    { q: { en: "Was Pikmin Bloom sold for US$3.5B?", zh: "35 億美元是賣皮克敏嗎？" },
      a: { en: "No. US$3.5B was the price for Niantic's WHOLE games division (Pokémon GO + Monster Hunter Now + Pikmin Bloom), sold to Scopely in 2025. Pikmin Bloom was one asset within that deal, not valued at $3.5B alone.",
           zh: "不是。35 億美元是 Niantic「整個遊戲事業群」（Pokémon GO + Monster Hunter Now + Pikmin Bloom）2025 年賣給 Scopely 的售價。皮克敏是這筆交易裡的一塊資產，並非單獨估值 35 億。" } }
  ]
},

/* ===================== QUIZ (custom renderer) ===================== */
{
  slug: "quiz", layout: "quiz", icon: "quiz",
  title:    { en: "Quick Quiz", zh: "隨堂測驗" },
  subtitle: { en: "Six questions to check whether the analysis clicked. Tap an answer to see if you're right.",
              zh: "六題，測測看分析有沒有看懂。點一個答案，馬上看對錯。" },
  questions: [
    { q: { en: "What is the most counter-intuitive reason for Pikmin Bloom's virality?",
           zh: "皮克敏病毒擴散最反直覺的原因是？" },
      options: [
        { en: "Beautiful, perfectly composed postcards", zh: "精美、構圖完美的明信片" },
        { en: "Imperfection — 'ugly' postcards became the spread engine", zh: "不完美——「醜」明信片成了傳播引擎" },
        { en: "A huge paid advertising budget", zh: "巨額的付費廣告預算" },
        { en: "Hardcore PvP competition", zh: "硬核 PvP 競爭" } ],
      answer: 1,
      explain: { en: "Imperfection self-replicates (laugh -> imitate -> new flaw); perfection just earns a like and stops.",
                 zh: "不完美會自我複製（嘲笑→模仿→新的不完美）；完美只換來一個讚就停了。" } },
    { q: { en: "Effectuation's 'lemonade principle' maps to which Pikmin fact?",
           zh: "效果邏輯的「檸檬水原則」對應皮克敏的哪件事？" },
      options: [
        { en: "Turning the landmark-blocking bug into local identity", zh: "把擋住地標的 bug 釀成在地認同" },
        { en: "Buying user data from competitors", zh: "向對手購買用戶資料" },
        { en: "Adding a battle pass", zh: "加入戰鬥通行證" },
        { en: "Raising IAP prices", zh: "調高內購價格" } ],
      answer: 0,
      explain: { en: "Lemonade = leverage the surprise. The 'ugly postcard' bug was brewed into a culture rivals can't copy.",
                 zh: "檸檬水＝把意外變資源。「醜明信片」這個 bug 被釀成競品抄不走的文化。" } },
    { q: { en: "Why does revenue grow yearly instead of peaking at launch?",
           zh: "為何營收逐年成長、而非上市即巔峰？" },
      options: [
        { en: "Aggressive FOMO and timed events", zh: "激進的 FOMO 與限時活動" },
        { en: "Intrinsic motivation (SDT) outlasts extrinsic competition", zh: "內在動機（SDT）比外在競爭更持久" },
        { en: "Pay-to-win mechanics", zh: "課金變強機制" },
        { en: "Constant price discounts", zh: "持續降價促銷" } ],
      answer: 1,
      explain: { en: "It sells 'a nourished daily life that's yours', not a competition to win — so players don't burn out and leave.",
                 zh: "它賣的是「屬於自己、被滋養的日常」，不是要贏的競爭——所以玩家不會倦怠離開。" } },
    { q: { en: "The 'Qing-dynasty Pikmin' meme is an example of which logic?",
           zh: "「大清皮克敏」迷因屬於哪種邏輯？" },
      options: [
        { en: "Causation — carefully planned by Niantic", zh: "因果——Niantic 精心規劃" },
        { en: "Effectuation — spontaneous, can't be designed", zh: "效果——社群自發、無法被設計" },
        { en: "A paid celebrity campaign", zh: "付費名人代言" },
        { en: "An A/B test result", zh: "A/B 測試結果" } ],
      answer: 1,
      explain: { en: "Niantic built the stage (open postcards, zh Threads); players improvised the play. Emergent, not assigned.",
                 zh: "Niantic 搭舞台（開放的明信片、繁中 Threads）；玩家即興演出。是湧現的，不是指定的。" } },
    { q: { en: "From Byron Sharp's view, why is 'Pikmin blown up huge' NOT a bug?",
           zh: "從 Byron Sharp 的角度，「皮克敏被放超大」為何不是 bug？" },
      options: [
        { en: "It maximizes exposure of the distinctive brand asset", zh: "它把獨特品牌資產的曝光最大化" },
        { en: "It hides the brand from view", zh: "它把品牌藏起來" },
        { en: "It reduces brand recognition", zh: "它降低品牌辨識度" },
        { en: "It only matters for loyal fans", zh: "它只對死忠粉絲有意義" } ],
      answer: 0,
      explain: { en: "The leaf/colors/shape are recognizable from a silhouette; blowing them up is a high-intensity brand impression.",
                 zh: "葉子／配色／造型光剪影就能辨識；放大它＝高強度的品牌曝光。" } },
    { q: { en: "What is Pikmin Bloom's core strategic fragility?",
           zh: "皮克敏的核心策略脆弱性是什麼？" },
      options: [
        { en: "It has too many competitive features", zh: "它有太多競爭性功能" },
        { en: "Every reason it won is also a reason it's fragile (won by going small)", zh: "每個成功原因同時是脆弱原因（贏在刻意做小）" },
        { en: "Its servers can't scale", zh: "它的伺服器無法擴展" },
        { en: "It has no Nintendo IP", zh: "它沒有任天堂 IP" } ],
      answer: 1,
      explain: { en: "Stripping complexity, low pressure and low monetization win a small blue ocean — but cap the ceiling and the moat.",
                 zh: "剝掉複雜度、低壓、低變現贏得一片小藍海——但也限制了天花板與護城河。" } }
  ]
}

];
