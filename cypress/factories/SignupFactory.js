
var faker = require ('faker')

export default {

    deliver: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: '04547582351',
            email: faker.internet.email(firstName),
            whatsapp: '85999447777',
            address:{
                postalcode:'60326020',
                street:'Rua Gérson Faria',
                number:'395',
                details:'altos',
                district:'Monte Castelo',
                city_state:'Fortaleza/CE'
            },
             delivery_method: 'Moto',
             cnh: 'cnh-digital.jpg'
        } 

        return data
    }
}