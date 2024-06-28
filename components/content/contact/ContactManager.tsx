import { IconBrandGithub, IconMail, IconBrandLinkedin, IconBrandFacebook } from '@tabler/icons-react'
import React from 'react'

const ContactManager = () => {

    return (
        <div>
            <div className="bg-transparent backdrop-blur-md p-5 rounded-lg shadow-lg max-w-lg text-center">
                <h1 className="text-2xl md:text-4xl font-bold mb-4">Kontakt:</h1>
                <div className='flex flex-col justify-center justify-items-center mb-5'>
                    <p>Adrian Wika</p>
                    <p>✆ 669142326</p>
                    <div className=' flex flex-row items-center gap-2 justify-center'>
                        <IconMail size={15} />
                        <p>awika157@gmail.com</p>
                    </div>

                </div>
                <div className='flex justify-center gap-5'>
                    <a className='flex flex-row gap-3 w-fit items-center hover:text-[#1971c2] duration-300' href='https://www.linkedin.com/in/adrian-wika-19593a253' target="_blank" rel="noopener noreferrer">
                        <IconBrandLinkedin size={40} />
                    </a>
                    <a className='flex flex-row gap-3 w-fit items-center hover:text-[#1971c2] duration-300' href='mailto:awika157@gmail.com' target="_blank" rel="noopener noreferrer">
                        <IconMail size={40} />
                    </a>
                    <a className='flex flex-row gap-3 w-fit items-center hover:text-[#1971c2] duration-300' href='https://github.com/Adrian-Wika' target="_blank" rel="noopener noreferrer">
                        <IconBrandGithub size={40} />
                    </a>
                    <a className='flex flex-row gap-3 w-fit items-center hover:text-[#1971c2] duration-300' href='https://www.facebook.com/adrian.wika.39' target="_blank" rel="noopener noreferrer">
                        <IconBrandFacebook size={40} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ContactManager