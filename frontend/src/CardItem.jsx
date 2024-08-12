import React from "react";

function CardItem({ card, onEdit, onDelete }) {
  return (
    <div className="bg-gray-700 text-white p-4 rounded-lg shadow-md grid grid-rows-3">
      <h4 className="text-xl font-semibold mb-2 font-serif">{card.question}</h4>
      <p className="text-base mb-4 font-mono">{card.answer}</p>
      <div className="flex justify-between">
        <button onClick={onEdit} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 text-base font-sans">
          Edit
        </button>
        <button onClick={onDelete} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg px-5 py-2 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 text-base font-sans">
          Delete
        </button>
      </div>
    </div>
  );
}

export default CardItem;
