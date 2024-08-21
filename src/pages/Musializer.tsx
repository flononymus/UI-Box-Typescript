import React from 'react'
import {useState, useEffect, useRef} from "react"
import {motion, useAnimation, useDragControls} from "framer-motion"
import { Slider } from '../components/Slider'

export default function Musializer() {

    const [isPlaying, setIsPlaying] = useState(true)
    const [volume, setVolume] = useState(50)
    const [test, setTest] = useState(0)
    const [bass, setBass] = useState(false)
    const [audioData, setAudioData] = useState<Uint8Array>(new Uint8Array(0));

    const audioRef = useRef<HTMLAudioElement | null>(null);
    const analyserRef = useRef<AnalyserNode| null>(null);
    const audioContextRef = useRef<AudioContext | null>(null);

    const [bassIntensity, setBassIntensity] = useState(0);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const [resetTrigger, setResetTrigger] = useState(0);

    useEffect(() => {
      const darkmodeToggleButton = document.getElementById('darkmodeToggleButton');
      
      if (darkmodeToggleButton) {
          const handleThemeToggle = () => resetScene();
          darkmodeToggleButton.addEventListener('click', handleThemeToggle);
          
          return () => {
              darkmodeToggleButton.removeEventListener('click', handleThemeToggle);
          };
      }
      if (!darkmodeToggleButton) {
        console.log('darkmodeToggleButton not found')
      }
  }, []);

  useEffect(() => {
    const handleThemeToggle = () => resetScene();
    setTimeout(() => {
        const darkmodeToggleButton = document.getElementById('darkmodeToggleButton');
        if (darkmodeToggleButton) {
            darkmodeToggleButton.addEventListener('click', handleThemeToggle);
        }
    }, 1000);

    return () => {
        const darkmodeToggleButton = document.getElementById('darkmodeToggleButton');
        if (darkmodeToggleButton) {
            darkmodeToggleButton.removeEventListener('click', handleThemeToggle);
        }
    };
}, []);

    useEffect(() => {
       if (!audioRef.current) {
        audioRef.current = new Audio("./media/sounds/check1.mp3") 
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
        const source = audioContextRef.current.createMediaElementSource(audioRef.current);
        analyserRef.current = audioContextRef.current.createAnalyser();
        source.connect(analyserRef.current);
        analyserRef.current.connect(audioContextRef.current.destination);
        analyserRef.current.fftSize = 256; 
        const bufferLength = analyserRef.current.frequencyBinCount;
        setAudioData(new Uint8Array(bufferLength));
        }

        if (audioRef.current) {
            audioRef.current.volume = volume / 100;
          }

      document.addEventListener('keydown', handleKeyDown);
        
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, [volume, isPlaying]);


    useEffect(() => {

        // const darkmodeToggleButton = document.getElementById('darkmodeToggleButton');

        if (!canvasRef.current || !audioRef.current) return;

        const canvas = canvasRef.current 
        const ctx = canvas.getContext("2d", {willReadFrequently: true,}) as CanvasRenderingContext2D
        var particles: Particle[] = []
        let amount = 0
        let mouse = { x: 0, y: 0 }
        let radius = 0.5

        const color = [
            getComputedStyle(document.documentElement).getPropertyValue(
              "--particle-color"
            ),
          ];

        let ww = window.innerWidth;
        let wh = window.innerHeight;

        class Particle {
            x: number;
            y: number;
            dest: { x: number; y: number };
            r: number;
            vx: number;
            vy: number;
            accX: number;
            accY: number;
            friction: number;
            color: string[];
      
            constructor(x: number, y: number) {
              this.x = x;
              this.y = y;
              this.dest = {
                x: x,
                y: y,
              };
      
              this.r = 5;
      
              this.vx = 0;
              this.vy = 0;
      
              this.accX = 0;
              this.accY = 0;
              this.friction = 0.7;
      
              this.color = color;
            }
      
            render() {
              if (bass) {
                this.r = 10;
              } else {
                this.r = 5;
              }


              this.accX = (this.dest.x - this.x) / 100;
              this.accY = (this.dest.y - this.y) / 100;
              this.vx += this.accX;
              this.vy += this.accY;
              this.vx *= this.friction;
              this.vy *= this.friction;
      
              this.x += this.vx;
              this.y += this.vy;
      
              ctx.fillStyle = this.color[0];
              ctx.beginPath();
      
              ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      
              ctx.fill();
      
              let a = this.x - mouse.x;
              let b = this.y - mouse.y;
      
              let distance = Math.sqrt(a * a + b * b);
      
              if (distance < radius * 60) {
                this.accX = this.x - mouse.x;
                this.accY = this.y - mouse.y;
      
                this.vx += this.accX;
                this.vy += this.accY;
              }
              if (distance > radius * 250) {
                this.accX = (this.dest.x - this.x) / 10;
                this.accY = (this.dest.y - this.y) / 10;
                this.vx += this.accX;
                this.vy += this.accY;
              }
            }
          }
      
    function initScene() {
        ww = canvas.width = window.innerWidth;
        wh = canvas.height = window.innerHeight;
    
        const rectWidth= ww
        const rectHeight= wh /4
        const centerX = ww / 2;
        const centerY = (wh/4) * 3
        const particleSpacing = 25; 

        particles = [];
        for (let x = -rectWidth; x <= rectWidth; x+= particleSpacing) {
            for (let y = -rectHeight; y <= rectHeight; y+= particleSpacing) {
                particles.push(new Particle(centerX + x, centerY + y))
            }
        }
        amount = particles.length
    }
    const updateAndRender = () => {
        if (analyserRef.current) {
            const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
            analyserRef.current.getByteFrequencyData(dataArray);
            setAudioData(dataArray);

            const bassRange = dataArray.slice(0, 2);
            const intensity = bassRange.reduce((sum, value) => sum + value, 0);

            const bass = intensity > 509;
            setBass(bass);
            radius = bass ? 2 : 0.5;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((particle) => {
            particle.render();
        });
        requestAnimationFrame(updateAndRender);
    };

      const onMouseMove = (e: MouseEvent) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    };

    const onMouseDown = () => {
        radius = 2;
    };

    const onMouseUp = () => {
        radius = 0.5;
    };

    // const handleThemeToggle = () => {resetScene()}
    // if (darkmodeToggleButton) {
    //   darkmodeToggleButton.addEventListener('click', handleThemeToggle);
    // }

    // if (!darkmodeToggleButton) {
    //   console.log('not found')
    // }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("resize", initScene);


    initScene();
    requestAnimationFrame(updateAndRender);

    return () => {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mousedown", onMouseDown);
        window.removeEventListener("mouseup", onMouseUp);
        window.removeEventListener("resize", initScene);

            // if (darkmodeToggleButton) {
            //   darkmodeToggleButton.removeEventListener('click', handleThemeToggle);
            // }
    };
}, [resetTrigger]);


function resetScene() {
    setResetTrigger(prev => prev + 1);
    console.log('reset')
}


    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.code === 'Space') {
          event.preventDefault();
          handlePlayClick();
        }
      };

    function handlePlayClick() {
        setIsPlaying(!isPlaying);
        if (isPlaying) {
            if (audioRef.current) {
                audioRef.current.currentTime = 15
            }
            audioRef.current?.play()
        }
        else {
            audioRef.current?.pause()
        }
    }


    return(
        <div className="bodyCenter">
                <motion.h1>
                    Musializer
                </motion.h1>

                <div style={{display:"flex", flexDirection:'row', justifyContent:'center',alignItems: 'center'}}>                
                    <motion.button className="playButton" style={{display:'flex', justifyContent:'center', alignItems:'center'}} onMouseDown={handlePlayClick}
                    animate={{ scale: bass? 1.5 : 1 }}
                    transition={{type:"spring", duration: 0.8, stiffness: 50 }}
                    >
                        <span className="material-symbols-outlined" style={{fontSize: '50px'}}>
                        {isPlaying? "play_arrow" : "pause"} 
                        </span>
                    </motion.button>

                <div style={{display:'flex',flexDirection:'column', paddingLeft:'50px'}}>
                    <Slider value={volume} set={setVolume}>
                        Volume
                    </Slider>

                    <Slider value={bassIntensity} set={setBassIntensity}>
                        Intensity
                    </Slider>

                    <Slider value={test} set={setTest}>
                       Test 
                    </Slider>
                </div>
                </div>

                <div style={{margin:'10px'}} />


                <canvas
                    ref={canvasRef}
                    style={{
                        width: '100%',
                        height: '100%',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        overflow: "hidden",
                        zIndex: -10,
                    }}
                ></canvas>

        </div>
    )
}

