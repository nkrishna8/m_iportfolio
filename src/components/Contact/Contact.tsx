import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import skypeIcon from "../../assets/skype.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to grow mutually! </p>
        <p>Contact me now for Opportunity</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:harekrishnakn08@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:harekrishnakn08@gmail.com">harekrishnakn08@gmail.com</a>
        </div>
        <div>
        <a href="tel:+917908374351"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+917908374351">(+91) 7908374351</a>
        </div>  
        <div>
        {/* <a href="tel:+917908374351"><img src={skypeIcon} alt="Skype Id" /></a> */}
        <a href="skype:live:.cid.db1b66197c933aed?chat"><img src={skypeIcon} alt="Skype Id" /></a>
          <a href="skype:live:.cid.db1b66197c933aed?chat">live:.cid.db1b66197c933aed</a>
        </div>
      </div>

      {/* <Form></Form> */}
    </Container>
  )
}