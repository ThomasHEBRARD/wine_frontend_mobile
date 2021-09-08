export const useUnicity = (arr, key) => {
    let uniqueList = [];
    const uniqueArr = arr.filter((value) => {
        if (key === 'cepage') {
            if (!uniqueList.some((val) => JSON.stringify(val) === JSON.stringify(value[key]))) {
                uniqueList.push(value[key]);
                return value;
            }
        } else {
            if (!uniqueList.includes(value[key])) {
                uniqueList.push(value[key]);
                return value;
            }
        }
    });
    return uniqueArr;
};
