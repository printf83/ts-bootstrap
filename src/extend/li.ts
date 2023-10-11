import { I as ITag, core } from "@printf83/ts-tag";
import { li as HtmlLi } from "@printf83/ts-html";

export interface Li extends ITag.attr {
	value?: string;
	inline?: boolean;
}

export class li extends HtmlLi {
	constructor();
	constructor(elem: ITag.elem | ITag.elem[]);
	constructor(attr: Li);
	constructor(attr: Li, elem: ITag.elem | ITag.elem[]);
	constructor(...arg: any[]) {
		super(core.tagConstructor<Li>("elem", arg));
	}

	convert(attr: Li): ITag.attr {
		attr.class = core.mergeClass(attr.class, [attr.inline ? "list-inline-item" : undefined]);
		delete attr.inline;

		return super.convert(attr);
	}
}
