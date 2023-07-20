<script lang="ts">
    import UserLink from "$lib/components/UserLink.svelte";
    import type { PageData } from "./$types";
    import { userData } from "$lib/firebase";
    export let data: PageData;
</script>

<svelte:head>
    <title>@{data.username} Links</title>
    <meta name="description" content={data.bio} />
</svelte:head>


<main class="prose text-center mx-auto mt-8">

    <h1 class="text-5xl text-purple-500 my-10">
        @{data.username}
    </h1>

    <img
        src={data.photoURL ?? "/user.png"}
        alt="photoURL"
        width="256"
        class="mx-auto"
    />

    <p class="text-xl my-8">{data.bio ?? "no bio yet..."}</p>
    <ul class="list-none">
        {#each data.links as item}
            <li class="my-2">
                <UserLink {...item} />
            </li>
        {/each}
    </ul>


    {#if $userData && $userData.username === data.username}
        <a href="/{$userData.username}/edit" class="btn btn-primary my-10">Edit Profile</a>
    {/if}




</main>
