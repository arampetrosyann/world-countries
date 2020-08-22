const normalizeInput = function (value) {
    try {
      let normVal = value.trim().toLowerCase();
  
      normVal = normVal.replace(/\s/g, "+");
  
      return normVal;
    } catch (error) {
      return undefined;
    }
}
  
export default normalizeInput;  