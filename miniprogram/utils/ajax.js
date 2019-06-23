"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
function ajax(url, options, data) {
    var requestTask = null;
    var promise = new Promise(function (resolve, reject) {
        requestTask = wx.request(__assign({ 'content-type': 'application/json' }, { url: url }, options, { data: data }, { success: function (res) {
                resolve(res);
            },
            fail: function (res) {
                reject(res);
            } }));
    });
    promise.abort = function () {
        requestTask.abort();
    };
    return promise;
}
exports.ajax = ajax;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWpheC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFqYXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUtBLFNBQWdCLElBQUksQ0FBRSxHQUFXLEVBQUUsT0FBZSxFQUFFLElBQVk7SUFDNUQsSUFBSSxXQUFXLEdBQVEsSUFBSSxDQUFDO0lBRTVCLElBQU0sT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLFVBQVUsT0FBaUIsRUFBRSxNQUFnQjtRQUNyRSxXQUFXLEdBQUcsRUFBRSxDQUFDLE9BQU8sVUFDakIsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsRUFDdEMsRUFBQyxHQUFHLEtBQUEsRUFBQyxFQUNMLE9BQU8sRUFDUCxFQUFDLElBQUksTUFBQSxFQUFDLElBQ1QsT0FBTyxZQUFFLEdBQUc7Z0JBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLENBQUM7WUFDRCxJQUFJLFlBQUUsR0FBRztnQkFDTCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEIsQ0FBQyxJQUNILENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQTtJQUVGLE9BQU8sQ0FBQyxLQUFLLEdBQUc7UUFDWixXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEIsQ0FBQyxDQUFDO0lBRUYsT0FBTyxPQUFPLENBQUM7QUFDbkIsQ0FBQztBQXZCRCxvQkF1QkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogYWpheCDor7fmsYJcclxuICogQGF1dGhvciBQaGlsaXBcclxuICovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWpheCAodXJsIDpzdHJpbmcsIG9wdGlvbnMgOm9iamVjdCwgZGF0YSA6b2JqZWN0KSB7XHJcbiAgICBsZXQgcmVxdWVzdFRhc2s6IGFueSA9IG51bGw7XHJcblxyXG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlOiBGdW5jdGlvbiwgcmVqZWN0OiBGdW5jdGlvbikge1xyXG4gICAgICAgIHJlcXVlc3RUYXNrID0gd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgIC4uLnsgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgICAgICAuLi57dXJsfSxcclxuICAgICAgICAgICAgLi4ub3B0aW9ucyxcclxuICAgICAgICAgICAgLi4ue2RhdGF9LFxyXG4gICAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFpbCAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QocmVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxuXHJcbiAgICBwcm9taXNlLmFib3J0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJlcXVlc3RUYXNrLmFib3J0KCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBwcm9taXNlO1xyXG59Il19