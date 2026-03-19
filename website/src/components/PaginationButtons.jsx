const PaginationButtons = ({ totalPages, page, setPage }) => {
  const handlePrev = () => {
    if (page > 0) setPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (page < totalPages - 1) setPage((prev) => prev + 1);
  };

  return (
    <div className="flex sm:gap-4 gap-2 flex-col sm:flex-row">
      <button
        onClick={handlePrev}
        disabled={page === 0}
        className="border not:disabled:cursor-pointer px-5 py-1.5 rounded-[5px] bg-white text-sm font-semibold transition-colors"
      >
        Предишна
      </button>

      <span className="self-center text-sm">
        Стр. {page + 1} от {totalPages}
      </span>

      <button
        onClick={handleNext}
        disabled={page === totalPages - 1}
        className="cursor-pointer btn-hover px-5 py-1.5 rounded-[5px] bg-primary text-white text-sm font-semibold transition-colors"
      >
        Следваща
      </button>
    </div>
  );
};

export default PaginationButtons;
