resource "aws_lambda_function" "backend_lambda" {
  function_name = "trello-clone-backend-lambda"
  filename = "dummy.zip"
  runtime = "nodejs18.x"
  role = aws_iam_role.backend_lambda_role.arn
  handler = "index.handler"
}

resource "aws_iam_role" "backend_lambda_role" {
  name = "trello-clone-backend-lambda-role"
  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}

resource "aws_iam_role_policy" "backend_lambda_policy" {
  name = "trello-clone-backend-lambda-policy"
  role = aws_iam_role.backend_lambda_role.id
  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "logs:CreateLogGroup",
        "logs:CreateLogStream",
        "logs:PutLogEvents"
      ],
      "Resource": "arn:aws:logs:*:*:*"
    }
  ]
}
EOF
}