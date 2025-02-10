import { View } from "@react-pdf/renderer";
import { resumeStyles } from "./resumeStyles";

const LeftColumn = ({ children }) => {
  return <View style={resumeStyles.leftColumn}>{children}</View>;
};

export default LeftColumn;
