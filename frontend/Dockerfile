FROM node:latest as build-stage
WORKDIR /app
COPY ./ .
RUN npm install
RUN npm run build
RUN rm -fr node_modules


FROM nginx as production-stage
RUN mkdir /app
WORKDIR /app
COPY --from=build-stage /app/dist ./dist
COPY --from=build-stage /app/entrypoint.sh .
COPY nginx.conf /etc/nginx/nginx.conf

RUN chmod +x ./entrypoint.sh
ENTRYPOINT ["./entrypoint.sh"]

CMD ["nginx", "-g", "daemon off;"]
