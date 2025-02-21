# Imagen base de PHP con extensiones necesarias
FROM php:8.4.2-fpm

# Instalar dependencias del sistema
RUN apt-get update && apt-get install -y \
    zip unzip curl git libpq-dev libpng-dev libonig-dev libxml2-dev \
    && docker-php-ext-install pdo pdo_mysql mbstring exif pcntl bcmath gd

# Instalar Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Configurar el directorio de trabajo
WORKDIR /var/www

# Copiar archivos del proyecto
COPY . .

# Instalar dependencias de Laravel
RUN composer install --no-dev --optimize-autoloader

# Otorgar permisos a la carpeta storage y bootstrap/cache
RUN chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache \
    && chmod -R 775 /var/www/storage /var/www/bootstrap/cache

# Exponer el puerto de PHP-FPM
EXPOSE 9000

# Comando de inicio
CMD ["php-fpm"]
