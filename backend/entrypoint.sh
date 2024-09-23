#!/bin/bash
set -e

# データベースがまだ作成されていない場合に作成
bundle exec rails db:create || true

# マイグレーションを実行
bundle exec rails db:migrate

# サーバーを起動
exec "$@"