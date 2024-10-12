import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import '../sass/StarDestroyer.scss';
import StarDestroyerExperience from "./StarDestroyerExperience";
import { useGlobalAudioPlayer, useAudioPlayer } from "react-use-audio-player";
import Loader from "../components/Loader";

export default function StarDestroyer(props) {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [isCountingDown, setIsCountingDown] = useState(false);
    const [shutdown, setShutdown] = useState(false);
    const [status, setStatus] = useState('');
    const [pixel, setPixel] = useState(0);
    const [isGlitching, setIsGlitching] = useState(false);

    const ericTexts = ['../audio/star/bravo.mp3', '../audio/star/satellite.mp3', '../audio/star/instruction.mp3'];
    const [songIndex, setSongIndex] = useState(0);

    const noisePlayer = useAudioPlayer();
    const transferPlayer = useAudioPlayer();
    const callingPlayer = useAudioPlayer();
    const lamentationPlayer = useAudioPlayer();
    const whiteNoisePlayer = useAudioPlayer();
    const ericPlayer = useAudioPlayer();
    const probPlayer = useAudioPlayer();

    useEffect(() => {
        ericPlayer.load(ericTexts[songIndex], {
            autoplay: true,
            onend: () => {
                if (songIndex < ericTexts.length - 1) {
                    setSongIndex((prevIndex) => prevIndex + 1);
                }
            }
        });
    }, [songIndex, ericPlayer.load]);

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
                        setShutdown(true);
                    }
                    return newProgress;
                });
            }, 1000); // Update every second
        }

        return () => clearInterval(interval);
    }, [isCountingDown]);

    useEffect(() => {
        if(loading === false) {
            noisePlayer.load('../audio/star/noise.mp3', 
            {
                autoplay: true,
                loop: true
            });
        }
    }, [loading]);

    useEffect(() => {
        
        if (progress === 10) {
            setStatus('Data transfer initiate...');
            transferPlayer.load('../audio/star/transfer.mp3', 
                {
                    autoplay: true,
                    loop: false,
                    initialVolume: 0.1
                });
        };
        if (progress === 20) {
            callingPlayer.load('../audio/star/prob.mp3',
                {
                    autoplay: true,
                    loop: false,
                    initialVolume: 0.3
                });
        }
        if (progress === 40) {
            callingPlayer.load('../audio/star/calling.mp3', 
                {
                    autoplay: true,
                    loop: false,
                    initialVolume: 1
                });
        }
        if (progress === 50) {
            setStatus('Loading transmission from Phobos...');
        }

        if (progress === 60) {
            setIsGlitching(true);
        }
        if (progress === 70) {
            setStatus('Transmission received');
            lamentationPlayer.load('../audio/star/lamentation.mp3', 
                {
                    autoplay: true,
                    loop: false
                });
                setPixel(10);
        };
        if (progress === 90) {
        };
        if (progress === 100) {
            lamentationPlayer.stop();
            transferPlayer.stop();
            noisePlayer.stop();
            setStatus('Transmission complete');
            setShutdown(true);
            whiteNoisePlayer.load('../audio/star/whitenoise.mp3', 
                {
                    autoplay: true,
                    loop: true
                });
        };
    }, [progress]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 7500); // 8 seconds delay

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading ? (
                <Loader />
            ) : ( 
                <>
                <Canvas
                    flat
                    camera={{
                        position: [0, 0, 10],
                        fov: 45,
                        near: 0.1,
                        far: 200
                    }}
                >
                    <StarDestroyerExperience glitch={isGlitching} pixel={pixel} />
                  
                </Canvas>

                <div className="starDestroyer__overlay">
                    <div className="starDestroyer__overlay__rules">Use Keyboard to manipulate StarDestroyer. Press [Enter] when target insight</div>
                    {isCountingDown &&
                        <div className="starDestroyer__overlay__progress">
                            <p>{status}</p>
                            <div className="starDestroyer__overlay__progress-bar" style={{ width: `${progress}%`, height: '100px', background: 'green' }}></div>
                        </div>
                    }
                    <img src="/project/starlink_light.png" alt="stardestroyer" className="starDestroyer__overlay__picture1" />
                    <img src="/logo.png" alt="stardestroyer" className="starDestroyer__overlay__picture2" />
                    {shutdown &&
                        <div className="starDestroyer__overlay__shutdown">
                            <p>Connection Lost</p>
                        </div>
                    }
                </div>
            </>
            )}
        </>
    );
}