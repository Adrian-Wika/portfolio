import { useEffect, useState } from 'react'
import * as THREE from 'three'

function moveInsideCircle(renderer, currentPosition, targetPosition, setCurrentPosition) {
    if (currentPosition > targetPosition) {
        setTimeout(() => {
            setCurrentPosition(currentPosition - 2)
        }, 25)
    } else {
        setTimeout(() => {
            window.location.reload()
        }, 1000)

    }

}

const MainCanvas = () => {
    const [currentPosition, setCurrentPosition] = useState(30)

    useEffect(() => {
        if (typeof window !== "undefined") {
            const scene = new THREE.Scene()
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
            const renderer = new THREE.WebGLRenderer({
                canvas: document.getElementById('canvas')
            })

            renderer.setPixelRatio(window.devicePixelRatio)
            renderer.setSize(window.innerWidth, window.innerHeight)
            camera.position.setZ(currentPosition)
            renderer.render(scene, camera)
            // moveInsideCircle(renderer, currentPosition, 0, setCurrentPosition)
            const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
            const material = new THREE.MeshBasicMaterial({ color: 0xFF6347, wireframe: true })
            const torus = new THREE.Mesh(geometry, material)

            scene.add(torus)

            function animate() {
                requestAnimationFrame(animate)

                torus.rotateX(0.01)
                torus.rotateY(0.005)
                torus.rotateZ(0.01)

                renderer.render(scene, camera)

            }

            animate()
        }
    }, [])


    return (
        <canvas id='canvas'></canvas>
    )
}

export default MainCanvas