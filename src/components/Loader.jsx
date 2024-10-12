import React, { useEffect, useState } from 'react';
import '../sass/composent/Loader.scss';

function Loader() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1.25; // 100 / 8 seconds = 12.5 steps per second
            });
        }, 100); // Update every 100ms

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="loader">
            <div className="loader__bar" style={{ width: `${progress}%` }}></div>
            <p className="loader__text">{progress.toFixed(2)}% loaded</p>
        </div>
    );
}

export default Loader;