export async function GET(request: Request, { params }: { params: { id: string } }) {
  const res = await fetch(
    `https://deisishop.pythonanywhere.com/products/${params.id}`)
    
  const data = await res.json()
  return Response.json(data)
}