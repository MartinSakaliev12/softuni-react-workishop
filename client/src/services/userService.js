const baseUrl = "http://localhost:3030/jsonstore/users"

const userServices ={
    async getAll(){
        const users = await fetch(baseUrl)
        const data = await users.json()
        const values = Object.values(data)

        return values;
    },
    async createUser(data){
        //make fetch
        const result = await fetch(baseUrl,{
            method:"POST",
            headers: {
                'Content-Type': 'application/json' // Specify content type
            },
            body:JSON.stringify(data)
        })
        const resultAsJson = await result.json()
        return resultAsJson
    }
}

export default userServices