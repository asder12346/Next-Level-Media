
import React, { useEffect, useRef } from 'react';
import * as THREE from 'https://esm.sh/three@0.178.0';

const MetaballBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let scene: THREE.Scene, camera: THREE.OrthographicCamera, renderer: THREE.WebGLRenderer, material: THREE.ShaderMaterial;
    let clock = new THREE.Clock();
    const mouse = new THREE.Vector2(0.5, 0.5);

    const init = () => {
      scene = new THREE.Scene();
      camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current?.appendChild(renderer.domElement);

      material = new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
          uMouse: { value: mouse },
          uColor: { value: new THREE.Color(0x9d5ae5) }
        },
        vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          precision highp float;
          uniform float uTime;
          uniform vec2 uResolution;
          uniform vec2 uMouse;
          uniform vec3 uColor;
          varying vec2 vUv;

          float smin(float a, float b, float k) {
            float h = max(k - abs(a - b), 0.0) / k;
            return min(a, b) - h * h * k * 0.25;
          }

          void main() {
            vec2 uv = (gl_FragCoord.xy * 2.0 - uResolution.xy) / min(uResolution.y, uResolution.x);
            float d = 1000.0;
            
            // Fixed Background Points
            vec2 p1 = vec2(-0.8, 0.5);
            vec2 p2 = vec2(0.8, -0.5);
            
            // Dynamic Points
            for(int i = 0; i < 6; i++) {
              float fi = float(i);
              vec2 p = vec2(
                sin(uTime * 0.5 + fi * 1.5) * 0.8,
                cos(uTime * 0.3 + fi * 2.0) * 0.5
              );
              float dist = length(uv - p) - 0.15;
              d = smin(d, dist, 0.6);
            }

            // Mouse Point
            vec2 m = (uMouse * 2.0 - 1.0) * vec2(uResolution.x/uResolution.y, 1.0);
            float mouseDist = length(uv - m) - 0.2;
            d = smin(d, mouseDist, 0.8);

            vec3 color = mix(vec3(0.02, 0.02, 0.05), uColor * 0.5, smoothstep(0.01, 0.0, d));
            color += uColor * (0.1 / (d + 0.5)) * 0.3; // Glow

            gl_FragColor = vec4(color, 1.0);
          }
        `
      });

      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
      scene.add(mesh);
    };

    const onResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      material.uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX / window.innerWidth;
      mouse.y = 1.0 - (e.clientY / window.innerHeight);
    };

    const animate = () => {
      requestAnimationFrame(animate);
      material.uniforms.uTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
    };

    init();
    animate();
    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none opacity-40" />;
};

export default MetaballBackground;
