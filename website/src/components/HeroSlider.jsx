import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import hero1 from "../assets/hero-1.jpg";

const slides = [
  {
    image: hero1,
    title: "The Grand\nEntrance",
    subtitle: "Solid wood & steel front doors built for lasting impressions.",
    cta: "Разгледай всички",
  }
];

const animationTime = 500;
const slideAfter = 7000;
const swipeThreshold = 50;

const HeroSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  const [textVisible, setTextVisible] = useState(true);
  const touchStartX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e, next, prev) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        next();
      } else {
        prev();
      }
    }
  };

  return (
    <div 
      className="max-w-7xl m-auto relative w-full h-screen overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={(e) => {
        if (slides.length <= 1) return;
        const next = () => {
          const newIndex = (currentImage + 1) % slides.length;
          setCurrentImage(newIndex);
          setTextVisible(false);
          setTimeout(() => {
            setCurrentText(newIndex);
            setTextVisible(true);
          }, animationTime);
        };
        const prev = () => {
          const newIndex = (currentImage - 1 + slides.length) % slides.length;
          setCurrentImage(newIndex);
          setTextVisible(false);
          setTimeout(() => {
            setCurrentText(newIndex);
            setTextVisible(true);
          }, animationTime);
        };
        handleTouchEnd(e, next, prev);
      }}
    >
      <ImageSlider currentImage={currentImage} />

      <div className="absolute inset-0 flex flex-col justify-center px-12">
        <div
          className="flex flex-col items-center transition-opacity duration-500 ease-in-out"
          style={{ opacity: textVisible ? 1 : 0 }}
        >
          <h1 className="text-white-400 text-center font-display text-4xl md:text-6xl lg:text-6xl font-black text-white leading-none mb-8 whitespace-pre-line">
          {slides[currentText].title}
        </h1>
          <p className="text-sm text-center text-white/80 md:text-lg mb-8">
            {slides[currentText].subtitle}
          </p>
          <div className="flex gap-7">
            <Link
              to="/doors"
              className="flex items-center gap-1 text-sm md:text-lg btn-hover rounded-[5px] px-8 py-3 font-semibold bg-primary text-white transition"
            >
              {slides[currentText].cta}
							<ArrowRight style={{stroke: "white"}} size={20}/>
            </Link>
          </div>
        </div>
      </div>

      <Surroundings
        setTextVisible={setTextVisible}
        setCurrentText={setCurrentText}
        currentImage={currentImage}
        setCurrentImage={setCurrentImage}
      />
    </div>
  );
};

const Surroundings = ({
  currentImage,
  setCurrentImage,
  setTextVisible,
  setCurrentText,
}) => {
  const goTo = useCallback((index) => {
    setCurrentImage(index);

    setTextVisible(false);
    setTimeout(() => {
      setCurrentText(index);
      setTextVisible(true);
    }, animationTime);
  }, [setCurrentImage, setCurrentText, setTextVisible]);

  const next = useCallback(
    () => goTo((currentImage + 1) % slides.length),
    [currentImage, goTo],
  );
  const prev = () => goTo((currentImage - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (slides.length <= 1) return;
    const t = setInterval(next, slideAfter);
    return () => clearInterval(t);
  }, [next]);

  if (slides.length <= 1) {
    return null;
  }

  return (
    <>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 items-center">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-600 ease-in-out ${
              i === currentImage
                ? "w-5 h-1.5 bg-white"
                : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      <button
        onClick={prev}
        className="hidden xs:block arrow arrow-left rounded-sm absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-white/70 transition"
      >
        <ChevronLeft size={36} />
      </button>
      <button
        onClick={next}
        className="hidden xs:block arrow arrow-right rounded-sm absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-white/70 transition"
      >
        <ChevronRight size={36} />
      </button>

      <div className="absolute bottom-8 right-8 text-white/60 text-sm font-mono">
        {String(currentImage + 1).padStart(2, "0")} /{" "}
        {String(slides.length).padStart(2, "0")}
      </div>
    </>
  );
};

const ImageSlider = ({ currentImage }) => {
  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentImage * 100}%)` }}
        >
          {slides.map(slide => (
            <div key={slide.title} className="w-full h-full flex-shrink-0 flex items-center justify-center">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-black/35" />
    </>
  );
};

export default HeroSlider;
