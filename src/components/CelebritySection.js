import React, { useState, useEffect } from "react";
import sunny from "../assets/sunny-leone-review-for-swamiji.webp";
import abd from "../assets/swamiji-celabritys1.webp";
import arjun from "../assets/arjun-rampal.webp";
import Tusshar from "../assets/Tusshar-Kapoor.webp";
import Card from "../assets/swamiji-celabritys.webp";

function CelebritySection(){

const data = [
{
img:sunny,
name:"Sunny Leone",
role:"Canadian-American actress and model"
},
{
img:abd,
name:"AB de Villiers",
role:"South African cricketer"
},
{
img:arjun,
name:"Arjun Rampal",
role:"Indian actor and model"
},
{
img:Tusshar,
name:"Tusshar Kapoor",
role:"Indian actor and film producer"
},
{
img:Card,
name:"KaalBet Club",
role:"KaalBet Official Card"
}
];

const [index,setIndex] = useState(0);

const nextSlide = () =>{
setIndex((prev)=> (prev + 1) % data.length);
}

const prevSlide = () =>{
setIndex((prev)=> prev === 0 ? -1 : prev -1);
}

useEffect(()=>{
const interval = setInterval(()=>{

setIndex((prev)=>{
if(prev >= data.length - 3){
return 0;
}
return prev + 1;
});

},3000);

return ()=> clearInterval(interval);


},[data.length ]);

return(

<section className="celebrity-section">

<h1>When Celebrities Play, They Choose KaalBet</h1>

<div className="celebrity-grid">

<button className="arrow left" onClick={prevSlide}>❮</button>

<div
className="celebrity-track"
style={{transform:`translateX(-${index * 360}px)`}}
>

{data.map((item,index)=>(

<div className="celebrity-card" key={index}>

<div className="image-wrapper">

<img src={item.img} alt={item.name}/>

<div className="play-btn"></div>

</div>

<h3>{item.name}</h3>
<p>{item.role}</p>

</div>

))}

</div>

<button className="arrow right" onClick={nextSlide}>❯</button>

</div>

</section>

);

}

export default CelebritySection;