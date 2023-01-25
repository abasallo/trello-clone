resource "aws_api_gateway_rest_api" "backend_api_gateway_rest" {
  name = "trello-clone-backend-api-gateway"
}

resource "aws_api_gateway_resource" "backend_api_gateway_resource" {
  rest_api_id = aws_api_gateway_rest_api.backend_api_gateway_rest.id
  parent_id   = aws_api_gateway_rest_api.backend_api_gateway_rest.root_resource_id
  path_part   = "{proxy+}"
}

resource "aws_api_gateway_method" "backend_api_gateway_method" {
  rest_api_id   = aws_api_gateway_rest_api.backend_api_gateway_rest.id
  resource_id   = aws_api_gateway_resource.backend_api_gateway_resource.id
  http_method   = "ANY"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "backend_api_gateway_integration" {
  rest_api_id             = aws_api_gateway_rest_api.backend_api_gateway_rest.id
  resource_id             = aws_api_gateway_resource.backend_api_gateway_resource.id
  http_method             = aws_api_gateway_method.backend_api_gateway_method.http_method
  integration_http_method = "POST"
  type                    = "AWS"
  uri                     = aws_lambda_function.backend_lambda.invoke_arn
}

resource "aws_api_gateway_deployment" "backend_api_gateway_deployment" {
  rest_api_id = aws_api_gateway_rest_api.backend_api_gateway_rest.id
  stage_name  = "prod"
}

resource "aws_api_gateway_stage" "backend_api_gateway_stage" {
  rest_api_id   = aws_api_gateway_rest_api.backend_api_gateway_rest.id
  stage_name    = "prod"
  deployment_id = aws_api_gateway_deployment.backend_api_gateway_deployment.id
}





