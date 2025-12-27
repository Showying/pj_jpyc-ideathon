# 依頼：この会話（または下記入力）を Agent Skills としてパッケージ化してください

## MODE
- MODE: {WORKSPACE | CHAT}
  - WORKSPACE: 実ファイルとして作成（Antigravity / IDE 等で有効）
  - CHAT: チャット上に「ファイルごとのコードブロック」で出力（コピペで保存できる形）

## 入力（どちらか）
- 会話の文脈を参照してよい：YES
- もしくは、Skill化したい対象の要約：{ここに要約 or 手順 or ゴール}

## Skill の狙い（必須）
- Skill名（仮でOK）：{例：daily-log-to-insights}
- 目的（何を安定生成したいか）：{例：日次ログから、要点・論点・次アクションを抽出}
- 想定入力：{例：箇条書きログ、URL、議事録}
- 想定出力：{例：Markdown目次＋要約＋TODO＋評価スコア}
- 想定利用環境：{ChatGPT | Antigravity | Codex | Claude Code | その他}
- 失敗しやすい点（あれば）：{例：粒度が乱れる／抜け漏れ／形式崩れ}

## 生成してほしい成果物（必須）
次のフォルダ構成で、"1つのスキル"として出力してください（SKILL.md必須）。
- {skill-slug}/
  - SKILL.md（必須：frontmatterに name / description）
  - scripts/（任意：自動化・変換・検証コード）
  - references/（任意：判断基準、ルール、定義、FAQ、ナレッジ）
  - assets/（任意：テンプレ、雛形、固定文言、評価軸、スコア表）
  - examples/（任意：入力例→出力例、良い例/悪い例、テストケース）

## 重要ルール（必須）
1) SKILL.md は「実行オーケストレーション定義」として書くこと（手順・入出力・条件・DoDを明示）。
2) 再現性を最優先：曖昧語を避け、チェックリストと受入条件（Definition of Done）を入れる。
3) “MCP/外部ツール呼び出しが必要な工程”は SKILL.md 内で明示（例：Notion検索、Gmail送信など）。
4) 例（examples）は最低2本：
   - 典型例（標準入力→標準出力）
   - 失敗例（悪い入力→望ましくない出力→修正指示）
5) scripts は「なくても動く」が、あると安定する処理があれば追加（例：md整形、JSON検証、スコア算出など）。

## 出力形式（必須）
- MODE=WORKSPACE：上記のディレクトリ・ファイルを実作成し、作成/更新した一覧を返す
- MODE=CHAT：各ファイルを
  ```text
  path/to/file
  ---
  <content>
の形式で、ファイル単位に出力する（省略しない）

追加オプション（任意）
•命名規則：{例：kebab-case}
•文章トーン：{例：ビジネス丁寧、簡潔}
•バージョニング：{例：metadataに version/updated を入れる}