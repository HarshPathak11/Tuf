import React from "react"

import './card2.css'
export default function Card2(props){
return(
<div class="container">
  <div class="content-inner">
    <div class="content-front">
      <div class="cf-inner">
        <div class="bg"></div>
        <div class="overlay"></div>
        <div class="inner">
          <h2>Question {props.index}</h2>
          <h4>{props.question}</h4>
        </div>
        <div class="serv-num">03</div>
      </div>
    </div>
    <div class="content-back">
      <div class="cf-inner">
        <div class="inner">
          <div class="dec-icon">
            <i class="fas fa-bomb"></i>
          </div>
          <p>{props.answer}</p>
        </div>
      </div>
    </div>
  </div>
</div>)};