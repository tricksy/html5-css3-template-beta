#!/bin/bash
# 全テンプレートを一括ビルドして _preview/ に出力
set -e

ROOT="$(cd "$(dirname "$0")" && pwd)"
PREVIEW="$ROOT/_preview"

rm -rf "$PREVIEW"

for dir in "$ROOT"/templates/*/; do
  name="$(basename "$dir")"
  echo "🔨 Building $name..."
  cd "$dir"
  npm install --silent
  npx vite build --outDir "$PREVIEW/$name" --base=./
done

echo "✅ 全テンプレートのビルド完了 → _preview/"
