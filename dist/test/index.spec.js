"use strict";
var chai_1 = require("chai");
var feat = require("../lib/index");
describe('Check different combinations for syntax "title (feat. a1, a2 & a3)"', function () {
    it('Check "title (feat. a1, a2 & a3)"', function () {
        var title = "Testtitle (feat. a1, a2 & a3)";
        var res = feat.readFeaturing(title);
        chai_1.expect(res).to.be.not.undefined;
        chai_1.expect(res.title).to.be.equal('Testtitle');
        chai_1.expect(res.feat).to.be.a('array');
        chai_1.expect(res.feat.length).to.be.equal(3);
        chai_1.expect(res.feat[0]).to.be.equal('a1');
        chai_1.expect(res.feat[1]).to.be.equal('a2');
        chai_1.expect(res.feat[2]).to.be.equal('a3');
    });
    it('Check "title (feat. a1 & a2)"', function () {
        var title = "Testtitle (feat. a1 & a2)";
        var res = feat.readFeaturing(title);
        chai_1.expect(res).to.be.not.undefined;
        chai_1.expect(res.title).to.be.equal('Testtitle');
        chai_1.expect(res.feat).to.be.a('array');
        chai_1.expect(res.feat.length).to.be.equal(2);
        chai_1.expect(res.feat[0]).to.be.equal('a1');
        chai_1.expect(res.feat[1]).to.be.equal('a2');
    });
    it('Check "title (feat. a1)"', function () {
        var title = "Testtitle (feat. a1)";
        var res = feat.readFeaturing(title);
        chai_1.expect(res).to.be.not.undefined;
        chai_1.expect(res.title).to.be.equal('Testtitle');
        chai_1.expect(res.feat).to.be.a('array');
        chai_1.expect(res.feat.length).to.be.equal(1);
        chai_1.expect(res.feat[0]).to.be.equal('a1');
    });
    it('Check "title"', function () {
        var title = "Testtitle";
        var res = feat.readFeaturing(title);
        chai_1.expect(res).to.be.not.undefined;
        chai_1.expect(res.title).to.be.equal('Testtitle');
        chai_1.expect(res.feat).to.be.a('array');
        chai_1.expect(res.feat.length).to.be.equal(0);
    });
    it('Replace whitespaces', function () {
        var title = " Testtitle  ";
        var res = feat.readFeaturing(title);
        chai_1.expect(res).to.be.not.undefined;
        chai_1.expect(res.title).to.be.equal('Testtitle');
        chai_1.expect(res.feat).to.be.a('array');
        chai_1.expect(res.feat.length).to.be.equal(0);
    });
    it('Replace whitspaces artist', function () {
        var title = " Testtitle   ( feat.    a1   & a2  ) ";
        var res = feat.readFeaturing(title);
        chai_1.expect(res).to.be.not.undefined;
        chai_1.expect(res.title).to.be.equal('Testtitle');
        chai_1.expect(res.feat).to.be.a('array');
        chai_1.expect(res.feat.length).to.be.equal(2);
        chai_1.expect(res.feat[0]).to.be.equal('a1');
        chai_1.expect(res.feat[1]).to.be.equal('a2');
    });
});
