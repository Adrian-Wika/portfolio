import { useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js'

const MainCanvas = () => {

    useEffect(() => {
        if (typeof window !== "undefined") {
            const scene = new THREE.Scene()
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
            const renderer = new THREE.WebGLRenderer({
                canvas: document.getElementById('canvas')
            })

            renderer.setPixelRatio(window.devicePixelRatio)
            renderer.setSize(window.innerWidth, window.innerHeight)
            camera.position.setZ(10)
            camera.position.setY(1)
            renderer.render(scene, camera)

            const pointLight = new THREE.PointLight(0xffffff)
            const ambientLight = new THREE.AmbientLight(0xffffff)
            const lightHelper = new THREE.PointLightHelper(pointLight)
            const gridHelper = new THREE.GridHelper(200, 50)
            const axisHelper = new THREE.AxesHelper(60)

            scene.add(ambientLight)
            scene.add(pointLight)
            scene.add(lightHelper, gridHelper, axisHelper)
            const controls = new OrbitControls(camera, renderer.domElement)

            const particlesMaterial = new THREE.PointsMaterial({
                color: 0xffffff,
                size: 0.25
            })
            const particlesGeometry = new THREE.BufferGeometry()
            const particlesCount = 100
            const vertices = []
            const velocities = []
            const accelerations = []

            for (let index = 0; index < particlesCount; index++) {
                const particle = new THREE.Vector3(
                    index,
                    1,
                    1
                )
                vertices.push(...particle)
                velocities.push(0.005)
                accelerations.push(1)
            }

            particlesGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(vertices), 3))
            particlesGeometry.center()
            const particleMesh = new THREE.Points(particlesGeometry, particlesMaterial)

            scene.add(particleMesh)


            function animate() {
                requestAnimationFrame(animate)

                const positionAttribute = particlesGeometry.getAttribute('position')

                for (let i = 0; i < positionAttribute.count; i++) {

                    let z = positionAttribute.getZ(i)

                    let vel = velocities[i]
                    let accel = accelerations[i]
                    vel *= accel
                    velocities[i] = vel
                    z -= vel

                    positionAttribute.setZ(i, z)

                }

                positionAttribute.needsUpdate = true

                controls.update()
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