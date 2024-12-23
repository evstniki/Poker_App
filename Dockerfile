# Use an official node image as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /Poker_App
# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the Vite development server runs on
EXPOSE 5173

# Command to run the development server
CMD ["npm", "run", "dev"]
