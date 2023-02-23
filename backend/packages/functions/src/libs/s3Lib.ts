import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { IS3PutTypes } from '../types';
import { args } from '@sparticuz/chrome-aws-lambda';

export const putS3Object = async <T>(args: IS3PutTypes): Promise<T> => {
  const client = new S3Client({});
  const params = {
    Bucket: args.bucket,
    Key: args.key,
    ACL: args.acl,
    Body: args.body,
  };
};
