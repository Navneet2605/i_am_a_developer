import {useRef} from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {useGSAP} from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(()=>{
           gsap.fromTo(sectionRef.current , {opacity:0}, {opacity:1, duration:1.5} )
    },[])

  return (
    <section id="work" ref={sectionRef} className='app-showcase'>
        <div className="w-full">
            <div className="showcaselayout">
                {/* leftside */}
                <div className="first-project-wrapper" ref={project1Ref}>
                    <div className="image-wrapper">
                        <img src='/images/project1.png' />
                    </div>
                    <div className="text-content">
                     <h2>  On-Deman ride made simple with a Powerfull, User-Friendly app called Ryder</h2>
                     <p className="text-white-50 md:text-xl">An App built with React Native, Expo and Tailwindcss for fast user-friendly experience.</p>
                    </div>
                </div>
                {/* right side */}
                <div className="project-list-wrapper overflow-hidden">
                    <div className="project" ref={project2Ref}>
                        <div className='image-wrapper bg-[#ffefdb]'>
                            <img src="/images/project2.png" alt="managment" />
                        </div>
                        <h2>Managment Prtoject</h2>
                    </div>
                    <div className="project" ref={project3Ref}>
                        <div className='image-wrapper bg-[#ffe7eb]'>
                            <img src="/images/project3.png" alt="managment" />
                        </div>
                        <h2>Managment Prtoject</h2>
                    </div>
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default ShowcaseSection
