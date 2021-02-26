export const useUnicity = (arr, key) => {
    let uniqueList = [];
    const uniqueArr = arr.filter((value) => {
        if (!uniqueList.includes(value[key])) {
            uniqueList.push(value[key]);
            return value;
        }
    });
    return uniqueArr;
};
