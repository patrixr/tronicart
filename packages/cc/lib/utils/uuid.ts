/**
 * Given a certain object, returns a unique ID for it
 *
 */
export const uuid = (() => {
    let lastId = 0;
    return (o: Object) => {
        const ref = o as any;
        if (typeof ref.__uniqueid !== 'number'){
            ref.__uniqueid = ++lastId;
        }
        return ref.__uniqueid;
    };  
})();