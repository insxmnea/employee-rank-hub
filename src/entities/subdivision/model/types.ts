import { Employee } from "@entities/employee";

export interface Subdivision {
  id: string;
  name: string;
  idTopSubdivision: string;
  subdivisionCurrentAssessment: string;
  delta: string;
  assessmentsCount: number;
  lastAssessment: number;
  employeeCount: number;
  averageSpeed: number;
  averageInformation: number;
  averageQualityWork: number;
  averageResultWork: number;
  averageTeamWork: number;
  averageRespect: number;
  assessment: string[];
  employees: Omit<Employee, "subdivision">[];
}

export type Subdivisions = Subdivision[];
