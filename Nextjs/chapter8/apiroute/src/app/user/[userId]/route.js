export async function GET(req,{params}) {
    const { userId } = await params
    console.log(userId)
    return new Response (JSON.stringify({id:userId }))
}