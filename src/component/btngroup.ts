import { I as ITag, core } from "@printf83/ts-tag";
import { div } from "@printf83/ts-html";
import { bsConstArg } from "../util.js";

export interface Btngroup extends Omit<ITag.attr, "role"> {
	role?: "group" | "toolbar";
	weight?: "sm" | "lg";
	vertical?: boolean;
}
const convert = (attr: Btngroup): ITag.attr => {
	attr.role ??= "group";

	attr = core.mergeObject(
		{
			class: [
				attr.vertical ? `btn-${attr.role}-vertical` : `btn-${attr.role}`,
				attr.weight ? `btn-${attr.role}-${attr.weight}` : undefined,
			],
			role: attr.role,
		},
		attr
	);

	delete attr.weight;
	delete attr.vertical;

	return attr as ITag.attr;
};

export class btngroup extends div {
	constructor();
	constructor(attr: Btngroup);
	constructor(elem: ITag.elem | ITag.elem[]);
	constructor(attr: Btngroup, elem: ITag.elem | ITag.elem[]);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Btngroup>("elem", arg)));
	}

	convert(attr: Btngroup): ITag.attr {
		attr.role ??= "group";

		attr = core.mergeObject(
			{
				class: [
					attr.vertical ? `btn-${attr.role}-vertical` : `btn-${attr.role}`,
					attr.weight ? `btn-${attr.role}-${attr.weight}` : undefined,
				],
				role: attr.role,
			},
			attr
		);

		delete attr.weight;
		delete attr.vertical;

		return super.convert(attr);
	}
}
