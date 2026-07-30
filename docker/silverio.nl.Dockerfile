FROM nginx:1.27-alpine

# Remove default config
RUN rm /etc/nginx/conf.d/default.conf

# Copy your full custom config
COPY docker/etc/nginx/nginx.production.conf /etc/nginx/nginx.conf

# Copy built frontend from CI
COPY dist /var/www/html

# Permissions
RUN chown -R nginx:nginx /var/www/html