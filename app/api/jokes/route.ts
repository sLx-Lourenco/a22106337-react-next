export async function GET() {
    const url = 'https://official-joke-api.appspot.com/jokes/random/400';
    const res = await fetch(url);
    const data = await res.json();

    //Enviar dados ao front
    return Response.json(data);
}