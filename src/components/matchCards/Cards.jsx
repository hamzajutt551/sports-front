import React from "react";

const MatchCard = ({ match }) => {
  return (
    <div className="col-lg-4 col-md-6 col-12 mb-3" data-status={match.status}>
      <div className="card bg-white text-black p-2 text-center shadow-sm">
        <div className="d-flex justify-content-between align-items-center mb-1">
          <div className="d-flex align-items-center">
            <i className="fas fa-baseball-bat-ball fa-1x text-warning me-1"></i>
            <p className="mb-0 fw-bold">{match.sport}</p>
          </div>
          <p className="text-muted small mb-0">Starts: {match.startDate} - {match.startTime}</p>
        </div>

        <div className="row align-items-center">
          <div className="col-4 text-center">
            <img src={match.imageUrl} alt="League Logo" className="img-fluid" style={{ maxWidth: "70px" }} />
          </div>
          <div className="col-4 text-center">
            <p className="fw-bold mb-1">{match.teams}</p>
            <span className={`badge ${
              match.status === "available" ? "bg-success" :
              match.status === "booked" ? "bg-danger" :
              "bg-warning"} text-white`}>
              {match.status === "available" ? "Available" :
              match.status === "booked" ? "Booked" :
              "Pending"}
            </span>
          </div>
          <div className="col-4 text-center">
            <p className="mb-0 text-danger fw-bold">Bid <br /><span className="text-black">${match.bidAmount}</span></p>
          </div>
        </div>

        {match.status === "available" && (
          <div className="card-footer bg-light mt-1">
            <button className="btn btn-warning w-50" onClick={() => alert("Request Sent!")}>Send Request</button>
          </div>
        )}
      </div>
    </div>
  );
};

const MatchList = ({ matchType }) => {
  const matches = [
    { id: 1, sport: "Cricket", startDate: "07 Jun 2025", startTime: "05:00 PM", imageUrl: "https://seeklogo.com/images/P/pakistan-super-league-psl-logo-7CA605C19A-seeklogo.com.png", teams: "KKR vs RGB", league: "PSL", bidAmount: 5000, security: true, status: "available" },
    { id: 2, sport: "Cricket", startDate: "10 Jun 2025", startTime: "07:00 PM", imageUrl: "https://seeklogo.com/images/P/pakistan-super-league-psl-logo-7CA605C19A-seeklogo.com.png", teams: "Pak vs Ind", league: "PSL", bidAmount: 5000, security: true, status: "booked" },
    { id: 3, sport: "Cricket", startDate: "15 Jun 2025", startTime: "06:30 PM", imageUrl: "https://seeklogo.com/images/P/pakistan-super-league-psl-logo-7CA605C19A-seeklogo.com.png", teams: "RCB vs DC", league: "IPL", bidAmount: 6000, security: false, status: "pending" },
  ];

  const filteredMatches = matchType === "all" ? matches : matches.filter(match => match.status === matchType);

  return (
    <div className="row p-2">
      {filteredMatches.map((match) => (
        <MatchCard key={match.id} match={match} />
      ))}
    </div>
  );
};

export default MatchList;
