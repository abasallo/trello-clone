terraform {
  backend "s3" {
    region                  = "eu-west-2"
    bucket                  = "abasallo-free-1-terraform-state"
    key                     = "trello-clone-frontend-s3"
    shared_credentials_file = "~/.aws-abasallo-free-1/credentials"
  }
}

provider "aws" {
  shared_config_files      = ["~/.aws-abasallo-free-1/config"]
  shared_credentials_files = ["~/.aws-abasallo-free-1/credentials"]
}
