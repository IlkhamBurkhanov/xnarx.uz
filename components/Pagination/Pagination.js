import { useState } from "react";

const Pagination = ({ totalPage, currentPage, handleClickItem }) => {
  const [current, setCurrent] = useState(currentPage);

  const handleClick = (page) => {
    setCurrent(page);
    handleClickItem(page);
  };

  const handleNext = () => {
    if (current < totalPage - 1) {
      setCurrent(current + 1);
      handleClickItem(current + 1);
    }
  };

  const handlePrevious = () => {
    if (current > 0) {
      setCurrent(current - 1);
      handleClickItem(current - 1);
    }
  };

  const generatePagination = () => {
    const pages = [];
    const windowSize = 5;
    const halfWindowSize = Math.floor(windowSize / 2);

    let start = current - halfWindowSize;
    let end = current + halfWindowSize;

    if (start < 0) {
      start = 0;
      end = Math.min(windowSize - 1, totalPage - 1);
    } else if (end >= totalPage) {
      end = totalPage - 1;
      start = Math.max(0, totalPage - windowSize);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pages = generatePagination();

  return totalPage > 1 ? (
    <div className="flex justify-center mt-5">
      <button
        onClick={handlePrevious}
        className={`${
          current === 0 ? "bg-gray-300 cursor-not-allowed" : "bg-gray-300"
        } text-white py-1 px-2 border mx-1`}
        disabled={current === 0}
      >
        Prev
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => handleClick(page)}
          className={`${
            current === page ? "bg-orange-400" : "bg-gray-300"
          } text-white py-1 px-2 border mx-1`}
        >
          {page + 1}
        </button>
      ))}
      <button
        onClick={handleNext}
        className={`${
          current === totalPage - 1
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-gray-300"
        } text-white py-1 px-2 border mx-1`}
        disabled={current === totalPage - 1}
      >
        Next
      </button>
    </div>
  ) : null;
};

export default Pagination;
