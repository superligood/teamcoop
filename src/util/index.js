/**
 * @param {string} url
 * @returns {Object}
 */
export function getQueryObject(url) {
    url = url == null ? window.location.href : url
    const search = url.substring(url.lastIndexOf('?') + 1)
    const obj = {}
    const reg = /([^?&=]+)=([^?&=]*)/g
    search.replace(reg, (rs, $1, $2) => {
      const name = decodeURIComponent($1)
      let val = decodeURIComponent($2)
      val = String(val)
      obj[name] = val
      return rs
    })
    return obj
  }

  //获取地栏参数
export function getQueryString(name) {
  let reg = `(^|&)${name}=([^&]*)(&|$)`
  let r = window.location.search.substring(1).match(reg);
  if (r != null) return unescape(r[2]); return null;
}
  
  /**
 * @param {Array} actual
 * @returns {Array}
 */
export function cleanArray(actual) {
    const newArray = []
    for (let i = 0; i < actual.length; i++) {
      if (actual[i]) {
        newArray.push(actual[i])
      }
    }
    return newArray
  }

  /**
 * @returns {Object}
 */
export function isEmpty(obj) {
    if (typeof obj == "undefined" || obj == null || obj == "") {
        return true;
    } else {
        return false;
    }
}


//转为时间戳
export function timestampToTime(timestamp) {
  var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var Y = date.getFullYear() + '-';
  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
  var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
  var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
  var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  return Y + M + D + h + m + s;
}

//字典中Value对应Item值
export function formatOptions(intObj, arrObj) {
  if (!isEmpty(intObj) && arrObj.length > 0) {
      var stra = '';
      for (let i = 0; i < arrObj.length; i++) {
          if (arrObj[i]["Value"] == intObj) {
              stra = arrObj[i]["Item"];
              break;
          }
      }
      return stra;
  } else {
      return '';
  }
}

export function formatDate(value, fmt) {
  let getDate = new Date(value);
  let o = {
      'M+': getDate.getMonth() + 1,
      'd+': getDate.getDate(),
      'h+': getDate.getHours(),
      'm+': getDate.getMinutes(),
      's+': getDate.getSeconds(),
      'q+': Math.floor((getDate.getMonth() + 3) / 3),
      'S': getDate.getMilliseconds()
  };
  if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (getDate.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (let k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
      }
  }
  return fmt;
}

export function formatMemberStep(ADID, row) {
  var Ext01 = '';
  if (!isEmpty(row)) {
      for (let o of row) {
          if (o.ADID == ADID && o.RStatus >= 1) {
              Ext01 = o.Ext01;
              break;
          }
      }
  }
  return Ext01;
}


export function formatMemberObject(ADID, row) {
  var obj = {};
  if (!isEmpty(row) && row.length > 0) {
      for (let o of row) {
          if (o.ADID == ADID && o.RStatus >= 1) {
              obj = o;
              break;
          }
      }
  }
  return obj;
}