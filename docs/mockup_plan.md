# モックアップ仕様書: 暗号商流（クリプト・フロー） 〜ボーダレスEC/POD with JPYC〜

> **Concept Proposal for the EC / POD (Print on Demand) Industry**
> 本プロジェクトは、EC/PODプラットフォーム産業に向けた、次世代の産業構造の提案です。

## 1. 概要
本モックアップは、JPYC Ideathonのための「暗号商流（クリプト・フロー）」コンセプトを実証するデモアプリケーションです。
クリエイターの「業務負担(Operational Pain)」と「金銭的負担(Financial Pain)」が、AIエージェントとスマートコントラクトによって解決される様子をストーリー形式で体験できます。

## 2. 実装済みストーリーフロー
アプリは以下の順序でストーリーが展開するように設計されています。

### Phase 1: Creation & Automation (Manageタブ)
*ゴール: 「AI店長」による業務の自動化とコスト構造の透明性を示す。*

1.  **Start (①):** "Operational Pain"（面倒な業務）の解決を宣言。
2.  **Generate Idea (②):**
    *   アクション: ボタン押下でAIが商品アイデア（Sci-Fi Bonsai Art Book）を生成。
    *   **Setup Log:** 裏側でAIが「工場」「配送業者」を自動検索し、スマートコントラクトで提携(Link)を結ぶ様子をログ表示。
3.  **Cost Breakdown (③-⑤):**
    *   **③ Factory:** 工場への自動発注（原価: 800 JPYC）。
    *   **④ Zero Fees:** プラットフォーム手数料が「0 JPYC」であることを強調。
    *   **⑤ Profit:** 利益（+500 JPYC）が即座に確定することを示す。
    *   **販売価格:** 1,800 JPYC。
4.  **Publish (⑥ → ③):**
    *   ボタン押下で商品を市場へ公開。
    *   **自動遷移:** ユーザーを自動的にMarketタブへ誘導。

### Phase 2: Purchase & Experience (Marketタブ)
*ゴール: 買い手視点での購入と、それがトリガーする「魔法」の体験。*

1.  **Marketplace (⑦):** 買い手の視点。以下のラインナップが並ぶ。
    *   **Sci-Fi Bonsai Art Book** (1,800 JPYC)
    *   **Sci-Fi Bonsai Mug** (1,600 JPYC)
    *   **Sci-Fi Bonsai File** (500 JPYC)
    *   **Sci-Fi Bonsai Pouch** (900 JPYC)
2.  **Buy Action (⑧):**
    *   アクション: 商品をクリックして購入。
    *   **Split Animation:** 代金コインが「工場」「配送」「クリエイター」の3方向に物理的に分裂して飛んでいく演出。
3.  **Feedback Popup:**
    *   「購入完了」のポップアップを表示。
    *   OKを押すと、**自動的にManageタブ（クリエイター視点）へ戻る**。

### Phase 3: Execution & Revenue (Manageタブ)
*ゴール: 全自動で業務が完結したことの証明。*

1.  **Execution Log (⑨):**
    *   Manageタブに戻った瞬間、**Execution Log**が出現。
    *   **リアルタイム処理:** 「入金確認」→「分配実行」→「送金完了」のログが流れ、ユーザーの手を煩わせることなく取引が完了したことを示す。

## 3. アセット (Sci-Fi Bonsai Series)
デモの世界観を統一するため、カスタム生成された画像アセットを使用。
- `assets/artbook.jpg`: メインデモ用アイテム。
- `assets/mug.jpg`, `assets/pouch.jpg`, `assets/clearfile.png`: マーケットプレイスの賑わいを演出。

## 4. 技術スタック
- **Frontend:** HTML5, CSS3, Vanilla JavaScript (No Framework)
- **Deployment:** GitHub Pages (Static Hosting)
- **Styles:** Glassmorphism, Neon Accents, Responsive Design
