import "../sass/base.scss";
import "../sass/frontpage/fpDNA.scss";

export default function FpDNA() {
    return (
        <section className="fpDNA">
            <div className="container">
                <div className="fpDNA__content">
                    <div className="fpDNA__content__column column--1">
                        <h2 className="fpDNA__content__title">1_Johnson</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nunc nec tristique tincidunt, purus felis ultricies velit, nec dictum libero libero sit amet mi. Nullam nec vestibulum turpis. Donec nec enim auctor</p>
                    </div>
                    <div className="fpDNA__content__column column--2">
                        <h2 className="fpDNA__content__title">2_Meditech</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nunc nec tristique tincidunt, purus felis ultricies velit, nec dictum libero libero sit amet mi. Nullam nec vestibulum turpis. Donec nec enim auctor</p>
                    </div>
                </div>
            </div>
        </section>
    )
}