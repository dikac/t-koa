/// <reference types="koa__router" />
import { Middleware } from "@koa/router";
import { Request } from "koa";
export default function PropertyFilter<RequestType extends Request, Body = unknown, Property extends keyof RequestType = keyof RequestType, Return extends RequestType[Property] = RequestType[Property]>(filter: (body: RequestType[Property]) => Return, property: Property): Middleware;