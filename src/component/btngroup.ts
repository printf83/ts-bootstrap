import { I, core } from "@printf83/ts-tag";
import { div } from "@printf83/ts-html";
import { bsConstArg } from "../util.js";

export interface Btngroup extends Omit<I.attr, "role"> {
	role?: "group" | "toolbar";
	weight?: "sm" | "lg";
	vertical?: boolean;
}
const convert = (attr: Btngroup): I.attr => {
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

	return attr as I.attr;
};

export class btngroup extends div {
	constructor();
	constructor(attr: Btngroup);
	constructor(elem: I.elem | I.elem[]);
	constructor(attr: Btngroup, elem: I.elem | I.elem[]);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Btngroup>("elem", arg)));
	}
}
