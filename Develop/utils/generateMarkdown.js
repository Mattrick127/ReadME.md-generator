// TODO: Create a function that returns a license badge based on which license is passed in


// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badgeImages = ['https://img.shields.io/badge/-MIT-blue', 'https://img.shields.io/badge/-Boost-red', 'https://img.shields.io/badge/-Unlicensed-green'];
  if (license === 'MIT') {
    return badgeImages[0]
  } else if (license === 'Boost') {
    return badgeImages[1]
  } else if (license === 'Unlicensed') {
    return badgeImages[2]
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let badgeLink 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  //grab license badge from link to license

}




// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Description 

${renderLicenseBadge()}
${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Questions](#questions)
* [Tests](#tests)

## Installation

${data.installation}
![alt text](assets/images/screenshot.png)
## Usage

${data.usage}

## Contributing

${data.contribution}

## Tests

${data.tests}

## Questions

${data.questions}

# If you were looking to contact me for any additional information, below I have provided my email and github address.

${data.github}

https://github.com/${data.email}
`;
}
module.exports = generateMarkdown;
// https://github.com/Mattrick127