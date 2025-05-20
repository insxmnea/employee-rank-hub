// import { useEmployeeStore } from "entities/employee";
import { Sphere, Text } from "@react-three/drei";
import { useEmployeeStore } from "src/entities/employee/store";

export const EmployeeNodes = () => {
  const { employees } = useEmployeeStore();

  const getRatingColor = (rating: number) => {
    if (rating < 2) {
      return "red";
    } else if (rating < 4) {
      return "orange";
    } else {
      return "green";
    }
  };

  return (
    <group>
      {employees.map((emp, idx) => (
        <group key={emp.id} position={[idx * 5, 0, 0]}>
          <Sphere args={[1, 32, 32]}>
            <meshStandardMaterial color={getRatingColor(emp.rating)} />
          </Sphere>
          <Text position={[0, -2, 0]} fontSize={0.5} color="white">
            {emp.name}
          </Text>
        </group>
      ))}
    </group>
  );
};
