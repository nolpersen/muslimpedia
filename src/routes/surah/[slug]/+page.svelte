<script>
    /** @type {import('./$types').PageData} */
    export let data;
    // console.log(data)
</script>

<h1>
    {data.result.nama} ({data.result.nama_latin})
</h1>

<ol>
    {#each data.result.ayat as ayat}
        <li>
            <div dir="RTL">
                <h2>{ayat.ar} ({ayat.nomor})</h2>
            </div>
            <h4>{ayat.tr}</h4>
            <p>{ayat.idn}</p>
        </li>
    {/each}
</ol>

<style>
    li{
        text-align: justify;
    }
    ol{
        text-align: right;
        list-style-type: none;
    }
</style>