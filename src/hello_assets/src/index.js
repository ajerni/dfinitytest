import { Actor, HttpAgent } from "@dfinity/agent";
import {
  idlFactory as hello_idl,
  canisterId as hello_id,
} from "dfx-generated/hello";

const agent = new HttpAgent();
const hello = Actor.createActor(hello_idl, { agent, canisterId: hello_id });

document.addEventListener("DOMContentLoaded", async () => {
  document.getElementById("showwert").innerText = await hello.getWert();
});

// document.getElementById("clickMeBtn").addEventListener("click", async () => {
//   const name = document.getElementById("name").value.toString();
//   const greeting = await hello.greet(name);

//   document.getElementById("greeting").innerText = greeting;
// });

document.getElementById("clickMeBtn2").addEventListener("click", async () => {
  const wert = document.getElementById("wert").value.toString();
  document.getElementById("showwert").innerText = "...saving new state...";
  const newwert = await hello.setWert(wert);
  document.getElementById("showwert").innerText = newwert;
});
