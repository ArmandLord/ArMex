
const supertest = require('supertest');
const app = require('../../app');
const request = supertest(app);
const {Player} = require('../../db');
const helperTest = require('../helperTest/helperTest');


describe('test endpoint search',()=>{

    beforeEach(async ()=>{
        const truncate = await helperTest.truncateDataBase();
    });

    afterEach(async ()=>{
        const truncate = await helperTest.truncateDataBase();
    });




    it('Search players debe retornar un array vacio cuando no hay coincidencia', async()  => {
        // Sends GET Request to /test endpoint
        const res = await request.get('/player/search/ofgdfjg')
        expect(res.body).toEqual( { players: [], offset: null, playersCount: 0 })
    });
    
    
    it('Search players debe retornar todos los players que coincidan con su nickname', async()  => {
            await Player.create({
                nickname: "jhj",
                status: "oro",
                ranking : 2,
                avatar : "https://res.cloudinary.com/dy9tey0yi/image/upload/v1637177226/Futbol%20players/cristiano-ronaldo_zm5u9x.png",
            });
    
            await Player.create({
                nickname: "pepe",
                status: "oro",
                ranking : 2,
                avatar : "https://res.cloudinary.com/dy9tey0yi/image/upload/v1637177226/Futbol%20players/cristiano-ronaldo_zm5u9x.png",
            });
        
        // Sends GET Request to /test endpoint
        const res = await request.get('/player/search/jhj')
        //console.log(res.body)
        expect(res.body.players[0].nickname).toEqual("jhj")
    });

    it('Search players debe retornar el unico player que coincida con su id', async()  => {
        await Player.create({
            id: 2,
            nickname: "jhj",
            status: "oro",
            ranking : 2,
            avatar : "https://res.cloudinary.com/dy9tey0yi/image/upload/v1637177226/Futbol%20players/cristiano-ronaldo_zm5u9x.png",
        });

        await Player.create({
            id:5,
            nickname: "pepe",
            status: "oro",
            ranking : 2,
            avatar : "https://res.cloudinary.com/dy9tey0yi/image/upload/v1637177226/Futbol%20players/cristiano-ronaldo_zm5u9x.png",
        });
    
    // Sends GET Request to /test endpoint
    const res = await request.get('/player/search/5')
    //console.log(res.body)
    expect(res.body.players[0].id).toEqual(5);
    expect(res.body.players[0].nickname).toEqual("pepe");
});

it('Search players debe retornar los players que coincidan con su status', async()  => {
    await Player.create({
        id: 2,
        nickname: "jhj",
        status: "bronce",
        ranking : 2,
        avatar : "https://res.cloudinary.com/dy9tey0yi/image/upload/v1637177226/Futbol%20players/cristiano-ronaldo_zm5u9x.png",
    });

    await Player.create({
        id:5,
        nickname: "pepe",
        status: "oro",
        ranking : 2,
        avatar : "https://res.cloudinary.com/dy9tey0yi/image/upload/v1637177226/Futbol%20players/cristiano-ronaldo_zm5u9x.png",
    });

// Sends GET Request to /test endpoint
const res = await request.get('/player/search/bronce')
//console.log(res.body)
expect(res.body.players[0].id).toEqual(2);
expect(res.body.players[0].status).toEqual("bronce");
});

it('Test paginado,el servicio debe retornar del player 2 al 4 con status oro',async()=>{
    await Player.create({
        id:1,
        nickname:"riquelme",
        status:"oro",
        ranking:3,
        avatar:"https://res.cloudinary.com/dy9tey0yi/image/upload/v1637177194/Futbol%20players/messi_smr35u.png"
    })
    await Player.create({
        id:2,
        nickname:"cristiano",
        status:"oro",
        ranking: 2,
        avatar:"https://res.cloudinary.com/dy9tey0yi/image/upload/v1637177194/Futbol%20players/messi_smr35u.png"
    })
    await Player.create({
        id:3,
        nickname:"neymar",
        status:"oro",
        ranking:3,
        avatar:"https://res.cloudinary.com/dy9tey0yi/image/upload/v1637177194/Futbol%20players/messi_smr35u.png"
    })
    await Player.create({
        id:4,
        nickname:"kun",
        ranking:4,
        status:"oro",
        avatar:"https://res.cloudinary.com/dy9tey0yi/image/upload/v1637177194/Futbol%20players/messi_smr35u.png"
    })
    const res = await request.get('/player/search/oro?limit=2&offset=2');
    //console.log(res.body)
    expect(res.body.players[0].status).toEqual("oro");
    expect(res.body.players[1].status).toEqual("oro");
    expect(res.body.players[0].nickname).toEqual("neymar");
    expect(res.body.players[1].nickname).toEqual("kun");
    expect(res.body.offset).toEqual(2);
    expect(res.body.playersCount).toEqual(2);
});

});
