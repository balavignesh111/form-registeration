export function AddressField({textAreaId,placeHolderTextArea}){
  return(
    <textarea 
      id={textAreaId} 
      cols="30" 
      rows="5"
      className="w-[26.5rem] border-[1px] border-[#fe1e50] px-[10px] py-[5px] rounded resize-none" 
      placeholder={placeHolderTextArea}
      ></textarea>
  );
}