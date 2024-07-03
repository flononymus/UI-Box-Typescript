"use strict";
// https://codepen.io/steveeeie/details/zjYmjR
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Test;
const react_1 = __importStar(require("react"));
function Test() {
    const canvasRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const canvas = canvasRef.current;
        if (!canvas)
            return;
        const ctx = canvas.getContext('2d');
        if (!ctx)
            return;
        // Game objects
        const ball = {
            x: canvas.width / 2,
            y: canvas.height - 50,
            radius: 20,
            vx: 0,
            vy: 0
        };
        const hoop = {
            x: canvas.width - 100,
            y: 100,
            width: 100,
            height: 70
        };
        let isDragging = false;
        const gravity = 0.5;
        // Event listeners
        const handleMouseDown = (e) => {
            const rect = canvas.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            if (isPointInBall(mouseX, mouseY)) {
                isDragging = true;
            }
        };
        const handleMouseMove = (e) => {
            if (isDragging) {
                const rect = canvas.getBoundingClientRect();
                ball.x = e.clientX - rect.left;
                ball.y = e.clientY - rect.top;
            }
        };
        const handleMouseUp = (e) => {
            if (isDragging) {
                isDragging = false;
                const rect = canvas.getBoundingClientRect();
                const mouseX = e.clientX - rect.left;
                const mouseY = e.clientY - rect.top;
                ball.vx = (mouseX - ball.x) * 0.1;
                ball.vy = (mouseY - ball.y) * 0.1;
            }
        };
        canvas.addEventListener('mousedown', handleMouseDown);
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseup', handleMouseUp);
        // Helper functions
        const isPointInBall = (x, y) => {
            const dx = x - ball.x;
            const dy = y - ball.y;
            return dx * dx + dy * dy <= ball.radius * ball.radius;
        };
        const update = () => {
            if (!isDragging) {
                ball.x += ball.vx;
                ball.y += ball.vy;
                ball.vy += gravity;
                // Collision with walls
                if (ball.x - ball.radius < 0 || ball.x + ball.radius > canvas.width) {
                    ball.vx *= -0.8;
                }
                if (ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height) {
                    ball.vy *= -0.8;
                }
                // Simple hoop collision
                if (ball.x > hoop.x && ball.x < hoop.x + hoop.width &&
                    ball.y > hoop.y && ball.y < hoop.y + hoop.height) {
                    console.log("Score!");
                    resetBall();
                }
            }
        };
        const resetBall = () => {
            ball.x = canvas.width / 2;
            ball.y = canvas.height - 50;
            ball.vx = 0;
            ball.vy = 0;
        };
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // Draw hoop
            ctx.fillStyle = 'orange';
            ctx.fillRect(hoop.x, hoop.y, hoop.width, hoop.height);
            // Draw ball
            ctx.fillStyle = 'brown';
            ctx.beginPath();
            ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
            ctx.fill();
        };
        // Game loop
        const gameLoop = () => {
            update();
            draw();
            requestAnimationFrame(gameLoop);
        };
        gameLoop();
        // Cleanup
        return () => {
            canvas.removeEventListener('mousedown', handleMouseDown);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);
    return (react_1.default.createElement("div", { className: "bodyCenter" },
        react_1.default.createElement("div", null,
            react_1.default.createElement("h1", null, "Test"),
            react_1.default.createElement("canvas", { ref: canvasRef, width: 500, height: 300, style: { border: '1px solid black' } }))));
}
{ /* <div className="surface">
<div className="mock-browser">
<div className="chrome-tabs"
style={{margin: '9px'}}
>
<div className="chrome-tabs-content">
<div className="chrome-tab">
  <div className="chrome-tab-dividers"></div>
  <div className="chrome-tab-background">
  </div>
  <div className="chrome-tab-content">
    <div className="chrome-tab-favicon" ></div>
    <div className="chrome-tab-title">Google</div>
    <div className="chrome-tab-drag-handle"></div>
    <div className="chrome-tab-close"></div>
  </div>
</div>
<div className="chrome-tab"
// active
>
  <div className="chrome-tab-dividers"></div>
  <div className="chrome-tab-background">
  </div>
  <div className="chrome-tab-content">
    <div className="chrome-tab-favicon" ></div>
    <div className="chrome-tab-title">Facebook</div>
    <div className="chrome-tab-drag-handle"></div>
    <div className="chrome-tab-close"></div>
  </div>
</div>
</div>
<div className="chrome-tabs-bottom-bar"></div>

</div>
</div>
</div> */
}
