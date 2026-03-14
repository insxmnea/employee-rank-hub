import { Modal } from "@shared/ui/Modal";
import { LoginForm } from "../login-form/LoginForm";

interface LoginModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const LoginModal = ({ ...props }: LoginModalProps) => {
  return (
    <Modal lazy {...props}>
      <LoginForm />
    </Modal>
  );
};
