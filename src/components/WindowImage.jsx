import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import '../sass/composent/WindowImage.scss';
import { useEffect, useState } from 'react';

gsap.registerPlugin(Draggable);

export default function WindowImage(props) {
    const { name, source, className } = props;
    const [maxHeight, setMaxHeight] = useState('1000px');

    useEffect(() => {
        Draggable.create(`#${className}`, {
            type: "x,y",
            bounds: ".fpProducts__content",
            inertia: true,
            cursor: "grab",
        });
    }, [className]);

    const toggleHeight = () => {
        setMaxHeight(prevHeight => (prevHeight === '0px' ? '1000px' : '0px'));
    };

    return (
        <div className={`window ${className}`} id={className}>
            <div className="window__head">
                <div className='window__head__source'>{source}</div>
                <div className='window__head__close' onClick={toggleHeight}>/\ \/</div>
            </div>
            <div className="window__body" style={{ maxHeight, overflow: 'hidden', transition: 'max-height 0.5s ease' }}>
                <img src={`window/${source}`} alt={name} />
            </div>
        </div>
    );
}