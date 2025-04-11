
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import * as THREE from "three";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Optimized animation handler - uses lightweight animations
export const optimizedHandleAnimations = () => {
  // Set up intersection observer for performant animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -10% 0px" });

  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  animatedElements.forEach((element) => {
    observer.observe(element);
  });

  // Optimize GSAP animations
  const titleElements = document.querySelectorAll('.section-title');
  titleElements.forEach((element) => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        once: true,
      },
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: "power2.out"
    });
  });

  // Add smooth scroll behavior to all anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href') || '');
      if (target) {
        gsap.to(window, {
          duration: 0.8,
          scrollTo: {
            y: target,
            offsetY: 80
          },
          ease: "power3.inOut"
        });
      }
    });
  });

  // Cleanup function
  return () => {
    animatedElements.forEach((element) => {
      observer.unobserve(element);
    });
    
    // Clean up GSAP instances
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    
    // Remove event listeners
    anchorLinks.forEach(link => {
      link.removeEventListener('click', () => {});
    });
  };
};

// Efficient 3D animation for product cards
export const create3DCardEffect = (element: HTMLElement) => {
  let requestId: number;
  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;
  const sensitivity = 0.1;
  const xDecay = 0.05;
  const yDecay = 0.05;
  
  const handleMouseMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect();
    mouseX = (e.clientX - rect.left - rect.width / 2) * sensitivity;
    mouseY = (e.clientY - rect.top - rect.height / 2) * sensitivity * -1;
  };
  
  const handleMouseLeave = () => {
    mouseX = 0;
    mouseY = 0;
  };
  
  const animate = () => {
    targetX += (mouseX - targetX) * xDecay;
    targetY += (mouseY - targetY) * yDecay;
    
    element.style.transform = `rotateY(${targetX}deg) rotateX(${targetY}deg)`;
    requestId = requestAnimationFrame(animate);
  };
  
  element.addEventListener('mousemove', handleMouseMove);
  element.addEventListener('mouseleave', handleMouseLeave);
  
  // Start animation
  requestId = requestAnimationFrame(animate);
  
  // Return cleanup function
  return () => {
    element.removeEventListener('mousemove', handleMouseMove);
    element.removeEventListener('mouseleave', handleMouseLeave);
    cancelAnimationFrame(requestId);
  };
};

// Create a lightweight WebGL background
export const createLightweightBackground = (canvas: HTMLCanvasElement): (() => void) => {
  // Check if WebGL is supported
  if (!window.WebGLRenderingContext) {
    console.warn('WebGL not supported. Skipping 3D background.');
    return () => {};
  }
  
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: false, // Disable antialiasing for performance
    powerPreference: 'high-performance'
  });
  
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Limit pixel ratio for performance
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;
  
  // Create a small number of particles for better performance
  const particlesGeometry = new THREE.BufferGeometry();
  const count = 100; // Reduced particle count
  
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  
  const colorOptions = [
    new THREE.Color("#fcf0bd"), // Light spice color
    new THREE.Color("#e9a66b"), // Spice color
    new THREE.Color("#a9cc78")  // Leaf color
  ];
  
  for (let i = 0; i < count * 3; i += 3) {
    // Position
    positions[i] = (Math.random() - 0.5) * 10;
    positions[i + 1] = (Math.random() - 0.5) * 10;
    positions[i + 2] = (Math.random() - 0.5) * 10;
    
    // Color
    const randomColor = colorOptions[Math.floor(Math.random() * colorOptions.length)];
    colors[i] = randomColor.r;
    colors[i + 1] = randomColor.g;
    colors[i + 2] = randomColor.b;
  }
  
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.05,
    sizeAttenuation: true,
    vertexColors: true,
    transparent: true,
    opacity: 0.3,
    depthWrite: false, // Improves performance
  });
  
  const particles = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particles);
  
  // Animation with throttled frame rate
  let lastTime = 0;
  const frameInterval = 1000 / 30; // Target 30fps instead of 60fps for better performance
  
  const animate = (time: number) => {
    if (time - lastTime > frameInterval) {
      particles.rotation.x += 0.0001;
      particles.rotation.y += 0.0002;
      
      renderer.render(scene, camera);
      lastTime = time;
    }
    
    requestAnimationFrame(animate);
  };
  
  animate(0);
  
  // Throttled resize handler
  let resizeTimeout: number;
  const handleResize = () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = window.setTimeout(() => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    }, 250); // Throttle resize events
  };
  
  window.addEventListener('resize', handleResize);
  
  // Return cleanup function
  return () => {
    window.removeEventListener('resize', handleResize);
    renderer.dispose();
    particlesGeometry.dispose();
    particlesMaterial.dispose();
    scene.clear();
  };
};
