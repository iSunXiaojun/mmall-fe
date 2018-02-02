/*
* @Author: SUN
* @Date:   2018-02-02 17:22:08
* @Last Modified by:   SUN
* @Last Modified time: 2018-02-02 17:49:47
*/

'use strict';
require('./index.css');
require('page/common/nav-simple/index.js');
var _mm = require('util/mm.js');

$(function(){
    var type        = _mm.getUrlParam('type') || 'default',
        $element    = $('.' + type + '-success');
    // 显示对应的提示元素
    $element.show();
})