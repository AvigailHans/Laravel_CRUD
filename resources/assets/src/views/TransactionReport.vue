<template>
  <div>
    <div v-if="$store.state.user.level == 80" class="p-5">
      <h4 class="py-3 mb-4">
        <b-breadcrumb :items="projectPath" class="font-weight-bold m-0" />
      </h4>
      <b-card>
        <h5 class="mt-5">Amounts</h5>
        <table class="table b-table table-hover" id="data-table">
          <thead>
            <tr>
              <th>Organization</th>
              <th>Amount</th>
              <th>Note</th>
              <th>
                <b-check v-model="selectAll"></b-check>
              </th>
            </tr>
          </thead>
          <tr v-for="amount in transaction_report.amounts" :key="amount.id">
            <td>{{ amount.organization.name }}</td>
            <td>{{ amount.amount }}</td>
            <td>{{ amount.note }}</td>
            <td>
              <b-check :value="amount.id" v-model="amounts_selected"></b-check>
            </td>
          </tr>
          <tfoot>
            <th>Total:</th>
            <th>{{ total }}</th>
            <th>Total Selected</th>
            <th>{{ totalSelected }}</th>
          </tfoot>
        </table>
        <nav class="layout-footer footer bg-footer-theme px-5 py-3">
          <ladda-btn
            v-if="!signed"
            :loading="processing"
            @click.native="sign"
            data-style="expand-right"
            class="btn btn-success btn-lg float-right"
          >
            <i
              aria-hidden="true"
              class="ion ion-ios-checkmark-circle-outline"
            ></i>
            Sign
          </ladda-btn>
          <div v-else class="float-right badge badge-success badge-pill">
            Signed!
          </div>
          <div class="clearfix"></div>
        </nav>
      </b-card>
    </div>
    <template v-else>
      <div class="print-only">
        <h1>
          {{ transaction_report.name }}
        </h1>
        <h3>{{ transaction_report.date }}</h3>
        <table class="table b-table table-hover">
          <thead>
            <tr>
              <th>Organization</th>
              <th>Amount</th>
              <th>Note</th>
            </tr>
          </thead>
          <tr v-for="amount in transaction_report.amounts" :key="amount.id">
            <td>{{ amount.organization.name }}</td>
            <td>{{ amount.amount }}</td>
            <td>{{ amount.note }}</td>
          </tr>
          <tfoot>
            <th>Total:</th>
            <th>{{ total }}</th>
            <th></th>
          </tfoot>
        </table>
        <hr />
        <div class="row">
          <div class="col-6">
            <h5>Signed</h5>
            <ol>
              <li v-for="signer in transaction_report.signers" :key="signer.id">
                <b>{{ signer.user.name }}</b> signed @
                {{ signer.created_at | moment("MM/DD/YY hh:mm") }}
              </li>
            </ol>
          </div>
          <div class="col-6">
            <h5>Not signed yet</h5>
            <ol>
              <li
                v-for="signer in transaction_report.not_signed"
                :key="signer.id"
              >
                {{ signer.name }}
              </li>
            </ol>
          </div>
        </div>
      </div>
      <h4 class="py-3 mb-4 no-print">
        <router-link
          to="/transaction_reports/new"
          class="btn btn-success float-right"
        >
          <i aria-hidden="true" class="ion ion-ios-add-circle-outline"></i>
          New
        </router-link>
        <a
          href="#"
          class="btn btn-primary float-right mr-2"
          @click.prevent="printReport"
        >
          <i aria-hidden="true" class="ion ion-ios-print"></i>
          Print
        </a>
        <b-breadcrumb :items="projectPath" class="font-weight-bold m-0" />
      </h4>
      <b-card class="no-print">
        <b-form-row>
          <b-form-group label="Name" class="col-md-5">
            <b-input v-model="transaction_report.name" />
          </b-form-group>
          <b-form-group label="date" class="col-md-5">
            <b-form-datepicker
              v-model="transaction_report.date"
              :date-format-options="{
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
              }"
            />
          </b-form-group>
          <b-form-group label="Country" class="col-md-2">
            <select v-model="transaction_report.country" class="custom-select">
              <option value="can">Canada</option>
              <option value="us">USA</option>
            </select>
          </b-form-group>
        </b-form-row>
        <h5 class="mt-5">Amounts</h5>
        <b-form-row
          class="border-bottom mb-3"
          v-for="(amount, index) in transaction_report.amounts"
          :key="amount.id"
        >
          <b-form-group
            label="Organization"
            class="col-md-3"
            label-class="pr-md-4"
          >
            <multiselect
              v-model="amount.organization"
              :options="$store.state.data.organizations"
              :show-labels="true"
              label="name"
              placeholder="Select Organization"
            />
          </b-form-group>
          <b-form-group label="Amount" class="col-md-3" label-class="pr-md-4">
            <b-input type="number" v-model="amount.amount" />
          </b-form-group>
          <b-form-group label="Note" class="col" label-class="pr-md-4">
            <textarea
              class="form-control"
              v-model="amount.note"
              rows="1"
            ></textarea>
          </b-form-group>
          <b-form-group
            class="col-md-2"
            v-if="
              !transaction_report.signers ||
              transaction_report.signers.length == 0
            "
          >
            <button
              @click="removeAmount(index)"
              v-if="transaction_report.amounts.length > 1"
              class="btn btn-outline-danger icon-btn borderless mt-4"
            >
              <i class="ion ion-ios-remove-circle-outline"></i>
            </button>
            <button
              @click="addAmount"
              v-if="index == transaction_report.amounts.length - 1"
              class="btn btn-outline-success icon-btn borderless mt-4"
            >
              <i class="ion ion-ios-add-circle-outline"></i>
            </button>
          </b-form-group>
          <div
            class="col-12 mb-3"
            v-if="amount.signers && amount.signers.length > 0"
          >
            <div class="d-flex flex-wrap text-success">
              <div class="m-0">Signed by:</div>
              <div
                class="ml-2"
                v-for="signer in amount.signers"
                :key="signer.id"
              >
                <b>{{ signer.user.name }}</b>
              </div>
            </div>
          </div>
        </b-form-row>
        <div class="mb-5"><b>Total: </b>{{ total }}</div>
        <hr />
        <div class="row">
          <div class="col-6">
            <h5>Signed</h5>
            <ol>
              <li v-for="signer in transaction_report.signers" :key="signer.id">
                <b>{{ signer.user.name }}</b> signed @
                {{ signer.created_at | moment("MM/DD/YY hh:mm") }}
              </li>
            </ol>
          </div>
          <div class="col-6">
            <h5>Not signed yet</h5>
            <ol>
              <li
                v-for="signer in transaction_report.not_signed"
                :key="signer.id"
              >
                {{ signer.name }}
              </li>
            </ol>
          </div>
        </div>
        <nav class="layout-footer footer bg-footer-theme">
          <div class="container-fluid container-p-x p-3">
            <ladda-btn
              :loading="send_processing"
              @click.native="sendTosign"
              data-style="expand-right"
              class="btn btn-success btn-lg ml-2"
            >
              <i aria-hidden="true" class="ion ion-ios-send"></i>
              Send to Signers
            </ladda-btn>
            <ladda-btn
              v-if="
                !transaction_report.signers ||
                transaction_report.signers.length == 0
              "
              :loading="processing"
              @click.native="save"
              data-style="expand-right"
              class="btn btn-success btn-lg float-right"
            >
              <i
                aria-hidden="true"
                class="ion ion-ios-checkmark-circle-outline"
              ></i>
              Save
            </ladda-btn>
            <div class="clearfix"></div>
          </div>
        </nav>
      </b-card>
    </template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      signed: false,
      printMode: false,
      amounts_selected: [],
      projectPath: [
        { text: "Transaction Reports", to: "/transaction_reports" },
        { text: "", active: true },
      ],
      transaction_report: {},
      processing: false,
      send_processing: false,
    };
  },
  mounted() {
    this.getReport();
  },
  watch: {
    $route() {
      this.getReport();
    },
  },
  methods: {
    printReport() {
      this.printMode = true;
      window.print();
      this.printMode = false;
    },
    getReport() {
      let self = this;
      axios
        .get("/api/transaction_reports/" + this.$route.params.id)
        .then(function (response) {
          self.transaction_report = response.data;
          // if (self.amounts_selected) {
          //   self.amounts_selected = JSON.stringify(
          //     JSON.parse(self.amounts_selected),
          //     null,
          //     2
          //   );
          // } else {
          //   self.amounts_selected = [];
          // }
          if (self.$store.state.user.level == 80) {
            self.projectPath[1].text =
              self.transaction_report.name +
              " @" +
              self.transaction_report.date;
          } else {
            self.projectPath[1].text = self.transaction_report.name;
          }
          self.signed = self.transaction_report.signers.some(
            (signer) => signer.user_id === self.$store.state.user.id
          );

          if (self.transaction_report.amounts.length == 0) {
            self.transaction_report.amounts.push({
              organization: {
                id: 0,
              },
              amount: 0,
            });
          }
        });
    },
    addAmount() {
      this.transaction_report.amounts.push({
        organization: {
          id: 0,
        },
        amount: 0,
      });
    },
    removeAmount(index) {
      this.transaction_report.amounts.splice(index, 1);
    },
    sendTosign() {
      axios
        .get(
          "/api/transaction_reports/" + this.$route.params.id + "/send_to_sign"
        )
        .then();
    },
    sign() {
      let self = this;
      axios
        .post(
          "/api/transaction_reports/" + this.$route.params.id + "/sign",
          self.amounts_selected
        )
        .then(function () {
          self.signed = true;
        });
    },
    save() {
      let self = this;
      self.processing = true;
      this.transaction_report.amount = this.total;
      axios
        .post(
          "/api/transaction_reports/" + this.$route.params.id,
          this.transaction_report
        )
        .then(
          function (response) {
            self.processing = false;
            self.transaction_report = response.data;
          },
          function (error) {
            self.processing = false;
          }
        );
    },
  },
  computed: {
    total() {
      let total = 0;
      if (this.transaction_report.amounts) {
        this.transaction_report.amounts.forEach((element) => {
          total += parseInt(element.amount);
        });
      }
      return total;
    },
    totalSelected() {
      let total = 0;
      this.transaction_report.amounts.forEach((element) => {
        if (this.amounts_selected.includes(element.id)) {
          total += parseInt(element.amount);
        }
      });
      return total;
    },
    selectAll: {
      get: function () {
        return this.transaction_report.amounts
          ? this.amounts_selected.length ==
              this.transaction_report.amounts.length
          : false;
      },
      set: function (value) {
        var amounts_selected = [];

        if (value) {
          this.transaction_report.amounts.forEach(function (amount) {
            amounts_selected.push(amount.id);
          });
        }
        this.amounts_selected = amounts_selected;
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.print-only {
  display: none;
}

@media print {
  table {
    width: 20cm;
  }
  .no-print {
    display: none;
  }

  .print-only {
    display: block;
  }
}
.table th {
  font-weight: bold;
}
</style>
<style>
.custom-control-label::before {
  border-color: #656464 !important;
}
</style>