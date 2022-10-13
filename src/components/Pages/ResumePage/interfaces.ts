/**
 * object used to store details about
 * each subsection in the @resumeSectionData object
 */
export interface resumeSubSection {
  location: string;
  title?: string
  date: string;
  description: Array<string>;
}

/**
 * object used to store info for each section
 * of the resume i.e. each section (education, experience, etc.) have these attributes
 */
export interface resumeSectionData {
  section: string;
  subsection0: resumeSubSection;
  subsection1?: resumeSubSection;
  subsection2?: resumeSubSection;
}