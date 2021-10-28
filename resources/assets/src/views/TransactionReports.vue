<template>
  <div>
    <h4 class="py-3 mb-4">
      <router-link
        to="/transaction_reports/new"
        class="btn btn-success float-right"
      >
        <i aria-hidden="true" class="ion ion-ios-add-circle-outline"></i>
        New
      </router-link>
      <b-breadcrumb :items="projectPath" class="font-weight-bold m-0" />
    </h4>
    <v-server-table
      :columns="['name', 'date', 'count', 'amount', 'country', 'signers_count']"
      :options="options"
      url="/api/transaction_reports"
    >
      <template slot="name" slot-scope="props">
        <router-link :to="'/transaction_reports/' + props.row.id">{{
          props.row.name
        }}</router-link>
      </template>
      <template slot="signers_count" slot-scope="props">
        {{ props.row.signers_count }} of {{ props.row.users }}
      </template>
    </v-server-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projectPath: [
        { text: "Transaction Reports", to: "/transaction_reports" },
      ],
      options: {
        rowClassCallback: (row) => {
          if (row.users == row.signers_count) {
            return "table-success";
          } else if (row.signers_count == 0) {
            return "table-danger";
          } else if (row.signers_count < row.users) {
            return "table-warning";
          }
        },

        skin: "table b-table table-hover",
        perPage: 50,
        headings: {},
        texts: this.$store.state.VueTable.texts,
        sortIcon: this.$store.state.VueTable.sortIcon,
      },
    };
  },
  mounted() {},
  methods: {},
};
</script>