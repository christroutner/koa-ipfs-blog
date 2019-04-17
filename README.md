# koa-ipfs-blog

[![Greenkeeper badge](https://badges.greenkeeper.io/christroutner/koa-ipfs-blog.svg)](https://greenkeeper.io/)

A lightweight web server that serves a blog published to IPFS.
This project was forked from the [koa-api-boilerplate](https://github.com/christroutner/koa-api-boilerplate)

This is the server-side software that serves up content to users with a normal
web browser. It works in conjunction with
the [memo-push](https://github.com/christroutner/memo-push) publishing
tool. Memo-push is used to publish content to the IPFS and BCH networks. This
software is used to retrieve it and serve the content to users.


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

- Add your BCH address
to [the config file](https://github.com/christroutner/koa-ipfs-blog/blob/master/config/env/common.js#L8). This
should be the same address associated with your memo.cash profile.

- Start the server:

`npm start`

## License
MIT
