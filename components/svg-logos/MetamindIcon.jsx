import * as React from "react";
import { Image } from "@nextui-org/react";

const metamindIcon = (props) => {
  return (
    <Image
      src="https://metamind.la/img/logo-metamind.png" // URL de la imagen
      alt="Metamind Icon"
      width={props.width || "40"}
      height={props.height || "40"}
      style={{ objectFit: "contain", ...props.style }}
      {...props}
    />
  );
};

export default metamindIcon;
