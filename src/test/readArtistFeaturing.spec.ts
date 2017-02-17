import { expect } from 'chai';
import * as feat from '../lib/index';
import * as mocha from 'mocha';
import { suite, test } from 'mocha-typescript';

@suite('Check different combinations for artist syntax "artist feat. a1, a2 & a3"')
class Test_Artist_Featuring {

    @test('Check if no title is given')
    no_title() {
        const res: feat.ArtistFeaturing = feat.reatArtistFeaturing(undefined);

		expect(res).to.be.not.undefined;
		expect(res.artist).to.be.undefined;
		expect(res.feat).to.be.a('array');
		expect(res.feat.length).to.be.equal(0);
    }

    @test('Check "artist feat. a1, a2 & a3"')
    feat_3_artists() {
        const artist: string = "Artist feat. a1, a2 & a3";
		const res: feat.ArtistFeaturing = feat.reatArtistFeaturing(artist);

		expect(res).to.be.not.undefined;
		expect(res.artist).to.be.equal('Artist');
		expect(res.feat).to.be.a('array');
		expect(res.feat.length).to.be.equal(3);
		expect(res.feat[0]).to.be.equal('a1');
		expect(res.feat[1]).to.be.equal('a2');
		expect(res.feat[2]).to.be.equal('a3');
    }

    @test('Check "artist featuring a1, a2 & a3"')
    featuring_3_artists() {
        const artist: string = "Artist featuring a1, a2 & a3";
		const res: feat.ArtistFeaturing = feat.reatArtistFeaturing(artist);

		expect(res).to.be.not.undefined;
		expect(res.artist).to.be.equal('Artist');
		expect(res.feat).to.be.a('array');
		expect(res.feat.length).to.be.equal(3);
		expect(res.feat[0]).to.be.equal('a1');
		expect(res.feat[1]).to.be.equal('a2');
		expect(res.feat[2]).to.be.equal('a3');
    }

    @test('Check "artist feat. a2 & a3"')
    feat_2_artists() {
        const artist: string = "Artist feat. a1 & a2";
		const res: feat.ArtistFeaturing = feat.reatArtistFeaturing(artist);

		expect(res).to.be.not.undefined;
		expect(res.artist).to.be.equal('Artist');
		expect(res.feat).to.be.a('array');
		expect(res.feat.length).to.be.equal(2);
		expect(res.feat[0]).to.be.equal('a1');
		expect(res.feat[1]).to.be.equal('a2');
    }

    @test('Check "artist feat. a1"')
    feat_1_artist() {
        const artist: string = "Artist feat. a1";
		const res: feat.ArtistFeaturing = feat.reatArtistFeaturing(artist);

		expect(res).to.be.not.undefined;
		expect(res.artist).to.be.equal('Artist');
		expect(res.feat).to.be.a('array');
		expect(res.feat.length).to.be.equal(1);
		expect(res.feat[0]).to.be.equal('a1');
    }

    @test('Check no featuring') 
    feat_no_artist() {
        const artist: string = "Artist";
		const res: feat.ArtistFeaturing = feat.reatArtistFeaturing(artist);

		expect(res).to.be.not.undefined;
		expect(res.artist).to.be.equal('Artist');
		expect(res.feat).to.be.a('array');
		expect(res.feat.length).to.be.equal(0);
    }

    @test('Remove whitespace "   artist  "')
    remove_whitespace() {
        const artist: string = "   Artist     ";
		const res: feat.ArtistFeaturing = feat.reatArtistFeaturing(artist);

		expect(res).to.be.not.undefined;
		expect(res.artist).to.be.equal('Artist');
		expect(res.feat).to.be.a('array');
		expect(res.feat.length).to.be.equal(0);
    }

    @test('Remove whitespace at featurings "  artist feat.     a1,   a2   &  a3    "')
    remove_whitespace_featurings() {
        const artist: string = "    Artist     feat.    a1   ,   a2   &    a3   ";
		const res: feat.ArtistFeaturing = feat.reatArtistFeaturing(artist);

		expect(res).to.be.not.undefined;
		expect(res.artist).to.be.equal('Artist');
		expect(res.feat).to.be.a('array');
		expect(res.feat.length).to.be.equal(3);
		expect(res.feat[0]).to.be.equal('a1');
		expect(res.feat[1]).to.be.equal('a2');
		expect(res.feat[2]).to.be.equal('a3');
    }

}