import { stateArr } from "../constant"

export function StateField({stateId}){
  return(
    <select 
      name="number" 
      id={stateId}
      className="w-[26.5rem] border-[1px] border-black bg-neutral-50 p-[0.5rem]">
        {
          stateArr.map((ele,index)=>{
            return (<option value={ele} key={index}>{ele}</option>)
          })
        }
    </select>
  )
}