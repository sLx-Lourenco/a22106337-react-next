export async function GET() {
  const res = await fetch(
    'https://api.carrismetropolitana.pt/municipalities'
  )

  const data = await res.json()
  return Response.json(data)
}