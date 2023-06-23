import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Cube = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    canvasRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(0.3, 0.3, 0.3);
    const coneGeometry = new THREE.ConeGeometry(0.2, 0.3, 3);

    const cubeCanvas = document.createElement('canvas');
    cubeCanvas.width = 2;
    cubeCanvas.height = 256;

    const cubeContext = cubeCanvas.getContext('2d');
    const cubeGradient = cubeContext.createLinearGradient(0, 0, 0, cubeCanvas.height);
    cubeGradient.addColorStop(0, '#f6d365');
    cubeGradient.addColorStop(1, '#fda085');
    cubeContext.fillStyle = cubeGradient;
    cubeContext.fillRect(0, 0, cubeCanvas.width, cubeCanvas.height);

    const cubeTexture = new THREE.CanvasTexture(cubeCanvas);
    const cubeMaterial = new THREE.MeshBasicMaterial({
      map: cubeTexture,
      transparent: true,
    });

    const triangleCanvas = document.createElement('canvas');
    triangleCanvas.width = 2;
    triangleCanvas.height = 256;

    const triangleContext = triangleCanvas.getContext('2d');
    const triangleGradient = triangleContext.createLinearGradient(0, 0, 0, triangleCanvas.height);
    triangleGradient.addColorStop(0, '#8ec5fc');
    triangleGradient.addColorStop(1, '#654E92');
    triangleContext.fillStyle = triangleGradient;
    triangleContext.fillRect(0, 0, triangleCanvas.width, triangleCanvas.height);

    const triangleTexture = new THREE.CanvasTexture(triangleCanvas);
    const triangleMaterial = new THREE.MeshBasicMaterial({
      map: triangleTexture,
      transparent: true,
    });

    const cube1 = new THREE.Mesh(geometry, cubeMaterial);
    const cube2 = new THREE.Mesh(geometry, cubeMaterial);
    const triangle = new THREE.Mesh(coneGeometry, triangleMaterial);

    scene.add(cube1);
    scene.add(cube2);
    scene.add(triangle);

    // Position the cubes and triangle
    cube1.position.set(-8.5, .5, 0);
    cube2.position.set(0, 0, 0);
    triangle.position.set(2, 0, 2);

    camera.position.z = 6;

    let upward = true;
    const animate = () => {
      requestAnimationFrame(animate);

      if (upward) {
        cube1.position.y += 0.002;
        cube2.position.y += 0.002;
        triangle.position.y += 0.002;
        if (cube1.position.y >= 0.1) {
          upward = false;
        }
      } else {
        cube1.position.y -= 0.002;
        cube2.position.y -= 0.002;
        triangle.position.y -= 0.002;
        if (cube1.position.y <= -0.1) {
          upward = true;
        }
      }

      cube1.rotation.x += 0.02;
      cube1.rotation.y += 0.02;
      cube2.rotation.x += 0.02;
      cube2.rotation.y += 0.02;
      triangle.rotation.x += 0.02;
      triangle.rotation.y += 0.02;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: '-13rem',
        left: '4rem',
        width: '100%',
        height: '100%',
      }}
      
    />
  );
};

export default Cube;
