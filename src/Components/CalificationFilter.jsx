import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { orderRating } from "../store/actions";
import style from "../styles/calificationFilters.module.css";

const CalificationFilter = () => {
  const [rating, setRating] = useState(-1);
  const [prevValue, setPrevValue] = useState(null);
  const [hover, setHover] = useState(null);

  const dispatch = useDispatch();

  const handleRatingChange = (e, value) => {
    e.preventDefault();
    if (prevValue === value) {
      dispatch(orderRating(-1));
      setPrevValue(null);
      setRating(-1);
      return;
    }
    setRating(value);
    dispatch(orderRating(value));
    setPrevValue(value);
  };

  return (
    <div className={style.container}>
      {[...Array(5)].map((star, i) => {
        const value = i * 2;
        return (
          <label key={value + 20}>
            <input
              type="radio"
              name="rating"
              className={style.inputRating}
              value={value}
              onClick={(e) => handleRatingChange(e, value)}
              key={i}
            />
            <FaStar
              size={25}
              className={style.star}
              key={value + 1}
              onMouseEnter={() => setHover(value + 1)}
              onMouseLeave={() => setHover(null)}
              color={value <= (hover || rating) ? "#ffbf00" : "#cacaca"}
            />
          </label>
        );
      })}
    </div>
  );
};

export default CalificationFilter;
