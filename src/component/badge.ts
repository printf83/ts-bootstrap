import { attr, elem } from "@printf83/ts-tag/build/types/interface.js";
import { mergeClass } from "@printf83/ts-tag";
import { span } from "@printf83/ts-html";
import { bsConstArg } from "../util.js";

const convert = (attr: attr) => {
	attr.class = mergeClass(attr.class, "badge");
	return attr;
};

export class badge extends span {
	constructor();
	constructor(attr: attr);
	constructor(elem: elem | elem[]);
	constructor(attr: attr, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(convert(bsConstArg("elem", arg)));
	}
}
