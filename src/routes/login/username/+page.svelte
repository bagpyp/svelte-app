<script lang="ts">
  import AuthCheck from "$lib/components/AuthCheck.svelte"
  import { db, user } from "$lib/firebase"
  import { doc, getDoc, writeBatch } from "firebase/firestore"

  let username = ""
  let loading = false
  let isAvailable = false

  async function checkAvailability() {
    isAvailable = false
    loading = true

    console.log("checking availabilty of", username)

    const ref = doc(db, "usernames", username)
    const exists = await getDoc(ref)

    isAvailable = !exists
    loading = false
  }
  
  async function confirmUsername() {}

  

</script>

<AuthCheck>
  <h2>Username</h2>
  <form class="w-2/5" on:submit|preventDefault ={confirmUsername}>
    <input
      type="text"
      placeholder="Username"
      class="input w-full"
      bind:value={username}
      on:input={checkAvailability}
    />

    <p>Is available? {isAvailable}</p>

    <button class="btn btn-success">Confirm username @{username} </button>

  </form>
</AuthCheck>
