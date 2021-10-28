<template>
  <div>
    <h4 class="py-3 mb-4">
      <b-breadcrumb :items="projectPath" class="font-weight-bold m-0" />
    </h4>
    <div class="row">
      <div class="col-lg-4">
        <div class="card mb-4">
          <div class="card-body">
            <div class="media">
              <div class="media-body pt-2 ml-3">
                <h5 class="mb-2">
                  {{ donor.full_name }}
                  <a
                    :href="'mailto:' + donor.email"
                    class="btn btn-default icon-btn md-btn-flat rounded-pill btn-sm"
                  >
                    <i class="ion ion-md-mail"></i>
                  </a>
                </h5>
                <div class="mt-3"></div>
              </div>
            </div>
          </div>
          <hr class="border-light m-0" />
          <div class="card-body">
            <div class="mb-2">
              <span class="text-muted">Email:</span>&nbsp; {{ donor.email }}
            </div>
            <div class="mb-2">
              <span class="text-muted">Country:</span>&nbsp;<span
                v-if="donor.country"
              >
                {{ donor.country.name }}
              </span>
            </div>
            <div class="mb-4">
              <span class="text-muted">Phone:</span>&nbsp; {{ donor.phone }}
            </div>
          </div>
        </div>
        <div
          class="card"
          v-if="donor.recurrings && donor.recurrings.length > 0"
        >
          <div class="card-header">
            <h4 class="mb-0">Recurring Donations</h4>
          </div>
          <v-client-table
            :data="donor.recurrings"
            :columns="columns"
            :options="options"
          >
            <template slot="active" slot-scope="props">
              <div>
                {{ props.row.active == 1 ? "yes" : "no" }}
              </div>
            </template>
          </v-client-table>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="card">
          <div class="card-header">
            <h4 class="mb-0">Donations</h4>
          </div>
          <donations-table :donor_id="donor.id" v-if="donor.id" />
        </div>
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
  data() {
    return {
      projectPath: [
        { text: "Donors", to: "/donors" },
        { text: "", active: true },
      ],
      columns: ["amount", "day_of_month", "counter", "active"],
      headings: {
        counter: "# Donations",
      },
      options: {
        skin: "table b-table table-hover",
        filterable: false,
        perPage: 20,
        perPageValues: [20],
      },

      donor: {},
    };
  },
  mounted() {
    this.getDonor();
  },
  watch: {
    $route() {
      this.getDonor();
    },
  },
  methods: {
    getDonor() {
      let self = this;
      axios.get("/api/donors/" + this.$route.params.id).then(function (data) {
        self.donor = data.data;
        self.projectPath[1].text = self.donor.full_name;
      });
    },
  },
};
</script>