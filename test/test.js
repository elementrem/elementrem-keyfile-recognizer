const fs = require('fs');
const recognizer = require('../src');
const assert = require('chai').assert;

describe('recognize valid keyfiles', () => {
    const json = JSON.parse(fs.readFileSync('test/keyfiles-valid-instances.json'));

    it('type: web3 v3 gele', () => {
        assert.deepEqual(['web3', 3], recognizer(json['web3-v3-gele']))
    });
    it('type: web3 v3 ele', () => {
        assert.deepEqual(['web3', 3], recognizer(json['web3-v3-ele']))
    });
    it('type: web3 v3 parity', () => {
        assert.deepEqual(['web3', 3], recognizer(json['web3-v3-parity']))
    });
});

describe('recognize invalid keyfiles', () => {
    const json = JSON.parse(fs.readFileSync('test/keyfiles-invalid-instances.json'));

    it('missing key-value pair', () => {
        assert.notDeepEqual(['web3', 3], recognizer(json['missing-key']))
    });
    it('invalid key', () => {
        assert.notDeepEqual(['web3', 3], recognizer(json['invalid-key']))
    });
    it('invalid value-type', () => {
        assert.notDeepEqual(['web3', 3], recognizer(json['invalid-value-type']))
    });
});
