const AdminUser = async ({params}) => {

    const id = await params

    console.log(id)
    return (
        <>
        <h1>Admin User :{id.userId} </h1>
        </>
    )
}

export default AdminUser;