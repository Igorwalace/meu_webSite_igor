import React from 'react'

const Contact = () => {
    return (
        <>
            <main>
                <div className="py-3" >
                    <h1 className="md:text-base text-sm" >Deseja entrar em contato comigo?</h1>
                    <span className="md:text-[13px] text-[11px] font-light text-[var(--cinza)] w-3/4" >Você pode me avisar mensagem nas redes ao lado, ou me enviar um email abaixo.</span>
                </div>
                <form className='flex items-center justify-center flex-col gap-3 ' >
                    <input type="text" className='w-full bg-transparent border-[1px] border-[var(--cinza)] rounded-md outline-none p-2 placeholder:text-sm' placeholder='Nome' />
                    <input type="email" className='w-full bg-transparent border-[1px] border-[var(--cinza)] rounded-md outline-none p-2 placeholder:text-sm' placeholder='Email' />
                    <textarea className='w-full bg-transparent border-[1px] border-[var(--cinza)] rounded-md outline-none p-2 placeholder:text-sm resize-none' placeholder='Mensagem' />
                    <button className='w-2/4 text-center rounded-md outline-none bg-[var(--blue)] text-white p-2 border-[1px] border-[var(--cinza)]' >Enviar</button>
                </form>
            </main>
        </>
    )
}

export default Contact