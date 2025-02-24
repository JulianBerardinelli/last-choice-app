import { Card, CardFooter, Image, Button } from "@nextui-org/react";

interface CardProps {
  title: string;
  imageSrc: string;
  onOpen: () => void; // Recibe una función para abrir el modal
}

export default function CardComponent({ title, imageSrc, onOpen }: CardProps) {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none max-w-[400px] "  // Fijamos el ancho máximo de la tarjeta
      isPressable
      onPress={onOpen}
    >
      <Image
        alt={title}
        className="object-cover w-full h-[200px]"  // Aseguramos que la imagen cubra toda la tarjeta
        height={200}
        src={imageSrc}
        width={500}  // Establecemos el tamaño fijo de la imagen
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">{title}</p>
        <div className="text-tiny text-white bg-black/20 rounded-lg px-2 py-1">
          Ver más
        </div>
      </CardFooter>
    </Card>
  );
}

