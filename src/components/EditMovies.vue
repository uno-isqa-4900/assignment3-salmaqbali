<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-md-5">
        <h3 class="text-center">Add Subscription</h3>
        <form @submit.prevent="onFormSubmit">
          <div class="form-group">
            <label>Name</label>
            <input
              type="text"
              class="form-control"
              v-model="subscription.name"
              required
            />
          </div>

          <div class="form-group">
            <label>Description</label>
            <input
              type="text"
              class="form-control"
              v-model="subscription.description"
              required
            />
          </div>

          <div class="form-group">
            <label>Amount</label>
            <input
              type="text"
              class="form-control"
              v-model="subscription.amount"
              required
            />
          </div>

          <div class="form-group">
            <label>Payment Frequency</label>
            <select
              id="frequency"
              class="form-control"
              v-model="subscription.frequency"
              required
            >
              <option value="weekly">Weekly</option>
              <option value="bimonthly">Bi-monthly</option>
              <option value="monthly">Monthly</option>
              <option value="quarterly">Quarterly</option>
              <option value="biannually">Bi-annually</option>
              <option value="annually">Annually</option>
            </select>
          </div>

          <div class="form-group">
            <button class="btn btn-primary btn-block" @click="onUpdateForm">
              Update Subscription
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import db from "../firebaseDb";

export default {
  name: "EditMovies",
  data() {
    return {
      subscription: {},
    };
  },
  created() {
    db.collection("subscriptions").onSnapshot((snapshotChange) => {
      this.subscription = [];
      snapshotChange.forEach((doc) => {
        if (doc.id == this.$route.params.id) {
          this.subscription = {
            key: doc.id,
            name: doc.data().name,
            description: doc.data().description,
            amount: doc.data().amount,
            frequency: doc.data().frequency,
          };
        }
      });
    });
  },
  methods: {
    onUpdateForm() {
      if (window.confirm("Do you really want to edit this?")) {
        db.collection("subscriptions")
          .doc(this.$route.params.id)
          .update({
            name: this.subscription.name,
            description: this.subscription.description,
            amount: this.subscription.amount,
            frequency: this.subscription.frequency,
          })
          .then(() => {
            console.log("Document updated!");
            this.$router.push("/");
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
  },
};
</script>
