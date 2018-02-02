/*
* @Author: iSunXiaojun
* @Date:   2018-01-30 16:29:56
* @Last Modified by:   iSunXiaojun
* @Last Modified time: 2018-01-30 16:55:14
*/

'use strict';

var _mm = require('util/mm.js');

var _user = {
    // 检查登录状态
    checkLogin : function(resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/get_user_info.do'),
            method  : 'POST',
            success : resolve,
            error   : reject
        });        
    },
    // 登出
    logout : function(resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/logout.do'),
            method  : 'POST',
            success : resolve,
            error   : reject
        });        
    }
}
module.exports = _user;