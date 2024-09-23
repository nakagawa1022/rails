# ベースイメージ
FROM ruby:3.3.5

# 必要なパッケージをインストール
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client

# 作業ディレクトリの設定
WORKDIR /app

# GemfileとGemfile.lockをコピー
COPY Gemfile Gemfile.lock ./

# Bundlerのインストール
RUN gem install bundler
RUN bundle install

# アプリケーションのソースをコピー
COPY . .

# entrypoint.sh スクリプトをコピー
COPY entrypoint.sh /usr/bin/

# entrypoint.sh に実行権限を付与
RUN chmod +x /usr/bin/entrypoint.sh

# ポート3000を公開
EXPOSE 3000

# デフォルトのエントリーポイントを設定
ENTRYPOINT ["/usr/bin/entrypoint.sh"]

# サーバーを起動
CMD ["rails", "server", "-b", "0.0.0.0"]