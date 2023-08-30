import { Row } from "react-bootstrap";
import { colors } from "../../colors";
import { Balloon } from "./balloon";
import { TitleMessage } from "./template";
import { useState } from "react";

const BlueSpan = ({ children }) => (
  <span style={{ color: colors.orange, backgroundColor: colors.black }}>
    {children}
  </span>
);

export const ProjectBalloon = ({ isOpen, hide, toggle }) => {
  const imgs = [
    {
      title: "Nextjs",
      array: [
        {
          title: "Transactions page",
          msg: (
            <>
              Makes the{" "}
              <BlueSpan>
                filter component, table, sidebar,dropdown create button, etc.
              </BlueSpan>{" "}
              That{" "}
              <BlueSpan>
                <i>completely reusable</i>
              </BlueSpan>
            </>
          ),
          imgs: [
            "/images/screenshot1.png",
            "/images/screenshot2.png",
            "/images/screenshot3.png",
          ],
        },
        {
          title: "KYB (Know Your Business) sequence",
          msg: (
            <>
              I also handled <BlueSpan> all the KYB process</BlueSpan> on this
              website (FE)
            </>
          ),
          imgs: [
            "/images/screenshotkyb1.png",
            "/images/screenshotkyb2.png",
            "/images/screenshotkyb3.png",
            "/images/screenshotkyb4.png",
          ],
        },
        { title: "etc" },
      ],
    },
  ];

  const [selectedImg, setSelectedImg] = useState({});

  return (
    <Balloon
      color={colors.orange}
      isSquare
      textTitle="Projects"
      leftPosition={"calc(50vw - 124px)"}
      isBouncy
      hide={hide}
      isOpen={isOpen}
      toggle={toggle}
      inflatedTitle="My Projects"
      inflatedColor={colors.black}
    >
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
          <div style={{ height: "20vh" }} />
          <TitleMessage
            title={"My Completed Projects"}
            titleColor={colors.black}
            msgColor={colors.black}
            msg={
              <>
                <br />
                To be completely honest, i have{" "}
                <BlueSpan>never done freelancing</BlueSpan> before. <br />
                <br />
                So, here's some{" "}
                <BlueSpan>features that I've done on my main job</BlueSpan>
              </>
            }
          />
          <div
            style={{
              height: 1,
              width: "100%",
              backgroundColor: colors.black,
              marginTop: 32,
            }}
          />
          {imgs.map(({ title, array }, mainIndex) => (
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ flexDirection: "column", marginTop: 32 }}
              key={mainIndex}
            >
              <h1 className="font20" style={{ color: colors.black }}>
                <i>{title}</i>
              </h1>
              {array.map(({ title, msg, imgs = [] }, index) => (
                <div
                  key={index}
                  className="d-flex justify-content-center align-items-center"
                  style={{ flexDirection: "column", marginTop: 32 }}
                >
                  <h1
                    className="font20"
                    style={{ color: colors.black, textAlign: "center" }}
                  >
                    {title}
                  </h1>
                  <h1
                    className="font16"
                    style={{ color: colors.black, textAlign: "center" }}
                  >
                    {msg}
                  </h1>
                  <Row className="mt-2">
                    {imgs.map((src, idx) => {
                      const isActiveRow =
                        mainIndex == selectedImg.mainIndex &&
                        index == selectedImg.index;
                      const isActive = isActiveRow && idx == selectedImg.idx;
                      const hide = !isActive && isActiveRow;
                      return (
                        <img
                          src={src}
                          style={{
                            width: isActive
                              ? "100%"
                              : isActiveRow
                              ? "0%"
                              : `${100 / imgs.length}%`,
                            cursor: "pointer",
                            transition: "all linear .4s",
                            opacity: hide ? 0 : 1,
                          }}
                          key={idx}
                          onClick={() =>
                            setSelectedImg((prev) => {
                              const isThesame =
                                mainIndex == selectedImg.mainIndex &&
                                prev.idx == idx &&
                                index == prev.index;

                              if (isThesame) return {};
                              return { idx, index, mainIndex };
                            })
                          }
                        />
                      );
                    })}
                  </Row>
                </div>
              ))}
            </div>
          ))}
          {/* {imgs.map(({ msg, title, imgs }, index) => (
            <div
              key={index}
              className="d-flex justify-content-center align-items-center"
              style={{ flexDirection: "column", marginTop: 32 }}
            >
              <h1 className="font20" style={{ color: colors.black }}>
                {title}
              </h1>
              <h1 className="font16" style={{ color: colors.black }}>
                {msg}
              </h1>
              <Row className="mt-2">
                {imgs.map((src, idx) => {
                  const isActiveRow = index == selectedImg.index;
                  const isActive = isActiveRow && idx == selectedImg.idx;
                  const hide = !isActive && isActiveRow;
                  return (
                    <img
                      src={src}
                      style={{
                        width: isActive
                          ? "100%"
                          : isActiveRow
                          ? "0%"
                          : `${100 / imgs.length}%`,
                        cursor: "pointer",
                        transition: "all linear .4s",
                        opacity: hide ? 0 : 1,
                      }}
                      key={idx}
                      onClick={() =>
                        setSelectedImg((prev) => {
                          const isThesame =
                            prev.idx == idx && index == prev.index;
                          if (isThesame) return {};
                          return { idx, index };
                        })
                      }
                    />
                  );
                })}
              </Row>
            </div>
          ))} */}
          <div style={{ height: 32 }} />
        </div>
      </div>
    </Balloon>
  );
};
