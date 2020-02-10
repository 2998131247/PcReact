/**
 * 获取地址栏参数
 * @param name 参数名称
 */
export const getUrlParam = (name) => {
    const regx = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
    const result = window.location.search.substr(1).match(regx);
    return result ? decodeURIComponent(result[2]) : null;
  };