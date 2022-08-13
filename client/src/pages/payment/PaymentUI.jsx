import "./paymentUI.css";
import { useNavigate } from "react-router-dom";
import {Navigate, useLocation} from 'react-router-dom';
import Payment from "./Payment";
export default function PaymentUI()
{
    const location =useLocation() 
    const navigate = useNavigate();
    const handleClick = async () => {
        
       
        navigate('/payment',{state:{_data:location.state._data,price:location.state.price,day:location.state.price}});
      };
     
      console.log("UI here")
      console.log( )
    return (
        <div>
    <div>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"/>
    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"/>
    </div>
    <body>
    <main class="page payment-page">
        <section class="payment-form dark">
        <div class="container">
            <div class="block-heading">
            <h2>Thanh toán</h2>
            <p>Chúc quý khách 1 kỳ nghỉ dưỡng vui vẻ</p>
            </div>
            <form>
            <div class="products">
                <h3 class="title">Checkout</h3>
                <div class="item">
                <span class="price">$200</span>
                <p class="item-name">Hotel nikko</p>
                <p class="item-description">Khách sạn 5 sao</p>
                </div>
                <div class="item">
                <span class="price">$120</span>
                <p class="item-name">Hotel Sai Gon</p>
                <p class="item-description">Khách sạn 3 sao</p>
                </div>
                <div class="total">Total<span class="price">$320</span></div>
            </div>
            <div class="card-details">
                <h3 class="title">Credit Card Details</h3>
                <div class="row">
                <div class="form-group col-sm-7">
                    <label for="card-holder">Card Holder</label>
                    <input id="card-holder" type="text" class="form-control" placeholder="Card Holder" aria-label="Card Holder" aria-describedby="basic-addon1"/>
                </div>
                <div class="form-group col-sm-5">
                    <label for="">Expiration Date</label>
                    <div class="expiration-date">
                    <input type="text" class="form-control" placeholder="MM" aria-label="MM" aria-describedby="basic-addon1"/>
                    <span class="date-separator">/</span>
                    <input type="text" class="form-control" placeholder="YY" aria-label="YY" aria-describedby="basic-addon1"/>
                    </div>
                </div>
                <div class="form-group col-sm-8">
                    <label for="card-number">Card Number</label>
                    <input id="card-number" type="text" class="form-control" placeholder="Card Number" aria-label="Card Holder" aria-describedby="basic-addon1"/>
                </div>
                <div class="form-group col-sm-4">
                    <label for="cvc">CVC</label>
                    <input id="cvc" type="text" class="form-control" placeholder="CVC" aria-label="Card Holder" aria-describedby="basic-addon1"/>
                </div>
                <div class="form-group col-sm-12">
                    <button type="button" class="btn btn-primary btn-block">Proceed</button>
                    <br></br>
                    <Payment >
                    
                    </Payment>
                </div>
                {/* <div class="form-group col-sm-12">  
                    <button onClick={handleClick} type="button" class="btn btn-primary btn-block">Payment with PayPal</button>
                </div> */}
                
                </div>
            </div>
            </form>
        </div>
        </section>
    </main>
    </body>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    </div>
)
}