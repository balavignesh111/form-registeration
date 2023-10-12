function InputField({inputType,inputId,inputPlaceHolder}){
  return (
    <input 
      type={inputType}
      id={inputId}
      className="w-[26.5rem] border-[1px] border-[#fe1e50] px-[10px] py-[5px] rounded" 
      placeholder={inputPlaceHolder}
      required/>
  );
}

export {InputField};