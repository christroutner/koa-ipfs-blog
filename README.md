# koa-ipfs-blog

[![Greenkeeper badge](https://badges.greenkeeper.io/christroutner/koa-ipfs-blog.svg)](https://greenkeeper.io/)

A lightweight web server that serves a blog published to IPFS.

- [Here is a non-technical video](https://www.youtube.com/watch?v=RlNVyatwd5M) overview
of how governments censor content on the internet, and how decentralized publishing
tools can be used to circumvent it.

- [Here is a walkthrough video](https://www.youtube.com/watch?v=Ez9YXpu_Chs&t=971s) of
how to use this repository along with
the [memo-push](https://github.com/christroutner/memo-push) tool to publish a
website in a decentralized, censorship-resistant way in order to leverage the
[Streisand Effect](https://en.wikipedia.org/wiki/Streisand_effect).

This is the server-side software that serves up content to users with a normal
web browser. It works in conjunction with
the [memo-push](https://github.com/christroutner/memo-push) publishing
tool. Memo-push is used to publish content to the IPFS and BCH networks. This
software is used to retrieve it and serve the content to users. Future versions
will also serve content directly to the Tor network as well, via a hidden service.

This project was forked from the [koa-api-boilerplate](https://github.com/christroutner/koa-api-boilerplate)


## Requirements
* node __^10.15.1__
* npm __^6.7.0__

## Installation
- Clone and install dependencies:
```bash
git clone https://github.com/christroutner/koa-ipfs-blog
cd koa-ipfs-blog
npm install
```

- [Install IPFS](https://docs.ipfs.io/introduction/install/) and ensure the
daemon is running by executing `ipfs daemon`.


## Usage
There are two forms of using this repository. **Development** is best for hacking
and development of the server. **Production** packages the repository into a
Docker container for easy deployment.


### Development

- Ensure the IPFS daemon is running.

- Add your BCH address
to [the config file](https://github.com/christroutner/koa-ipfs-blog/blob/master/config/env/common.js#L8). This
should be the same address associated with your memo.cash profile.

- Start the server: `npm start`

### Production
It's assumed that you are starting with a fresh installation of Ubuntu
18.04 LTS on a 64-bit machine.
It's also assumed that you are installing as a
[non-root user with sudo privileges](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-18-04).

- Install Docker on the host system.
[This tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-16-04)
shows how to install Docker on a Ubuntu system. It's specifically targeted to
Digital Ocean's cloud servers, but should work for any Ubuntnu system.

- Install Docker Compose too.
[This tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-docker-compose-on-ubuntu-16-04) shows how to do so on a Ubuntu system.

- Customize the [docker-compose.yml](docker-compose.yml) to set things like

- Build the image: `docker-compose build`

- Run the docker container: `docker-compose up`

- Or, run the docker container in daemon mode: `docker-compose up -d`

**Note:** It takes time for the container to crawl the IPFS peer-to-peer network
and connect to peers, in order to find the initial content it wants to download.
You can speed up this processes by pre-downloading the content into the
`ipfs-data` directory.

## License
[MIT](LICENSE.md)
