resource "aws_cognito_user_pool" "ownyourday_user_pool" {
    name = "ownyourday"
}

resource "aws_cognito_user_pool_domain" "ownyourday-domain" {
    domain       = "ownyourday"
    user_pool_id = aws_cognito_user_pool.ownyourday_user_pool.id
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
    name = "ownyourday"
    user_pool_id = aws_cognito_user_pool.ownyourday_user_pool.id
    callback_urls                        = var.client_callback_urls
    logout_urls = var.client_logout_urls
    allowed_oauth_flows_user_pool_client = true
    allowed_oauth_flows                  = ["code"]
    allowed_oauth_scopes                 = ["email", "openid", "profile", "aws.cognito.signin.user.admin"]
    supported_identity_providers         = ["COGNITO", "Google"]
}
