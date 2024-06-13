import { AppShell } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import NavbarManager from '../components/navbar/NavbarManager'
import MainCanvas from '../components/animatedComponents/CanvasManager'
import { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react'
import HomeManager from '../components/content/home/HomeManager'
import TechnologiesManager from '../components/content/technologies/TechnologiesManager'
import ContactManager from '../components/content/contact/ContactManager'

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
      return <div>projects</div>
    case 'technologies':
      return <TechnologiesManager />

    default:
      return <div className=' text-center m-[20%] font-bold text-xl'>Coś poszło nie tak...</div>
  }
}

export default function IndexPage() {
  const [activePage, setActivePage] = useState('home' as pages)
  const [opened, { toggle }] = useDisclosure()

  return (
    <MainContext.Provider value={{ activePage, setActivePage }}>
      <AppShell
        header={{ height: 60 }}
        navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
        padding="md"
      >
        <NavbarManager {...{ opened, toggle }} />
      </AppShell>
      <div>
        <div className='flex justify-center h-[100vh] items-center  mx-[10px] md:justify-end md:mr-[10vw]'>
          <PageSwitch page={activePage} />
        </div>
        <div className=' absolute top-0 left-0 z-[-1]'>
          <MainCanvas />
        </div>
      </div>
    </MainContext.Provider>


  )
}
