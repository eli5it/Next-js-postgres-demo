import { getServiceById } from "@/models/service"



const Page =  async ({params}) => {
    const id = parseInt(params.slug)
 
    const service = await getServiceById(id)
    return (
        <div>
            <h1>{service.department_name}</h1>
        </div>
    )

} 


export default Page