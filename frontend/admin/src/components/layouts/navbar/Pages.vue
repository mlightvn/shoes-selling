<template>
    <!-- Nav Item - Pages Collapse Menu -->
    <li class="nav-item">
        <a class="nav-link collapsed" href="javascript:void(0)" data-toggle="collapse" data-target="#collapsePages"
            aria-expanded="true" aria-controls="collapsePages"
        >
            <i class="fas fa-fw fa-folder"></i>
            <span>Pages</span>
        </a>
        <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded">
                <h6 class="collapse-header">Login Screens:</h6>
                <router-link class="collapse-item" to="/auth/login">Login</router-link>
                <router-link class="collapse-item" to="/auth/register">Register</router-link>
                <router-link class="collapse-item" to="/auth/forgot-password">Forgot Password</router-link>
                <div class="collapse-divider"></div>
                <h6 class="collapse-header">Other Pages:</h6>
                <router-link class="collapse-item" to="/404">404 Page</router-link>
                <router-link class="collapse-item" to="/blank">Blank Page</router-link>
            </div>
        </div>
    </li>

</template>