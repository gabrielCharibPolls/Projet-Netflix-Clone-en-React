import React from "react";



function PopularNetflix  (props) {
    return (
        <div className="location" id="home">
        <h1 id="home">Popular on Netflix</h1>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {props.films.map((film) => (
          <div key={film.id} style={{ width: "18%", margin: "9px" }}>
            <img
              src={film.imageURL} // Utilisez la propriété imageURL de l'objet film
              alt={film.title}    // Utilisez la propriété title de l'objet film
            />
            <h3 style={{ textAlign: 'center' }}>{film.title}</h3>
          </div>
        ))}
        </div> 
        </div>
    )
    }

    export default PopularNetflix;