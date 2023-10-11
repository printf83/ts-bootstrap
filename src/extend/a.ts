import { a as HtmlA, I as IHtml } from "@printf83/ts-html";
import { I as ITag, core } from "@printf83/ts-tag";
import { bsType } from "../interface/bsType.js";

export interface A extends IHtml.a {
	color?: bsType.linkColor;
	stretched?: true;

	linkColor?: bsType.linkColor;
	linkUnderlineColor?: bsType.linkUnderlineColor;
	linkOffset?: bsType.linkOffset;
	linkOffsetHover?: bsType.linkOffsetHover;
	linkOpacity?: bsType.linkOpacity;
	linkUnderline?: bsType.linkUnderline;
	linkUnderlineOpacity?: bsType.linkUnderlineOpacity;
	linkUnderlineOpacityHover?: bsType.linkUnderlineOpacityHover;
	linkOpacityHover?: bsType.linkOpacityHover;
}

export class a extends HtmlA {
	constructor();
	constructor(elem: ITag.elem | ITag.elem[]);
	constructor(attr: A);
	constructor(attr: A, elem: ITag.elem | ITag.elem[]);
	constructor(...arg: any[]) {
		super(core.tagConstructor<A>("elem", arg));
	}

	convert(attr: A): IHtml.a {
		attr.class = core.mergeClass(attr.class, [
			attr.color ? `link-${attr.color}` : undefined,
			attr.stretched ? "stretched-link" : undefined,
			attr.disabled ? "disabled" : undefined,
		]);

		if (attr.disabled) {
			delete attr.href;

			attr = core.mergeObject(
				{
					aria: { disabled: "true" },
					tabindex: -1,
				},
				attr
			);
		}

		delete attr.color;
		delete attr.stretched;
		delete attr.disabled;

		return super.convert(attr);
	}
}
