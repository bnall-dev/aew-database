import React from 'react';

const GamesPage = () => {
  return (
    <div id="gamesPage">
      <form id="searchGamesForm">
        <h3>Games</h3>
        <input type="text" placeholder="Find a Game" />
        {/*
          INPUT NEEDS AUTO-SUGGEST/COMPLETE DROPDOWN OPTIONS BASED ON ALL GAME NAMES THAT MATCH FIELD INPUT
          AS USER TYPES, LIST OF GAMES NARROWS BASED ON MATCHING TITLE
          WHEN DROPDOWN OPTION IS CLICKED, LINKS TO GAME PAGE
          */}
        <h6>
          <a href="">Advanced Search</a>
        </h6>
        {/*
          ADVANCED SEARCH FORM DISPLAYS WHEN PROMPT IS CLICKED
          FORM CONTAINS VARIOUS SELECTORS, CHECKBOXES, RADIOS, ETC TO ALLOW THE USER TO ADJUST SEARCH PARAMETERS BASED ON GAME TYPE, GENRE, PLAYER NUMBERS, ETC
          */}
      </form>
      <ul id="gamesList">
        {/*
          LIST OF GAMES THAT MATCH SEARCH PARAMETERS
           INCLUDES COVER IMAGE, TITLE, NUMBER OF USERS, FRIENDS THAT PLAY, AVERAGE RATING, AND 'ADD FAVORITE GAME' BUTTON
           LIST ITEMS LINK TO GAME PAGES
          */}
      </ul>
    </div>
  );
};

export default GamesPage;
