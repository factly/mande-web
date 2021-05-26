const snakeToTitleCase = (str) => {
  let title = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i] === "_") {
      title = title + " ";
    } else
      title =
        title[i - 1] === " " ? title + str[i].toUpperCase() : title + str[i];
  }
  return title;
};

export default snakeToTitleCase;
