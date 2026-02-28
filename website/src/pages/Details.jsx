import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { slug } = useParams();

	useEffect(() => {
		console.log(slug);
	}, [slug]);


	return (
		<div>Details</div>
	)
}

export default Details;