#!/bin/bash

if [ ! -f package.json ]; then
    echo "Please make sure to run this script from the root directory of this repo."
    exit 1
fi

source "$(dirname "$0")/checkout_latest_docs.sh"
npm install
npm run build
