import { deleteSubdivision } from "@entities/subdivision";
import { useMutation } from "@tanstack/react-query";

export const useDeleteSubdivision = () => {
  return useMutation({
    mutationFn: (id: string) => {
      return deleteSubdivision(id);
    },
  });
};
