import { bsConsNoElemArg } from "../util.js";
import { mergeClass } from "@printf83/ts-tag";
import { button } from "@printf83/ts-html";
import { Button } from "@printf83/ts-html/build/types/component/button.js";

export interface Btnclose extends Button {
	white?: boolean;
}

const convert = (attr: Btnclose) => {
	//default value
	attr.label ??= "Close";
	attr.type ??= "button";

	//add btn-close class
	//white
	attr.class = mergeClass(attr.class, ["btn-close", attr.white ? "btn-close-white" : undefined]);

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
