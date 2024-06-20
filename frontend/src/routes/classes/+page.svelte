<script>
    let classes = [
        { id: 1, name: "Warrior", description: "A master of melee combat" },
        { id: 2, name: "Mage", description: "A wielder of powerful magic" },
        { id: 3, name: "Priest", description: "A healer and protector" },
    ];
</script>

<h1>Classes</h1>

<div class="flex gap-4">
    {#each classes as job}
        <div class="flex justify-center items-center w-40 h-40 border rounded-lg border-blue-500 gap-4">
            <h2>{job.name}</h2>
            <p>{job.description}</p>
        </div>
    {/each}
</div>
