import { useEffect } from "react";
import { useDimensions, useModalHook } from "../../tools";
import { colors } from "../../colors";
import { Balloon } from "./balloon";
import { ProjectBalloon } from "./project";
import { ExperienceBalloon } from "./experience";
import { TitleMessage } from "./template";
import { AiFillLinkedin } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

export const MainApp = () => {
  const { isOpen, open } = useModalHook();

  useEffect(() => {
    setTimeout(() => {
      open();
    }, 200);
  }, []);

  const { isOpen: isOpenProjects, toggle: toggleProjects } = useModalHook();
  const { isOpen: isOpenExperience, toggle: toggleExperience } = useModalHook();

  const { isTabOrPhone } = useDimensions();

  const Hyperlink = ({ children, href, marginLeft = 0 }) => (
    <a
      style={{
        color: colors.yellow,
        cursor: "pointer",
        textDecorationLine: "none",
        marginLeft,
      }}
      href={href}
    >
      {children}
    </a>
  );

  return (
    <div
      style={{
        backgroundColor: colors.blueLight,
        height: "100vh",
        width: "100vw",
      }}
    >
      <Balloon
        isOpen={isOpen}
        inflatedTitle={
          isTabOrPhone ? (
            <>
              Welcome to
              <br />
              my portfolio
            </>
          ) : (
            "Welcome to my portfolio"
          )
        }
      >
        <TitleMessage
          title="Hello!"
          msg={
            <>
              My name is Koza Brajamagenta and I'm a Front End Developer
              <br />
              <br />
              <Hyperlink href="https://www.linkedin.com/in/koza-brajamagenta-16a012128/">
                <AiFillLinkedin /> LinkedIn
              </Hyperlink>
              <Hyperlink marginLeft={24} href="https://wa.me/+6281288487038">
                <BsWhatsapp /> WhatsApp
              </Hyperlink>
              <Hyperlink marginLeft={24} href="mailto:k.brajamagenta@gmail.com">
                <SiGmail /> Gmail
              </Hyperlink>
            </>
          }
        />
        <ProjectBalloon
          hide={isOpenExperience}
          isOpen={isOpenProjects}
          toggle={toggleProjects}
        />
        <ExperienceBalloon
          hide={isOpenProjects}
          isOpen={isOpenExperience}
          toggle={toggleExperience}
        />
      </Balloon>
    </div>
  );
};
