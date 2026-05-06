/**
 * Web worker:
 * - cung cấp bởi JS runtime - trình duyệt
 * - giúp tạo 1 luồng xử lý JS khác - mỗi luồng có 1 callstack độc lập
 * -> xử lý các cv đồng bộ mất tg (r gửi về luồng chính)
 *
 * Lưu ý worker:
 * - Điều kiện: Same origin: http://127.0.0.1:5500
 * - K dùng đc DOM
 * - K dùng đc document, window, history ...
 */

// Web worker
const worker1 = new Worker("./worker1.js");

worker1.onmessage = (e) => {
    console.log(e.data);
};

const button = document.querySelector("#button");

button.addEventListener("click", () => {
    worker1.postMessage(3e8);
});
