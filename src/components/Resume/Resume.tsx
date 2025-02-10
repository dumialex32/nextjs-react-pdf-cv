import { Page, View, Document } from "@react-pdf/renderer";
import resumeData from "@/data/resumeData.json";
import { createContext } from "react";
import LeftColumn from "./LeftColumn";
import Contacts from "./Contacts";
import RightColumn from "../RightColumn";
import Header from "./Header";
import WorkExperiences from "./WorkExperiences";
import Summary from "./Summary";
import Education from "./Education";
import Skills from "./Skills";
import { ResumeData } from "@/types/resumeTypes";
import { resumeStyles } from "./resumeStyles";
import useResumeContextData from "./useResumeContextData";

const defaultResumeData: ResumeData = {
  professionalFigure: "",
  contacts: {
    name: "",
    email: "",
    residence: "",
    phoneNumber: "",
    websites: { linkedin: "", github: "", personalWebsite: "" },
  },
  summary: "",
  education: [],
  skills: [],
  workExperiences: [],
};

export const ResumeContext = createContext<ResumeData>(defaultResumeData);

const Resume = () => {
  const { resumeContextData } = useResumeContextData();
  console.log(resumeContextData);

  return (
    <ResumeContext.Provider value={resumeContextData}>
      <Document>
        <Page size="A4">
          <Header />
          <View style={resumeStyles.main}>
            <LeftColumn>
              <Contacts />
              <Education />
              <Skills />
            </LeftColumn>
            <RightColumn>
              <Summary />
              <WorkExperiences />
            </RightColumn>
          </View>
        </Page>
      </Document>
    </ResumeContext.Provider>
  );
};

export default Resume;
