import { Loader } from "@shared/ui/Loader";
import { SideModal } from "@shared/ui/SideModal";
import { Suspense } from "react";
import { EmployeeDetailsAsync } from "../employee-details/EmployeeDetails.async";
import { EmployeeDetailsProps } from "../employee-details/EmployeeDetails";

interface EmployeeDetailsModalProps extends EmployeeDetailsProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const EmployeeDetailsModal = ({
  id,
  ...props
}: EmployeeDetailsModalProps) => {
  return (
    <SideModal lazy {...props}>
      <Suspense fallback={<Loader />}>
        <EmployeeDetailsAsync id={id} />
      </Suspense>
    </SideModal>
  );
};
