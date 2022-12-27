# Infrastructure

# Requirements

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

- [Hosting a static website on s3 using Terraform](https://medium.com/@dblencowe/hosting-a-static-website-on-s3-using-terraform-0-12-aa5ffe4103e)
- [https://github.com/JuanLSanchez/terraform-aws-simple-cloudfront-s3-web/blob/master/main.tf](https://github.com/JuanLSanchez/terraform-aws-simple-cloudfront-s3-web/blob/master/main.tf)
