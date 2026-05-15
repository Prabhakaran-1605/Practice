
const student = ["1","2","4","6","10","15","20"]
export function generateStaticParams () {
    return student.map((id)=>{
        return {
            id : id
        }
    })
}

const DynamicStudent = async ({params}) => {

const {id} = await params

console.log(id)
    return (
        <>
       <h1>
        Dynamic Student - {id}
       </h1>
        </>
    )

}

export default DynamicStudent;