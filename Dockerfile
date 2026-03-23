FROM nginx:alpine
COPY app.json /usr/share/nginx/html/index.json
EXPOSE 80
