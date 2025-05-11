// features/employee-hierarchy/lib/useEmployeeHierarchy.ts
import { useMemo } from "react";
import { buildHierarchyTree } from "src/entities/employee/lib/buildHierarchyTree";
import { useEmployeeStore } from "src/entities/employee/store";

export const useEmployeeHierarchy = () => {
  const { employees, filters } = useEmployeeStore();

  const filteredEmployees = useMemo(() => {
    return employees.filter(
      (emp) =>
        (!filters.departments.length ||
          filters.departments.includes(emp.department)) &&
        (!filters.positions.length ||
          filters.positions.includes(emp.position)) &&
        emp.experience >= (filters.minExperience || 0) &&
        emp.experience <= (filters.maxExperience || Infinity)
    );
  }, [employees, filters]);

  const hierarchyTree = useMemo(() => {
    return buildHierarchyTree(filteredEmployees);
  }, [filteredEmployees]);

  return { data: hierarchyTree, isLoading: false };
};
