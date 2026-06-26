import styles from "./UpdateSubdivisionForm.module.css";
import { Input } from "@shared/ui/input";
import { useCallback, useEffect, useState } from "react";
import { Button, ButtonTheme } from "@shared/ui/Button";
import { useTranslation } from "react-i18next";
import { Select } from "@shared/ui/select";
import { useQuery } from "@tanstack/react-query";
import { subdivisionQueries } from "@entities/subdivision";
import { useNavigate, useParams } from "react-router";
import { RoutePath } from "@shared/config/routeConfig";
import { useUpdateSubdivision } from "../api/useUpdateSubdivision";
import { Controller, useForm } from "react-hook-form";

interface FormValues {
  name: string;
  subdivisionsOptions: string;
}

export const UpdateSubdivisionForm = () => {
  const { t } = useTranslation("");

  const { subdivisionId: id } = useParams();

  const { data: subdivision, isLoading } = useQuery(
    subdivisionQueries.subdivision(Number(id)),
  );

  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      subdivisionsOptions: "",
    },
  });

  const { data: subdivisions, isLoading: isSubdivisionsLoading } = useQuery(
    subdivisionQueries.allSubdivisions(),
  );
  const subdivisionsOptions =
    subdivisions?.data
      .map((subdivision) => {
        return { value: subdivision.id, label: subdivision.name };
      })
      .filter(({ value }) => value !== id) ?? [];
  const { mutate, error, isPending } = useUpdateSubdivision();

  const onSubmit = useCallback(
    (data: FormValues) => {
      if (id) {
        mutate({
          id,
          name: data.name,
          idTopSubdivision:
            data.subdivisionsOptions === "999"
              ? null
              : `${data.subdivisionsOptions}`,
        });

        navigate(`${RoutePath.subdivision_table}`);
      }
    },
    [mutate, navigate, id],
  );

  useEffect(() => {
    if (subdivision?.data && subdivisions?.data) {
      reset({
        name: subdivision.data.name,
        subdivisionsOptions: subdivision.data.idTopSubdivision,
      });
    }
  }, [subdivision, subdivisions, reset]);

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.grid}>
        <Controller
          name="name"
          control={control}
          rules={{
            required: t("Обязательное поле"),
          }}
          render={({ field }) => {
            return (
              <Input
                value={`${field.value}`}
                placeholder="Название"
                onChange={(value) => field.onChange(value)}
                error={!!errors.name || !!error}
                autofocus
                required
              />
            );
          }}
        />

        <Controller
          name="subdivisionsOptions"
          control={control}
          rules={{
            required: t("Обязательное поле"),
          }}
          render={({ field }) => {
            return (
              <Select
                value={`${field.value}`}
                options={[{ value: "999", label: "" }, ...subdivisionsOptions]}
                placeholder="Управляющее подразделение"
                onChange={(value) => field.onChange(value)}
                disabled={isSubdivisionsLoading}
              />
            );
          }}
        />
        {/* <Input
          value={name}
          placeholder="Название"
          onChange={(value) => setName(value)}
          error={!!error}
          autofocus
          required
        /> */}
        {/* <Select
          value={String(subdivisionId)}
          options={[{ value: 999, label: "" }, ...subdivisionsOptions]}
          placeholder="Управляющее подразделение"
          onChange={(value) => setSubdivisionId(+value)}
          disabled={isSubdivisionsLoading}
        /> */}
      </div>

      <Button
        className={styles.submit_btn}
        disabled={isPending}
        theme={ButtonTheme.OUTLINE}
        type="submit"
      >
        {t("Создать")}
      </Button>
    </form>
  );
};
