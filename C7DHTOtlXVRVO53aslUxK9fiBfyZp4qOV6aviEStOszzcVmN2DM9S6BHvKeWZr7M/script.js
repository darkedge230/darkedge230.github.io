














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
    const containers = document.querySelectorAll('.image-containerr'); // 获取所有的 image-containerr 容器

    containers.forEach(container => {
        container.addEventListener('click', function(event) {
            if (event.target.tagName === 'IMG') {
                openPreview(event.target.src);
            }
        });
    });

    function openPreview(src) {
        // 创建预览层
        const preview = document.createElement('div');
        preview.className = 'preview-img';
        preview.style.position = 'fixed';
        preview.style.top = '0';
        preview.style.left = '0';
        preview.style.width = '100vw';
        preview.style.height = '100vh';
        preview.style.display = 'flex';
        preview.style.alignItems = 'center';
        preview.style.justifyContent = 'center';
        preview.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        preview.style.opacity = '0';  // 初始透明度为 0
        preview.style.transition = 'opacity 0.5s ease';  // 渐变效果
        preview.style.zIndex = '99999';  // 确保预览层处于最上层

        // 创建图片
        const img = document.createElement('img');
        img.src = src;
        img.style.maxWidth = '90%';
        img.style.maxHeight = '90%';
        img.style.opacity = '0';  // 图片初始透明度为 0
        img.style.transition = 'opacity 0.5s ease';  // 渐变效果
        img.style.zIndex = '100000';

        // 将图片添加到预览层中
        preview.appendChild(img);
        document.body.appendChild(preview);

        // 设置渐变显示效果
        setTimeout(() => {
            preview.style.opacity = '1';  // 使预览层逐渐显示
            img.style.opacity = '1';  // 使图片逐渐显示
        }, 10);  // 短暂延迟，确保元素已经插入 DOM

        // 关闭预览层（点击空白处）
        preview.addEventListener('click', function(event) {
            if (event.target !== img) {  // 确保点击的是背景，而不是图片
                // 开始渐变关闭效果
                preview.style.opacity = '0';  // 设置预览层渐变隐藏
                img.style.opacity = '0';  // 设置图片渐变隐藏

                // 延迟移除元素，等待渐变效果完成
                setTimeout(() => {
                    preview.remove();
                }, 500);  // 500ms 对应的是 `transition` 的持续时间
            }
        });
    }
});








