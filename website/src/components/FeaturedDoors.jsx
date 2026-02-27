import Card from "./Card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const FeaturedDoors = ({doors}) => {
  return (
    <>
      <section className="pt-16 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="text-xs font-semibold text-primary tracking-[0.25em] uppercase mb-4">
                Нашата колекция
              </p>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black leading-none">
                Специални
                <br />
                Предложения
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="sm:grid-cols-2 grid md:grid-cols-3 lg:grid-cols-4 gap-7 px-8">
            {doors && doors.map((door) => <Card door={door} key={door.slug} />)}
          </div>
          <div className="flex mt-7 sm:mt-9">
            <Link
              to="/doors"
              className="flex items-center gap-1 text-sm md:text-xl btn-hover rounded-[5px] px-8 py-3 font-semibold bg-primary text-white transition"
            >
              Разгледай всички
              <ArrowRight style={{ stroke: "white" }} size={24} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedDoors;
