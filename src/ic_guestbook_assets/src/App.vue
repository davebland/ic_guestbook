<template>
  <section class="container">
    <GuestBookFrontPage :entries="this.entries" @addEntry="addEntry"/>
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
      entries: []
    }
  },
  methods: {
    async addEntry(button) {

      button.innerText = '...';
      button.setAttribute('disabled', true);

      const entryText = document.getElementById("newentry").value.toString();
      console.log(await ic_guestbook.addEntry(entryText));

      button.innerText = 'Add to Guest Book';
      button.removeAttribute('disabled');

      this.getEntries();
    },
    async getEntries() {      
      this.entries = await ic_guestbook.getEntries();
      console.log(this.entries);
    }
  },
  mounted() {
    this.getEntries();
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