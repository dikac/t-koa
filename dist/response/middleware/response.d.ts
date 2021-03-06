import Response from "@dikac/t-http/response/response";
import Context from "../../middleware/context/context";
import { Middleware } from "koa";
/**
 * use resolved {@param response} value for response data
 *
 * on error set status code to 500, and set value from {@see Promise.catch} to response body, and should be
 * handled by next middleware
 *
 * @param response
 */
export default function Response<Subject extends Response, Arguments extends unknown[]>(response: (context: Context) => Promise<Subject>): Middleware;
