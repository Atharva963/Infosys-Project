const url = "http://localhost:3000";
//signup api 
export const signupService = async(userData)=>{
  const   {name, email, password} = userData ;
  const response = await fetch(`${url}/signup`,{
    method: "POST",
    headers:{
        "content-type":"application/json"
    },
    body:JSON.stringify({name, email, password})
});
const data = await response.json();
return data ;
}
//login api 
export const loginService = async(userData)=>{
    const   { email, password} = userData ;
    const response = await fetch(`${url}/login`,{
      method: "POST",
      headers:{
          "content-type":"application/json"
      },
      body:JSON.stringify({ email, password})
  });
  const data = await  response.json();
  return data ;
  }
// update password api 
export const changePassword = async(userData)=>{
    const   { email, password, confirmPassword} = userData ;
    const response = await fetch(`${url}/password`,{
      method: "PATCH",
      headers:{
          "content-type":"application/json"
      },
      body:JSON.stringify({ email, password, confirmPassword})
  });
  const data = await  response.json();
  return data ;
  }
