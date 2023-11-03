import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        },
        resources: {
            en: {
                translation: {
                    navHome: 'Home',
                    navAbout: 'About Me',
                    navProjects: 'Projects',
                    navContact: 'Contact',
                    homeTitle: "Hello! I'm Valentina, a Full-Stack Web Developer",
                    homeSubtitle: "From responsive designs to seamless user interactions, I'm dedicated to enhancing the online experience one line of code at a time.",
                    homePrimaryBtn: 'Check my CV',
                    homeSecondaryBtn: 'My projects',
                    aboutTitle: 'About Me',
                    aboutText1: "As a Full Stack Web Developer I have experience in functional projects carried out under agile methodologies, focusing on continuous improvement of the user experience.",
                    aboutText2: "I am passionate about the IT world and I believe it has a huge impact on our daily lives. Being able to create creative solutions to the problems that arise, collaborate with diverse work teams and continuously improve are the values I admire most in this field.",
                    aboutText3: 'My goal is to develop my professional career as a Web Developer, being part of a company that allows me to apply everything I have learned so far, gain experience and continue to grow both personally and professionally.',
                    aboutBtn: 'Contact Me!',
                    projectsTitle: 'My Projects',
                    projectsCard1Text: 'Purity is a responsive, easy-to-use and minimalistic e-commerce site.',
                    projectsCard1Text2: 'This project is an e-commerce of beauty products where customers can create an account, search for products with advanced filters and add them to their cart, and finally place their order.',
                    projectsCard2Text: 'Mindhub Bank is a responsive, secure and easy-to-use homebanking app.',
                    projectsCard2Text2: 'This project showcases my proficiency in both front-end and back-end development while offering a glimpse into my skills as a budding Full Stack JAVA developer.',
                    projectsCard3Text: 'Amazing Events is a responsive and easy-to-use events page.',
                    projectsCard3Text2: 'This project includes filtered categories and details about different events from the Amazing Events API, besides a special stats page to see how the events are doing and a contact form.',
                    projectsCard4Text: 'Kibou Sushi is a responsive, minimalistic and easy-to-use e-commerce.',
                    projectsCard4Text2: 'This project includes a whole sushi catalogue, with different categories and the possibility of adding products to your cart. You can also go to checkout and generate an order code to identify your purchase.',
                    projectsCard5Text: 'Carrousel Pokédex is a responsive, fun and simple Pokédex.',
                    projectsCard5Text2: 'This project includes a Pokédex with the first 151 Pokémon coming from the PokéAPI, with the possibility of searching for a specific Pokémon using their name or number.',
                    projectsCard5Text3: 'The carrousel display makes the navigation more dynamic and fun!',
                    projectsCard6Text: 'Froggy Calculator is a responsive, cute and simple frog-themed calculator.',
                    projectsCard6Text2: "This project includes a fully functional simple calculator, with a little surprise sound if you click on the 'equals' button.",
                    projectsCard6Text3: 'It also includes different colors for special buttons to improve user experience and interfaces.',
                    projectsCard7Text: 'Product Card is a responsive and minimalistic product preview card.',
                    projectsCard7Text2: 'This project includes a visual design of a product preview, trying to transform a previously made design from an image into code.',
                    projectsCard7Text3: 'The clean interface improves user experience, with a clear call-to-action button.',
                    projectsCardFooter: 'Made with:',
                    projectsCardBtn: 'View Online',
                    contactTitle: 'Contact Me',
                    contactInputName: 'Full Name',
                    contactInputEmail: 'Email address',
                    contactInputSubject: 'What would you like to ask?',
                    contactInputSubjectPlaceholder: '- Select subject -',
                    contactInputSubject1: "I'd like to ask a question",
                    contactInputSubject2: "I'd like to start a project",
                    contactInputSubject3: "I'd like to make a proposal",
                    contactInputSubject4: 'Other',
                    contactInputMessage: 'Your message',
                    contactInputMessagePlaceholder: "I'd like to chat about...",
                    contactBtn: 'Send'
                }
            },
            es: {
                translation: {
                    navHome: 'Inicio',
                    navAbout: 'Sobre Mí',
                    navProjects: 'Proyectos',
                    navContact: 'Contacto',
                    homeTitle: "¡Hola! Soy Valentina, Desarrolladora Web Full-Stack",
                    homeSubtitle: "Desde diseños responsivos hasta interacciones de usuario fluidas, me dedico a mejorar la experiencia de usuarios de la web, una línea de código a la vez.",
                    homePrimaryBtn: 'Ver mi CV',
                    homeSecondaryBtn: 'Mis proyectos',
                    aboutTitle: 'Sobre Mí',
                    aboutText1: "Como Desarrolladora Web Full Stack cuento con experiencia en proyectos funcionales realizados bajo metodologías ágiles, centrandome en la mejora continua de la experiencia del usuario.",
                    aboutText2: "Me apasiona el mundo de la tecnología y creo que tiene un gran impacto en nuestra vida diaria. Ser capaz de crear soluciones creativas a los problemas que surgen, colaborar con equipos de trabajo diversos y mejorar continuamente son los valores que más admiro en este campo.",
                    aboutText3: 'Mi objetivo es desarrollar mi carrera profesional como Desarrolladora Web, formando parte de una empresa que me permita aplicar todo lo aprendido hasta ahora, adquirir experiencia y seguir creciendo tanto personal, como profesionalmente.',
                    aboutBtn: '¡Contáctame!',
                    projectsTitle: 'Mis Proyectos',
                    projectsCard1Text: 'Purity es un e-commerce responsivo, fácil de usar y minimalista.',
                    projectsCard1Text2: 'Este proyecto es una plataforma de venta de productos de belleza en la que los clientes pueden crear una cuenta, buscar productos con filtros avanzados, agregar productos a su carrito y, finalmente, realizar su pedido.',
                    projectsCard2Text: 'Mindhub Bank es una página de homebanking responsiva, segura y fácil de usar.',
                    projectsCard2Text2: 'Este proyecto muestra mi experiencia tanto en el desarrollo front-end como en el back-end y ofrece una idea de mis habilidades como desarrolladora Full Stack JAVA.',
                    projectsCard3Text: 'Amazing Events es una página de eventos responsiva y fácil de usar.',
                    projectsCard3Text2: 'Este proyecto incluye categorías filtradas y detalles sobre diferentes eventos de la API de Amazing Events, además de una página especial de estadísticas para ver cómo van los eventos y un formulario de contacto.',
                    projectsCard4Text: 'Kibou Sushi es un e-commerce responsivo, minimalista y fácil de usar.',
                    projectsCard4Text2: 'Este proyecto incluye un catálogo completo de sushi, con diferentes categorías y la posibilidad de agregar productos a tu carrito. También se puede ir al checkout y generar un código de pedido para identificar tu compra.',
                    projectsCard5Text: 'Carrousel Pokédex es una Pokédex responsivo, divertido y sencillo.',
                    projectsCard5Text2: 'Este proyecto incluye una Pokédex con los primeros 151 Pokémon de la PokéAPI, con la posibilidad de buscar un Pokémon específico por su nombre o número.',
                    projectsCard5Text3: '¡El carrusel hace que la navegación sea más dinámica y divertida!',
                    projectsCard6Text: 'Froggy Calculator es una calculadora responsiva, linda y con temática de ranas.',
                    projectsCard6Text2: 'Este proyecto incluye una calculadora simple y funcional, con un sonido sorpresa si haces clic en el botón "igual".',
                    projectsCard6Text3: 'También incluye diferentes colores para los botones especiales, mejorando la experiencia del usuario y la interfaz.',
                    projectsCard7Text: 'Product Card es una vista previa de un producto, responsiva y minimalista.',
                    projectsCard7Text2: 'Este proyecto incluye un diseño visual de una vista previa de producto, intentando transformar un diseño previamente hecho a partir de una imagen en código.',
                    projectsCard7Text3: 'La interfaz mejora la experiencia del usuario, resaltando el botón de compra.',
                    projectsCardFooter: 'Hecho con:',
                    projectsCardBtn: 'Ver Online',
                    contactTitle: 'Contáctame',
                    contactInputName: 'Nombre Completo',
                    contactInputEmail: 'Correo Electrónico',
                    contactInputSubject: '¿Qué te gustaría preguntar?',
                    contactInputSubjectPlaceholder: '- Selecciona un asunto -',
                    contactInputSubject1: 'Me gustaría hacer una pregunta',
                    contactInputSubject2: 'Me gustaría iniciar un proyecto',
                    contactInputSubject3: 'Me gustaría hacer una propuesta',
                    contactInputSubject4: 'Otro',
                    contactInputMessage: 'Tu Mensaje',
                    contactInputMessagePlaceholder: 'Me gustaría hablar sobre...',
                    contactBtn: 'Enviar'
                }
            }
        }
    });


export default i18n;