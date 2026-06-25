import { useCreateEmployee } from "@features/create-employee/api/useCreateEmployee";
import styles from "./UpdateWeightsForm.module.css";
import { Input } from "@shared/ui/input";
import { useCallback, useEffect, useState } from "react";
import { Button, ButtonTheme } from "@shared/ui/Button";
import { useTranslation } from "react-i18next";
import { Select } from "@shared/ui/select";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { subdivisionQueries } from "@entities/subdivision";
import { useUpdateWeights } from "../api/useUpdateWeights";
import { weightQueries } from "@entities/weight";
import { Controller, useForm } from "react-hook-form";
import { classnames } from "@shared/lib/classnames";

interface FormValues {
  information: number;
  speed: number;
  qualityWork: number;
  resultWork: number;
  teamWork: number;
  respect: number;
}

interface UpdateWeightsFormProps {
  className?: string;
}

export const UpdateWeightsForm = ({ className }: UpdateWeightsFormProps) => {
  const { t } = useTranslation("");
  const queryClient = useQueryClient();

  const { data: weights, isLoading: isWeightsLoading } = useQuery(
    weightQueries.weights(),
  );

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<FormValues>({
    defaultValues: {
      information: 0,
      qualityWork: 0,
      respect: 0,
      resultWork: 0,
      speed: 0,
      teamWork: 0,
    },
  });

  // const [information, setInformation] = useState("0");

  const { mutate, error, isPending } = useUpdateWeights();

  useEffect(() => {
    if (weights?.data) {
      reset({
        information: weights.data.informationWeight,
        qualityWork: weights.data.qualityWorkWeight,
        respect: weights.data.respectWeight,
        resultWork: weights.data.resultWorkWeight,
        speed: weights.data.speedWeight,
        teamWork: weights.data.teamWorkWeight,
      });
    }
  }, [weights, reset]);

  const onSubmit = useCallback(
    (data: FormValues) => {
      mutate({
        informationWeight: data.information,
        qualityWorkWeight: data.qualityWork,
        respectWeight: data.respect,
        resultWorkWeight: data.resultWork,
        speedWeight: data.speed,
        teamWorkWeight: data.teamWork,
      });

      queryClient.invalidateQueries({ queryKey: ["employeesRank"] });
    },
    [mutate, queryClient],
  );

  const submitError = error?.message || (error && t("Ошибка обновления"));

  return (
    <form
      className={classnames(styles.wrapper, {}, [className])}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={styles.grid}>
        <Controller
          name="information"
          control={control}
          rules={{
            required: t("Обязательное поле"),
            min: { value: 0, message: t("Значение от 0 до 1") },
            max: { value: 1, message: t("Значение от 0 до 1") },
          }}
          render={({ field }) => {
            return (
              <Input
                value={`${field.value}`}
                onChange={(val) => field.onChange(val)}
                placeholder={`Владение актуальной информацией: ${field.value}`}
                error={!!errors.information || !!error}
                type="range"
                min="0.1"
                max="1"
                step={0.1}
                autofocus
                required
              />
            );
          }}
        />

        <Controller
          name="qualityWork"
          control={control}
          rules={{
            required: t("Обязательное поле"),
            min: { value: 0, message: t("Значение от 0 до 1") },
            max: { value: 1, message: t("Значение от 0 до 1") },
          }}
          render={({ field }) => {
            return (
              <Input
                value={`${field.value}`}
                onChange={(val) => field.onChange(val)}
                placeholder={`Качество работы: ${field.value}`}
                error={!!errors.qualityWork || !!error}
                type="range"
                min="0.1"
                max="1"
                step={0.1}
                required
              />
            );
          }}
        />

        <Controller
          name="respect"
          control={control}
          rules={{
            required: t("Обязательное поле"),
            min: { value: 0, message: t("Значение от 0 до 1") },
            max: { value: 1, message: t("Значение от 0 до 1") },
          }}
          render={({ field }) => {
            return (
              <Input
                value={`${field.value}`}
                onChange={(val) => field.onChange(val)}
                placeholder={`Уважение и этика: ${field.value}`}
                error={!!errors.respect || !!error}
                type="range"
                min="0.1"
                max="1"
                step={0.1}
                required
              />
            );
          }}
        />

        <Controller
          name="resultWork"
          control={control}
          rules={{
            required: t("Обязательное поле"),
            min: { value: 0, message: t("Значение от 0 до 1") },
            max: { value: 1, message: t("Значение от 0 до 1") },
          }}
          render={({ field }) => {
            return (
              <Input
                value={`${field.value}`}
                onChange={(val) => field.onChange(val)}
                placeholder={`Результат работы: ${field.value}`}
                error={!!errors.resultWork || !!error}
                type="range"
                min="0.1"
                max="1"
                step={0.1}
                required
              />
            );
          }}
        />

        <Controller
          name="speed"
          control={control}
          rules={{
            required: t("Обязательное поле"),
            min: { value: 0, message: t("Значение от 0 до 1") },
            max: { value: 1, message: t("Значение от 0 до 1") },
          }}
          render={({ field }) => {
            return (
              <Input
                value={`${field.value}`}
                onChange={(val) => field.onChange(val)}
                placeholder={`Скорость работы: ${field.value}`}
                error={!!errors.speed || !!error}
                type="range"
                min="0.1"
                max="1"
                step={0.1}
                required
              />
            );
          }}
        />

        <Controller
          name="teamWork"
          control={control}
          rules={{
            required: t("Обязательное поле"),
            min: { value: 0, message: t("Значение от 0 до 1") },
            max: { value: 1, message: t("Значение от 0 до 1") },
          }}
          render={({ field }) => {
            return (
              <Input
                value={`${field.value}`}
                onChange={(val) => field.onChange(val)}
                placeholder={`Командная работа: ${field.value}`}
                error={!!errors.teamWork || !!error}
                type="range"
                min="0.1"
                max="1"
                step={0.1}
                required
              />
            );
          }}
        />
      </div>

      <Button
        className={styles.submit_btn}
        disabled={isPending}
        theme={ButtonTheme.OUTLINE}
        type="submit"
      >
        {t("Сохранить параметры")}
      </Button>
    </form>
  );
};

// <div>
//   {/* Поле с ползунком через Controller */}
//   <Controller
//     name="information"
//     control={control}
//     rules={{
//       required: t("Обязательное поле"),
//       min: { value: 0, message: t("Значение от 0 до 1") },
//       max: { value: 1, message: t("Значение от 0 до 1") },
//     }}
//     render={({ field }) => {
//       // Ваш Input, судя по коду, принимает value и onChange со значением,
//       // поэтому пробрасываем через field.value и field.onChange
//       return (
//         <Input
//           value={`${field.value}`}
//           onChange={(val) => field.onChange(val)}
//           placeholder={`Владение актуальной информацией: ${field.value}`}
//           error={!!errors.information || !!error}
//           type="range"
//           min="0"
//           max="1"
//           step={0.1}
//           autofocus
//           required
//         />
//       );
//     }}
//   />
//   {/* Отображение ошибок валидации */}
//   {errors.information && (
//     <span className={styles.error}>{errors.information.message}</span>
//   )}
//   {/* Отображение ошибки от сервера */}
//   {submitError && !errors.information && (
//     <span className={styles.error}>{submitError}</span>
//   )}
//   {/* Можно показать текущее значение рядом */}
//   {/* <div className={styles.currentValue}>
//     {t("Текущее значение")}: {control._formValues?.information ?? 0}
//   </div> */}
// </div>;
