
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

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

  // Parallax effect for background elements
  const parallaxElements = document.querySelectorAll('.parallax');
  parallaxElements.forEach((element) => {
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      },
      y: (_, target) => -100 * parseFloat(target.dataset.speed || "0.5"),
      ease: "none"
    });
  });

  // Staggered animations for list items
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
      stagger: 0.1,
      duration: 0.5,
      ease: "power2.out"
    });
  });

  // Cleanup function
  return () => {
    animatedElements.forEach((element) => {
      observer.unobserve(element);
    });
    
    // Clean up GSAP instances
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
};

// Add this smooth scroll function
export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: element,
        offsetY: 80
      },
      ease: "power3.inOut"
    });
  }
};

// Add 3D tilt effect
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
    
    gsap.to(element, {
      duration: 0.5,
      rotationX: rotateX,
      rotationY: rotateY,
      transformPerspective: 900,
      ease: "power2.out"
    });
  };
  
  const handleMouseLeave = () => {
    gsap.to(element, {
      duration: 0.7,
      rotationX: 0,
      rotationY: 0,
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
