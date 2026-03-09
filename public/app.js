// 获取系统状态
async function fetchStatus() {
  try {
    const response = await fetch('/api/status');
    const data = await response.json();
    document.getElementById('status').innerHTML = `
      <h2>系统状态</h2>
      <p>✅ ${data.message}</p>
      <p>⏰ ${new Date(data.timestamp).toLocaleString('zh-CN')}</p>
    `;
  } catch (error) {
    document.getElementById('status').innerHTML = `
      <h2>系统状态</h2>
      <p>❌ 无法连接到服务器</p>
    `;
  }
}

// 获取功能列表
async function fetchFeatures() {
  try {
    const response = await fetch('/api/features');
    const data = await response.json();
    const list = document.getElementById('feature-list');
    list.innerHTML = data.features.map(f => `<li>✨ ${f}</li>`).join('');
  } catch (error) {
    document.getElementById('feature-list').innerHTML = '<li>❌ 加载失败</li>';
  }
}

// 页面加载时执行
fetchStatus();
fetchFeatures();

// 每30秒更新一次状态
setInterval(fetchStatus, 30000);