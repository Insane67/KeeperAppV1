import React from "react";

function Note(props) {
  function handleClick() {
    //Parent componentteki fonksiyona notun id sini(index i) giriyoruz
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
