import { TypeAnimation } from "react-type-animation";
import "../sass/frontpage/fpLead.scss";

export default function FpLead() {
    return (
        <>
            <div className="fpLead">
                <div className="container">
                    <div className="fpLead__content">
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed once, initially
                            'Our sponsorship : Black Rock',
                            800,
                            'Our sponsorship : Starlink',
                            800,
                            'Our sponsorship : Enron',
                            800,
                            'Our sponsorship : Amalgamated Bio-Carb, inc.',
                            800,
                            'Our sponsorship : Hunt Technologist, inc.',
                            800,
                            'Our sponsorship : March Technologies',
                            800
                        ]}
                        speed={50}
                        style={{ fontSize: '2em' }}
                        repeat={Infinity}
                    />
                    </div>
                </div>
            </div>

        </>
    )
}