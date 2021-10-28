<template>
  <div>
    <h5 class="py-3 mb-4">
      <b-breadcrumb :items="projectPath" class="font-weight-bold m-0" />
    </h5>
    <div class="card mb-3" v-if="donation">
      <div class="row no-gutters row-bordered">
        <div class="d-flex col-md align-items-center">
          <div class="card-body d-block text-body">
            <div class="text-muted small line-height-1">Amount</div>
            <span class="text-xlarge">
              {{ donation.currency.symbol + donation.amount }}
            </span>
            <span class="small">
              <div
                class="badge badge-pill badge-default badge-sm"
                v-if="donation.refund_of"
              >
                <router-link :to="'/donations/' + donation.refund_of.id"
                  ><i class="ion ion-ios-undo"></i> Refund</router-link
                >
              </div>
              <div
                class="badge badge-pill badge-default badge-sm"
                v-if="donation.refunds && donation.refunds.length > 0"
              >
                <i class="ion ion-ios-undo"></i> Refunded
              </div>
              <div
                class="badge badge-pill badge-default badge-sm"
                v-if="donation.captured == 0"
              >
                <i class="ion ion-ios-time"></i> Uncaptured
              </div>
              <div class="badge badge-pill badge-success badge-sm" v-else>
                <i class="ion ion-ios-checkmark-circle-outline"></i> Captured
              </div>
            </span>
          </div>
        </div>
        <div class="d-flex col-md align-items-center">
          <div class="card-body d-block text-body">
            <div class="text-muted small line-height-1">Donor</div>
            <div class="text-xlarge">
              <router-link :to="'/donors/' + donation.donor.id">
                {{ donation.donor.full_name }}
              </router-link>
            </div>
          </div>
        </div>
        <div class="d-flex col-md align-items-center">
          <div class="card-body d-block text-body">
            <div class="text-muted small line-height-1">Date</div>
            <div class="text-xlarge">
              {{ donation.created_at | moment("MMM Do YY, h:mm:ss a") }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <div class="card" v-if="donation">
          <div class="card-header px-2">
            <h5 class="mb-0">Donation Details</h5>
          </div>
          <table class="table m-0">
            <tbody>
              <tr>
                <th>Amount:</th>
                <td>{{ donation.amount }}</td>
              </tr>
              <tr v-if="donation.currency">
                <th>Currency</th>
                <td>{{ donation.currency.currency }}</td>
              </tr>
              <tr>
                <th>Date:</th>
                <td>
                  {{ donation.created_at | moment("MMM Do YY, h:mm:ss a") }}
                </td>
              </tr>
              <tr>
                <th>Note:</th>
                <td>{{ donation.notes }}</td>
              </tr>
              <tr>
                <th>Organization:</th>
                <td>
                  <router-link
                    :to="'/organizations/' + donation.organization.id"
                    v-if="donation.organization"
                    >{{ donation.organization.name }}</router-link
                  >
                </td>
              </tr>
              <tr>
                <th>Gateway:</th>
                <td>
                  {{ donation.gateway }}
                </td>
              </tr>
              <tr>
                <th>Account:</th>
                <td>
                  <template v-if="donation.stripe_account">{{
                    donation.stripe_account.name
                  }}</template>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          class="card mt-3"
          v-if="donation && donation.fees && donation.fees.length"
        >
          <div class="card-header px-2">
            <h5 class="mb-0">Donation Fee</h5>
          </div>
          <table class="table m-0">
            <tbody>
              <tr>
                <th>Amount</th>
                <th>Currency</th>
                <th>Application</th>
              </tr>
              <tr v-for="fee in donation.fees" :key="fee.id">
                <td>{{ fee.amount }}</td>
                <td>{{ fee.currency }}</td>
                <td>{{ fee.note }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="card mt-3" v-if="donation && donation.refund_of">
          <div class="card-header px-2">
            <h5 class="mb-0">
              Original Donation
              <router-link
                :to="'/donations/' + donation.refund_of.id"
                class="float-right"
                ><i aria-hidden="true" class="ion ion-ios-eye"></i
              ></router-link>
            </h5>
          </div>
          <table class="table m-0">
            <tbody>
              <tr>
                <th>Amount</th>
                <th>Currency</th>
              </tr>
              <tr>
                <td>{{ donation.refund_of.amount }}</td>
                <td>{{ donation.refund_of.currency.currency }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          class="card mt-3"
          v-if="donation.refunds && donation.refunds.length > 0"
        >
          <div class="card-header px-2">
            <h5 class="mb-0">Refunds</h5>
          </div>
          <table class="table m-0">
            <tbody>
              <tr>
                <th>Amount</th>
                <th>Currency</th>
                <th>Date</th>
              </tr>
              <tr v-for="refund in donation.refunds" :key="refund.id">
                <td>
                  <router-link
                    :to="'/donations/' + refund.id"
                    class="float-right"
                  >
                    {{ refund.amount }}
                  </router-link>
                </td>
                <td>{{ refund.currency.currency }}</td>
                <td>
                  {{ refund.created_at | moment("MMM Do YY, h:mm:ss a") }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="card mt-3" v-if="donation">
          <div class="card-header px-2"><h5 class="mb-0">Donor</h5></div>
          <table class="table user-view-table m-0">
            <tbody>
              <tr>
                <th>Name:</th>
                <td>
                  <router-link :to="'/donors/' + donation.donor.id">{{
                    donation.donor.full_name
                  }}</router-link>
                </td>
              </tr>
              <tr>
                <th>E-mail:</th>
                <td>{{ donation.donor.email }}</td>
              </tr>
              <tr>
                <th>Country:</th>
                <td>
                  <span v-if="donation.donor.country">{{
                    donation.donor.country.name
                  }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-6">
        <div class="card" v-if="donation">
          <hr class="border-light m-0" />
          <div class="card-header px-2">
            <h5 class="mb-0">Advanced Details</h5>
          </div>
          <table class="table user-view-table m-0">
            <tbody>
              <tr>
                <th>ID</th>
                <td>
                  <a
                    target="_blank"
                    :href="
                      'https://dashboard.stripe.com/payments/' +
                      donation.transaction_id
                    "
                    v-if="donation.gateway == 'Stripe'"
                    >{{ donation.transaction_id }}</a
                  >
                  <a
                    target="_blank"
                    :href="
                      'https://www.paypal.com/activity/payment/' +
                      donation.transaction_id
                    "
                    v-else-if="donation.gateway == 'PayPal'"
                    >{{ donation.transaction_id }}</a
                  >
                  <template v-else>
                    {{ donation.transaction_id }}
                  </template>
                </td>
              </tr>
              <tr>
                <th>Status</th>
                <td>{{ donation.status }}</td>
              </tr>
              <tr>
                <th>Type</th>
                <td>{{ donation.transaction_type }}</td>
              </tr>
              <tr>
                <th>Uploaded</th>
                <td>{{ donation.uploaded }}</td>
              </tr>
              <tr>
                <th>Platform</th>
                <td>{{ donation.platform }}</td>
              </tr>
              <tr>
                <th>Organization Code</th>
                <td>{{ donation.code }}</td>
              </tr>
              <tr>
                <th>Organization Country</th>
                <td>{{ donation.country }}</td>
              </tr>
              <tr>
                <th>raw</th>
                <td>
                  <vue-json-pretty
                    :data="JSON.parse(donation.raw)"
                    :highlightMouseoverNode="true"
                    :showLength="true"
                    style="height: 400px"
                    :virtual="true"
                    :virtualLines="10"
                    :deep="1"
                  >
                  </vue-json-pretty>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueJsonPretty from "vue-json-pretty";
import "vue-json-pretty/lib/styles.css";
export default {
  components: {
    VueJsonPretty,
  },
  data() {
    return {
      projectPath: [
        { text: "Donations", to: "/donations" },
        { text: "", active: true },
      ],
      donation: false,
    };
  },
  mounted() {
    this.getDonation();
  },
  watch: {
    $route() {
      this.getDonation();
    },
  },

  methods: {
    getDonation() {
      let self = this;
      axios
        .get("/api/donations/" + this.$route.params.id)
        .then(function (data) {
          self.donation = data.data;
          self.projectPath[1].text =
            self.donation.donor.full_name +
            " | " +
            self.donation.currency.symbol +
            self.donation.amount;
        });
    },
  },
};
</script>
<style scoped>
table th {
  font-weight: bold !important;
  width: 200px;
}
</style>
<style>
.vjs-tree {
  font-size: 12px !important;
}
.vjs-tree {
  overflow: auto;
}
</style>