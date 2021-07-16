import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as ic_guestbook_idl, canisterId as ic_guestbook_id } from 'dfx-generated/ic_guestbook';

const agent = new HttpAgent();
const ic_guestbook = Actor.createActor(ic_guestbook_idl, { agent, canisterId: ic_guestbook_id });

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  const greeting = await ic_guestbook.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
