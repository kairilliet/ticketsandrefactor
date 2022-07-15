const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the correct Partition Key when given an input with a partitionKey property", () => {
    const testEvent = { partitionKey: "0123456789" }
    const partitionKey = deterministicPartitionKey(testEvent);
    expect(partitionKey).toEqual(testEvent.partitionKey);
    expect(partitionKey.length).toBe(testEvent.partitionKey.length);
  });

  it("Returns the correctly hashed Partition Key when given an input that is not an object", () => {
    const testEvent = 5234567;
    const partitionKey = deterministicPartitionKey(testEvent);
    expect(typeof partitionKey).toBe("string");
    expect(partitionKey.length).toBeLessThan(256);
  })

  it("Returns the correctly hashed Partition Key when given an object input without a partitionKey property", () => {
    const testEvent = {event: 5234567};
    const partitionKey = deterministicPartitionKey(testEvent);
    expect(typeof partitionKey).toBe("string");
    expect(partitionKey.length).toBeLessThan(256);
  })
});
