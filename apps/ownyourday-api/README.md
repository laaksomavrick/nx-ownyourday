# ownyourday-client

This repo contains the source for an express based web application api powering the back end of `ownyourday.ca`

## Local development setup

There is an external dependency for user authentication and management on [Cognito](https://aws.amazon.com/cognito/).
Set up Cognito using the terraform declarations for the `local` environment via the `terraform` directory in the project root.
Then, plumb the appropriate values into `config/cognito.development.json` - see `config.example.json` for an example of what this should look like.
