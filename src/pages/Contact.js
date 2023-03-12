import Header from "../components/Header";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';


const Contact = () =>{
    return <div>
        <section><Header/></section>
        <h3>Leave Me a Message</h3>
        <form>
            <div className="half left cf">
                <input type="text" id="input-name" placeholder="Name"/>
                <input type="email" id="input-email" placeholder="Email address"/>
                <input type="text" id="input-subject" placeholder="Subject"/>
            </div>
            <div className="half right cf">
                <textarea name="message" type="text" id="input-message" placeholder="Message"></textarea>
            </div>  
            <input type="submit" value="Submit" id="input-submit"/>
        </form>

        <div>
            <h3>Or if you would like to connect by:</h3>
            <a></a>
            <a></a>
            <a></a>
<FontAwesomeIcon icon={solid('envelope')} />
<FontAwesomeIcon icon={brands('github')} />
<FontAwesomeIcon icon={brands('linkedin')} />

        </div>

        <div>
        <FontAwesomeIcon icon={solid('file-pdf')} />
        </div>
    </div>
}

export default Contact;