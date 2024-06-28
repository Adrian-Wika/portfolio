'use client'
import { AppShell } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react'
import MainCanvas from '../components/animatedComponents/CanvasManager'
import ContactManager from '../components/content/contact/ContactManager'
import HomeManager from '../components/content/home/HomeManager'
import ProjectsManager from '../components/content/projects/ProjectsManager'
import TechnologiesManager from '../components/content/technologies/TechnologiesManager'
import NavbarManager from '../components/navbar/NavbarManager'

type pages = 'home' | 'contact' | 'projects' | 'technologies'

export const MainContext = createContext({} as {
  activePage: pages
  setActivePage: Dispatch<SetStateAction<pages>>
})


const PageSwitch = ({ page }: { page: pages }) => {
  switch (page) {
    case 'home':
      return <HomeManager />
    case 'contact':
      return <ContactManager />
    case 'projects':
      return <ProjectsManager />
    case 'technologies':
      return <TechnologiesManager />

    default:
      return <div className=' text-center m-[20%] font-bold text-xl'>Coś poszło nie tak...</div>
  }
}

function adjustBackgroundSize() {
  const content = document.getElementById('content')
  const bg = document.getElementById('bg')

  if (bg && content) {
    bg.style.width = `${content.clientWidth}px`
    bg.style.height = `${content.clientHeight}px`
  }
}

function ensureSingleCanvas() {
  // Znajdź wszystkie elementy canvas w drzewie DOM
  const canvases = document.querySelectorAll('canvas')

  // Sprawdź, ile jest elementów canvas
  if (canvases.length > 1) {
    // Przechodź przez wszystkie elementy oprócz pierwszego i je usuń
    for (let i = 1; i < canvases.length; i++) {
      canvases[i]?.parentNode?.removeChild(canvases[i])
    }
  }
}

export default function IndexPage() {
  const [activePage, setActivePage] = useState('home' as pages)
  const [opened, { toggle }] = useDisclosure()

  useEffect(() => {
    setInterval(() => {
      if (typeof window !== 'undefined') {
        adjustBackgroundSize()
        ensureSingleCanvas()
      }
    }, 1)
  }, [])

  return (
    <div>
      <div id='content' className="flex items-center justify-center min-h-screen mt-0">
        <div className='container mx-auto'>
          <MainContext.Provider value={{ activePage, setActivePage }}>
            <AppShell
              header={{ height: 60 }}
              navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
              padding="sm"
            >
              <NavbarManager {...{ opened, toggle }} />
              <AppShell.Main>
                <div className='mt-0 md:mt-[10vh]'>
                  <div className='flex justify-center scale-[80%] md:scale-100 lg:justify-end'>
                    <PageSwitch page={activePage} />
                  </div>
                </div>
              </AppShell.Main>
            </AppShell>
          </MainContext.Provider>
        </div>
      </div>

      <div id='bg' className='absolute top-0 left-0 z-[-10] h-[100%] gradient-background'>
        <MainCanvas />
      </div>
    </div>
  )
}