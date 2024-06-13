import consola from "consola";
import data from "../../data/products.json"

const wait = (t: number) => new Promise((resolve, reject) => setTimeout(resolve, t))
let amount = 0;
export async function GET() {
  await wait(2000)
  consola.box(`processing... ${amount++}`)
  return Response.json(data)
}