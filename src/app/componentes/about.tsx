import React from 'react'

const About = () => {
    return (
        <>
            <div className='' >
                <div className="pb-3" >
                    <h1 className="md:text-base text-base text-white" >Sobre mim</h1>
                </div>
                <p className='text-justify md:text-[15px] text-sm' >
                    meu nome é <span className='text-white' >Igor Wallace</span>, tenho 18 anos. apaixonado por tecnologia e
                    por dar a vida a projetos. em 2023, decidi me tornar desenvolvedor,
                    motivado por várias sugestões do <span className='text-white' >meu pai</span>. desde então, tenho me dedicado,
                    buscando aprimorar meus conhecimentos e habilidades na área.
                    <br></br>
                    <br></br>
                    hoje, me encontro com mais de 1 ano de experiência na área de Desenvolvedor. apesar da pouca experiência, já possuo alguns projetos pessoais que
                    demonstram ainda mais meus <span className='text-white' >conhecimentos</span>.
                    <br></br>
                    <br></br>
                    {/* meu maior sonho é conseguir morar nos EUA e
                        trabalhar como Desenvolvedor de Software. estou sempre me mantendo atualizado sobre as últimas noticías do mercado.
                        <br></br>
                        <br></br> */}
                    quando não estou na frente da tela do computador, você pode me encontrar estudando <span className='text-white' >Inglês </span>
                    (de forma independente), <span className='text-white' >jogando</span> ou até mesmo <span className='text-white' >bagunçando meu quarto</span>.
                    <br></br>
                    <br></br>
                    se você possui alguma ideia, algum projeto para tirar do papel ou deseja apenas me avisar um olá, estou <span className='text-white' >sempre</span> aberto á conversas.
                </p>
            </div>
        </>
    )
}

export default About
