//可变化的
const siteConfig = {
    pageTitle: "My blog",
    logoText: "ZQY's blog",
    welcomeMessage: "ISFP",
    quote: "I seek for pleasure.",
    quoteAuthor: " ",
    navLinks: [
        { text: "博客", url: "https://likey.us.kg/" },
        { text: "资源站", url: "https://v0v.us.kg/" },
        { text: "音乐", url: "https://kfcvme50.fyi/music.html" },
        { text: "视频与文案", url: "https://kfcvme50.fyi/" },
        { text: "图床", url: "https://imgbed.kfcvme50.fyi/" }
    ],
    footerLinks: [
        { text: "YouTube", url: "https://www.youtube.com" },
        { text: "Twitter", url: "https://www.twitter.com" },
        { text: "Email", url: "mailto:ll01@anche.no" }
    ]
};
// 等待所有动画完成后再执行
document.addEventListener('DOMContentLoaded', function() {
    // 基础设置
    document.title = siteConfig.pageTitle;
    
    // 等待logo动画完成(600ms延迟)
    setTimeout(function() {
        document.querySelector('.logo').textContent = siteConfig.logoText;
        document.querySelector('.welcome').textContent = siteConfig.welcomeMessage;
        document.querySelector('.quote').innerHTML = `"${siteConfig.quote}"<br>- ${siteConfig.quoteAuthor}`;
        
        // 时钟功能
        function updateTime() {
            const now = new Date();
            document.querySelector('.clock').textContent = 
                `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')}`;
        }

        function updateDateTime() {
            const days = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
            const now = new Date();
            document.querySelector('.date-time-weather').innerHTML = 
                `${now.getFullYear()}年${String(now.getMonth()+1).padStart(2,'0')}月${String(now.getDate()).padStart(2,'0')}日 ${days[now.getDay()]}`;
        }

        // 立即执行并设置定时器
        updateDateTime();
        setInterval(updateTime, 1000);
        updateTime(); // 立即显示时间

        // 导航按钮
        const navContainer = document.querySelector('.nav-buttons');
        siteConfig.navLinks.forEach(link => {
            const anchor = document.createElement('a');
            anchor.href = link.url;
            anchor.textContent = link.text;
            anchor.target = "_blank";
            navContainer.appendChild(anchor);
        });

        // 页脚链接
        const footerContainer = document.querySelector('.footer');
        siteConfig.footerLinks.forEach(link => {
            const anchor = document.createElement('a');
            anchor.href = link.url;
            anchor.textContent = link.text;
            anchor.target = "_blank";
            footerContainer.appendChild(anchor);
        });
    }, 600); // 等待所有入场动画完成
});
