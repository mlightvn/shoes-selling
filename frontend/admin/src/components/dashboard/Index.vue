<template>
  <!-- Page Heading -->
  <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
      <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
              class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
  </div>

  <!-- Content Row -->
  <div class="row">

    <EarningsMonthly />
    <EarningsAnnual />
    <Tasks />
    <PendingRequests />


  </div>

  <EarningsOverview />
  <Projects />

</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import EarningsMonthly from "@/components/dashboard/EarningsMonthly"
import EarningsAnnual from "@/components/dashboard/EarningsAnnual"
import Tasks from "@/components/dashboard/Tasks"
import PendingRequests from "@/components/dashboard/PendingRequests"
import EarningsOverview from "@/components/dashboard/EarningsOverview"
import Projects from "@/components/dashboard/Projects"

@Options({
  props: {
    msg: String,
  },
  components: {
    EarningsMonthly,
    EarningsAnnual,
    Tasks,
    PendingRequests,
    EarningsOverview,
    Projects,
  }
})
export default class Dashboard extends Vue {
  msg!: string;
}
</script>
