
export const revalidate = 3600;

export const dynamicParams = true;

export async function generateStaticParams() {
  const res = await fetch("https://api.vercel.app/blog");
  const posts = await res.json();

  return posts.map((post) => {
    return {id: post.id.toString()}
  });
}



const Blog = async({params}) => {
const {id} = await params
const post = await fetch(`https://api.vercel.app/blog/${id}`)

const response = await post.json()

console.log(response )
console.log("id", id)
    return (
        <>
        <h1>
            {response.id}
        </h1>
        <h2>{response.content}</h2>
        <h3>{response.author}</h3>
        </>
    )
}

export default Blog;