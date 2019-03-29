var iframe = document.createElement('iframe')
iframe.src = 'http://x.localhost.com:7001/public/hash.html'
document.body.appendChild(iframe)

function getQuery(string){
    let query = string.replace(/#/,'')
    query = query.split('&');
    var obj ={};
    query.forEach(element => {
        var temp = element.split('=')
        obj[temp[0]] = temp[1]
    });
    return obj
}

window.onhashchange = function () {
  // 小练习，做个工具方法，取出query的值
  console.log(location.hash)
  var query = getQuery(location.hash);
  console.log(query.msg)
}