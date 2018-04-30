import Vue from 'vue'
Vue.prototype.layerMsg = function (msg) {
    layui.use("layer", function () {
        var layer = layui.layer;
        layer.msg(msg)
    })
};
Vue.prototype.layerOpen = function (msg) {
    layui.use("layer", function () {
        var layer = layui.layer;
        layer.open({
            title: "New Campaign",
            area: ['800px', "500px"],
            type: 1,
            content: msg
        })
    })
};
Vue.prototype.colse = function () {
    layui.use("layer", function () {
        var layer = layui.layer;
        layer.closeAll()
    })
};