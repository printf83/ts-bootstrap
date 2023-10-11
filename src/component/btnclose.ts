import { I as ITag, core } from "@printf83/ts-tag";
import { I as IHtml, button } from "@printf83/ts-html";
import { bsConsNoElemArg } from "../util.js";

export interface Btnclose extends IHtml.button {
	label?: string;
	white?: boolean;
}

export class btnclose extends button {
	constructor();
	constructor(attr: Btnclose);
	constructor(...arg: any[]) {
		super(bsConsNoElemArg(arg));
	}

	convert(attr: Btnclose): ITag.attr {
		//default value
		attr.label ??= "Close";
		attr.type ??= "button";

		//add btn-close class
		//white
		attr.class = core.mergeClass(attr.class, ["btn-close", attr.white ? "btn-close-white" : undefined]);

		delete attr.white;

		return super.convert(attr);
	}
}
