# valle-element-js

> A generator for valle-elements - web components with Polymer 3

[![NPM version][npm-image]][npm-url]
[![Dependency Status][daviddm-image]][daviddm-url]

## Table of contents

- [valle-element-js](#valle-element-js)
  - [Table of contents](#table-of-contents)
  - [How to install and use](#how-to-install-and-use)
  - [The generated element](#the-generated-element)
      - [Stack / Features:](#stack--features)
      - [Folders Structure:](#folders-structure)
      - [UI Docs:](#ui-docs)
  - [Development](#development)
      - [Run the project locally](#run-the-project-locally)
      - [Code Style](#code-style)
  - [Versioning](#versioning)
  - [Contributing](#contributing)
  - [History](#history)
  - [License](#license)

## How to install and use

Verify if you have [node](http://nodejs.org/) and [yarn](https://yarnpkg.com/en/) installed.

1 - Install [Yeoman](http://yeoman.io/):

```sh
$ yarn global add yo
```

2 - Install the valle-element-js generator:

```sh
$ yarn global add @valle/generator-valle-element-js
```

3 - Then generate your new element:

```sh
$ yo @valle/valle-element-js
```

## The generated element

#### Stack / Features:

- Polymer **3.x**
- **Yarn** for dependencies
- Provide **UI docs**
- **Docs** for all
- Styling API with **custom properties**
- more...

#### Folders Structure:

	.
	├── README.md
	├── CONTRIBUTING.md
	├── LICENSE.md
	├── demo/
	|   └── index.html
	├── .gitignore
	├── you-element.js
	├── index.html
	└── package.json

#### UI Docs:

Provide by [iron-demo-helpers](https://github.com/PolymerElements/iron-demo-helpers).

## Development

#### Run the project locally

1 - Prepare the environment:

```sh
$ yarn global add yo
```

2 - Clone the project and install the dependencies:

```sh
$ git clone https://github.com/valleweb/valle-element-js.git
$ cd valle-element-js
$ yarn
```

3 - Link the generator locally:

```sh
$ npm link
```

4 - Run the generator:

```sh
$ yo
```

#### Code Style

Follow the [Valle style guide](https://github.com/valleweb/valle-style-guide).


## Versioning

To keep better organization of releases we follow the [Semantic Versioning 2.0.0](http://semver.org/) guidelines.

## Contributing

Find on our [issues](https://github.com/valleweb/valle-element-js/issues/) the next steps of the project ;)
<br>
Want to contribute? [Follow these recommendations](https://github.com/valleweb/valle-element-js/blob/master/CONTRIBUTING.md).

## History

See [Releases](https://github.com/valleweb/valle-element-js/releases) for detailed changelog.

## License

MIT © [valleweb](https://github.com/valleweb/)

[npm-image]: https://badge.fury.io/js/valle-element-js.svg
[npm-url]: https://npmjs.org/package/valle-element-js
[travis-image]: https://travis-ci.org/LarissaAbreu/valle-element-js.svg?branch=master
[travis-url]: https://travis-ci.org/LarissaAbreu/valle-element-js
[daviddm-image]: https://david-dm.org/LarissaAbreu/valle-element-js.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/LarissaAbreu/valle-element-js
