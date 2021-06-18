import { useState } from "react";
import styles from "./TinderCards.module.css";
import TinderCard from "react-tinder-card";

export function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      url: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg",
    },
    {
      name: "Jeff Bezos",
      url: "https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2021/05/27/jeff-bezos.jpeg",
    },
  ]);
  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    //setLastDirection(direction);
  };
  const outOfFrame = (name) => {
    console.log(name + "left the screen");
  };

  return (
    <div className={styles.tinderCards}>
      <div className={styles.tinderCards_cardContainer}>
        {people.map((person) => (
          <TinderCard
            className={styles.swipe}
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className={styles.card}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}
