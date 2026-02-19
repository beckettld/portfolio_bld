#!/bin/bash
# Remove A2 datasets from the last commit and push without them.
# Run from repo root: /Users/beckettdevoe/Sem8/vis

set -e
cd "$(dirname "$0")/.."

echo "1. Undo last commit (keep changes staged)..."
git reset --soft HEAD~1

echo "2. Stop tracking A2 datasets folder (files stay on disk)..."
git rm -r --cached "A2/A2 datasets [SHARED]/" 2>/dev/null || true

echo "3. Stage updated .gitignore..."
git add A2/.gitignore

echo "4. Commit without datasets..."
git commit -m "Add A2 Exploratory Visual Analysis report and link from portfolio"

echo "5. Push to GitHub..."
git push origin master

echo "Done. Your Pages site will update in a minute."
