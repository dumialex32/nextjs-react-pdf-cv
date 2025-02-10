import { useContext } from "react";
import { ResumeContext } from "./Resume";
import { ResumeData } from "@/types/resumeTypes";

export const useResumeContext = () => {
  const context = useContext<ResumeData>(ResumeContext);

  if (!context) {
    throw new Error("Resume context used outside of its provider");
  }

  return context;
};
