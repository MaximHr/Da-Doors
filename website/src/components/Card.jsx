import { Link } from "react-router";

const Card = ({ door }) => {
  return (
    <Link to={door.slug} className="min-w-60 card rounded-[5px] flex flex-col">
      <div className="img-container p-5 rounded-t-[5px]">
        <img
          src={import.meta.env.VITE_R2_URL + `/image/${door.titleImage}`}
          alt={door.title}
        />
      </div>
      <div className="info flex flex-col items-start gap-2 p-5">
        <h1 className="text-lg font-bold">{door.title}</h1>
        <p className="text-sm">{door.description}</p>
      </div>
    </Link>
  );
};

export default Card;
