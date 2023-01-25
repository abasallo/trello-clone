import awsServerlessExpress from 'aws-serverless-express'
import { APIGatewayEvent, Context } from 'aws-lambda'

import app from ".//app";

const index = awsServerlessExpress.createServer(app)

export const handler = (event: APIGatewayEvent, context: Context) => awsServerlessExpress.proxy(index, event, context)
