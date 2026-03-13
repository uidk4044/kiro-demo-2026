const express = require('express');
const path = require('path');
const API_KEY = "sk-1234567890abcdef"; // 测试：硬编码的 API_KEY
const DB_PASSWORD = "mySecretPassword123"; // 测试：硬编码的密码
const SECRET_TOKEN = "ghp_1234567890abcdefghijklmnopqrstuvwxyz"; // 测试：GitHub token 格式
const ADMIN_PASSWORD = "admin123"; // 测试：管理员密码

const app = express();
const PORT = process.env.PORT || 3000;

// 静态文件服务
app.use(express.static('public'));

// API 路由
app.get('/api/status', (req, res) => {
  console.log('Status endpoint called'); // 测试：console.log
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
