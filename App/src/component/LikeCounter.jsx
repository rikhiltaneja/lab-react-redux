import React, { useReducer } from "react";
import { initialValue, Reducer } from "./Reducer";


const LikeCounter = () => {
  const [state, dispatch] = useReducer(Reducer, initialValue);

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div className="like-counter-container"> {/* Add a class for the container */}
      <h1 className="like-counter-heading">{state.count}</h1> {/* Add a class for the heading */}
      <button className="like-button" onClick={handleIncrement}>Like</button> {/* Add a class for the like button */}
      <button className="unlike-button" onClick={handleDecrement}>Unlike</button> {/* Add a class for the unlike button */}
    </div>
  );
};

export default LikeCounter;
