import { useEffect, useState } from 'react'
import Circle from './particlesCircle/CircleMenager'
import { getGPUTier } from 'detect-gpu'

const MainCanvas = () => {
    const [performanceObj, setPerformanceObj] = useState(undefined)



    useEffect(() => {
        if (!performanceObj)
            getGPUTier().then((value) => {
                console.log(value)
                setPerformanceObj(value)
            })
    }, [])

    useEffect(() => {
        if (performanceObj)
            new Circle({
                dom: document.getElementById("canvas"),
                performanceTier: performanceObj.tier,
                isMobile: performanceObj.isMobile,
                fps: performanceObj.fps
            })

    }, [performanceObj])



    return (
        <div id='canvas' className='gradient-background w-[100vw] h-[100vh] overflow-hidden' />
    )
}

export default MainCanvas