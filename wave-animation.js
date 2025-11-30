/* 欢迎动画 */
.welcome-animation {
  text-align: center;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  margin: 20px 0;
  position: relative;
  overflow: hidden;
}

.typing-demo {
  animation: typing 2s steps(22), blink .5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
  font-size: 2em;
  color: white;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blink {
  50% { border-color: transparent }
}

/* 卡片悬停效果 */
.stat-card {
  transition: all 0.3s ease;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

/* 技术栈图标动画 */
.tech-icon {
  display: inline-block;
  transition: all 0.3s ease;
  margin: 5px;
}

.tech-icon:hover {
  transform: scale(1.2) rotate(5deg);
}
