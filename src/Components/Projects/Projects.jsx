import './projects.css';
import { BiLogoGithub, BiLogoFirebase, BiLogoJavascript, BiLogoReact, BiWorld, BiLogoHtml5, BiLogoCss3, BiLogoBootstrap, BiLogoVuejs, BiLogoJava, BiLogoSpringBoot, BiLogoPostgresql } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';
import project1 from '../../assets/projects/projects-homebanking.png'
import project2 from '../../assets/projects/projects-events.png'
import project3 from '../../assets/projects/projects-sushi.png'
import project4 from '../../assets/projects/projects-pokedex.png'
import project5 from '../../assets/projects/projects-calculator.png'
import project6 from '../../assets/projects/projects-card.png'
import project7 from '../../assets/projects/projects-ecommerce.png'

export default function Projects() {
    const { t } = useTranslation()

    return (
        <section id='projects'>
            <h2 className='text-center mb-5'>
                {t('projectsTitle')}
            </h2>
            <div className='mx-3 mx-md-5 d-flex flex-wrap justify-content-around align-items-center row-gap-5 column-gap-5'>
            <article className='card'>
                    <img src={project7} className='card-img-top' alt='Homebanking project' />
                    <div className='card-body p-4'>
                        <h3 className='card-title'>
                            Purity
                        </h3>
                        <div className='my-4'>
                            <p className='card-text'>
                                {t('projectsCard1Text')}
                            </p>
                            <p className='card-text'>
                                {t('projectsCard1Text2')}
                            </p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <a target='__blank' href='https://purity.up.railway.app/web/index.html' className='online btn primary-btn d-flex align-items-center column-gap-2'>
                                <BiWorld className='fs-5' />
                                {t('projectsCardBtn')}
                            </a>
                            <a target='__blank' href='https://github.com/ValentinaBS/e-commerce-mindhub' className='github btn secondary-btn d-flex align-items-center column-gap-2'>
                                <BiLogoGithub className='fs-5' />
                                Github
                            </a>
                        </div>
                    </div>
                    <div className='card-footer mt-2 p-4'>
                        <p>{t('projectsCardFooter')}</p>
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
                    <img src={project1} className='card-img-top' alt='Homebanking project' />
                    <div className='card-body p-4'>
                        <h3 className='card-title'>
                            Mindhub Bank
                        </h3>
                        <div className='my-4'>
                            <p className='card-text'>
                                {t('projectsCard2Text')}
                            </p>
                            <p className='card-text'>
                                {t('projectsCard2Text2')}
                            </p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <a target='__blank' href='https://mindhub-bank.up.railway.app/web/index.html' className='online btn primary-btn d-flex align-items-center column-gap-2'>
                                <BiWorld className='fs-5' />
                                {t('projectsCardBtn')}
                            </a>
                            <a target='__blank' href='https://github.com/ValentinaBS/MindhubBankValentinaSanchez' className='github btn secondary-btn d-flex align-items-center column-gap-2'>
                                <BiLogoGithub className='fs-5' />
                                Github
                            </a>
                        </div>
                    </div>
                    <div className='card-footer mt-2 p-4'>
                        <p>{t('projectsCardFooter')}</p>
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
                                {t('projectsCard3Text')}
                            </p>
                            <p className='card-text'>
                                {t('projectsCard3Text2')}
                            </p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <a target='__blank' href='https://amazing-events-vue-valentina-sanchez.vercel.app/' className='online btn primary-btn d-flex align-items-center column-gap-2'>
                                <BiWorld className='fs-5' />
                                {t('projectsCardBtn')}
                            </a>
                            <a target='__blank' href='https://github.com/ValentinaBS/AmazingEventsVueValentinaSanchez/tree/main' className='github btn secondary-btn d-flex align-items-center column-gap-2'>
                                <BiLogoGithub className='fs-5' />
                                Github
                            </a>
                        </div>
                    </div>
                    <div className='card-footer mt-2 p-4'>
                        <p>{t('projectsCardFooter')}</p>
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
                                {t('projectsCard4Text')}
                            </p>
                            <p className='card-text'>
                                {t('projectsCard4Text2')}
                            </p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <a target='__blank' href='https://kibou-sushi.vercel.app/' className='online btn primary-btn d-flex align-items-center column-gap-2'>
                                <BiWorld className='fs-5' />
                                {t('projectsCardBtn')}
                            </a>
                            <a target='__blank' href='https://github.com/ValentinaBS/EntregaFinal-KibouSushi-Sanchez' className='github btn secondary-btn d-flex align-items-center column-gap-2'>
                                <BiLogoGithub className='fs-5' />
                                Github
                            </a>
                        </div>
                    </div>
                    <div className='card-footer mt-2 p-4'>
                        <p>{t('projectsCardFooter')}</p>
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
                                {t('projectsCard5Text')}
                            </p>
                            <p className='card-text'>
                                {t('projectsCard5Text2')}
                            </p>
                            <p className='card-text'>
                                {t('projectsCard5Text3')}
                            </p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <a target='__blank' href='https://pokedex-ashy-theta.vercel.app/' className='online btn primary-btn d-flex align-items-center column-gap-2'>
                                <BiWorld className='fs-5' />
                                {t('projectsCardBtn')}
                            </a>
                            <a target='__blank' href='https://github.com/ValentinaBS/pokedex' className='github btn secondary-btn d-flex align-items-center column-gap-2'>
                                <BiLogoGithub className='fs-5' />
                                Github
                            </a>
                        </div>
                    </div>
                    <div className='card-footer mt-2 p-4'>
                        <p>{t('projectsCardFooter')}</p>
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
                                {t('projectsCard6Text')}
                            </p>
                            <p className='card-text'>
                                {t('projectsCard6Text2')}
                            </p>
                            <p className='card-text'>
                                {t('projectsCard6Text3')}
                            </p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <a target='__blank' href='https://froggy-calculator.vercel.app/' className='online btn primary-btn d-flex align-items-center column-gap-2'>
                                <BiWorld className='fs-5' />
                                {t('projectsCardBtn')}
                            </a>
                            <a target='__blank' href='https://github.com/ValentinaBS/froggy-calculator' className='github btn secondary-btn d-flex align-items-center column-gap-2'>
                                <BiLogoGithub className='fs-5' />
                                Github
                            </a>
                        </div>
                    </div>
                    <div className='card-footer mt-2 p-4'>
                        <p>{t('projectsCardFooter')}</p>
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
                                {t('projectsCard7Text')}
                            </p>
                            <p className='card-text'>
                                {t('projectsCard7Text2')}
                            </p>
                            <p className='card-text'>
                                {t('projectsCard7Text3')}
                            </p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <a target='__blank' href='https://product-preview-card-component-five-inky.vercel.app/' className='online btn primary-btn d-flex align-items-center column-gap-2'>
                                <BiWorld className='fs-5' />
                                {t('projectsCardBtn')}
                            </a>
                            <a target='__blank' href='https://github.com/ValentinaBS/product-preview-card-component' className='github btn secondary-btn d-flex align-items-center column-gap-2'>
                                <BiLogoGithub className='fs-5' />
                                Github
                            </a>
                        </div>
                    </div>
                    <div className='card-footer mt-2 p-4'>
                        <p>{t('projectsCardFooter')}</p>
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