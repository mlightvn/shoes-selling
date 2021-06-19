<template>
  <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

    <!-- Sidebar - Brand -->
    <router-link class="sidebar-brand d-flex align-items-center justify-content-center" to="/">
        <div
          v-if="false"
          class="sidebar-brand-icon rotate-n-15"
        >
            <i class="fab fa-btc"></i>
        </div>
        <div>
          <img src="/logo-48.png" />
        </div>
        <div class="sidebar-brand-text mx-3">Shoes <sup>★</sup></div>
    </router-link>

    <!-- Divider -->
    <hr class="sidebar-divider my-0">

    <!-- Nav Item - Dashboard -->
    <li class="nav-item active">
        <router-link class="nav-link" to="/">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span></router-link>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider">

    <!-- Heading -->
    <div class="sidebar-heading">
        Interface
    </div>

    <!-- Nav Item - Pages Collapse Menu -->
    <li class="nav-item">
        <router-link class="nav-link collapsed" to="/" data-toggle="collapse" data-target="#collapseTwo"
            aria-expanded="true" aria-controls="collapseTwo">
            <i class="fas fa-fw fa-cog"></i>
            <span>Components</span>
        </router-link>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded">
                <h6 class="collapse-header">Custom Components:</h6>
                <router-link class="collapse-item" to="buttons.html">Buttons</router-link>
                <router-link class="collapse-item" to="cards.html">Cards</router-link>
            </div>
        </div>
    </li>

    <!-- Nav Item - Utilities Collapse Menu -->
    <li class="nav-item">
        <router-link class="nav-link collapsed" to="/" data-toggle="collapse" data-target="#collapseUtilities"
            aria-expanded="true" aria-controls="collapseUtilities">
            <i class="fas fa-fw fa-wrench"></i>
            <span>Utilities</span>
        </router-link>
        <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded">
                <h6 class="collapse-header">Custom Utilities:</h6>
                <router-link class="collapse-item" to="utilities-color.html">Colors</router-link>
                <router-link class="collapse-item" to="utilities-border.html">Borders</router-link>
                <router-link class="collapse-item" to="utilities-animation.html">Animations</router-link>
                <router-link class="collapse-item" to="utilities-other.html">Other</router-link>
            </div>
        </div>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider">

    <!-- Heading -->
    <div class="sidebar-heading">
        Addons
    </div>

    <!-- Nav Item - Pages Collapse Menu -->
    <li class="nav-item">
        <router-link class="nav-link collapsed" to="/" data-toggle="collapse" data-target="#collapsePages"
            aria-expanded="true" aria-controls="collapsePages">
            <i class="fas fa-fw fa-folder"></i>
            <span>Pages</span>
        </router-link>
        <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded">
                <h6 class="collapse-header">Login Screens:</h6>
                <router-link class="collapse-item" to="login.html">Login</router-link>
                <router-link class="collapse-item" to="register.html">Register</router-link>
                <router-link class="collapse-item" to="forgot-password.html">Forgot Password</router-link>
                <div class="collapse-divider"></div>
                <h6 class="collapse-header">Other Pages:</h6>
                <router-link class="collapse-item" to="404.html">404 Page</router-link>
                <router-link class="collapse-item" to="blank.html">Blank Page</router-link>
            </div>
        </div>
    </li>

    <!-- Nav Item - Charts -->
    <li class="nav-item">
      <router-link class="nav-link" to="charts.html">
        <i class="fas fa-fw fa-chart-area"></i>
        <span>Charts</span>
      </router-link>
    </li>

    <!-- Nav Item - Tables -->
    <li class="nav-item">
      <router-link class="nav-link" to="tables.html">
        <i class="fas fa-fw fa-table"></i>
        <span>Tables</span>
      </router-link>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider d-none d-md-block">

    <!-- Sidebar Toggler (Sidebar) -->
    <div class="text-center d-none d-md-inline">
      <button class="rounded-circle border-0" id="sidebarToggle"></button>
    </div>

    <!-- Sidebar Message -->
    <div class="sidebar-card d-none d-lg-flex"
        v-if="false"
    >
      <img class="sidebar-card-illustration mb-2" src="@/assets/images/layouts/undraw_rocket.svg" alt="...">
      <p class="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
      <a class="btn btn-success btn-sm" href="https://www.linkedin.com/in/nguyenngocnam/" target="_blank">Upgrade to Pro!</a>
    </div>

  </ul>

</template>
