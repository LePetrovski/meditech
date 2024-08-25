import TemplatePage from "../components/TemplatePage";
import FpAbout from "./FpAbout";
import FpDNA from "./FpDNA";
import FpHero from "./FpHero";
import FpLead from "./FpLead";
import FpProducts from "./FpProducts";
import Experience from "../experience/Experience";
import '../sass/FrontPage.scss';

export default function Frontpage() {
    return (
    <TemplatePage>
        <div className="experience">
            <Experience />
        </div>

        <div className="frontPage">
            <FpHero />
            <FpDNA />
            <FpAbout />
            <FpProducts />
            <FpLead />
        </div>
  
    </TemplatePage>
    );
}