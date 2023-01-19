import awsServerlessExpress from 'aws-serverless-express'
import { APIGatewayEvent, Context } from 'aws-lambda'

import app from ".//app";

const lambda = awsServerlessExpress.createServer(app)

export const handler = (event: APIGatewayEvent, context: Context) => awsServerlessExpress.proxy(lambda, event, context)
