import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { RotateCw } from "lucide-react";

interface PackagingViewer3DProps {
  frontImage: string;
  backImage: string;
  leftImage: string;
  rightImage: string;
  topImage: string;
  bottomImage: string;
}

const PackagingViewer3D = ({
  frontImage,
  backImage,
  leftImage,
  rightImage,
  topImage,
  bottomImage,
}: PackagingViewer3DProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const meshRef = useRef<THREE.Mesh | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const isDraggingRef = useRef(false);
  const previousMousePositionRef = useRef({ x: 0, y: 0 });
  const rotationVelocityRef = useRef({ x: 0, y: 0 });
  const frameIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf5f5f5);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 0, 4);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight1.position.set(5, 5, 5);
    directionalLight1.castShadow = true;
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.3);
    directionalLight2.position.set(-5, 3, -5);
    scene.add(directionalLight2);

    // Load textures and create box
    const textureLoader = new THREE.TextureLoader();
    let loadedCount = 0;
    const totalTextures = 6;

    const materials: THREE.MeshStandardMaterial[] = [];
    
    const texturePaths = [
      rightImage,   // right
      leftImage,    // left
      topImage,     // top
      bottomImage,  // bottom
      frontImage,   // front
      backImage,    // back
    ];

    const onTextureLoad = () => {
      loadedCount++;
      if (loadedCount === totalTextures) {
        setIsLoading(false);
      }
    };

    texturePaths.forEach((path) => {
      textureLoader.load(
        path,
        (texture) => {
          texture.colorSpace = THREE.SRGBColorSpace;
          texture.minFilter = THREE.LinearFilter;
          texture.magFilter = THREE.LinearFilter;
          materials.push(
            new THREE.MeshStandardMaterial({
              map: texture,
              side: THREE.FrontSide,
            })
          );
          onTextureLoad();
        },
        undefined,
        (error) => {
          console.error("Error loading texture:", error);
          materials.push(
            new THREE.MeshStandardMaterial({ color: 0xcccccc })
          );
          onTextureLoad();
        }
      );
    });

    // Create packaging box (tall and narrow like the real package)
    const geometry = new THREE.BoxGeometry(1.5, 3.5, 1);
    const mesh = new THREE.Mesh(geometry, materials);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.rotation.y = Math.PI * 0.25; // Initial angle
    mesh.rotation.x = Math.PI * 0.05;
    scene.add(mesh);
    meshRef.current = mesh;

    // Animation loop
    const animate = () => {
      if (!meshRef.current) return;

      // Apply velocity for smooth rotation
      if (!isDraggingRef.current) {
        meshRef.current.rotation.y += rotationVelocityRef.current.y;
        meshRef.current.rotation.x += rotationVelocityRef.current.x;

        // Damping
        rotationVelocityRef.current.x *= 0.95;
        rotationVelocityRef.current.y *= 0.95;

        // Small auto-rotation when idle
        if (Math.abs(rotationVelocityRef.current.y) < 0.001) {
          meshRef.current.rotation.y += 0.002;
        }
      }

      renderer.render(scene, camera);
      frameIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Mouse/Touch event handlers
    const onMouseDown = (e: MouseEvent | TouchEvent) => {
      isDraggingRef.current = true;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      previousMousePositionRef.current = { x: clientX, y: clientY };
      rotationVelocityRef.current = { x: 0, y: 0 };
    };

    const onMouseMove = (e: MouseEvent | TouchEvent) => {
      if (!isDraggingRef.current || !meshRef.current) return;

      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

      const deltaX = clientX - previousMousePositionRef.current.x;
      const deltaY = clientY - previousMousePositionRef.current.y;

      const rotationSpeed = 0.005;
      rotationVelocityRef.current = {
        x: -deltaY * rotationSpeed,
        y: deltaX * rotationSpeed,
      };

      meshRef.current.rotation.y += rotationVelocityRef.current.y;
      meshRef.current.rotation.x += rotationVelocityRef.current.x;

      // Limit X rotation to prevent flipping upside down
      meshRef.current.rotation.x = Math.max(
        -Math.PI / 3,
        Math.min(Math.PI / 3, meshRef.current.rotation.x)
      );

      previousMousePositionRef.current = { x: clientX, y: clientY };
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
    };

    // Add event listeners
    renderer.domElement.addEventListener("mousedown", onMouseDown);
    renderer.domElement.addEventListener("touchstart", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchend", onMouseUp);

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current)
        return;

      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;

      cameraRef.current.aspect = newWidth / newHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
      }

      window.removeEventListener("resize", handleResize);
      renderer.domElement.removeEventListener("mousedown", onMouseDown);
      renderer.domElement.removeEventListener("touchstart", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchend", onMouseUp);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      geometry.dispose();
      materials.forEach((material) => {
        material.map?.dispose();
        material.dispose();
      });
      renderer.dispose();
    };
  }, [frontImage, backImage, leftImage, rightImage, topImage, bottomImage]);

  const handleReset = () => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.PI * 0.25;
      meshRef.current.rotation.x = Math.PI * 0.05;
      rotationVelocityRef.current = { x: 0, y: 0 };
    }
  };

  return (
    <div className="relative w-full h-full">
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        style={{ minHeight: "400px" }}
      />
      
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-spice-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading 3D viewer...</p>
          </div>
        </div>
      )}

      {!isLoading && (
        <>
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md text-sm text-gray-700">
            <p className="flex items-center gap-2">
              <RotateCw size={16} />
              Drag to rotate
            </p>
          </div>

          <button
            onClick={handleReset}
            className="absolute top-4 right-4 bg-spice-500 hover:bg-spice-600 text-white px-3 py-2 rounded-lg shadow-md transition-colors duration-200 text-sm"
          >
            Reset View
          </button>
        </>
      )}
    </div>
  );
};

export default PackagingViewer3D;
