import { useState } from "react";
import cricketshot from "../assets/Group-16-23ud.webp";
import csk from "../assets/csklogo.webp";
import mi from "../assets/webp3.webp";
function MatchesSection() {

  const [activeTab, setActiveTab] = useState("live");

  return (
    <section className="matches-section">

      <h2 className="matches-header">
        24/7 Live Match Updates 2026
      </h2>

      <div className="matches-tabs">

        {/* <button
          className={`tab ${activeTab === "live" ? "active" : ""}`}
          onClick={() => setActiveTab("live")}
        >
          Live Matches
        </button> */}

        <button
          className={`tab ${activeTab === "upcoming" ? "active" : ""}`}
          onClick={() => setActiveTab("upcoming")}
        >
          Upcoming Matches
        </button>

      </div>
      <div className="matches-content">
          <div className="match-card">
            <button className="nav-arrow nav-arrow-left">‹</button>
            <div className="match-teams">
              <div className="team">
                <div className="team-logo team-logo-csk">
                  <img src={csk} alt="" style={{height:"100px"}}/>
                </div>
                <div className="team-name">CSK</div>
              </div>
              <div className="team">
                <div className="team-logo team-logo-mi">
                  <img src={mi} alt="" style={{height:"100px"}}/>
                </div>
                <div className="team-name">MI</div>
              </div>
            </div>
            <button className="nav-arrow nav-arrow-right">›</button>
            <div className="match-info">
              <span className="match-badge">IPL: Mar 26 - May 31, 2026</span>
              <span className="match-live">LIVE | 7 April-2026 | 07:30 PM | Chennai</span>
            </div>
          </div>

          <div className="scoreboard">
            <h3 className="scoreboard-title">
              <span className="cricket-icon">🏏</span> Live Scoreboard 2026
            </h3>
            <table className="scoreboard-table">
              <thead>
                <tr>
                  <th>Player</th>
                  <th>Runs</th>
                  <th>Balls</th>
                  <th>4s</th>
                  <th>6s</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Shivam</td>
                  <td>67</td>
                  <td>37</td>
                  <td>4</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Ravindra</td>
                  <td>38</td>
                  <td>28</td>
                  <td>3</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>MS Dhoni</td>
                  <td>43</td>
                  <td>21</td>
                  <td>3</td>
                  <td>3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="matches-cta">
           <a
        href="https://wa.link/haljko"
        
        target="_blank"
        rel="noreferrer"
      >
        <button className="cta-button-secondary">Get Cricket ID</button>
      </a>
          
          <div>
            <img src={cricketshot} alt="cricketshot" className="cricketshot" />

          </div>
            
          
        </div>

    </section>
  );
}

export default MatchesSection;