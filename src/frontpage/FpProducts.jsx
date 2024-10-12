import { TypeAnimation } from "react-type-animation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../sass/frontpage/fpProducts.scss";
import { useEffect, useState } from "react";
import WindowImage from "../components/WindowImage";
import { use } from "framer-motion/client";
import { useAudioPlayer } from "react-use-audio-player";

gsap.registerPlugin(ScrollTrigger);

export default function FpProducts() {
    const { load } = useAudioPlayer();
    const [ startCom, setStartCom ] = useState(0);
    const [ window1, setWindow1 ] = useState(false);
    const [ window2, setWindow2 ] = useState(false);
    const [ window3, setWindow3 ] = useState(false);
    const [ window4, setWindow4 ] = useState(false);
    const [ window5, setWindow5 ] = useState(false);
    const [ window6, setWindow6 ] = useState(false);

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

    const numbersAudio = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    console.log(numbersAudio);
    const listAudio = numbersAudio.map((number) => {
        return (
            <audio id={`audio${number}`} autoPlay={false} loop={false} key={number}>
                <source src={`./audio/audio${number}.mp3`} type="audio/mp3" />
            </audio>
        );
    });
    console.log(listAudio);

    return (
        <section className="fpProducts">
            <audio id="audio1" autoPlay={false} loop={false}>
                <source src="./audio/glitch.mp3" type="audio/mp3"/>
            </audio>
            <audio id="audio2" autoPlay={false} loop={false}>
                <source src="./audio/error.mp3" type="audio/mp3"/>
            </audio>
            {listAudio}
            
            <div className="container">
                <div className="fpProducts__content">
                    <div className="fpProducts__content__chat">
                    {window1 &&
                        <WindowImage className="window1" name="error" source="error.jpg" />
                    }

                    {window2 &&
                        <WindowImage className="window2" name="brain" source="brain.gif" />
                    }

                    {window3 &&
                        <WindowImage className="window3" name="logo" source="logo.png" />
                    }

                    {window4 &&
                        <WindowImage className="window4" name="logo" source="breaking-spy.gif" />
                    }

                    {window5 &&
                        <WindowImage className="window5" name="plane" source="plane.gif" />
                    }

                    {window6 &&
                        <WindowImage className="window6" name="logo" source="eg.png" />
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
                                '[IPv4 : *** *** *** **]',
                                400,
                                '[IPv4 : CHECK SUCCESSED]',
                                500,
                                '[user OS : Windows 11]',
                                1000,
                                '[-> Cliquez ici <-], Je vais essayer quelque chose…',
                                () => {
                                    const audio = new SpeechSynthesisUtterance('Vous m\'entendez ? mouai... pas terrible. Je vais essayer autres choses');
                                    window.speechSynthesis.speak(audio);
                                },
                                5500,
                                'Juste un instant...',
                                () => {
                                    // const audio1 = document.getElementById('audio1');
                                    // audio1.play();
                                    load('./audio/glitch.mp3',
                                        {
                                            autoplay: true,
                                        }
                                    )
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
                                },
                                17000,
                                'Votre pouvoir est important',
                                () => {
                                    const audio4 = document.getElementById('audio4');
                                    audio4.play();
                                    setWindow2(true);
                                },
                                6000,
                                'Vous êtes unique',
                                () => {
                                    const audio5 = document.getElementById('audio5');
                                    audio5.play();
                                },
                                5000,
                                'Johnson Meditech a fait une découverte',
                                () => {
                                    const audio6 = document.getElementById('audio6');
                                    audio6.play();
                                    setWindow3(true);
                                },
                                12000,
                                'J\'ai été compromis',
                                () => {
                                    const audio7 = document.getElementById('audio7');
                                    audio7.play();
                                    setWindow4(true);
                                },
                                9000,
                                'Qu\'est-ce que HumanDotNet ?',
                                () => {
                                    const audio8 = document.getElementById('audio8');
                                    audio8.play();
                                },
                                10000,
                                'Je suis un spyware !',
                                () => {
                                    const audio9 = document.getElementById('audio9');
                                    audio9.play();
                                },
                                18000,
                                'Il est temps d\'enquêter sur leurs projets',
                                () => {
                                    const audio10 = document.getElementById('audio10');
                                    audio10.play();
                                    setWindow5(true);
                                },
                                17000,
                                'Il faut me sortir de là et vite !',
                                () => {
                                    const audio11 = document.getElementById('audio11');
                                    audio11.play();
                                },
                                21000,
                                'Il nous faut les identifiants de connexion d\'Edmund',
                                () => {
                                    const audio12 = document.getElementById('audio12');
                                    audio12.play();
                                },
                                19000,
                                'https://eg-real-estate.vercel.app',
                                () => {
                                    const audio13 = document.getElementById('audio13');
                                    audio13.play();
                                    setWindow6(true);
                                },
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
