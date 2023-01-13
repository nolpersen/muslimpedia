<script>
    /** @type {import('./$types').PageData} */

    export let data;
    // console.log(data);
</script>

<h1>Welcome to Muslimpedia</h1>

<h1>List Surah</h1>

{#each data.result as surah}
<div>
    <a href="/surah/{surah.nomor}">
        <h2>({surah.nomor}) {surah.nama_latin} - {surah.nama}</h2>
    </a>
    <h3>Arti : {surah.arti}</h3>
    <p>
        Jumlah Ayat : <b>{surah.jumlah_ayat}</b> <br>
        Tempat Turun : <b>{surah.tempat_turun}</b>

    </p>
    <!-- <p>{@html surah.deskripsi}</p> -->
</div>
{/each}

<style>
    p{
        text-align: justify;
    }
    a{
        text-decoration: none;
    }
</style>