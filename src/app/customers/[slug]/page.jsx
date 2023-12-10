import { getCustomerById } from "@/models/customer"



const Page = async ({params}) => {
    console.log(params)

    const customerId = parseInt(params.slug)

    
    

    const customerDetails = await getCustomerById(customerId)

    const {first_name, last_name, email, phone_num, id} = customerDetails

    return (
        <>
            <div>
                <h1>Customer Details</h1>
                <ul>
                    <li>First Name: {first_name}</li>
                    <li>Last Name: {last_name}</li>
                    <li>Email: {email}</li>
                    <li>Phone: {phone_num}</li>
                    <li>ID: {id}</li>
                </ul>
            </div>
        </>
    )

}


export default Page