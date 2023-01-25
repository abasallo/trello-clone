resource "aws_s3_bucket" "front_bucket" {
  bucket = "trello-clone-frontend"
}

resource "aws_s3_bucket_acl" "front_bucket_acl" {
  bucket = aws_s3_bucket.front_bucket.id
  acl    = "private"
}

resource "aws_s3_bucket_versioning" "front_bucket_versioning" {
  bucket = aws_s3_bucket.front_bucket.id
  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_policy" "front_bucket_policy" {
  bucket = aws_s3_bucket.front_bucket.id
  policy = local.cloudfront_website_bucket_access
}

locals {
  cloudfront_website_bucket_access = jsonencode({
    "Version" : "2008-10-17",
    "Id" : "CloudfrontAccess to Website Files",
    "Statement" : [
      {
        "Sid" : "1",
        "Effect" : "Allow",
        "Principal" : {
          "AWS" : aws_cloudfront_origin_access_identity.front_distribution_access_identity.iam_arn
        },
        "Action" : "s3:GetObject",
        "Resource" : "arn:aws:s3:::${aws_s3_bucket.front_bucket.id}/*"
      }
    ]
  })
}
