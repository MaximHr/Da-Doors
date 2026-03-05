import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoorDetails } from "../api";

const Details = () => {
  const [door, setDoor] = useState();
  const { slug } = useParams();

  const loadDoor = async (slug) => {
    const data = await getDoorDetails(slug);
    setDoor(data);
  };

  useEffect(() => {
    if (slug) {
      loadDoor(slug);
    }
  }, [slug]);

  return <div>Details</div>;
};

export default Details;
