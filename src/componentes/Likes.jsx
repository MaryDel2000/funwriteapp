import { useState } from "react";
import "../css/likes.css";

function Likes(props) {
  const [activeButton, setActiveButton] = useState(null);

  function handleLikeClick() {
    if (activeButton === "like") {
      setActiveButton(null);
      setnmr(numr - 1);
    } else {
      setActiveButton("like");
      setnmr(numr + 1);
      if (activeButton === "dislike") {
        setnm(nmr - 1);
      }
    }
  }

  function handleDislikeClick() {
    if (activeButton === "dislike") {
      setActiveButton(null);
      setnm(nmr - 1);
    } else {
      setActiveButton("dislike");
      setnm(nmr + 1);
      if (activeButton === "like") {
        setnmr(numr - 1);
      }
    }
  }

function likeClass(activeButton) {
  if (activeButton === "dislike") {
    return "disabled";
  } else {
    return ""; // Retorna una cadena vacía si no se cumple la condición
  }
}

function dislikeClass(activeButton) {
  if (activeButton === "like") {
    return "disabled";
  } else {
    return ""; // Retorna una cadena vacía si no se cumple la condición
  }
}


  const [numr, setnmr] = useState(parseInt(props.likes));
  const [nmr, setnm] = useState(parseInt(props.dislikes));

  return (
    <div className="col-md-3 container-likes-dislikes">
      <div className="likes-container">
        <div>
          <button
            className={`btn ${likeClass(activeButton)}`}
            onClick={handleLikeClick}
          >
            <h6 className="d-inline">{numr}</h6>
            <img
              width="40px"
              height="40px"
              src="imgs/like.png"
              alt="Me gusta"
              className="ml-2"
            />
          </button>
        </div>
      </div>

      <div className="dislikes-container">
        <div>
          <button
            className={`btn ${dislikeClass(activeButton)}`}
            onClick={handleDislikeClick}
          >
            <h6 className="d-inline">{nmr}</h6>
            <img
              width="40px"
              height="40px"
              src="imgs/dislike.png"
              alt="No me gusta"
              className="ml-2"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Likes;
