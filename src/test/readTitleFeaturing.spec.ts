import { expect } from 'chai';
import * as feat from '../lib/index';
import * as mocha from 'mocha';
import { suite, test } from 'mocha-typescript';

@suite('Check different combinations for title syntax "title (feat. a1, a2 & a3)"')
class Test_Title_Featuring {

	@test('Check if no title is given')
	no_title() {
		const res: feat.TitleFeaturing = feat.readTitleFeaturing(undefined);

		expect(res).to.be.not.undefined;
		expect(res.title).to.be.undefined;
		expect(res.feat).to.be.a('array');
		expect(res.feat.length).to.be.equal(0);
	}

	@test('Check "title (feat. a1, a2 & a3)"')
	feat_3_artists() {
		const title: string = "Testtitle (feat. a1, a2 & a3)";
		const res: feat.TitleFeaturing = feat.readTitleFeaturing(title);

		expect(res).to.be.not.undefined;
		expect(res.title).to.be.equal('Testtitle');
		expect(res.feat).to.be.a('array');
		expect(res.feat.length).to.be.equal(3);
		expect(res.feat[0]).to.be.equal('a1');
		expect(res.feat[1]).to.be.equal('a2');
		expect(res.feat[2]).to.be.equal('a3');
	}

	@test('Check "title (featuring a1, a2 & a3)"')
	featuring_3_artists() {
		const title: string = "Testtitle (featuring a1, a2 & a3)";
		const res: feat.TitleFeaturing = feat.readTitleFeaturing(title);

		expect(res).to.be.not.undefined;
		expect(res.title).to.be.equal('Testtitle');
		expect(res.feat).to.be.a('array');
		expect(res.feat.length).to.be.equal(3);
		expect(res.feat[0]).to.be.equal('a1');
		expect(res.feat[1]).to.be.equal('a2');
		expect(res.feat[2]).to.be.equal('a3');
	}

	@test('Check "title (feat. a1 & a2)"')
	feat_2_artists() {
		const title: string = "Testtitle (feat. a1 & a2)";
		const res: feat.TitleFeaturing = feat.readTitleFeaturing(title);

		expect(res).to.be.not.undefined;
		expect(res.title).to.be.equal('Testtitle');
		expect(res.feat).to.be.a('array');
		expect(res.feat.length).to.be.equal(2);
		expect(res.feat[0]).to.be.equal('a1');
		expect(res.feat[1]).to.be.equal('a2');
	}

	@test('Check "title (feat. a1)"')
	feat_1_artist() {
		const title: string = "Testtitle (feat. a1)";
		const res: feat.TitleFeaturing = feat.readTitleFeaturing(title);

		expect(res).to.be.not.undefined;
		expect(res.title).to.be.equal('Testtitle');
		expect(res.feat).to.be.a('array');
		expect(res.feat.length).to.be.equal(1);
		expect(res.feat[0]).to.be.equal('a1');
	}

	@test('Check "title"')
	feat_no_artist() {
		const title: string = "Testtitle";
		const res: feat.TitleFeaturing = feat.readTitleFeaturing(title);

		expect(res).to.be.not.undefined;
		expect(res.title).to.be.equal('Testtitle');
		expect(res.feat).to.be.a('array');
		expect(res.feat.length).to.be.equal(0);
	}

	@test('Replace whitespaces')
	replace_whitespaces_title() {
		const title: string = " Testtitle  ";
		const res: feat.TitleFeaturing = feat.readTitleFeaturing(title);

		expect(res).to.be.not.undefined;
		expect(res.title).to.be.equal('Testtitle');
		expect(res.feat).to.be.a('array');
		expect(res.feat.length).to.be.equal(0);
	}

	@test('Replace whitspaces artist')
	replace_whitespaces_artists() {
		const title: string = " Testtitle   ( feat.    a1   & a2  ) ";
		const res: feat.TitleFeaturing = feat.readTitleFeaturing(title);

		expect(res).to.be.not.undefined;
		expect(res.title).to.be.equal('Testtitle');
		expect(res.feat).to.be.a('array');
		expect(res.feat.length).to.be.equal(2);
		expect(res.feat[0]).to.be.equal('a1');
		expect(res.feat[1]).to.be.equal('a2');
	}
}
