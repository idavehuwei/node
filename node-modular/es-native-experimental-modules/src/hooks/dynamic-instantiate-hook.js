// To create a custom dynamic module that doesn't correspond to one of the existing format interpretations, the dynamicInstantiate hook can be used. This hook is called only for modules that return format: 'dynamic' from the resolve hook.

export async function dynamicInstantiate(url) {
	return {
		exports: ['customExportName'],
		execute: (exports) => {
			// get and set functions provided for pre-allocated export names
			exports.customExportName.set('value');
		}
	};
}

// With the list of module exports provided upfront, the execute function will then be called at the exact point of module evaluation order for that module in the import tree.