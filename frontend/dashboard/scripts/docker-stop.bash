#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

echo " 🛑  STOP 🐳 Nginx Component Library"
docker-compose --env-file ../../../config.env \
  --file ../docker-compose.dev.yml \
  stop