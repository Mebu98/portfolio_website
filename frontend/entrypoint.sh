#!/bin/sh

# Code more or less from https://moreillon.medium.com/environment-variables-for-containerized-vue-js-applications-f0aa943cb962
# And modified for this project.

ROOT_DIR=/home/node/app/dist

PLACEHOLDER='__VUE_APP_API_BASE_URL__'

echo "looking for '$PLACEHOLDER' to replace with '${VUE_APP_API_BASE_URL}'"
for file in $ROOT_DIR/js/*.js* $ROOT_DIR/index.html;
do
  echo "Checking $file..."
  sed -i 's|'$PLACEHOLDER'|'${VUE_APP_API_BASE_URL}'|g' $file
done
# Let container execution proceed
exec "$@"