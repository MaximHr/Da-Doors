import { BriefcaseBusiness } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const HowWeWork = ({ onOpenPopup }) => {
  const steps = [
    "Свързвате се с нас",
    "Избирате модел врата",
    "Вземаме размери",
    "Доставка",
    "Професионален монтаж",
  ];

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div id="how-we-work" className="pt-16 px-8">
      <h2 className="text-left sm:text-center mb-8 sm:mb-12 font-display text-4xl sm:text-5xl md:text-6xl font-black leading-none">
        Как <span className="font-black">работим</span>
      </h2>

      <div className="max-w-6xl mx-auto" ref={sectionRef}>
        <div className="relative">
          <div
            className={`hidden lg:block absolute top-6 md:top-8 left-0 right-0 h-1 rounded-[5px] ${isVisible && "line-animate"}`}
          />

          <div
            className={`block lg:hidden sm:hidden absolute top-0 bottom-0 left-6 w-[3px] rounded-[5px] ${isVisible && "line-animate"}`}
            style={{ height: "auto" }}
          />

          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
            {steps.map((step, index) => (
              <div
                key={step}
                className="flex sm:flex-col items-center sm:items-center gap-3 sm:gap-0"
              >
                <div className="relative z-10 flex-shrink-0 sm:mb-2 md:mb-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-[5px] bg-primary text-white flex items-center justify-center text-lg md:text-2xl font-bold">
                    {index + 1}
                  </div>
                </div>
                <p className="text-left sm:text-center text-sm md:text-lg font-medium text-foreground">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex mt-8 sm:mt-12 justify-start sm:justify-center">
        <button onClick={onOpenPopup} className="flex items-center gap-2 text-sm md:text-xl btn-hover rounded-[5px] px-8 py-3 font-semibold bg-primary text-white transition">
          Поискай оферта
        </button>
      </div>
    </div>
  );
};

export default HowWeWork;
