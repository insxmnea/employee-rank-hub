import { Subdivision } from "@entities/subdivision";

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  patronymic: string;
  birthday: string;
  profession: string;
  gender: string;
  createdAt: string;
  role: string;
  subdivisionId: number;
  delta: "up" | "down";
  lockTime: string;
  photo: string;
  password: string;
  employeeCurrentAssessment: number;
  averageSpeed: number;
  averageInformation: number;
  averageQualityWork: number;
  averageResultWork: number;
  averageTeamWork: number;
  averageRespect: number;
  assessmentsCount: number;
  avatarImage: string;
  cardImage: string;
  profileImage: string;
  subdivision: Subdivision;
  assessment: string[];
}
