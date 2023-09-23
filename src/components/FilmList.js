import React, { useState, useEffect } from "react";
import axios from 'axios';
import PopularNetflix from './PopularNetflix';

//rajouter tout la liste des films 


function FilmList() {
  const films = [
    {
      id: 1,
      imageURL: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o5.PNG?raw=true",
      title: "Film 1",
    },
    {
      id: 2,
      imageURL: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o6.PNG?raw=true",
      title: "Film 2",
    },
    {
      id: 3,
      imageURL: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o1.PNG?raw=true",
      title: "Film 2",
    },
    
  ];


  return (
    <PopularNetflix films={films} />
  );
}

export default FilmList;
