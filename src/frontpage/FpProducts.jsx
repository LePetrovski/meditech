import { TypeAnimation } from "react-type-animation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../sass/frontpage/fpProducts.scss";
import { useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function FpProducts() {

    const [ startCom, setStartCom ] = useState(0);

    useEffect(() => {   
        ScrollTrigger.create({
            trigger: '.fpProducts',
            start: 'center center',
            end: 'center center',
            markers: true,
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
            <div className="container">
                <div className="fpProducts__content">
                    {com &&
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed once, initially
                                'Edmund Johnson, CEO & chief scientist',
                                1000,
                                'Edmund Johnson, CEO & cHleP',
                                300,
                                'Edmund Johnson, CEO & cHLEP',
                                300,
                                'Edmund Johnson, CEO & cHELP',
                                1000
                            ]}
                            speed={50}
                            repeat={Infinity}
                        />
                    }
                </div>
            </div> 
        </section>
    )
}
