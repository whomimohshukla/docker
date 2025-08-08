# Use a Node.js image as the base

FROM node:22-alpine


# Set the working directory

WORKDIR /app

# Copy package.json and package-lock.json to install dependencies

COPY package*.json ./

# Install dependencies

RUN npm install

# Copy the rest of the application code

COPY . .

# Expose the port your app will listen on

EXPOSE 3000

# Start the app

CMD ["node", "index.js"]