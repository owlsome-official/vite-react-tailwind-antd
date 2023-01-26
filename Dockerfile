FROM nginx:1.22-alpine

# Copy the modified Nginx configuration file to the container
COPY nginx/default.conf /etc/nginx/conf.d/

# Remove the default HTML files from the Nginx container
RUN rm -rf /usr/share/nginx/html/*

# Set the working directory
WORKDIR /usr/share/nginx/html

# Copy the application files to the working directory
COPY ./dist .

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
