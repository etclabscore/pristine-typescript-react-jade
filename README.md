# Pristine Typescript React Jade

<h1 align="center">
  <p><a href="https://jade.builders"><img alt="jade logo" src="https://raw.githubusercontent.com/etclabscore/jade-media-assets/master/jade-logo-light/jade-logo-light%20(PNG)/256x256.png" alt="jade.builders" width="125"></a></p>
</h1>

The goal of Jade is to provide a suite of tools to enable the creation of truly peer-to-peer applications on top of EVM-based blockchains like Ethereum Classic.

This is an open source repository in its original condition. It leverages Typescript React, and [Jade](https://jade.builders) to give a good starting point for new and existing projects for peer-to-peer decentralized applications.

Pristine Typescript React Jade is a fork of [etclabscore/pristine-typescript-react](https://github.com/etclabscore/pristine-typescript-react).

There are a lack of repositories to start from to build community driven open source projects. Pristine Typescript React Jade is a complete starting point, it follows a Documentation Driven Development approach, and can be used as a resource to augment existing documentation.


## Screenshot
<h1 align="center">
  <img src="https://user-images.githubusercontent.com/364566/60776464-53787600-a0e1-11e9-9db3-44874d217b3a.png">
</h1>


## How to use Pristine in your project

There are 3 options for using pristine with your project.
1. Fork this repo as the start of your own, OR
2. [follow these instructions](https://thoughts.t37.net/merging-2-different-git-repositories-without-losing-your-history-de7a06bba804) to use it on an existing repository.
3. Use the `Use this template` button on this repository.

## Documentation Driven Development

There are many ways to drive open source development. Documenting the problem in the README gives a middle ground between technical and non-technical specifications. This allows organizing solutions to this challenge around community and documentation.

> [...] a beautifully crafted library with no documentation is also damn near worthless. If your software solves the wrong problem or nobody can figure out how to use it, there’s something very bad going on.

- [Readme Driven Development](http://tom.preston-werner.com/2010/08/23/readme-driven-development.html) by Tom Preson-Werner

### Conventions and Specifications

This repository has some strong opinions built in like circleci, semantic-release, npm. So feel free to fork and change it at your own discretion. It is only meant to be a starting point. That being said:

Using conventions, documentation and specifications make it easier to:
- communicate the problem you are solving
- ease onboarding
- build and use composable tools
- promote open source contribution and engagement
- promote issue and feature discussion on Github itself

#### Resources

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

## Getting Started

To get started, [fork](https://help.github.com/articles/fork-a-repo/) or [duplicate](https://help.github.com/articles/duplicating-a-repository/) the repository. Then edit this file and delete everything above this line.

Then edit the `package.json` and change the `name` and `homepage` fields to match your newly created repository.

### Contributing

How to contribute, build and release are outlined in [CONTRIBUTING.md](CONTRIBUTING.md), [BUILDING.md](BUILDING.md) and [RELEASING.md](RELEASING.md) respectively. Commits in this repository follow the [CONVENTIONAL_COMMITS.md](CONVENTIONAL_COMMITS.md) specification.

## Usage

This project requires the service runner, it is packaged as a command in the `package.json`.

To get it up and running run the following commands separately:

- `npm start`
- `npm run service-runner`
