import * as React from "react";
import { Image } from "@nextui-org/react";

const CoderHouseIcon = (props) => {
  return (
    <Image
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0kGMWL9dYbkEFnx_08O2qVUVPckRDBi0bpA&s" // URL de la imagen
      alt="CoderHouse Icon"
      width={props.width || "40"}
      height={props.height || "40"}
      style={{ objectFit: "contain", ...props.style }}
      {...props}
    />
  );
};

export default CoderHouseIcon;
