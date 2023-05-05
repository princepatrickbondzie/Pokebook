import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { ThemeContext } from "../../../context/ThemeContext";

const Pagination = ({
  currentPage,
  cardsPerPage,
  totalCards,
  paginate,
  setCardsPerPage,
}: {
  currentPage: any;
  cardsPerPage: any;
  totalCards: any;
  paginate: any;
  setCardsPerPage: any;
}) => {
  const { currentTheme } = React.useContext(ThemeContext);
  const pageNumbers: any = [];
  const maxCardsPerPage = 24;

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCardsPerPage(parseInt(e.target.value));
    paginate(1);
  };

  const renderPaginationButtons = () => {
    const MAX_BUTTONS = 5;
    let leftTruncate = false;
    let rightTruncate = false;

    // Logic for truncating the page number button list
    if (pageNumbers.length > MAX_BUTTONS) {
      if (currentPage > MAX_BUTTONS - 2) {
        leftTruncate = true;
      }

      if (currentPage < pageNumbers.length - (MAX_BUTTONS - 2)) {
        rightTruncate = true;
      }
    }

    // Array of button numbers to render
    let buttonsToRender: number[] = [];

    if (!leftTruncate && !rightTruncate) {
      buttonsToRender = pageNumbers;
    } else if (leftTruncate && !rightTruncate) {
      buttonsToRender = [
        ...pageNumbers.slice(0, 2),
        -1,
        ...pageNumbers.slice(currentPage - (MAX_BUTTONS - 3), currentPage + 1),
      ];
    } else if (!leftTruncate && rightTruncate) {
      buttonsToRender = [
        ...pageNumbers.slice(currentPage, currentPage + (MAX_BUTTONS - 3)),
        -1,
        ...pageNumbers.slice(-2),
      ];
    } else {
      buttonsToRender = [
        ...pageNumbers.slice(0, 1),
        -1,
        ...pageNumbers.slice(currentPage - (MAX_BUTTONS - 5), currentPage + 1),
        -1,
        ...pageNumbers.slice(-1),
      ];
    }

    return (
      <>
        {buttonsToRender.map((number: number, index: number) => (
          <li key={index} className="mx-1">
            {number === -1 ? (
              <span className="text-gray-500">...</span>
            ) : (
              <button
                style={{
                  backgroundColor:
                    currentPage === number ? currentTheme : "white",
                }}
                className={`${
                  currentPage === number ? "text-white" : "text-gray-900"
                } md:px-3 md:py-1 px-1.5 py-0.5 rounded-lg`}
                onClick={() => paginate(number)}
              >
                {number}
              </button>
            )}
          </li>
        ))}
      </>
    );
  };

  return (
    <div className="flex md:flex-row flex-col w-full md:justify-between justify-center flex-wrap-reverse items-center">
      <ul className="flex">
        {totalCards > maxCardsPerPage && (
          <li className="mx-1">
            <button
              style={{
                backgroundColor: currentPage === 1 ? currentTheme : "white",
              }}
              className={`${
                currentPage === 1 ? "text-white" : "text-gray-700"
              } md:px-3 md:py-1.5 px-1.5 py-0.5 rounded-lg`}
              onClick={() => paginate(1)}
            >
              <IoIosArrowBack className="text-xl" />
            </button>
          </li>
        )}
        {renderPaginationButtons()}
        {totalCards > maxCardsPerPage && (
          <li className="mx-1">
            <button
              style={{
                backgroundColor:
                  currentPage === Math.ceil(totalCards / cardsPerPage)
                    ? currentTheme
                    : "white",
              }}
              className={`${
                currentPage === Math.ceil(totalCards / cardsPerPage)
                  ? "text-white"
                  : "text-gray-700"
              } md:px-3 md:py-1.5 px-1.5 py-0.5 rounded-lg`}
              onClick={() => paginate(Math.ceil(totalCards / cardsPerPage))}
            >
              <IoIosArrowForward className="text-xl" />
            </button>
          </li>
        )}
      </ul>
      <div className="flex items-center md:my-0 my-4">
        <select
          className="mx-2 px-3 py-2 border-gray-400 rounded-md text-sm"
          value={cardsPerPage}
          onChange={handleSelectChange}
        >
          <option value={8}>8</option>
          <option value={12}>12</option>
          <option value={16}>16</option>
          <option value={24}>24</option>
          <option value={32}>32</option>
        </select>
      </div>
    </div>
  );
};

export default Pagination;
