resource "aws_apigatewayv2_api" "backend_api" {
  name          = "trello-clone-backend-api"
  protocol_type = "HTTP"
  target        = aws_lambda_function.backend_lambda.arn
}

resource "aws_lambda_permission" "backend_api_lambda_permission" {
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.backend_lambda.arn
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_apigatewayv2_api.backend_api.execution_arn}/*/*"
}