const { Player, conn } = require('../../db');

describe('Player model testing', () => {
  
   beforeAll(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    })); 
  
    // describe('Player model', function () {
    //   beforeEach(async function() {
    //     await conn.sync({ force: true });
    //   });
    // });
    
  describe('Validators', () => {
    //beforeEach(() => Player.sync({ force: true }));

    describe('player', done => {
      it('should throw an error if nickname is null', (done) => {
        Player.create({
          status: 'oro',
          ranking: 5,
          avatar: 'avatar.jpg'
        })
        .then(() => done(new Error('It requires a nickname')))
        .catch(() => done());
      });

      it('should throw an error if status is null', (done) => {
        Player.create({
          nickname: 'Guido10',
          ranking: 2,
          avatar: 'avatar.jpg'
        })
        .then(() => done(new Error('It requires an status')))
        .catch(() => done());
      });

      it('should throw an error if status is not valid', (done) => {
        Player.create({
          nickname: 'Guido10',
          status: 'cobre',
          ranking: 2,
          avatar: 'avatar.jpg'
        })
        .then(() => done(new Error('It requires a valid status')))
        .catch(() => done());
      });

      it('should throw an error if ranking is null', (done) => {
        Player.create({
          nickname: 'Brazil20',
          status: 'plata',
          avatar: 'avatar.jpg',

        })
        .then(() => done(new Error('It requires a ranking')))
        .catch(() => done());
      });

      it('should throw an error if ranking is not valid', (done) => {
        Player.create({
          nickname: 'Brazil20',
          status: 'plata',
          ranking: 'uno',
          avatar: 'avatar.jpg',

        })
        .then(() => done(new Error('It requires a valid ranking')))
        .catch(() => done());
      });

      it('should work when it recibes all the necessary fields', (done) => {
        Player.create({ nickname: 'ArmanDios1',
                         status: 'bronce', 
                         ranking: 10,
                         avatar: 'avatar.png' })
        .then(() => done())
        .catch(() => done());
      });

      it('should not work when it does not recibe all the necessary fields', (done) => {
         Player.create({
         nickname: 'Vidal1000',
        })
        .then(() => done(new Error('All the field must be "allownull false"')))
        .catch(() => done());
     });
    });
  });
});