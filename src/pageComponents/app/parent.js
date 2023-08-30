import { useEffect } from "react";
import { useModalHook } from "../../tools";
import { colors } from "../../colors";
import { Balloon } from "./balloon";
import { ProjectBalloon } from "./project";
import { ExperienceBalloon } from "./experience";
import { TitleMessage } from "./template";

export const MainApp = () => {
  const { isOpen, open } = useModalHook();

  useEffect(() => {
    setTimeout(() => {
      open();
    }, 200);
  }, []);

  const { isOpen: isOpenProjects, toggle: toggleProjects } = useModalHook();
  const { isOpen: isOpenExperience, toggle: toggleExperience } = useModalHook();

  return (
    <div
      style={{
        backgroundColor: colors.blueLight,
        height: "100vh",
        width: "100vw",
      }}
    >
      <Balloon isOpen={isOpen} inflatedTitle="Welcome to my portfolio">
        <TitleMessage
          title="Hello!"
          msg="My name is Koza Brajamagenta and I'm a Front End Developer"
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
