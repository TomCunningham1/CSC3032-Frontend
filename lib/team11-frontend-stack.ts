import { Stack, StackProps, aws_s3, RemovalPolicy} from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class Team11FrontendStack extends Stack {

  s3Bucket: aws_s3.Bucket;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    this.s3Bucket = new aws_s3.Bucket(this, 'FrontendBucket', {
      blockPublicAccess: aws_s3.BlockPublicAccess.BLOCK_ALL,
      encryption: aws_s3.BucketEncryption.S3_MANAGED,
      enforceSSL: true,
      versioned: true,
      removalPolicy: RemovalPolicy.RETAIN,
    });


  }

  
}
