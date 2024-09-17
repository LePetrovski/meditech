import { useEffect } from "react";
import "../sass/base.scss";
import "../sass/frontpage/fpDNA.scss";
import { gsap } from "gsap";

export default function FpDNA(props) {
    const { clipDNA } = props;

    useEffect(() => {
        gsap.to('.fpDNA__content__column.column--1', {
            clipPath: `polygon(0% 100%, 100% 100%, 100% ${100 - (clipDNA * 100)}%, 0% ${100 - (clipDNA * 100)}%)`,
            duration: 0.5
        });
        gsap.to('.fpDNA__content__column.column--2', {
            clipPath: `polygon(0% 100%, 100% 100%, 100% ${100 - (clipDNA * 100)}%, 0% ${100 - (clipDNA * 100)}%)`,
            duration: 0.5
        });
    }, [clipDNA]);

    return (
        <section className="fpDNA">
            <div className="container">
                <div className="fpDNA__content">
                    <div className="fpDNA__content__column column--1">
                        <h2 className="fpDNA__content__title">1_Johnson</h2>
                        <h3>Technical Expertise and Digitization</h3>
                        <ul>
                            <li><span>Advanced Technology Development:</span> Design and implementation of cutting-edge technologies for the digitization of human minds.</li>
                            <li><span>Innovation in Artificial Intelligence:</span> Using AI to analyze and process genetic and neural data.</li>
                            <li><span>Security and Data Protection:</span> Implementation of robust security systems to protect sensitive information.</li>
                            <li><span>Technological Infrastructure:</span> Development and maintenance of the infrastructure needed to digitize and store minds.</li>
                            <li><span>Research and Development:</span> Ongoing investment in R&D to improve digitization and brain-computer interface technologies.</li>
                        </ul>
                    </div>
                    <div className="fpDNA__content__picture picture--1">
                        <img src="dna2.jpg" alt="DNA 1" loading="lazy" />
                    </div>
                    <div className="fpDNA__content__column column--2">
                        <h2 className="fpDNA__content__title">2_Meditech</h2>
                        <h3>Medical and Advanced Genetic Expertise</h3>
                        <ul>
                            <li><span>Advanced Genetic Research:</span> In-depth studies on DNA to understand and improve the foundations of life.</li>
                            <li><span>Ethical Eugenics Programs:</span> Development of programs to improve quality of life in an ethical and responsible manner.</li>
                            <li><span>Innovative Gene Therapies:</span> Development of gene therapies to treat and prevent hereditary diseases.</li>
                            <li><span>Medical and Ethical Monitoring:</span> Ensuring that all research and applications are conducted in compliance with medical and ethical standards.</li>
                            <li><span>Collaboration with healthcare professionals:</span> Partnerships with medical institutions and experts to guarantee the safety and efficacy of the technologies developed.</li>
                        </ul>
                    </div>
                    <div className="fpDNA__content__picture picture--2">
                        <img src="dna1.jpg" alt="DNA 1" loading="lazy" />
                    </div>
                </div>
            </div>
        </section>
    )
}