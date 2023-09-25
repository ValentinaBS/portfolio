import './about.css';
import aboutImg from '../../assets/about.png'
import { FaPaperPlane } from 'react-icons/fa';

export default function About() {

    return (
        <section id='about' className='about mx-auto'>
            <h2 className='text-center mb-5 mb-md-3'>
                About Me
            </h2>
            <div className='d-flex flex-column-reverse flex-md-row align-items-center justify-content-center'>
                <div className='d-flex flex-column row-gap-3'>
                    <p>
                            Hi there! I'm Valentina, a full-stack web developer with the motto of creating <span className='fw-bold'>beautiful</span> and <span className='fw-bold'>functional websites.</span>
                    </p>
                    <p >
                        I discovered my passion for web development in 2021, when I found some basic courses on YouTube. Since then, I've <span className='fw-bold'>never stopped learning</span> and <span className='fw-bold'>creating projects</span> to keep improving my skills.
                    </p>
                    <p>
                        I strive to create designs that are both <span className='fw-bold'>visually stunning</span> and <span className='fw-bold'>user-friendly.</span>
                    </p>
                    <a href='#contact' className='fw-bold btn primary-btn py-2 d-flex align-items-center justify-content-center'>
                        <FaPaperPlane className='me-2' />
                        Contact Me!
                    </a>
                </div>
                <img className='about-img mb-5 mb-md-0' src={aboutImg} alt='Woman working on her PC' />
            </div>
        </section>
    )
}