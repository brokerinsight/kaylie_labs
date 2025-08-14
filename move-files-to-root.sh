#!/bin/bash
# Script to move files from html-tools-store to root directory

echo "Moving files from html-tools-store to root directory..."

# Move all files and directories from html-tools-store to root
mv html-tools-store/* .
mv html-tools-store/.* . 2>/dev/null || true

# Remove the now-empty directory
rmdir html-tools-store

echo "Files moved successfully!"
echo "Don't forget to commit and push these changes to your repository."