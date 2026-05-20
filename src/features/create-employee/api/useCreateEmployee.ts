import { CreateEmployee, createEmployee } from "@entities/employee";
import { useMutation } from "@tanstack/react-query";

export const useCreateEmployee = () => {
  return useMutation({
    mutationFn: (data: CreateEmployee) => {
      return createEmployee(data);
    },
    onSuccess: ({ data }) => {},
  });
};
