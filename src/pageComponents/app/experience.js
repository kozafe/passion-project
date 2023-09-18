import { colors } from "../../colors";
import { useDimensions } from "../../tools";
import { Balloon, BalloonContainer } from "./balloon";
import { TitleMessage } from "./template";
import { PiUsersThreeFill } from "react-icons/pi";

const BlueSpan = ({ children }) => (
  <span style={{ color: colors.black }}>{children}</span>
);

const YellowSpan = ({ children }) => (
  <span style={{ color: colors.yellow }}>{children}</span>
);

export const ExperienceBalloon = ({ hide, isOpen, toggle }) => {
  const { isTabOrPhone } = useDimensions();
  const child = (
    <TitleMessage
      title={
        <>
          <PiUsersThreeFill
            style={{ height: 48, width: "auto", marginBottom: 12 }}
          />
          <br /> Experience and capability
        </>
      }
      titleColor={colors.greyea}
      msg={
        <>
          <br />
          I've worked as <BlueSpan>Front End Developer for 4+ years</BlueSpan>.
          Frameworks that i use: <BlueSpan>ReactJS, Nextjs</BlueSpan> and{" "}
          <BlueSpan>React Native</BlueSpan>
          <br />
          <br />I prioritize <BlueSpan>simplicity</BlueSpan> in my projects for
          a smoother learning curve for other developers
          <br />
          <br />
          For programming language, i prefer to use{" "}
          <BlueSpan>JavaScript</BlueSpan> instead of{" "}
          <YellowSpan>TypeScript</YellowSpan>
          <br />
          <br />
          For api calls to BE, i prefer to use simple <BlueSpan>
            axios
          </BlueSpan>{" "}
          instead of <YellowSpan>graphql, etc</YellowSpan>
          <br />
          <br />
          Last but not least, for global state management i prefer to use{" "}
          <BlueSpan>React Context</BlueSpan> instead of{" "}
          <YellowSpan>Redux</YellowSpan>
        </>
      }
      msgColor={colors.greyea}
    />
  );
  return (
    <Balloon
      isSquare
      isBouncy
      color={colors.blue}
      textTitle="Experience"
      leftPosition={"calc(50vw + 12px)"}
      hide={hide}
      isOpen={isOpen}
      toggle={toggle}
      inflatedTitle={
        isTabOrPhone ? (
          <>
            My
            <br />
            Experience
          </>
        ) : (
          <>
            <PiUsersThreeFill />
            <br />
            My Experience
          </>
        )
      }
      inflatedColor={colors.black}
    >
      {isTabOrPhone ? <BalloonContainer>{child}</BalloonContainer> : child}
    </Balloon>
  );
};
