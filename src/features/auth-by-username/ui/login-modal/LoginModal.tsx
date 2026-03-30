import { Modal } from "@shared/ui/Modal";
import { Suspense } from "react";
import { LoginFormAsync } from "../login-form/LoginForm.async";
import { Loader } from "@shared/ui/Loader";

interface LoginModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const LoginModal = ({ ...props }: LoginModalProps) => {
  return (
    <Modal lazy {...props}>
      <Suspense fallback={<Loader />}>
        <LoginFormAsync />
      </Suspense>
    </Modal>
  );
};
