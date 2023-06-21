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

    const canvas = document.createElement('canvas');
    canvas.width = 2;
    canvas.height = 256;

    const context = canvas.getContext('2d');
    const gradient = context.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#f6d365');
    gradient.addColorStop(1, '#fda085');
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);

    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });

    const cube = new THREE.Mesh(geometry, material);

    scene.add(cube);

    camera.position.z = 6;

    let upward = true;
    const animate = () => {
      requestAnimationFrame(animate);

      if (upward) {
        cube.position.y += 0.002;
        if (cube.position.y >= .1) {
          upward = false;
        }
      } else {
        cube.position.y -= 0.002;
        if (cube.position.y <= -.1) {
          upward = true;
        }
      }

      cube.rotation.x += 0.02;
      cube.rotation.y += 0.02;
      cube.position.set(-6, cube.position.y, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.dispose();
    };
  }, []);

  return <div ref={canvasRef} />;
};

export default Cube;
