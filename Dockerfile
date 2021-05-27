FROM node:12

# ENV PORT 7770

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Copying source files
COPY . /app

# Installing dependencies
RUN npm install

# Building app
# RUN npm run build
# EXPOSE 7770

# Running the app
CMD "npm" "run" "dev"