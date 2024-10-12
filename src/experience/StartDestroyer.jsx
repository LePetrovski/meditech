import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import '../sass/StarDestroyer.scss';
import StarDestroyerExperience from "./StarDestroyerExperience";

export default function StarDestroyer(props) {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [isCountingDown, setIsCountingDown] = useState(false);
    const [status, setStatus] = useState('');
    const [isGlitching, setIsGlitching] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Enter' && !isCountingDown) {
                setIsCountingDown(true);
                setProgress(0);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isCountingDown]);

    useEffect(() => {
        let interval;
        if (isCountingDown) {
            interval = setInterval(() => {
                setProgress((prev) => {
                    const newProgress = prev + 5; // Increment by 5% every second
                    if (newProgress >= 100) {
                        clearInterval(interval);
                        setIsCountingDown(false);
                    }
                    return newProgress;
                });
            }, 1000); // Update every second
        }

        return () => clearInterval(interval);
    }, [isCountingDown]);

    useEffect(() => {
        
        if (progress === 10) {
            setStatus('Transmission in progress...');
        };
        if (progress === 50) console.log('Progress: 50%');
        if (progress === 60) console.log('Progress: 60%');
        if (progress === 80) console.log('Progress: 80%');
        if (progress === 90) console.log('Progress: 90%');
        if (progress === 100) {
            setStatus('Transmission complete');
        };
    }, [progress]);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setLoading(false);
    //     }, 7500); // 8 seconds delay

    //     return () => clearTimeout(timer);
    // }, []);

    return (
        <>
            {/* {loading ? (
                <Loader />
            ) : ( */}
                <Canvas
                    flat
                    camera={{
                        position: [0, 0, 10],
                        fov: 45,
                        near: 0.1,
                        far: 200
                    }}
                >
                    <StarDestroyerExperience />
                  
                </Canvas>
                {/* il faut mettre la div en absolute par dessus et on appuie sur Entree pour lancer le compte à rebours */}
                <div className="starDestroyer__overlay">
                    <div className="starDestroyer__overlay__rules">Use Keyboard to manipulate StarDestroyer. Press [Enter] when target insight</div>
                    <div className="starDestroyer__overlay__progress">
                        <p>{status}</p>
                        <div className="starDestroyer__overlay__progress-bar" style={{ width: `${progress}%`, height: '100px', background: 'green' }}></div>
                    </div>
                    <img src="/project/starlink_light.png" alt="stardestroyer" className="starDestroyer__overlay__picture1" />
                    <img src="/logo.png" alt="stardestroyer" className="starDestroyer__overlay__picture2" />
                </div>
            {/* )} */}
        </>
    );
}