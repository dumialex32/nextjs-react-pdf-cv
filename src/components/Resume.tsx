import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import resumeData from "@/data/resumeData.json";
import { sort } from "@/utils/sortUtils";
const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "column",
  },
  mainTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24,
    letterSpacing: 1.6,
  },
  headerContainer: {
    backgroundColor: "#f59f00",
    padding: 30,
    textAlign: "center",
  },
  main: { display: "flex", flexDirection: "row", flex: 1 },
  leftColumn: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    width: "33%",
    backgroundColor: "#fff4e6",
    paddingHorizontal: 16,
    paddingVertical: 12,
    height: "100%",
  },

  row: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },
  listWithBorder: {
    borderBottomWidth: 1,
    borderBottomColor: "#f59f00",
    borderBottomStyle: "solid",
    paddingBottom: 6,
    marginBottom: 2,
  },
  rowTitle: {
    fontSize: 18,
    letterSpacing: 1.4,
    color: "#f59f00",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
    fontSize: 8,
    color: "#333",
  },
  rightColumn: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    width: "77%",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  link: { color: "#339af0" },
});

Font.register({
  family: "Roboto",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxK.woff2",
    }, // Regular
    {
      src: "https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfBBc-.woff2",
      fontWeight: "bold",
    }, // Bold
  ],
});

const Resume = () => {
  const {
    professionalFigure,
    contacts: {
      name,
      email,
      residence,
      phoneNumber,
      websites: { github },
    },
    summary,
    education,
    skills,
    workExperiences,
  } = resumeData;

  const sortedEdu = sort(education, "asc", "startYear");
  const sortedWorkExperiences = sort(workExperiences, "asc", "endYear");
  console.log(sortedWorkExperiences);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.headerContainer}>
          <Text style={styles.mainTitle}>{professionalFigure}</Text>
        </View>

        <View style={styles.main}>
          <View style={styles.leftColumn}>
            <View style={styles.row}>
              <Text style={styles.rowTitle}>Contatti</Text>
              <View style={styles.list}>
                <Text>{name}</Text>
                <Text style={styles.link}>{email}</Text>
                <Text>{phoneNumber}</Text>
                <Text>{residence}</Text>
                <Text style={styles.link}>{github}</Text>
              </View>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowTitle}>Istruzione</Text>

              {sortedEdu.map((edu, i) => {
                return (
                  <View
                    key={i}
                    style={[
                      styles.list,
                      i !== sortedEdu.length - 1 ? styles.listWithBorder : {},
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
            <View style={styles.row}>
              <Text style={styles.rowTitle}>Skills</Text>
              <View style={styles.list}>
                {skills.map((skill, i) => {
                  return <Text key={i}>{skill}</Text>;
                })}
              </View>
              <Text style={styles.rowTitle}></Text>
            </View>
          </View>

          <View style={styles.rightColumn}>
            <View style={styles.row}>
              <Text style={styles.rowTitle}>Ripielogo</Text>
              <Text style={{ fontSize: 9, paddingVertical: 2 }}>{summary}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.rowTitle}>Esperienze lavorative</Text>

              {sortedWorkExperiences.map((workExperience, i) => {
                return (
                  <View style={{ marginBottom: "10" }} key={i}>
                    <View style={styles.list}>
                      <Text style={{ fontSize: 10 }}>
                        {workExperience.jobPosition}
                      </Text>
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
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default Resume;
