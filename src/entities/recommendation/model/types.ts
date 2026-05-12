export interface Recommendation {
  id: number;
  employeeId: number;
  data: {
    summary?: string;
    strengths?: string[];
    recommendations?: {
      area?: string;
      action?: string;
      reason?: string;
    }[];
    suggestedResources?: string[];
  };
  createdAt: string;
}
