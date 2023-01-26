import React from 'react';
import '../Styling/SignIn.css'
class  SignIn extends React.Component{
  constructor(props)
  {
    super(props);
    {
      this.state={
        signInEmail:'',
        signInPass:'',
        returnedresponse:''
      }
    }
  }
  onEmailChange=(event)=>
  {
    this.setState({signInEmail:event.target.value})
  }
  onPassChange=(event)=>
  {
    this.setState({signInPass:event.target.value})
  }

  onSubmitSignIn = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://virtualbrain-backend.amarpreetkaur2.repl.co/signin", {
        method: "POST",
        headers:{'content-type':'application/json'},
        body: JSON.stringify({
          email:this.state.signInEmail,
          password:this.state.signInPass
        }),
      });
      let resJson = await res.json();
      if (resJson.id) {
        this.props.loaduser(resJson);
        {this.props.onRouteChange('home')};
      } else {
        {this.props.onRouteChange('register')};
      }
    } catch (err) {
      console.log("errorrrrrrrrrrrrrrrr",err);
    }
  };
  
  // onSubmitSignIn=()=>{
  // //   fetch('https://reqres.in/api/posts',{
  // //     // mode: 'no-cors',
  // //     method:'post',
  // //     headers:{'content-type':'application/json'},
  // //     body:JSON.stringify({
  // //       email:this.state.signInEmail,
  // //       password:this.state.signInPass
  // //     })
  // //   })
  // //   .then(res=>res.ok?res:false)
  // //   .then(data=>{
  // //     {
  // // if(data.email==='abc@gmail.com')
  // // {
  // //   {this.props.onRouteChange('home')};
  // //   console.log(data.email);
  // // }
  // // else
  // // {
  // //   this.props.onRouteChange('register');
  // //   console.log(data);
  // // }
  // //    } })
    
  // //       .catch(err=>{
  // //     console.log(err);
  // //   })
  // //   console.log('success')
    
  // //   if(this.state.returnedresponse==='Success')
  // //   {
  // //   this.props.onRouteChange('home');
  // //   }
  // //   else{
  
  // // this.props.onRouteChange('register');
  //   // }
  //   /////////////////////////////////////////
  //   const calling=async()=>{
  //   let response = await fetch('https://virtualbrain-backend.amarpreetkaur2.repl.co/signin', {
  //     method: 'POST',
  //     mode:'no-cors',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8'
  //     },
  //     body:JSON.stringify({
  //             email:this.state.signInEmail,
  //             password:this.state.signInPass
  //           })
  //   });
    
  //   // let result = await response.json();
  //   if(response==='Success')
  //   {
  //   this.props.onRouteChange('home');
  //   }
  //   else{
  
  // this.props.onRouteChange('register');
  //   }
  // }
  // calling();
  // // this.props.onRouteChange('home');
  // }
  
  render(){
    const {onRouteChange}=this.props;
  return(
    <div>
    <form >
      <div className="formdecor">
      <p className="textdecor">Sign In</p>
      <br></br>
      <label htmlFor="email">Email</label><input onChange={this.onEmailChange}
      className="inputdecor2" type='email' required />
      <label htmlFor="password">Password</label><input onChange={this.onPassChange} className="inputdecor2" type='password' name='password' required/>
      <button onClick={this.onSubmitSignIn} className="btn" >SignIn</button>
      <div><p onClick={()=>onRouteChange('register')} className="linkdecor1" value="Signin">Register</p></div>
      </div>
    </form>
    </div>
  );
  }
}
export default SignIn;