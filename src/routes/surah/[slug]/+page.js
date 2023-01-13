/** @type {import('./$types').PageLoad} */
export async function load({ params }){
    const url = `https://equran.id/api/surat/${params.slug}`

    const res = await fetch(url);
    const result = await res.json();

    return {
        result
    }
}