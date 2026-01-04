# 提出内容管理（下書き）

提出の際にこのページを参照しながら入力を行います。
※ * 印は入力必須項目、[重要] は注意事項です。

---

## 提出項目チェックリスト

- [ ] 1. 基本情報 (チーム・代表者・参加形態・所属・賞)
- [ ] 2. 企画概要 (タイトル・詳細・ターゲット業界)
- [ ] 3. 課題と解決策 (Pain・ステーブルコイン活用概要)
- [ ] 4. 実現性と計画 (具体ティアプローチ・アクションプラン)
- [ ] 5. 提出物 (企画書・デモ・GitHub)
- [ ] 6. その他 (実績・同意事項)

---

## 1. 基本情報

### チーム名 / プロジェクト名 *
**暗号商流（クリプト・フロー） 〜ボーダレスEC/POD with JPYC〜**

### 代表者氏名 *
(記入してください)
> [!IMPORTANT]
> Luma登録時のお名前と一致させてください。

### 参加形態 *
- [ ] 個人参加
- [ ] チーム参加（有志）
- [ ] チーム参加（企業・法人としての参加）
- [ ] チーム参加（学校・研究室）

### 所属企業・団体・学校名 *
(記入してください。ない場合は「特になし」)
> [!NOTE]
> 「チーム参加（企業・法人）」を選択した場合は、正確な法人名を記入してください。

### どの企業賞を狙っていますか？ *
- [ ] ソフトバンク Web3-Powered AI賞
- [ ] Avalanche賞
- [ ] ベスト・オンチェーン金融賞
- [ ] 車データ×AI×ステーブルコイン賞
- [ ] Ethereum賞
- [ ] CAC賞
- [ ] 狙っていない

---

## 2. 企画概要・ターゲット

### 企画概要 (Project Detail) *
> 技術的な新規性よりも「商流の変革」を最優先。既存金融・物流インフラが抱える「少額取引の手数料負け」をJPYCで解決し、AIクリエイターが「適正価格」で「世界」へ販売できる経済圏を構築する。

- **参照:** [02_solution_idea.md](file:///Users/sho_takahashi/Documents/Google Antigravity/pj_jpyc-ideathon/docs/02_solution_idea.md#L86-L88)

### ターゲットとする業界・領域 *
- [x] EC・小売
- [ ] 不動産
- [x] 物流・サプライチェーン
- [ ] 金融・保険
- [ ] エンタメ・ゲーム
- [ ] 地方創生・行政
- [ ] 社内業務（経理・人事等）
- [ ] その他:

---

## 3. 課題と解決策

### 解決したい「不便 (Pain)」は何ですか？ *
> 1. **Financial Pain:** 多重手数料（決済 3.6%+40円、PF手数料 3%、出金手数料 750円）により、低単価グッズ（マグカップ等）で利益が消滅する。
> 2. **Operational Pain:** 受注・発注・配送・売上管理が分断されており、売れるほど手作業が増え、クリエイターの創作活動を阻害している。

- **参照:** [02_solution_idea.md](file:///Users/sho_takahashi/Documents/Google Antigravity/pj_jpyc-ideathon/docs/02_solution_idea.md#L22-L37)

### ステーブルコインを活用したソリューション概要 *
> **「JPYCの金融革命」×「スマートコントラクトの自動化」**
> - L2上でのJPYC決済により、決済手数料を1円以下に圧縮し、即時着金を実現。
> - スマートコントラクトによる「プログラマブル・スプリット（売上の原価・送料・利益への自動分配）」を行い、経理・振込コストをゼロにする。

- **参照:** [03_pitch_deck.md](file:///Users/sho_takahashi/Documents/Google Antigravity/pj_jpyc-ideathon/docs/03_pitch_deck.md#L33-L48)

---

## 4. 実現性と計画

### 実現に向けた具体的アプローチ (Feasibility) *
> 1. **ACEPプロトコル:** EIP-7702（Session Key）を活用し、AIエージェントに「指定工場へのJPYC送金のみ」といった制限付き権限を付与。ユーザーの既存ウォレットを変えずに自動商流を実現。
> 2. **iPaaS連携:** Make/Zapier等のAPI連携を駆使し、既存ECプラットフォーム（Shopify等）と暗号商流を非同期で結合。

- **参照:** [02_solution_idea.md](file:///Users/sho_takahashi/Documents/Google Antigravity/pj_jpyc-ideathon/docs/02_solution_idea.md#L120-L131), [03_pitch_deck.md](file:///Users/sho_takahashi/Documents/Google Antigravity/pj_jpyc-ideathon/docs/03_pitch_deck.md#L79-L88)

### アクションプラン / スケジュール *
> - **1月:** MVP開発。JPYC決済から自作プロキシ経由での国内POD発注デモの完成。
> - **2-3月:** EIP-7702実装によるセッションキー管理の統合。初期テストユーザーによる実証実験。
> - **4-6月:** 海外POD業者との連携テスト（USDC/JPYCブリッジ活用）による越境ECの黒字化検証。

- **参照:** [03_pitch_deck.md](file:///Users/sho_takahashi/Documents/Google Antigravity/pj_jpyc-ideathon/docs/03_pitch_deck.md#L89-L93)

---

## 5. 提出物 (Submission)

### 企画書 / ピッチデックURL *
(URLを貼り付けてください)
> [!IMPORTANT]
> 「リンクを知っている全員が閲覧可」の設定を必ず確認してください。
- 準備用資料: [03_pitch_deck.md](file:///Users/sho_takahashi/Documents/Google Antigravity/pj_jpyc-ideathon/docs/03_pitch_deck.md)

### デモ動画 / プロトタイプURL
(URLを記載してください。任意・加点)

### GitHub / リポジトリURL
(URLを記載してください。任意・加点)
> [!IMPORTANT]
> リポジトリを「Public（公開）」設定にしてください。

---

## 6. その他・同意事項

### アピールしたい実績や技術力 (任意)
- EIP-7702を含む、次世代のAccount Abstraction（AA）プロトコルへの深い理解と実装経験。
- Make/Zapier等のiPaaSを用いた実務レベルのビジネスプロセス自動化の実績。

### 同意事項確認 *
- [ ] 募集要項・規約に同意し、提出します。
