// 这里的symbol指的是商品, 而不是js的Symbol对象

// id为商品id, market指的是市场比如（US, HK, SZ, SH）, marketType指的的市场类型比如（SC,FX）
// 商品的标识符格式为: id.market.marketType




import { get } from 'lodash-es'


/**
 * 获取商品的id
 * @param {String} symbol 商品的标识符，比如：603123.SH.SC
 * @returns {String}
 */
export function getSymbolId(symbol) {
  return get(symbol.split('.'), ['0'], '');
}

/**
 * 获取商品所在市场
 * @param {String} symbol 商品的标识符，比如：603123.SH.SC
 * @returns {String}
 */
export function getSymbolMarket(symbol) {
  return get(symbol.split('.'), ['1'], '');
}

/**
 * 是否有通标识符
 * @param {Object} symbolObj 商品信息对象
 * @param {0|1}  symbolObj.hk_connect 是否联通香港：0表示不联通，1表示联通
 * @param {String} symbolObj.sym 商品的标识符，比如：603123.SH.SC
 * @returns Boolean
 */
export function isSymbolHasTong(symbolObj) {
  const symbol = get(symbolObj, ['sym'], '');
  const market = getSymbolMarket(symbol);
  const hkConnect = get(symbolObj, ['hk_connect'], 0);
  return hkConnect === 1 && (market === 'SZ' || market === 'SH');
}

/**
 * 商品是否属于A股市场
 * @param {String} symbol 商品的标识符，比如：603123.SH.SC
 * @returns Boolean
 */
export function isSymbolAtMarketA(symbol) {
  const market = getSymbolMarket(symbol);
  return market === 'SZ' || market === 'SH';
}

/**
 * 判断商品是否停牌
 * @param status 商品状态
 */
export function isSymbolHalt(status) {
  return status === 8 || status === 9;
}
