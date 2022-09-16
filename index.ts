import {
  APIGatewayProxyEvent,
  APIGatewayProxyResultV2,
  Handler,
} from "aws-lambda";
import * as _ from "lodash";

export const handler: Handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResultV2> => {
  const max = 80;
  const val = _.random(max);
  const res = {
    statusCode: 200,
    body: `random value max ${max}: value ${val}`,
  };
  return res;
};
