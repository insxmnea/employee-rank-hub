import { Loader } from "@shared/ui/Loader";
import { SideModal } from "@shared/ui/SideModal";
import { Suspense } from "react";
import { SubdivisionDetailsAsync } from "../subdivision-details/SubdivisionDetails.async";
import { EmployeeDetailsProps } from "../subdivision-details/SubdivisionDetails";

interface EmployeeDetailsModalProps extends EmployeeDetailsProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const SubdivisionDetailsModal = ({
  id,
  ...props
}: EmployeeDetailsModalProps) => {
  return (
    <SideModal lazy {...props}>
      <Suspense fallback={<Loader />}>
        <SubdivisionDetailsAsync id={id} />
      </Suspense>
    </SideModal>
  );
};
