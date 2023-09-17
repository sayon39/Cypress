describe("Verify PET creation workflow is working as expected", ()=>{

    it("Verify user is able to create PET record using POST API", ()=>{
        cy.request({
            method:'POST',
            url: 'https://petstore3.swagger.io/api/v3/pet',
            body: {
                id: 15,
                name: "NewPETAddition1",
                category: {
                    id: 117,
                    name: "NewPETName1"
                },
                photoUrls: [
                    "https://samplephoto.com/2"
                ],
                tags: [
                    {
                        id: 66,
                        name: "NewTagName"
                    }
                ],
                status: "available"
            }
        })
        .its('status')
        .should('equal',200);
    })

    it("Verify user is retrieve PET information using GET API",()=>{
        cy.request('GET','https://petstore3.swagger.io/api/v3/pet/15')
        .its('status')
        .should('equal',200)
    })

    it("Verify user is able to update PET Infomation using PUT API",()=>{
        cy.request({
            method:'PUT',
            url:'https://petstore3.swagger.io/api/v3/pet',
            body:{
                id: 15,
                name: "NewPETAddition1",
                category: {
                    id: 117,
                    name: "NewPETName2"
                },
                photoUrls: [
                    "https://samplephoto.com/2"
                ],
                tags: [
                    {
                        id: 66,
                        name: "NewTagName"
                    }
                ],
                status: "available"
            }
        })
        .its('status')
        .should('equal',200)
    })

    it("Verify user is able to delete PET Infomation using DELETE API",()=>{
        cy.request({
            method:'DELETE',
            url:'https://petstore3.swagger.io/api/v3/pet/15',
        })
        .its('status')
        .should('equal',200)
    })
})