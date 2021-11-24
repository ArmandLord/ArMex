const supertest = require('supertest');
const app = require('../../app');
const request = supertest(app);
const { Player } = require('../../db');
const helperTest = require('../helperTest/helperTest');


describe('test endpoint createOnePlayer', ()=>{

    beforeEach(async ()=>{
        const truncate =  await helperTest.truncateDataBase();
    });

    afterEach(async ()=>{
        const truncate =  await helperTest.truncateDataBase();
    });


    it('createOnePlayer debe poder crear un player y guardarlo en la base de datos', async()  => {
        // Sends GET Request to /test endpoint
        const res = await request.post('/player/onePlayer').send({nickname:"guido", status:"oro", ranking:2, avatar:"https://res.cloudinary.com/dy9tey0yi/image/upload/v1637177226/Futbol%20players/cristiano-ronaldo_zm5u9x.png"})
        const players = await Player.findOne({where:{nickname:"guido"}});
        //creo un player y despues lo busca en la base de datos y espera que el unico player existente sea el creado
        
        expect(players.dataValues.nickname).toEqual("guido");
    });
});