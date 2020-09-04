
## Style.inc Job Posting Page - Client

## [Demo on Netlify ](https://career-page.netlify.app/)

## Description

This is the client for a job posting page. When users click **Apply** they are sent to the **Application Form**. 

After users fill in the form and click **Submit** they see a "Thank you" message instead of the form.

The goal of this project was to create a responsive, cross device/browser compatible job page and application form.

## Tech stack

* React
* Material-UI
* JavaScript
* CSS

## Features

* Application page
* Apply button(s)
* Responsive Navbar with Hamburger Menu on smaller screens
* FAQ section
* Footer with links
* Application form with input validation 
* Back button that redirects to main job page
* Submit button
* Successful submit "Thank you" message

## Setup

* Clone the repository `git clone git@github.com:alex-alina/ams-recruitment.git`
* Install the dependencies using `yarn install`
* Start the server using `yarn start`

## Design decisions
 
* To ensure cross device/browser compatibility and improve development speed I decided to use:
  * React: supports all modern browsers. Support for Internet Explorer 9, 10, and 11 requires polyfills.
  * React-app-polyfill package: to add support for IE 11.
  * Material-UI a React UI framework that supports the latest, stable releases of all major browsers, including IE 11.
* Task runners, build tools and process automation:
  * `create-react-app` comes with tools like Webpack and Babel.
    * It uses Yarn as package manager which automatically runs the `build` script. 
  * Netlify for automatic deployment (configured with GitHub)
    * On every new commit to master (direct commit or branch merge) the new master will be automatically deployed on Netlify.
* Form input validation: I decided to use `react-material-ui-form-validator` package:
  * It covered most of the validation needs. 
  * It also gave me enough flexibility to use regEx for Dutch Zip Code and other validations.
* Layout: I opted to use Flexbox since the page has a simple UI where Flexbox can easily support a responsive layout.
* Accessibility includes:
  * Semantic HTML
  * Material-UI covers accessibility aspects on its components.
  * Used Material Design color tool to choose the UI's color palette and measure the accessibility level of color combination.

## Future development and improvements

* Improve lists' positioning and style in navigation and footer for IE11
* Fix CV/Resume upload validation (require attribute does't work properly)
* Font embedding
* Remove border that appears on click around navigation links in Firefox 
* Improve grouping of social icons on small screens
* Use the Search Bar component in top navigation to DRY up code
* Move text from Job Description component, navigation and footer in a separate file
* Add the radio buttons inside the form 
* Add input validation for radio buttons
* Use just one component for social media buttons for both the section and the footer
* Improve styling and positioning of the Add file form section

## License

MIT Licence - Copyright &copy; 2019 - Alina Rusu.
