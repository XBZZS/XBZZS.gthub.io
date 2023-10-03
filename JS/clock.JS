// 获取显示时间的元素
const clockElement = document.getElementById('clock');

// 更新时间的函数
function updateClock() {
const now = new Date();
const hours = now.getHours().toString().padStart(2, '0');
const minutes = now.getMinutes().toString().padStart(2, '0');
const seconds = now.getSeconds().toString().padStart(2, '0');
const timeString = `${hours}:${minutes}:${seconds}`;
 clockElement.textContent = timeString;
}

// 初始调用一次，然后每秒更新一次时间
updateClock();
setInterval(updateClock, 1000);