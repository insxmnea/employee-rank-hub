import styles from "./UpdateEmployeeForm.module.css";
import { Input } from "@shared/ui/input";
import { useCallback, useEffect, useState } from "react";
import { Button, ButtonTheme } from "@shared/ui/Button";
import { useTranslation } from "react-i18next";
import { Select } from "@shared/ui/select";
import { useQuery } from "@tanstack/react-query";
import { subdivisionQueries } from "@entities/subdivision";
import { useNavigate, useParams } from "react-router";
import { RoutePath } from "@shared/config/routeConfig";
import { useUpdateEmployee } from "../../api/useUpdateEmployee";
import { employeeQueries } from "@entities/employee";
import { Controller, useForm } from "react-hook-form";

interface FormValues {
  firstName?: string;
  lastName?: string;
  patronymic?: string;
  birthday?: string;
  profession?: string;
  gender?: "male" | "female";
  role?: "Junior" | "Middle" | "Senior";
  subdivisionId?: number;
}

export const UpdateEmployeeForm = () => {
  const { t } = useTranslation("");

  const { employeeId: id } = useParams();

  const { data: employee, isLoading } = useQuery(
    employeeQueries.employee(Number(id)),
  );

  const navigate = useNavigate();

  const { data: subdivisions, isLoading: isSubdivisionsLoading } = useQuery(
    subdivisionQueries.allSubdivisions(),
  );
  const subdivisionsOptions =
    subdivisions?.data.map((subdivision) => {
      return { value: subdivision.id, label: subdivision.name };
    }) ?? [];
  const { mutate, error, isPending } = useUpdateEmployee();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<FormValues>({
    defaultValues: {},
  });

  const onSubmit = useCallback(
    (data: FormValues) => {
      if (id) {
        mutate({
          id,
          ...data,
        });
      }

      navigate(`${RoutePath.employee_table}`);
    },
    [id, mutate, navigate],
  );

  useEffect(() => {
    if (employee?.data) {
      reset({
        firstName: employee.data.firstName,
        birthday: employee.data.birthday,
        gender: employee.data.gender as "male" | "female",
        lastName: employee.data.lastName,
        patronymic: employee.data.patronymic,
        profession: employee.data.profession,
        role: employee.data.role as "Junior" | "Middle" | "Senior",
        subdivisionId: employee.data.subdivisionId,
      });
    }
  }, [employee, reset]);

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.grid}>
        <div>
          <Controller
            name="firstName"
            control={control}
            rules={{
              required: t("Обязательное поле"),
            }}
            render={({ field }) => {
              return (
                <Input
                  value={`${field.value}`}
                  placeholder="Имя"
                  onChange={(value) => field.onChange(value)}
                  error={!!errors.firstName || !!error}
                  autofocus
                  required
                />
              );
            }}
          />
          <Controller
            name="lastName"
            control={control}
            rules={{
              required: t("Обязательное поле"),
            }}
            render={({ field }) => {
              return (
                <Input
                  value={`${field.value}`}
                  placeholder="Фамилия"
                  onChange={(value) => field.onChange(value)}
                  error={!!errors.lastName || !!error}
                  required
                />
              );
            }}
          />
          <Controller
            name="patronymic"
            control={control}
            rules={{
              required: t("Обязательное поле"),
            }}
            render={({ field }) => {
              return (
                <Input
                  value={`${field.value}`}
                  placeholder="Отчество"
                  onChange={(value) => field.onChange(value)}
                  error={!!errors.patronymic || !!error}
                  required
                />
              );
            }}
          />
          <Controller
            name="birthday"
            control={control}
            rules={{
              required: t("Обязательное поле"),
            }}
            render={({ field }) => {
              return (
                <Input
                  value={`${field.value}`}
                  type="date"
                  placeholder="Дата рождения"
                  onChange={(value) => field.onChange(value)}
                  error={!!errors.birthday || !!error}
                  required
                />
              );
            }}
          />
        </div>

        <div>
          <Controller
            name="gender"
            control={control}
            rules={{
              required: t("Обязательное поле"),
            }}
            render={({ field }) => {
              return (
                <Select
                  value={`${field.value}`}
                  placeholder="Пол"
                  onChange={(value) => field.onChange(value)}
                  error={!!errors.birthday || !!error}
                  options={[
                    { value: "male", label: "мужской" },
                    { value: "female", label: "женский" },
                  ]}
                />
              );
            }}
          />
          <Controller
            name="role"
            control={control}
            rules={{
              required: t("Обязательное поле"),
            }}
            render={({ field }) => {
              return (
                <Select
                  value={`${field.value}`}
                  placeholder="Уровень квалификации"
                  defaultValue="-"
                  onChange={(value) => field.onChange(value)}
                  error={!!errors.role || !!error}
                  options={["Junior", "Middle", "Senior"]}
                />
              );
            }}
          />
          <Controller
            name="profession"
            control={control}
            rules={{
              required: t("Обязательное поле"),
            }}
            render={({ field }) => {
              return (
                <Input
                  value={`${field.value}`}
                  placeholder="Специальность"
                  onChange={(value) => field.onChange(value)}
                  error={!!errors.profession || !!error}
                  required
                />
              );
            }}
          />
          {/* <Input
            value={profession}
            placeholder="Специальность"
            onChange={(value) => setProfession(value)}
            error={!!error}
            required
          /> */}
          <Controller
            name="subdivisionId"
            control={control}
            rules={{
              required: t("Обязательное поле"),
            }}
            render={({ field }) => {
              return (
                <Select
                  value={`${field.value}`}
                  placeholder="Подразделение"
                  onChange={(value) => field.onChange(value)}
                  error={!!errors.subdivisionId || !!error}
                  options={[...subdivisionsOptions]}
                  disabled={isSubdivisionsLoading}
                />
              );
            }}
          />
          {/* <Select
            value={String(subdivisionId)}
            options={[{ value: "0", label: "" }, ...subdivisionsOptions]}
            placeholder="Подразделение"
            onChange={(value) => setSubdivisionId(+value)}
            disabled={isSubdivisionsLoading}
          /> */}
        </div>
      </div>

      <Button
        className={styles.submit_btn}
        disabled={isPending}
        theme={ButtonTheme.OUTLINE}
        type="submit"
      >
        {t("Сохранить")}
      </Button>
    </form>
  );
};
