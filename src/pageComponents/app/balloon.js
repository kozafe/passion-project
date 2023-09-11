import { useEffect, useState } from "react";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { colors } from "../../colors";
import { useDimensions } from "../../tools";

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

  const { isTabOrPhone } = useDimensions();

  return (
    <div
      style={{
        width: isFullScreen ? "100vw" : balloonWidth,
        height: isFullScreen
          ? "100vh"
          : isTabOrPhone && isSquare
          ? 50
          : balloonWidth,
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
        boxShadow: `0px 8px 40px rgba(0,0,0,.3)`,
      }}
      className="d-flex justify-content-center align-items-center"
      onClick={() => {
        if (balloonState) return;
        toggle && toggle();
      }}
    >
      {toggle && isFullScreen && (
        <IoIosArrowBack
          style={{
            position: "fixed",
            top: isTabOrPhone ? "5vh" : "10vh",
            left: isTabOrPhone ? "5vw" : "10vw",
            cursor: "pointer",
          }}
          color={colors.black}
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
          // width: balloonState ? 0 : "auto",
          marginBottom: -8,
          ...(balloonState ? { width: 0 } : {}),
          transition: "opacity .4s linear",
        }}
        className="d-flex justify-content-center align-items-center"
      >
        <h1 className="font16" style={{ color: colors.black }}>
          {textTitle}
        </h1>
      </div>
      <h1
        style={{
          color: isInflated ? inflatedColor : "transparent",
          opacity: !isInflated ? 0 : 1,
          width: !isInflated ? 0 : "auto",
          transition: !isInflated ? "" : "all linear 2s",
          textAlign: "center",
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

export const BalloonContainer = ({ children }) => {
  const { isTabOrPhone } = useDimensions();

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: "15vw",
        width: "85vw",
        height: "100vh",
        overflow: "auto",
      }}
    >
      <div style={{ width: "70vw" }}>
        <div style={{ height: isTabOrPhone ? "10vh" : "20vh" }} />
        {children}
        <div style={{ height: 32 }} />
      </div>
    </div>
  );
};
