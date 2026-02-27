import { useEffect, useState } from "react";
import { fetchDoors } from "../api";
import Card from "../components/Card";

const Doors = () => {
  const [page, setPage] = useState(0);
  const [doors, setDoors] = useState([]);
  const [totalElements, setTotalElements] = useState();
  const [totalPages, setTotalPages] = useState(0);

  const loadProducts = async (page) => {
    const data = await fetchDoors(page);
    setDoors(data.content);
    setTotalElements(data.totalElements);
    setTotalPages(data.totalPages);
  };

  useEffect(() => {
    loadProducts(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const handlePrev = () => {
    if (page > 0) setPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (page < totalPages - 1) setPage((prev) => prev + 1);
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto px-8 py-4 min-h-[500px]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-7">
          <div>
            <h2 className="font-black font-display text-3xl md:text-4xl leading-none whitespace-pre-line">
              Нашите Врати
              {totalElements && ` (${totalElements})`}
            </h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
          {doors && doors.map((door) => <Card door={door} key={door.slug} />)}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-end gap-4 my-6">
            <button
              onClick={handlePrev}
              disabled={page === 0}
              className="border not:disabled:cursor-pointer px-5 py-1.5 rounded-[5px] bg-white text-sm font-semibold transition-colors"
            >
              Prev
            </button>

            <span className="self-center text-sm">
              Page {page + 1} of {totalPages}
            </span>

            <button
              onClick={handleNext}
              disabled={page === totalPages - 1}
              className="cursor-pointer btn-hover px-5 py-1.5 rounded-[5px] bg-primary text-white text-sm font-semibold transition-colors"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Doors;
