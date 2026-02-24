import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Имате ли врати на склад?",
    answer:
      "Не. Всички врати се произвеждат по поръчка, според избрания модел, размер и конфигурация. Това гарантира по-добро качество и възможност за персонализация.",
  },
  {
    question: "Какъв е срокът за доставка?",
    answer:
      "Стандартният срок за доставка е 30 работни дни, в зависимост от модела и избраните опции.",
  },
  {
    question: "Подходящи ли са вратите за външен монтаж?",
    answer:
      "Да. Покритията са устойчиви на външни атмосферни условия и вратите са подходящи както за апартаменти, така и за къщи.",
  },
  {
    question: "Имат ли вратите шумо- и топлоизолация?",
    answer:
      "Да. Благодарение на каменната вата и уплътненията по периметъра, вратите осигуряват много добра шумо- и топлоизолация.",
  },
  {
    question: "Предлагате ли монтаж?",
    answer:
      "Да. Предлагаме професионален монтаж като допълнителна услуга.",
  },
  {
    question: "Каква е цената на вратите?",
    answer:
      "Цената зависи от модела, размера и избраните опции. Можете да изпратите запитване или да посетите нашия шоурум за персонална оферта.",
  },
  {
    question: "Къде мога да видя вратите на живо??",
    answer:
      "Можете да видите избрани модели в нашия шоурум в София.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-background mb-16 relative">
      <div className="hidden lg:block circle circle-first absolute">
        <div className="inner-circle"></div>
      </div>
      <div className="hidden lg:block circle circle-second absolute">
        <div className="inner-circle"></div>
      </div>
      <div className="max-w-3xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-foreground leading-none mb-5">
            Въпроси{" "}
            <span className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-foreground leading-none text-primary">
              &
            </span>{" "}
            Отговори
          </h2>
          <p className="text-muted-foreground text-md sm:text-lg max-w-lg mx-auto">
            Полезна информация преди да се свържете с нас.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`bg-white border border-border rounded-[5px] px-5 sm:px-6 transition-colors`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between py-4 sm:py-5 text-left"
                >
                  <span className="text-sm sm:text-[16px] font-display font-bold text-foreground">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    isOpen ? "max-h-40 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="text-sm sm:text-[16px] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
