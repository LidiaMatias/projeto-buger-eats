
import SignupPage from '../pages/SignupPage'
import SignupFactory from '../factories/SignupFactory'
//import { it } from 'faker/lib/locales'



describe('Signup', () => {

    //  beforeEach(function () {
    //      cy.fixture('deliver').then((d) => {
    //          this.deliver = d
    //      })

    // })

    it('User should be deliver', function () {

        var deliver = SignupFactory.deliver()

        SignupPage.go()
        SignupPage.fillForm(deliver)
        SignupPage.submit()

        const expectedMessege = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        SignupPage.modalContentShouldBe(expectedMessege)

    })

    it('Incorrect document', function () {

        var deliver = SignupFactory.deliver()

        deliver.cpf = '045475823aa'

        SignupPage.go()
        SignupPage.fillForm(deliver)
        SignupPage.submit()
        SignupPage.alertMessageShouldBe('Oops! CPF inválido')

    })

    it('Incorrect email', function () {

        var deliver = SignupFactory.deliver()

        deliver.email = 'buger.com.br'

        SignupPage.go()
        SignupPage.fillForm(deliver)
        SignupPage.submit()
        SignupPage.alertMessageShouldBe('Oops! Email com formato inválido.')

    })

    context('Required fields', function () {

        const messages = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'postalcode', output: 'É necessário informar o CEP' },
            { field: 'number', output: 'É necessário informar o número do endereço' },
            { field: 'delivery_method', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' }

      ]

      before(function(){
        SignupPage.go()
        SignupPage.submit()
      })

      messages.forEach(function(msg){

        it(`${msg.field} is required`, function(){

            SignupPage.alertMessageShouldBe(msg.output)
        })

      })

    })


    // it('Required fields', function () {
    //     SignupPage.go()
    //     SignupPage.submit()
    //     SignupPage.alertMessageShouldBe('É necessário informar o nome')
    //     SignupPage.alertMessageShouldBe('É necessário informar o CPF')
    //     SignupPage.alertMessageShouldBe('É necessário informar o email')
    //     SignupPage.alertMessageShouldBe('É necessário informar o CEP')
    //     SignupPage.alertMessageShouldBe('É necessário informar o número do endereço')
    //     SignupPage.alertMessageShouldBe('Selecione o método de entrega')
    //     SignupPage.alertMessageShouldBe('Adicione uma foto da sua CNH')
    // })

})

    // before(function() {
    //     cy.log('Tudo aqui é executado uma única vez ANTES de TODOS os casos de testes')

    // })

    // beforeEach(function(){
    //     cy.log('Tudo aqui é executado ANTES para cada caso de teste')
    // })

    // after(function() {
    //     cy.log('Tudo aqui é executado uma única vez DEPOIS de TODOS os casos de testes')

    // })

    // afterEach(function(){
    //     cy.log('Tudo aqui é executado sempre DEPOIS para cada caso de teste')
    // })

