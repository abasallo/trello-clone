terraform {
  backend "s3" {
    region                  = "eu-west-2"
    bucket                  = "abasallo-free-1-terraform-state"
    key                     = "trello-clone-backend-serverless"
    shared_credentials_file = "~/.aws/credentials"
  }
}

provider "aws" {
  shared_config_files      = ["~/.aws/config"]
  shared_credentials_files = ["~/.aws/credentials"]
}
