import { TypeAnimation } from "react-type-animation";
import "../sass/frontpage/fpAbout.scss";

export default function FpAbout() {
    return (
        <section className="fpAbout" id="fpAbout">
            <h2 className="fpAbout__title">THE PRIME TEAM</h2>

            <div className="fpAbout__content">
            
                <div className="fpAbout__content__columns">
                    <div className="fpAbout__content__columns__column column--1">
                        <figure>
                            <img src="james.png" alt="james" className="fpAbout__content__columns__column__img"/>
                            <figcaption>
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed once, initially
                                    'James Hepfield, chief engineer',
                                    1000,
                                ]}
                                speed={50}
                                repeat={Infinity}
                            />
                            </figcaption>
                        </figure>
                    </div>

                    <div className="fpAbout__content__columns__column column--2">
                        <figure>
                            <img src="edmund.jpg" alt="edmund" className="fpAbout__content__columns__column__img"/>
                            <figcaption>
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed once, initially
                                    'Edmund Johnson, CEO & chief scientist',
                                    1000,
                                    // 'Edmund Johnson, CEO & cHleP',
                                    // 300,
                                    // 'Edmund Johnson, CEO & cHLEP',
                                    // 300,
                                    // 'Edmund Johnson, CEO & cHELP',
                                    // 1000
                                ]}
                                speed={50}
                                repeat={Infinity}
                            />
                            </figcaption>
                        </figure>
                    </div>

                    <div className="fpAbout__content__columns__column column--3">
                        <figure>
                            <img src="elyne.png" alt="elyne" className="fpAbout__content__columns__column__img"/>
                            <figcaption>
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed once, initially
                                    'Elyne Johnson, head of research',
                                    1000,
                                ]}
                                speed={50}
                                repeat={Infinity}
                            />
                            </figcaption>
                        </figure>
                    </div>

                </div>
            
            </div>
        </section>
    )  
}