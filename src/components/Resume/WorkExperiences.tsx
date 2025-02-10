import { Text, View } from "@react-pdf/renderer";
import { useResumeContext } from "./useResumeContext";
import { sort } from "@/utils/sortUtils";
import { resumeStyles } from "./resumeStyles";

const WorkExperiences = () => {
  const { workExperiences } = useResumeContext();

  const sortedWorkExperiences = sort(workExperiences, "asc", "endYear");

  return (
    <View style={resumeStyles.row}>
      <Text style={resumeStyles.rowTitle}>Esperienze lavorative</Text>

      {sortedWorkExperiences.map((workExperience, i) => {
        return (
          <View style={{ marginBottom: "10" }} key={i}>
            <View style={resumeStyles.list}>
              <Text style={{ fontSize: 10 }}>{workExperience.jobPosition}</Text>
              <Text>{workExperience.employerName}</Text>
              <Text>{`${workExperience.startYear} - ${
                workExperience.endYear || "oggi"
              }`}</Text>
              <Text>{workExperience.description}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default WorkExperiences;
