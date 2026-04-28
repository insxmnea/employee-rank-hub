import { employeeQueries } from "@entities/employee";
import { Loader } from "@shared/ui/Loader";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

export interface EmployeeDetailsProps {
  id: string;
}

const EmployeeDetails = ({ id }: EmployeeDetailsProps) => {
  const { t } = useTranslation();

  const { data, isLoading } = useQuery(employeeQueries.employee(Number(id)));

  if (isLoading) return <Loader />;

  return (
    <div>
      <div>{`${data?.data.lastName} ${data?.data.firstName} ${data?.data.patronymic}`}</div>
      <div>{`${t("Gender:")} ${data?.data.gender}`}</div>
      <div>{`${t("Birthday:")} ${data?.data.birthday}`}</div>
      <div>{`${t("Profession:")} ${data?.data.profession}`}</div>
      <div>{`${t("Grade:")} ${data?.data.role}`}</div>
      <div>{t("Average statistics")}</div>
      <div>{`${t("Information:")} ${data?.data.averageInformation}`}</div>
      <div>{`${t("Quality work:")} ${data?.data.averageQualityWork}`}</div>
      <div>{`${t("Respect:")} ${data?.data.averageRespect}`}</div>
      <div>{`${t("Result work:")} ${data?.data.averageResultWork}`}</div>
      <div>{`${t("Speed:")} ${data?.data.averageSpeed}`}</div>
      <div>{`${t("Team work:")} ${data?.data.averageTeamWork}`}</div>
    </div>
  );
};

export default EmployeeDetails;
