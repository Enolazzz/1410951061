document.getElementById('animationContainer').addEventListener('animationend', function() {
    console.log("動畫結束"); // 添加這行來檢查事件是否觸發
    this.style.display = 'none'; // 隱藏動畫容器
    document.getElementById('content').style.display = 'block'; // 顯示內容
});
