terraform {
  # Terraform state storing S3 bucket
  backend "s3" {
    region                  = "eu-west-2"
    bucket                  = "abasallo-terraform-state"
    key                     = "aws-monorepo"
    shared_credentials_file = "~/.aws-abasallo/credentials"
    profile                 = "abasallo"
  }
}

# AWS provider configuration
provider "aws" {
  shared_config_files      = ["~/.aws-abasallo/config"]
  shared_credentials_files = ["~/.aws-abasallo/credentials"]
  profile                  = "abasallo"
}
