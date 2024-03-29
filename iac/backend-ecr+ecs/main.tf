terraform {
  backend "s3" {
    region                  = "eu-west-2"
    bucket                  = "abasallo-free-1-terraform-state"
    key                     = "trello-clone-backend-ecr+ecs"
    shared_credentials_file = "~/.aws/credentials"
  }
}

provider "aws" {
  shared_config_files      = ["~/.aws/config"]
  shared_credentials_files = ["~/.aws/credentials"]
}

resource "aws_ecr_repository" "ecr_repo" {
  name = "trello-clone-ecr-repo"
}
