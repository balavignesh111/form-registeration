function Label({text,forText}){
  return (
    <label htmlFor={forText} className="w-[9rem] text-[rgb(139,0,0)] font-medium">{text}</label>
  );
}

export {Label};