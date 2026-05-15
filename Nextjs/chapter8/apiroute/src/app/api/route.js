export function GET(req) {
    return new Response(JSON.stringify({id:1,name: "prabhakar"}))
}

export async function POST(req) {
    const data = await req.json()
    console.log(data)
    return new Response ("Data received")
}