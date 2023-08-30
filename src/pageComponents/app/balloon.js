import { useEffect, useState } from "react";
// import { colors } from "./colors";
import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { colors } from "../../colors";

export const Balloon = ({
  isOpen,
  inflatedTitle = "",
  children = null,
  isSquare,
  color = colors.black,
  textTitle,
  isTop,
  leftPosition,
  isBouncy,
  toggle,
  hide,
  inflatedColor = colors.yellow,
}) => {
  const [balloonState, setBalloonState] = useState(false);
  const [bounce, setBounce] = useState(isBouncy);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const isFullScreen = balloonState == 2;
  const isInflated = balloonState == 1;

  useEffect(() => {
    if (isBouncy) {
      setTimeout(() => {
        setBounce(false);
      }, 200);
    }
  }, [isBouncy]);

  const opens = () => {
    setTimeout(() => {
      setBalloonState(1);
    }, 200);
    setTimeout(() => {
      setBalloonState(2);
    }, 3200);
  };
  const closes = () => {
    setTimeout(() => {
      setBalloonState(1);
    }, 200);
    setTimeout(() => {
      setBalloonState(false);
    }, 400);
  };

  useEffect(() => {
    if (isFirstRender) return setIsFirstRender(false);
    if (!isOpen) return closes();

    opens();
  }, [isOpen]);

  const balloonWidth = hide
    ? "0px"
    : balloonState
    ? "50vw"
    : isSquare
    ? "100px"
    : "140px";

  const position = isFullScreen
    ? 0
    : balloonState
    ? `calc(50vh - ${balloonWidth} / 2)`
    : 12;

  const bottomOrTop = isTop ? { top: position } : { bottom: position };

  const defaultLeft = `calc(50vw - ${balloonWidth} / 2)`;

  const leftPositionFixed = isInflated
    ? defaultLeft
    : leftPosition
    ? leftPosition
    : defaultLeft;

  return (
    <div
      style={{
        width: isFullScreen ? "100vw" : balloonWidth,
        height: isFullScreen ? "100vh" : balloonWidth,
        backgroundColor: color,
        position: "fixed",
        opacity: hide ? 0 : 1,
        ...bottomOrTop,
        padding: isSquare ? 24 : 0,
        left: isFullScreen ? 0 : bounce ? 0 : leftPositionFixed,
        borderRadius: isFullScreen ? 0 : isSquare && !isInflated ? 12 : 140,
        transition: !isOpen
          ? "all ease 1s"
          : isFullScreen
          ? "all ease .4s"
          : "all ease 2s",
        cursor: balloonState ? "" : "pointer",
      }}
      className="d-flex justify-content-center align-items-center"
      onClick={() => {
        if (balloonState) return;
        toggle && toggle();
      }}
    >
      {toggle && isFullScreen && (
        <IoMdArrowBack
          style={{
            position: "fixed",
            top: "10vh",
            left: "10vw",
            cursor: "pointer",
          }}
          color="white"
          size={32}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggle && toggle();
          }}
        />
      )}
      <div
        style={{
          opacity: balloonState ? 0 : 1,
          width: balloonState ? 0 : "auto",
          marginBottom: -8,
        }}
        className="d-flex justify-content-center align-items-center"
      >
        <h1 className="font14" style={{ color: colors.black }}>
          {textTitle}
        </h1>
      </div>
      <h1
        style={{
          color: isInflated ? inflatedColor : "transparent",
          opacity: !isInflated ? 0 : 1,
          width: !isInflated ? 0 : "auto",
          transition: !isInflated ? "" : "all linear 2s",
        }}
        className={balloonState ? "font32" : "font24"}
      >
        {inflatedTitle}
      </h1>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          flexDirection: "column",
          opacity: isFullScreen ? 1 : 0,
          transition: "all linear 2s",
          width: isFullScreen ? "100%" : 0,
          padding: isFullScreen ? 12 : 0,
        }}
      >
        {isFullScreen ? children : null}
      </div>
    </div>
  );
};
