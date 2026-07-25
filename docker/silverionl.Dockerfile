# --- Build stage ---
FROM node:18-alpine AS build

WORKDIR /app

# Copy dependency files first for caching
COPY package.json package-lock.json ./

RUN npm ci

# Copy the rest of the source
COPY . .

# Build the production static files
RUN npm run build

# Output: /app/dist (or /app/build depending on your setup)
