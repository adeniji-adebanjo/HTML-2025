#!/bin/bash

# Get the current branch name
BRANCH=$(git rev-parse --abbrev-ref HEAD)

# Get the list of modified files
CHANGED_FILES=$(git status --short | awk '{print $2}' | tr '\n' ', ')

# Use a default message if no changes are found
if [ -z "$CHANGED_FILES" ]; then
    COMMIT_MESSAGE="Feat: No significant changes - $(date '+%Y-%m-%d %H:%M:%S')"
else
    COMMIT_MESSAGE="Feat: Updated $CHANGED_FILES on $(date '+%Y-%m-%d %H:%M:%S')"
fi

# Add, commit, and push
git add .
git commit -m "$COMMIT_MESSAGE"
git push origin "$BRANCH"

echo "✅ Changes pushed to $BRANCH with commit message: '$COMMIT_MESSAGE'"
