import resumeData from "@/data/resumeData.json";
import { ResumeData } from "@/types/resumeTypes";
import { useMemo } from "react";

const useResumeContextData = () => {
  const {
    professionalFigure,
    contacts,
    summary,
    education,
    skills,
    workExperiences,
  }: ResumeData = resumeData;

  const resumeContextData = useMemo(
    () => ({
      professionalFigure,
      contacts,
      summary,
      education,
      skills,
      workExperiences,
    }),
    [professionalFigure, contacts, summary, education, skills, workExperiences]
  );

  return { resumeContextData };
};

export default useResumeContextData;
