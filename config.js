// 可配置的站点设置
const siteConfig = {
    pageTitle: "My blog",
    logoText: "ZQY's blog",
    welcomeMessage: "你怎么知道我是ISFP",
    quote: "因为我懒",
    navLinks: [
        { text: "博客", url: "https://1999kiera1999.github.io/Personal-page/" },
        { text: "云盘", url: "#" },
        { text: "相册", url: "#" },
        { text: "音乐", url: "https://i.y.qq.com/n2/m/share/details/taoge.html?id=8441156017" }
    ],
    // 新增footer按钮配置
    footerButtons: [
        { text: "联系我", action: "contact" },
        { text: "订阅", action: "subscribe" },
        { text: "帮助", action: "help" },
        { text: "反馈", action: "feedback" }
    ]
};

// 新增footer按钮点击处理函数
function handleFooterButtonClick(action) {
    switch(action) {
        case 'contact':
            // 处理联系我逻辑
            console.log('联系我按钮被点击');
            break;
        case 'subscribe':
            // 处理订阅逻辑
            console.log('订阅按钮被点击');
            break;
        case 'help':
            // 处理帮助逻辑
            console.log('帮助按钮被点击');
            break;
        case 'feedback':
            // 处理反馈逻辑
            console.log('反馈按钮被点击');
            break;
    }
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 设置页面标题
    document.title = siteConfig.pageTitle;
    
    // 等待logo动画完成(600ms延迟)
    setTimeout(function() {
        // 更新文本内容
        document.getElementById('logo').textContent = siteConfig.logoText;
        document.getElementById('welcome').textContent = siteConfig.welcomeMessage;
        document.getElementById('quote').textContent = `"${siteConfig.quote}"`;
        
        // 时钟功能
        function updateClock() {
            const now = new Date();
            const clockElement = document.getElementById('clock');
            const dateElement = document.getElementById('date');
            
            // 更新时间
            clockElement.textContent = 
                `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')}`;
            
            // 更新日期
            const days = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
            dateElement.textContent = 
                `${now.getFullYear()}年${String(now.getMonth()+1).padStart(2,'0')}月${String(now.getDate()).padStart(2,'0')}日 ${days[now.getDay()]}`;
        }

        // 立即执行并设置定时器
        updateClock();
        setInterval(updateClock, 1000);

        // 创建并配置footer按钮
        const footerContainer = document.getElementById('footer');
        siteConfig.footerButtons.forEach(button => {
            const btn = document.createElement('button');
            btn.className = 'footer-btn';
            btn.textContent = button.text;
            
            // 添加点击事件处理
            btn.addEventListener('click', function() {
                handleFooterButtonClick(button.action);
            });
            
            footerContainer.querySelector('.footer-buttons').appendChild(btn);
        });

        // 卡片悬停效果
        document.querySelectorAll('.site-card').forEach((card, index) => {
            // 为卡片添加点击事件（保留原有功能）
            if(siteConfig.navLinks[index] && siteConfig.navLinks[index].url !== '#') {
                card.addEventListener('click', function() {
                    window.open(siteConfig.navLinks[index].url);
                });
            }
            
            // 悬停效果
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
                this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.3)';
            });
            card.addEventListener('mouseleave', function() {
                this.style.transform = '';
                this.style.boxShadow = '';
            });
        });
    }, 600); // 等待所有入场动画完成
});
