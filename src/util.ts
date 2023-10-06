import { I, core } from "@printf83/ts-tag";

export const bsConsNoElemArg = <T extends I.attr>(fn: <T extends I.attr>(attr: T) => I.attr, arg?: any[]) => {
	if (arg) {
		if (arg.length === 1) {
			return fn(arg[0] as T);
		} else {
			return fn({});
		}
	} else {
		return fn({});
	}
};

export const bsConstArg = <T extends I.attr>(prop: string, arg?: any[]) => {
	if (arg) {
		if (arg.length === 1) {
			if (core.isAttr<T>(arg[0])) {
				return arg[0] as T;
			} else {
				return { [prop]: arg[0] } as T;
			}
		} else if (arg.length === 2) {
			return core.mergeObject<T>({ [prop]: arg[1] } as T, arg[0] as T);
		} else {
			return {} as T;
		}
	} else {
		return {} as T;
	}
};

export const bsConstArgTag = <T extends I.attr>(
	prop: string,
	t1: string,
	t2: string,
	fn: (i: T) => boolean,
	arg?: any[]
) => {
	if (arg) {
		if (arg.length === 1) {
			if (core.isAttr<T>(arg[0])) {
				return fn(arg[0]) ? t2 : t1;
			} else {
				return t1;
			}
		} else if (arg.length === 2) {
			return fn(core.mergeObject<T>({ [prop]: arg[1] } as T, arg[0] as T)) ? t2 : t1;
		} else {
			return t1;
		}
	} else {
		return t1;
	}
};
