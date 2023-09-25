import './projects.css';
import { BiLogoGithub, BiLogoFirebase, BiLogoJavascript, BiLogoReact, BiWorld, BiLogoHtml5, BiLogoCss3, BiLogoBootstrap, BiLogoVuejs, BiLogoJava, BiLogoSpringBoot, BiLogoPostgresql } from 'react-icons/bi';
import project1 from '../../assets/projects/projects-homebanking.png'
import project2 from '../../assets/projects/projects-events.png'
import project3 from '../../assets/projects/projects-sushi.png'
import project4 from '../../assets/projects/projects-pokedex.png'
import project5 from '../../assets/projects/projects-calculator.png'
import project6 from '../../assets/projects/projects-card.png'


export default function Projects() {

    return (
        <section id='projects'>
            <h2 className='text-center mb-5'>
                My Projects
            </h2>
            <div className='mx-3 mx-md-5 d-flex flex-wrap justify-content-around align-items-center row-gap-5 column-gap-5'>
                <article className='card'>
                    <img src={project1} className='card-img-top' alt='Homebanking project' />
                    <div className='card-body p-4'>
                        <h3 className='card-title'>
                            Mindhub Bank
                        </h3>
                        <div className='my-4'>
                            <p className='card-text'>
                                Mindhub Bank is a responsive, secure and easy-to-use homebanking app.
                            </p>
                            <p className='card-text'>
                                This project showcases my proficiency in both front-end and back-end development while offering a glimpse into my skills as a budding Full Stack JAVA developer.
                            </p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <a href='#' className='online btn primary-btn d-flex align-items-center column-gap-2'>
                                <BiWorld className='fs-5' />
                                View Online
                            </a>
                            <a href='https://github.com/ValentinaBS/MindhubBankValentinaSanchez' className='github btn secondary-btn d-flex align-items-center column-gap-2'>
                                <BiLogoGithub className='fs-5' />
                                Github
                            </a>
                        </div>
                    </div>
                    <div className='card-footer mt-2 p-4'>
                        <p>Made with:</p>
                        <div className='d-flex flex-wrap column-gap-4 row-gap-3 mb-3'>
                            <div>
                                <BiLogoHtml5 className='fs-4 me-1' />
                                <span>HTML</span>
                            </div>
                            <div>
                                <BiLogoCss3 className='fs-4 me-1' />
                                <span>CSS</span>
                            </div>
                            <div className='d-flex'>
                                <BiLogoBootstrap className='fs-4 me-1' />
                                <span>Bootstrap</span>
                            </div>
                            <div className='d-flex'>
                                <BiLogoVuejs className='fs-4 me-1' />
                                <span>Vue.js</span>
                            </div>
                            <div className='d-flex'>
                                <BiLogoJava className='fs-4 me-1' />
                                <span>Java</span>
                            </div>
                            <div className='d-flex'>
                                <BiLogoSpringBoot className='fs-4 me-1' />
                                <span>Spring</span>
                            </div>
                            <div className='d-flex'>
                                <BiLogoPostgresql className='fs-4 me-1' />
                                <span>PostgreSQL</span>
                            </div>
                        </div>
                    </div>
                </article>
                <article className='card'>
                    <img src={project2} className='card-img-top' alt='Homebanking project' />
                    <div className='card-body p-4'>
                        <h3 className='card-title'>
                            Amazing Events
                        </h3>
                        <div className='my-4'>
                            <p className='card-text'>
                                Amazing Events is a responsive and easy-to-use events page.
                            </p>
                            <p className='card-text'>
                                This project includes filtered categories and details about different events from the Amazing Events API, besides a special stats page to see how the events are doing.
                            </p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <a href='https://amazing-events-vue-valentina-sanchez.vercel.app/' className='online btn primary-btn d-flex align-items-center column-gap-2'>
                                <BiWorld className='fs-5' />
                                View Online
                            </a>
                            <a href='https://github.com/ValentinaBS/AmazingEventsVueValentinaSanchez/tree/main' className='github btn secondary-btn d-flex align-items-center column-gap-2'>
                                <BiLogoGithub className='fs-5' />
                                Github
                            </a>
                        </div>
                    </div>
                    <div className='card-footer mt-2 p-4'>
                        <p>Made with:</p>
                        <div className='d-flex flex-wrap column-gap-4 row-gap-3 mb-3'>
                            <div>
                                <BiLogoHtml5 className='fs-4 me-1' />
                                <span>HTML</span>
                            </div>
                            <div>
                                <BiLogoCss3 className='fs-4 me-1' />
                                <span>CSS</span>
                            </div>
                            <div className='d-flex'>
                                <BiLogoBootstrap className='fs-4 me-1' />
                                <span>Bootstrap</span>
                            </div>
                            <div className='d-flex'>
                                <BiLogoVuejs className='fs-4 me-1' />
                                <span>Vue.js</span>
                            </div>
                        </div>
                    </div>
                </article>
                <article className='card'>
                    <img src={project3} className='card-img-top' alt='Homebanking project' />
                    <div className='card-body p-4'>
                        <h3 className='card-title'>
                            Kibou Sushi
                        </h3>
                        <div className='my-4'>
                            <p className='card-text'>
                                Kibou Sushi is a responsive, minimalistic and easy-to-use e-commerce.
                            </p>
                            <p className='card-text'>
                                This project includes a whole sushi catalogue, with different categories and the possibility of adding products to your cart. You can also go to checkout and generate an order code to identify your purchase.
                            </p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <a href='https://kibou-sushi.vercel.app/' className='online btn primary-btn d-flex align-items-center column-gap-2'>
                                <BiWorld className='fs-5' />
                                View Online
                            </a>
                            <a href='https://github.com/ValentinaBS/EntregaFinal-KibouSushi-Sanchez' className='github btn secondary-btn d-flex align-items-center column-gap-2'>
                                <BiLogoGithub className='fs-5' />
                                Github
                            </a>
                        </div>
                    </div>
                    <div className='card-footer mt-2 p-4'>
                        <p>Made with:</p>
                        <div className='d-flex flex-wrap column-gap-4 row-gap-3 mb-3'>
                            <div>
                                <BiLogoHtml5 className='fs-4 me-1' />
                                <span>HTML</span>
                            </div>
                            <div>
                                <BiLogoCss3 className='fs-4 me-1' />
                                <span>CSS</span>
                            </div>
                            <div className='d-flex'>
                                <BiLogoReact className='fs-4 me-1' />
                                <span>React.js</span>
                            </div>
                            <div className='d-flex'>
                                <BiLogoFirebase className='fs-4 me-1' />
                                <span>Firebase</span>
                            </div>
                        </div>
                    </div>
                </article>
                <article className='card'>
                    <img src={project4} className='card-img-top' alt='Homebanking project' />
                    <div className='card-body p-4'>
                        <h3 className='card-title'>
                            Carrousel Pokédex
                        </h3>
                        <div className='my-4'>
                            <p className='card-text'>
                                Carrousel Pokédex is a responsive, fun and simple Pokédex.
                            </p>
                            <p className='card-text'>
                                This project includes a Pokédex with the first 151 Pokémon coming from the PokéAPI, with the possibility of searching for a specific Pokémon using their name or number.
                            </p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <a href='https://pokedex-ashy-theta.vercel.app/' className='online btn primary-btn d-flex align-items-center column-gap-2'>
                                <BiWorld className='fs-5' />
                                View Online
                            </a>
                            <a href='https://github.com/ValentinaBS/pokedex' className='github btn secondary-btn d-flex align-items-center column-gap-2'>
                                <BiLogoGithub className='fs-5' />
                                Github
                            </a>
                        </div>
                    </div>
                    <div className='card-footer mt-2 p-4'>
                        <p>Made with:</p>
                        <div className='d-flex flex-wrap column-gap-4 row-gap-3 mb-3'>
                            <div>
                                <BiLogoHtml5 className='fs-4 me-1' />
                                <span>HTML</span>
                            </div>
                            <div>
                                <BiLogoCss3 className='fs-4 me-1' />
                                <span>CSS</span>
                            </div>
                            <div className='d-flex'>
                                <BiLogoJavascript className='fs-4 me-1' />
                                <span>Javascript</span>
                            </div>
                        </div>
                    </div>
                </article>
                <article className='card'>
                    <img src={project5} className='card-img-top' alt='Homebanking project' />
                    <div className='card-body p-4'>
                        <h3 className='card-title'>
                            Froggy Calculator
                        </h3>
                        <div className='my-4'>
                            <p className='card-text'>
                                Froggy Calculator is a responsive, cute and simple frog-themed calculator.
                            </p>
                            <p className='card-text'>
                                This project includes a fully functional simple calculator, with a little surprise sound if you click on the 'equals' button.
                            </p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <a href='https://froggy-calculator.vercel.app/' className='online btn primary-btn d-flex align-items-center column-gap-2'>
                                <BiWorld className='fs-5' />
                                View Online
                            </a>
                            <a href='https://github.com/ValentinaBS/froggy-calculator' className='github btn secondary-btn d-flex align-items-center column-gap-2'>
                                <BiLogoGithub className='fs-5' />
                                Github
                            </a>
                        </div>
                    </div>
                    <div className='card-footer mt-2 p-4'>
                        <p>Made with:</p>
                        <div className='d-flex flex-wrap column-gap-4 row-gap-3 mb-3'>
                            <div>
                                <BiLogoHtml5 className='fs-4 me-1' />
                                <span>HTML</span>
                            </div>
                            <div>
                                <BiLogoCss3 className='fs-4 me-1' />
                                <span>CSS</span>
                            </div>
                            <div className='d-flex'>
                                <BiLogoJavascript className='fs-4 me-1' />
                                <span>Javascript</span>
                            </div>
                        </div>
                    </div>
                </article>
                <article className='card'>
                    <img src={project6} className='card-img-top' alt='Homebanking project' />
                    <div className='card-body p-4'>
                        <h3 className='card-title'>
                            Product Card
                        </h3>
                        <div className='my-4'>
                            <p className='card-text'>
                                Product Card is a responsive and minimalistic product preview card.
                            </p>
                            <p className='card-text'>
                                This project includes a visual design of a product preview, trying to transform a previously made design into code.
                            </p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <a href='https://product-preview-card-component-five-inky.vercel.app/' className='online btn primary-btn d-flex align-items-center column-gap-2'>
                                <BiWorld className='fs-5' />
                                View Online
                            </a>
                            <a href='https://github.com/ValentinaBS/product-preview-card-component' className='github btn secondary-btn d-flex align-items-center column-gap-2'>
                                <BiLogoGithub className='fs-5' />
                                Github
                            </a>
                        </div>
                    </div>
                    <div className='card-footer mt-2 p-4'>
                        <p>Made with:</p>
                        <div className='d-flex flex-wrap column-gap-4 row-gap-3 mb-3'>
                            <div>
                                <BiLogoHtml5 className='fs-4 me-1' />
                                <span>HTML</span>
                            </div>
                            <div>
                                <BiLogoCss3 className='fs-4 me-1' />
                                <span>CSS</span>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}