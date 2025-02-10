import { Text, View } from "@react-pdf/renderer";

import { useResumeContext } from "./useResumeContext";
import { resumeStyles } from "./resumeStyles";

const Header = () => {
  const { professionalFigure } = useResumeContext();
  return (
    <View style={resumeStyles.headerContainer}>
      <Text style={resumeStyles.mainTitle}>{professionalFigure}</Text>
    </View>
  );
};

export default Header;
