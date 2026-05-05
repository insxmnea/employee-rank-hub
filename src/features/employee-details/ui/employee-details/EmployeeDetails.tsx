import { employeeQueries } from "@entities/employee";
import { Loader } from "@shared/ui/Loader";
import { Text } from "@shared/ui/text";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export interface EmployeeDetailsProps {
  id: string;
}

const EmployeeDetails = ({ id }: EmployeeDetailsProps) => {
  const { t } = useTranslation("employee-details");

  const { data, isLoading } = useQuery(employeeQueries.employee(Number(id)));

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch("http://localhost:1234/api/v1/chat", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         model: "google/gemma-4-e2b",
  //         input: "Напиши предложение",
  //       }),
  //     });
  //     const data2 = await response.json();
  //     console.log("data2", data2);
  //   }

  //   fetchData();
  // }, []);

  if (isLoading) return <Loader />;

  return (
    <div>
      <Text size="l">{`${data?.data.lastName} ${data?.data.firstName} ${data?.data.patronymic}`}</Text>
      <div>{`${t("Gender")}: ${data?.data.gender}`}</div>
      <div>{`${t("Birthday")}: ${data?.data.birthday}`}</div>
      <div>{`${t("Profession")}: ${data?.data.profession}`}</div>
      <div>{`${t("Grade")}: ${data?.data.role}`}</div>
      <div>{t("Average statistics")}:</div>
      <div>{`${t("Information")}: ${data?.data.averageInformation}`}</div>
      <div>{`${t("Quality work")}: ${data?.data.averageQualityWork}`}</div>
      <div>{`${t("Respect")}: ${data?.data.averageRespect}`}</div>
      <div>{`${t("Result work")}: ${data?.data.averageResultWork}`}</div>
      <div>{`${t("Speed")}: ${data?.data.averageSpeed}`}</div>
      <div>{`${t("Team work")}: ${data?.data.averageTeamWork}`}</div>
    </div>
  );
};

export default EmployeeDetails;
