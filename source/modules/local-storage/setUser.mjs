const setUser = function (key, userObj) {
    try {
        const data = JSON.stringify(userObj);
  
        localStorage.setItem(key, data);
    } catch (error) {
        throw new Error("Failed to save changes in Local storage");
    }
};
  
export default setUser;