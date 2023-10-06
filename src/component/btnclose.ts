import { core } from "@printf83/ts-tag";
import { I, button } from "@printf83/ts-html";
import { bsConsNoElemArg } from "../util.js";

export interface Btnclose extends I.button {
	label?: string;
	white?: boolean;
}

const convert = (attr: Btnclose) => {
	//default value
	attr.label ??= "Close";
	attr.type ??= "button";

	//add btn-close class
	//white
	attr.class = core.mergeClass(attr.class, ["btn-close", attr.white ? "btn-close-white" : undefined]);

	delete attr.white;

	return attr;
};

export class btnclose extends button {
	constructor();
	constructor(attr: Btnclose);
	constructor(...arg: any[]) {
		super(bsConsNoElemArg(convert, arg));
	}
}
