import React from "react";
import blog1 from "../assets/ChatGPT-Image1.webp";
import blog2 from "../assets/Cricket-Bookie-ID2.png";
import blog3 from "../assets/ChatGPT-Image3.webp";
import blog4 from "../assets/IPL-Auction-20264.webp";
import blog5 from "../assets/ipl-id5.webp";
import blog6 from "../assets/Big-Bash-League-6.webp";

function LatestNews() {

    const news = [

        {
            img: blog1,
            title: "Why You Need a Verified Betting ID",
            date: "February 6, 2026 // No Comments"
        },

        {
            img: blog2,
            title: "Cricket Bookie ID: Get to Enjoy the Thrills of Cricket Betting in a Smart Way",
            date: "February 5, 2026 // No Comments"
        },


        {
            img: blog3,
            title: "IPL 2026 Upcoming Schedule: Dates, Player Availability, Auction Clarity and What Lies Ahead",
            date: "January 30, 2026 // No Comments"
        },

        {
            img: blog4,
            title: "IPL Auction 2026 – A Complete Overview of the Biggest Player Market in Cricket History",
            date: "January 30, 2026 // No Comments"
        }
        ,

        {
            img: blog5,
            title: "The Growing Demand for IPL ID in Online Cricket Entertainment",
            date: "February 5, 2026 // No Comments"
        },

        {
            img: blog6,
            title: "Big Bash League 2026: Play Smart Using a Legal Cricket ID Provider – KaalBet Online",
            date: "January 30, 2026 // No Comments"
        }

    ];

    return (

        <section className="news-section">

            <h1>Our Latest News</h1>

            <div className="news-grid">

                {news.map((item, index) => (

                    <div className="news-card" key={index}>

                        <img src={item.img} alt={item.title} />

                        <div className="news-content">

                            <h3>{item.title}</h3>

                            <span>{item.date}</span>

                            <a href="/news">Read More »</a>

                        </div>

                    </div>

                ))}

            </div>

        </section>

    );

}

export default LatestNews;