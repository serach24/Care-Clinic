import React from 'react';
import {useStyles} from './styles';
import Divider from '@material-ui/core/Divider';
function Footer(){
    const classes = useStyles();

    return (
        
    <div className={classes.footer}>
        {/* <Divider/> */}
		<div className={classes.footerText}>Copyright ©
			2020
			All rights reserved.</div>
		{/* <div class="ac-gf-footer-legal-links">
			<a class="ac-gf-footer-legal-link" href="/ca/legal/privacy/" data-analytics-title="privacy policy">Privacy Policy</a>
			<a class="ac-gf-footer-legal-link" href="/ca/legal/privacy/en-ww/cookies/" data-analytics-title="use of cookies">Use of Cookies</a>
			<a class="ac-gf-footer-legal-link" href="/ca/legal/internet-services/terms/site.html" data-analytics-title="terms of use">Terms of Use</a>
			<a class="ac-gf-footer-legal-link" href="/ca/shop/goto/help/sales_refunds" data-analytics-title="sales and refunds">Sales and Refunds</a>
			<a class="ac-gf-footer-legal-link" href="/ca/legal/" data-analytics-title="legal">Legal</a>
			<a class="ac-gf-footer-legal-link" href="/ca/sitemap/" data-analytics-title="site map">Site Map</a>
		</div> */}
	</div>
    )
}



export default Footer;