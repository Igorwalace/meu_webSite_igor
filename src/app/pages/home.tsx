
//react
import React from 'react'

//icons
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import About from '../componentes/about'
import Projects from '../componentes/projects'

const Home = () => {
    return (
        <>
            <main>
                <div className='md:w-2/4 md:fixed left-20 top-20 text-[#e5e7eb] flex items-start justify-between flex-col' >
                    <div className='space-y-2' >
                        <div className='' >
                            <h1 className='md:text-5xl text-2xl font-bold' >Igor Wallace</h1>
                        </div>
                        <div>
                            <h3 className='md:text-lg text-base' >Desenvolvedor Back e Front end</h3>
                            <h1 className='md:text-sm text-xs text-[var(--cinza)] max-w-[70%]' >Dou vida à projetos contruindo coisas legais online.</h1>
                        </div>
                    </div>
                    <div className='md:my-32 my-5 md:text-base text-sm' >
                        <div>
                            <span>----</span>
                            <span>sobre</span>
                        </div>
                        <div>
                            <span>----</span>
                            <span>sobre</span>
                        </div>
                        <div>
                            <span>----</span>
                            <span>sobre</span>
                        </div>
                    </div>
                    <div className='flex items-center justify-center gap-3 text-[var(--cinza)]' >
                        <span className='hover:text-white hover:scale-105 duration-200 cursor-pointer' >
                            <FaGithub size={30} />
                        </span>
                        <span className='hover:text-white hover:scale-105 duration-200 cursor-pointer' >
                            <FaLinkedin size={30} />
                        </span>
                        <span className='hover:text-white hover:scale-105 duration-200 cursor-pointer' >
                            <MdEmail size={30} />
                        </span>
                        <span className='hover:text-white hover:scale-105 duration-200 cursor-pointer' >
                            <FaInstagram size={30} />
                        </span>
                    </div>
                </div>

                <div className='flex items-end justify-start flex-col text-white w-full relative md:gap-10 gap-5' >
                    <div className='md:w-2/4 text-[var(--cinza)] flex items-center justify-center h-[80vh]' >
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