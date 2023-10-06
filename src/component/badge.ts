import { I, core } from "@printf83/ts-tag";
import { span } from "@printf83/ts-html";
import { bsConstArg } from "../util.js";

const convert = (attr: I.attr) => {
	attr.class = core.mergeClass(attr.class, "badge");
	return attr;
};

export class badge extends span {
	constructor();
	constructor(attr: I.attr);
	constructor(elem: I.elem | I.elem[]);
	constructor(attr: I.attr, elem: I.elem | I.elem[]);
	constructor(...arg: any[]) {
		super(convert(bsConstArg("elem", arg)));
	}
}
