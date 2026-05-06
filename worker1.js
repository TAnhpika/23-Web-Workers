// Main Thread <--------> Worker 1 (Other thread)

// postMessage(data): Gửi
// onmessage: Nhận

// Đối tượng toàn cục trong worker là self (~ window trên trình duyệt )
// onmessage = (e) => { // self là toàn cục nên bỏ đi cx đc
self.onmessage = (e) => {
    // nếu k lưu mà dùng trực tiếp e.data trong loop thì mỗi lần loop sẽ truy cập lại data -> lâu hơn 1 tỷ lần    
    const length = e.data

    let total = 0;

    for (let i = 0; i < length; i++) {
        total += 1;
    }
    
    self.postMessage(total)
};
