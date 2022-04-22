import chai from 'chai';
import {convert} from './Service';
import { rgb2cmykTestData } from "../../../commons/src/test-data/colors"

chai.config.includeStack = true;
const should = chai.should();

describe('test suite description', () => {
    rgb2cmykTestData.forEach((test) => {
        it(`test case description`, () => {
            convert(test.rgbValue).should.deep.equal(test.cmykValue);
        });
    });
});
