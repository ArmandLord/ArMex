// describe('Sample Test', () => {
//     it('should test that true === true', () => {
//       expect(true).toBe(true)
//     })
//   })
const supertest = require('supertest');
const app = require('../app');
const request = supertest(app);
const {Player,conn} = require('../db');

Object.values(conn.models).map(function(model) {
    return model.destroy({ truncate: { cascade: true } });
}); 
describe('',()=>{

    //beforeEach(async done )




    it('Get players debe retornar un array vacio cuando no hay coincidencia', async()  => {
        // Sends GET Request to /test endpoint
        const res = await request.get('/player/search/ofgdfjg')
        expect(res.body).toEqual( { players: [], offset: null, playersCount: 0 })
    });
    
    
    it('Get players debe retornar todos los players que coincidan con su nombre', async()  => {
            const player = await Player.create({
                nickname: "jhj",
                status: "oro",
                ranking : 2,
                avatar : "https://res.cloudinary.com/dy9tey0yi/image/upload/v1637177226/Futbol%20players/cristiano-ronaldo_zm5u9x.png",
            });
    
        
        // Sends GET Request to /test endpoint
        const res = await request.get('/player/search/jhj')
        console.log(res.body)
        expect(res.body.players[0].nickname).toEqual("jhj")
    })




})
