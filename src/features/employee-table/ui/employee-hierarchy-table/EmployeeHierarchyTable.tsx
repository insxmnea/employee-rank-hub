import { useQuery } from "@tanstack/react-query";
import styles from "./EmployeeHierarchyTable.module.css";
import { employeeQueries } from "@entities/employee";
import { Loader } from "@shared/ui/Loader";
import { useTranslation } from "react-i18next";
import { Table, Td, Th, Thead, Tr } from "@shared/ui/table";
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

export const EmployeeHierarchyTable = () => {
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
      <Tr key={employee.id} onClick={() => handleRowClick(employee.id)}>
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
      </Tr>
    );
  });

  return (
    <>
      <Table>
        <Thead>
          <Th>{t("№")}</Th>
          <Th>{t("Рейтинг TOPSIS")}</Th>
          <Th>{t("Балл")}</Th>
          <Th>{t("ФИО сотрудника")}</Th>
          <Th>{t("Отдел")}</Th>
          <Th>{t("Должность")}</Th>
          <Th>{t("Уровень квалификации")}</Th>
        </Thead>
        <tbody>{tableContent}</tbody>
      </Table>

      <EmployeeDetailsModal
        id={employeeId}
        isOpen={isSideModal}
        onClose={onCloseSideModal}
      />
    </>
  );
};
