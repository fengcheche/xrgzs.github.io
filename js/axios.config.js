axios.defaults.baseURL = 'http://ttxiaomei.com/api/'
ttxiameiImg='http://ttxiaomei.com/mall/img/'
okCode='00000';
avatarName='avatar';
AuthorizationName='Authorization';
axios.defaults.timeout = 10000
function getCookie(name) {
    var prefix = name + "="
    var start = document.cookie.indexOf(prefix)

    if (start == -1) {
        return null;
    }

    var end = document.cookie.indexOf(";", start + prefix.length)
    if (end == -1) {
        end = document.cookie.length;
    }

    var value = document.cookie.substring(start + prefix.length, end)
    return unescape(value);
}
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配
    var context = "";
    if (r != null)
        context = decodeURIComponent(r[2]);
    reg = null;
    r = null;
    return context == null || context == "" || context == "undefined" ? "" : context;
}



axios.interceptors.request.use(function (config) {
        // let token = localStorage.getItem('token')
        let token = getCookie('Authorization')
        if (token) {
            // config.headers['Authorization'] = 'Bearer ' + token
            config.headers['Authorization'] = token
        }
        return config;
    },
    function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
)

// 响应拦截
axios.interceptors.response.use(function (res) {
    if (res.code == '00000') {
        return res.data
    } else {
        console.log(res);
        return res
    }
})

