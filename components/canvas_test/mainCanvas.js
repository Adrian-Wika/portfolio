import { useEffect, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { FontLoader } from 'three/addons/loaders/FontLoader.js'

let raycaster = new THREE.Raycaster()
let pointer
let particles
let particlesCopy
let particlesRandomTop
let intersects
let pointerMoving

function distanceCalc(x1, y1, x2, y2) {

    return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2))
}

function onPointerMove(event) {

    // calculate pointer position in normalized device coordinates
    // (-1 to +1) for both components

    if (pointer) {
        pointer.x = (event.clientX / window.innerWidth) * 2 - 1
        pointer.y = - (event.clientY / window.innerHeight) * 2 + 1
    }

}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

function createText(font, material, scene, particlesNumber, txt, xPosition, yPosition) {
    const thePoints = []
    const shapes = font.generateShapes(txt, 0.9)
    const geometry = new THREE.ShapeGeometry(shapes)
    geometry.computeBoundingBox()
    const xMid = - 0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x) + xPosition
    const yMid = (geometry.boundingBox.max.y - geometry.boundingBox.min.y) / 2.85 + yPosition
    let holeShapes = []

    for (let q = 0; q < shapes.length; q++) {

        let shape = shapes[q]

        if (shape.holes && shape.holes.length > 0) {

            for (let j = 0; j < shape.holes.length; j++) {

                let hole = shape.holes[j]
                holeShapes.push(hole)
            }
        }

    }

    shapes.push.apply(shapes, holeShapes)

    const sizes = []

    for (let x = 0; x < shapes.length; x++) {

        let shape = shapes[x]

        const amountPoints = (shape.type == 'Path') ? particlesNumber / 2 : particlesNumber

        const points = shape.getSpacedPoints(amountPoints)

        points.forEach((element, z) => {
            const a = new THREE.Vector3(element.x, element.y, 0)
            thePoints.push(a)
            sizes.push(1)
        })
    }

    const geoParticles = new THREE.BufferGeometry().setFromPoints(thePoints)
    geoParticles.translate(xMid, yMid, 0)
    geoParticles.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1))

    particles = new THREE.Points(geoParticles, material)
    particlesCopy = new THREE.BufferGeometry()
    particlesCopy.copy(particles.geometry)

    scene.add(particles)
}

function createRandomParticles(material, scene, particlesNumber) {
    const theRandomPoints = []

    for (let index = 0; index < particlesNumber; index++) {
        const randomTop = new THREE.Vector3(getRndInteger(-100, 100), getRndInteger(50, 60))
        theRandomPoints.push(randomTop)
    }

    const geoParticlesRandom = new THREE.BufferGeometry().setFromPoints(theRandomPoints)
    particlesRandomTop = new THREE.Points(geoParticlesRandom, material)
    scene.add(particlesRandomTop)

}

function moveParticles(raycaster, pointer, camera, scene, particles) {

    if (particlesRandomTop) {
        const particlesPosition = particlesRandomTop.geometry.attributes.position
        const particlesPositionCopy = particlesCopy.attributes.position


        for (var i = 0, l = particlesPosition.count; i < l; i++) {
            const initX = particlesPositionCopy.getX(i)
            const initY = particlesPositionCopy.getY(i)
            const initZ = particlesPositionCopy.getZ(i)

            let px = particlesPosition.getX(i)
            let py = particlesPosition.getY(i)
            let pz = particlesPosition.getZ(i)

            if (intersects?.length > 0) {
                const mx = intersects[0].point.x
                const my = intersects[0].point.y
                const mz = intersects[0].point.z

                let dx = mx - px
                let dy = my - py


                const mouseDistance = distanceCalc(mx, my, px, py)
                let d = (dx = mx - px) * dx + (dy = my - py) * dy
                const f = - 150 / d



                // if (mouseDistance < 150) {
                //     const t = Math.atan2(dy, dx)
                //     px += f * Math.cos(t)
                //     py += f * Math.sin(t)

                //     particlesPosition.setXYZ(i, px, py, pz)
                //     particlesPosition.needsUpdate = true



                // }
            }



            px += (initX - px) * .05
            py += (initY - py) * .05
            pz += (initZ - pz) * .05

            particlesPosition.setXYZ(i, px, py, pz)
            particlesPosition.needsUpdate = true
        }


    }

}

