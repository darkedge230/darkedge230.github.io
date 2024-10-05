        // 定义一个函数来检查标记和跳转
        function checkVisitor() {
            const currentTime = new Date().getTime();  // 获取当前时间戳
            const visitor = localStorage.getItem('visitor');  // 获取访问者标记
            const visitTime = localStorage.getItem('visitTime');  // 获取访问者的访问时间

            // 检查是否存在访问者标记
            if (visitor && visitTime) {
                // 计算访问时间与当前时间的差值，单位为毫秒
                const timeDifference = currentTime - visitTime;
                
                // 检查标记是否超过10分钟（10 * 60 * 1000 毫秒）
                if (timeDifference > 10 * 60 * 1000) {
                    // 如果标记已过期，移除标记并跳转到指定页面
                    localStorage.removeItem('visitor');
                    localStorage.removeItem('visitTime');
                    window.location.href = "https://ishortn.ink/AdwrZUg6T";  // 替换为你的跳转页面
                } else {
                    console.log('已标记的访问者，标记未过期，继续浏览页面');
                }
            } else {
                // 如果没有标记，则进行标记并记录当前访问时间
                localStorage.setItem('visitor', 'true');
                localStorage.setItem('visitTime', currentTime);
                console.log('新访问者，已标记');
                window.location.href = "https://ishortn.ink/AdwrZUg6T";  // 替换为你的跳转页面
            }
        }

        // 立即调用函数进行标记检查
        checkVisitor();
















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














document.addEventListener("DOMContentLoaded", () => {
    const mediaContainers = document.querySelectorAll('.media-container'); // 获取所有的 media-container 容器
    const videos = document.querySelectorAll('video'); // 获取所有的视频

    // 禁止视频在页面加载时播放
    videos.forEach(video => {
        video.pause(); // 确保视频在没有点击时处于暂停状态
        video.controls = false; // 禁用视频的控制条
    });

    mediaContainers.forEach(container => {
        container.addEventListener('click', function(event) {
            if (event.target.tagName === 'IMG' || event.target.tagName === 'VIDEO') {
                openPreview(event.target.tagName === 'VIDEO' ? event.target.currentSrc : event.target.src, event.target.tagName);
            }
        });
    });

    function openPreview(src, type) {
        // 创建预览层
        const preview = document.createElement('div');
        preview.className = 'preview-media';
        
        // 创建媒体元素（图片或视频）
        let media;
        if (type === 'IMG') {
            media = document.createElement('img');
            media.src = src;
        } else if (type === 'VIDEO') {
            media = document.createElement('video');
            media.src = src;
            media.controls = true;  // 只有在预览时启用视频控制
            media.autoplay = true;  // 点击后自动播放
        }
        media.style.opacity = '0';  // 初始透明度为 0

        // 将媒体添加到预览层中
        preview.appendChild(media);
        document.body.appendChild(preview);

        // 设置渐变显示效果
        setTimeout(() => {
            preview.style.opacity = '1';  // 使预览层逐渐显示
            media.style.opacity = '1';  // 使媒体逐渐显示
        }, 10);  // 短暂延迟，确保元素已经插入 DOM

        // 关闭预览层（点击空白处）
        preview.addEventListener('click', function(event) {
            if (event.target !== media) {  // 确保点击的是背景，而不是媒体
                // 开始渐变关闭效果
                preview.style.opacity = '0';  // 设置预览层渐变隐藏
                media.style.opacity = '0';  // 设置媒体渐变隐藏

                // 延迟移除元素，等待渐变效果完成
                setTimeout(() => {
                    preview.remove();
                }, 500);  // 500ms 对应的是 `transition` 的持续时间
            }
        });
    }
});





// 定义两小时的时间间隔 (7200000 毫秒 = 2 小时)
const TWO_HOURS = 2 * 60 * 60 * 1000;

// 获取当前时间戳
const now = new Date().getTime();

// 获取上次访问时间
const lastVisit = localStorage.getItem('lastVisit');

// 如果存在上次访问时间，并且与当前时间差值大于两小时，强制刷新缓存
if (lastVisit && now - lastVisit > TWO_HOURS) {
    // 清理缓存，强制刷新
    localStorage.clear();
    window.location.reload(true);  // true 表示强制从服务器获取最新资源
} else {
    // 记录当前访问时间
    localStorage.setItem('lastVisit', now);
}






// 创建并插入返回顶部按钮
function createBackToTopButton() {
    const backToTopButton = document.createElement('div');
    backToTopButton.innerHTML = '&#x25B2;'; // 上箭头符号
    backToTopButton.style.position = 'fixed';
    backToTopButton.style.bottom = '20px';  // 调整为你需要的底部位置
    backToTopButton.style.right = '20px';   // 调整为你需要的右侧位置
    backToTopButton.style.width = '50px';
    backToTopButton.style.height = '50px';
    backToTopButton.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // 透明背景
    backToTopButton.style.borderRadius = '50%'; // 圆形按钮
    backToTopButton.style.display = 'flex';
    backToTopButton.style.justifyContent = 'center';
    backToTopButton.style.alignItems = 'center';
    backToTopButton.style.color = 'white';
    backToTopButton.style.fontSize = '24px';
    backToTopButton.style.cursor = 'pointer';
    backToTopButton.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
    backToTopButton.style.opacity = '1'; // 始终可见
    backToTopButton.style.visibility = 'visible'; // 始终可见
    backToTopButton.style.transition = 'opacity 0.3s ease'; // 可选的动画效果
    backToTopButton.style.zIndex = '9999999999'; // 确保在最上层

    // 将按钮添加到页面中
    document.body.appendChild(backToTopButton);

    // 点击按钮后，平滑滚动到指定元素
    backToTopButton.addEventListener('click', () => {
        // 滚动到指定 ID 的元素
        scrollToElement('target-top');
    });
}

// 调用函数创建按钮
createBackToTopButton();

// 定义平滑滚动到指定元素的函数
document.addEventListener('DOMContentLoaded', function() {
    function scrollToElement(id) {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
    // 绑定 scrollToElement 函数到全局
    window.scrollToElement = scrollToElement;
});

