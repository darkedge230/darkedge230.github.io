














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
            media.controls = true;  // 视频控制
            media.autoplay = true;  // 自动播放
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









document.addEventListener("DOMContentLoaded", () => {
    let lastPlayedVideo = null; // 记录上一个播放的视频
    let secondLastPlayedVideo = null; // 记录上上一个播放的视频

    const videos = document.querySelectorAll('video'); // 获取页面中的所有视频元素

    videos.forEach(video => {
        video.addEventListener('play', function() {
            // 暂停上上一个播放的视频
            if (secondLastPlayedVideo && secondLastPlayedVideo !== video) {
                secondLastPlayedVideo.pause();
                console.log("暂停第二个视频:", secondLastPlayedVideo.currentSrc);
            }

            // 将上一个播放的视频设置为上上个
            secondLastPlayedVideo = lastPlayedVideo;

            // 更新当前播放的视频
            lastPlayedVideo = video;

            console.log("当前播放的视频:", video.currentSrc);
        });
    });
});
