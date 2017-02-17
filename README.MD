# Extract artist featurings

Extract all featurings from a song title, which has one of the following formats:
- "Songtitle (feat. artist1, artist2 & artist3)"
- "Songtitle (featuring artist1, artist2 & artist3)"

Extract all featurings from a artist string, which has on of the following formats:
- "MainArtist feat. FeatArtist1, FeatArtist2 & FeatArtist3"
- "MainArtist featuring FeatArtist1, FeatArtist2 & FeatArtist3"

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing

The module has no further productive dependencies.

Install the module with npm to use it in your project.
```
npm install --production extract-featurings
```

To change the code or run tests of the module you can install it with its development dependencies:
```
npm install extract-featurings
```

# Examples

Extract featurings from the song title:
```typescript
import {TitleFeaturing, readTitleFeaturing} from 'extract-featurings';

const title: string = 'Title (feat. artist1, artist2 & artist3)';

// Extract the featurings from the song title
const featurings: TitleFeaturing = readTitleFeaturing(title);

// Logs the following result:
// featurings = {
//	   title: 'Title',
//	   feat: [ 'artist1', 'artist2', 'artist3' ]
// };
console.log(featurings);
```

Extract featurings from the artist string:
````typescript
import { ArtistFeaturing, readArtistFeaturing } from 'extract-featurings';

const artist: string 'MainArtist feat. FeatArtist1, FeatArtist2 & FeatArtist3';

// Extract the featurings
const featurings: ArtistFeaturing = readArtistFeaturing(artist);

// Logs the following result
// featurings = {
//      artist: 'MainArtist',
//      feat: [ 'FeatArtist1', 'FeatArtist2', 'FeatArtist3' ] 
// };
console.log(featurings);
````


## Testing the module

To test the module you can use the built in tests.
For testing, the frameworks mocha and chai are used. To check the code coverage the framework istanbul is used.

To run the test install all development dependencies, with following command:

```
npm install extract-featurings
```

To start the tests run the following command:
```
gulp test
```

These test check different combinations of title and embeded featurings and if the output is correct.

## Versioning

I use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/stefanFCB94/extract-featurings).

## Authors

* [**Stefan Läufle**](https://github.com/stefanFCB94)

## License

This project is licensed under the MIT License
