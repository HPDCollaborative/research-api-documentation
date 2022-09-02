#!/bin/bash

DOCS_VERSIONS=(
  master
  2.2
)

for v in "${DOCS_VERSIONS[@]}"; do
  if [ -d "docs/$v" ]; then
    echo "Pulling latest documentation updates for $v..."
    (cd docs/$v && git pull)
  else
    echo "Cloning $v..."
    git clone --single-branch --branch "$v" git@github.com:HPDCollaborative/research-api-documents.git "docs/$v"
  fi;
done