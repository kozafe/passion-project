import { colors } from "../../colors";
import { Balloon } from "./balloon";
import { TitleMessage } from "./template";

const YellowSpan = ({ children }) => (
  <span style={{ color: colors.yellow }}>{children}</span>
);

export const ExperienceBalloon = ({ hide, isOpen, toggle }) => {
  return (
    <Balloon
      isSquare
      isBouncy
      color={colors.blue}
      textTitle="Experience"
      leftPosition={"calc(50vw)"}
      hide={hide}
      isOpen={isOpen}
      toggle={toggle}
      inflatedTitle="My Experience"
      inflatedColor={colors.black}
    >
      <TitleMessage
        title="Experiences and capability"
        msg={
          <>
            <br />
            I've worked as Front End Developer for 4+ years. Frameworks that i
            use: <YellowSpan>ReactJS, Nextjs</YellowSpan> and{" "}
            <YellowSpan>React Native</YellowSpan>
            <br />
            <br />I prioritize <YellowSpan>simplicity</YellowSpan> in my
            projects for a smoother learning curve for other developers
            <br />
            <br />
            For programming language, i prefer to use{" "}
            <YellowSpan>JavaScript</YellowSpan> instead of{" "}
            <span style={{ color: colors.black }}>TypeScript</span>
            <br />
            <br />
            For api calls to BE, i prefer to use simple{" "}
            <YellowSpan>axios</YellowSpan> instead of{" "}
            <span style={{ color: colors.black }}>graphql, etc</span>
            <br />
            <br />
            Last but not least, for global state management i prefer to use{" "}
            <YellowSpan>React context</YellowSpan> instead of{" "}
            <span style={{ color: colors.black }}>Redux</span>
          </>
        }
        msgColor={colors.greyea}
      />
    </Balloon>
  );
};
