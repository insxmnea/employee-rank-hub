import { UpdateWeights, updateWeights } from "@entities/weight";
import { useMutation } from "@tanstack/react-query";

export const useUpdateWeights = () => {
  return useMutation({
    mutationFn: (data: UpdateWeights) => {
      return updateWeights(data);
    },
    onSuccess: ({ data }) => {},
  });
};
