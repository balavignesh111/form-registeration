import { useState } from 'react'
import { Label } from './component/label';
import {InputField} from './component/input'
import { RadioFieldBox } from './component/radio.component';
import { PhoneField } from './component/phone.component';
import { AddressField } from './component/address.component';
import { StateField } from './component/state.component';
import { Hobbies } from './component/hobbies.component';
import { hobbies } from './constant';
import { ButtonEle } from './component/button.component';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-white w-[40rem] flex flex-col justify-center items-center gap-[1rem] border-[4px] border-black px-[1.5rem] py-[15px] mt-[3rem]'>
      <h1 className='text-[1.5rem] text-[#fe1e50] font-bold uppercase'>Students Registration Form</h1>

      {/* first name field */}
      <div className="w-full flex flex-row justify-between items-center">
        <Label 
          text = "First Name"
          forText = "firstName"
        />
        <InputField
          inputType = "text"
          inputId = "firstName"
          inputPlaceHolder = "Enter First Name"
        />
      </div>

      {/* last name field */}
      <div className="w-full flex flex-row justify-between items-center">
        <Label 
          text = "Last Name"
          forText = "lastName"
        />
        <InputField
          inputType = "text"
          inputId = "lastName"
          inputPlaceHolder = "Enter Last Name"
        />
      </div>

      {/* gender field */}

      <div className="w-full flex flex-row justify-between items-center">
        <Label 
          text = "Gender"
          forText = "gender"
        />
        <div className='w-[26.5rem] flex gap-4 pl-12'>
          <RadioFieldBox
            radioId="male"
            text="Male"
          />
          <RadioFieldBox
            radioId="female"
            text="Female"
          />
        </div>
      </div>

      {/* age field */}
      <div className="w-full flex flex-row justify-between items-center">
        <Label 
          text = "Age"
          forText = "ageField"
        />
        <InputField
          inputType = "text"
          inputId = "ageField"
          inputPlaceHolder = "Enter your age"
        />
      </div>

      {/* date of birth */}
      <div className="w-full flex flex-row justify-between items-center">
        <Label 
          text = "Date of Birth"
          forText = "dobField"
        />
        <InputField
          inputType = "date"
          inputId = "dobField"
        />
      </div>

      {/* email field */}
      <div className="w-full flex flex-row justify-between items-center">
        <Label 
          text = "Email Address"
          forText = "emailField"
        />
        <InputField
          inputType = "email"
          inputId = "emailField"
          inputPlaceHolder = "Enter your email"
        />
      </div>

      {/* password field */}
      <div className="w-full flex flex-row justify-between items-center">
        <Label 
          text = "Password"
          forText = "passwordField"
        />
        <InputField
          inputType = "Password"
          inputId = "passwordField"
          inputPlaceHolder = "Enter your password min 8 characters"
        />
      </div>

      {/* confirm password field */}
      <div className="w-full flex flex-row justify-between items-center">
        <Label 
          text = "Confirm Password"
          forText = "confirmPasswordField"
        />
        <InputField
          inputType = "Password"
          inputId = "confirmPasswordField"
          inputPlaceHolder = "Confirm Password"
        />
      </div>

      {/* phone Number */}
      <div className="w-full flex flex-row items-center gap-8">
        <Label 
          text = "Phone Number"
          forText = "numberField"
        />
        <PhoneField
          numberId="numOption"
          phoneFieldId="phoneId"
          phonePlaceHolder="Enter Your Phone number"
        />
      </div>

      {/* address */}
      <div className="w-full flex flex-row justify-between items-center">
        <Label 
          text = "Address"
          forText = "addressField"
        />
        <AddressField 
          textAreaId="addressField"
          placeHolderTextArea="Enter your address"
        />
      </div>

      {/* state */}
      <div className="w-full flex flex-row justify-between items-center">
        <Label 
          text = "State"
          forText = "stateField"
        />
        <StateField
          stateId = "stateField"
        />
      </div>

      {/* pincode field */}
      <div className="w-full flex flex-row justify-between items-center">
        <Label 
          text = "Pin Code"
          forText = "pinCode"
        />
        <InputField
          inputType = "text"
          inputId = "pinCode"
          inputPlaceHolder = "Enter your pin code"
        />
      </div>

      {/* hobbies field */}
      <div className="w-full flex flex-row justify-between items-center">
        <Label 
          text = "Hobbies"
          forText = "hobbies"
        />
        <div 
          className="w-[26.5rem] px-[10px] py-[5px] flex flex-row gap-4" >
            {
              hobbies.map((ele,index)=>{
                return <Hobbies
                  hobbie={ele}
                  key={index}
                />
              })
            }
        </div>
      </div>

      {/* upload photo */}
      <div className="w-full flex flex-row justify-between items-center">
        <Label 
          text = "Upload Photo"
          forText = "uploadPic"
        />
        <span className='w-[5rem] text-[red] font-normal'>*Max size 100kb.</span>
        <input type='file'/>
      </div>

      {/* declaration */}
      <div className="w-full flex flex-row items-center gap-4">
        <input 
          type="checkbox" name="declaraton" id="declarationInput" 
        />
        <span>I hereby declare that the above information provided is true and correct.</span>
      </div>

      {/* not-a-robot */}
      <div className="w-full flex flex-row items-center gap-4">
        <div className="w-[20rem] flex flex-row items-center gap-4 border-2 px-[1rem] py-[0.5rem] bg-slate-50">
          <div className = "w-[12rem] flex gap-4">
          <input 
            type="checkbox" name="declaraton" id="declarationInput" 
          />
          <label htmlFor="declarationInput">
            I'm not a robot
          </label>
          </div>
          <div className='w-[4rem] flex flex-col justify-center items-center'>
          <div className='w-[2rem]'>
            <img 
              className='w-full h-auto'
              src="../src/assets/capcha.png" 
              alt="captcha-image" />
          </div>
          <p className='text-[0.75rem] text-slate-600'>reCAPTCHA</p>
          <div className='text-[0.6rem] text-slate-700 flex justify-between gap-2'>
            <a href="https://policies.google.com/privacy?hl=en">Privacy</a>
            <a href="https://policies.google.com/terms?hl=en">Terms</a>
          </div>
          </div>
        </div>
      </div>

      {/* not-a-robot */}
      <div className="w-full flex flex-row items-center justify-center gap-4">
        <ButtonEle 
          text="Register"
        />
        <ButtonEle 
          text="Reset"
        />
      </div>
    </div>
  )
}

export default App
