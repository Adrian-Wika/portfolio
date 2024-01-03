// CircleParticles.js

import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

const CircleParticles = () => {
  const sceneRef = useRef()

  useEffect(() => {
    // Inicjalizacja sceny, kamery i renderera
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    const renderer = new THREE.WebGLRenderer()

    renderer.setSize(window.innerWidth, window.innerHeight)
    sceneRef.current.appendChild(renderer.domElement)

    // Tworzenie cząsteczek
    const particles = []
    const particleCount = 100
    const radius = 2

    for (let i = 0; i < particleCount; i++) {
      const theta = (i / particleCount) * Math.PI * 2
      const x = radius * Math.cos(theta)
      const z = radius * Math.sin(theta)

      const particle = new THREE.Mesh(
        new THREE.SphereGeometry(0.1, 8, 8),
        new THREE.MeshBasicMaterial({ color: 0xffffff })
      )

      particle.position.set(x, 0, z)
      particles.push(particle)
      scene.add(particle)
    }

    // Ustawienie kamery
    camera.position.z = 3
    camera.position.x = 0
    camera.position.y = 0

    // Funkcja aktualizująca animację
    const animate = () => {
      requestAnimationFrame(animate)

      // Obracanie cząsteczek wokół osi Y
      particles.forEach((particle) => {
        particle.rotation.y += 0.01
      })

      renderer.render(scene, camera)
    }

    // Rozpoczęcie animacji
    animate()

    // Obsługa zmiany rozmiaru okna
    const handleResize = () => {
      const newWidth = window.innerWidth
      const newHeight = window.innerHeight

      camera.aspect = newWidth / newHeight
      camera.updateProjectionMatrix()

      renderer.setSize(newWidth, newHeight)
    }

    window.addEventListener('resize', handleResize)

    // Czyszczenie zasobów po odmontowaniu komponentu
    return () => {
      window.removeEventListener('resize', handleResize)
      sceneRef.current.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={sceneRef} />
}

export default CircleParticles
