import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue, useTransform, animate, transform} from "framer-motion";

export default function Cube() {
    const [isInside, setIsInside] = useState(false);
    const [isSwitched, setIsSwitched] = useState(false);
    const [isSpinning, setIsSpinning] = useState(false);

    const springConfig = { 
        stiffness: 150
    };
    const x = useSpring(200, springConfig)
    const y = useSpring(200, springConfig)

    const rotateX = useTransform(y, [0, 400], [45, -45]);
    const rotateY = useTransform(x, [0, 400], [-45, 45]);

const handleMouseDown = (e: React.MouseEvent) => {
    console.log('test')
};


const handleMouse = (e: React.MouseEvent) => {
        const rect = document.getElementById("cubeContainer")!.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        if (!isSwitched) {
        if (mouseX >= 0 && mouseX <= rect.width && mouseY >= 0 && mouseY <= rect.height) {
            setIsInside(true);
            x.set(mouseX);
            y.set(mouseY);
        } 
        else {
            setIsInside(false);
        }
    }
}

function handleMouseLeave(e:React.MouseEvent) {
        setIsInside(false)
        x.set(200)
        y.set(200)
}


    return (
        <div className="bodyCenter">
        <div>
            <h1>Cube</h1>

        <div style={{display:'flex', justifyContent:'center'}}
        >
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
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouse}
                onMouseLeave={handleMouseLeave}
            >
                <div className="section" data-section="0" />
                <div className="section" data-section="1" />
                <div className="section" data-section="2" />
                <div className="section" data-section="3" />
                <div className="section" data-section="4" />
                <div className="section" data-section="5" />
                <div className="section" data-section="6" />
                <div className="section" data-section="7" />
                <div className="section" data-section="8" />

            <motion.div className='cube'
                style={{
                    rotateX,
                    rotateY,
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
