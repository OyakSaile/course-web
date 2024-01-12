const fs = require("fs");

fs.writeFile("message.txt", "Hello, World NodeJS!", (err) => {
  if (err) {
    console.log(err);
  }

  console.log("file has been save");
});

fs.readFile("./message.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log("failed to read the file");
  }

  console.log("file has been read text:", data);
});
