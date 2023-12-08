import './FeaturesSection.css';
import News from './News/News';
import Concalls from './Concalls/Concalls';
import CorporateFillings from './CorporateFillings/CorporateFillings';
import HeroForm from './../Banner/EmailForm/HeroForm';
import Forensic from './Forensic/Forensic';
import { useStateContext } from '../../context/StateContext';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import React, { useLayoutEffect } from 'react';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const FeaturesSection = () => {

    const { isChecked } = useStateContext();
    // let main = document.querySelector(".about");

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {

            const tl1 = gsap.timeline();
            tl1
                .addLabel("start")
                .to('.news-lottie', {
                    scale: 0,
                })
                .to('.forensic-video', {
                    scale: 0,
                }, "<")
                .to('.corporate-lottie', {
                    scale: 0,
                }, "<")
                .to('.concall-body', {
                    scale: 0,
                }, "<")
                .to('.news-section', {
                    height: "38.19vw",
                    width: "43.4vw",
                    borderRadius: '50px',
                }, "<")
                .to('.concall-section', {
                    height: "38.19vw",
                    width: "43.4vw",
                    borderRadius: '50px',
                }, "<")
                .to('.corporate-section', {
                    height: "38.19vw",
                    width: "43.4vw",
                    borderRadius: '50px',
                    top: 0
                }, "<")
                .to('.forensic-section', {
                    height: "38.19vw",
                    width: "43.4vw",
                    borderRadius: '50px',
                }, "<")
                .to('.grid-item', {
                    opacity: 1,
                }, "<")
                .to('.hide-everything', {
                    fontSize: '90px',
                }, "<")
                .to('.grid-container', {
                    scale: 0.26,
                    gap: '40px',
                }, "<")
                .set('.footer', {
                    zIndex: 1,
                })
                .addLabel("scaled")
                .to('.grid-container', {
                    scale: 0.11,
                    gap: '60px',
                }, ">")
                .to('.hide-everything', {
                    opacity: 0,
                }, "<50%")
                .to('.complexity-text', {
                    opacity: 1,
                    scale: 1,
                }, ">")
                .to('.grid-email', {
                    opacity: 1,
                    scale: 1,
                }, "<")
                .addLabel('end')

            ScrollTrigger.create({
                trigger: ".forensic-section",
                start: 'bottom bottom-=50',
                end: "bottom bottom",
                endTrigger: ".footer",
                scrub: true,
                animation: tl1,
                pin: ".grid-container",
                pinSpacing: true,
                snap: {
                    snapTo: "labelsDirectional",
                    duration: 2,
                },
                markers: true,
            })
        });

        return () => ctx.revert();

    }, [])

    return (
        <>
            <div className="outer-container">
                <div className="grid-container">
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"><span className='hide-everything'>Valuation</span></div>
                    <div className="grid-item">
                        <div className='flex-col alignItems-center hide-everything'>
                            <span>Mutual</span>
                            <span>Funds</span>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className='flex-col alignItems-center hide-everything'>
                            <span>Supply</span>
                            <span>Chains</span>
                        </div>
                    </div>
                    <div className="grid-item"><span className='hide-everything'>Forex</span></div>
                    <div className="grid-item">
                        <div className="skeleton-block hide-everything">
                            <div className='skeleton-1'></div>
                            <div className='skeleton-2'></div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="skeleton-block hide-everything">
                            <div className='skeleton-1'></div>
                            <div className='skeleton-2'></div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="skeleton-block hide-everything">
                            <div className='skeleton-1'></div>
                            <div className='skeleton-2'></div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="skeleton-block hide-everything">
                            <div className='skeleton-1'></div>
                            <div className='skeleton-2'></div>
                        </div>
                    </div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"><span className='hide-everything'>Trade</span></div>
                    <div className="grid-item">
                        <div className='flex-col alignItems-center hide-everything'>
                            <span>Govt.</span>
                            <span>Data</span>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className='flex-col alignItems-center hide-everything'>
                            <span>Alternate</span>
                            <span>Data</span>
                        </div>
                    </div>
                    <div className="grid-item"><span className=' hide-everything'>KPIs</span></div>
                    <div className="grid-item">
                        <div className="skeleton-block hide-everything">
                            <div className='skeleton-1'></div>
                            <div className='skeleton-2'></div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="skeleton-block hide-everything">
                            <div className='skeleton-1'></div>
                            <div className='skeleton-2'></div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="skeleton-block hide-everything">
                            <div className='skeleton-1'></div>
                            <div className='skeleton-2'></div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="skeleton-block hide-everything">
                            <div className='skeleton-1'></div>
                            <div className='skeleton-2'></div>
                        </div>
                    </div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="news-section"><News /></div>
                    <div className="concall-section" style={{ height: isChecked ? '56.6vw' : '42.29vw' }}><Concalls /></div>
                    <div className="grid-item">
                        <div className='flex-col alignItems-center hide-everything'>
                            <span>Annual</span>
                            <span>Report</span>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className='flex-col alignItems-center hide-everything'>
                            <span>Raw</span>
                            <span>Materials</span>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="skeleton-block hide-everything">
                            <div className='skeleton-1'></div>
                            <div className='skeleton-2'></div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="skeleton-block hide-everything">
                            <div className='skeleton-1'></div>
                            <div className='skeleton-2'></div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="skeleton-block hide-everything">
                            <div className='skeleton-1'></div>
                            <div className='skeleton-2'></div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="skeleton-block hide-everything">
                            <div className='skeleton-1'></div>
                            <div className='skeleton-2'></div>
                        </div>
                    </div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="corporate-section" style={{ top: '-7.29vw' }}><CorporateFillings /></div>
                    <div className="forensic-section"><Forensic /></div>
                    <div className="grid-item triggerClass"><span className='hide-everything'>Employees</span></div>
                    <div className="grid-item"><span className='hide-everything'>Sentiment</span></div>
                    <div className="grid-item">
                        <div className="skeleton-block hide-everything">
                            <div className='skeleton-1'></div>
                            <div className='skeleton-2'></div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="skeleton-block hide-everything">
                            <div className='skeleton-1'></div>
                            <div className='skeleton-2'></div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="skeleton-block hide-everything">
                            <div className='skeleton-1'></div>
                            <div className='skeleton-2'></div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="skeleton-block hide-everything">
                            <div className='skeleton-1'></div>
                            <div className='skeleton-2'></div>
                        </div>
                    </div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
                </div>
            </div>
            <div className='footer'>
                <div className="complexity-text">
                    <span>Leave Complexity Behind.</span>
                </div>
                <div className='grid-email'>
                    <HeroForm fontSize={'22.5px'} textColor={'#A5FF95'} animationTime={'2.5s'} />
                </div>
            </div>
        </>
    );
};

export default FeaturesSection;