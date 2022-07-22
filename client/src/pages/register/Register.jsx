import "./register.css";

const Register = () => {
   return (
       <div class="main-wrap">
           <div class="form-wrap">
               <h1>SIGN <span>UP</span></h1>
               <h6>Welcome to Hotel Booking</h6>
               <form class="form">
                   <input type="email" name="email" id="email" placeholder="Email"/>
                   <br></br>
                   <input type="password" name="pass" id="pass" placeholder="Password"/>
                   <br></br>
                   <input type="password" name="cpass" id="cpass" placeholder="Confirm Password"/>
                   <br></br>
                   <button type="submit" class="form-btn">SIGN UP</button>
               </form>
               <span class="sign-up-with">Or sign up with</span>
               <div class="social-logo">
                    <a href="https://vnexpress.net/" title="Facebook">
                        <img src="https://github.com/surajaswal-dev/signin-signup-pages/blob/main/signup-form-0/images/fb.png?raw=true" alt="Facebook"/>
                    </a>
                    <a href="https://vnexpress.net/" title="Google">
                        <img src="https://raw.githubusercontent.com/surajaswal-dev/signin-signup-pages/main/signup-form-0/images/google.png" alt="Google"/>
                    </a>
                    <a href="https://vnexpress.net/" title="Twitter">
                        <img src="https://raw.githubusercontent.com/surajaswal-dev/signin-signup-pages/main/signup-form-0/images/twitter.png" alt="Twitter"/>
                    </a>
               </div>
           </div>
    </div> );
};

export default Register;