import { sort } from "@/utils/sortUtils";
import { useResumeContext } from "./useResumeContext";
import { Text, View } from "@react-pdf/renderer";
import { resumeStyles } from "./resumeStyles";

const Education = () => {
  const { education } = useResumeContext();

  const sortedEdu = sort(education, "asc", "startYear");
  return (
    <View style={resumeStyles.row}>
      <Text style={resumeStyles.rowTitle}>Istruzione</Text>

      {sortedEdu.map((edu, i) => {
        return (
          <View
            key={i}
            style={[
              resumeStyles.list,
              i !== sortedEdu.length - 1 ? resumeStyles.listWithBorder : {},
            ]}
          >
            <Text>{edu.institutionName}</Text>
            <Text>{edu.title}</Text>
            <Text>
              {edu.startYear} - {edu.endYear ? edu.endYear : "oggi"}
            </Text>
            <Text>{edu.degreeLevel}</Text>
            <Text>{edu.location}</Text>
            <Text>{edu.skillsAcquired}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default Education;
