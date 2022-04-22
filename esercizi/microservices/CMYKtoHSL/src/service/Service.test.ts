import chai from 'chai';
import {convert} from './Service';
import { cmyk2hslTestData } from "../../../commons/src/test-data/colors"

chai.config.includeStack = true;
const should = chai.should();

describe('test suite description', () => {
    cmyk2hslTestData.forEach((test) => {
        it(`test case description`, () => {
            convert(test.cmykValue).should.deep.equal(test.hslValue);
        });
    });
});
