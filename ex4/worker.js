// worker.js

self.addEventListener('message', function(e) {
    // รับข้อมูลจากหน้าหลัก
    const data = e.data;

    // ทำงานด้วยข้อมูลที่รับมา
    const result = doSomeWork(data);

    // ส่งผลลัพธ์กลับไปหน้าหลัก
    self.postMessage(result);
});

function doSomeWork(data) {
    // ทำงานด้วยข้อมูลที่รับมา
    // ตัวอย่าง: คูณข้อมูลด้วย 2
    return data * 2;
}
