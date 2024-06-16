import { AppShell, Burger, Button, Group, UnstyledButton } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { IconCode, IconComponents, IconHome } from '@tabler/icons-react'
import { MainContext } from '../../pages'
import { useContext } from 'react'
import Image from 'next/image'

type pages = 'home' | 'contact' | 'projects' | 'technologies'

const NavbarManager = ({ opened, toggle }: {
    opened: boolean
    toggle: () => void
}) => {
    const isMobile = useMediaQuery(`(max-width: 768px)`)
    const { setActivePage } = useContext(MainContext)

    function handleClick(page: pages) {
        setActivePage(page)
        if (opened)
            toggle()
    }

    return (
        <>
            <AppShell.Header
                style={{ backgroundColor: 'transparent', backdropFilter: 'blur(10px)', userSelect: 'none' }}
            >
                <Group h="100%" px="md">
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                    <Group justify="space-between" style={{ flex: 1 }}>
                        <Group ml="xl" gap={0} visibleFrom="sm">
                            <Image
                                onClick={() => handleClick('home')}
                                className='cursor-pointer'
                                src={'/logoAW.png'}
                                width={150}
                                height={50}
                                alt={'Logo'} />
                        </Group>
                        <Group visibleFrom="sm" justify="center" gap={40} className='text-xs'>
                            <div className='border-b-expand hover:border-b-0 flex justify-end pb-1 '>
                                <UnstyledButton className='flex items-center gap-1' onClick={() => handleClick('home')}>
                                    <IconHome size={18} />
                                    Strona główna
                                </UnstyledButton >
                            </div>
                            <div className='border-b-expand hover:border-b-0 flex justify-end pb-1'>
                                <UnstyledButton className='flex items-center gap-1' onClick={() => handleClick('projects')}>
                                    <IconComponents size={18} />
                                    Projekty
                                </UnstyledButton>
                            </div>
                            <div className='border-b-expand hover:border-b-0 flex justify-end pb-1'>
                                <UnstyledButton className='flex items-center gap-1' onClick={() => handleClick('technologies')}>
                                    <IconCode size={18} />
                                    Technologie
                                </UnstyledButton>
                            </div>
                            <div className="pb-1">
                                <Button radius="xl" variant="filled" onClick={() => handleClick('contact')}>Kontakt</Button>
                            </div>
                        </Group>

                        {isMobile && (
                            <div className='w-full flex justify-end '>
                                <Button hiddenFrom="sm" size='sm' radius="xl" variant="filled" onClick={() => handleClick('contact')}>Kontakt</Button>
                            </div>
                        )}


                    </Group>
                </Group>
            </AppShell.Header>

            <AppShell.Navbar py="md" px={4} style={{ backgroundColor: 'transparent', backdropFilter: 'blur(10px)' }} className='flex gap-5'>
                <Button variant="outline" leftSection={<IconHome size={20} />} onClick={() => handleClick('home')}>Strona główna</Button>
                <Button variant="outline" leftSection={<IconComponents size={20} />} onClick={() => handleClick('projects')}>Projekty</Button>
                <Button variant="outline" leftSection={<IconCode size={20} />} onClick={() => handleClick('technologies')}>Technologie</Button>
            </AppShell.Navbar>
        </>
    )
}

export default NavbarManager