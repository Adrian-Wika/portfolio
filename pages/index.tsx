import { AppShell } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import NavbarManager from '../components/navbar/NavbarManager'
import MainCanvas from '../components/animatedComponents/CanvasManager'



export default function IndexPage() {
  const [opened, { toggle }] = useDisclosure()
  return (
    <div>
      <AppShell
        header={{ height: 60 }}
        navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
        padding="md"
      >
        <NavbarManager {...{ opened, toggle }} />
        {/* <AppShell.Main>
          BBB
        </AppShell.Main> */}
      </AppShell>

      <MainCanvas />
    </div>


  )
}
