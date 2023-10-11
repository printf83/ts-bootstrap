import { I as ITag, core } from "@printf83/ts-tag";
import { span } from "@printf83/ts-html";
import { bsConstArg } from "../util.js";

export class badge extends span {
	constructor();
	constructor(attr: ITag.attr);
	constructor(elem: ITag.elem | ITag.elem[]);
	constructor(attr: ITag.attr, elem: ITag.elem | ITag.elem[]);
	constructor(...arg: any[]) {
		super(bsConstArg("elem", arg));
	}

	convert(attr: ITag.attr): ITag.attr {
		attr.class = core.mergeClass(attr.class, "badge");
		return super.convert(attr);
	}
}
