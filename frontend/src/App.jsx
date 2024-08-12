

import React from "react";
import { ThreeDCardDemo } from "./card";
import Slider from "react-slick";
import Card2 from "./card2";
import Card3 from "./card3";
import Navbar from "./navbar";
import Dashboard from "./dashboard";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Home from "./home";
import { BrowserRouter,Route,Routes,Link } from "react-router-dom";

function App() {
  // const [items, setItems] = React.useState([]);
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
  

  // React.useEffect(() => {
  //   async function getCard() {
  //     const resp = await fetch("http://localhost:8000/getcards", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     if (resp.ok) {
  //       const data = await resp.json();
  //       console.log(data);
  //       setItems(data);
  //     }
  //   }
  //   getCard();
  // }, []);

  return (
  //   <div className="bg-gray-900 min-h-screen flex flex-col ">
  //     <Navbar />
  //     <header className="text-center text-white py-20">
  //       <h1 className="text-4xl font-bold">Question and Answers</h1>
  //       <p className="mt-2 text-lg text-gray-300">Explore the knowledge</p>
  //     </header>

  //     <section className="px-10 py-8">
  //     <Slider {...settings}>
  //       {items.map((ele) => (
  //         <ThreeDCardDemo
  //           key={ele.id}
  //           question={ele.question}
  //           answer={ele.answer}
  //         />
  //       ))}
  //       </Slider>
  //     </section>

  //     <section className="px-10 py-8">
  //     <Slider {...settings}>
  //       {items.map((ele) => (
  //         <Card3
  //           key={ele.id}
  //           question={ele.question}
  //           answer={ele.answer}
  //         />
  //       ))}
  //       </Slider>
  //     </section>
  //     <Dashboard cards={items}/>
      
  //   </div>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    <Routes>
      <Route path='/dash' element={<Dashboard/>} />
      </Routes>
  </BrowserRouter>
  );
}



export default App;

