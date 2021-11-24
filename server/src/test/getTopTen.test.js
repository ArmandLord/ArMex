const supertest = require('supertest');
const app = require('../app');
const request = supertest(app);
const {Player,conn} = require('../db');

describe('test endpoint getTopTen',()=>{
    beforeEach(async ()=>{
        await Object.values(conn.models).map(function(model) {
            return model.destroy({ truncate: { cascade: true } });
        }); 
    });

    afterEach(async ()=>{
        await Object.values(conn.models).map(function(model) {
            return model.destroy({ truncate: { cascade: true } });
        });
    });


    it('Get players debe retornar todos los jugadores de la base de datos', async()  => {
        await Player.create({
            id: 1,
            nickname: "diosquez",
            status: "oro",
            ranking : 1,
            avatar : "https://res.cloudinary.com/dy9tey0yi/image/upload/v1637177226/Futbol%20players/cristiano-ronaldo_zm5u9x.png",
        });

        await Player.create({
            id: 2,
            nickname: "denis",
            status: "oro",
            ranking : 2,
            avatar : "https://res.cloudinary.com/dy9tey0yi/image/upload/v1637177226/Futbol%20players/cristiano-ronaldo_zm5u9x.png",
        });

        await Player.create({
            id: 3,
            nickname: "goumaz",
            status: "oro",
            ranking : 3,
            avatar : "https://res.cloudinary.com/dy9tey0yi/image/upload/v1637177226/Futbol%20players/cristiano-ronaldo_zm5u9x.png",
        });

        await Player.create({
            id: 4,
            nickname: "pique",
            status: "oro",
            ranking : 4,
            avatar : "https://res.cloudinary.com/dy9tey0yi/image/upload/v1637177226/Futbol%20players/cristiano-ronaldo_zm5u9x.png",
        });

        await Player.create({
            id: 5,
            nickname: "dimaria",
            status: "oro",
            ranking : 5,
            avatar : "https://res.cloudinary.com/dy9tey0yi/image/upload/v1637177226/Futbol%20players/cristiano-ronaldo_zm5u9x.png",
        });

        await Player.create({
            id: 6,
            nickname: "dibu",
            status: "oro",
            ranking : 6,
            avatar : "https://res.cloudinary.com/dy9tey0yi/image/upload/v1637177226/Futbol%20players/cristiano-ronaldo_zm5u9x.png",
        });

        await Player.create({
            id: 7,
            nickname: "higuain",
            status: "oro",
            ranking : 7,
            avatar : "https://res.cloudinary.com/dy9tey0yi/image/upload/v1637177226/Futbol%20players/cristiano-ronaldo_zm5u9x.png",
        });

        await Player.create({
            id: 8,
            nickname: "tevez",
            status: "oro",
            ranking : 8,
            avatar : "https://res.cloudinary.com/dy9tey0yi/image/upload/v1637177226/Futbol%20players/cristiano-ronaldo_zm5u9x.png",
        });

        await Player.create({
            id: 9,
            nickname: "gomez",
            status: "oro",
            ranking : 9,
            avatar : "https://res.cloudinary.com/dy9tey0yi/image/upload/v1637177226/Futbol%20players/cristiano-ronaldo_zm5u9x.png",
        });

        await Player.create({
            id: 10,
            nickname: "pepe",
            status: "oro",
            ranking : 10,
            avatar : "https://res.cloudinary.com/dy9tey0yi/image/upload/v1637177226/Futbol%20players/cristiano-ronaldo_zm5u9x.png",
        });
    
    // Sends GET Request to /test endpoint
    const res = await request.get('/player/topTen');
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",res.body)
    expect(res.body[0].id).toEqual(1);
    expect(res.body[0].nickname).toEqual("diosquez");

    expect(res.body[1].id).toEqual(2);
    expect(res.body[1].nickname).toEqual("denis");

    expect(res.body[2].id).toEqual(3);
    expect(res.body[2].nickname).toEqual("goumaz");

    expect(res.body[3].id).toEqual(4);
    expect(res.body[3].nickname).toEqual("pique");

    expect(res.body[4].id).toEqual(5);
    expect(res.body[4].nickname).toEqual("dimaria");

    expect(res.body[5].id).toEqual(6);
    expect(res.body[5].nickname).toEqual("dibu");

    expect(res.body[6].id).toEqual(7);
    expect(res.body[6].nickname).toEqual("higuain");

    expect(res.body[7].id).toEqual(8);
    expect(res.body[7].nickname).toEqual("tevez");

    expect(res.body[8].id).toEqual(9);
    expect(res.body[8].nickname).toEqual("gomez");

    expect(res.body[9].id).toEqual(10);
    expect(res.body[9].nickname).toEqual("pepe");
});
});