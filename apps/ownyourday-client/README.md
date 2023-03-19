# ownyourday-client

This repo contains the source for a single-page React application powering the front end of `ownyourday.ca`

## Local development setup

There is an external dependency for user authentication and management on [Cognito](https://aws.amazon.com/cognito/).
Set up Cognito using the terraform declarations for the `local` environment via the `terraform` directory in the project root (this is a TODO).
Then, plumb the appropriate values into a file called `cognito.json` - see `cognito.example.json` for an example of what this should look like.
Examine `src/setupAmplify.ts` to see how these values are used.
