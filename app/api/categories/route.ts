import data from "../../data/categories.json"

const wait = (t: number) => new Promise((resolve, reject) => setTimeout(resolve, t))

export async function GET() {
  await wait(1000)
  return Response.json(data)
}