import './home.css';
import profile from '../../assets/profile.jpg'

export default function Home() {

    return (
        <header id='home' className='d-flex flex-column-reverse flex-md-row column-gap-5 mx-auto'>
            <img className='header-img mt-5 mt-md-0 mx-auto' src={profile} alt='Profile picture' />
            <div className='text-center text-md-start'>
                <h1 className='header-title'>
                    Hello! I'm Valentina, a Full-Stack Web Developer
                </h1>
                <p className='my-4'>
                From responsive designs to seamless user interactions, I'm dedicated to enhancing the online experience one line of code at a time. 
                </p>
                <a href='https://drive.google.com/file/d/1DP7WRef-ot-3R1eVIgjEIh-e-JcTEEYY/view?usp=sharing' className='btn btn-lg primary-btn me-3'>
                    Check my CV
                </a>
                <a href='#projects' className='btn btn-lg secondary-btn'>
                    My projects
                </a>
            </div>
        </header>
    )
}