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
        Pages
    </div>

    <li class="nav-item">
      <router-link class="nav-link" to="/products">
        <i class="fab fa-fw fa-battle-net"></i>
        <span>Products</span>
      </router-link>
    </li>

    <li class="nav-item">
      <router-link class="nav-link" to="/brands">
        <i class="fab fa-fw fa-battle-net"></i>
        <span>Brands</span>
      </router-link>
    </li>

    <li class="nav-item">
      <router-link class="nav-link" to="/categories">
        <i class="fab fa-fw fa-battle-net"></i>
        <span>Categories</span>
      </router-link>
    </li>

    <li class="nav-item">
      <router-link class="nav-link" to="/customers">
        <i class="fas fa-fw fa-users"></i>
        <span>Customers</span>
      </router-link>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider">

    <!-- Heading -->
    <div class="sidebar-heading">
        Communication
    </div>

    <li class="nav-item">
      <router-link class="nav-link" to="/notifications">
        <i class="fas fa-fw fa-bell"></i>
        <span>Notifications</span>
      </router-link>
    </li>

    <li class="nav-item">
      <router-link class="nav-link" to="/messages">
        <i class="fas fa-fw fa-comments-dollar"></i>
        <span>Messages</span>
      </router-link>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider">

    <!-- Heading -->
    <div class="sidebar-heading">
        Payment
    </div>

    <li class="nav-item">
      <router-link class="nav-link" to="/orders">
        <i class="fas fa-fw fa-file-invoice-dollar"></i>
        <span>Orders</span>
      </router-link>
    </li>

    <li class="nav-item">
      <router-link class="nav-link" to="/profit-and-loss">
        <i class="fas fa-fw fa-balance-scale"></i>
        <span>Profit and Loss</span>
      </router-link>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider">

    <!-- Heading -->
    <div class="sidebar-heading">
        Setting
    </div>

    <li class="nav-item">
      <router-link class="nav-link" to="/setting">
        <i class="fas fa-fw fa-cogs"></i>
        <span>Setting</span>
      </router-link>
    </li>

    <NavBarBackup v-if="false" />

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
      <p class="text-center mb-2"><strong>MLIGHT</strong> is packed with premium features, components, and more!</p>
      <a class="btn btn-success btn-sm" href="https://www.linkedin.com/in/nguyenngocnam/" target="_blank">Upgrade to Pro!</a>
    </div>

  </ul>

</template>

<script>
import NavBarBackup from "@/components/layouts/navbar/NavBarBackup.vue"

export default {
  components: {
    NavBarBackup,
  },

}
</script>