import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import * as THREE from "three";

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  image: string;
  width?: number;
  height?: number;
}

const ProductCard = ({
  id,
  name,
  description,
  image,
  width = 800,
  height = 600
}: ProductCardProps) => {

  const [isHovered, setIsHovered] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // 3D card effect values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);
  const brightness = useTransform(mouseY, [-300, 300], [1.2, 0.8]);

  // Three.js background
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true
    });

    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const particlesGeometry = new THREE.BufferGeometry();
    const count = 80;

    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const colorOptions = [
      new THREE.Color("#fcf0bd"),
      new THREE.Color("#e9a66b"),
      new THREE.Color("#a9cc78"),
    ];

    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 10;
      positions[i + 1] = (Math.random() - 0.5) * 10;
      positions[i + 2] = (Math.random() - 0.5) * 10;

      const randomColor = colorOptions[Math.floor(Math.random() * colorOptions.length)];
      colors[i] = randomColor.r;
      colors[i + 1] = randomColor.g;
      colors[i + 2] = randomColor.b;
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.9
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    const animate = () => {
      particles.rotation.x += 0.0003;
      particles.rotation.y += 0.0005;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, []);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: id * 0.05 }}
      viewport={{ once: true }}
      className="relative bg-white rounded-xl overflow-hidden shadow-lg"
      style={{ perspective: 1000 }}
    >
      {/* 3D Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 -z-10 opacity-40" />

      <motion.div
        style={{
          rotateX,
          rotateY,
          filter: `brightness(${brightness})`
        }}
        whileHover={{ scale: 1.02 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={() => setIsHovered(true)}
        className={`h-full w-full ${isHovered ? "shadow-xl" : "shadow-md"} rounded-xl transition-all duration-300`}
      >
        <div className="h-60 overflow-hidden relative">

          {/* Blur placeholder */}
          {!loaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
          )}

          <motion.img
            src={image}
            alt={name}
            className="object-cover w-full h-full"
            width={width}
            height={height}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15
            }}
          />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-spice-700 mb-2">{name}</h3>
          <p className="text-gray-600 line-clamp-3">{description}</p>

          <div className="mt-4">
            <a
              href="#packaging"
              className="inline-flex items-center gap-1 text-leaf-600 hover:text-leaf-700 font-medium underline decoration-2 underline-offset-4"
            >
              View Packaging Options →
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductCard;

