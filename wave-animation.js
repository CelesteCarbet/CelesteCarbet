// 动态波浪效果
function createWaveAnimation() {
    const canvas = document.createElement('canvas');
    const container = document.querySelector('[data-wave-container]');
    if (!container) return;
    
    container.style.position = 'relative';
    container.style.overflow = 'hidden';
    container.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    let width = container.offsetWidth;
    let height = 100;
    
    canvas.width = width;
    canvas.height = height;
    
    const waves = [
        { amplitude: 20, frequency: 0.01, speed: 0.02, color: 'rgba(100, 149, 237, 0.6)' },
        { amplitude: 15, frequency: 0.015, speed: 0.03, color: 'rgba(65, 105, 225, 0.4)' },
        { amplitude: 10, frequency: 0.02, speed: 0.04, color: 'rgba(30, 144, 255, 0.3)' }
    ];
    
    let time = 0;
    
    function animate() {
        ctx.clearRect(0, 0, width, height);
        
        waves.forEach((wave, index) => {
            ctx.beginPath();
            ctx.moveTo(0, height / 2);
            
            for (let x = 0; x < width; x++) {
                const y = height / 2 + 
                    Math.sin(x * wave.frequency + time * wave.speed) * wave.amplitude +
                    Math.cos(x * wave.frequency * 0.7 + time * wave.speed * 1.3) * wave.amplitude * 0.5;
                ctx.lineTo(x, y);
            }
            
            ctx.lineTo(width, height);
            ctx.lineTo(0, height);
            ctx.closePath();
            
            ctx.fillStyle = wave.color;
            ctx.fill();
        });
        
        time += 0.05;
        requestAnimationFrame(animate);
    }
    
    function handleResize() {
        width = container.offsetWidth;
        canvas.width = width;
    }
    
    window.addEventListener('resize', handleResize);
    animate();
}

// 初始化
document.addEventListener('DOMContentLoaded', createWaveAnimation);
