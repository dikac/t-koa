/// <reference types="koa__router" />
import Context from "../../middleware/context/context";
import { Next } from "koa";
import { Middleware } from "@koa/router";
export default function ServerError(middleware: (body: Context, next: Next) => void): Middleware;