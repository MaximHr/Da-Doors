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

const PAGE_SIZE = 3;

export const fetchDoors = async (page) => {
  try {
    const res = await fetch(import.meta.env.VITE_SERVER_URL + `/products/list?page=${page}&size=${PAGE_SIZE}&sort=createdAt,desc`, {
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
