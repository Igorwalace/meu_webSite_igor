'use client'

//shadcn
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
} from "@/components/ui/sheet"
import Link from "next/link"

//react
import React from 'react'
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
                <SheetContent className="text-[var(--cinza)] w-full" >
                    <SheetDescription>
                        <div>
                            <div className="flex items-center justify-between border-b-[1px] border-b-[var(--cinza)] pb-5" >

                                <span><IoArrowBack size={20} /></span>
                                <Link href={sendProject.url} target='_blank' className="md:text-base text-xs flex items-center justify-center gap-1" >
                                    Projeto
                                    <span><LuExternalLink /></span>
                                </Link>
                            </div>

                            <div className="border-b-[1px] border-b-[var(--cinza)] text-center py-2" >
                                <h1 className="md:text-xl text-base" >{sendProject.title}</h1>
                            </div>

                            <div className="py-2" >
                                <h1 className="md:text-base text-sm" >Sobre</h1>
                                <span className="md:text-sm text-xs" >{sendProject.about}</span>
                            </div>
                        </div>
                    </SheetDescription>
                </SheetContent>
            </Sheet>
        </>
    )
}

export default Project_single