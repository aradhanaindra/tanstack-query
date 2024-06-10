import data from "../data/products.json"

const wait = (t: number) => new Promise((resolve, reject) => setTimeout(resolve, t))

export async function GET() {
  await wait(2000)
  return Response.json(data)
}