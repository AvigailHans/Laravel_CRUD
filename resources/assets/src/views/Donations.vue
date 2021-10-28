<template>
  <div>
    <h4 class="py-3 mb-4">
      <!-- <button class="btn btn-success float-right">
        <i aria-hidden="true" class="ion ion-ios-download"></i>
        Download
      </button> -->
      <b-breadcrumb :items="projectPath" class="font-weight-bold m-0" />
    </h4>
    <div class="card">
      <div class="card-body">
        <donations-table />
      </div>
    </div>
  </div>
</template>

<script>
import DonationsTable from "../components/DonationsTable";
export default {
  components: {
    DonationsTable,
  },
  props: {},
  data() {
    return {
      projectPath: [{ text: "Donations", to: "/donations" }],
    };
  },
  mounted() {},
  methods: {},
  computed: {},
};
</script>