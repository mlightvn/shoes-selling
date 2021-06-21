<template>
  <div class="home">

    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
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

  </div>
</template>

<script>
import EarningsMonthly from "@/components/dashboard/EarningsMonthly.vue";
import EarningsAnnual from "@/components/dashboard/EarningsAnnual.vue";
import Tasks from "@/components/dashboard/Tasks.vue";
import PendingRequests from "@/components/dashboard/PendingRequests.vue";
import EarningsOverview from "@/components/dashboard/EarningsOverview.vue";
import Projects from "@/components/dashboard/Projects.vue";

export default {
  components: {
    EarningsMonthly,
    EarningsAnnual,
    Tasks,
    PendingRequests,
    EarningsOverview,
    Projects,
  },

}
</script>
