import { useEffect, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { FontLoader } from 'three/addons/loaders/FontLoader.js'

let raycaster = new THREE.Raycaster()
let pointer
let particles
let intersects

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
    scene.add(particles)
}

function moveParticles(raycaster, pointer, camera, scene) {
    if (intersects)
        for (let i = 0; i < intersects.length; i++) {

            intersects[i].object.material.color.set(0xff0000)

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

            scene.add(ambientLight)
            scene.add(pointLight)
            scene.add(lightHelper, gridHelper, axisHelper)
            const controls = new OrbitControls(camera, renderer.domElement)

            const material = new THREE.PointsMaterial({ color: 0xffffff })


            pointer = new THREE.Vector2()

            if (font) {
                createText(font, material, scene)
                moveParticles(raycaster, pointer, camera, scene)
            }

            function animate() {
                window.addEventListener('pointermove', onPointerMove)
                requestAnimationFrame(animate)
                console.log(pointer)
                raycaster.setFromCamera(pointer, camera) // update the picking ray with the camera and pointer position
                intersects = raycaster.intersectObjects(scene.children)

                for (let i = 0; i < intersects.length; i++) {

                    intersects[i].object.material.color.set(0xff0000)

                }

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