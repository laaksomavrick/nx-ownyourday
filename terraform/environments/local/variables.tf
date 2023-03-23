variable "google_idp_client_id" {
    type = string
}

variable "google_idp_client_secret" {
    type = string
}

variable "client_callback_urls" {
    type = list(string)
    default = ["http://localhost:4200"]
}

variable "client_logout_urls" {
    type = list(string)
    default = ["http://localhost:4200"]
}
