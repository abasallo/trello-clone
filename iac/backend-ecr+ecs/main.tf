terraform {
  backend "s3" {
    region                  = "eu-west-2"
    bucket                  = "abasallo-free-1-terraform-state"
    key                     = "aws-monorepo-backend-ecr+ecs"
    shared_credentials_file = "~/.aws-abasallo-free-1/credentials"
  }
}

provider "aws" {
  shared_config_files      = ["~/.aws-abasallo-free-1/config"]
  shared_credentials_files = ["~/.aws-abasallo-free-1/credentials"]
}

resource "aws_ecr_repository" "ecr_repo" {
  name = "aws-monorepo-ecr-repo"
}
