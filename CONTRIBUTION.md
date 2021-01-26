# Installation

To start you need to clone https://github.com/ruljin/CodersCamp2020.Project.TypeScript.YahtzeeGame git repository.

## Requirements

Application requires few tools installed on your system

* nodejs **>12.0.0**
* yarn **>2.0.0**

# Development

Each change in this repository should be made by pull request. At least three approvals are required to merge. After merge process every temporary branch should be deleted (except develop branch). Commit messages should contain useful informations about what was done.

Branch types:
 - main - last stable version of app
 - dev - incoming changes to the next release, should be merged to main
 - feature - any new code, should be merged into dev branch, eg. `feature/integration-with-api`
 - bugfix - necessary fixes for non-production code, should be merged into dev branch, eg. `bugfix/login-form-validation`
 - hotfix - necessary fixes for production code, should be merged into main branch, eg. `hotfix/missing-unauthorized-user-redirect`
 - gh-pages - build version of app, it is hosted through github pages
