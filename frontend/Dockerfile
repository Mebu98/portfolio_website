FROM node:23-alpine

RUN npm install -g http-server

WORKDIR /home/node/app

COPY . .
COPY .env.production .

RUN chown -R node:node /home/node/app
USER "node"
RUN npm install
RUN npm run production

RUN chmod +x ./entrypoint.sh
ENTRYPOINT ["./entrypoint.sh"]

## No need to bloat image with node_modules from vue-cli etc?
##TODO: tranfer to VITE ?
#RUN rm -fr node_modules


EXPOSE 8080
CMD ["npm", "run", "serve"]



