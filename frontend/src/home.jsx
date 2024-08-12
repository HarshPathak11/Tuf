import React from "react";
import { ThreeDCardDemo } from "./card";
import Slider from "react-slick";
import Card2 from "./card2";
import Card3 from "./card3";
import Navbar from "./navbar";
import Dashboard from "./dashboard";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



function Home() {
  const [items, setItems] = React.useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  

  React.useEffect(() => {
    async function getCard() {
      const resp = await fetch("https://tuf-92e8.onrender.com/getcards", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (resp.ok) {
        const data = await resp.json();
        console.log(data);
        setItems(data);
      }
    }
    getCard();
  }, [items]);

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col ">
      <Navbar />
      <header className="text-center text-white py-20">
        {/* <h1 className="text-4xl font-bold mt-5 font-serif">TriviaCards Tresure !!</h1>
        <p className="mt-2 text-xl text-gray-300 font-serif">Click for Answers</p> */}
        {/* <div className="flex justify-center">
            <img data-v-83bd8314="" src="https://app.svgator.com/assets/svgator.webapp/log-in-girl.svg" width="500" />
            <div className="w-[50vw]">
             <h6>TriviaCards is a Fun sites , with varieties of FlashCards, Click them, or hover above them,
             to reveal the Answers. Further, you can even visit, The DashBoard section to add your own TriviaCards and 
              edit or delete the exisiting ones.</h6>
            </div>
        </div> */}
        <div className="grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 ">
            <div className="flex justify-center items-center">
              <div className="p-2 sm:pl-10 text-white flex justify-center items-center flex-col">
                <h1 className="text-yellow text-3xl sm:text-4xl md:text-6xl text-center m-4 font-serif">TriviaCards Treasure !!
                </h1>
                <p className="text-center font-mono text-gray-400 text-lg">TriviaCards is a Fun sites , with varieties of FlashCards, Click them, or hover above them,
             to reveal the Answers. Further, you can even visit, The DashBoard section to add your own TriviaCards and 
              edit or delete the exisiting ones.</p>
               
                </div>
            </div>
            <div className="flex justify-center">
            <img data-v-83bd8314="" src="https://app.svgator.com/assets/svgator.webapp/log-in-girl.svg" width="480" />
            </div>
        </div>
      </header>

      <section className=" px-6 md:px-10 py-8">
      <Slider {...settings}>
        {items.map((ele) => (
          <ThreeDCardDemo
            index={ele.id}
            question={ele.question}
            answer={ele.answer}
          />
        ))}
        </Slider>
      </section>

      <section className="px-6 md:px-10 py-8">
      <Slider {...settings}>
        {items.map((ele) => (
          <Card3
            key={ele.id}
            question={ele.question}
            answer={ele.answer}
          />
        ))}
        </Slider>
      </section>
      {/* <Dashboard cards={items}/> */}
      
    </div>
  );
}



export default Home;

