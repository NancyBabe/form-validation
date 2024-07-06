import { useState } from "react"
import './FormVal.css';

const initalState ={
         UserName: '',
         OtherNames: '',
         Date: '',
         Time: '',
         Email: '',
         Password: '',
         ConfirmPassword: ''
         
}

const FormValidation = () => {

const [FormValue, setFormValue] = useState(initalState);
 //de-structuring in React js...
const { UserName, OtherNames,Date,Password,ConfirmPassword,Time,Email} = FormValue;

// error handling
 const[Errors, setErrors] = useState({});

 const handleChange =(e) =>{
   setFormValue({...FormValue, [e.target.name]: e.target.value});
 };

 const Validate =() =>{
       let newErrors ={};

       //validating for username
       if(!UserName) {
              newErrors.UserName ='Username is required';
       }

       if (!OtherNames) {
              newErrors.OtherNames ='OtherNames is required';
       }

       if (!Date) {
              newErrors.Date = 'Date is required';

       }
       if (!Time) {
              newErrors.Time = 'Time is required';
       }

       if (!Email) {
              newErrors.Email = 'Email is required';
       }


       //validate password
       if (!Password) {
              newErrors.Password = 'Password is required';
       } else if (Password.length < 6) {
              newErrors.Password = 'Password must be at least 6 characters long';
       }

       if (!ConfirmPassword) {
              newErrors.ConfirmPassword = 'comfirm password is required'
       } else if (ConfirmPassword != Password) {
              newErrors.ConfirmPassword = 'password do not match'
       }

      setErrors(newErrors)
   
      return Object.keys(newErrors).length === 0;

 };

      const handleSubmit =(e)=>{
       e.preventDefault();

       if (Validate()) {
              console.log('Form submitted:', FormValue);
              setFormValue(initalState)
       }
 };
       

  return (
    <form className="form" onSubmit={handleSubmit} >
     <h2>FORM VALIDATION</h2>
     
       <div className='form-group'>
        <label>Username</label>
          <input 
         type="text" 
         name='UserName'
         placeholder="Username"
         value={UserName}
         onChange={handleChange}
       />
       {Errors.UserName && <span className="error">{Errors.UserName}</span>}
     </div>

     <div className='form-group'>
        <label>OtherNames</label>
          <input 
         type="text" 
         name='OtherNames'
         placeholder="othernames"
         value={OtherNames}
         onChange={handleChange}
       />
       {Errors.OtherNames && <span className="error">{Errors.OtherNames}</span>}
     </div>

     <div className='form-group'>
        <label>Date</label>
          <input 
         type="date" 
         name='Date'
         placeholder="date"
         value={Date}
         onChange={handleChange}
       />
       {Errors.Date && <span className="error">{Errors.Date}</span>}
     </div>

     <div className='form-group'>
        <label>Time</label>
          <input 
         type="time" 
         name='Time'
         placeholder="time"
         value={Time}
         onChange={handleChange}
       />
       {Errors.Time && <span className="error">{Errors.Time}</span>}
     </div>


     <div className='form-group'>
        <label>Email</label>
          <input 
         type="email" 
         name='Email'
         placeholder="email"
         value={Email}
         onChange={handleChange}
       />
       {Errors.Email && <span className="error">{Errors.Email}</span>}
     </div>

     <div className='form-group'>
        <label>password</label>
          <input 
         type="password" 
         name='Password'
         placeholder="password"
         value={Password}
         onChange={handleChange}
       />
       {Errors.Password && <span className="error">{Errors.Password}</span>}
     </div>

     <div className='form-group'>
        <label>Confirm Password</label>
          <input 
         type="password" 
         name='ConfirmPassword'
         placeholder="confirm password"
         value={ConfirmPassword}
         onChange={handleChange}
       />
       {Errors.ConfirmPassword && <span className="error">{Errors.ConfirmPassword}</span>}
     </div>


      <button type="submit">submit</button>
     
    </form>
  )
}

export default FormValidation;






//                   //validate confirm password
//                   if (!ConfirmPassword) {
//                   newErrors.ConfirmPassword = 'Confirm Password is required';
//                   {else if (ConfirmPassword !== Password)}
//           newErrors.ConfirmPassword = 'Passwords do not match';

//          }
//           setErrors(newErrors);

//  //Return true if there are no errors
//          return Object.keys(newErrors).length === 0;
//          };


//          const handleSubmit =(e) => {
//                   e.preventDefault();

//                   if (validate)
//          }
//   return (
//    <form className='form' >

//   <h2>FORM VALIDATION</h2>

//   <div className='form-group'>
//          <label>Username</label>
//          <input 
//          type="text" 
//          name='username'
//          placeholder="Username"
//          value={UserName}
       
//          />
//          {Errors.username && <span className="error">{Errors.UserName}</span>}
//   </div>

//   <div className='form-group'>
//          <label>OtherNames</label>
//          <input 
//          type="text" 
//          name='Othernames'
//          placeholder="othernames"
//          value={OtherNames}

//          />
//   </div>


//   <div className='form-group'>
//          <label>Date</label>
//          <input 
//          type="date" 
//          name='date'
//          placeholder="date"
//          value={Date}
//          onChange={handleChange}
//          />

// {Errors.Date && <span className ="error>"{Errors.Date}</span>}
//   </div>

//   <div className='form-group'>
//          <label>Password</label>
//          <input 
//          type="password" 
//          name='password'
//          placeholder='password'
//          value={Password}
//          onChange={handleChange}
//          />
//           {Errors.Password && <span className="error>"{Errors.Password}</span>}
//   </div>

//   <div className='form-group'>
//          <label>Confirm Password</label>
//          <input 
//          type="password" 
//          name='confirmpassword'
//          placeholder='confirm password'
//          value={ConfirmPassword}
//          onChange={handleChange}
//          />
//          {Errors.confirmPassword && <span className="error>"{Errors.confirmPassword}</span>}
//   </div>

// <button type='submit'>Submit</button>


//    </form>
//   )
// }

// export default FormValidation

