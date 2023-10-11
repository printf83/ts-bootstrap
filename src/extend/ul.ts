import { I as ITag, core } from "@printf83/ts-tag";
import { I as IHtml, ul as HtmlUl } from "@printf83/ts-html";
import { li } from "./li.js";

export interface Ul extends IHtml.ul {
	unstyle?: boolean;
	inline?: boolean;
}

export class ul extends HtmlUl {
	constructor();
	constructor(elem: ITag.elem | ITag.elem[]);
	constructor(attr: Ul);
	constructor(attr: Ul, elem: ITag.elem | ITag.elem[]);
	constructor(...arg: any[]) {
		super(core.tagConstructor<Ul>("elem", arg));
	}

	convert(attr: Ul): IHtml.ul {
		attr.class = core.mergeClass(attr.class, [
			attr.unstyle ? "list-unstyled" : undefined,
			attr.inline ? "list-inline" : undefined,
		]);

		if (attr.item && !attr.elem) {
			if (!Array.isArray(attr.item)) {
				attr.item = [attr.item];
			}

			attr.elem = attr.item.map((i) => {
				return new li(i);
			});
		}

		delete attr.unstyle;
		delete attr.inline;
		delete attr.item;

		return super.convert(attr);
	}
}
