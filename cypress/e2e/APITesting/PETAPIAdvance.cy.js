describe("Verify PET creation workflow is working as expected", ()=>{

    it("Verify user is able to create PET record using POST API", ()=>{
        const postRequestBody={
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
        cy.request({
            method:'POST',
            url: 'https://petstore3.swagger.io/api/v3/pet',
            body: postRequestBody
        })
        .then( (response) =>{
            expect(response.status).to.eq(200)
            expect(response.body.id).to.eq(15)
        })
    })

    it("Verify user is able to create PET record using POST API using fixture", ()=>{
        cy.fixture('pet').then((data)=>{
            const postRequestBody=data;

            cy.request({
                method:'POST',
                url: 'https://petstore3.swagger.io/api/v3/pet',
                body: postRequestBody
            })
            .then( (response) =>{
                expect(response.status).to.eq(200)
                expect(response.body.id).to.eq(postRequestBody.id)
                expect(response.body).to.have.property('id',postRequestBody.id)
            })
        })
    })
})