function shufleParticles(randomActive, initSpeed, speed) {
    if (particlesRandomTop) {
        const particlesPosition = particlesRandomTop.geometry.attributes.position

        for (var i = 0, l = particlesPosition.count; i < l; i++) {

            let x = particlesPosition.getX(i)
            let y = particlesPosition.getY(i)
            let t = Math.atan2(y - 50, x)


            const axisXBoundry = [-70, 100]
            const axisYBoundry = [-100, 100]

            const axisXMid = (axisXBoundry[0] + axisXBoundry[1]) / 2 + 80
            const axisYMid = 90

            if (randomActive) {
                if (x >= axisXMid && x <= axisXBoundry[1]) {
                    x += Math.cos(t + 100) - Math.cos(t + 100) / 1.5
                }

                y += x / initSpeed + speed


                // if (x > getRndInteger(axisXMid - 3, axisXMid - 1) && x < getRndInteger(axisXMid + 3, axisXMid)) {
                //     x = getRndInteger(axisXBoundry[0] + 1, axisXBoundry[1] - 1)
                // }

                if (x < axisXBoundry[0] || x > axisXBoundry[1]) {
                    x = getRndInteger(axisXBoundry[0] / 4, axisXBoundry[1] / 4)
                }

                if (y > getRndInteger(axisYMid - 3, axisYMid - 1) && y < getRndInteger(axisYMid + 3, axisYMid)) {
                    y = getRndInteger(axisYBoundry[0] + 1, axisYBoundry[1] - 1)
                }

                if (y < axisYBoundry[0] || y > axisYBoundry[1]) {
                    y = getRndInteger(axisYBoundry[0], axisYBoundry[1])
                }
            }


            particlesPosition.setXYZ(i, x, y, 1)
            particlesPosition.needsUpdate = true
        }
        return particlesPosition
    }
}

const MainCanvas = () => {
    const [font, setFont] = useState(undefined)
    let initSpeed = 0 // less is faster
    let speed = 0.05

    setTimeout(() => {
        initSpeed = 900
        speed = 0.0002
    }, 35)

    useEffect(() => {
        const loader = new FontLoader()

        loader.load('https://res.cloudinary.com/dydre7amr/raw/upload/v1612950355/font_zsd4dr.json', (result) => {
            setFont(result)
        })

    }, [])


    useEffect(() => {
        if (typeof window !== "undefined") {
            let randomActive = true
            const scene = new THREE.Scene()
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
            const renderer = new THREE.WebGLRenderer({
                canvas: document.getElementById('canvas')
            })

            renderer.setPixelRatio(window.devicePixelRatio)
            renderer.setSize(window.innerWidth, window.innerHeight)
            camera.position.setZ(45)
            camera.position.setY(25)
            renderer.render(scene, camera)
            const controls = new OrbitControls(camera, renderer.domElement)
            controls.target = new THREE.Vector3(0, 25, 0)
            controls.update()

            const pointLight = new THREE.PointLight(0xffffff)
            const ambientLight = new THREE.AmbientLight(0xffffff)
            const lightHelper = new THREE.PointLightHelper(pointLight)
            const gridHelper = new THREE.GridHelper(200, 50)
            const axisHelper = new THREE.AxesHelper(60)

            scene.add(ambientLight)

            const material = new THREE.PointsMaterial({ color: 0xffffff, size: 0.15 })


            pointer = new THREE.Vector2()

            if (font) {
                createText(font, material, scene, 100, 'DNO POLSKA S.A', 0, 57)
                // createRandomParticles(material, scene, 10000)
                const interObj = setInterval(() => {
                    // shufleParticles(randomActive, initSpeed, speed)
                }, 25)

                setTimeout(() => {
                    randomActive = false
                    clearInterval(interObj)
                }, 5000)


            }

            function animate() {
                window.addEventListener('pointermove', (event) => {
                    // onPointerMove(event)

                })
                requestAnimationFrame(animate)
                controls.update()
                raycaster.setFromCamera(pointer, camera) // update the picking ray with the camera and pointer position
                intersects = raycaster.intersectObjects(scene.children)
                if (!randomActive) {
                    setTimeout(() => {
                        moveParticles(raycaster, pointer, camera, scene, particles)
                    }, 500)
                }



                renderer.render(scene, camera)
            }

            animate()
        }
    }, [font])


    return (
        <canvas id='canvas' >

        </canvas>
    )
}

export default MainCanvas