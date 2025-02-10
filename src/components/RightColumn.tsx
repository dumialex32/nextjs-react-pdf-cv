import { View } from "@react-pdf/renderer";
import { resumeStyles } from "./Resume/resumeStyles";

const RightColumn = ({ children }) => {
  return <View style={resumeStyles.rightColumn}>{children}</View>;
};

export default RightColumn;
