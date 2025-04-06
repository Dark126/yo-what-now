
export const handleAnimations = () => {
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

  return () => {
    animatedElements.forEach((element) => {
      observer.unobserve(element);
    });
  };
};
