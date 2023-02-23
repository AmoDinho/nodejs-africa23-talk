import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { IS3PutTypes } from '../types';

export const putS3Object = async <T>(args: IS3PutTypes): Promise<String> => {
  const client = new S3Client({});
  const params = {
    Bucket: args.bucket,
    Key: args.key,
    ACL: args.acl,
    Body: args.body,
  };

  const command = new PutObjectCommand(params);
  try {
    await client.send(command);
    return `https://invoice-bucket.s3.us-east-1/amazonaws.com/${args.key}`;
  } catch (e) {
    throw new Error(JSON.stringify(e));
  }
};
