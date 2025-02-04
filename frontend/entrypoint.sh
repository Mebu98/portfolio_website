#!/bin/sh

# Code more or less from https://moreillon.medium.com/environment-variables-for-containerized-vue-js-applications-f0aa943cb962
# And modified for this project.

ROOT_DIR=/app/dist

PLACEHOLDER='__VITE_APP_API_BASE_URL__'

echo "looking for '$PLACEHOLDER' to replace with '${API_BASE_URL}'"
for file in $ROOT_DIR/assets/*.js* $ROOT_DIR/index.html;
do
  echo "Checking $file..."
  sed -i 's|'$PLACEHOLDER'|'${API_BASE_URL}'|g' $file
done

echo "Done checking for swaps, continuing Docker."
# Let container execution proceed
exec "$@"