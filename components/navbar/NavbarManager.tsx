import React from 'react'
import MainMenu from './MainMenu'
import { AppShell, Burger, Group } from '@mantine/core'

const NavbarManager = ({ opened, toggle }: {
    opened: boolean
    toggle: () => void
}) => {
    return (
        <>
            <AppShell.Header
                style={{ backgroundColor: 'transparent', backdropFilter: 'blur(10px)' }}
            >
                <Group h="100%" px="md">
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                    <Group justify="space-between" style={{ flex: 1 }}>
                        {/* <MantineLogo size={30} /> */}
                        <Group ml="xl" gap={0} visibleFrom="sm">
                            LOGO
                        </Group>
                        Buttony
                    </Group>
                </Group>
            </AppShell.Header>

            <AppShell.Navbar py="md" px={4}>
                MOBILE BURGER MENU
            </AppShell.Navbar>
        </>


    )
}

export default NavbarManager