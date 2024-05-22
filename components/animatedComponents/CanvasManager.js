import { useEffect } from 'react'
import Circle from './particlesCircle/CircleMenager'

const MainCanvas = () => {

    useEffect(() => {
        new Circle({
            dom: document.getElementById("canvas")
          });
        
    }, [])
    


    return (
        <div id='canvas' className='w-[100vw] h-[100vh] overflow-hidden'>

        </div>
    )
}

export default MainCanvas