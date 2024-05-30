import { AppShell } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import NavbarManager from '../components/navbar/NavbarManager'
import MainCanvas from '../components/animatedComponents/CanvasManager'
import { createContext, Dispatch, SetStateAction, useState } from 'react'

type pages = 'home' | 'contact' | 'projects' | 'technologies'

export const MainContext = createContext({} as {
  activePage: pages
  setActivePage: Dispatch<SetStateAction<pages>>
})

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

      <MainCanvas />
    </MainContext.Provider>


  )
}
