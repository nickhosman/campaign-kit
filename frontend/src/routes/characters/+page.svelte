<script>
    let characters = [
        { id: 1, name: "Alice", job: "warrior"},
        { id: 2, name: "Bob", job: "mage"},
        { id: 3, name: "Charlie", job: "priest"},
    ];
</script>

<h1>Characters</h1>

<div class="flex gap-4">
    {#each characters as character}
        <div class="flex justify-center items-center w-40 h-40 border rounded-lg border-blue-500 gap-4">
            <h2>{character.name}</h2>
            <p>{character.job}</p>
        </div>
    {/each}
</div>
