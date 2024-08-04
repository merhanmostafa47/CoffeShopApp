export default function useParallax(parallaxImagesClass) {
  onMounted(() => {
    const parallax = (e) => {
      document.querySelectorAll(parallaxImagesClass).forEach((element) => {
        const shapeSpeed = element.getAttribute("data-speed");
        const x = (e.pageX / shapeSpeed) * 4;
        const y = (e.pageY / shapeSpeed) * 4;

        element.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };
    document.addEventListener("mousemove", parallax);
  });
}
