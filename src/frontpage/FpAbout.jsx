import { TypeAnimation } from "react-type-animation";
import "../sass/frontpage/fpAbout.scss";

export default function FpAbout() {
    return (
        <section className="fpAbout">
            <div className="container">
                <div className="fpAbout__content">
                    <div className="fpAbout__content__desc">
                        <h2 className="fpAbout__content__desc__title">Our Team</h2>
                        <p className="fpAbout__content__desc__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec euismod, nunc nec tristique tincidunt, purus felis ultricies velit, nec dictum libero libero sit amet mi.
                            Nullam nec vestibulum turpis. Donec nec enim auctor, blandit libero id, scelerisque risus.
                            Nulla facilisi
                        </p>
                    </div>

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
            </div>
        </section>
    )  
}