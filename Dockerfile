FROM node:22.6.0-bullseye-slim

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
