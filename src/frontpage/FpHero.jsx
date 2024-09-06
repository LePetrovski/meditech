import "../sass/base.scss";
import "../sass/frontpage/fpHero.scss";

export default function FpHero() {
    return (
        <section className="fpHero">
            <div className="container">
                <div className="fpHero__content">
                    <h1 className="fpHero__title"><span>_</span>the dna of innovation</h1>
                    <p className="fpHero__text">Our advanced DNA research enables us to understand and improve the very foundations of life. We work tirelessly to discover solutions that could revolutionize medicine and human health.</p>
                    <a href="#fpAbout" className="fpHero__button">Read more</a>
                </div>
            </div>
        </section>
    )
}