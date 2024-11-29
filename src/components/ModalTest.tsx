import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const ModalTest = () => {
  const [open, handlers] = useDisclosure(false);
  handlers.open();
  handlers.close();
  return (
    <Modal opened={open} onClose={handlers.close} title="Modal Title"></Modal>
  );
};

export default ModalTest;
