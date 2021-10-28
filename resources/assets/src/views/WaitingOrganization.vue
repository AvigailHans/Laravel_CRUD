<template>
  <div>
    <v-client-table :data="organizations" :columns="columns" :options="options">
      <template slot="name" slot-scope="props">
        <div>
          <router-link :to="'/applied-organization/' + props.row.id">
            {{ props.row.name }}
          </router-link>
        </div>
      </template>
    </v-client-table>
  </div>
</template>

<script>
export default {
  name: "WaitingOrganization",
  metaInfo: {
    title: "WaitingOrganization",
  },
  components: {},
  mounted() {
    let self = this;
    axios.get("/api/waiting_organizations").then(function (response) {
      self.organizations = response.data;
    });
  },
  data: () => ({
    organizations: [],
    index: null,
    organization: {},
    columns: ["name"],
    options: {
      filterable: false,
      perPage: 50,
      perPageValues: [50],
    },
    delID: null,
  }),
  methods: {
    show_organization(index) {
      this.organization = this.organizations[index - 1];
      this.index = index;
    },
    update_status(status) {},
  },
};
</script>
