import React from "react";

type Props = {
  children: React.ReactNode;
};

const HText = ({ children }: Props) => {
  return (
    <h1 className="basis-3/5 my-3 font-montserrat text-4xl font-[900]">{children}</h1>
  );
};

export default HText;
