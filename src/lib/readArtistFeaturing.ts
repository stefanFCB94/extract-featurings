// Artist is the name of the main artist without the artists with featurings
// Feat a array, where each element is a artist, who has a featuring on the
// song
export interface ArtistFeaturing {
	artist: string,
	feat: Array<string>
};

export function reatArtistFeaturing(artist: string): ArtistFeaturing {
	if ( artist == null ) return { artist: undefined, feat: [] };

	const featRegex: RegExp = /^(.+)?feat(\.|uring)\s(.+)$/i;
	const feats: RegExpExecArray = featRegex.exec(artist);

    if ( !feats || feats[3] == null ) return { artist: artist.trim(), feat: [] };

	artist = feats[1].trim();

	let splitted = feats[3].split(/[,&]/);
	splitted = splitted.map((val) => {
		return val.trim();
	});

	return { artist, feat: splitted };
}

