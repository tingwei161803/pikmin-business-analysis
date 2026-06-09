# 皮克敏 Bloom 為什麼成功

> 一場用多重理論框架（效果邏輯、因果邏輯、行為習慣、病毒傳播、策略創新）拆解手遊《Pikmin Bloom》成功原因的深度分析網站。核心命題：**不完美，才是傳播的引擎。**

這個網站把一份多代理研究（先平行蒐集事實，再用不同理論大師的透鏡平行分析）整理成一個漂亮、可互動、雙語的純靜態網頁。貫穿全站的兩條主軸：**「因果邏輯 vs 效果邏輯」**（哪些成功是設計出來的、哪些是長出來的），以及使用者最初的直覺——**「拍爛掉、擋住地標的醜明信片，反而成了最強傳播素材」**。

---

## 🔗 線上版 / Live

| | |
|---|---|
| 🌐 網站 | <https://pikmin-business-analysis.peteraim.com/> |

> 直接點進去就能用，無需安裝。可用 `https://pikmin-business-analysis.peteraim.com/#<slug>` 深連結到文章內的特定章節。

---

## ✨ 功能特色

- 🧭 **多頁面 × 複合多區段** — 12 個頁面，各用最適合的版型：總覽（hub）、核心命題（捲動敘事 scrolly）、因果 vs 效果（並列比較）、五篇理論長文（article）、商業數據（dashboard 圖表）、時間軸（timeline）、事實檔案（FAQ）、隨堂測驗（quiz）。
- 🌏 **雙語切換** — 中文 / English 一鍵全頁切換，連標題、導覽、SEO meta 都重繪，無殘留。
- 🌗 **深色 / 淺色模式** — 暖色編輯雜誌風，手動切換並記憶偏好。
- 📊 **互動圖表** — 純 SVG 繪製的營收長條圖與累計營收折線圖（零圖表函式庫）。
- 📝 **隨堂測驗** — 六題即時對錯回饋 + 計分（僅活在當前 session）。
- 🔗 **深連結** — 文章章節有 `#<slug>` 錨點，可直接分享。
- 📱 **響應式設計** — 手機、平板、桌機皆適配。
- ⚡ **純靜態** — 無後端、無 build、載入快、可離線瀏覽。

---

## 📂 內容結構 / 資料來源

本站內容整理自 **公開的新聞、產業數據（Sensor Tower / AppMagic 估算）、學術研究與一手開發者訪談**；理論框架取自 Sarasvathy（效果／因果邏輯）、Nir Eyal、BJ Fogg、Duhigg、Deci & Ryan（SDT）、Jonah Berger、Byron Sharp、Seth Godin、Clayton Christensen、Kim & Mauborgne 等。

```
pikmin-business-analysis/
├── index.html            # 首頁（hub 總覽）
├── thesis.html           # 核心命題（scrolly）
├── causal-vs-effectual.html  # 因果 vs 效果（comparison）
├── effectuation.html / causation.html / behavior.html
├── virality.html / strategy.html        # 五篇理論長文（article）
├── data.html             # 商業數據（dashboard）
├── timeline.html         # 時間軸（timeline）
├── facts.html            # 事實檔案（faq）
├── quiz.html             # 隨堂測驗（quiz）
├── assets/               # styles.css（編輯雜誌風）、shell.js（共用 chrome）、app.js（版型引擎）
├── data/data.js          # 唯一資料層：SITE_META + SITE_PAGES[]（雙語）
├── research/             # 原始研究檔案（總覽 + 事實檔案 + 5 篇分析的 markdown 原稿）
└── .nojekyll
```

> ⚠️ **非官方**：本網站為個人研究整理之非官方資源。數字多為第三方估算（非 Niantic 官方財報）；部分廣為流傳的說法（如「皮克敏玩家以長者／女性為主」「擋住富士山」）在站內已**誠實標註為查無實證或無硬數據**。如有錯誤或出入，請以官方來源為準。

---

## 🛠 本機使用

```bash
# 1. clone 專案
git clone git@github.com:tingwei161803/pikmin-business-analysis.git
cd pikmin-business-analysis

# 2a. 最簡單：直接開啟 index.html
open index.html

# 2b. 或啟動本機伺服器（建議，深連結 / 多頁導航才正常）
uv run python -m http.server 4173
# 然後瀏覽 http://localhost:4173
```

> 本專案為純靜態網站，不需安裝任何依賴。若要跑本機伺服器，一律使用 `uv`。

---

## 📝 聲明 / License

- 本站為非官方研究整理，內容著作權歸各原始來源所有；Pikmin、Pikmin Bloom 為任天堂 / Niantic / Scopely 之商標與作品。
- 程式碼以 **MIT** 授權釋出。
- 本網站使用 **Google Analytics 4**（GA4 property：「皮克敏 Bloom 成功解析 - GA4」）蒐集匿名流量數據，以了解造訪概況；不蒐集個人身分資訊。
- 如為權利人且希望調整或移除內容，請開 issue 聯絡。
