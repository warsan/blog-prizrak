#!/bin/bash
set -e

s=$HOSTNAME
HOST="$(cut -d'-' -f3 <<<"$s")"

if [ $HOST != '0rfu5' ] && [ ! -f data/ghost-local.db ]; then
(
  node -p "JSON.stringify({...require('./base-config.development.json'), url: \"https://$HOST.sse.codesandbox.io/\"}, null, 2)" > config.development.json
  mkdir /sandbox/logs
  mkdir /sandbox/data  
  cd node_modules/ghost
  knex-migrator init
  mv /sandbox/node_modules/ghost/content/data/ghost-dev.db /sandbox/data/ghost-local.db
)
fi