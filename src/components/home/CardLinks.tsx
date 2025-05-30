import { BiEdit } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { TbTrash } from "react-icons/tb";

interface PropsCardLink {
    title:string;
    identificador:string;
    descripcion:string;
    fechaCreacion:Date;
    visitas:number;
    clicks:number;
}


export const CardLinks = ({title,identificador,descripcion,fechaCreacion,visitas,clicks}: PropsCardLink) => {
  return (
    <div className="border-[1px] border-gray-300 rounded p-7 shadow-sm duration-300 ease-in hover:shadow-xl">
      <div className="flex justify-between flex-col xl:flex-row">
        <div>
          <p className="font-bold">{title}</p>
          <p className="text-gray-500">{identificador}</p>
        </div>
        <div className="flex gap-6">
          <button className="hover:text-blue-500 hover:scale-105 cursor-pointer"> 
            <BiEdit size={20} />
          </button>
          <button className="hover:text-blue-500 hover:scale-105 cursor-pointer">
            <BsEye size={20} />
          </button>
          <button className="hover:text-blue-500 hover:scale-105 cursor-pointer">
            <TbTrash color="red" size={20} />
          </button>
        </div>
      </div>
      <p className="text-gray-500 text-[10px] mt-5">
        {descripcion}
      </p>
      <p className="text-gray-500 text-[10px] mt-5">Created: {fechaCreacion.toDateString()}</p>

      <div className="flex justify-between text-gray-500 text-[10px]">
        <p>{visitas} visits</p>
        <p>{clicks} clicks</p>
      </div>
    </div>
  );
};
