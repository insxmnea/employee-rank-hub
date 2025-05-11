import { Employee } from "../types/employee";

type HierarchyNode = Employee & {
  children: HierarchyNode[];
};

export const buildHierarchyTree = (employees: Employee[]): HierarchyNode[] => {
  const employeeMap = new Map<string, HierarchyNode>();
  const roots: HierarchyNode[] = [];

  // Создаем начальные узлы и хеш-таблицу
  employees.forEach((employee) => {
    employeeMap.set(employee.id, {
      ...employee,
      children: [],
    });
  });

  // Строим иерархические связи
  employees.forEach((employee) => {
    const node = employeeMap.get(employee.id)!;

    if (employee.managerId) {
      const parent = employeeMap.get(employee.managerId);
      parent?.children.push(node);
    } else {
      roots.push(node);
    }
  });

  // Сортируем детей по рейтингу (по убыванию)
  const sortChildren = (nodes: HierarchyNode[]) => {
    nodes.sort((a, b) => b.rating - a.rating);
    nodes.forEach((node) => sortChildren(node.children));
  };

  sortChildren(roots);

  return roots;
};
