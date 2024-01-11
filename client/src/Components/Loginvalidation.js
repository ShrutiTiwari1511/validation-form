function Validation(values){
    let error={}
    const email_pattern= /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-z0-9]{8,}$/

if(values.name==="")
{
    error.name="name should not be empty";
}
else{
    error.name="";
}
if((values.email)==="")
{
    error.email="email should not be empty";
}
else if(!email_pattern.test(values.email))
{
    error.email="Invalid Email";
}
else
{
    error.email=""
}
if(values.password ==="")
{
    error.password="password should not be empty";
}
else if(!password_pattern.test(values.password))
{
    error.password="Invalid Password";
}
else{
    error.password="";
}
return error;

}
export default Validation;