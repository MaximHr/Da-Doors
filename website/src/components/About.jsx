import underline from "../assets/underline.svg";

const About = () => {
  return (
    <div
      id="about"
      className="px-8 flex gap-7 flex-col lg:flex-row lg:items-stretch py-16"
    >
      <div className="p-7 items-start info flex flex-col gap-5 blue-bc rounded-[5px] sm:py-12 sm:px-14">
        <h1 className="mb-2 text-primary font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-none">
          За нас
          <img
            className="w-[160px] md:w-[210px] relative left-[-15px]"
            src={underline}
          ></img>
        </h1>
        <p className="text-sm sm:text-[1rem]/6 max-w-[100%]">
          Ние сме компания, специализирана в доставка и монтаж на блиндирани
          входни врати за апартаменти, къщи и ново строителство. Работим с
          внимателно подбрани модели, които съчетават сигурност, модерен дизайн
          и дълготрайност.
        </p>
        <p className="text-sm sm:text-[1rem]/6 max-w-[100%]">
          Вратите, които предлагаме, са производство на Portal Doors – утвърден
          турски производител с дългогодишен опит и европейски сертификати за
          качество.
        </p>
        <p className="text-sm sm:text-[1rem]/6 max-w-[100%]">
          Всички врати се изработват по поръчка, според избрания модел и размер,
          което ни позволява да предложим оптимално решение за всеки обект.
          Разполагаме с шоурум в София, където можете да видите мостри и да
          получите професионална консултация.
        </p>
				<p className="text-sm sm:text-[1rem]/6 max-w-[100%]">
					Нашият фокус е ясен – коректност, реални срокове и качествен монтаж.
				</p>
        <a
          href="#contact"
          className="flex items-center gap-1 text-sm md:text-lg btn-hover rounded-[5px] px-8 py-3 font-semibold bg-primary text-white transition"
        >
          Свържи се с нас
        </a>
      </div>
    </div>
  );
};

export default About;
