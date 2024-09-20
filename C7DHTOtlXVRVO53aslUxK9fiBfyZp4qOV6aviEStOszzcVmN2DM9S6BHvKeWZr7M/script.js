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




        // 定义图标文件路径数组
        let iconFolderPath = "./img/gif/"; // 图标所在文件夹路径
        let icons = [
"eToSsNm65xFUUJSLsz6Lm4_10000.png",
"eToSsNm65xFUUJSLsz6Lm4_10001.png",
"eToSsNm65xFUUJSLsz6Lm4_10002.png",
"eToSsNm65xFUUJSLsz6Lm4_10003.png",
"eToSsNm65xFUUJSLsz6Lm4_10004.png",
"eToSsNm65xFUUJSLsz6Lm4_10005.png",
"eToSsNm65xFUUJSLsz6Lm4_10006.png",
"eToSsNm65xFUUJSLsz6Lm4_10007.png",
"eToSsNm65xFUUJSLsz6Lm4_10008.png",
"eToSsNm65xFUUJSLsz6Lm4_10009.png",
"eToSsNm65xFUUJSLsz6Lm4_10010.png",
"eToSsNm65xFUUJSLsz6Lm4_10011.png",
"eToSsNm65xFUUJSLsz6Lm4_10012.png",
"eToSsNm65xFUUJSLsz6Lm4_10013.png",
"eToSsNm65xFUUJSLsz6Lm4_10014.png",
"eToSsNm65xFUUJSLsz6Lm4_10015.png",
"eToSsNm65xFUUJSLsz6Lm4_10016.png",
"eToSsNm65xFUUJSLsz6Lm4_10017.png",
"eToSsNm65xFUUJSLsz6Lm4_10018.png",
"eToSsNm65xFUUJSLsz6Lm4_10019.png",
"eToSsNm65xFUUJSLsz6Lm4_10020.png",
"eToSsNm65xFUUJSLsz6Lm4_10021.png",
"eToSsNm65xFUUJSLsz6Lm4_10022.png",
"eToSsNm65xFUUJSLsz6Lm4_10023.png",
"eToSsNm65xFUUJSLsz6Lm4_10024.png",
"eToSsNm65xFUUJSLsz6Lm4_10025.png",
"eToSsNm65xFUUJSLsz6Lm4_10026.png",
"eToSsNm65xFUUJSLsz6Lm4_10027.png",
"eToSsNm65xFUUJSLsz6Lm4_10028.png",
"eToSsNm65xFUUJSLsz6Lm4_10029.png",
"eToSsNm65xFUUJSLsz6Lm4_10030.png",
"eToSsNm65xFUUJSLsz6Lm4_10031.png",
"eToSsNm65xFUUJSLsz6Lm4_10032.png",
"eToSsNm65xFUUJSLsz6Lm4_10033.png",
"eToSsNm65xFUUJSLsz6Lm4_10034.png",
"eToSsNm65xFUUJSLsz6Lm4_10035.png",
"eToSsNm65xFUUJSLsz6Lm4_10036.png",
"eToSsNm65xFUUJSLsz6Lm4_10037.png",
"eToSsNm65xFUUJSLsz6Lm4_10038.png",
"eToSsNm65xFUUJSLsz6Lm4_10039.png",
"eToSsNm65xFUUJSLsz6Lm4_10040.png",
"eToSsNm65xFUUJSLsz6Lm4_10041.png",
"eToSsNm65xFUUJSLsz6Lm4_10042.png",
"eToSsNm65xFUUJSLsz6Lm4_10043.png",
"eToSsNm65xFUUJSLsz6Lm4_10044.png",
"eToSsNm65xFUUJSLsz6Lm4_10045.png",
"eToSsNm65xFUUJSLsz6Lm4_10046.png",
"eToSsNm65xFUUJSLsz6Lm4_10047.png",
"eToSsNm65xFUUJSLsz6Lm4_10048.png",
"eToSsNm65xFUUJSLsz6Lm4_10049.png",
"eToSsNm65xFUUJSLsz6Lm4_10050.png",
"eToSsNm65xFUUJSLsz6Lm4_10051.png",
"eToSsNm65xFUUJSLsz6Lm4_10052.png",
"eToSsNm65xFUUJSLsz6Lm4_10053.png",
"eToSsNm65xFUUJSLsz6Lm4_10054.png",
"eToSsNm65xFUUJSLsz6Lm4_10055.png",
"eToSsNm65xFUUJSLsz6Lm4_10056.png",
"eToSsNm65xFUUJSLsz6Lm4_10057.png",
"eToSsNm65xFUUJSLsz6Lm4_10058.png",
"eToSsNm65xFUUJSLsz6Lm4_10059.png",
"eToSsNm65xFUUJSLsz6Lm4_10060.png",
"eToSsNm65xFUUJSLsz6Lm4_10061.png",
"eToSsNm65xFUUJSLsz6Lm4_10062.png",
"eToSsNm65xFUUJSLsz6Lm4_10063.png",
"eToSsNm65xFUUJSLsz6Lm4_10064.png",
"eToSsNm65xFUUJSLsz6Lm4_10065.png",
"eToSsNm65xFUUJSLsz6Lm4_10066.png",
"eToSsNm65xFUUJSLsz6Lm4_10067.png",
"eToSsNm65xFUUJSLsz6Lm4_10068.png",
"eToSsNm65xFUUJSLsz6Lm4_10069.png",
"eToSsNm65xFUUJSLsz6Lm4_10070.png",
"eToSsNm65xFUUJSLsz6Lm4_10071.png",
"eToSsNm65xFUUJSLsz6Lm4_10072.png",
"eToSsNm65xFUUJSLsz6Lm4_10073.png",
"eToSsNm65xFUUJSLsz6Lm4_10074.png",
"eToSsNm65xFUUJSLsz6Lm4_10075.png",
"eToSsNm65xFUUJSLsz6Lm4_10076.png",
"eToSsNm65xFUUJSLsz6Lm4_10077.png",
"eToSsNm65xFUUJSLsz6Lm4_10078.png",
"eToSsNm65xFUUJSLsz6Lm4_10079.png",
"eToSsNm65xFUUJSLsz6Lm4_10080.png",
"eToSsNm65xFUUJSLsz6Lm4_10081.png",
"eToSsNm65xFUUJSLsz6Lm4_10082.png",
"eToSsNm65xFUUJSLsz6Lm4_10083.png",
"eToSsNm65xFUUJSLsz6Lm4_10084.png",
"eToSsNm65xFUUJSLsz6Lm4_10085.png",
"eToSsNm65xFUUJSLsz6Lm4_10086.png",
"eToSsNm65xFUUJSLsz6Lm4_10087.png",
"eToSsNm65xFUUJSLsz6Lm4_10088.png",
"eToSsNm65xFUUJSLsz6Lm4_10089.png",
"eToSsNm65xFUUJSLsz6Lm4_10090.png",
"eToSsNm65xFUUJSLsz6Lm4_10091.png",
"eToSsNm65xFUUJSLsz6Lm4_10092.png",
"eToSsNm65xFUUJSLsz6Lm4_10093.png",
"eToSsNm65xFUUJSLsz6Lm4_10094.png",
"eToSsNm65xFUUJSLsz6Lm4_10095.png",
"eToSsNm65xFUUJSLsz6Lm4_10096.png",
"eToSsNm65xFUUJSLsz6Lm4_10097.png",
"eToSsNm65xFUUJSLsz6Lm4_10098.png",
"eToSsNm65xFUUJSLsz6Lm4_10099.png",
"eToSsNm65xFUUJSLsz6Lm4_10100.png",
"eToSsNm65xFUUJSLsz6Lm4_10101.png",
"eToSsNm65xFUUJSLsz6Lm4_10102.png",
"eToSsNm65xFUUJSLsz6Lm4_10103.png",
"eToSsNm65xFUUJSLsz6Lm4_10104.png",
"eToSsNm65xFUUJSLsz6Lm4_10105.png",
"eToSsNm65xFUUJSLsz6Lm4_10106.png",
"eToSsNm65xFUUJSLsz6Lm4_10107.png",
"eToSsNm65xFUUJSLsz6Lm4_10108.png",
"eToSsNm65xFUUJSLsz6Lm4_10109.png",
"eToSsNm65xFUUJSLsz6Lm4_10110.png"
        ];

        let index = 0;

        // 定时器，每隔500毫秒更换一次图标
        setInterval(function() {
            // 通过 ID 查找 favicon 标签并更新 href 属性
            let favicon = document.getElementById("favicon");
            favicon.href = iconFolderPath + icons[index];
            
            // 切换到下一个图标
            index = (index + 1) % icons.length;
        }, 33); // 33毫秒更新一次
