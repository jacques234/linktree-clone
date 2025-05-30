import React from "react";
interface PropsTitle {
  title:string;
  description:string;
}


export const Title = ({ title,description}:PropsTitle) => {
  return (
    <>
      <h1 className="font-bold text-4xl">{title}</h1>
      <p className=" text-gray-400">{description}</p>
    </>
  );
};
