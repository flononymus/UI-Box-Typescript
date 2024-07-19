import React, { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue, useTransform, animate, transform } from "framer-motion";

export default function Cube() {
    const [isInside, setIsInside] = useState(false);

    const springConfig = { stiffness: 150 };
    const x = useSpring(200, springConfig);
    const y = useSpring(200, springConfig);

    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);

    const tiltX = useTransform(y, [0, 400], [45, -45]);
    const tiltY = useTransform(x, [0, 400], [-45, 45]);

    // const compositeRotateX = useTransform([rotateX, tiltX], ([rx, tx]) => rx + tx);
    // const compositeRotateY = useTransform([rotateY, tiltY], ([ry, ty]) => ry + ty);

    const compositeRotateX = useTransform(() => rotateX.get() + tiltX.get());
    const compositeRotateY = useTransform(() => rotateY.get() + tiltY.get());

    const handleMouse = (e: React.MouseEvent) => {
        const rect = document.getElementById("cubeContainer")!.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        if (mouseX >= 0 && mouseX <= rect.width && mouseY >= 0 && mouseY <= rect.height) {
            setIsInside(true);
            x.set(mouseX);
            y.set(mouseY);
        } else {
            setIsInside(false);
        }
    }

    function handleMouseLeave() {
        setIsInside(false);
        x.set(200);
        y.set(200);
    }

    function gridClick(event:React.MouseEvent<HTMLDivElement>) {
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

        animate(rotateX, newRotateX, { type: "spring", stiffness: 100, damping: 20, duration:50 });
        animate(rotateY, newRotateY, { type: "spring", stiffness: 100, damping: 20, duration:50 });
        // animate(rotateX, newRotateX);
        // animate(rotateY, newRotateY);
    }

    return (
        <div className="bodyCenter">
            <div>
                <h1>Cube</h1>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <motion.div className="cubeContainer" id="cubeContainer"
                        style={{
                            width: 400,
                            height: 400,
                            display: "grid",
                            placeItems: "center",
                            placeContent: "center",
                            borderRadius: 30,
                            perspective: 400,
                            position: 'relative' 
                        }}
                        onMouseMove={handleMouse}
                        onMouseLeave={handleMouseLeave}
                    >
                        {/* Grid sections */}
                        {["top-left", "top-center", "top-right", "center-left", "center-center", "center-right", "bottom-left", "bottom-center", "bottom-right"].map((id, index) => (
                            <div key={id} className="section" data-section={index} id={id} onMouseDown={gridClick} />
                        ))}

                        <motion.div className='cube'
                            style={{
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
                                position:'absolute',
                                transform:"translate(-50%,-50%)"
                            }}
                            whileTap={{scale:0.8}}
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}