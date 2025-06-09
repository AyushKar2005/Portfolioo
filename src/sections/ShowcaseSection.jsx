import React, {useRef} from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);
    const project4Ref = useRef(null);
    const project5Ref = useRef(null);


    useGSAP(()=>{
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current,project5Ref.current];
        projects.forEach((card,index )=> {
            gsap.fromTo(
                card,
                {
                    y:50,opacity:0
                },
                {
                    y:0,
                    opacity:1,
                    duration:1,
                    delay:0.3*(index+1),
                    scrollTrigger:{
                        trigger: card,
                        start:'top bottom-=100',
                    }
                }
            )
        })
        gsap.fromTo(sectionRef.current,
            {opacity:0},
            {opacity:1, duration:1.5})

    },[]);

    return (
        <section id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/*Left*/}

                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                            <a href="https://github.com/AyushKar2005/Sign_Language_Detection.git">

                                <img src="/images/project1.png" alt="SignLanguageDetection"/>
                            </a>

                        </div>
                        <div className="text-content">
                            <h2>Real-Time Sign Language Detection with Python</h2>
                            <p className="text-white-50 md:text-xl pb-6">A deep learning-based system that recognizes
                                multiple hand gestures in real-time, enabling intuitive, gesture-driven communication
                                using Python and OpenCV.</p>
                        </div>

                        <div className="image-wrapper">
                            <a href="https://mapty-eight-jet.vercel.app/">

                                <img src="/images/project4.png" alt="Mapty"/>
                            </a>

                        </div>
                        <div className="text-content">
                            <h2>Mapty-Real-Time Fitness Analytics Dashboard</h2>
                            <p className="text-white-50 md:text-xl">A real-time fitness tracking platform that visualizes cycling and running metrics with precision analytics. Monitor speed, distance, pace, and cadence through intuitive data displays..</p>
                        </div>
                    </div>
                    {/*Right*/}
                    <div className="project-list-wrapper overflow-hidden" ref={project2Ref}>
                        <div className="project">
                            <div className="image-wrapper bg-[#ffefdb]">
                                <a href={"https://github.com/AyushKar2005/Medical-Chatbot.git"}>
                                <img src="/images/project2.png" alt="Medical Chatbot"/>
                                </a>
                            </div>
                            <h2>Your Virtual Health Assistant</h2>
                        </div>
                        <div className="project relative overflow-hidden min-h-[300px] rounded-xl" ref={project2Ref}>

                            <div className="image-wrapper bg-[#ffe7eb]">
                                <a href={"https://github.com/AyushKar2005/AI-Voice-Assistant.git"}>
                                <img src="/images/project3.png" alt="J.A.R.V.I.S"/>
                                </a>
                            </div>
                            <h2>J.A.R.V.I.S: A Smart Desktop AI That Listens, Thinks, and Acts</h2>
                        </div>
                        <div className="project relative overflow-hidden min-h-[300px] rounded-xl" ref={project5Ref}>

                            <div className="image-wrapper bg-[#ffe7cb]">
                                <a href={"https://bankist-website-gamma-five.vercel.app/"}>
                                <img src="/images/project5.png" alt="Bankist"/>
                                </a>
                            </div>
                            <h2>Bankist-Modern finance for the digital generation</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ShowcaseSection
