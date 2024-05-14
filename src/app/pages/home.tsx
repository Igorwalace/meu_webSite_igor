
//react
import React from 'react'

//icons
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import About from '../componentes/about'
import Projects from '../componentes/projects'
import Link from 'next/link'

const Home = () => {
    return (
        <>
            <main>
                <div className='md:w-2/4 md:fixed left-20 top-20 text-[#e5e7eb] flex items-start justify-between flex-col z-50' >
                    <div className='space-y-2' >
                        <div className='' >
                            <h1 className='md:text-5xl text-2xl font-bold' >Igor Wallace</h1>
                        </div>
                        <div>
                            <h3 className='md:text-lg text-base' >Desenvolvedor Front-End</h3>
                            <h1 className='md:text-sm text-xs text-[var(--cinza)] max-w-[70%]' >Dou vida à projetos, construindo coisas legais na internet.</h1>
                        </div>
                    </div>
                    <div className='hidden md:block md:my-32 my-5 md:text-base text-sm text-[var(--cinza)]' >
                        <div className='flex items-center justify-start gap-1' >
                            <p className='w-10 bg-[var(--cinza)] h-[1px]' ></p>
                            <span>sobre</span>
                        </div>
                        <div className='flex items-center justify-start gap-1' >
                            <p className='w-10 bg-[var(--cinza)] h-[1px]' ></p>
                            <span>projetos</span>
                        </div>
                        <div className='flex items-center justify-start gap-1' >
                            <p className='w-10 bg-[var(--cinza)] h-[1px]' ></p>
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

                <div className='flex items-end justify-center flex-col text-white w-full relative md:gap-10 gap-5' >
                    <div className='md:w-2/4 text-[var(--cinza)] md:flex items-center justify-center md:min-h-[70vh] my-5' >
                        <About />
                    </div>

                    <div className='md:w-2/4 w-full text-[var(--cinza)] flex' >
                        <Projects />
                    </div>
                </div>

            </main>
        </>
    )
}

export default Home