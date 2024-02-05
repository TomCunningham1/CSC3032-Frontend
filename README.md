# Team 11 - Frontend

The "Hack-Attack" (working title) application is a web-based game focused on educating developers on the technical aspects of cyber-security, such as DDOS Attacks or SQL Injection.

This service has been created to provide the frontend stack of the the "Hack-Attack" Web application.

The Cloudformation Stack creates a s3 bucket and cloudfront distribution to host the application. 

The website folder contains a React application which once built is deployed into the s3 bucket.

## Technology Used

* Node JS - https://nodejs.org/en/
* Typescript - https://www.typescriptlang.org/
* AWS CDK - https://aws.amazon.com/cdk/
* AWS IAM - https://aws.amazon.com/iam/
* AWS S3 - https://aws.amazon.com/s3/
* Material UI - https://mui.com/
* AXIOS-HTTP - https://axios-http.com/docs/intro

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template

## Website Application
Inside the /website folder

## Useful commands

* `npm run build`   react build script
* `npm run test`    perform the jest unit tests
* `npm run start`   starts the react development server


https://www.npmjs.com/package/aws-cdk
