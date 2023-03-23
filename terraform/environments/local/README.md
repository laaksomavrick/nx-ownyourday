# local

Infrastructure as code definitions for local development using `terraform`.
You'll want to observe the `outputs` of initializing and applying this stack.

## Requirements

-   S3 Bucket for terraform state must exist prior to running any commands, e.g. `ownyourday-terraform-states`

## Setup

-   `cp backend.conf.example backend.conf` and populate the values
-   `terraform init -backend-config=backend.conf`
-   `terraform plan`
-   `terraform apply`

Observe outputs and plumb them into `cognito.json` in `ownyourday-client` via the `cognito.example.json`
