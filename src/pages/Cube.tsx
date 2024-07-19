import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue, useTransform, animate, transform} from "framer-motion";

export default function Cube() {
    const [isInside, setIsInside] = useState(false);
    // const [isSwitched, setIsSwitched] = useState(false);

    // const [isDragging, setIsDragging] = useState(false);
    // const [dragStart, setDragStart] = useState('');
    // const [dragEnd, setDragEnd] = useState('');


    const springConfig = { 
        stiffness: 150
    };
    const x = useSpring(200, springConfig)
    const y = useSpring(200, springConfig)

    const xClick = useSpring(200, springConfig)
    const yClick = useSpring(200, springConfig)

    const rotateX = useTransform(y, [0, 400], [45, -45]);
    const rotateY = useTransform(x, [0, 400], [-45, 45]);

    const spinVelocityX = useMotionValue(0);
    const spinVelocityY = useMotionValue(0);

    // const rotateXClick = useTransform(yClick, [0, 400], [180, -180]);
    // const rotateYClick = useTransform(xClick, [0, 400], [-180, 180]);


const handleMouse = (e: React.MouseEvent) => {
        const rect = document.getElementById("cubeContainer")!.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // if (!isSwitched) {
        if (mouseX >= 0 && mouseX <= rect.width && mouseY >= 0 && mouseY <= rect.height) {
            setIsInside(true);
            x.set(mouseX);
            y.set(mouseY);
        } 
        else {
            setIsInside(false);
        }
    // }
}

function handleMouseLeave(e:React.MouseEvent) {
        setIsInside(false)
        x.set(200)
        y.set(200)
}

// const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
//     setIsDragging(true);
//     setDragStart(e.currentTarget.id)
// };

function gridClick(event:React.MouseEvent<HTMLDivElement>) {
    console.log(event.currentTarget.id,)

    if(event.currentTarget.id === "top-center"){
        yClick.set(-400);
    }

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
                // onMouseDown={handleMouseDown}
                onMouseMove={handleMouse}
                onMouseLeave={handleMouseLeave}
            >

                <div className="section" data-section="0" id="top-left"
                onMouseDown={gridClick}
                /> 

                <div className="section" data-section="1" id="top-center"
                onMouseDown={gridClick}
                /> 

                <div className="section" data-section="2" id="top-right"
                onMouseDown={gridClick}
                /> 

                <div className="section" data-section="3" id="center-left"
                onMouseDown={gridClick}                
                />

                <div className="section" data-section="4" id="center-center"
                onMouseDown={gridClick}                
                /> 

                <div className="section" data-section="5" id="center-right"
                onMouseDown={gridClick}                
                />

                <div className="section" data-section="6" id="bottom-left"
                onMouseDown={gridClick}                
                /> 

                <div className="section" data-section="7" id="bottom-center"
                onMouseDown={gridClick}                
                /> 

                <div className="section" data-section="8" id="bottom-right"
                onMouseDown={gridClick}                
                /> 

            <motion.div className='cube'
                style={{
                    rotateX,
                    rotateY,
                    // rotateXClick,
                    // rotateYClick,
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
