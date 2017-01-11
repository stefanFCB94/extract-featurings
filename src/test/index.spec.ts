import { expect } from 'chai';
import * as feat from '../lib/index';
import * as mocha from 'mocha';

describe('Check different combinations for syntax "title (feat. a1, a2 & a3)"', () => {

	it ('Check if no title is given', () => {
		const res: feat.Featuring = feat.readFeaturing(undefined);

		expect(res).to.be.not.undefined;
		expect(res.title).to.be.undefined;
		expect(res.feat).to.be.a('array');
		expect(res.feat.length).to.be.equal(0);
	});

	it ('Check "title (feat. a1, a2 & a3)"', () => {
		const title: string = "Testtitle (feat. a1, a2 & a3)";
		const res: feat.Featuring = feat.readFeaturing(title);

		expect(res).to.be.not.undefined;
		expect(res.title).to.be.equal('Testtitle');
		expect(res.feat).to.be.a('array');
		expect(res.feat.length).to.be.equal(3);
		expect(res.feat[0]).to.be.equal('a1');
		expect(res.feat[1]).to.be.equal('a2');
		expect(res.feat[2]).to.be.equal('a3');
	});

	it ('Check "title (feat. a1 & a2)"', () => {
		const title: string = "Testtitle (feat. a1 & a2)";
		const res: feat.Featuring = feat.readFeaturing(title);

		expect(res).to.be.not.undefined;
		expect(res.title).to.be.equal('Testtitle');
		expect(res.feat).to.be.a('array');
		expect(res.feat.length).to.be.equal(2);
		expect(res.feat[0]).to.be.equal('a1');
		expect(res.feat[1]).to.be.equal('a2');
	});

	it ('Check "title (feat. a1)"', () => {
		const title: string = "Testtitle (feat. a1)";
		const res: feat.Featuring = feat.readFeaturing(title);

		expect(res).to.be.not.undefined;
		expect(res.title).to.be.equal('Testtitle');
		expect(res.feat).to.be.a('array');
		expect(res.feat.length).to.be.equal(1);
		expect(res.feat[0]).to.be.equal('a1');
	});

	it ( 'Check "title"', () => {
		const title: string = "Testtitle";
		const res: feat.Featuring = feat.readFeaturing(title);

		expect(res).to.be.not.undefined;
		expect(res.title).to.be.equal('Testtitle');
		expect(res.feat).to.be.a('array');
		expect(res.feat.length).to.be.equal(0);
	});

	it ( 'Replace whitespaces', () => {
		const title: string = " Testtitle  ";
		const res: feat.Featuring = feat.readFeaturing(title);

		expect(res).to.be.not.undefined;
		expect(res.title).to.be.equal('Testtitle');
		expect(res.feat).to.be.a('array');
		expect(res.feat.length).to.be.equal(0);
	});

	it ( 'Replace whitspaces artist', () => {
		const title: string = " Testtitle   ( feat.    a1   & a2  ) ";
		const res: feat.Featuring = feat.readFeaturing(title);

		expect(res).to.be.not.undefined;
		expect(res.title).to.be.equal('Testtitle');
		expect(res.feat).to.be.a('array');
		expect(res.feat.length).to.be.equal(2);
		expect(res.feat[0]).to.be.equal('a1');
		expect(res.feat[1]).to.be.equal('a2');
	});

});
