#!/bin/bash

# Set the IPFS path.
source ~/.profile

# Initialize the IPFS user if it hasn't been initialized yet.
ipfs init

sleep 5

# Start the IPFS daemon.
nohup ipfs daemon &

sleep 20

# Display the IPFS peer id and info on the console.
ipfs id

sleep 10

# I'm hoping to be able to remove these commands.
# Add any existing data. Help speed up startup.
#ipfs add -r /home/safeuser/koa-ipfs-blog/ipfs-data
#sleep 5

# Copy the config file
#cp /home/safeuser/koa-ipfs-blog/ipfs-config/common.js /home/safeuser/koa-ipfs-blog/config/env/

export KOA_ENV=production
npm start
