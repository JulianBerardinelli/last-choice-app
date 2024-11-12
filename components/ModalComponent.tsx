import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import YoutubeIcon from './svg-logos/YoutubeIcon'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  link?: string;
}

const ModalComponent = ({ isOpen, onClose, title, content, link }: ModalProps) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onClose} className="border-spacing-2 border-red-500">
      <ModalContent className="bg-black/90 before:blur-lg border-r-0 shadow-lg shadow-blue-700 border-2 border-green-500">
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1 bg-blue-900/35 text-white">{title}</ModalHeader>
            <ModalBody className="bg-blue-900/35">
              <p>{content}</p>
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-red-500"
                >
                   <YoutubeIcon size={40} />
                  Ver Video
                 
                </a>
              )}
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
