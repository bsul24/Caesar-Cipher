function rot13(str) {
    let cipher = "";
    function shift(letter) {
      let asc = letter.charCodeAt(0);
      if (asc <= 77) {
        return String.fromCharCode(asc + 13);
      } else {
        return String.fromCharCode(asc - 13);
      };
    }
    let checker = /[A-Z]/;
    for (let i = 0; i < str.length; i++) {
      if (checker.test(str[i])) {
        cipher += shift(str[i]);
      } else {
        cipher += str[i];
      }
    }
    return cipher;
  }