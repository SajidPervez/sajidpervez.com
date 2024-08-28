#!/bin/bash

# Function to display a message and exit if something goes wrong
function exit_if_failed() {
  if [ $? -ne 0 ]; then
    echo "An error occurred. Exiting..."
    exit 1
  fi
}

# Check if there are any changes or untracked files to commit
if git status --porcelain | grep -q '^??'; then
  echo "Untracked files detected."
  echo "Staging all changes (including untracked files)..."
  
  # Add all changes (including untracked files) to the staging area
  git add .
  exit_if_failed
else
  # If no untracked files, check if there are changes to commit
  if [ -n "$(git status --porcelain)" ]; then
    echo "Changes detected. Staging all changes..."
    
    # Add all changes (including modifications and deletions) to the staging area
    git add .
    exit_if_failed
  else
    echo "No changes to commit."
    exit 0
  fi
fi

# Prompt the user for a commit message
echo "Enter your commit message:"
read -r commit_message

# Commit the changes with the provided message
git commit -m "$commit_message"
exit_if_failed

# Push the changes to the remote repository on the current branch
git push
exit_if_failed

echo "Code committed and pushed to GitHub successfully!"
