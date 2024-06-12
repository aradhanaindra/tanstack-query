import data from "../../data/products.json"

const wait = (t: number) => new Promise((resolve, reject) => setTimeout(resolve, t))
let amount = 0;
export async function GET() {
  await wait(2000)
  console.log(`processing... ${amount++}`)
  return Response.json(data)
}