FROM nginx:1.22-alpine

# Copy the modified Nginx configuration file to the container
COPY nginx/default.conf.template /default.conf.template

# Remove the default HTML files from the Nginx container
RUN rm -rf /usr/share/nginx/html/*

# Set the working directory
WORKDIR /usr/share/nginx/html

# Copy the application files to the working directory
COPY ./dist .
COPY .env.local .

# Start Nginx when the container starts

ENTRYPOINT ["/bin/sh", "-c", "export $(grep -v '^#' .env.local | xargs) && \"$@\"", "-s"]
CMD ["/bin/sh" , "-c" , "envsubst \"$(printf '${%s} ' $(cat .env.local | cut -d'=' -f1))\" < /default.conf.template > /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"]