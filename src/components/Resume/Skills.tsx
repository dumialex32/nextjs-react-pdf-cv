import { Text, View } from "@react-pdf/renderer";

import { useResumeContext } from "./useResumeContext";
import { resumeStyles } from "./resumeStyles";

const Skills = () => {
  const { skills } = useResumeContext();
  return (
    <View style={resumeStyles.row}>
      <Text style={resumeStyles.rowTitle}>Skills</Text>
      <View style={resumeStyles.list}>
        {skills.map((skill, i) => {
          return <Text key={i}>{skill}</Text>;
        })}
      </View>
      <Text style={resumeStyles.rowTitle}></Text>
    </View>
  );
};

export default Skills;
