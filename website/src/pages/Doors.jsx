import { useEffect, useState } from "react";
import { fetchDoors, fetchDoorsBySeries } from "../api";
import Card from "../components/Card";
import { useParams } from "react-router";
import { useLocation } from "react-router";
import PaginationButtons from "../components/PaginationButtons";

const Doors = ({ series }) => {
  const [page, setPage] = useState(0);
  const [doors, setDoors] = useState([]);
  const [totalElements, setTotalElements] = useState();
  const [totalPages, setTotalPages] = useState(0);
  const location = useLocation();

  const { name } = useParams();

  const loadProducts = async (page) => {
    let data;

    if (!series) {
      data = await fetchDoors(page);
    } else {
      data = await fetchDoorsBySeries(page, name);
    }

    setDoors(data.content);
    setTotalElements(data.totalElements);
    setTotalPages(data.totalPages);
  };

  useEffect(() => {
    setPage(0);
  }, [location]);

  useEffect(() => {
    loadProducts(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page, location]);

  return (
    <div>
      <div className="max-w-7xl mx-auto px-8 py-4 min-h-[500px]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-7">
          <div className="gap-6 flex-col md:flex-row flex items-center justify-between w-full">
            <h2 className="font-black font-display text-3xl md:text-4xl leading-none whitespace-pre-line">
              {series ? `Серия ${name}` : "Нашите Врати"}
              {totalElements > 0 && ` (${totalElements})`}
            </h2>
            {totalPages > 1 && (
              <div className="hidden sm:block">
                <PaginationButtons
                  totalPages={totalPages}
                  setPage={setPage}
                  page={page}
                />
              </div>
            )}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
          {doors &&
            doors.map((door) => (
              <Card showSeries={false} door={door} key={door.slug} />
            ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center my-6">
            <PaginationButtons
              totalPages={totalPages}
              setPage={setPage}
              page={page}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Doors;
