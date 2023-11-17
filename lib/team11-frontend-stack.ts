import {
  Stack,
  StackProps,
  aws_s3,
  RemovalPolicy,
  aws_s3_deployment,
  aws_iam,
  aws_cloudfront,
  aws_cloudfront_origins,
  aws_apigateway,
} from 'aws-cdk-lib'
import { Construct } from 'constructs'

export class Team11FrontendStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    const frontEndBucket = new aws_s3.Bucket(this, 'FrontEndBucket', {
      removalPolicy: RemovalPolicy.RETAIN_ON_UPDATE_OR_DELETE,
    })

    const accessPolicy = new aws_iam.PolicyStatement({
      sid: 'PublicRead',
      effect: aws_iam.Effect.ALLOW,
      actions: ['s3:GetObject'],
      principals: [new aws_iam.AnyPrincipal()],
      resources: [`${frontEndBucket.bucketArn}/*`],
    })

    const dist = new aws_cloudfront.Distribution(this, 'FrontEndDist', {
      defaultBehavior: {
        origin: new aws_cloudfront_origins.S3Origin(frontEndBucket),
        viewerProtocolPolicy:
          aws_cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        allowedMethods: aws_cloudfront.AllowedMethods.ALLOW_ALL,
      },
      defaultRootObject: 'index.html',
    })

    const deployment = new aws_s3_deployment.BucketDeployment(
      this,
      'FrontEndBucketDeployment',
      {
        sources: [aws_s3_deployment.Source.asset(`website/build`)],
        destinationBucket: frontEndBucket,
        distribution: dist,
      }
    )
  }
}
