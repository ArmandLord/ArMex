const supertest = require('supertest');
const app = require('../../app');
const request = supertest(app);
const {Player} = require('../../db');
const helperTest = require('../helperTest/helperTest');


describe('test endpoint updatePlayer',()=>{

    beforeEach(async ()=>{
        const truncate = await helperTest.truncateDataBase();
    });

    afterEach(async ()=>{
        const truncate = await helperTest.truncateDataBase();
    });


    it('updatePLayer debe retornar un player actualizado', async()  => {
        // Sends GET Request to /test endpoint

        await Player.create({
            nickname: "icardi",
            status: "oro",
            ranking : 2,
            avatar : "https://res.cloudinary.com/dy9tey0yi/image/upload/v1637177226/Futbol%20players/cristiano-ronaldo_zm5u9x.png",
        });
        const players = await Player.findOne({where:{nickname:"icardi"}})
        const res = await request.put('/player').send({id:players.dataValues.id,nickname:"messi",status:"plata",ranking:2,avatar:"https://res.cloudinary.com/dy9tey0yi/image/upload/v1637177226/Futbol%20players/cristiano-ronaldo_zm5u9x.png"})
        const playerByNickname = await Player.findOne({where:{nickname:"messi"}});

        expect(playerByNickname.dataValues.nickname).toEqual("messi");
        expect(playerByNickname.dataValues.status).toEqual("plata");
    });
});