const createCountryBox = function (
    { name, flag, alpha3Code, ...info },
    key,
    box
  ) {
    const countryBox = document.createElement("div");
  
    const countryFlag = document.createElement("img");
  
    const countryName = document.createElement("h4");
  
    const countryInfoBox = document.createElement("div");
  
    const saveBtn = document.createElement("button");
  
    const countryInfoList = document.createElement("ul");
  
    countryBox.classList.add("country");
  
    countryFlag.classList.add("country__img");
  
    countryName.classList.add("country__name");
  
    countryInfoBox.classList.add("country__info");
  
    saveBtn.classList.add("save-button");
  
    countryFlag.src = flag;
  
    countryFlag.alt = name;
  
    countryName.textContent = name;
  
    saveBtn.textContent = "save";
  
    saveBtn.addEventListener("click", () => {
        const data = localStorage.getItem(key);
  
        const userObj = JSON.parse(data);
  
        if (userObj.saves.countries.includes(alpha3Code)) {
            const index = userObj.saves.countries.indexOf(alpha3Code);
  
            if (index >= 0) {
                userObj.saves.countries.splice(index, 1);
            }
  
            saveBtn.textContent = "save";
        } else {
            userObj.saves.countries.push(alpha3Code);
  
            saveBtn.textContent = "unsave";
        }
  
        localStorage.setItem(key, JSON.stringify(userObj));
    });
  
    for (const key in info) {
        if (info.hasOwnProperty(key)) {
            const infoItem = document.createElement("li");
  
            const value = info[key];
  
            infoItem.textContent = `${key} - ${value}`;
  
            countryInfoList.append(infoItem);
        }
    }
  
    countryInfoBox.append(saveBtn);
  
    countryInfoBox.append(countryInfoList);
  
    countryBox.append(countryFlag);
  
    countryBox.append(countryName);
  
    countryBox.append(countryInfoBox);
  
    box.append(countryBox);
}

export default createCountryBox;