import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const ModalComponent = ({ isOpen, onClose, title, content }: ModalProps) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onClose} className="border-spacing-2 border-red-500">
      <ModalContent className="bg-black/90 before:blur-lg border-r-0 shadow-lg shadow-blue-700 border-2 border-green-500">
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1 bg-blue-900/35 text-white">{title}</ModalHeader>
            <ModalBody className="bg-blue-900/35">
              <p>{content}</p>
            </ModalBody>
            <ModalFooter className=" bg-blue-900/35">
              <Button color="danger" variant="light" onPress={onClose}>
                Cerrar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
