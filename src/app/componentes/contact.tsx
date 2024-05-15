'use client'
//react
import React, { useState } from 'react'

//emailJs
import emailjs from '@emailjs/browser'

//shadcn
import { useToast } from "@/components/ui/use-toast"


const Contact = () => {
    const { toast } = useToast()

    const [name, setName] = useState<any>('')
    const [email, setEmail] = useState<any>('')
    const [message, setMensage] = useState<any>('')

    const handleSubmitForm = (e: any) => {
        e.preventDefault()
        if (name === '' || email === '' || message === '') {
            toast({
                title: "Atenção!",
                description: "Todos os campos devem ser preenchidos",
            })
            return
        }

        const templateParams = {
            from_name: name,
            mensagem: message,
            email: email
        }

        emailjs.send("service_12fgc7n", "template_f43wquw", templateParams, "xqQrbFlQcsHMYCwvo",)
            .then((response: any) => {
                toast({
                    title: "Sucesso",
                    description: "Seu email foi enviado e logo será respondido.",
                })
            }, (err: any) => {
                toast({
                    title: "Erro.",
                    description: "Ocorreu algum erro, recarregue o site",
                })
            })

    }

    return (
        <>
            <main>
                <div className="py-3" >
                    <h1 className="md:text-base text-sm text-white" >Deseja entrar em contato comigo?</h1>
                    <span className="md:text-[13px] text-[11px] font-light text-[var(--cinza)] w-3/4" >Você pode me avisar mensagem em umas das redes, ou me enviar um email abaixo.</span>
                </div>
                <form className='flex items-center justify-center flex-col gap-3' onSubmit={handleSubmitForm} >
                    <input
                        type="text"
                        className='w-full bg-transparent border-[1px] border-[var(--cinza)] rounded-md outline-none p-2 placeholder:text-sm md:text-sm text-xs'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Nome' />
                    <input
                        type="email"
                        className='w-full bg-transparent border-[1px] border-[var(--cinza)] rounded-md outline-none p-2 placeholder:text-sm md:text-sm text-xs'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email' />
                    <textarea
                        className='w-full bg-transparent border-[1px] border-[var(--cinza)] rounded-md outline-none p-2 placeholder:text-sm resize-none md:text-sm text-xs'
                        value={message}
                        onChange={(e) => setMensage(e.target.value)}
                        placeholder='Mensagem' />
                    <button className='w-2/4 text-center rounded-md outline-none bg-[var(--blue)] text-white p-2' >Enviar</button>
                </form>
            </main>
        </>
    )
}

export default Contact