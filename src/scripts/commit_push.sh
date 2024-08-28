#!/bin/bash

# Function to display a message and exit if something goes wrong
function exit_if_failed() {
  if [ $? -ne 0 ]; then
    echo "An error occurred. Exiting..."
    exit 1
  fi
}
# Check if there are any changes to commit
if [ -n "$(git status --porcelain)" ]; then
  # Prompt the user for a commit message
  echo "Enter your commit message:"
  read commit_message

 # Display untracked files (if any)
  untracked_files=$(git ls-files --others --exclude-standard)
  if [ -n "$untracked_files" ]; then
    echo "Untracked files detected:"
    echo "$untracked_files"
    echo "Adding untracked files to the staging area..."
  fi
  # Add all changes to the staging area
  git add .
  exit_if_failed

  # Commit the changes with the provided message
  git commit -m "$commit_message"
  exit_if_failed

  # Push the changes to the remote repository on the current branch
  git push
  exit_if_failed

  echo "Code committed and pushed to GitHub successfully!"
else
  echo "No changes to commit."
fi
