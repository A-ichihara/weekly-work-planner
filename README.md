# 週間業務予定表（GitHub Pages + Supabase）

1. Supabaseで**専用の新規プロジェクト**を作成。
2. SQL Editorで `schema.sql` を実行。
3. Authenticationで本人のメール・パスワードを登録。一般ユーザーの新規登録を無効にする。可能ならMFAも設定。
4. `index.html` 冒頭の `URL` と `KEY` を、Supabase Project URLと**publishable key**に置換。**secret / service_role キーは絶対に入れない**。
5. GitHubの公開リポジトリに `index.html` をアップロードし、Settings > Pages > Deploy from branch > main/root を設定。
6. Supabase Authentication のURL設定に公開URLを登録。
7. 架空データで会社PC・iPhoneの同期、印刷、完了チェックを確認。

## 注意
- 既存アプリのDBには適用しない。新規プロジェクト専用SQL。
- GitHub Pagesのソースは公開される。秘密鍵やパスワードは絶対にコミットしない。
- GitHub Pagesの業務利用条件とSupabaseの無料枠・休止条件を確認する。
- 会社の業務データを外部クラウドに保存するには会社の承認が必要。
- 複数日にまたがる作業時間は、1タスク分の時間として計算する。日をまたぐ時刻には非対応。
- CSV書き出しはあるが、既存HTMLの保存データの自動移行は未対応。
- このパッケージは接続先未設定。公開・端末間同期の実機テストは未実施。
