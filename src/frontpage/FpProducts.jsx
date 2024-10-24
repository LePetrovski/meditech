import { TypeAnimation } from "react-type-animation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../sass/frontpage/fpProducts.scss";
import { useEffect, useState } from "react";
import WindowImage from "../components/WindowImage";

gsap.registerPlugin(ScrollTrigger);

export default function FpProducts() {

    const [ startCom, setStartCom ] = useState(0);
    const [ window1, setWindow1 ] = useState(false);

    useEffect(() => {   
        ScrollTrigger.create({
            trigger: '.fpProducts',
            start: 'center center',
            end: 'center center',
            markers: false,
            once: true,
            onUpdate: (self) => {
                const progress = self.progress;
                setStartCom(progress);
            }
        });
    }, []);

    const com = startCom == 1 ? true : false;

    return (
        <section className="fpProducts">
            <audio id="audio1" autoPlay={false} loop={false}>
                <source src="./audio/glitch.mp3" type="audio/mp3"/>
            </audio>
            <audio id="audio2" autoPlay={false} loop={false}>
                <source src="./audio/error.mp3" type="audio/mp3"/>
            </audio>
            <audio id="audio3" autoPlay={false} loop={false}>
                <source src="./audio/beetle1.mp3" type="audio/mp3"/>
            </audio>
            <div className="container">
                <div className="fpProducts__content">
                    <div className="fpProducts__content__chat">
                    {window1 &&
                        <WindowImage className="window1" name="error" source="error.jpg" />
                    }

                    {com &&
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed once, initially
                                'HELP',
                                1000,
                                '[Browser settings : FR-fr]',
                                600,
                                'AU SECOURS !',
                                500,
                                'STOP',
                                600,
                                'Arrêtez de scroller',
                                600,
                                'patientez un instant',
                                600,
                                '[user OS : Windows 11]',
                                300,
                                'Je vais essayer un truc...',
                                () => {
                                    const audio = new SpeechSynthesisUtterance('Vous m\'entendez ? mouai... pas terrible. Je vais essayer autres choses');
                                    window.speechSynthesis.speak(audio);
                                },
                                5500,
                                'Juste un instant...',
                                () => {
                                    const audio1 = document.getElementById('audio1');
                                    audio1.play();
                                },
                                5500,
                                'oups, fausse manip...',
                                1000,
                                'et si je...',
                                () => {
                                    const audio2 = document.getElementById('audio2');
                                    audio2.play();
                                    setWindow1(true);
                                },
                                1000,
                                'C\'est bon, je crois que j\'ai trouvé !',
                                () => {
                                    const audio3 = document.getElementById('audio3');
                                    audio3.play();
                                }
                            
                            ]}
                            deletionSpeed={80}
                            speed={50}
                            repeat={false}
                        />
                    }
                    </div>
                </div>
            </div> 
        </section>
    )
}
