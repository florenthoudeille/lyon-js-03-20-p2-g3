import React from 'react';
import CardOfDeckBoard from './CardOfDeckBoard';
import './CardList.css';
import './Card.css';

function Board (props) {
  /* const threeFirstCards = props.randomizeHeroesChosen(props.heroesChosen,3); */
  return (
    <div>
      {props.heroesChosen.filter(heroe => heroe.position === 'board').map(heroe => {
        return (
          <CardOfDeckBoard heroe={heroe} key={(heroe.atk) * (heroe.hp)} />
        );
      })}
    </div>
  );
}
export default Board;