
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import * as THREE from "three";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const handleAnimations = () => {
  // Basic intersection observer for fade-in animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.1 });

  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  animatedElements.forEach((element) => {
    observer.observe(element);
  });

  // GSAP ScrollTrigger animations
  const titleElements = document.querySelectorAll('.section-title');
  titleElements.forEach((element) => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 20,
      duration: 0.7,
      ease: "power2.out"
    });
  });

  // Enhanced parallax effect for background elements
  const parallaxElements = document.querySelectorAll('.parallax');
  parallaxElements.forEach((element) => {
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      },
      y: (_, target) => -100 * parseFloat(target.dataset.speed || "0.5"),
      ease: "none"
    });
  });

  // Staggered animations for list items with 3D rotation
  const staggeredLists = document.querySelectorAll('.staggered-list');
  staggeredLists.forEach((list) => {
    const items = list.querySelectorAll('li, div');
    gsap.from(items, {
      scrollTrigger: {
        trigger: list,
        start: "top 80%"
      },
      opacity: 0,
      y: 20,
      rotationX: 45,
      transformOrigin: "0% 50% -50",
      stagger: 0.1,
      duration: 0.7,
      ease: "back.out(1.7)"
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
          duration: 1,
          scrollTo: {
            y: target,
            offsetY: 80
          },
          ease: "power3.inOut"
        });
      }
    });
  });

  // Floating 3D elements animation
  const floatingElements = document.querySelectorAll('.floating-3d');
  floatingElements.forEach((element) => {
    gsap.to(element, {
      y: "random(-20, 20)",
      x: "random(-10, 10)",
      rotationY: "random(-10, 10)",
      rotationX: "random(-10, 10)",
      duration: "random(3, 6)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
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

// Enhanced smooth scroll function with visual feedback
export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    // Create a temporary highlight effect
    const originalBackground = element.style.background;
    
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: element,
        offsetY: 80
      },
      ease: "power3.inOut",
      onComplete: () => {
        // Highlight effect
        gsap.to(element, {
          backgroundColor: "rgba(156,107,53,0.1)",
          duration: 0.3,
          yoyo: true,
          repeat: 1,
          onComplete: () => {
            element.style.background = originalBackground;
          }
        });
      }
    });
  }
};

// Enhanced 3D tilt effect with depth and lighting
export const applyTiltEffect = (element: HTMLElement) => {
  let rect = element.getBoundingClientRect();
  let x = 0;
  let y = 0;
  
  const handleMouseMove = (e: MouseEvent) => {
    rect = element.getBoundingClientRect();
    x = e.clientX - rect.left - rect.width / 2;
    y = e.clientY - rect.top - rect.height / 2;
    
    const strength = 20;
    const rotateX = -y / strength;
    const rotateY = x / strength;
    
    // Add depth with z translation
    gsap.to(element, {
      duration: 0.5,
      rotationX: rotateX,
      rotationY: rotateY,
      z: 30,
      transformPerspective: 900,
      boxShadow: `
        ${-rotateY/2}px ${rotateX/2}px 20px rgba(0,0,0,0.1),
        ${-rotateY}px ${rotateX}px 30px rgba(0,0,0,0.05)
      `,
      ease: "power2.out"
    });
  };
  
  const handleMouseLeave = () => {
    gsap.to(element, {
      duration: 0.7,
      rotationX: 0,
      rotationY: 0,
      z: 0,
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      ease: "elastic.out(1, 0.5)"
    });
  };
  
  element.addEventListener("mousemove", handleMouseMove);
  element.addEventListener("mouseleave", handleMouseLeave);
  
  // Return cleanup function
  return () => {
    element.removeEventListener("mousemove", handleMouseMove);
    element.removeEventListener("mouseleave", handleMouseLeave);
  };
};

// New function to create a 3D particle background
export const createParticleBackground = (canvasElement: HTMLCanvasElement) => {
  const renderer = new THREE.WebGLRenderer({
    canvas: canvasElement,
    alpha: true,
    antialias: true
  });
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;
  
  // Create particles
  const particlesGeometry = new THREE.BufferGeometry();
  const count = 200;
  
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
    opacity: 0.5
  });
  
  const particles = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particles);
  
  // Animation
  const animate = () => {
    particles.rotation.x += 0.0003;
    particles.rotation.y += 0.0005;
    
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };
  
  animate();
  
  // Handle resize
  const handleResize = () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
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
