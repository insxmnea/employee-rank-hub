import { createSubdivision, CreateSubdivision } from "@entities/subdivision";
import { useMutation } from "@tanstack/react-query";

export const useCreateSubdivision = () => {
  return useMutation({
    mutationFn: (data: CreateSubdivision) => {
      return createSubdivision(data);
    },
    onSuccess: ({ data }) => {},
  });
};
