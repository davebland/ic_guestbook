<template>
  <div class="box">
    <h1>Internet Computer Guest Book</h1>
    <div class="xpad">
      <input id="newentry" type="text" name="entry" placeholder="your message..." maxlength="50">
      <span id="success"></span>
    </div>
    <div class="xpad">
      <button @click="$emit('addEntry',$event.target)">Add to Guest Book</button>
    </div>
    <div id="guestbook-entries">
      <table>
        <tr v-for="entry in entries" :key="entry[0]">
          <td>{{entry[0]}}</td>
          <td>{{formatDateFromInt(entry[1])}}</td>
        </tr>
      </table>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'GuestBookFrontPage',
  props: ['entries'],
  methods: {
    formatDateFromInt(secondsInt) {      
      let date = new Date(Number(secondsInt)/1000000);      
      return date.toString();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  background: lightblue;
  border: 1px solid black;
  border-radius: 5px;
  padding: 50px;
  text-align: center;
}

input, button {
  padding: 10px;
}

.xpad {
  padding: 10px 0;
}

#guestbook-entries {
  text-align: center;
}

table, td {
  border: 1px solid gray;
}

td {
  padding: 10px;
  text-align: center;
}
</style>
