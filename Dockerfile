# Stage 1: Build
FROM node:alpine as build

# Membuat dirrectory baru 
WORKDIR /app

# Salin semua file yang ada di ./app
COPY . /app

# Menjalankan printah untuk install depedenci
RUN npm install

# Menjalankan perintah untuk building
RUN npm run build

# Stage 2: Production
FROM nginx:alpine

# Salin build dari stage 1 ke root of nginx
COPY --from=build /app/build /usr/share/nginx/html

# Hapus konfigurasi default nginx
RUN rm /etc/nginx/conf.d/default.conf

# Salin konfigurasi kustom nginx
COPY nginx/nginx.conf /etc/nginx/conf.d

# Expose port 80
EXPOSE 80

# Mulai nginx
CMD ["nginx", "-g", "daemon off;"]
