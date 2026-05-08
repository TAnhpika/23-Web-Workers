/**
 * Dedicate (biệt lập) Web worker:
 * - cung cấp bởi JS runtime - trình duyệt
 * - giúp tạo 1 luồng xử lý JS khác - mỗi luồng có 1 callstack độc lập
 * - sử dụng trong cùng tab trình duyệt đó
 * -> xử lý các cv đồng bộ mất tg (r gửi về luồng chính)
 *
 * Lưu ý worker:
 * - Điều kiện: Same origin: http://127.0.0.1:5500
 * - K dùng đc DOM
 * - K dùng đc document, window, history ...
 *
 * Shared worker
 * - truyền file worker đầu tiên sẽ là độc lập
 * - các worker2,3 dùng cùng file worker thì sẽ trả về file tạo worker lần đầu
 * -> chia sẻ thông tin nhận đc từ nhiều tab trên cùng 1 trình duyệt (same origin)
 * - inspect ở: chrome://inspect/#workers
 * - mỗi lần mở sẽ có 1 messagePort riêng biệt
 * - lưu ý: nó k hỗ trợ trên tất cả trình duyệt (các trình duyệt trên đt, safari -> check trên canIuse)
 */

const sharedWorker = new SharedWorker("/shared-worker.js");
sharedWorker.onerror = () => {
    console.log("Error");
};

// sharedWorker.port.postMessage('Sth...')
sharedWorker.port.onmessage = (e) => {
    console.log(e.data);
};

// trc khi đóng tab
window.addEventListener("beforeunload", () => {
    sharedWorker.port.postMessage("__disconnect__"); // tránh trùng
});

const increase = document.querySelector("#increase");
const decrease = document.querySelector("#decrease");

increase.addEventListener("click", () => {
    sharedWorker.port.postMessage("increase");
});

decrease.addEventListener("click", () => {
    sharedWorker.port.postMessage("decrease");
});
