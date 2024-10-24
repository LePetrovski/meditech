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
            end: 'top+=150 center',
            markers: false,
            onUpdate: (self) => {
                const progress = self.progress;
                setClipDNA(progress);
            }
        });

        ScrollTrigger.create({
            trigger: '#picture2',
            start: 'top bottom-=50',
            end: 'top center-=400',
            markers: false,
            once: true,
            onLeave: () => {
                gsap.to('#picture2', {
                    opacity: 1,
                    duration: 0.3
                });
            },
        });
        
    }, []);
    
    return (

    <div className="frontPage">
        <FpHero />
        <FpTyping />
        <FpDNA clipDNA={clipDNA} />
        <FpAbout />
        {/* <FpProducts /> */}
        <FpLead />
    </div>
  
    );
}