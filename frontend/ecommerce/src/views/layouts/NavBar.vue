<template>
  <div class="header_section">
    <div class="container">
      <div class="row">
        <div class="col-sm-3">
          <div class="logo"><router-link to="/"><img src="/img/icons/logo_48.png"></router-link></div>
        </div>
        <div class="col-sm-9">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <router-link class="nav-item nav-link" to="/">Home</router-link>
                <router-link class="nav-item nav-link" to="/collection">Collection</router-link>
                <router-link class="nav-item nav-link" to="/categories/shoes">Shoes</router-link>
                <router-link class="nav-item nav-link" to="/categories/racing-boots">Racing Boots</router-link>
                <router-link class="nav-item nav-link" to="/contact">Contact</router-link>
                <router-link class="nav-item nav-link last" to="/products"><img src="images/search_icon.png"></router-link>
                <router-link class="nav-item nav-link last" to="/cart"><img src="images/shop_icon.png"></router-link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>

</template>