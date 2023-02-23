import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { IS3PutTypes } from '../types';

export const putS3Object = async <T>(args: IS3PutTypes): Promise<String> => {
  const client = new S3Client({
    endpoint: 'wss://auftctdig9.execute-api.us-east-1.amazonaws.com/dev',
  });
  const params = {
    Bucket: args.Bucket,
    Key: args.Key,
    ACL: args.ACL,
    Body: args.Body,
  };

  const command = new PutObjectCommand(params);
  try {
    await client.send(command).catch((e) => console.log('eeee', e));
    return `https://invoice-bucket.s3.us-east-1/amazonaws.com/${args.Key}`;
  } catch (e) {
    throw new Error(JSON.stringify(e));
  }
};
