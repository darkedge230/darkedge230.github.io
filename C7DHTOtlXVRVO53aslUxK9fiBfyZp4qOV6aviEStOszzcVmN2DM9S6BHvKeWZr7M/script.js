    document.addEventListener('DOMContentLoaded', function() {
        checkVisitor();
    });

    function checkVisitor() {
        const currentTime = new Date().getTime();  // 获取当前时间戳
        const visitor = localStorage.getItem('visitor');  // 获取访问者标记
        const visitTime = localStorage.getItem('visitTime');  // 获取访问者的访问时间

        if (visitor && visitTime) {
            const timeDifference = currentTime - visitTime;

            if (timeDifference > 10 * 60 * 1000) {
                localStorage.removeItem('visitor');
                localStorage.removeItem('visitTime');
                window.location.href = "https://ishortn.ink/AdwrZUg6T";  // 替换为你的跳转页面
            } else {
                console.log('已标记的访问者，标记未过期，继续浏览页面');
            }
        } else {
            localStorage.setItem('visitor', 'true');
            localStorage.setItem('visitTime', currentTime);
            console.log('新访问者，已标记');
            window.location.href = "https://ishortn.ink/AdwrZUg6T";  // 替换为你的跳转页面
        }
    }














document
  .querySelector('a[href="#footer"]')
  .addEventListener("click", function (e) {
    e.preventDefault(); // 阻止默认锚点跳转行为
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }); // 滚动到页面底部
  });


document.addEventListener("DOMContentLoaded", function () {
  const quoteButton = document.getElementById("quote-button");
  const article = document.querySelector("article");
  const headerBar = document.querySelector(".header-bar"); // 获取标题栏元素
  const video = document.getElementById("background-video"); // 获取视频元素

  // Initially hide the quote button, article, and header bar
  quoteButton.style.display = "none";



  // Function to show the quote button and later reveal the article and header bar
  function showQuote() {
    quoteButton.style.display = "block";
    quoteButton.style.opacity = "0";
    quoteButton.style.transition = "opacity 4s";
    quoteButton.style.opacity = "0.8";

    setTimeout(function () {
      quoteButton.style.opacity = "0";
      quoteButton.style.transition = "opacity 2s"; // Faster fade out
      setTimeout(function () {
        quoteButton.style.display = "none";
        showArticleAndHeader(); // Show the article and header bar after the quote button fades out
      }, 1500); // Wait for the faster fade out before hiding the button
    }, 2200); // Wait for 3 seconds before starting to fade out
  }

  // Function to show the article and header bar with a fade-in effect and removing blur
  function showArticleAndHeader() {
    article.style.display = "block";
    article.style.transition = "opacity 2s, filter 2s";
    video.style.filter = 'blur(10px)'; // Video gradually becomes blurry
    video.style.transition = 'filter 2s'; // Smooth transition for video blur
    setTimeout(() => {
      article.style.filter = 'blur(0)'; // Gradually remove blur from the article
      article.style.opacity = "1"; // Gradually show article
    }, 1000); // Start removing blur and showing article after 1 second
  } 

  // Detect any user interaction
  function handleUserInteraction() {
    setTimeout(showQuote, 2000); // Wait for 3 seconds before showing the quote
    document.removeEventListener("click", handleUserInteraction);
    document.removeEventListener("touchend", handleUserInteraction);
  }

  document.addEventListener("click", handleUserInteraction);
  document.addEventListener("touchend", handleUserInteraction);
});

document.addEventListener("click", function () {
  let video = document.getElementById("background-video");
  if (video.paused) {
    video.play();
    video.style.opacity = "1";
    video.muted = false;
  }
});




// preview.js

// 获取所有的预览img容器和预览层
const previewImgs = document.querySelectorAll('.预览img');
const previewOverlay = document.getElementById('preview-overlay');
const previewImage = document.getElementById('preview-image');

// 为每个预览img添加点击事件
previewImgs.forEach(imgContainer => {
    imgContainer.addEventListener('click', function() {
        const imgSrc = this.querySelector('img').src;
        previewImage.src = imgSrc;

        // 获取当前滚动位置
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        previewOverlay.style.top = scrollTop + 'px';

        previewOverlay.classList.add('active');
    });
});

// 点击空白处关闭预览
previewOverlay.addEventListener('click', function(e) {
    if (e.target === previewOverlay) {
        previewOverlay.classList.remove('active');
        previewOverlay.style.top = '0'; // 重置位置
    }
});






