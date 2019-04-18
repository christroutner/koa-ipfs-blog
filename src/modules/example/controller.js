
async function get (ctx, next) {
  ctx.body = { message: 'Hello world!' }
}

module.exports = { get }
