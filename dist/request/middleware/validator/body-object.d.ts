import Context from "../../../middleware/context/context";
import ValidatorInterface from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
export default function BodyObject<Ctx extends Context>(messages?: (messages: (Message & Validatable)[]) => any, type?: (object: Readonly<Validatable & Value>) => string): ValidatorInterface<any, object>;
