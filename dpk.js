const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;

  // edge case for no passed in event
  if (!event) return TRIVIAL_PARTITION_KEY;

  // checking for partitionKey
  if (event.partitionKey) {
      if (typeof event.partitionKey !== 'string') {
        candidate = JSON.stringify(event.partitionKey);
      } else {
        candidate = event.partitionKey;
      }
    // if candidate string is less than the max partition key length AND is a string, return it
    if (candidate.length < MAX_PARTITION_KEY_LENGTH) {
      return candidate
    }
  } else {
    candidate = JSON.stringify(event)
  }
  return crypto.createHash("sha3-512").update(candidate).digest("hex");
};