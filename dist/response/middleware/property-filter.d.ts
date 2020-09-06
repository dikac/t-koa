/// <reference types="koa__router" />
import { Middleware } from "@koa/router";
import { Response } from "koa";
export default function PropertyFilter<RequestType extends Response, Body = unknown, Property extends keyof RequestType = keyof RequestType, Return extends RequestType[Property] = RequestType[Property]>(filter: (body: RequestType[Property]) => Return, property: Property): Middleware;