export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }>}
) {
    const { id } = await params

    const url = 'https://official-joke-api.appspot.com/jokes/' + id;
    const res = await fetch(url);
    const data = await res.json();

    //Enviar dados ao front
    return Response.json(data, { status: 200 });
}