import { deleteEmployee } from "@entities/employee";
import { useMutation } from "@tanstack/react-query";

export const useDeleteEmployee = () => {
  return useMutation({
    mutationFn: (id: string) => {
      return deleteEmployee(id);
    },
  });
};
