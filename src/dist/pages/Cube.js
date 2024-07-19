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
exports.default = Cube;
const react_1 = __importStar(require("react"));
const framer_motion_1 = require("framer-motion");
function Cube() {
    const [isInside, setIsInside] = (0, react_1.useState)(false);
    const springConfig = { stiffness: 150 };
    const x = (0, framer_motion_1.useSpring)(200, springConfig);
    const y = (0, framer_motion_1.useSpring)(200, springConfig);
    const rotateX = (0, framer_motion_1.useMotionValue)(0);
    const rotateY = (0, framer_motion_1.useMotionValue)(0);
    const tiltX = (0, framer_motion_1.useTransform)(y, [0, 400], [45, -45]);
    const tiltY = (0, framer_motion_1.useTransform)(x, [0, 400], [-45, 45]);
    // const compositeRotateX = useTransform([rotateX, tiltX], ([rx, tx]) => rx + tx);
    // const compositeRotateY = useTransform([rotateY, tiltY], ([ry, ty]) => ry + ty);
    const compositeRotateX = (0, framer_motion_1.useTransform)(() => rotateX.get() + tiltX.get());
    const compositeRotateY = (0, framer_motion_1.useTransform)(() => rotateY.get() + tiltY.get());
    const handleMouse = (e) => {
        const rect = document.getElementById("cubeContainer").getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        if (mouseX >= 0 && mouseX <= rect.width && mouseY >= 0 && mouseY <= rect.height) {
            setIsInside(true);
            x.set(mouseX);
            y.set(mouseY);
        }
        else {
            setIsInside(false);
        }
    };
    function handleMouseLeave() {
        setIsInside(false);
        x.set(200);
        y.set(200);
    }
    function gridClick(event) {
        const id = event.currentTarget.id;
        // let newRotateX = rotateX.get();
        // let newRotateY = rotateY.get();
        let newRotateX = 0;
        let newRotateY = 0;
        switch (id) {
            case "top-center":
                newRotateX += 180;
                break;
            case "bottom-center":
                newRotateX -= 180;
                break;
            case "center-left":
                newRotateY -= 180;
                break;
            case "center-right":
                newRotateY += 180;
                break;
            case "top-left":
                newRotateX += 180;
                newRotateY -= 180;
                break;
            case "top-right":
                newRotateX -= 180;
                newRotateY -= 180;
                break;
            case "bottom-left":
                newRotateX += 180;
                newRotateY += 180;
                break;
            case "bottom-right":
                newRotateX += 180;
                newRotateY -= 180;
                break;
        }
        (0, framer_motion_1.animate)(rotateX, newRotateX, { type: "spring", stiffness: 100, damping: 20, duration: 50 });
        (0, framer_motion_1.animate)(rotateY, newRotateY, { type: "spring", stiffness: 100, damping: 20, duration: 50 });
        // animate(rotateX, newRotateX);
        // animate(rotateY, newRotateY);
    }
    return (react_1.default.createElement("div", { className: "bodyCenter" },
        react_1.default.createElement("div", null,
            react_1.default.createElement("h1", null, "Cube"),
            react_1.default.createElement("div", { style: { display: 'flex', justifyContent: 'center' } },
                react_1.default.createElement(framer_motion_1.motion.div, { className: "cubeContainer", id: "cubeContainer", style: {
                        width: 400,
                        height: 400,
                        display: "grid",
                        placeItems: "center",
                        placeContent: "center",
                        borderRadius: 30,
                        perspective: 400,
                        position: 'relative'
                    }, onMouseMove: handleMouse, onMouseLeave: handleMouseLeave },
                    ["top-left", "top-center", "top-right", "center-left", "center-center", "center-right", "bottom-left", "bottom-center", "bottom-right"].map((id, index) => (react_1.default.createElement("div", { key: id, className: "section", "data-section": index, id: id, onMouseDown: gridClick }))),
                    react_1.default.createElement(framer_motion_1.motion.div, { className: 'cube', style: {
                            // rotateX: rotateX,
                            // rotateY: rotateY,
                            // x: tiltY,
                            // y: tiltX,
                            // position:'absolute',
                            // transform:"translate(-50%,-50%)"
                            rotateX: compositeRotateX,
                            rotateY: compositeRotateY,
                            // x: tiltY,
                            // y: tiltX,
                            position: 'absolute',
                            transform: "translate(-50%,-50%)"
                        }, whileTap: { scale: 0.8 } }))))));
}
