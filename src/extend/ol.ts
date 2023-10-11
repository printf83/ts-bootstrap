import { I as ITag, core } from "@printf83/ts-tag";
import { I as IHtml, ol as HtmlOl } from "@printf83/ts-html";
import { li } from "./li.js";

export interface Ol extends IHtml.ol {
	unstyle?: boolean;
	inline?: boolean;
	reversed?: boolean;
	startValue?: number;
}

export class ol extends HtmlOl {
	constructor();
	constructor(elem: ITag.elem | ITag.elem[]);
	constructor(attr: Ol);
	constructor(attr: Ol, elem: ITag.elem | ITag.elem[]);
	constructor(...arg: any[]) {
		super(core.tagConstructor<Ol>("elem", arg));
	}

	convert(attr: Ol): IHtml.ol {
		attr.class = core.mergeClass(attr.class, [
			attr.unstyle ? "list-unstyle" : undefined,
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
