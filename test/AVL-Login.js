const axios = require('axios');
const {expect } = require("chai")
//const {faker} = require("faker");

describe('Random', async function () {
    it('RETURNS STATUS CODE 200', async function () {
       // const randominvalidname = faker.name.firstName();
        const AVL = await axios.post('http://api.stageavl.afaqy.sa/auth/login',
        {
            "data": {
                "username": "large",
                "password": "123456Aa",
                "expire": 90000,
                "projection": [
                    "_id",
                    "username",
                    "email",
                    "imgUrl",
                    "last_login_date"
                ]
            }
        });
       console.log(AVL);
       expect(AVL.status).to.equal(200);
       expect(AVL.data.message).to.equal('success');
       //expect(AVL.data.value).to.be.a('string');
    });
  });