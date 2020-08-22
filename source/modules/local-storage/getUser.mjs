const getUser = function (key) {
    try {
        const data = localStorage.getItem(key);
  
        if (!data) {
            return undefined;
        } else {
            const userObj = JSON.parse(data);
  
            return userObj;
        }
    } catch (error) {
        return undefined;
    }
}
  
export default getUser;