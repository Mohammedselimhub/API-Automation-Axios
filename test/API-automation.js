const axios = require('axios');
const {expect } = require("chai")
const {faker} = require("@faker-js/faker")

describe('Login-successful ', async function () {
    it('RETURNS STATUS CODE 200', async function () {
       //const randomPassword = faker.name.firstName();
        const response = await axios.post('https://reqres.in/api/login',
        {
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
        });
       expect(response.status).to.equal(200);
    });

    it('git list of users', async function () {
         const response = await axios.get('https://reqres.in/api/users?page=2');
        expect(response.status).to.equal(200);
        expect(response.data.data[1].id).to.equal(8);
     });

     it('Create a job', async function () {
        const randomName = faker.name.firstName();
        const randomjob = faker.name.jobTitle()

         const response = await axios.post('https://reqres.in/api/users',
         {
            "name": randomName,
            "job": randomjob
         });
        expect(response.status).to.equal(201);
       expect(response.data.name).equal(randomName);
       expect(response.data.job).equal(randomjob);
        console.log(response);
     });

  });