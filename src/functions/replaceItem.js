const replaceItem = (array, object) => {
    if(array.length > 0) {
        return array.map((el) => {
            return el.group === object.group ? object : [...array, object];
        });
    } else {
        return [...array, object];
    }
}

export default replaceItem;