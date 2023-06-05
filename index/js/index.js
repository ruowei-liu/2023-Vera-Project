// 獲取所有的圖片元素
const slides = document.querySelectorAll('.slide');

// 設置計時器索引和切換間隔時間（毫秒）
let slideIndex = 0;
const interval = 2000; // 2秒

// 定義函數來切換圖片
function showSlide() {
  // 隱藏所有的圖片
  slides.forEach((slide) => {
    slide.classList.remove('active');
    slide.classList.remove('delay');
  });

  // 顯示當前圖片
  slides[slideIndex].classList.add('active');
  
  // 設置下一張圖片的索引
  slideIndex = (slideIndex + 1) % slides.length;

  // 在下一次切換之前加入延遲效果
  slides[slideIndex].classList.add('delay');
}

// 初始化顯示第一張圖片
showSlide();

// 設置定時器來定期切換圖片
setInterval(showSlide, interval);
