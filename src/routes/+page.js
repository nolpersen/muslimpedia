/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const url = "https://equran.id/api/surat"
    const res = await fetch(url)

    const result = await res.json();

    return {
        result
    };
  }