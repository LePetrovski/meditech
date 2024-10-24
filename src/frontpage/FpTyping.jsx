import { TypeAnimation } from 'react-type-animation';
import "../sass/base.scss";
import '../sass/frontpage/fpTyping.scss';

export default function FpTyping() {

    return(<>
        <section className="fpTyping">
            <div className="container">
                <div className="fpTyping__content">
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed once, initially
                        'We are ethics and moral',
                        1000,
                        'We experiment on Mice',
                        1000,
                        'We experiment on Guinea Pigs',
                        1000,
                        // 'We experiment on Hu',
                        // 200,
                        'We experiment on Rats',
                        1000,
                        'We experiment on Monkeys',
                        1000
                    ]}
                    speed={50}
                    style={{ fontSize: '2em' }}
                    repeat={Infinity}
                />
                </div>
            </div>
        </section>
    </>)


}