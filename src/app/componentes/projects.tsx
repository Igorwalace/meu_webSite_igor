'use client'
//react
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

//firebase
import { db } from '../firebase/firebaseConfig';
import { collection, getDocs } from "firebase/firestore";

const Projects = () => {

    const [projectList, setProjectList] = useState<any[]>([])

    useEffect(() => {
        const bancoProject = async () => {
            const querySnapshot = await getDocs(collection(db, "projetos"));
            const AllProjects: any[] = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setProjectList(AllProjects)
        }
        bancoProject()
    }, [])


    return (
        <div>
            <h1 className='mb-5' >Meus Projetos</h1>
            <div className='grid grid-cols-2 gap-3' >
                {
                    projectList.map((project: any, index: any) => (
                        <div key={index} >
                            <div className='hover:scale-[1.01] duration-200 cursor-pointer relative z-10 bg-transparent' >
                                <Image
                                    className={`rounded-xl`}
                                    src={project.gif}
                                    alt={project.title}
                                    width={300}
                                    height={300}
                                />
                                <div className='absolute bottom-0 top-0 left-0 right-0 flex-col flex items-center justify-end z-10 text-white bg-[rgb(0,0,0,0.5)] rounded-xl pb-2' >
                                    <h1 className='md:text-2xl text-xl font-black tracking-wide' >{project.title}</h1>
                                    <p className='md:text-sm text-xs font-medium' >{project.summary}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects