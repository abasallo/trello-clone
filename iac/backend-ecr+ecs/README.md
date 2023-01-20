# Infrastructure

# Requirements

- Install (optional) & [configure credentials for AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html).
- Terraform v1.3.6 ([https://www.terraform.io/downloads.html]). To be able to install a specific version, tfenv is recommended.
- tfenv ([https://github.com/tfutils/tfenv]). To be able to install versions with no darwin_arm64 available, use a Rosetta Terminal.
  - tfenv install 1.3.6
  - tfenv use 1.3.6
- Access to AWS with enough permissions to create and destroy resources
- Some knowledge of AWS infrastructure

# Usage

A bucket with the name abasallo-free-1-terraform-state (check main.ts for the actual name and region) is required to store the terraform state. 
The bucket must be created manually.

To start with all the modules need initialisation so run `terraform init` to do that.

Run `terraform plan` to check the configuration files are valid and all variables have been declared.

Run `terraform apply` to bring up the infrastructure or apply any changes.

Run `terraform destroy` to tear down the infrastructure. This can take a while if CloudFront is an
active resource. **Don't run this unless you mean to destroy everything**

# References

- [How to Deploy a Dockerised Application on AWS ECS With Terraform](https://medium.com/avmconsulting-blog/how-to-deploy-a-dockerised-node-js-application-on-aws-ecs-with-terraform-3e6bceb48785)
