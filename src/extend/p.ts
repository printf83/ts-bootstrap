import { I as ITag, core } from "@printf83/ts-tag";
import { p as HtmlP } from "@printf83/ts-html";

export interface P extends ITag.attr {
	lead?: boolean;
}

export class p extends HtmlP {
	constructor();
	constructor(elem: ITag.elem | ITag.elem[]);
	constructor(attr: P);
	constructor(attr: P, elem: ITag.elem | ITag.elem[]);
	constructor(...arg: any[]) {
		super(core.tagConstructor<P>("elem", arg));
	}

	convert(attr: P): ITag.attr {
		attr.class = core.mergeClass(attr.class, attr.lead ? "lead" : undefined);
		delete attr.lead;
		return super.convert(attr);
	}
}
