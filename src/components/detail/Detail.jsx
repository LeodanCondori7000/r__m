import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Detail = () => {
  const params = useParams();

  const [character, setCharacter] = React.useState({});

  React.useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${params?.id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          alert("No hay personajes con ese ID");
        }
      })
      .catch(() => {
        console.log("se rompió");
      });
      
    return setCharacter({});
  }, [params?.id]);

  return (
    <div>
      <h2>{character?.name}</h2>
      <p>{character?.status}</p>
      <p>{character?.species}</p>
      <p>{character?.gender}</p>
      <p>{character?.origin?.name}</p>
      <img src={character?.image} alt={character?.name} />
    </div>
  );
};

export default Detail;
