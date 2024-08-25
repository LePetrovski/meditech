import TemplatePage from "../components/TemplatePage";
import FpAbout from "./FpAbout";
import FpDNA from "./FpDNA";
import FpHero from "./FpHero";
import FpLead from "./FpLead";
import FpProducts from "./FpProducts";

export default function Frontpage() {
    return (
    <TemplatePage>
        <FpHero />
        <FpDNA />
        <FpAbout />
        <FpProducts />
        <FpLead />
    </TemplatePage>
    );
}