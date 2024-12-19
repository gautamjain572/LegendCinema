import React from "react";
import "./MovieTicket.css";

const MovieTicket = ({ movieDetails }) => {
  const {
    movieName,
    theaterName,
    showDate,
    showTime,
    seatNumber,
    ticketNumber,
    price,
  } = movieDetails;

  return (
    <div className="movie-ticket">
      <div className="ticket-header">
        <h2>{theaterName || "Your Cinema"}</h2>
        <p>Ticket #{ticketNumber || "123456"}</p>
      </div>
      <div className="ticket-body">
        <div className="movie-info">
          <h3>{movieName || "Movie Title"}</h3>
          <p>{`Show Date: ${showDate || "YYYY-MM-DD"}`}</p>
          <p>{`Show Time: ${showTime || "HH:MM"}`}</p>
        </div>
        <div className="ticket-details">
          <p>{`Seat: ${seatNumber || "A1"}`}</p>
          <p>{`Price: ₹${price || "250"}`}</p>
        </div>
      </div>
      <div className="ticket-footer">
        <p>Enjoy the Show!</p>
      </div>
    </div>
  );
};

export default MovieTicket;
