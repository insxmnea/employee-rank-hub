import { UpdateSubdivision, updateSubdivision } from "@entities/subdivision";
import { useMutation } from "@tanstack/react-query";

export const useUpdateSubdivision = () => {
  return useMutation({
    mutationFn: (data: UpdateSubdivision) => {
      return updateSubdivision(data);
    },
    onSuccess: ({ data }) => {},
  });
};
