'use client'
//react
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

//icons
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

//pages
import About from '../componentes/about'
import Projects from '../componentes/projects'
import Contact from '../componentes/contact'

const Home = () => {

    const scrollRef = useRef(null);
    const [scrollYPosition, setScrollYPosition] = useState(0);

    const linkApp = 'https://expo.dev/artifacts/eas/8YKgMskwTbaBS6L3UppdoV.apk'

    useEffect(() => {

        const updateScrollPosition = () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            setScrollYPosition(scrollY);
        };
        window.addEventListener('scroll', updateScrollPosition);
        return () => window.removeEventListener('scroll', updateScrollPosition);

    }, [scrollYPosition])

    return (
        <>
            <main ref={scrollRef} >
                <div className={`backdrop-blur-sm duration-200 md:hidden md:static fixed ${scrollYPosition > 20 ? 'top-0' : '-top-96'} left-0 right-0 flex items-center justify-start z-40 p-2 pl-7 text-white`} >
                    {
                        scrollYPosition > 719 ? (
                            <h1>Contato</h1>
                        ) : scrollYPosition >= 260 ? (
                            <h1>Projetos</h1>
                        ) : (
                            <h1>Sobre</h1>
                        )
                    }
                </div>

                <div className='md:w-2/4 md:fixed left-20 top-20 text-[#e5e7eb] flex items-start justify-between flex-col z-30 mb-5' >
                    <div className='space-y-2' >
                        <div className='' >
                            <h1 className='md:text-5xl text-2xl font-bold' >Igor Wallace</h1>
                        </div>
                        <div>
                            <h3 className='md:text-lg text-base' >Desenvolvedor Front-End</h3>
                            <h1 className='md:text-sm text-xs text-[var(--cinza)] md:ma-w-[80%] max-w-[90%]' >Dou vida à projetos, construindo coisas legais na internet.</h1>
                        </div>
                        <div className='pt-3' >
                            <h3 className='text-sm max-w-[90%] md:max-w-[70%]' >Você também pode baixar o app deste site clicando<Link className='text-[var(--cinza)]' href={linkApp} > aqui </Link>(apenas para Android).</h3>
                        </div>
                    </div>
                    <div className='hidden md:block md:my-32 my-5 md:text-base text-sm text-[var(--cinza)]' >
                        <div className={`flex items-center justify-start gap-1 ${scrollYPosition < 260 && 'text-white'}`} >
                            <p className={`${scrollYPosition < 260 ? 'bg-white w-14' : 'w-10 bg-[var(--cinza)]'} duration-200 h-[1px]`} ></p>
                            <span>sobre</span>
                        </div>
                        <div className={`flex items-center justify-start gap-1 ${scrollYPosition >= 260 && scrollYPosition <= 719 && 'text-white'}`} >
                            <p className={`${scrollYPosition >= 260 && scrollYPosition <= 719 ? 'bg-white w-14' : 'w-10 bg-[var(--cinza)]'} duration-200 h-[1px]`} ></p>
                            <span>projetos</span>
                        </div>
                        <div className={`flex items-center justify-start gap-1 ${scrollYPosition > 719 && 'text-white'}`} >
                            <p className={`${scrollYPosition > 719 ? 'bg-white w-14' : 'w-10 bg-[var(--cinza)]'} duration-200 h-[1px]`} ></p>
                            <span>contato</span>
                        </div>
                    </div>
                    <div className='flex items-center justify-center gap-3 text-[var(--cinza)] md:m-0 mt-5' >
                        <Link href='https://github.com/Igorwalace' target="_blank" className='hover:text-white hover:scale-105 duration-200 cursor-pointer' >
                            <FaGithub size={30} />
                        </Link>
                        <Link href='https://www.linkedin.com/in/igor-wallace-03b9482a7/' target='_blank' className='hover:text-white hover:scale-105 duration-200 cursor-pointer' >
                            <FaLinkedin size={30} />
                        </Link>
                        <Link href='mailto:igorwallacy3@gmail.com' target='_blank' className='hover:text-white hover:scale-105 duration-200 cursor-pointer' >
                            <MdEmail size={30} />
                        </Link>
                        <Link href='https://www.instagram.com/igor_walace/' target='_blank' className='hover:text-white hover:scale-105 duration-200 cursor-pointer' >
                            <FaInstagram size={30} />
                        </Link>
                    </div>
                </div>

                <div className='flex items-end justify-center flex-col text-white w-full relative md:gap-10 gap-5 z-20' >
                    <div className='md:w-2/4 text-[var(--cinza)] md:flex items-center justify-center md:min-h-[70vh] my-5' >
                        <About />
                    </div>

                    <div className='md:w-2/4 w-full text-[var(--cinza)] flex' >
                        <Projects />
                    </div>

                    <div className='md:w-2/4 w-full text-[var(--cinza)] flex items-center justify-center mt-5' >
                        <Contact />
                    </div>
                </div>
            </main >
        </>
    )
}

export default Home