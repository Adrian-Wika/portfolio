import { useEffect, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { FontLoader } from 'three/addons/loaders/FontLoader.js'

let raycaster = new THREE.Raycaster()
let pointer
let particles
let particlesCopy
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

function createText(font, material, scene) {
    const thePoints = []
    const shapes = font.generateShapes('TEST', 20)
    const geometry = new THREE.ShapeGeometry(shapes)
    geometry.computeBoundingBox()
    const xMid = - 0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x)
    const yMid = (geometry.boundingBox.max.y - geometry.boundingBox.min.y) / 2.85
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

        const amountPoints = (shape.type == 'Path') ? 1500 / 2 : 1500

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

function moveParticles(raycaster, pointer, camera, scene, particles) {
    const time = ((.001 * performance.now()) % 12) / 12
    const zigzagTime = (1 + (Math.sin(time * 2 * Math.PI))) / 6

    if (intersects.length > 0 && particles) {
        const particlesPosition = particles.geometry.attributes.position
        const particlesPositionCopy = particlesCopy.attributes.position

        const mx = intersects[0].point.x
        const my = intersects[0].point.y
        const mz = intersects[0].point.z

        for (var i = 0, l = particlesPosition.count; i < l; i++) {
            const initX = particlesPositionCopy.getX(i)
            const initY = particlesPositionCopy.getY(i)
            const initZ = particlesPositionCopy.getZ(i)

            let px = particlesPosition.getX(i)
            let py = particlesPosition.getY(i)
            let pz = particlesPosition.getZ(i)

            let dx = mx - px
            let dy = my - py
            const dz = mz - pz

            const mouseDistance = distanceCalc(mx, my, px, py)
            let d = (dx = mx - px) * dx + (dy = my - py) * dy
            const f = - 150 / d


            if (mouseDistance < 150) {
                // console.log(mouseDistance)
                const t = Math.atan2(dy, dx)
                px += f * Math.cos(t)
                py += f * Math.sin(t)

                particlesPosition.setXYZ(i, px, py, pz)
                particlesPosition.needsUpdate = true



            }


            px += (initX - px) * .05
            py += (initY - py) * .05
            pz += (initZ - pz) * .05

            particlesPosition.setXYZ(i, px, py, pz)
            particlesPosition.needsUpdate = true
        }


    }

}

const MainCanvas = () => {
    const [font, setFont] = useState(undefined)

    useEffect(() => {
        const loader = new FontLoader()

        loader.load('https://res.cloudinary.com/dydre7amr/raw/upload/v1612950355/font_zsd4dr.json', (result) => {
            setFont(result)
        })

    }, [])


    useEffect(() => {
        if (typeof window !== "undefined") {
            const scene = new THREE.Scene()
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
            const renderer = new THREE.WebGLRenderer({
                canvas: document.getElementById('canvas')
            })

            renderer.setPixelRatio(window.devicePixelRatio)
            renderer.setSize(window.innerWidth, window.innerHeight)
            camera.position.setZ(50)
            camera.position.setY(30)
            renderer.render(scene, camera)

            const pointLight = new THREE.PointLight(0xffffff)
            const ambientLight = new THREE.AmbientLight(0xffffff)
            const lightHelper = new THREE.PointLightHelper(pointLight)
            const gridHelper = new THREE.GridHelper(200, 50)
            const axisHelper = new THREE.AxesHelper(60)

            scene.add(lightHelper, gridHelper, axisHelper, ambientLight, pointLight)

            const controls = new OrbitControls(camera, renderer.domElement)

            const material = new THREE.PointsMaterial({ color: 0xffffff })


            pointer = new THREE.Vector2()

            if (font) {
                createText(font, material, scene)
            }

            function animate() {
                window.addEventListener('pointermove', (event) => {
                    clearTimeout(pointerMoving)
                    pointerMoving = setTimeout(() => {
                        onPointerMove(event)
                    }, 1)

                })
                requestAnimationFrame(animate)

                raycaster.setFromCamera(pointer, camera) // update the picking ray with the camera and pointer position
                intersects = raycaster.intersectObjects(scene.children)
                moveParticles(raycaster, pointer, camera, scene, particles)
                renderer.render(scene, camera)
            }

            animate()
        }
    }, [font])


    return (
        <canvas id='canvas'></canvas>
    )
}

export default MainCanvas