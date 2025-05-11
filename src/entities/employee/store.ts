import { create } from "zustand";
import { Employee } from "./types/employee";

type EmployeeFilters = {
  departments: string[];
  positions: string[];
  minExperience?: number;
  maxExperience?: number;
};

type EmployeeStore = {
  employees: Employee[];
  departments: string[];
  positions: string[];
  filters: EmployeeFilters;
  setFilters: (filters: Partial<EmployeeFilters>) => void;
};

export const useEmployeeStore = create<EmployeeStore>((set) => ({
  employees: [
    {
      id: "1",
      name: "Иванов Иван",
      position: "CEO",
      department: "Управление",
      experience: 10,
      rating: 95,
    },
    {
      id: "2",
      name: "Петрова Мария",
      position: "CTO",
      department: "IT",
      experience: 8,
      rating: 90,
      managerId: "1",
    },
  ],
  departments: ["Отдел разработки", "Отдел маркетинга", "HR"],
  positions: ["Разработчик", "Менеджер", "Дизайнер"],
  filters: {
    departments: [],
    positions: [],
  },
  setFilters: (newFilters) =>
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    })),
}));
