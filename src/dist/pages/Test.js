"use strict";
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
const framer_motion_1 = require("framer-motion");
const DraggableCircleWithTether = ({ x, y, radius }) => {
    const [position, setPosition] = (0, react_1.useState)({ x, y });
    const [isDragging, setIsDragging] = (0, react_1.useState)(false);
    const handleMouseDown = () => setIsDragging(true);
    const handleMouseMove = (e) => {
        if (isDragging) {
            setPosition({ x: e.clientX, y: e.clientY });
        }
    };
    const handleMouseUp = () => setIsDragging(false);
    return (react_1.default.createElement("svg", { width: "100%", height: "400", onMouseMove: handleMouseMove, onMouseUp: handleMouseUp, onMouseLeave: handleMouseUp },
        react_1.default.createElement("line", { x1: x, y1: y, x2: position.x, y2: position.y, stroke: "black", strokeWidth: "2" }),
        react_1.default.createElement("circle", { cx: position.x, cy: position.y, r: radius, fill: "blue", onMouseDown: handleMouseDown, style: { cursor: 'grab' } })));
};
function Test() {
    const [resetTrigger, setResetTrigger] = (0, react_1.useState)(0);
    return (react_1.default.createElement("div", { className: "bodyCenter" },
        react_1.default.createElement("div", null,
            react_1.default.createElement("h1", null, "Test"),
            react_1.default.createElement("div", { style: { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', marginTop: '5rem' } },
                react_1.default.createElement(DraggableCircleWithTether, { x: 200, y: 10, radius: 25 }),
                react_1.default.createElement("div", { style: { display: 'flex', justifyContent: 'left', marginLeft: '4rem' } },
                    react_1.default.createElement(framer_motion_1.motion.div, { className: 'tetherCircle', style: { cursor: "grab",
                            width: 50,
                            height: 50,
                            // top: window.innerHeight / 3,
                        }, drag: true, 
                        // dragConstraints={{ top: 0, right: window.innerWidth, bottom: window.innerHeight, left: 0}}
                        dragSnapToOrigin: true, dragTransition: { bounceStiffness: 600, bounceDamping: 20 }, dragElastic: 0.5, whileTap: { cursor: "grabbing" } })),
                react_1.default.createElement("div", { style: { display: 'flex', justifyContent: 'right', marginRight: '4rem' } },
                    react_1.default.createElement(framer_motion_1.motion.div, { className: 'tetherCircle', style: { cursor: "grab",
                            width: 75,
                            height: 75,
                            // top: window.innerHeight / 2,
                        }, drag: true, 
                        // dragConstraints={{ top: 0, right: window.innerWidth, bottom: window.innerHeight, left: 0}}
                        dragSnapToOrigin: true, dragTransition: { bounceStiffness: 600, bounceDamping: 20 }, dragElastic: 0.5, whileTap: { cursor: "grabbing" } })),
                react_1.default.createElement("div", { style: { display: 'flex', justifyContent: 'center' } },
                    react_1.default.createElement(framer_motion_1.motion.div, { className: 'tetherCircle', style: { cursor: "grab",
                            // top:(window.innerHeight/3)*2
                        }, drag: true, 
                        // dragConstraints={{ top: 0, right: window.innerWidth, bottom: window.innerHeight, left: 0}}
                        dragSnapToOrigin: true, dragTransition: { bounceStiffness: 600, bounceDamping: 20 }, dragElastic: 0.5, whileTap: { cursor: "grabbing" } }))))));
}
