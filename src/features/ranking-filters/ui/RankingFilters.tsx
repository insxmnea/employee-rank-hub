import { useEmployeeStore } from "src/entities/employee/store";
import { MultiSelect } from "src/shared/ui/multiselect/ui/MultiSelect";
import styles from "./RankingFilters.module.scss";

export const RankingFilters = () => {
  const { filters, setFilters, departments, positions } = useEmployeeStore();

  return (
    <div className={styles.filters}>
      <MultiSelect
        options={departments}
        value={filters.departments}
        onChange={(v) => setFilters({ ...filters, departments: v })}
        placeholder="Отделы"
      />
      <MultiSelect
        options={positions}
        value={filters.positions}
        onChange={(v) => setFilters({ ...filters, positions: v })}
        placeholder="Должности"
      />
      <div className={styles.experienceFilter}>
        <input
          type="number"
          value={filters.minExperience}
          onChange={(e) =>
            setFilters({ ...filters, minExperience: +e.target.value })
          }
          placeholder="Мин. стаж"
        />
        <input
          type="number"
          value={filters.maxExperience}
          onChange={(e) =>
            setFilters({ ...filters, maxExperience: +e.target.value })
          }
          placeholder="Макс. стаж"
        />
      </div>
    </div>
  );
};
