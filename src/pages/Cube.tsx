import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue, useTransform, animate} from "framer-motion";

export default function Cube() {
    const [isInside, setIsInside] = useState(false);
    const [isSwitched, setIsSwitched] = useState(false);

    const springConfig = { 
        stiffness: 150
    };
    const x = useSpring(200, springConfig)
    const y = useSpring(200, springConfig)

    const rotateX = useTransform(y, [0, 400], [45, -45]);
    const rotateY = useTransform(x, [0, 400], [-45, 45]);


//spinning experiments

const spinVelocityX = useMotionValue(0);
const spinVelocityY = useMotionValue(0);


// const handleMouseMove = (e: MouseEvent) => {
//     if (isSpinning) {
//         const startX = e.clientX
//         const startY = e.clientY
//         const deltaX = e.clientX - startX;
//         const deltaY = e.clientY - startY;
//         spinVelocityX.set(deltaX);
//         spinVelocityY.set(deltaY);
//         rotateX.set(rotateX.get()  + deltaY * 0.5)
//         rotateY.set(rotateY.get() + deltaX * 0.5)
//     }
// }

// const handleMouseUp = () => {

//     // rotateX.animate({
//     animate(rotateX, rotateX.get(), {
//         type: "inertia",
//         velocity: spinVelocityY.get() * 0.5,
//         power: 0.2,
//         timeConstant: 700,
//         onComplete: () => setIsSpinning(false)
//     });
//     // rotateY.animate({

//     animate(rotateY, rotateY.get(), {
//         type: "inertia",
//         velocity: -spinVelocityX.get() * 0.5,
//         power: 0.2,
//         timeConstant: 700,
//         onComplete: () => setIsSpinning(false)
//     });
// }


const handleSpin = (e:React.MouseEvent) => {
    if (isSwitched) {
        const startX = e.clientX
        const startY = e.clientY
        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;
        spinVelocityX.set(deltaX);
        spinVelocityY.set(deltaY);
        rotateX.set(rotateX.get()  + deltaY * 0.5)
        rotateY.set(rotateY.get() + deltaX * 0.5)
        console.log(e.clientX, e.clientY)
    }
}


const handleMouse = (e: React.MouseEvent) => {
        const rect = document.getElementById("cubeContainer")!.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        if (isSwitched) {
            console.log('test')
        }
        else {
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

function handleCubeSwitch() {
    setIsSwitched(!isSwitched)
    console.log('test')
}

    return (
        <div className="bodyCenter">
        <div>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'start', alignItems:'center'}}> 
            <h1>Cube</h1>

            <motion.button className="navbarButton" style={{backgroundColor:'rgba(0,0,0,0)'}} onMouseDown={handleCubeSwitch}>
                        <span className="material-symbols-outlined">
                            {isSwitched ? "hand_gesture" : "do_not_touch"}
                        </span>
            </motion.button>
            </div>

        <div style={{display:'flex', justifyContent:'center'}}
        >
            <motion.div className="cubeContainer" id="cubeContainer"
                style={{
                    // width: 500,
                    width: 400,
                    height: 400,
                    display: "flex",
                    placeItems: "center",
                    placeContent: "center",
                    borderRadius: 30,
                    // backgroundColor: "rgba(255, 255, 255, 0.05)",
                    perspective: 400
                }}
                onMouseDown={handleSpin}
                onMouseMove={handleMouse}
                onMouseLeave={handleMouseLeave}
            >

            <motion.div className='cube'
                style={{
                    rotateX,
                    rotateY
                    // rotateX: isSpinning ? rotateX : useTransform(y, [0, 400], [45, -45]),
                    // rotateY: isSpinning ? rotateY : useTransform(x, [0, 400], [-45, 45])
                }}
            />
        </motion.div>
        </div>

        </div>
        </div>
    );
}
