import React from 'react'
import { IconBrandReact, IconBrandNextjs, IconBrandJavascript, IconBrandTypescript, IconBrandTailwind, IconBrandHtml5, IconBrandCss3, IconMap, IconBrandGraphql, IconBrandThreejs, IconBrandDocker, IconBrandFirebase, IconBrandNpm } from '@tabler/icons-react'

const TechnologiesManager = () => {

    const itemClass = 'flex flex-row gap-2 text-xl hover:text-white duration-300 cursor-pointer'
    const itemGroupClass = 'flex flex-col gap-2'

    return (
        <div className="mt-[1vh]">
            <div className="bg-transparent backdrop-blur-md p-5 rounded-lg shadow-lg max-w-lg text-center">
                <h1 className="text-2xl md:text-3xl font-bold mb-7 whitespace-nowrap">Technologie z którymi pracowałem:</h1>
                <div className='flex flex-row flex-wrap gap-5 justify-center'>
                    <div className={itemGroupClass}>
                        <a className={itemClass} href='https://react.dev/' target="_blank" rel="noopener noreferrer">
                            <IconBrandReact />
                            <p>React</p>
                        </a>
                        <a className={itemClass} href='https://nextjs.org/' target="_blank" rel="noopener noreferrer">
                            <IconBrandNextjs />
                            <p>Next.js</p>
                        </a>
                        <a className={itemClass} href='https://pl.wikipedia.org/wiki/JavaScript' target="_blank" rel="noopener noreferrer">
                            <IconBrandJavascript />
                            <p>JavaScript</p>
                        </a>
                        <a className={itemClass} href='https://www.typescriptlang.org/' target="_blank" rel="noopener noreferrer">
                            <IconBrandTypescript />
                            <p>TypeScript</p>
                        </a>
                        <a className={itemClass} href='https://pl.wikipedia.org/wiki/HTML5' target="_blank" rel="noopener noreferrer">
                            <IconBrandHtml5 />
                            <p>HTML5</p>
                        </a>
                    </div>

                    <div className={itemGroupClass}>
                        <a className={itemClass} href='https://www.mapbox.com/' target="_blank" rel="noopener noreferrer">
                            <IconMap />
                            <p>MapBox</p>
                        </a>
                        <a className={itemClass} href='https://graphql.org/' target="_blank" rel="noopener noreferrer">
                            <IconBrandGraphql />
                            <p>GraphQL</p>
                        </a>
                        <a className={itemClass} href='https://tailwindcss.com/' target="_blank" rel="noopener noreferrer">
                            <IconBrandTailwind />
                            <p>TailwindCSS</p>
                        </a>
                        <a className={itemClass} href='https://pl.wikipedia.org/wiki/Kaskadowe_arkusze_styl%C3%B3w' target="_blank" rel="noopener noreferrer">
                            <IconBrandCss3 />
                            <p>CSS3</p>
                        </a>
                    </div>

                    <div className={itemGroupClass}>
                        <a className={itemClass} href='https://threejs.org/' target="_blank" rel="noopener noreferrer">
                            <IconBrandThreejs />
                            <p>Three.js</p>
                        </a>
                        <a className={itemClass} href='https://www.docker.com/' target="_blank" rel="noopener noreferrer">
                            <IconBrandDocker />
                            <p>Docker</p>
                        </a>
                        <a className={itemClass} href='https://firebase.google.com/' target="_blank" rel="noopener noreferrer">
                            <IconBrandFirebase />
                            <p>Firebase</p>
                        </a>
                        <a className={itemClass} href='https://github.com/facebookexperimental/Recoil' target="_blank" rel="noopener noreferrer">
                            <IconBrandNpm />
                            <p>Recoil</p>
                        </a>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default TechnologiesManager
