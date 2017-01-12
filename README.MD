# Extract Featurings

Extract song featurings from a title, which has the format "Songtitle (feat. artist1, artist2 & artist3)".

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

The module has no further productive dependencies.

Install the module with npm to use it in your project.
```
npm install --production extract-featurings
```

To change the code or run test of the module you can install it with its development dependencies:
```
npm install extract-featurings
```


After installing the module can be used the following way:
```typescript
import * as feat from 'extract-faturings';

const title: string = 'Title (feat. artist1, artist2 & artist3)';

// Extract the featurings from the song title
const featurings: Featuring = feat.readFeaturing(title);

// Logs the following result:
// featurings = {
//		title: 'Title',
//		feat: [ 'artist1', 'artist2', 'artist3' ]
// };
console.log(featurings);
```

## Testing the module

To test the module you can use the built in tests.
For testing the frameworks mocha and chai are used. To check the code coverage the framework istanbul is used.

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

I use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Stefan Läufle** (https://github.com/stefanFCB94)

## License

This project is licensed under the MIT License
