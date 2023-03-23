terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }

  }

  backend "s3" {

  }

  required_version = ">= 1.2.0"
}

module "authentication" {
  source = "../../modules/authentication"

  common_tags = {
    Project     = "ownyourday"
    Environment = "local"
  }

  providers = {
    aws = aws
  }

  google_idp_client_id        = var.google_idp_client_id
  google_idp_client_secret    = var.google_idp_client_secret
  google_client_callback_urls = var.google_client_callback_urls
  google_client_logout_urls   = var.google_client_logout_urls
}
