export const getHomePageDoors = async () => {
  try {
    const res = await fetch(import.meta.env.VITE_SERVER_URL + "/products/home-page", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

		if (!res.ok) {
			throw new Error();
		}

		const data = await res.json();

		return data;
  } catch (e) {
		console.log("toast could not load home products");
  }
};
