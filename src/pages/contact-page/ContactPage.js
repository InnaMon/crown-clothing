import React, {useState} from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';

const ContactPage = () => {
    const [input, setInput] = useState({EMAIL : ''})

    const onChangeHandler = (e) => {
        const { name, value} = e.target;
        setInput(prevState => ({
            ...prevState,
            [name] : value
        }))
    }

    const FormStyles = {
        width: '300px',
        margin: 'auto'
    }

    return (
        // <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css"> 
        //  <style type="text/css">
        //     #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
        // </style> 
        <div id="mc_embed_signup" style={FormStyles}>
        <form action="https://gmail.us4.list-manage.com/subscribe/post?u=312698812cd4bb614db399586&amp;id=33beaae0ba" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
            <div id="mc_embed_signup_scroll">
            <h2>Subscribe to our Email List!</h2>
            <div className="indicates-required" style={{textAlign: 'right', fontSize: '10px', color: 'red'}}><span className="asterisk">*</span> indicates required</div>
            <div className="mc-field-group" style={{marginBottom: '25px'}}>
                <label for="mce-EMAIL">Email Address  <span className="asterisk" style={{color: 'red'}}>*</span>
            </label>
                <input onChange={onChangeHandler} type="email" value={input.EMAIL} 
                style={{width: '100%', height: '50px'}}
                name="EMAIL" className="required email" id="mce-EMAIL"/>
            </div>
            <div id="mce-responses" className="clear">
                <div className="response" id="mce-error-response" style={{display:"none"}}></div>
                <div className="response" id="mce-success-response" style={{display:"none"}}></div>
            </div>   
            <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_312698812cd4bb614db399586_33beaae0ba" tabindex="-1" value=""/></div>
            <div className="clear">
                {/* <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/> */}
                <CustomButton type="submit" id="mc-embedded-subscribe">Subscribe</CustomButton>
                </div>
            </div>
        </form>
        </div>
        // <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>
        // <script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';}(jQuery));var $mcj = jQuery.noConflict(true);</script> 
    )
}

export default ContactPage;