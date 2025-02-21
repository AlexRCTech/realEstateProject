# Usa la imagen oficial de Node.js 18
FROM node:18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de dependencias primero para aprovechar la caché de Docker
COPY package*.json ./

# Instala Angular CLI globalmente y las dependencias del proyecto
RUN npm install -g @angular/cli && npm install --legacy-peer-deps

# Copia el resto del código fuente
COPY . .

# Expone el puerto 4200 para el frontend
EXPOSE 4200

# Comando para iniciar la aplicación Angular
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200", "--disable-host-check"]
