# Use Node.js 22 as base image
FROM node:22-alpine as builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json yarn.lock ./

# Install dependencies using yarn
RUN yarn install

# Copy source code
COPY . .

# Build the application
RUN yarn run production

# Production stage
FROM node:22-alpine as production

# Install serve globally
RUN npm install -g serve

# Set working directory
WORKDIR /app

# Copy built application from builder stage
COPY --from=builder /app/build ./build

# Copy serve configuration and startup script
COPY --from=builder /app/serve.json ./
COPY --from=builder /app/start.sh ./

# Expose port
EXPOSE 3000

# Start the application
CMD ["npx", "serve", "build", "--single", "--listen", "tcp://0.0.0.0:3000"]
