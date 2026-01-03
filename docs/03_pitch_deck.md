# Pitch Deck Outline: 暗号商流（クリプト・フロー） 〜ボーダレスEC/POD with JPYC〜

> **Concept Proposal for the EC / POD (Print on Demand) Industry**
> 本プロジェクトは、EC/PODプラットフォーム産業に向けた、次世代の産業構造の提案です。

## 1. Title Slide
- **Project Name:** 暗号商流（クリプト・フロー） 〜ボーダレスEC/POD with JPYC〜
- **Catchphrase:** 手数料と手間をゼロにする。〜JPYC × スマートコントラクトが創る、次世代クリエイター経済圏〜
- **Sub-concept:** Powered by ACEP (Agentic Commerce Execution Protocol)

## 2. Hook: AI Creator Economyの到来
- **Context:** 生成AIにより「1億総クリエイター時代」が到来。
- **Insight:** 「創る」ハードルは消滅した。
- **Question:** しかし、なぜ私たちの周りはまだ「AIで作られた商品」で溢れていないのか？

## 3. Problem: クリエイターを殺す「2つの構造的欠陥」
**「カネ」と「テマ」のダブルバインドが、イノベーションを阻害している。**

### ① Financial Pain: 「利益が出ない」構造的欠陥
- **多重手数料:** 決済(3.6%+40円)に加え、**プラットフォーム手数料(3%)**が「送料込み」の総額に対して課金される。
    - さらに海外販売なら＋5〜10%の上乗せ（代行手数料等）。
- **送料の壁:** POD特有の「分納」により送料が重複（800円〜2,000円）。
    - 結果：マグカップ1個が国内で3,000円超、クリアファイルが900円となり、市場競争力を失う。
- **Liquidity Trap (資金拘束):** 売上引き出しに**最大750円/回**。
    - 都度出金手続きが必要で、キャッシュフローが常時悪化。

### ② Operational Pain: 「手間が多すぎる」オペレーションの壁
- **プロセス分断:** 受注→発注→生産→出荷→納品→売上確定→出金。
    - これら全てで「オーダー単位」「分納単位」の手作業が発生。
- **AI店長の不在:** AIは無限に商品を生成できるが、人間は無限に管理（発注・経理）できない。
- **結果:** 「売れれば売れるほど忙しくなり、創作活動が停止する」。

## 4. Solution: JPYC-First Commerce Infrastructure
**「JPYCの金融革命」×「スマートコントラクトの自動化」で、クリエイターを解放する。**

### ① JPYC Value (Financial Revolution)
**「カネ」の壁を壊す。**
- **Micro-Payment:** L2チェーン活用で決済手数料を数円以下に圧縮。固定費(40円)やPF手数料(3%)を中抜きするP2P決済。
- **Real-time Liquidity:** 売れた瞬間にウォレットに着金。750円の出金手数料も、申請の手間も、着金待ちのタイムラグもゼロ。
- **Result:** 500円のグッズでも利益率20%超を確保し、即座に次の制作資金へ。

### ② Smart Contract Automation (Operational Revolution)
**「テマ」の壁を壊す。**
- **Programmable Money:** JPYCだからこそ可能な「プログラムによる自動分配」。
- **Trigger & Split:** 注文発生と同時に、スマートコントラクトが資金を自動で振り分け。
   - 🏭 工場へ（原価）/ 🚚 配送業者へ（送料）/ 👤 クリエイターへ（利益）
- **Result:** 受発注・経理・振込作業が全廃。人間は「創る」ことに集中できる。

## 5. Strategy: The "Triple Win" Update
**誰かを排除するのではなく、全員の利益を最大化する「一石三鳥」の構造改革。**

### The Mechanism of Mutual Gain (三方よし)
暗号商流プロトコル（金融レイヤー）の導入は、プラットフォームにとっても「コスト削減」と「市場拡大」を同時に叶える一石二鳥の戦略となる。

- **For Platforms (一石):** 決済・振込手数料の呪縛から解放され、利益率と取扱高(GMV)が向上。
- **For Creators (二鳥):** 原価低減により、適正価格での販売と利益確保が可能に。
- **For Customers (三鳥):** 安価に多品種のグッズを楽しめるようになり、購買意欲が増加。

### Conclusion
既存POD事業者が暗号商流（クリプト・フロー）を取り入れることは、顧客満足度を高めつつ自社の収益性も改善する、最も合理的な「両得」の成長戦略である。

## 6. Business Impact: Economics
**数字で見る劇的改善（Before / After）**

| | Before (既存EC) | After (ACEP) |
|---|---|---|
| **商品** | マグカップ (3,200円) | **マグカップ (2,400円)** |
| **決済手数料** | 約155円 | **約1円** (Gas代) |
| **振込手数料** | 250円〜 | **0円** (Wallet直) |
| **オペレーション** | 手動発注・経理 | **完全自動** |
| **利益** | 薄利・翌月末払い | **確保・即時着金** |

## 6. Why JPYC?
**「なぜUSDCではないのか？」への明確な回答。**

1. **Real World Supply Chain:** 国内の印刷工場・配送業者は「円」で動いている。為替リスクのないJPYCが必須。
2. **Compliance:** 日本の法規制（前払式支払手段）に準拠し、企業間取引での導入障壁が低い。

## 7. Technology (Add-on): ACEP Architecture
**ビジネスを支える、未来の技術基盤。**

### AIに「財布」を持たせる (The Future)
- **Pain:** AIエージェントは銀行口座を持てない。
- **Solution (EIP-7702):**
  - AIに「1日1万円まで」「指定工場への送金のみ」といった**制限付き権限（Session Key）**を付与。
  - ユーザーは既存のウォレット（EOA）を変えることなく、AIオートメーションを導入可能。
  - **UX革命:** 既存ユーザーがアプリを入れる感覚で、AI商流を利用開始できる。

## 8. Roadmap & Future
- **Phase 1 (MVP):** iPaaS連携による「Ops自動化」と「JPYC決済」。
- **Phase 2:** EIP-7702実装による「AIウォレット」化。
- **Phase 3:** Fully Autonomous Economy。AIがトレンドを分析し、勝手に商品を作り、勝手に売る世界。

## 9. Call to Action
- クリエイターの情熱を、手数料と手間のない世界へ。
- We are building the protocol for the next billion creators.
