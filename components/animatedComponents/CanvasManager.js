'use client'
import { useEffect, useState } from 'react'
import Circle from './particlesCircle/CircleMenager'
import { getGPUTier } from 'detect-gpu'

async function isLinkReachable(url) {
    try {
        const response = await fetch(url, { method: 'HEAD' })
        return response.ok
    } catch (error) {
        console.error('Error:', error)
        return false
    }
}

const MainCanvas = () => {
    const [performanceObj, setPerformanceObj] = useState(undefined)

    useEffect(() => {
        if (!performanceObj)
            isLinkReachable('https://unpkg.com/browse/detect-gpu@5.0.41/')
                .then(isReachable => {
                    if (isReachable) {
                        getGPUTier().then((value) => {
                            setPerformanceObj(value)
                        })
                    } else {
                        getGPUTier({
                            benchmarksURL: './benchmarks'
                        }).then((value) => {
                            setPerformanceObj(value)
                        })
                    }
                })
    }, [])

    useEffect(() => {
        if (performanceObj)
            new Circle({
                dom: document.getElementById("canvas"),
                performanceTier: performanceObj.tier,
                isMobile: performanceObj.isMobile,
                fps: performanceObj.fps ?? 60
            })
    }, [performanceObj])

    return (
        <div id='canvas' className=' !w-[100vw] !h-[100%] overflow-hidden' />
    )
}

export default MainCanvas