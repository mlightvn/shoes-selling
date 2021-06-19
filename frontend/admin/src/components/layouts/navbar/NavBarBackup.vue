<template>

    <!-- Divider -->
    <hr class="sidebar-divider">

    <!-- Heading -->
    <div class="sidebar-heading">
        Interface
    </div>

    <!-- Nav Item - Pages Collapse Menu -->
    <li class="nav-item">
        <a class="nav-link collapsed" href="javascript:void(0)" data-toggle="collapse" data-target="#collapseTwo"
            aria-expanded="true" aria-controls="collapseTwo">
            <i class="fas fa-fw fa-cog"></i>
            <span>Components</span>
        </a>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded">
                <h6 class="collapse-header">Custom Components:</h6>
                <router-link class="collapse-item" to="/buttons">Buttons</router-link>
                <router-link class="collapse-item" to="/cards">Cards</router-link>
            </div>
        </div>
    </li>

    <!-- Nav Item - Utilities Collapse Menu -->
    <li class="nav-item">
        <a class="nav-link collapsed" href="javascript:void(0)" data-toggle="collapse" data-target="#collapseUtilities"
            aria-expanded="true" aria-controls="collapseUtilities">
            <i class="fas fa-fw fa-wrench"></i>
            <span>Utilities</span>
        </a>
        <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded">
                <h6 class="collapse-header">Custom Utilities:</h6>
                <router-link class="collapse-item" to="/utilities-color">Colors</router-link>
                <router-link class="collapse-item" to="/utilities-border">Borders</router-link>
                <router-link class="collapse-item" to="/utilities-animation">Animations</router-link>
                <router-link class="collapse-item" to="/utilities-other">Other</router-link>
            </div>
        </div>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider">

    <!-- Heading -->
    <div class="sidebar-heading">
        Addons
    </div>

    <Pages />

    <!-- Nav Item - Charts -->
    <li class="nav-item">
      <router-link class="nav-link" to="charts">
        <i class="fas fa-fw fa-chart-area"></i>
        <span>Charts</span>
      </router-link>
    </li>

    <!-- Nav Item - Tables -->
    <li class="nav-item">
      <router-link class="nav-link" to="tables">
        <i class="fas fa-fw fa-table"></i>
        <span>Tables</span>
      </router-link>
    </li>

</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Pages from "@/components/layouts/navbar/Pages.vue"

@Options({
  components: {
    Pages,
  },
})
export default class NavBarBackup extends Vue {}
</script>