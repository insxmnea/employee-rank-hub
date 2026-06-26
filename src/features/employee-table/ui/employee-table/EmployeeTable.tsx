import { useQuery } from "@tanstack/react-query";
import styles from "./EmployeeTable.module.css";
import { Employee, employeeQueries } from "@entities/employee";
import { Loader } from "@shared/ui/Loader";
import { useTranslation } from "react-i18next";
import { Table, Td, Th, Thead, Tr } from "@shared/ui/table";
import { EmployeeDetailsModal } from "@features/employee-details";
import {
  MouseEvent,
  MouseEventHandler,
  Suspense,
  useCallback,
  useMemo,
  useState,
} from "react";
import { useNavigate } from "react-router";
import { RoutePath } from "@shared/config/routeConfig";
import { Input } from "@shared/ui/input";
import { Select } from "@shared/ui/select";
import { subdivisionQueries } from "@entities/subdivision";
import { Flex } from "@shared/ui/flex";
import { useDebounce } from "@shared/lib/hooks/useDebounce";
import { AppLink } from "@shared/ui/AppLink";
import { Text } from "@shared/ui/text";
import { Modal } from "@shared/ui/Modal";
import { LoginFormAsync } from "@features/auth-by-username/ui/login-form/LoginForm.async";
import { Button, ButtonTheme } from "@shared/ui/Button";
import { useDeleteEmployee } from "@features/delete-employee";

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

interface EmployeeTableProps {
  subdivisionView?: boolean;
}

