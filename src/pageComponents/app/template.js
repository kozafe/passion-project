import { colors } from "../../colors";

export const TitleMessage = ({ title, msg, msgColor, titleColor }) => (
  <>
    <h1
      style={{
        color: titleColor ? titleColor : colors.yellow,
        textAlign: "center",
      }}
      className="font24"
    >
      {title}
    </h1>
    <h1
      style={{
        color: msgColor ? msgColor : colors.blueLight,
        textAlign: "center",
      }}
      className="font20"
    >
      {msg}
    </h1>
  </>
);
