import { useQuery } from "@tanstack/react-query";
import styles from "./SubdivisionTable.module.css";
import { Loader } from "@shared/ui/Loader";
import { useTranslation } from "react-i18next";
import { Table, Td, Th, Thead, Tr } from "@shared/ui/table";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { RoutePath } from "@shared/config/routeConfig";
import { Input } from "@shared/ui/input";
import { subdivisionQueries } from "@entities/subdivision";
import { Flex } from "@shared/ui/flex";
import { useDebounce } from "@shared/lib/hooks/useDebounce";
import { AppLink } from "@shared/ui/AppLink";
import { Text } from "@shared/ui/text";
import { subdivisionTableDataAdapter } from "../adapters";

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

export const SubdivisionTable = () => {
  const { t } = useTranslation();
  const { data, isLoading } = useQuery(subdivisionQueries.allSubdivisions());
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);

  const filteredContent = useMemo(() => {
    if (!data?.data) return [];

    const searchLower = debouncedSearch.trim().toLowerCase();

    return subdivisionTableDataAdapter(data.data)
      .filter((subdivision) => {
        return subdivision.name.includes(searchLower);
      })
      .sort(
        (prevSubdivision, nextSubdivision) =>
          +nextSubdivision.avgTopsis - +prevSubdivision.avgTopsis,
      );
  }, [data, debouncedSearch]);

  if (isLoading) return <Loader centered />;

  const handleRowClick = (id: string) => {
    navigate(`${RoutePath.subdivision}/${id}`);
    // setIsSideModal(true);
    // setEmployeeId(id);
  };

  const tableContent = filteredContent?.map((subdivision, index) => {
    return (
      <Tr key={subdivision.id} onClick={() => handleRowClick(subdivision.id)}>
        <Td centered>{index + 1}</Td>
        <Td centered>
          {subdivision.avgTopsis ? subdivision.avgTopsis.toFixed(2) : "—"}
        </Td>
        <Td className={styles.deltaAssessmentContainer} centered>
          {subdivision.subdivisionCurrentAssessment ? (
            <div className={styles.deltaAssessment}>
              {getDeltaIcon(subdivision.delta)}{" "}
              {subdivision.subdivisionCurrentAssessment ?? "—"}
            </div>
          ) : (
            "—"
          )}
        </Td>
        <Td>{`${subdivision.name ?? "—"}`}</Td>
        <Td centered>{`${subdivision.employeeCount ?? "—"}`}</Td>
        <Td centered>
          <AppLink
            to={`${RoutePath.subdivision}/${subdivision.id}`}
            className={styles.linkButton}
          >
            <i className="nf nf-fa-external_link"></i>
          </AppLink>
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
            placeholder="Поиск по названию"
            value={search}
            onChange={(value) => setSearch(value)}
          />
        </Flex>

        <AppLink to={`${RoutePath.create_subdivision}`} className={styles.link}>
          <i className="nf nf-md-tab_plus"></i>
          <Text>{t("Добавить подразделение")}</Text>
        </AppLink>
      </Flex>

      <div className={styles.tableContainer}>
        <Table className={styles.table}>
          <Thead>
            <Th width="34px">{t("№")}</Th>
            <Th width="34px">{t("Средний TOPSIS")}</Th>
            <Th width="85px">{t("Балл")}</Th>
            <Th width="100%">{t("Название")}</Th>
            <Th width="100%">{t("Сотрудники")}</Th>
            <Th width="100px">{t("Ссылка")}</Th>
          </Thead>
          <tbody>{tableContent}</tbody>
        </Table>
      </div>
    </div>
  );
};
