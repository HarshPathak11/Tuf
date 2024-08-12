import React, { useState } from "react";

function EditModal({ card, onSave, onClose }) {
  const [question, setQuestion] = useState(card.question);
  const [answer, setAnswer] = useState(card.answer);

  const handleSave = async () => {
    const resp = await fetch(`http://localhost:8000/change`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id:card.id,question, answer }),
    });
    if (resp.ok) {
      const updatedCard = await resp.json();
      onSave(updatedCard);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h3 className="text-xl font-semibold mb-4">Edit Card</h3>
        <input
          type="text"
          className="border p-2 w-full mb-4"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <input
          type="text"
          className="border p-2 w-full mb-4"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-500 hover:underline mr-4"
          >
            Cancel
          </button>
          <button onClick={handleSave} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
