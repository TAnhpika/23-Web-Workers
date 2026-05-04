/**
 * Web Workers API
 * - là 1 API giúp tạo 1 luồng xử lý mới bên cạnh luồng chính
 * -> xử lý các cv đồng bộ mất tg dễ làm block luồng chính 
 * 
 * 3 loại:
 * - Dedicated workers: tạo 1 luồng xử lý độc lập (1 tab 1 worker)
 * - Shared workers: ... nhiều tab 1 worker
 * - Service workers: giúp xây các cơ chế đa dạng 
 * + offline web
 * + caching - cache đc các kết quả qua fetch, xhr, tương tác vs network api (fetch, xhr)
 * + thông báo khi k vào trang web (chỉ mở trình duyệt -> tự bắn thông báo tới)
 */