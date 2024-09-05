import "../sass/base.scss";
import "../sass/frontpage/fpHero.scss";

export default function FpHero() {
    return (
        <section className="fpHero">
            <div className="container">
                <div className="fpHero__content">
                    <h1 className="fpHero__title"><span>_</span>the dna of innovation</h1>
                    <p className="fpHero__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nunc nec tristique tincidunt, purus felis ultricies velit, nec dictum libero libero sit amet mi. Nullam nec vestibulum turpis. </p>
                    <a href="#" className="fpHero__button">Read more</a>
                </div>
            </div>
        </section>
    )
}