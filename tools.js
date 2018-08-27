/**
 * 获取url中的参数
 * @param url
 * @param name
 * @returns
 */
function getQueryString(url,name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = url.substr(1).match(reg);
    if (r!=null) return unescape(r[2]); return null;
}
/**
 * 字符串是否是空
 * @param str
 * @returns {Boolean}
 */
function  isStrIsNull(str){
    if(str==null||str==""||str==undefined){return true};
    return false;
}
/**
 * 公用函数 时间戳转时间格式
 * @param timestamp
 * @returns {String}
 */
function timestampToTime(timestamp) {
    // var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    Y = date.getFullYear();
    M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    D = date.getDate();
    if (D < 10) {
        D = "0" + D
    }
    h = date.getHours();
    if (h < 10) {
        h = "0" + h
    }
    m = date.getMinutes();
    if (m < 10) {
        m = "0" + m
    }
    s = date.getSeconds();
    if (s < 10) {
        s = "0" + s
    }
    return Y + "-" + M + "-" + D + " " + h + ":" + m + ":" + s;
}
/**
 * 公用函数 时间戳转时间格式 不显示年
 * @param timestamp
 * @returns {String}
 */
function timestampToTimeNoYear(timestamp) {
    // var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    D = date.getDate();
    if (D < 10) {
        D = "0" + D
    }
    h = date.getHours();
    if (h < 10) {
        h = "0" + h
    }
    m = date.getMinutes();
    if (m < 10) {
        m = "0" + m
    }
    s = date.getSeconds();
    if (s < 10) {
        s = "0" + s
    }
    return M + "-" + D + " " + h + ":" + m + ":" + s;
}
/**
 * 替换url中的参数值(修改url中的参数)
 * @param url 链接
 * @param arg 要替换的参数
 * @param val 参数值
 * @returns
 */
function changeUrlArg(url, arg, val) {
    var pattern = arg + '=([^&]*)';
    var replaceText = arg + '=' + val;
    return url.match(pattern) ? url.replace(eval('/(' + arg + '=)([^&]*)/gi'), replaceText) : (url.match('[\?]') ? url +
        '&' + replaceText : url + '?' + replaceText);
}

/**
 * 将换行的字符串转为数组
 * @param text
 * @returns {Array}
 */
function textValToArr(text) {
    var arr = text.split("\n");
    for(var i=0;i<arr.length;i++){
        arr[i]=removeAllSpace(arr[i]);
    }
    return arr;
}
/**
 * 去除字符串所有空格
 * @param str
 * @returns {void|XML|string}
 */
function removeAllSpace(str) {
    return str.replace(/\s+/g, "");
}

/**
 * 根据元素id选中
 * @param element
 */
function selectElement(element) {
    var text = document.getElementById(element);
    if (document.body.createTextRange) {
        var range = document.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) {
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
        /*if(selection.setBaseAndExtent){
            selection.setBaseAndExtent(text, 0, text, 1);
        }*/
    } else {
        alert("none");
    }
}