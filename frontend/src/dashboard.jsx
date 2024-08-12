import React, { useState, useEffect } from "react";
import CardItem from "./CardItem";
import EditModal from "./EditModal";
import Navbar from "./navbar";

function Dashboard() {
  const [cards,setCards]=React.useState([])
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");
  const [editCard, setEditCard] = useState(null);

  useEffect(() => {
    async function fetchCards() {
      const resp = await fetch("https://tuf-92e8.onrender.com/getcards", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (resp.ok) {
        const data = await resp.json();
        setCards(data);
      }
    }
    fetchCards();
  }, [cards]);

  const addCard = async () => {
    const resp = await fetch("https://tuf-92e8.onrender.com/addcards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question: newQuestion, answer: newAnswer }),
    });
    if (resp.ok) {
      const newCard = await resp.json();
      setCards([...cards, newCard]);
      setNewQuestion("");
      setNewAnswer("");
    }
  };

  const updateCard = (updatedCard) => {
    setCards(cards.map((card) => (card.id === updatedCard.id ? updatedCard : card)));
    setEditCard(null);
  };

  const deleteCard = async (id) => {
    const resp = await fetch(`https://tuf-92e8.onrender.com/del`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id:id }),
    });
    if (resp.ok) {
      setCards(cards.filter((card) => card.id !== id));
    }
  };

  return (
    <div>
    <Navbar/>
    <div className="bg-gray-900 min-h-screen flex flex-col p-10">
    
      <div className="flex flex-col"><h2 className="text-4xl font-bold text-center text-white mb-6 mt-14 font-serif">Manage Cards</h2>
      <div className=" bg-[#ffd60a] rounded-lg shadow-lg p-6 mb-8 sm:w-[50vw] sm:mx-auto">
        <h3 className="text-2xl font-semibold mb-4">Add New Card</h3>
        <input
          type="text"
          className="border p-2 w-full mb-4"
          placeholder="Enter question"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
        />
        <input
          type="text"
          className="border p-2 w-full mb-4"
          placeholder="Enter answer"
          value={newAnswer}
          onChange={(e) => setNewAnswer(e.target.value)}
        />
        <button onClick={addCard} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Add Card
        </button>
      </div></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card) => (
          <CardItem
            key={card.id}
            card={card}
            onEdit={() => setEditCard(card)}
            onDelete={() => deleteCard(card.id)}
          />
        ))}
      </div>
      {editCard && (
        <EditModal card={editCard} onSave={updateCard} onClose={() => setEditCard(null)} />
      )}
    </div>
    </div>
  );
}

export default Dashboard;
