const supertest = require('supertest');
const app = require('../../app');
const request = supertest(app);
const {Player} = require('../../db');
const helperTest = require('../helperTest/helperTest');

describe('test endpoint getPlayers',()=>{

    beforeEach(async ()=>{
        const truncate = await helperTest.truncateDataBase();
    });

    afterEach(async ()=>{
        const truncate = await helperTest.truncateDataBase();
    });


    it('Get players debe retornar todos los jugadores de la base de datos', async()  => {
        await Player.create({
            id: 5000,
            nickname: "diosquez",
            status: "oro",
            ranking : 2,
            avatar : "https://res.cloudinary.com/dy9tey0yi/image/upload/v1637177226/Futbol%20players/cristiano-ronaldo_zm5u9x.png",
        });

        await Player.create({
            id: 5002,
            nickname: "denis",
            status: "oro",
            ranking : 2,
            avatar : "https://res.cloudinary.com/dy9tey0yi/image/upload/v1637177226/Futbol%20players/cristiano-ronaldo_zm5u9x.png",
        });

        await Player.create({
            id: 5004,
            nickname: "goumaz",
            status: "oro",
            ranking : 2,
            avatar : "https://res.cloudinary.com/dy9tey0yi/image/upload/v1637177226/Futbol%20players/cristiano-ronaldo_zm5u9x.png",
        });
    
    // Sends GET Request to /test endpoint
    const res = await request.get('/player')
    console.log(res.body)
    expect(res.body[0].id).toEqual(5000);
    expect(res.body[0].nickname).toEqual("diosquez");
    expect(res.body[1].id).toEqual(5002);
    expect(res.body[1].nickname).toEqual("denis");
    expect(res.body[2].id).toEqual(5004);
    expect(res.body[2].nickname).toEqual("goumaz");
    
});
});