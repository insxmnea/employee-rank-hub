import { useQuery } from "@tanstack/react-query";
import styles from "./EmployeeTable.module.css";
import { employeeQueries } from "@entities/employee";
import { Loader } from "@shared/ui/Loader";
import { useTranslation } from "react-i18next";
import { Td } from "@shared/ui/table";
import { EmployeeDetailsModal } from "@features/employee-details";
import { useState } from "react";

const getDeltaIcon = (delta: "up" | "down") => {
  return delta === "up" ? (
    <div className={styles.upIcon}>
      <i className="nf nf-fa-caret_up"></i>
    </div>
  ) : (
    <div className={styles.downIcon}>
      <i className="nf nf-fa-caret_down"></i>
    </div>
  );
};

interface EmployeeTableProps {}

export const EmployeeTable = (props: EmployeeTableProps) => {
  const { t } = useTranslation();
  const { data, isLoading } = useQuery(employeeQueries.employeesRank());

  const [isSideModal, setIsSideModal] = useState(false);
  const [employeeId, setEmployeeId] = useState("");

  if (isLoading) return <Loader centered />;

  const handleRowClick = (id: string) => {
    setIsSideModal(true);
    setEmployeeId(id);
  };

  const onCloseSideModal = () => {
    setIsSideModal(false);
    setEmployeeId("");
  };

  const filteredContent = data?.data.filter(
    (employee) => !!employee.topsisScore,
  );

  const tableContent = filteredContent?.map((employee, index) => {
    return (
      <tr
        className={styles.tr}
        key={employee.id}
        onClick={() => handleRowClick(employee.id)}
      >
        <Td centered>{index + 1}</Td>
        <Td centered>{`${employee.topsisScore?.toFixed(2) ?? "-"}`}</Td>
        <Td className={styles.deltaAssessment} centered>
          {getDeltaIcon(employee.delta)}{" "}
          {employee.employeeCurrentAssessment ?? "—"}
        </Td>
        <Td>{`${employee.lastName ?? "-"} ${employee.firstName ?? "-"} ${employee.patronymic ?? "-"}`}</Td>
        <Td>{`${employee.subdivision.name ?? "-"}`}</Td>
        <Td>{`${employee.profession ?? "-"}`}</Td>
        <Td>{`${employee.role ?? "-"}`}</Td>
      </tr>
    );
  });

  return (
    <>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.th}>{t("№")}</th>
            <th className={styles.th}>{t("Рейтинг TOPSIS")}</th>
            <th className={styles.th}>{t("Балл")}</th>
            <th className={styles.th}>{t("ФИО сотрудника")}</th>
            <th className={styles.th}>{t("Отдел")}</th>
            <th className={styles.th}>{t("Должность")}</th>
            <th className={styles.th}>{t("Уровень квалификации")}</th>
          </tr>
        </thead>
        <tbody>{tableContent}</tbody>
      </table>

      <EmployeeDetailsModal
        id={employeeId}
        isOpen={isSideModal}
        onClose={onCloseSideModal}
      />
    </>
  );
};
