import { I as IHtml } from "@printf83/ts-html";
import { Button as BButton } from "bootstrap";
import { bsType } from "../interface/bsType.js";
import { bsConstArg, bsConstArgTag } from "../util.js";
import { I as ITag, core } from "@printf83/ts-tag";

export interface Button extends Omit<IHtml.button, "role"> {
	color?: bsType.btnColor;
	outline?: boolean;
	dismiss?: "modal" | "alert" | "offcanvas" | "toast";
	weight?: "lg" | "sm";
	toggle?: true | "button" | "tab" | "modal";
	href?: string;
	role?: "button" | "tab";
	target?: string;
	stretched?: boolean;

	active?: boolean;
	defColor?: boolean;
}

export class button extends ITag.tag {
	constructor();
	constructor(attr: Button);
	constructor(elem: ITag.elem | ITag.elem[]);
	constructor(attr: Button, elem: ITag.elem | ITag.elem[]);
	constructor(...arg: any[]) {
		super(
			bsConstArgTag<Button>("elem", "button", "a", (i) => (i.href ? true : false), arg),
			bsConstArg<Button>("elem", arg)
		);
	}

	convert(attr: Button): ITag.attr {
		if (attr.defColor !== false) {
			attr.color ??= "primary";
		}

		if (attr.href) {
			attr.role ??= "button";
		}

		attr.type ??= "button";

		//add btn class
		//weight,role,toggle
		attr = core.mergeObject(
			{
				class: [
					attr.color ? "btn" : undefined,
					attr.weight ? `btn-${attr.weight}` : undefined,
					attr.color && attr.outline !== true ? `btn-${attr.color}` : undefined,
					attr.color && attr.outline === true ? `btn-outline-${attr.color}` : undefined,
					attr.disabled && attr.href ? "disabled" : undefined,
					attr.active ? "active" : undefined,
					attr.stretched && attr.href ? "stretched-link" : undefined,
				],
				role: attr.href && attr.role ? attr.role : undefined,
				data: {
					"bs-toggle": attr.toggle ? (attr.toggle === true ? "button" : attr.toggle) : undefined,
					"bs-target": attr.target,
					"bs-dismiss": attr.dismiss,
				},
				aria: {
					disabled: attr.disabled && attr.href ? "true" : undefined,
					pressed: attr.active ? "true" : undefined,
				},
				tabindex: attr.disabled && attr.href ? "-1" : undefined,
			},
			attr
		);

		delete attr.color;
		delete attr.outline;
		delete attr.weight;
		delete attr.toggle;
		delete attr.target;
		delete attr.dismiss;
		delete attr.active;
		delete attr.defColor;

		if (attr.href) {
			if (attr.disabled) {
				delete attr.href;
			}

			delete attr.disabled;
		}

		return super.convert(attr);
	}

	static init = (elem: Element | string) => {
		return button.getOrCreateInstance(elem);
	};
	static getInstance = (elem: Element | string) => {
		return BButton.getInstance(elem);
	};
	static getOrCreateInstance = (elem: Element | string) => {
		core.addEvent("destroy", elem, (i) => {
			const target = i.target as Element;

			const m = button.getInstance(target);
			if (m) {
				console.info(`Dispose bootstrap button from $1`, target);
				m.dispose();
			}
		});

		console.info(`Initialize bootstrap button to $1`, elem);
		return BButton.getOrCreateInstance(elem);
	};
	static toggle = (elem: Element | string) => {
		button.getOrCreateInstance(elem)?.toggle();
	};
	static dispose = (elem: Element | string) => {
		button.getInstance(elem)?.dispose();
	};
}
