import { hobbies } from "../constant";

export function Hobbies({hobbie}){
  return(
    <>
      <input 
        type="checkbox" 
        name={hobbie} 
        id={hobbie} 
        value={hobbie}
        />
      <label 
        htmlFor={hobbie}
        className="text-[rgb(139,0,0)] font-medium">
            {hobbie}
      </label>
    </>
  )
}