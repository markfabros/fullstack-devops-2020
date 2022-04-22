import chai from 'chai';
import chaiHttp from 'chai-http';
import * as config from '../../server-config.json'
import { cmyk2hslTestData } from "../../../commons/src/test-data/colors"

chai.config.includeStack = true;
const should = chai.should();
chai.use(chaiHttp);

describe('REST API test suite description', () => {
    const url = process.env.npm_config_cmyk2hsl_test_url || `http://localhost:${config.port}`;
    console.log('Test URL: ' + url);

    cmyk2hslTestData.forEach((test) => {
        it(`test case description`, (done) => {
            chai.request(url)
                .get('/')
                .query(`color=${JSON.stringify(test.cmykValue)}`)
                .end((err, res) => {
                    should.not.exist(err);
                    res.should.have.status(200);
                    res.body.should.deep.equal(test.hslValue);
                    done();
                });
        });
    });
});