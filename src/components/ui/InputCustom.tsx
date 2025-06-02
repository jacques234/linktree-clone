'use client'
interface PropsInput{
    label:string;
    id:string;
    placeholder?:string;
    value:string;
    onChange: (value:string) => void;
}
export const InputCustom = ({label,id,placeholder,value,onChange}:PropsInput) => {
  return (
    <>
      <label htmlFor={id}>
        {label}
      </label>
      <div className="w-full max-w-sm min-w-full my-2">
        <input
          id={id}
          type="text"
          value={value}
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow "
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </>
  );
};
