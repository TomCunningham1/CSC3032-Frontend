import { Stack, StackProps, aws_s3, RemovalPolicy, aws_s3_deployment} from 'aws-cdk-lib';
import { Construct } from 'constructs';


export class Team11FrontendStack extends Stack {

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const frontEndBucket = new aws_s3.Bucket(this, 'FrontEndBucket', {
      enforceSSL: true,
      versioned: true,
      websiteIndexDocument: "index.html",
      publicReadAccess: true,
      removalPolicy: RemovalPolicy.RETAIN,
    });

    const deployment = new aws_s3_deployment.BucketDeployment(this, "FrontEndBucketDeployment", {
      sources: [aws_s3_deployment.Source.asset(`website/build`)],
      destinationBucket: frontEndBucket,
    });
  }

  
}
