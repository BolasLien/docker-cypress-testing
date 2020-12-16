# docker-cypress-testing
## Setup (for Windows)
1. Install docker at [https://docs.docker.com/docker-for-windows/install/](https://docs.docker.com/docker-for-windows/install/)

2. Get `cypress/included` dorcker image at [https://hub.docker.com/r/cypress/included](https://hub.docker.com/r/cypress/included)
> this project used `cypress/included:6.1.0`

3. Pull this project

4. **First** run tests command
* `npm run build`

5. Run tests command
* `npm run test`

6. Write tests
  - All tests go into `cypress\integration`