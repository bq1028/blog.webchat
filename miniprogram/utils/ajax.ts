/**
 * ajax 请求
 * @author Philip
 */

export function ajax (url :string, options :object, data :object) {
    let requestTask: any = null;

    const promise = new Promise(function (resolve: Function, reject: Function) {
        requestTask = wx.request({
            ...{ 'content-type': 'application/json' },
            ...{ url },
            ...options,
            ...{ data },
            success (res) {
                resolve(res);
            },
            fail (res) {
                reject(res);
            },
        });
    });

    promise.abort = function () {
        requestTask.abort();
    };

    return promise;
}
