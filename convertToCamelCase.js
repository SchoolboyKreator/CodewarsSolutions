function toCamelCase(str) {
  const string = (str) => {
    return str.split("-").length > 1 ? str.split("-") : str.split("_");
  };
  return string(str)
    .map((elem, index) => {
      return index > 0
        ? elem.charAt(0).toUpperCase() + elem.slice(1).toLowerCase()
        : elem;
    })
    .join("");
}

console.log(toCamelCase("The_Stealth_Warrior"));

// const res = string(str)
//     .map((elem, index) => {
//       if (index > 0) {
//         return elem.charAt(0).toUpperCase() + elem.slice(1).toLowerCase();
//       } else return elem;
//     })
//     .join("");
