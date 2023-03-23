resource "aws_cognito_user_pool" "ownyourday_user_pool" {
  name                = "ownyourday"
  deletion_protection = "ACTIVE"
}

resource "aws_cognito_user_pool_domain" "ownyourday_domain" {
  domain       = "ownyourday"
  user_pool_id = aws_cognito_user_pool.ownyourday_user_pool.id

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_cognito_identity_provider" "google_identity_provider" {
  user_pool_id  = aws_cognito_user_pool.ownyourday_user_pool.id
  provider_name = "Google"
  provider_type = "Google"

  provider_details = {
    authorize_scopes = "openid email profile"
    client_id        = var.google_idp_client_id
    client_secret    = var.google_idp_client_secret
  }

  attribute_mapping = {
    email    = "email"
    username = "sub"
  }
}

resource "aws_cognito_user_pool_client" "google_client" {
  name                                 = "ownyourday"
  user_pool_id                         = aws_cognito_user_pool.ownyourday_user_pool.id
  callback_urls                        = var.google_client_callback_urls
  logout_urls                          = var.google_client_logout_urls
  allowed_oauth_flows_user_pool_client = true
  allowed_oauth_flows                  = ["code"]
  allowed_oauth_scopes                 = ["email", "openid", "profile", "aws.cognito.signin.user.admin"]
  supported_identity_providers         = [aws_cognito_identity_provider.google_identity_provider.provider_name]
}
