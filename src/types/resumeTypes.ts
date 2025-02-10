export interface ResumeData {
  professionalFigure: string;
  contacts: {
    name: string;
    email: string;
    residence: string;
    phoneNumber: string;
    websites: { linkedin: string; github: string; personalWebsite: string };
  };
  summary: string;
  education: {
    title: string;
    degreeLevel?: string;
    institutionName: string;
    location?: string;
    startYear?: string;
    endYear?: string;
    skillsAcquired: string | string[];
  }[];
  skills: string[];
  workExperiences: {
    jobPosition: string;
    employerName: string;
    startYear?: string;
    endYear?: string;
    location?: string;
    description: string;
  }[];
}
