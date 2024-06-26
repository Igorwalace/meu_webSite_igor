'use client'
//react
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

//firebase
import { db } from '../firebase/firebaseConfig';
import { collection, getDocs } from "firebase/firestore";

//pages
import Project_single from './componentes_projects/project_single';

const Projects = () => {

    const [projectList, setProjectList] = useState<any[]>([])
    const [isProjectSingle, setIsProjectSingle] = useState<boolean>(false)
    const [sendProject, setSendProject] = useState<any[]>([])

    const loading = [1, 2, 3, 4, 5, 6]

    useEffect(() => {
        const bancoProject = async () => {
            const querySnapshot = await getDocs(collection(db, "projetos"));
            const AllProjects: any[] = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setProjectList(AllProjects)
        }
        bancoProject()
    }, [])

    const handleProjectSingle = (project: any[]) => {
        setSendProject(project)
        setIsProjectSingle(true)
    }


    return (
        <>
            <div className='w-full' >
                <h1 className="md:text-base text-base mb-3 text-white" >Meus Projetos</h1>
                <div className='grid grid-cols-2 gap-3 w-full' >
                    {
                        projectList.length < 1 &&
                        loading
                            .slice(0, 3)
                            .map((number: number, index: any) => (
                                <div
                                    className='flex flex-col items-center justify-center gap-2 w-full'
                                    key={index}
                                >
                                    <div className='md:h-[140px] w-full h-[100px] rounded-xl bg-slate-100 flex items-center justify-center' id='imageLoading'>
                                        <span className="loader"></span>
                                    </div>
                                </div>
                            ))
                    }
                    {
                        projectList.map((project: any, index: any) => (
                            <button key={index} onClick={() => handleProjectSingle(project)}  >
                                <div className='hover:scale-[1.01] duration-200 relative z-10 bg-transparent'>
                                    <Image
                                        className={`rounded-xl`}
                                        src={project.imgUrl}
                                        alt={project.title}
                                        width={300}
                                        height={300}
                                    />
                                    <div className='absolute bottom-0 top-0 left-0 right-0 flex-col flex items-center justify-end z-10 text-white bg-[rgb(0,0,0,0.5)] rounded-xl pb-2' >
                                        <h1 className='md:text-2xl text-xl font-black tracking-wide' >{project.title}</h1>
                                        <p className='md:text-sm text-xs font-medium' >{project.summary}</p>
                                    </div>
                                </div>
                            </button>
                        ))
                    }
                </div>
            </div>
            <Project_single
                setIsProjectSingle={setIsProjectSingle}
                isProjectSingle={isProjectSingle}
                sendProject={sendProject}
            />
        </>
    )
}

export default Projects