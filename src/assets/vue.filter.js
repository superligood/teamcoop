// 自定义过滤器

Vue.filter('formatDate', function (date) {
    if (!isEmpty(date)) {
        date = new Date(Date.parse(date.replace(/-/g, "/"))); //转换成Data();
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? '0' + m : m;
        var d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        return y + '-' + m + '-' + d;
    } else {
        return '';
    }
});

Vue.filter('formatExecutor', function (str) {
    if (!isEmpty(str)) {
        var arr = str.split(",");
        var stra = '';
        for (i = 0; i < arr.length; i++) {
            stra += ' @' + arr[i];
        }
        return stra;
    } else {
        return '';
    }
});

Vue.filter('formatFirstLetter', function (str) {
    if (!isEmpty(str)) {
        var stra = str.slice(0, 1);
        return stra;
    } else {
        return '';
    }
});

Vue.filter('formatItem', function (intObj, arrObj) {
    if (!isEmpty(intObj) && arrObj.length > 0) {
        var stra = '';
        for (i = 0; i < arrObj.length; i++) {
            if (arrObj[i]["Value"] == intObj) {
                stra = arrObj[i]["Item"];
                break;
            }
        }
        return stra;
    } else {
        return '';
    }
});



//自定义组件 前台使用：<button-counter v-on:increment="incrementTotal"></button-counter>
Vue.component('button-counter', {
    template: '<el-button v-on:click="incrementHandler" size="mini">{{ counter }}</el-button>',
    data: function () {
        return {
            counter: 0
        }
    },
    methods: {
        incrementHandler: function () {
            this.counter += 1
            this.$emit('increment')
        }
    },
})


Vue.component('div-view', {
    template: '<span>232{{ counter }}342</span>',
    data: function () {
        return {
            counter: 0
        }
    },
    methods: {
        incrementHandler: function () {
            this.counter += 1
            this.$emit('increment')
        }
    },
})
