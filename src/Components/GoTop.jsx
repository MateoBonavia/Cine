import React, { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import style from "../styles/goTop.module.css";

const GoTop = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={style.btnTopContainer}>
      {showBtn && <FaAngleUp className={style.btnTop} onClick={goTop} />}
    </div>
  );
};

export default GoTop;
