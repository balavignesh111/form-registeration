export function RadioFieldBox({radioId,text}){
  return(
    <>
      <input 
        type="radio" 
        name="gender-radio" 
        id={radioId} />
        <label 
          htmlFor={radioId}>
            {text}
        </label>
    </>
  )
}