export const EmployeeTable = ({ subdivisionView }: EmployeeTableProps) => {
  const { t } = useTranslation();
  const { data, refetch, isLoading } = useQuery(
    employeeQueries.employeesRank(),
  );
  const navigate = useNavigate();

  const [isSideModal, setIsSideModal] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [employeeId, setEmployeeId] = useState("");
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);
  const [activeDeleteEmployee, setActiveDeleteEmployee] = useState<Employee>();

  const [subdivisionId, setSubdivisionId] = useState<number>(999);

  const { data: subdivisions, isLoading: isSubdivisionsLoading } = useQuery(
    subdivisionQueries.allSubdivisions(),
  );
  const subdivisionsOptions =
    subdivisions?.data.map((subdivision) => {
      return { value: subdivision.id, label: subdivision.name };
    }) ?? [];

  const { mutate, error, isPending } = useDeleteEmployee();

  // const filteredContent = useMemo(() => {
  //   return data?.data.filter((employee) => !!employee.topsisScore);
  // }, [data]);

  const filteredContent = useMemo(() => {
    if (!data?.data) return [];

    const searchLower = debouncedSearch.trim().toLowerCase();
    // Если поиск пуст – возвращаем только отфильтрованных по topsisScore
    // if (!searchLower && subdivisionId === 999) {
    //   return data.data.filter((employee) => !!employee.topsisScore);
    // }

    return data.data
      .filter((employee) => {
        // Сначала проверяем наличие topsisScore
        // if (!employee.topsisScore) return false;
        if (subdivisionId !== 999 && employee.subdivisionId !== subdivisionId)
          return false;

        const fullName = [
          employee.firstName || "",
          employee.lastName || "",
          employee.patronymic || "",
        ]
          .join(" ")
          .toLowerCase();

        return fullName.includes(searchLower);
      })
      .sort(
        (prevEmployee, nextEmployee) =>
          nextEmployee.topsisScore - prevEmployee.topsisScore,
      );
  }, [data, debouncedSearch, subdivisionId]);

  if (isLoading) return <Loader centered />;

  const handleRowClick = (id: string) => {
    navigate(`${RoutePath.employee}/${id}`);
    // setIsSideModal(true);
    // setEmployeeId(id);
  };

  const onCloseSideModal = () => {
    setIsSideModal(false);
    setEmployeeId("");
  };

  const onClickDeleteButton = (e: MouseEvent, employee: Employee) => {
    e.stopPropagation();
    setIsDeleteModal(true);
    setActiveDeleteEmployee(employee);
  };

  const handleClickRemoveEmployee = async () => {
    if (activeDeleteEmployee) {
      await mutate(activeDeleteEmployee.id);
      setIsDeleteModal(false);
      navigate(`${RoutePath.employee_table}`);
    }
  };

  const onClickProfileButton = (e: MouseEvent, id: string) => {
    e.stopPropagation();
    navigate(`${RoutePath.employee}/${id}`);
  };

  // const filteredContent = data?.data.filter(
  //   (employee) => !!employee.topsisScore,
  // );

  const tableContent = filteredContent?.map((employee, index) => {
    return (
      <Tr key={employee.id} onClick={() => handleRowClick(employee.id)}>
        <Td centered>{index + 1}</Td>
        <Td
          title={
            employee.topsisScore > 0 ? `${employee.topsisScore}` : undefined
          }
          centered
        >{`${Number(employee.topsisScore?.toFixed(2)) > 0 ? employee.topsisScore?.toFixed(2) : "—"}`}</Td>
        <Td className={styles.deltaAssessmentContainer} centered>
          {employee.employeeCurrentAssessment ? (
            <div className={styles.deltaAssessment}>
              {getDeltaIcon(employee.delta)}{" "}
              {employee.employeeCurrentAssessment ?? "—"}
            </div>
          ) : (
            "—"
          )}
        </Td>
        <Td>{`${employee.lastName ?? "-"} ${employee.firstName ?? "-"} ${employee.patronymic ?? "-"}`}</Td>
        <Td>{`${employee.subdivision.name ?? "-"}`}</Td>
        <Td>{`${employee.profession ?? "-"}`}</Td>
        <Td>{`${employee.role ?? "-"}`}</Td>
        <Td centered>
          <AppLink
            to={`${RoutePath.employee}/${employee.id}`}
            className={styles.linkButton}
          >
            <i className="nf nf-fa-external_link"></i>
          </AppLink>
        </Td>
        <Td centered>
          <Button
            className={styles.trashButton}
            onClick={(e) => onClickDeleteButton(e, employee)}
          >
            <i className="nf nf-fa-trash_can"></i>
          </Button>
        </Td>
      </Tr>
    );
  });

  return (
    <div className={styles.wrapper}>
      <Flex mb={12} width="100%" justify="space-between" align="flex-end">
        <Flex gap={8}>
          <Input
            width={"350px"}
            placeholder="Имя сотрудника"
            value={search}
            onChange={(value) => setSearch(value)}
          />

          <Select
            value={String(subdivisionId)}
            options={[
              { value: 999, label: "Все подразделения" },
              ...subdivisionsOptions,
            ]}
            placeholder="Подразделение"
            onChange={(value) => setSubdivisionId(+value)}
            disabled={isSubdivisionsLoading}
          />
        </Flex>

        <AppLink to={`${RoutePath.create_employee}`} className={styles.link}>
          <i className="nf nf-fa-user_plus"></i>
          <Text>{t("Добавить сотрудника")}</Text>
        </AppLink>
      </Flex>

      <div className={styles.tableContainer}>
        <Table className={styles.table}>
          <Thead>
            <Th width="34px">{t("№")}</Th>
            <Th width="150px">{t("Рейтинг TOPSIS")}</Th>
            <Th width="85px">{t("Балл")}</Th>
            <Th width="290px">{t("ФИО сотрудника")}</Th>
            <Th width="170px">{t("Отдел")}</Th>
            <Th width="160px">{t("Должность")}</Th>
            <Th width="200px">{t("Уровень квалификации")}</Th>
            <Th width="100px">{t("Профиль")}</Th>
            <Th width="100px">{t("Удаление")}</Th>
          </Thead>
          <tbody>{tableContent}</tbody>
        </Table>
      </div>

      <EmployeeDetailsModal
        id={employeeId}
        isOpen={isSideModal}
        onClose={onCloseSideModal}
      />

      <Modal
        isOpen={isDeleteModal}
        onClose={() => setIsDeleteModal(false)}
        className={styles.deleteModal}
      >
        <Suspense fallback={<Loader />}>
          <Flex direction="column" gap={24}>
            <Text
              bold
              size="l"
            >{`${t("Вы уверены, что хотите удалить сотрудника")} "${activeDeleteEmployee?.lastName} ${activeDeleteEmployee?.firstName} ${activeDeleteEmployee?.patronymic}"?`}</Text>

            <Flex width="100%" justify="space-between">
              <Button
                className={styles.removeButton}
                onClick={handleClickRemoveEmployee}
              >
                {t("Удалить")}
              </Button>
              <Button onClick={() => setIsDeleteModal(false)}>
                {t("Отмена")}
              </Button>
            </Flex>
          </Flex>
        </Suspense>
      </Modal>
    </div>
  );
};
