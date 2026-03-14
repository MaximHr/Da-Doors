import { Star } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <div id="why-choose-us" className="pt-16 px-8 relative">
      <div>
        <Star
          className="star absolute top-[-10px] lg:top-[80px] right-[40px] md:right-[140px] rotate-[10deg]"
          size={67}
          style={{ stroke: "#FFE19C", fill: "#FFE19C" }}
        />
        <Star
          className="star absolute left-[30px] top-[0px] lg:top-[90px] md:left-[100px] rotate-[-10deg]"
          size={67}
          style={{ stroke: "#FFE19C", fill: "#FFE19C" }}
        />
      </div>
      <h2 className="text-center font-display text-4xl sm:text-5xl md:text-6xl font-black text-foreground leading-none mb-1">
        Защо да изберете
      </h2>
      <h2 className="text-center font-display text-4xl sm:text-5xl md:text-6xl font-black text-foreground leading-none mb-5">
        DA <span className="font-black text-primary">Doors</span>
      </h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 max-w-4xl mx-auto mt-12">
        <div className="flex flex-col items-center text-center">
          <span className="text-4xl md:text-5xl mb-2 hover:animate-shake cursor-default">
            🚪
          </span>
          <p className="text-sm max-w-[235px] md:max-w-[320px] md:text-lg font-medium text-foreground">
            Богат избор от входни и интериорни врати
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <span className="text-4xl md:max-w-[320px] max-w-[235px] md:text-5xl mb-2 hover:animate-shake cursor-default">
            📏
          </span>
          <p className="text-sm md:max-w-[320px] max-w-[235px] md:text-lg font-medium text-foreground">
            Безплатна консултация и избор на модел
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <span className="text-4xl md:text-5xl mb-2 hover:animate-shake cursor-default">
            🚚
          </span>
          <p className="max-w-[235px] text-sm md:max-w-[320px] md:text-lg font-medium text-foreground">Бърза доставка</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <span className="text-4xl md:text-5xl mb-2 hover:animate-shake cursor-default">
            🔧
          </span>
          <p className="max-w-[235px] text-sm md:max-w-[320px] md:text-lg font-medium text-foreground">
            Професионален монтаж
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <span className="text-4xl md:text-5xl mb-2 hover:animate-shake cursor-default">
            🤝
          </span>
          <p className="max-w-[235px] text-sm md:max-w-[320px] md:text-lg font-medium text-foreground">
            Гаранция и сервиз
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <span className="text-4xl md:text-5xl mb-2 hover:animate-shake cursor-default">
            💰
          </span>
          <p className="max-w-[235px] text-sm md:max-w-[320px] md:text-lg font-medium text-foreground">
            Конкурентни цени
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
