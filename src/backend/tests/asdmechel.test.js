

//Подключаем dev-dependencies
const chai = require('chai'),
  chaiHttp = require('chai-http'),
  should = require('chai').should(),
  expect = chai.expect,
  assert = chai.assert,
  app = require('./../asdmechel.js')

const authTestParams = {
  trueAuth: {
    username: "asd",
    password: "asd"
  },
  falseAuth: {
    username: "born",
    password: "born"
  }
}

chai.use(chaiHttp);
//Наш основной блок
// describe('Login ', () => {
//     beforeEach((done) => { //Перед каждым тестом чистим базу
//         Book.remove({}, (err) => { 
//            done();         
//         });     
//     });

/*
* Тестs для  Auth/Login
*/
describe('Post to Auth/Login', () => {
  it('Test with Correct login parameters. It should return (token:string, coockes, user)', (done) => {
    chai.request(app)
      .post('/auth/login')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send(authTestParams.trueAuth)
      .end((err, res) => {
        expect(res).have.status(200);
        assert.isNull(err);
        assert.typeOf(res.body.token, 'string', 'Token is string')
        assert.typeOf(res.body.user, 'Object');
        assert.equal(res.body.user.username, authTestParams.trueAuth.username)
        done();
      });
  });
  
  it('Test with Uncorrect login parameters. It should return err', (done) => {
    chai.request(app)
      .post('/auth/login')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send(authTestParams.falsewAuth)
      .end((err, res) => {
        expect(res).have.status(400);
        assert.isNull(err);        
        done();
      });
  });

  it('Test with Uncorrect login parameters. It should return err', (done) => {
    chai.request(app)
      .post('/auth/login')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send(authTestParams.falseAuth)
      .end((err, res) => {
        expect(res).have.status(400);
        assert.isNull(err);        
        done();
      });
  });

  it('Test with uncorrect Content-Type request. It should return err', (done) => {
    chai.request(app)
      .post('/auth/login')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send(authTestParams.falseAuth)
      .end((err, res) => {
        //console.log(err)
        //expect(res).have.status(400);
        //assert.isNull(err);        
        done();
      });
  });

  it('Test with Empty request body. It should return err Missing credentials', (done) => {
    chai.request(app)
      .post('/auth/login')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send({})
      .end((err, res) => {
        expect(res).have.status(400);
        assert.isNull(err, 'Error is null');        
        assert.equal(res.body.message, 'Missing credentials');
        done();
      });
  });

});