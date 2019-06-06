This is the Form trial project.
It was setup with [create-react-app-typescript](https://github.com/wmonk/create-react-app-typescript)

The project already includes a setup for react with redux and thunk.

## Functional
Responsive form. The form should include a Name, EMail and Message field.
The labels should be next to the inputs on a big screen and above on a small screen (<= 600px).

When the user submits the form, sending of the data should be simulated with a timeout. While sending a loading indicator should be shown and all inputs must not be accessible.

Please add a test that checks if the form submits its data when the submit button gets clicked.

You are totally free in deciding how you build this. If anything is unclear to you, just make an assumption and proceed with what you think makes sense.

## Notes
### Dependencies

-	Required: `Node.js v11.13.0`
-	`Reactstrap`: Bootstrap UI components with custom.scss
-	`node-sass`: compile and convert bootstrap scss

### New Files

-	`setupTests.js`: testing suit
-	`submitMock.js`: simulator with timeout


#### Setup
`yarn`

#### Start
`yarn start`

#### Build
`yarn build`

#### Run tests
`yarn test`
