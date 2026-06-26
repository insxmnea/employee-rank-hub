import styles from "./CreateSubdivisionForm.module.css";
import { Input } from "@shared/ui/input";
import { useCallback, useState } from "react";
import { Button, ButtonTheme } from "@shared/ui/Button";
import { useTranslation } from "react-i18next";
import { Select } from "@shared/ui/select";
import { useQuery } from "@tanstack/react-query";
import { subdivisionQueries } from "@entities/subdivision";
import { useNavigate } from "react-router";
import { RoutePath } from "@shared/config/routeConfig";
import { useCreateSubdivision } from "@features/create-subdivision/api/useCreateSubdivision";

export const CreateSubdivisionForm = () => {
  const { t } = useTranslation("");

  const [name, setName] = useState("");
  const [subdivisionId, setSubdivisionId] = useState<number>();
  const navigate = useNavigate();

  const { data: subdivisions, isLoading: isSubdivisionsLoading } = useQuery(
    subdivisionQueries.allSubdivisions(),
  );
  const subdivisionsOptions =
    subdivisions?.data.map((subdivision) => {
      return { value: subdivision.id, label: subdivision.name };
    }) ?? [];
  const { mutate, error, isPending } = useCreateSubdivision();

  const onSubmit = useCallback(() => {
    mutate({
      name,
      idTopSubdivision: subdivisionId === 999 ? undefined : `${subdivisionId}`,
    });

    navigate(`${RoutePath.subdivision_table}`);
  }, [mutate, name, subdivisionId, navigate]);

  return (
    <form className={styles.wrapper} onSubmit={onSubmit}>
      <div className={styles.grid}>
        <Input
          value={name}
          placeholder="Название"
          onChange={(value) => setName(value)}
          error={!!error}
          autofocus
          required
        />
        <Select
          value={String(subdivisionId)}
          options={[{ value: 999, label: "" }, ...subdivisionsOptions]}
          placeholder="Управляющее подразделение"
          onChange={(value) => setSubdivisionId(+value)}
          disabled={isSubdivisionsLoading}
        />
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
