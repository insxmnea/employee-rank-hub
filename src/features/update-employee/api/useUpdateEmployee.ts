import { UpdateEmployee, updateEmployee } from "@entities/employee";
import { useMutation } from "@tanstack/react-query";

export const useUpdateEmployee = () => {
  return useMutation({
    mutationFn: (data: UpdateEmployee) => {
      return updateEmployee(data);
    },
    onSuccess: ({ data }) => {},
  });
};
