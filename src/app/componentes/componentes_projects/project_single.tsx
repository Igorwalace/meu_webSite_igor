'use client'
//shadcn
import {
    Sheet,
    SheetContent,
    SheetDescription,
} from "@/components/ui/sheet"

//react
import Image from "next/image"
import Link from "next/link"

//icons
import { IoArrowBack } from "react-icons/io5"
import { LuExternalLink } from "react-icons/lu"

interface Props {
    isProjectSingle: boolean
    setIsProjectSingle: any
    sendProject: any
}

const Project_single = ({ isProjectSingle, setIsProjectSingle, sendProject }: Props) => {

    return (
        <>
            <Sheet open={isProjectSingle} onOpenChange={setIsProjectSingle} >
                <SheetContent className="w-3/4 overflow-y-auto scrollbar-hide" >
                    <SheetDescription>
                        <div className="text-white" >
                            <div className="flex items-center justify-between border-b-[1px] border-b-[var(--cinza)] pb-5" >

                                <button onClick={() => setIsProjectSingle(false)} className='hover:scale-105 duration-200 outline-none' ><IoArrowBack size={20} /></button>
                                <Link href={sendProject.url} target='_blank' className="hover:scale-105 duration-200 hover:text-[#fbf2f2] text-base flex items-center justify-center gap-1" >
                                    Projeto
                                    <span><LuExternalLink /></span>
                                </Link>
                            </div>

                            <div className="border-b-[1px] border-b-[var(--cinza)] text-center py-2" >
                                <h1 className="md:text-xl text-base" >{sendProject.title}</h1>
                            </div>

                            <div className="py-3" >
                                <h1 className="md:text-base text-sm" >Sobre</h1>
                                <span className="md:text-sm text-xs font-light text-[var(--cinza)]" >{sendProject.about}</span>
                            </div>

                            <div className="py-3">
                                {
                                    sendProject.banner ?
                                        <Image
                                            className='w-full h-full rounded-md'
                                            src={sendProject.banner}
                                            alt={sendProject.title}
                                            width={300}
                                            height={300}
                                        />
                                        :
                                        <Image
                                            className='w-full h-full rounded-md'
                                            src={sendProject.imgUrl}
                                            alt={sendProject.title}
                                            width={300}
                                            height={300}
                                        />
                                }
                            </div>

                            <div className="py-3" >
                                <h1 className="md:text-base text-sm" >Tecnologias usadas</h1>
                                <span className="md:text-sm text-xs font-light text-[var(--cinza)]" >{sendProject.Technologies_used}</span>
                            </div>

                            <div className="py-3" >
                                <h1 className="md:text-base text-sm" >WebSite</h1>
                                <Link href={sendProject.url} target='_blank' className="md:text-sm underline text-xs font-light text-[var(--cinza)]" >{sendProject.url}</Link>
                            </div>

                            <div className="py-3" >
                                <h1 className="md:text-base text-sm" >Código</h1>
                                <Link href={sendProject.url} className="md:text-sm underline text-xs font-light text-[var(--cinza)]" >{sendProject.GitHub}</Link>
                            </div>

                        </div>
                    </SheetDescription>
                </SheetContent>
            </Sheet>
        </>
    )
}

export default Project_single