import { memo } from "react";
import PropTypes from "prop-types";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@heroui/react";

function AlertConfirm({
  title,
  message,
  isOpen = false,
  cancelText = "Cancel",
  confirmText = "Confirm",
  onClose,
  onConfirm,
  size = "sm",
  backdrop = "opaque",
}) {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onClose}
      size={size}
      backdrop={backdrop}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
            <ModalBody>
              <p>{message}</p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                {cancelText}
              </Button>
              <Button color="primary" onPress={onConfirm}>
                {confirmText}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

AlertConfirm.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  cancelText: PropTypes.string,
  confirmText: PropTypes.string,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func,
  size: PropTypes.oneOf([
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "4xl",
    "5xl",
    "full",
  ]),
  backdrop: PropTypes.oneOf(["opaque", "blur", "transparent"]),
};

const AlertConfirmMemo = memo(AlertConfirm);

export default AlertConfirmMemo;
