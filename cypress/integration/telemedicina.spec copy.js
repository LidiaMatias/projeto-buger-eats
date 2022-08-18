describe('Login', ()=>{
    it('Acesso ao Portal', ()=>{
        cy.viewport(1440, 900)
        cy.visit('https://app-homolog.hapvida.com.br/teleconsulta/#agreements')
        cy.wait(7000)
        cy.get('[style="font-size: 20px; opacity: 0.8;"]').should('have.text', 'Suas teleconsultas agora em um só lugar')
        
    
        var acesso = {
        carteira: '28954000061003',
        nascimento: '28/08/1991',
        tipo_plano: 'MIX IX - 458980087',
        celular:'85991448081',
        nome: 'RACHEL MENEZES DE CARVALHO',
        turno_consulta:'Manhã',
        confirmacao_consulta: 'Tudo certo! Pode marcar.'
        }

        cy.get('input[id="login_user_input"]').type(acesso.carteira)
        cy.contains('div','Continuar').click()
        cy.get('input[id=login_pass_input]').type(acesso.nascimento)
        cy.contains('div','Entrar').click()
        cy.wait(6000)
        cy.contains('div[class="selection_item_title"]', acesso.tipo_plano).click()
        cy.contains('div[class="selection_item_title"]', acesso.nome).click()

        //marcar teleconsulta
        cy.wait(7000)
        cy.get('div[class="page_icon strong"]').click()
        cy.get('div[class="item_title"]').should('have.text','Quem é o beneficiário?')
        cy.contains('div[id="list_item_0"]', acesso.nome).click()
        cy.get('div[class="item_title"]').should('have.text','Onde deseja marcar sua consulta?')
        cy.wait(6000)
        //seleciona estado da federacao em "lista suspensa"
        cy.get('#state_input').select('CEARA')
        cy.get('#state_input').should('have.value', 'CE')
        //seleciona cidade da federacao em "lista suspensa"
        cy.wait(6000)
        cy.get('#city_input').select('FORTALEZA')
        cy.get('#city_input').should('have.value', 'FORTALEZA')
        cy.contains('div[class="btn"]', 'Próximo').click()
        cy.wait(8000)
        //Selecionando Especialidade
        cy.contains('div[id="list_item_3"]','CLINICO GERAL').click()
        //selecionando Data
        cy.get('div[class="item_title"]').should('have.text','Escolha a melhor data para ')
        cy.wait(6000)
        //selecao_dia
        cy.get('.calendar_day').first()
        cy.contains('div[class="btn"]','Próximo').click()
        //selecao_hora
        cy.wait(8000)
        cy.contains('.time_btn', acesso.turno_consulta).click()
        cy.wait(8000)
        cy.contains('span[data-logic="parseTimeGMT"]','10:00').click()
        cy.contains('div[class="btn"]', 'Próximo').click()
        //confirmacao de teleatendimento
        cy.contains('span[data-parameter="label"]','Concluir e marcar?')
        cy.contains('div[class="btn"]', acesso.confirmacao_consulta).click()
        cy.get('input[id="tel_input"]').type(acesso.celular)
        cy.contains('div[class="btn"]', 'Confirmar').click()

        
        
        //.should('have.value', '7').click()




       



    })


})
    