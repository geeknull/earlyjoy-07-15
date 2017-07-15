/**
 * Created by Weil on 2017/6/24.
 */
module.exports = async (ctx, next) => {
  let ContentType = ctx.headers['content-type'] || ''; // 有可能是undefined
  if ( ContentType.toLowerCase() === 'application/json' ) {
    // 如果是API请求就延迟1500毫秒
    // 可以多延迟点，为后续优化提供空间
    await new Promise(resolve => setTimeout(resolve, 1500));
  }
  await next();
};
