import { I as ITag, core } from "@printf83/ts-tag";
import { abbr as HtmlAbbr } from "@printf83/ts-html";

export interface Abbr extends ITag.attr {
	small?: true;
}

export class abbr extends HtmlAbbr {
	constructor();
	constructor(elem: ITag.elem | ITag.elem[]);
	constructor(attr: Abbr);
	constructor(attr: Abbr, elem: ITag.elem | ITag.elem[]);
	constructor(...arg: any[]) {
		super(core.tagConstructor<Abbr>("elem", arg));
	}

	convert(attr: Abbr): ITag.attr {
		attr.class = core.mergeClass(attr.class, attr.small ? "initialism" : undefined);
		delete attr.small;
		return super.convert(attr);
	}
}
