import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { IS3PutTypes } from '../types';

export const putS3Object = async <T>(args: IS3PutTypes): Promise<String> => {
  const client = new S3Client({
    region: process.env.AWS_REGION,
    // endpoint: 'http://invoice-bucket.s3.ap-south-1.amazonaws.com',
    credentials: {
      secretAccessKey: process.env.SECRET_ACCESS_KEY,
      accessKeyId: process.env.ACCESS_KEY,
    },
  });
  const params = {
    Bucket: args.Bucket,
    Key: args.Key,
    ACL: args.ACL,
    Body: args.Body,
    ContentType: args.ContentType,
  };

  const command = new PutObjectCommand(params);
  try {
    await client.send(command);

    return 'Successfull uploaded';
  } catch (e) {
    throw new Error(JSON.stringify(e));
  }
};
