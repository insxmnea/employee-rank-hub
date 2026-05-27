import { useCreateEmployee } from "@features/create-employee/api/useCreateEmployee";
import styles from "./CreateEmployeeForm.module.css";
import { Input } from "@shared/ui/input";
import { useCallback, useState } from "react";
import { Button, ButtonTheme } from "@shared/ui/Button";
import { useTranslation } from "react-i18next";
import { Select } from "@shared/ui/select";
import { useQuery } from "@tanstack/react-query";
import { subdivisionQueries } from "@entities/subdivision";

interface CreateEmployeeFormProps {}

export const CreateEmployeeForm = (props: CreateEmployeeFormProps) => {
  const { t } = useTranslation("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [patronymic, setPatronymic] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState<"male" | "female">("male");
  const [role, setRole] = useState<"Junior" | "Middle" | "Senior">();
  const [profession, setProfession] = useState("");
  const [subdivisionId, setSubdivisionId] = useState<number>();

  const { data: subdivisions, isLoading: isSubdivisionsLoading } = useQuery(
    subdivisionQueries.allSubdivisions(),
  );
  const subdivisionsOptions = subdivisions?.data.map((subdivision) => {
    return { value: subdivision.id, label: subdivision.name };
  });
  const { mutate, error, isPending } = useCreateEmployee();

  const onSubmit = useCallback(() => {
    mutate({
      firstName,
      lastName,
      patronymic,
      birthday,
      gender,
      role,
      profession,
      subdivisionId,
    });
  }, [
    mutate,
    firstName,
    lastName,
    patronymic,
    birthday,
    gender,
    role,
    profession,
    subdivisionId,
  ]);

  return (
    <form className={styles.wrapper} onSubmit={onSubmit}>
      <div className={styles.grid}>
        <div>
          <Input
            value={firstName}
            placeholder="Имя"
            onChange={(value) => setFirstName(value)}
            error={!!error}
            autofocus
            required
          />
          <Input
            value={lastName}
            placeholder="Фамилия"
            onChange={(value) => setLastName(value)}
            error={!!error}
            required
          />
          <Input
            value={patronymic}
            placeholder="Отчество"
            onChange={(value) => setPatronymic(value)}
            error={!!error}
          />
          <Input
            value={birthday}
            type="date"
            placeholder="Дата рождения"
            onChange={(value) => setBirthday(value)}
            error={!!error}
            required
          />
        </div>

        <div>
          <Select
            value={gender}
            placeholder="Пол"
            onChange={(value) => setGender(value as "male" | "female")}
            options={[
              { value: "male", label: "мужской" },
              { value: "female", label: "женский" },
            ]}
            error={!!error}
          />
          <Select
            value={role ?? ""}
            placeholder="Уровень квалификации"
            defaultValue="-"
            onChange={(value) =>
              setRole(value as "Junior" | "Middle" | "Senior")
            }
            options={["Junior", "Middle", "Senior"]}
            error={!!error}
          />
          <Input
            value={profession}
            placeholder="Специальность"
            onChange={(value) => setProfession(value)}
            error={!!error}
            required
          />
          <Select
            value={String(subdivisionId)}
            options={subdivisionsOptions ?? []}
            placeholder="Подразделение"
            onChange={(value) => setSubdivisionId(+value)}
            disabled={isSubdivisionsLoading}
          />
        </div>
      </div>

      <Button
        className={styles.submit_btn}
        disabled={isPending}
        theme={ButtonTheme.OUTLINE}
        type="submit"
      >
        {t("Добавить сотрудника")}
      </Button>
    </form>
  );
};
