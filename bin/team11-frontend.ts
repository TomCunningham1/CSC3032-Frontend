#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { Team11FrontendStack } from '../lib/team11-frontend-stack';

const app = new cdk.App();
new Team11FrontendStack(app, 'Team11FrontendStack');
