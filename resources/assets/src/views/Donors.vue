<template>
  <div>
    <h4 class="py-3 mb-4">
      <b-breadcrumb :items="projectPath" class="font-weight-bold m-0" />
    </h4>
    <div class="card">
      <div class="card-body">
        <v-server-table
          :columns="[
            'f_name',
            'l_name',
            'email',
            'donations_count',
            'country.name',
          ]"
          :options="options"
          url="/api/donors"
        >
          <template slot="f_name" slot-scope="props">
            <router-link :to="'/donors/' + props.row.id">{{
              props.row.f_name
            }}</router-link>
          </template>
          <template slot="l_name" slot-scope="props">
            <router-link :to="'/donors/' + props.row.id">{{
              props.row.l_name
            }}</router-link>
          </template>
        </v-server-table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      projectPath: [{ text: "Donors", to: "/donors" }],
      options: {
        debounce: 1000,
        perPage: 50,
        skin: "table b-table table-hover",
        headings: {
          f_name: "First Name",
          l_name: "Last Name",
          "country.name": "Country",
        },
        texts: this.$store.state.VueTable.texts,
        sortIcon: this.$store.state.VueTable.sortIcon,
      },
    };
  },
  mounted() {},
  methods: {},
};
</script>