// 1. 取得所有 tab 與內容區塊
const tabs = document.querySelectorAll('.japan-tours-list li');
const tabContents = document.querySelectorAll('.japan-tours-content');

// 2. 為每個 tab li 加上 click 事件
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const targetTab = tab.dataset.tab; // 取得點擊的 li 的 data-tab

    // 3. 切換 tab active 樣式
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // 4. 顯示對應的內容區塊
    tabContents.forEach(content => {
      if(content.dataset.tab === targetTab) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });

    // 5. 可選：除錯用
    console.log('目前選到的 tab:', targetTab);
  });
});
