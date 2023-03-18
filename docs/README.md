## What is DrevOps?
- Build, Test, Deploy scripts
- Docker stack
- CI/CD configuration
- Hosting integration
- Documentation repository

## What DrevOps is NOT
- A replacement for Lando, DDEV, Tokaido etc.
- A (yet another) custom docker images repository
- A hosting provider
- A CI system
- Paid SaaS or PaaS service

## Features
- **Highly configurable**  <br/>
  All configuration is made through environment variables without the need to change any of the scripts.
- **Flexible**<br/>
  Anything can be overridden for your specific project and will not be lost during the next update.
- **Pure Docker stack**  <br/>
  No special binaries to work with Docker. No generated Docker Compose configurations from custom configurations. Modify the configuration to fit your project needs.
- **Tested**  <br/>
  There are tests for workflows, configuration, deployments, CI. Everything. And they run automatically on every commit.
- **Versioned**  <br/>
  It is always clear which version of the stack your site uses.
- **Upgradable**  <br/>
  Your website can be updated to a newer version of DrevOps with minimal effort. Your project customisations are easily preserved.
- **Documented**  <br/>
  The major areas of DrevOps are explicitly documented, while most of the code is self-documented.

## Workflow

![Workflow](https://raw.githubusercontent.com/wiki/drevops/drevops/images/workflow.png)

### How does it work?
- You run installer script once
- DrevOps brings the latest release into your codebase
- You commit all new files
- If required, you may override files with changes relevant only to a specific
  project.

## Installation

1. Run [installer](https://github.com/drevops/installer/blob/master/docs/index.html):
   ```
   curl -SsL https://install.drevops.com | php
   ```
2. Commit added files.

3. Follow instructions in the generated `README.md` files of your project.

--------------------------------------------------------------------------------

## Paid support

We provide paid support for DrevOps:
- New and existing project onboarding.
- Support plans with SLAs.
- Priority feature implementation.
- Updates to the latest version of the platform.
- DevOps consulting and custom implementations.

Contact us at [support@drevops.com](mailto:support@drevops.com)
