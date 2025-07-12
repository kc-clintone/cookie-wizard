FROM node:18-slim

# Install Chromium dependencies
RUN apt-get update && apt-get install -y \
  wget gnupg ca-certificates \
  fonts-liberation libappindicator3-1 libasound2 \
  libatk-bridge2.0-0 libatk1.0-0 libcups2 libdbus-1-3 \
  libgdk-pixbuf2.0-0 libnspr4 libnss3 libx11-xcb1 \
  libxcomposite1 libxdamage1 libxrandr2 xdg-utils \
  libgbm1 libgtk-3-0 && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /usr/src/app

# Copy package files from 'add' directory
COPY app/package*.json ./

# Install node dependencies
RUN npm install

# Copy app code and chrome-profile from root
COPY app/ ./app/
COPY data/ ./data/

# Expose the port the app runs on
EXPOSE 3000

# Run the app
CMD ["node", "app/index.js"]
