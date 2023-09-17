describe("Verify book lifecycle API", ()=>{

    let bearerToken=null, orderId=null;
    before("Generate token", ()=> {
        cy.request({
            method:'POST',
            url:'https://simple-books-api.glitch.me/api-clients/',
            body:{
                clientName: "Sayon",
                clientEmail: Math.random().toString(5).substring(2)+"@msn.com"
            }
        })
        .then((response) =>{
            bearerToken=response.body.accessToken;
        })
    })

    it("Place a book order", ()=>{
        const requestBody={
            bookId: 6,
            customerName: Math.random().toString(5).substring(2)
        }
        
        cy.request({
            method:'POST',
            url: 'https://simple-books-api.glitch.me/orders',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+bearerToken
            },
            body: requestBody
        })
        .then((response) =>{
            expect(response.status).to.eq(201);
            expect(response.body).have.property('orderId');
            orderId=response.body.orderId;
        })
    })

    it("Get order info using orderId", ()=>{
        cy.request({
            method:'GET',
            url: 'https://simple-books-api.glitch.me/orders/'+orderId,
            headers:{
                'Authorization': 'Bearer '+bearerToken
            }
        })
        .then((response) =>{
            expect(response.status).to.eq(200);
        })
    })
})