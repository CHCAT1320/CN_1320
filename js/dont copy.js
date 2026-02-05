
// 当文档加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  // 监听键盘事件
  document.addEventListener('keydown', function(event) {
    // 检查是否按下了 Ctrl+A
    if ((event.ctrlKey || event.metaKey) && event.key === 'a') {
      // 阻止默认行为
      event.preventDefault();
    }
  });
});
