import Context from "../../middleware/context/context";
import {Next} from "koa";
import IsCode from "@dikac/t-code/boolean/code";
import Number from "@dikac/t-number/boolean/number";
import IsValue from "@dikac/t-value/boolean/value";
import {Middleware} from "koa";
import Body from "@dikac/t-http/body/body";

/**
 * if body in instanceof {@see Error} set response message from {@see Error.message}
 *
 * and also according to following
 * - if also instanceof {@see Code<number>} use code value for status code
 * - if also instanceof {@see Value}, value will be used as response body
 * - if also instanceof {@see Body}, body will be used as response body, {@see Value}, takes priority
 */
export default function ErrorResponse() : Middleware {

    return function (context : Context, next : Next) {

        const body = context.response.body;

        if(!(body instanceof globalThis.Error)) {

            return next();
        }

        context.response.status = (IsCode(body) && Number(body.code)) ? body.code : 500;
        context.response.message = body.message;

        if(IsValue(body)) {

            context.response.body = body.value;

        } else if((body as any as Body).body !== undefined) {

            context.response.body = (body as any as Body).body;
        }
    }
}
