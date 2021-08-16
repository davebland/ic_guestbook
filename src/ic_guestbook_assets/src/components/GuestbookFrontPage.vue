<template>
  <div class="box">
    <p id="visitor-counter-display">Guests: {{visitorCount}}</p>
    <img src="../../assets/humboldt_icon.png">
    <h1>The Internet Computer Guest Book</h1>
    <div class="xpad">
      <input id="textinput" type="text" name="entry" placeholder="your message..." maxlength="50">
      <p id="validationfeedback"></p>
    </div>
    <div class="xpad">
      <button @click="$emit('addEntry',$event.target)">Add to Guest Book</button>
    </div>
    <div id="guestbook-entries" class="xpad">
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
  props: ['entries','visitorCount'],
  methods: {
    formatDateFromInt(secondsInt) {      
      let date = new Date(Number(secondsInt)/1000000);      
      return date.toGMTString();
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
  padding: 5%;
  padding-top: 42px;
  text-align: center;
  position: absolute;
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

table {
  border-collapse: collapse;
  border-style: hidden;
}

table td {
  padding: 10px;
  text-align: center;
  border: 2px dotted darkgray;
  word-break: break-all;
}

button {
  border: darkgreen;
  border-radius: 2px;
  background: darkgreen;
  color: white;
}

button:hover {
  background-color: green;
}

button:disabled:hover {
  background-color: darkgreen;
}

#validationfeedback {
  color: red;
}

img {
  position: absolute;
  top: 8px;
  right: 10px;
}

#visitor-counter-display {
  position: absolute;
  top: 0;
  left: 10px;
  color: grey;
}
</style>
