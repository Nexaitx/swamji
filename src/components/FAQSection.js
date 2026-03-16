import React, { useState } from "react";
import faqImg from "../assets/FQE-pic.webp";

function FAQSection() {

const [open,setOpen] = useState(null);

const faq = [
{
q:"How do I create my Online Cricket ID at KaalBet Online?",
a:"You can contact our team on WhatsApp and provide basic details. Our support team will generate your cricket ID instantly."
},
{
q:"Is KaalBet Online a reliable and safe betting site?",
a:"Yes. KaalBet Online provides a secure platform with encrypted payment methods and verified betting services."
},
{
q:"What identification must the user provide to verify their ID?",
a:"Users may need to provide basic identification details like name, phone number, and sometimes ID verification."
},
{
q:"What is the time frame for deposit and withdrawal processing?",
a:"Most deposits are instant and withdrawals are processed quickly depending on the payment method."
},
{
q:"What other sports are there to bet on apart from cricket?",
a:"Apart from cricket you can bet on football, tennis, horse racing and many casino games."
},
{
q:"Can I place live bets during a match?",
a:"Yes, live betting is available during matches so you can place bets in real time."
},
{
q:"What payment methods are there?",
a:"UPI, bank transfer, Visa cards, net banking and other digital payment options."
},
{
q:"Is the platform easy for novices to operate?",
a:"Yes, the interface is designed to be simple and beginner friendly."
},
{
q:"Is customer support available to resolve my issues?",
a:"Yes, our support team is available 24/7 through WhatsApp."
}
];

return (

<section className="faq-section">

<h1>FAQ</h1>

<div className="faq-container">

<div className="faq-left">

{faq.map((item,index)=>(

<div className="faq-item" key={index}>

<div
className="faq-question"
onClick={()=>setOpen(open===index?null:index)}
>

{item.q}

<span>{open===index?"▲":"▼"}</span>

</div>

{open===index && (
<p className="faq-answer">{item.a}</p>
)}

</div>

))}

</div>

<div className="faq-right">

<img src={faqImg} alt="faq"/>

</div>

</div>

</section>

);

}

export default FAQSection;