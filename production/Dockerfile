# Create a Dockerized API server
#

#IMAGE BUILD COMMANDS
# ct-base-ubuntu = ubuntu 18.04 + nodejs v10 LTS
# https://github.com/christroutner/docker-base/blob/master/Dockerfile
FROM christroutner/ct-base-ubuntu
MAINTAINER Chris Troutner <chris.troutner@gmail.com>

#Set the working directory to be the home directory
WORKDIR /home/safeuser

# Expose the port the API will be served on.
EXPOSE 3210

# Switch to user account.
USER safeuser
# Prep 'sudo' commands.
RUN echo 'abcd8765' | sudo -S pwd

# Install IPFS
#VOLUME /home/safeuser/.ipfs
WORKDIR /home/safeuser

# x86
RUN wget https://dist.ipfs.io/go-ipfs/v0.4.21/go-ipfs_v0.4.21_linux-amd64.tar.gz
RUN tar -xvf go-ipfs_v0.4.21_linux-amd64.tar.gz
RUN rm go-ipfs_v0.4.21_linux-amd64.tar.gz

# ARM & Raspberry Pi
#RUN wget https://dist.ipfs.io/go-ipfs/v0.4.20/go-ipfs_v0.4.20_linux-arm.tar.gz
#RUN tar -xvf go-ipfs_v0.4.20_linux-arm.tar.gz
#RUN rm go-ipfs_v0.4.20_linux-arm.tar.gz

# Install IPFS
WORKDIR /home/safeuser/go-ipfs
RUN sudo ./install.sh

# Clone the project.
WORKDIR /home/safeuser
RUN git clone https://github.com/christroutner/koa-ipfs-blog
WORKDIR /home/safeuser/koa-ipfs-blog

# Copy the config file, which determins the internal port and the BCH address
# to monitor.
COPY common.js config/env/common.js

# Install dependencies
RUN npm install

# Alter the IPFS to a the mounted volume.
RUN echo "export IPFS_PATH=/home/safeuser/koa-ipfs-blog/ipfs-data" >> /home/safeuser/.profile

# Declare the path to volumes for persisting data.
VOLUME /home/safeuser/koa-ipfs-blog/ipfs-data

# IPFS port
EXPOSE 4001

# Debug
#WORKDIR /home/safeuser
#COPY dummyapp.js dummyapp.js
#CMD ["node", "dummyapp.js"]

# Start the application.
COPY start-production.sh start-production.sh
CMD ["./start-production.sh"]
