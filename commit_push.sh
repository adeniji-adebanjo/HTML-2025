#!/bin/bash

# Get the current branch name
BRANCH=$(git rev-parse --abbrev-ref HEAD)

# Get a summary of the changes
CHANGED_FILES=$(git diff --name-only --cached)

# Generate detailed commit message
if [ -z "$CHANGED_FILES" ]; then
    COMMIT_MESSAGE="Auto commit: No significant changes - $(date '+%Y-%m-%d %H:%M:%S')"
else
    COMMIT_MESSAGE="Auto commit: \n"
    
    for FILE in $CHANGED_FILES; do
        FILE_CHANGES=$(git diff --cached --unified=0 "$FILE" | grep '^[+-]' | grep -v '+++' | grep -v '---' | sed 's/^+/Added: /;s/^- /Removed: /')
        COMMIT_MESSAGE+="$FILE:\n$FILE_CHANGES\n\n"
    done
fi

# Add, commit, and push
git add .
git commit -m "$COMMIT_MESSAGE"
git push origin "$BRANCH"

echo "✅ Changes pushed to $BRANCH with commit message:"
echo "$COMMIT_MESSAGE"
