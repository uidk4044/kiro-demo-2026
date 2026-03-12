const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = "sk-1234567890abcdef"; // 故意添加一个硬编码的密钥

// 静态文件服务
app.use(express.static('public'));

// API 路由
app.get('/api/status', (req, res) => {
  res.json({
    status: 'running',
    message: 'Kiro AI Demo App is working!',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/features', (req, res) => {
  res.json({
    features: [
      'GitHub 集成',
      '自动化工作流',
      'MCP 协议支持',
      '智能代码生成'
    ]
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
