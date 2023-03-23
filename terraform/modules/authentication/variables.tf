variable "common_tags" {
    description = "Common tags you want applied to all components."
    type = object({
        Project     = string
        Environment = string
    })

    validation {
        condition     = var.common_tags["Environment"] == "production" || var.common_tags["Environment"] == "staging" || var.common_tags["Environment"] == "local"
        error_message = "Environment must be either 'local', 'staging', or 'production'"
    }

    validation {
        condition     = var.common_tags["Project"] == "ownyourday"
        error_message = "Project must be 'ownyourday'"
    }
}

variable "google_idp_client_id" {
    type = string
}

variable "google_idp_client_secret" {
    type = string
}


variable "client_callback_urls" {
    type = list(string)
}

variable "client_logout_urls" {
    type = list(string)
}
