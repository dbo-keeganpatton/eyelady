# Base image for building the application
FROM node:20-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to install dependencies
COPY package.json ./

# Install dependencies
RUN npm install 

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build 

# --- Production Image ---
FROM node:20-alpine AS runner

WORKDIR /app

# Set environment variables for Next.js
ENV NODE_ENV=production

# Copy the standalone build from the builder stage
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

# Expose the port Next.js runs on (default 3000)
EXPOSE 3000

# Command to start the Next.js application
CMD ["node", "server.js"]
