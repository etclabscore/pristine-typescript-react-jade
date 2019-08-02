# Pristine Typescript React Jade

<h1 align="center">
  <p><a href="https://jade.builders"><img alt="jade logo" src="https://raw.githubusercontent.com/etclabscore/jade-media-assets/master/jade-logo-light/jade-logo-light%20(PNG)/256x256.png" alt="jade.builders" width="125"></a></p>
</h1>

Pristine-typescript-react-jade is a starting point for new and existing projects to create peer-to-peer decentralized applications. This repo is a a fork of [pristine-typescript-react](https://github.com/etclabscore/pristine-typescript-react) and utitlizes [Jade](https://jade.builders/), a suite of tooling for DApps. 

The goal of [Jade](https://jade.builders) is to provide a suite of tools to enable the creation of truly peer-to-peer applications on top of EVM-based blockchains like Ethereum Classic.

## Screenshot
<h1 align="center">
  <img src="https://github.com/etclabscore/jade-media-assets/blob/master/screenshots/p-tsc-react-jade-exampleDApp.png?raw=true">
</h1>

## Install

While the repo can be downloaded, cloned, or forked, the [Pritine-CLI](https://github.com/etclabscore/pristine-cli) makes it super easy to select a Pristine based template and related repositories.

### Dependencies

- at least node `v10.15.3`
- at least npm `v6.4.1`
- [pristine-cli](https://github.com/etclabscore/pristine-cli) (recommended)

Generate a project based on `pristine-typescript-react-jade` with the [Pritine-CLI](https://github.com/etclabscore/pristine-cli).

```bash
pristine-cli <PROJECT NAME>

# Follow the prompts and
# select 'pristine-typescript-react-jade'
```

<h1 align="center">
  <img src="https://github.com/etclabscore/jade-media-assets/blob/master/screenshots/pristine-cli-generate-jade-project.gif?raw=true">
</h1>

## Usage

Install package dependencies. 

```bash
npm install
```

The project utilizes [Jade Service Runner](https://github.com/etclabscore/jade-service-runner) to run an EVM based client in the background.  To run the app and background-service, run the following commands seperately.

```bash
npm start
# Runs instance of the app http://localhost:3000/
```

```bash
npm run service-runner
# Runs MultiGeth service, configured to ETC mainnet by default.
# Runs at http://localhost:8002/
```

Where's the blockchain data? _Jade Service Runner_ conveniently creates and stores service data in the `/services/` directory in the project.

```bash
.
├── node_modules
├── public
├── services
│   └── multi-geth *
└── src
```

## Contributing

### Getting Started

To get started, [fork](https://help.github.com/articles/fork-a-repo/) or [duplicate](https://help.github.com/articles/duplicating-a-repository/) the repository. Then edit this file and delete everything above this line.

Then edit the `package.json` and change the `name` and `homepage` fields to match your newly created repository.

How to contribute, build and release are outlined in [CONTRIBUTING.md](CONTRIBUTING.md), [BUILDING.md](BUILDING.md) and [RELEASING.md](RELEASING.md) respectively. Commits in this repository follow the [CONVENTIONAL_COMMITS.md](CONVENTIONAL_COMMITS.md) specification.

### Conventions and Specifications

This repository has some strong opinions built in like circleci, semantic-release, npm. So feel free to fork and change it at your own discretion. It is only meant to be a starting point. That being said:

Using conventions, documentation and specifications make it easier to:
- communicate the problem you are solving
- ease onboarding
- build and use composable tools
- promote open source contribution and engagement
- promote issue and feature discussion on Github itself

### Resources
- [Generate Pristine based Projects with the Pristine-CLI](https://www.youtube.com/watch?v=vdNJp2_gvTM)
- [Pristine-CLI repo](https://github.com/etclabscore/pristine-cli)
- [Jade Service Runner repo](https://github.com/etclabscore/jade-service-runner)

Documenation Driven Development:
- [Pristine](https://github.com/etclabscore/pristine)
- [opensource.guide](https://opensource.guide/)
- [Github community profiles for public repositories](https://help.github.com/articles/about-community-profiles-for-public-repositories/)
- [Readme Driven Development](http://tom.preston-werner.com/2010/08/23/readme-driven-development.html)
- [pengwynn/flint](https://github.com/pengwynn/flint)
- [Working Backwards](https://www.allthingsdistributed.com/2006/11/working_backwards.html)
- [Literate programming](https://en.wikipedia.org/wiki/Literate_programming)
- [Hammock Driven Development](https://www.youtube.com/watch?v=f84n5oFoZBc)
- [Inversion and The Power of Avoiding Stupidity](https://fs.blog/2013/10/inversion/)
- [choosealicense.com](http://choosealicense.com)
