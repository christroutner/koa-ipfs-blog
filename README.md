# koa-ipfs-blog
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
```bash
git clone https://github.com/christroutner/koa-ipfs-blog
cd koa-ipfs-blog
npm install
npm start
```

## License
MIT
