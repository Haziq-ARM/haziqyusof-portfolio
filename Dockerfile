# Use an official Node.js runtime as the base image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

RUN export PUBLIC_URL=https://example.com

# Build the React app
RUN npm run build

# Set the command to run when the container starts
CMD ["npm", "start"]

# Mount the build folder as a volume
VOLUME ["/app/build"]