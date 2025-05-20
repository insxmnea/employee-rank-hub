import { Canvas } from "@react-three/fiber";
import { EmployeeNodes } from "src/widgets/employee-nodes/ui/EmployeeNodes";
// import { EmployeeNodes } from "./EmployeeNodes";

export const ThreeDVisualization = () => {
  return (
    <Canvas camera={{ position: [0, 0, 50] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <EmployeeNodes />
    </Canvas>
  );
};
