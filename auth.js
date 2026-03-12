const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.JWT_SECRET || 'demo-secret-key';

// 生成 JWT token
function generateToken(userId) {
  return jwt.sign({ userId }, SECRET_KEY, { expiresIn: '24h' });
}

// 验证 JWT token
function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    return null;
  }
}

// 认证中间件
function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({ error: '未提供认证 token' });
  }
  
  const decoded = verifyToken(token);
  if (!decoded) {
    return res.status(401).json({ error: 'Token 无效或已过期' });
  }
  
  req.userId = decoded.userId;
  next();
}

module.exports = { generateToken, verifyToken, authMiddleware };
