let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);

describe('/POST CompanyNameLog', () => {
    it('it should not POST a CompanyNameLog without body', (done) => {
        let data = {}
      chai.request(server)
          .post('/company/name')
          .send(data)
          .end((err, res) => {
                res.should.have.status(422);
            done();
          });
    });

});

describe('/POST CompanyNameLog', () => {
    it('it should not POST a CompanyNameLog with name field bigger than 35 chars', (done) => {
        let data = {
            name: 'hgudshgudshguidhsguisdhuihgsduihgdhsuighsduihguishguisdhguhpsdggnisdongsdfginio',
            date: new Date()
        }
      chai.request(server)
          .post('/company/name')
          .send(data)
          .end((err, res) => {
                res.should.have.status(422);
                res.body.message.should.be.equal("\"name\" length must be less than or equal to 35 characters long")
            done();
          });
    });
});


describe('/POST CompanyStocksLog', () => {
    it('it should not POST a CompanyStocksLog when stocks data is empty', (done) => {
        let data = {
            name: 'aapl',
            date: '2022-08-04T14:13:26.726Z22',
            stocks: [{x: '', y: ''}]
        }
        chai.request(server)
          .post('/company/stocks')
          .send(data)
          .end((err, res) => {
                res.should.have.status(422);
            done();
          });
    });
});