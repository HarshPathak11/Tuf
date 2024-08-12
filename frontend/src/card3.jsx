import React from "react";
import './card3.css'
export default function Card3(props){
    return (
        <div class="container">
	<div class="card">
		<div class="img-box">
			<img src="https://images.pexels.com/photos/1699030/pexels-photo-1699030.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Moon" title="Moon"/>
		</div>
		
		<div class="details">
			<h2>
				{props.question}
			</h2>
			
			<p>
				{props.answer}
			</p>
		</div>
	</div>
	
	
</div>
    )
}