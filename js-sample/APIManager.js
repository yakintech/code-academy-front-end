
//Bu manager dışarıdan aldığı URL ile o url e ait dataların HTTP işlemlerini gerçekleştirir.

let baseURL = "https://northwind.vercel.app/api"
const baseManager = {
    getAll: async (endpoint) => {

        let response = [];

        await fetch(baseURL + endpoint)
            .then(res => res.json())
            .then(data => {
                response = data;
            })
            .catch(msg => console.log('Message', msg))

        return response;

    },
    getById: async (endpoint, id) => {

        let reponse = {};

        await fetch(baseURL + endpoint + "/" + id)
            .then(res => {
                if(res.status == 200){
                    return res.json();
                }
                else{
                    throw 'EX'
                }
            })
            .then(data => {
                response = data;
            })
            .catch(err => console.log('ERROr', err))

        return response;

    }
}
