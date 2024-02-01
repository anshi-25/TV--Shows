// src/components/ShowList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ShowList() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => setShows(data))
      .catch(error => console.error('Error fetching shows:', error));
  }, []);

  return (
    <div>
      <h2>Show List</h2>
      <ul className="show-list">
        {shows.map(showItem => {
          const { show } = showItem; // Destructure the show object
          return (
            <li key={show.id} className="show-item">
              <h3>{show.name}</h3>
              {show.image && <img src={show.image.medium} alt={show.name} />}
              <p dangerouslySetInnerHTML={{ __html: show.summary }} />
              <div className="details">
                <p>Language: {show.language}</p>
                <p>Genres: {show.genres.join(', ')}</p>
                <p>Rating: {show.rating.average || 'N/A'}</p>
                <Link to={`/show/${show.id}`}>
                  <button>View Details</button>
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ShowList;

