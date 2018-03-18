function nameOrder(a, b) {
    let aName = a.props.name;
    let bName = b.props.name;
    let len = (aName.length < bName.length) ? aName.length : bName.length;

    for (let index = 0; index < len; index++) {
        let aCode = aName.charCodeAt(index);
        let bCode = bName.charCodeAt(index);

        if (aCode < bCode) {
            return -1;
        } else if (aCode > bCode) {
            return 1;
        }
    }

    if (aName.length < bName.length) {
        return -1;
    } else if (aName.length > bName.length) {
        return 1;
    } else {
        return 0;
    }
}

export default nameOrder;