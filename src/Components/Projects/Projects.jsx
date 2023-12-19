import './projects.css';
import { BiSolidFileBlank, BiLogoTypescript, BiLogoGithub, BiLogoFirebase, BiLogoJavascript, BiLogoReact, BiWorld, BiLogoHtml5, BiLogoCss3, BiLogoBootstrap, BiLogoVuejs, BiLogoJava, BiLogoSpringBoot, BiLogoPostgresql } from 'react-icons/bi';
import { SiExpress, SiMysql } from "react-icons/si";
import { useTranslation } from 'react-i18next';
import project1 from '../../assets/projects/projects-homebanking.png'
import project2 from '../../assets/projects/projects-events.png'
import project3 from '../../assets/projects/projects-sushi.png'
import project4 from '../../assets/projects/projects-pokedex.png'
import project5 from '../../assets/projects/projects-calculator.png'
import project6 from '../../assets/projects/projects-card.png'
import project7 from '../../assets/projects/projects-ecommerce.png'
import project8 from '../../assets/projects/projects-recipe-nest.png'

export default function Projects() {
    const { t } = useTranslation()

    const getTechnologyIcon = (technology) => {
        switch (technology) {
            case 'HTML':
                return <BiLogoHtml5 className='fs-4 me-1' />;
            case 'CSS':
                return <BiLogoCss3 className='fs-4 me-1' />;
            case 'Bootstrap':
                return <BiLogoBootstrap className='fs-4 me-1' />;
            case 'Vue.js':
                return <BiLogoVuejs className='fs-4 me-1' />;
            case 'Java':
                return <BiLogoJava className='fs-4 me-1' />;
            case 'Spring':
                return <BiLogoSpringBoot className='fs-4 me-1' />;
            case 'PostgreSQL':
                return <BiLogoPostgresql className='fs-4 me-1' />;
            case 'React.js': 
            case 'React':
                return <BiLogoReact className='fs-4 me-1' />;
            case 'Firebase':
                return <BiLogoFirebase className='fs-4 me-1' />;
            case 'Javascript':
                return <BiLogoJavascript className='fs-4 me-1' />;
            case 'Typescript':
                return <BiLogoTypescript className='fs-4 me-1' />;
            case 'Express':
                return <SiExpress className='fs-5 me-1' />;
            case 'MySQL':
                return <SiMysql className='fs-4 me-1' />;
            default:
                return <BiSolidFileBlank className='fs-4 me-1' />;
        }
    };

    const projectsData = [
        {
            name: 'Green Plates',
            image: project8,
            text: [t('projectsCard8Text'), t('projectsCard8Text2')],
            onlineLink: '',
            githubLink: 'https://github.com/ValentinaBS/recipe-nest',
            technologies: ['HTML', 'CSS', 'Bootstrap', 'React', 'Typescript', 'Express', 'MySQL']
        },
        {
            name: 'Purity',
            image: project7,
            text: [t('projectsCard1Text'), t('projectsCard1Text2')],
            onlineLink: '',
            githubLink: 'https://github.com/ValentinaBS/e-commerce-mindhub',
            technologies: ['HTML', 'CSS', 'Bootstrap', 'Vue.js', 'Java', 'Spring', 'PostgreSQL']
        },
        {
            name: 'Mindhub Bank',
            image: project1,
            text: [
                t('projectsCard2Text'),
                t('projectsCard2Text2')
            ],
            onlineLink: '',
            githubLink: 'https://github.com/ValentinaBS/MindhubBankValentinaSanchez',
            technologies: ['HTML', 'CSS', 'Bootstrap', 'Vue.js', 'Java', 'Spring', 'PostgreSQL']
        },
        {
            name: 'Amazing Events',
            image: project2,
            text: [
                t('projectsCard3Text'),
                t('projectsCard3Text2'),
            ],
            onlineLink: 'https://amazing-events-vue-valentina-sanchez.vercel.app/',
            githubLink: 'https://github.com/ValentinaBS/AmazingEventsVueValentinaSanchez/tree/main',
            technologies: ['HTML', 'CSS', 'Bootstrap', 'Vue.js']
        },
        {
            name: 'Kibou Sushi',
            image: project3,
            text: [
                t('projectsCard4Text'),
                t('projectsCard4Text2'),
            ],
            onlineLink: 'https://kibou-sushi.vercel.app/',
            githubLink: 'https://github.com/ValentinaBS/EntregaFinal-KibouSushi-Sanchez',
            technologies: ['HTML', 'CSS', 'React.js', 'Firebase']
        },
        {
            name: 'Carrousel Pokédex',
            image: project4,
            text: [
                t('projectsCard5Text'),
                t('projectsCard5Text2'),
                t('projectsCard5Text3'),
            ],
            onlineLink: 'https://pokedex-ashy-theta.vercel.app/',
            githubLink: 'https://github.com/ValentinaBS/pokedex',
            technologies: ['HTML', 'CSS', 'Javascript']
        },
        {
            name: 'Froggy Calculator',
            image: project5,
            text: [
                t('projectsCard6Text'),
                t('projectsCard6Text2'),
                t('projectsCard6Text3'),
            ],
            onlineLink: 'https://froggy-calculator.vercel.app/',
            githubLink: 'https://github.com/ValentinaBS/froggy-calculator',
            technologies: ['HTML', 'CSS', 'Javascript']
        },
        {
            name: 'Product Card',
            image: project6,
            text: [
                t('projectsCard7Text'),
                t('projectsCard7Text2'),
                t('projectsCard7Text3'),
            ],
            onlineLink: 'https://product-preview-card-component-five-inky.vercel.app/',
            githubLink: 'https://github.com/ValentinaBS/product-preview-card-component',
            technologies: ['HTML', 'CSS']
        }
    ];

    return (
        <section id='projects'>
            <h2 className='text-center mb-5'>
                {t('projectsTitle')}
            </h2>
            <div className='mx-3 mx-md-5 d-flex flex-wrap justify-content-around align-items-center row-gap-5 column-gap-5'>
                {projectsData.map((project, index) => (
                    <article key={index} className='card'>
                        <img src={project.image} className='card-img-top' alt={`Project ${index}`} />
                        <div className='card-body p-4'>
                            <h3 className='card-title'>
                                {project.name}
                            </h3>
                            <div className='my-4'>
                                {project.text.map((text, idx) => (
                                    <p key={idx} className='card-text'>
                                        {text}
                                    </p>
                                ))}
                            </div>
                            <div className='d-flex justify-content-between'>
                                {project.onlineLink &&
                                    <a target='__blank' href={project.onlineLink} className='online btn primary-btn d-flex align-items-center column-gap-2'>
                                        <BiWorld className='fs-5' />
                                        {t('projectsCardBtn')}
                                    </a>
                                }
                                <a target='__blank' href={project.githubLink} className='github btn secondary-btn d-flex align-items-center column-gap-2'>
                                    <BiLogoGithub className='fs-5' />
                                    Github
                                </a>
                            </div>
                        </div>
                        <div className='card-footer mt-2 p-4'>
                            <p>{t('projectsCardFooter')}</p>
                            <div className='d-flex flex-wrap column-gap-4 row-gap-3 mb-3'>
                                {project.technologies.map((tech, idx) => (
                                    <div key={idx}>
                                        {getTechnologyIcon(tech)}
                                        <span>{tech}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}