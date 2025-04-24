import { Subdivision } from '../../typeorm/entities/subdivision.entity';
import { Assessment } from '../../typeorm/entities/assessment.entity';

export class ImageEmployeeDto {
  readonly id?: number;
  readonly firstName: string;
  readonly lastName: string;
  readonly patronymic: string;
  readonly birthday: string;
  readonly profession: string;
  readonly gender: string;
  readonly createdAt?: Date;
  readonly role: string;
  readonly subdivisionId?: number;
  readonly idSubdivision?: number;
  readonly delta?: string;
  readonly photo: string;
  readonly subdivision: Subdivision;
  readonly assessment?: Assessment[];
  readonly password: string;
  readonly assessmentsCount: number;
  readonly employeeCurrentAssessment: number;
  readonly averageSpeed: number;
  readonly averageInformation: number;
  readonly averageQualityWork: number;
  readonly averageResultWork: number;
  readonly averageTeamWork: number;
  readonly averageRespect: number;
  readonly lockTime?: string;
}
