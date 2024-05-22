import { Burger, Drawer } from '@mantine/core'
import React, { useState } from 'react'

const MainMenu = () => {
    const [openBurger, setOpenBurger] = useState(false)
    return (
        <div>
            <Burger opened={openBurger} onClick={() => setOpenBurger(!openBurger)} aria-label="Toggle navigation" />
            <Drawer opened={openBurger} onClose={() => setOpenBurger(false)} title="Menu" styles={{ 'margin': 500 }} className='mt-5' overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}>
                {/* Drawer content */}
            </Drawer>
        </div>
    )
}

export default MainMenu