# Use Node.js 18 as base image
FROM node:18-alpine as builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json ./

# Install dependencies using npm to avoid yarn lockfile issues
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run production

# Production stage
FROM node:18-alpine as production

# Install serve globally
RUN npm install -g serve

# Set working directory
WORKDIR /app

# Copy built application from builder stage
COPY --from=builder /app/build ./build

# Copy serve configuration
COPY --from=builder /app/serve.json ./

# Expose port
EXPOSE 3000

# Start the application
CMD ["serve", "-c", "serve.json", "-l", "3000"]
