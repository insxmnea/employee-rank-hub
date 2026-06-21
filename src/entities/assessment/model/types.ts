export interface Assessment {
  id?: number;
  idFromEmployee: number;
  idToEmployee: number;
  idFromSubdivision?: number;
  idToSubdivision?: number;
  comment: string;
  speed: number;
  information: number;
  qualityWork: number;
  resultWork: number;
  teamWork: number;
  respect: number;
  createdAt?: Date;
  squareDiviation?: number;
}
