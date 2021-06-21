<template>
  <div class="layout_padding contact_section">
      <div class="container">
          <h1 class="new_text"><strong>Contact Now</strong></h1>
      </div>
      <div class="container-fluid ram">
          <div class="row">
              <div class="col-md-6">
                  <div class="email_box">
                      <div class="input_main">
                          <div class="container">
                              <form action="/action_page.php">
                                  <div class="form-group">
                                      <input type="text" class="email-bt" placeholder="Name" name="name">
                                  </div>
                                  <div class="form-group">
                                      <input type="tel" class="email-bt" placeholder="Phone Number" name="tel">
                                  </div>
                                  <div class="form-group">
                                      <input type="email" class="email-bt" placeholder="Email" name="email">
                                  </div>

                                  <div class="form-group">
                                      <textarea class="massage-bt" placeholder="Message" rows="5" id="comment" name="message"></textarea>
                                  </div>
                              </form>
                          </div>
                          <div class="send_btn">
                              <button class="main_bt">Send</button>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="shop_banner">
                      <div class="our_shop">
                          <button class="out_shop_bt">Our Shop</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>
