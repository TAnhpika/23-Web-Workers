importScripts("./helpers.js"); // dùng chung hàm. có thể truyền thư viện http...

// helper1('Test in worker')
// Main Thread <--------> Worker 1 (Other thread)

// this trỏ về self
// console.log(this === self)

/**
 * - Callstack
 * - Web APIs (k đầy đủ - timer, web, network 'fetch, xhr' API) nhưng k có DOM
 * - Task queues
 * - Event loop
 */
// setTimeout(() => {
//     console.log("Done");
// }, 2000);

// postMessage(data): Gửi
// onmessage: Nhận

// Đối tượng toàn cục trong worker là self (~ window trên trình duyệt )
// onmessage = (e) => { // self là toàn cục nên bỏ đi cx đc
self.onmessage = (e) => {
    // khi gửi obj sang main thread cx là 1 clone obj
    // obj đc lưu vào Heap riêng, biệt lập vs main thread
    self.postMessage(e.data);
    self.close() // đóng từ trong
};
