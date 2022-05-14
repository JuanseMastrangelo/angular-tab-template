export const ComponentLookupRegistry: Map<string, any> = new Map();

export function ComponentLookup(key: string): any {
    return (cls) => {
        ComponentLookupRegistry.set(key, cls);
    };
};
