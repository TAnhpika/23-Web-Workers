/**
 * Dedicate (biệt lập) Web worker:
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

worker1.onerror = () => {
    console.log('Error');
    
}
worker1.onmessage = (e) => {
    console.log(e.data);
    // console.log(obj);
    // console.log(e.data === obj); // cloned

    // đóng từ main
    // worker1.terminate()
};

const button = document.querySelector("#button");

let obj = { name: 'John'}

// function add(a, b) {
//     return a + b
// }
button.addEventListener("click", () => {
    // khi gửi obj qua worker thì obj đã đc clone ~ Dedicate
    // worker1.postMessage(obj);

    worker1.postMessage('sth'); // k clone hàm đc -> tách file
});

// helper1('Test')