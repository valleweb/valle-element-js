# generator-polymer-init-valle-element-js

> A generator for valle-elements - web components with Polymer 3

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][daviddm-image]][daviddm-url]

## Table of contents

- [generator-polymer-init-valle-element-js](#generator-polymer-init-valle-element-js)
  - [Table of contents](#table-of-contents)
  - [How to install and use](#how-to-install-and-use)
  - [The generated element](#the-generated-element)
      - [Stack / Features:](#stack--features)
      - [Folders Structure:](#folders-structure)
      - [UI Docs:](#ui-docs)
  - [Development](#development)
      - [Run the project locally](#run-the-project-locally)
      - [Code Style](#code-style)
      - [Tests](#tests)
  - [Versioning](#versioning)
  - [Contributing](#contributing)
  - [History](#history)
  - [License](#license)

## How to install and use

Verify if you have [node](http://nodejs.org/) and [yarn](https://yarnpkg.com/en/) installed.

1 - Install [Polymer CLI](https://www.polymer-project.org/3.0/docs/tools/polymer-cli):

```sh
$ yarn global add polymer-cli
```

2 - Install the valle-element-js generator:

```sh
$ yarn global add generator-polymer-init-valle-element-js
```

3 - Then generate your new element:

```sh
$ polymer init
```

## The generated element

#### Stack / Features:

- Polymer **3.x**
- **Yarn** for dependencies
- Unit tests with **Web Component Tester**
- Lint with **ESlint**
- CI with **travis**
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
	├── test/
	|   ├── you-element_test.html
	|   └── index.html
	├── .editorconfig
	├── .eslintrc.json
	├── .gitignore
	├── .travis.yml
	├── wct.conf.json
	├── you-element.js
	├── index.html
	├── index.js
	└── package.json

#### UI Docs:

Provide by [iron-demo-helpers](https://github.com/PolymerElements/iron-demo-helpers).

![UI docs demo](img/ui-docs-demo.gif)

## Development

#### Run the project locally

1 - Prepare the environment:

```sh
$ yarn global add polymer-cli
```

2 - Clone the project and install the dependencies:

```sh
$ git clone https://github.com/valleweb/generator-polymer-init-valle-element-js.git
$ cd generator-polymer-init-valle-element-js
$ yarn
```

3 - Link the generator locally:

```sh
$ npm link
```

4 - Run the generator:

```sh
$ polymer init
```

#### Code Style

Follow the [Valle style guide](https://github.com/valleweb/valle-style-guide).

#### Tests

*Run the unit tests with [mocha](https://mochajs.org/) and Validate the code style with [ESLint](http://eslint.org/):*

```sh
$ yarn run test
```

## Versioning

To keep better organization of releases we follow the [Semantic Versioning 2.0.0](http://semver.org/) guidelines.

## Contributing

Find on our [issues](https://github.com/valleweb/generator-polymer-init-valle-element-js/issues/) the next steps of the project ;)
<br>
Want to contribute? [Follow these recommendations](https://github.com/valleweb/generator-polymer-init-valle-element-js/blob/master/CONTRIBUTING.md).

## History

See [Releases](https://github.com/valleweb/generator-polymer-init-valle-element-js/releases) for detailed changelog.

## License

MIT © [valleweb](https://github.com/valleweb/)

[npm-image]: https://badge.fury.io/js/generator-polymer-init-valle-element-js.svg
[npm-url]: https://npmjs.org/package/generator-polymer-init-valle-element-js
[travis-image]: https://travis-ci.org/LarissaAbreu/generator-polymer-init-valle-element-js.svg?branch=master
[travis-url]: https://travis-ci.org/LarissaAbreu/generator-polymer-init-valle-element-js
[daviddm-image]: https://david-dm.org/LarissaAbreu/generator-polymer-init-valle-element-js.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/LarissaAbreu/generator-polymer-init-valle-element-js
