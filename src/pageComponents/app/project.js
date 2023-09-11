import { Row } from "react-bootstrap";
import { colors } from "../../colors";
import { Balloon, BalloonContainer } from "./balloon";
import { TitleMessage } from "./template";
import { useState } from "react";
import { useDimensions } from "../../tools";

const BlueSpan = ({ children }) => (
  <span style={{ color: colors.orange, backgroundColor: colors.black }}>
    {children}
  </span>
);

export const ProjectBalloon = ({ isOpen, hide, toggle }) => {
  const { isTabOrPhone } = useDimensions();
  const imgs = [
    {
      title: "Nextjs / ReactJS",
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
              </BlueSpan>{" "}
              <span className="font10">(click image to enlarge)</span>
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
              website (FE){" "}
              <span className="font10">(click image to enlarge)</span>
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
    {
      title: "React Native",
      array: [
        {
          title: "Cards pages",
          msg: (
            <>
              My main app already revamped so{" "}
              <BlueSpan>
                sadly I can't show you the whole app that i built
              </BlueSpan>
              . Since its unfair if I take credits from someone else. But, if
              you use my app{" "}
              <BlueSpan>
                {" "}
                between 2020-2021 since I'm the single app developer. So all the
                Front End stuff is coded by me
              </BlueSpan>{" "}
            </>
          ),
          imgs: [
            "/images/mobile1.png",
            "/images/mobile2.png",
            "/images/mobile3.png",
          ],
        },
      ],
    },
  ];

  const [selectedImg, setSelectedImg] = useState({});

  return (
    <Balloon
      color={colors.orange}
      isSquare
      textTitle="Projects"
      leftPosition={"calc(50vw - 112px)"}
      isBouncy
      hide={hide}
      isOpen={isOpen}
      toggle={toggle}
      inflatedTitle={
        isTabOrPhone ? (
          <>
            My
            <br />
            Projects
          </>
        ) : (
          "My Projects"
        )
      }
      inflatedColor={colors.black}
    >
      <BalloonContainer>
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
        {imgs.map(({ title, array }, mainIndex) => {
          const isMobile = mainIndex == 1;
          return (
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
                  <Row className="mt-3 mb-2">
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
                            width:
                              isTabOrPhone || isActive
                                ? "100%"
                                : isActiveRow
                                ? "0%"
                                : `${100 / imgs.length}%`,
                            cursor: "pointer",
                            transition: "all linear .4s",
                            opacity: hide ? 0 : 1,
                            marginBottom: isTabOrPhone ? 12 : 0,
                          }}
                          key={idx}
                          onClick={() => {
                            if (isTabOrPhone) return window.open(src);
                            setSelectedImg((prev) => {
                              if (isMobile) return {};
                              const isThesame =
                                mainIndex == selectedImg.mainIndex &&
                                prev.idx == idx &&
                                index == prev.index;

                              if (isThesame) return {};
                              return { idx, index, mainIndex };
                            });
                          }}
                        />
                      );
                    })}
                  </Row>
                </div>
              ))}
            </div>
          );
        })}
      </BalloonContainer>
    </Balloon>
  );
};
