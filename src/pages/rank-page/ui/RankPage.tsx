import { subdivisionQueries } from "@entities/subdivision/api/subdivision.queries";
import { useQuery } from "@tanstack/react-query";
import { SubdivisionsHierarchy } from "@widgets/subdivisions-hierarchy";

const RankPage = () => {
  const { data } = useQuery(subdivisionQueries.allSubdivisions());

  console.log(data?.data);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <SubdivisionsHierarchy />
    </div>
  );
};

export default RankPage;
