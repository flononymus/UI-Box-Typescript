import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

export default function Cube() {
    const x = useMotionValue(200);
    const y = useMotionValue(200);

    const [isInside, setIsInside] = useState(false);

    const springConfig = { damping: 20, stiffness: 300 };
    const resetX = useSpring(0, springConfig);
    const resetY = useSpring(0, springConfig);

    const rotateX = useTransform(y, [0, 400], [45, -45]);
    const rotateY = useTransform(x, [0, 400], [-45, 45]);

    function handleMouse(event: React.MouseEvent) {
        const rect = document.getElementById("cubeContainer")!.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        if (mouseX >= 0 && mouseX <= rect.width && mouseY >= 0 && mouseY <= rect.height) {
            setIsInside(true);
            x.set(mouseX);
            y.set(mouseY);
        } else {
            setIsInside(false);
        }
    }

    function resetRotation() {
        resetX.set(200); // Reset to initial x value
        resetY.set(200); // Reset to initial y value
    }

    function handleMouseLeave(e: React.MouseEvent) {
        setIsInside(false);
        resetRotation();
    }

    useEffect(() => {
        if (!isInside) {
            resetX.set(200); // Reset to initial x value
            resetY.set(200); // Reset to initial y value
        }
    }, [isInside, resetX, resetY]);

    return (
        <div className="bodyCenter">
            <div>
                <h1>Cube</h1>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <motion.div id="cubeContainer"
                        style={{
                            width: 400,
                            height: 400,
                            display: "flex",
                            placeItems: "center",
                            placeContent: "center",
                            borderRadius: 30,
                            backgroundColor: "rgba(255, 255, 255, 0.05)",
                            perspective: 400
                        }}
                        onMouseMove={handleMouse}
                        onMouseLeave={handleMouseLeave}
                    >
                        <motion.div className='cube'
                            style={{
                                rotateX,
                                rotateY
                            }}
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}