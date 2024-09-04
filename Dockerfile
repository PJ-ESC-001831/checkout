# syntax = docker/dockerfile:1

# Adjust NODE_VERSION as desired
ARG NODE_VERSION=22.6.0
FROM node:${NODE_VERSION}-slim as base

LABEL fly_launch_runtime="Next.js"

# Next.js app lives here
WORKDIR /app

# Set production environment
ENV NODE_ENV="production"

# Throw-away build stage to reduce size of final image
FROM base as build

# Install packages needed to build node modules
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp pkg-config python-is-python3

# Install node modules
COPY --link package-lock.json package.json ./
RUN npm ci --include=dev

# Copy application code
COPY --link . .

# Build application
RUN npm run build

# Remove development dependencies
RUN npm prune --omit=dev

# Final stage for app image
FROM base as app

# Copy built application
COPY --from=build /app /app

# Start the server by default, this can be overwritten at runtime
EXPOSE 3000
CMD [ "npm", "run", "start" ]

FROM base as dev

ARG DEV_USER=developer
ENV DEV_USER=${DEV_USER}

# Install git and other dependencies
RUN apt-get update && \
  apt-get install -y \
  git \
  bash \
  ca-certificates \
  curl \
  gnupg \
  lsb-release && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/*

# Create a non-root user and group
RUN usermod -l ${DEV_USER} node \
  && groupmod -n ${DEV_USER} node \
  && usermod -d /home/${DEV_USER} -m ${DEV_USER}

# Install Docker
RUN mkdir -p /etc/apt/keyrings && \
  curl -fsSL https://download.docker.com/linux/debian/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg && \
  echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null && \
  apt-get update && \
  apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/*

# Install the latest version of NPM
RUN npm install -g npm@latest

# Set up bash
COPY .devcontainer/.bashrc /root/.bashrc

# Set the working directory
SHELL ["/bin/bash", "-c"]
USER ${DEV_USER}
WORKDIR /workspace
