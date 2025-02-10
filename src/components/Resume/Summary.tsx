import { Text, View } from "@react-pdf/renderer";
import { useResumeContext } from "./useResumeContext";
import { resumeStyles } from "./resumeStyles";

const Summary = () => {
  const { summary } = useResumeContext();
  return (
    <View style={resumeStyles.row}>
      <Text style={resumeStyles.rowTitle}>Ripielogo</Text>
      <Text style={{ fontSize: 9, paddingVertical: 2 }}>{summary}</Text>
    </View>
  );
};

export default Summary;
