export function PhoneField({numberId,phoneFieldId,phonePlaceHolder}){
  return (
    <div className="w-[26.5rem] flex flex-row gap-8">
      <select 
        name="number" 
        id={numberId}
        className="w-[3rem] border-[1px] border-black bg-neutral-50">
        <option value="91">+91</option>
      </select>
      <input 
        type="text"
        id={phoneFieldId}
        placeholder={phonePlaceHolder}
        className="w-full border-[1px] border-[#fe1e50] px-[10px] py-[5px] rounded" 
        />
    </div>
  );
}