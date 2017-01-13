
// Data that is given back from the function readFeaturings
// Title is the title of a file without the featuring-Information
// Feat a Array, where each element is a artist, who has a
// featuring on the song
export interface Featuring {
	title: string,
	feat: Array<string>
};

// Reads the featurings from a songs title
// Input: Test (feat. Testartist, Testartist2  & Testartist3)
// Output: { title: 'Test', feat: [ 'Testartist', 'Testartist2', 'Testartist3' ] }
export function readFeaturing(title: string): Featuring {
	if ( title == null ) return { title: undefined, feat: [] };

	const featRegEx: RegExp = /\(\s*feat(\.|uring)?\s*([^\)]+)\s*\)/i;
	const feats: RegExpExecArray = featRegEx.exec(title);

	// If no featuring string is included the title will be returned like it was
	// This means no featurings could be found in the title
	if ( !feats || feats[2] == null ) return { title: title.trim(), feat: [] };

	// Featurings found
	// They will be removed from the title
	title = title.replace(feats[0], '').trim();

	// Array, where the cleaned featurings are pushed into
	const correctedFeaturings: Array<string> = []

	// Featuring must be splited
	const splitted = feats[2].split(',');
	splitted.forEach((f: string, i: number) => {
		// The last zu featurings are normally divided by '&'
		// Split these (if present) in two
		const iLast: number = f.lastIndexOf('&');
		if ( i == splitted.length-1  && iLast > -1 ) {
			correctedFeaturings.push(f.substring(0, iLast).trim());
			correctedFeaturings.push(f.substring(iLast + 1).trim());
		} else {
			// Remove whitespaces
			f = f.trim();
			correctedFeaturings.push(f);
		}

	});

	return { title, feat: correctedFeaturings };
}
