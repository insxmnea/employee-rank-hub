import { employeeQueries } from "@entities/employee";
import { RoutePath } from "@shared/config/routeConfig";
import { AppLink } from "@shared/ui/AppLink";
import { Card } from "@shared/ui/card";
import { Loader } from "@shared/ui/Loader";
import { Table, Td, Th, Thead, Tr } from "@shared/ui/table";
import { Text } from "@shared/ui/text";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import styles from "./TopEmployeeChart.module.css";
import { useNavigate } from "react-router";

export const TopEmployeeChart = () => {
  const { t } = useTranslation();
  const { data, isLoading } = useQuery(employeeQueries.employeesRank());
  const navigate = useNavigate();

  if (isLoading) return <Loader centered />;

  const handleRowClick = (id: string) => {
    navigate(`${RoutePath.employee}/${id}`);
  };

  const filteredContent = data?.data
    .filter((employee) => !!employee.topsisScore)
    .slice(0, 5);

  const tableContent = filteredContent?.map((employee, index) => {
    return (
      <Tr key={employee.id} onClick={() => handleRowClick(employee.id)}>
        <Td centered>{index + 1}</Td>
        <Td>{`${employee.lastName ?? "-"} ${employee.firstName ?? "-"}`}</Td>
        <Td>{`${employee.profession ?? "-"}`}</Td>
        <Td>{`${employee.subdivision.name ?? "-"}`}</Td>
      </Tr>
    );
  });

  return (
    <Card className={styles.wrapper}>
      <Text centered size="l">
        {t("Лучшие сотрудники")}
      </Text>

      <Table>
        <Thead>
          <Th>{t("Ранг")}</Th>
          <Th>{t("Имя")}</Th>
          <Th>{t("Должность")}</Th>
          <Th>{t("Отдел")}</Th>
        </Thead>
        <tbody>{tableContent}</tbody>
      </Table>

      <AppLink to={RoutePath.employee_table} className={styles.link}>
        {t("Показать все")}
      </AppLink>
    </Card>
  );
};
