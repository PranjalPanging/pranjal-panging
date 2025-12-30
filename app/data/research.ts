export interface ResearchItem {
  id: string;
  title: string;
  field: string;
  status: "Exploring" | "Hypothesis" | "Learning";
  description: string;
  tags: string[];
}

export const researchData: ResearchItem[] = [

];
