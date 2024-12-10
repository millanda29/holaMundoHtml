# Usar una imagen base de Nginx
FROM nginx:alpine

# Copiar los archivos HTML/CSS/JS del proyecto al contenedor
COPY ./ /usr/share/nginx/html/

# Exponer el puerto 80 para que el contenedor pueda ser accesible
EXPOSE 80

# El contenedor se ejecutará usando el servidor web Nginx
CMD ["nginx", "-g", "daemon off;"]
