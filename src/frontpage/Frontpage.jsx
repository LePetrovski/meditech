import React, { useState, useEffect } from "react";
import TemplatePage from "../components/TemplatePage";
import FpAbout from "./FpAbout";
import FpTyping from "./FpTyping";
import FpDNA from "./FpDNA";
import FpHero from "./FpHero";
import FpLead from "./FpLead";
import FpProducts from "./FpProducts";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../sass/FrontPage.scss';

gsap.registerPlugin(ScrollTrigger);

export default function Frontpage() {

    const [ clipDNA, setClipDNA ] = useState(0);

    useEffect(() => {
        ScrollTrigger.create({
            trigger: '.fpDNA',
            start: 'top bottom-=50',
            end: 'center+=150 bottom',
            markers: true,
            onUpdate: (self) => {
                const progress = self.progress;
                setClipDNA(progress);
            }
        });
        
    }, []);
    
    return (
    <TemplatePage>

        <div className="frontPage">
            <FpHero />
            <FpTyping />
            <FpDNA clipDNA={clipDNA} />
            <FpAbout />
            <FpProducts />
            <FpLead />
        </div>
  
    </TemplatePage>
    );
}