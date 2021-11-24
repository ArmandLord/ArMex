const supertest = require('supertest');
const app = require('../../app');
const request = supertest(app);
const {Player} = require('../../db');
const helperTest = require('../helperTest/helperTest');

describe('test endpoint getPlayerById',()=>{

    beforeEach(async ()=>{
        const truncate = await helperTest.truncateDataBase();
    });

    afterEach(async ()=>{
        const truncate = await helperTest.truncateDataBase();
    });

    it('Search players debe retornar el unico player que coincida con su id', async()  => {
        await Player.create({
            id: 7000,
            nickname: "franco",
            status: "oro",
            ranking : 2,
            avatar : "https://res.cloudinary.com/dy9tey0yi/image/upload/v1637177226/Futbol%20players/cristiano-ronaldo_zm5u9x.png",
        });

        await Player.create({
            id: 7002,
            nickname: "vidal",
            status: "oro",
            ranking : 2,
            avatar : "https://res.cloudinary.com/dy9tey0yi/image/upload/v1637177226/Futbol%20players/cristiano-ronaldo_zm5u9x.png",
        });
    
    // Sends GET Request to /test endpoint
    const res = await request.get('/player/7002');
    console.log("PLAYEEEEEEEEEERS",res.body)
    expect(res.body.id).toEqual(7002);
    expect(res.body.nickname).toEqual("vidal");
});
});