<template>
	<!-- section footer start -->
    <div class="section_footer">
    	<div class="container">
    		<div class="mail_section">
    			<div class="row">
    				<div class="col-sm-6 col-lg-2">
    					<div><a href="/"><img src="/img/icons/logo_64.png"></a></div>
    				</div>
    				<div class="col-sm-6 col-lg-2">
    					<div class="footer-logo"><img src="images/phone-icon.png"><span class="map_text">(+81) 1234567890</span></div>
    				</div>
    				<div class="col-sm-6 col-lg-3">
    					<div class="footer-logo"><img src="images/email-icon.png"><span class="map_text">nguyennam@mlight.vn</span></div>
    				</div>
    				<div class="col-sm-6 col-lg-3">
    					<div class="social_icon">
    						<ul>
    							<li><a :href="appConfig.author.social.linkedin.url" target="_blank" class="social-link"><i :class="appConfig.author.social.linkedin.icon"></i></a></li>
    							<li><a :href="appConfig.author.social.stackOverflow.url" target="_blank" class="social-link"><i :class="appConfig.author.social.stackOverflow.icon"></i></a></li>
    							<li><a :href="appConfig.author.social.github.url" target="_blank" class="social-link"><i :class="appConfig.author.social.github.icon"></i></a></li>
    						</ul>
    					</div>
    				</div>
    				<div class="col-sm-2"></div>
    			</div>
    	    </div> 
    	    <div class="footer_section_2">
		        <div class="row">
    		        <div class="col-sm-4 col-lg-2">
    		        	<p class="dummy_text"> Shoes selling e-commerce site</p>
    		        </div>
    		        <div class="col-sm-4 col-lg-2">
    		        	<h2 class="shop_text">Address </h2>
    		        	<div class="image-icon"><img src="images/map-icon.png"><span class="pet_text">120-0005、東京都足立区綾瀬6-13-12</span></div>
    		        </div>
    		        <div class="col-sm-4 col-md-6 col-lg-3">
    				    <h2 class="shop_text">Our Company </h2>
    				    <div class="delivery_text">
    				    	<ul>
    				    		<li>Delivery</li>
    				    		<li>Legal Notice</li>
    				    		<li><router-link to="/about" class="social-link">About us</router-link></li>
    				    		<li>Secure payment</li>
    				    		<li><router-link to="/contact" class="social-link">Contact us</router-link></li>
    				    	</ul>
    				    </div>
    		        </div>
					<div class="col-sm-6 col-lg-3">
						<h2 class="adderess_text">Products</h2>
						<div class="delivery_text">
    				    	<ul>
    				    		<li>Prices drop</li>
    				    		<li>New products</li>
    				    		<li>Best sales</li>
    				    		<li><router-link to="/contact" class="social-link">Contact us</router-link></li>
    				    		<li>Sitemap</li>
    				    	</ul>
    				    </div>
					</div>
					<div
						class="col-sm-6 col-lg-2"
					>
						<h2 class="adderess_text">Newsletter</h2>
						<div class="form-group">
							<input type="text" class="enter_email" placeholder="Enter Your email" name="Name">
						</div>
						<button class="subscribr_bt" type="button" disabled>Subscribe</button>
					</div>
    			</div>
	        </div>
    	</div>
    </div>
	<!-- section footer end -->

	<div class="copyright">2021 &copy; All Rights Reserved. <a href="https://www.linkedin.com/in/nguyenngocnam/" target="_blank">Nguyen Ngoc Nam</a></div>

</template>

<script>
import AppConfig from "@/config/default.js";

export default {
	data(){
		return {
			appConfig: AppConfig,
		}
	}
}
</script>

<style scoped>
.social-link{
	color: #ffffff;
}

.social-link > i{
	font-size: 30px;
}
</style>