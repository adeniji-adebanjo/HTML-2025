#!/bin/bash

# Get the current branch name
BRANCH=$(git rev-parse --abbrev-ref HEAD)

# Generate a commit message
COMMIT_MESSAGE="Auto commit: $(date '+%Y-%m-%d %H:%M:%S')"

# Add all changes
git add .

# Commit with a message
git commit -m "$COMMIT_MESSAGE"

# Push to the current branch
git push origin "$BRANCH"

echo "✅ Changes pushed to $BRANCH with commit message: '$COMMIT_MESSAGE'"
