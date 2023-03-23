output "client_id" {
  value = aws_cognito_user_pool_client.google_client.id
}

output "user_pool_domain" {
  value = aws_cognito_user_pool_domain.ownyourday_domain.domain
}

output "user_pool_id" {
  value = aws_cognito_user_pool.ownyourday_user_pool.id
}
