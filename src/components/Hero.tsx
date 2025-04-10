import { ArrowDown } from "lucide-react";
const Hero = () => {
  const handleScroll = () => {
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center hero-gradient pt-16">
      <div className="spice-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-spice-700 leading-tight">
              Premium Quality <br />
              <span className="text-leaf-600">Farm Fresh Spices</span>
            </h1>
            <p className="mt-6 text-lg text-spice-600 max-w-lg">
              Experience the authentic flavors of nature with our carefully sourced
              and processed spices. From farm to your kitchen, we preserve the
              essence and aroma in every grain.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button onClick={handleScroll} className="button-primary flex items-center gap-2">
                Explore Products
                <ArrowDown size={16} />
              </button>
              <a href="#contact" className="button-secondary">
                Contact Us
              </a>
            </div>
          </div>
          <div className="relative animate-zoom-in">
            <div className="aspect-square rounded-full bg-leaf-100 absolute top-0 right-0 w-4/5 -z-10"></div>
            <div className="aspect-square rounded-full bg-spice-100 absolute bottom-0 left-0 w-4/5 -z-10"></div>
            <img alt="Assorted Spices" className="rounded-2xl shadow-xl object-cover aspect-square" src="/lovable-uploads/1eb57cb0-4e03-4d54-931e-4a4caedab319.png" />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;