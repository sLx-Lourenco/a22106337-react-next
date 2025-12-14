import { NextRequest } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params

  const res = await fetch(
    `https://deisishop.pythonanywhere.com/products/${id}`
  )

  const data = await res.json()
  return Response.json(data)
}