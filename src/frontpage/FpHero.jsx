import "../sass/base.scss";
import "../sass/frontpage/fpHero.scss";
import Experience from "../experience/Experience";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../sass/FrontPage.scss';

export default function FpHero() {

    return (
        <section className="fpHero">
            <div className="container">
                <div className="fpHero__content">
                    <div className="fpHero__content__wrapper">
                        <h1 className="fpHero__content__title"><span>_</span>the dna of innovation</h1>
                        <a href="#fpAbout" className="fpHero__content__button">{`Read more >`}</a>
                    </div>
                </div>
                <div className="experience fpHero__experience">
                    <Experience />
                </div>
                <div className="fpHero__description">
                    <p className="fpHero__description__text">Our advanced DNA research enables us to understand and improve the very foundations of life. We work tirelessly to discover solutions that could revolutionize medicine and human health.</p>
                </div>
            </div>
        </section>
    )
}