import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Type your URL:",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;

    fs.writeFile("log.txt", url, (err) => {
      if (err) {
        console.log(err, "log not saved");
      }
      console.log("The file has been saved!");
    });

    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(error);
    }
    console.log("");
  });
