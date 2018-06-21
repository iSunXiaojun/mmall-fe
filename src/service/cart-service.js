/*
* @Author: iSunXiaojun
* @Date:   2018-01-30 16:55:44
* @Last Modified by:   SUN
* @Last Modified time: 2018-06-11 17:04:30
*/

'use strict';

var _mm = require('util/mm.js');

var _cart = {
    // 获取购物车数量
    getCartCount : function(resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/cart/get_cart_product_count.do'),
            success : resolve,
            error   : reject
        });        
    }
}
module.exports = _cart;