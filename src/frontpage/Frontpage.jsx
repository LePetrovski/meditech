import React, { useState, useEffect } from "react";
import TemplatePage from "../components/TemplatePage";
import FpAbout from "./FpAbout";
import FpDNA from "./FpDNA";
import FpHero from "./FpHero";
import FpLead from "./FpLead";
import FpProducts from "./FpProducts";
import Experience from "../experience/Experience";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../sass/FrontPage.scss';

gsap.registerPlugin(ScrollTrigger);

export default function Frontpage() {

    const [ modelPosition, setModelPosition ] = useState(0);

    useEffect(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.fpDNA',
                start: 'top top',
                end: 'bottom top',
                markers: true,
                onUpdate: (self) => {
                    const progress = self.progress;
                    setModelPosition(progress);
                }
            }
        });
          
    }, []);

    useEffect(() => {
        console.log(modelPosition);
    }, [modelPosition]);
    

    return (
    <TemplatePage>
        <div className="experience">
            <Experience modelPosition={modelPosition}/>
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