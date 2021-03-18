/*
* author: the.one
*
* time: 2021-03-18
*
* desc: 状态码 config
*
* */



/**
 * http响应状态码
 *
 * 0:               SUCCESS                  成功
 *
 */

export const apiStatus = {
  SUCCESS: 0,
};

/*
*
* 网络状态码
*
* */
export const httpStatus = status => {
  switch (status) {
    case 400:
      return '错误请求';
    case 401:
      return '未授权，请重新登录';
    case 403:
      return '拒绝访问';
    case 404:
      return '请求错误,未找到该资源';
    case 405:
      return '请求方法未允许';
    case 408:
      return '请求超时';
    case 500:
      return '服务器出错';
    case 501:
      return '网络未实现';
    case 502:
      return '网络错误';
    case 503:
      return '服务不可用';
    case 504:
      return '网络超时';
    case 505:
      return 'http版本不支持该请求';
    default:
      return `连接错误: ${status}`;
  }
};


/*
*
* http 响应时间
*
* */
export const timeout = 30000;
