FROM nginx:stable-alpine

COPY . /usr/share/nginx/html
#COPY ./nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]
