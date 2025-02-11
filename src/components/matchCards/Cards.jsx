import React from "react";

const MatchCard = ({ match }) => {
  return (
    <div className="col-lg-4 col-md-6 w-50 col-sm-12 mb-3" data-status={match.status}>
      <div className="card bg-white text-black p-1 px-2 text-center shadow-sm">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div className="d-flex align-items-center">
            <i className="fas fa-baseball-bat-ball fa-1x text-warning me-2"></i>
            <p className="mb-0 fw-bold">{match.sport}</p>
          </div>
          <div>
            <p className="text-muted small mb-0">
              Starts: {match.startDate} - {match.startTime}
            </p>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col">
            <img
              src={match.imageUrl}
              alt="League Logo"
              className="img-fluid"
              style={{ maxWidth: "80px", height: "auto" }}
            />
          </div>
          <div className="col">
            <h6 className="mb-1">{match.teams}</h6>
            <span className={`badge text-white ${match.status === "available" ? "bg-success" : "bg-danger"}`}>
              {match.status === "available" ? "Match Available" : "Match Booked"}
            </span>
          </div>
          <div className="col">
            <p className="mb-0 text-danger fw-bold">
              Bid <br />
              <span className="text-black">${match.bidAmount}</span>
            </p>
          </div>
          <div className="col">
            <p className="mb-0 fw-bold">
              Security: <span className="text-success">{match.security ? "Yes" : "No"}</span>
            </p>
          </div>
        </div>

        {match.status === "available" && (
          <div className="card-footer bg-light mt-2">
            <button className="btn btn-warning request-button" onClick={() => alert("Request Sent!")}> 
              Send Request
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Example Usage
const MatchList = () => {
  const matches = [
    {
      id: 1,
      sport: "Cricket",
      startDate: "07 Jun 2025",
      startTime: "05:00 PM",
      imageUrl: "./images/pakistan-super-league-psl-logo.png",
      teams: "KKR vs RGB",
      league: "PSL",
      bidAmount: 5000,
      security: true,
      status: "available",
    },
    {
      id: 2,
      sport: "Cricket",
      startDate: "10 Jun 2025",
      startTime: "07:00 PM",
      imageUrl: "./images/pakistan-super-league-psl-logo.png",
      teams: "Pak vs Ind",
      league: "PSL",
      bidAmount: 5000,
      security: true,
      status: "booked",
    },
    {
      id: 3,
      sport: "Cricket",
      startDate: "15 Jun 2025",
      startTime: "06:30 PM",
      imageUrl: "./images/pakistan-super-league-psl-logo.png",
      teams: "RCB vs DC",
      league: "IPL",
      bidAmount: 6000,
      security: false,
      status: "pending",
    },
  ];

  return (
    <div className="row p-3">
      {matches.map((match) => (
        <MatchCard key={match.id} match={match} />
      ))}
    </div>
  );
};

export default MatchList;
