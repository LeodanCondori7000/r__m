import Card from "../card/Card";

const Cards = ({ characters, onClose }) => {
  return (
    <div>
      {characters.map(({ id, name, image, gender }) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            image={image}
            onClose={onClose}
            gender={gender}
          />
        );
      })}
    </div>
  );
};

export default Cards;
