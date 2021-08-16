<template>
  <section class="container">
    <GuestBookFrontPage :entries="this.entries" :visitorCount="this.visitorCount" @addEntry="addEntry"/>
  </section>
</template>

<script>
import GuestBookFrontPage from './components/GuestbookFrontPage';
import { ic_guestbook } from "../../declarations/ic_guestbook";

export default {
  name: 'App',
  components: {
    GuestBookFrontPage
  },
  data() {
    return {
      entries: [],
      visitorCount: 0
    }
  },
  methods: {
    async addEntry(button) {

      const text = document.getElementById("textinput").value;
      const validationFeedback = document.getElementById("validationfeedback");
      validationFeedback.innerText = "";

      if ( text.length == 0) {
        validationFeedback.innerText = "Please enter a message";
      } else {
        button.innerText = 'Sending ...';
        button.setAttribute('disabled', true);

        console.log(await ic_guestbook.addEntry(text.toString()));

        button.innerText = 'Add to Guest Book';
        button.removeAttribute('disabled');

        this.getEntries();
      }
    },
    async getEntries() {      
      this.entries = await ic_guestbook.getEntries();
    },
    async getVisitorCount() {
      this.visitorCount = await ic_guestbook.getVisitorCount();
    },
    async poll() {
      // Refresh data every 1 minute
      setTimeout(() => {  this.getEntries(); this.getVisitorCount(); this.poll(); }, 60000);
    }
  },
  mounted() {
    this.getEntries();
    this.getVisitorCount();
    ic_guestbook.addVisit();
    this.poll();
  }
}
</script>

<style>
body {
  background: lightgrey;
  font-family: monospace;
}

.container {
  display: flex;
  justify-content: center;
}
</style>