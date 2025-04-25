function checkLibSec() {
  const section = document.getElementById('lib-sec').value.toUpperCase();
  let result;

  switch (section) {
    case "F":
      result = "Fiction";
      break;
    case "N":
      result = "Non-Fiction";
      break;
    case "R":
      result = "References";
      break;
    default:
      result = "Invalid input";
  }

  alert("Library Section: " + result);
}

function checkGradeSec() {
  const section = document.getElementById('grade-sec').value;
  let result;

  switch (section) {
    case "1":
      result = "Emerald";
      break;
    case "2":
      result = "Ruby";
      break;
    case "3":
      result = "Sapphire";
      break;
    case "4":
      result = "Topaz";
      break;
    default:
      result = "Invalid input";
  }

  alert("Grade 9 Section: " + result);
}