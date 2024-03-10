import { formatBytes } from "../src/utils";
import { it, expect, describe } from "vitest";

describe("formatBytes", () => {
  it("should return 1023 bytes when passed with 1023", () => {
    expect(formatBytes(1023)).toBe("1023 bytes");
  });
  it("should return 1023 bytes when passed with 1048570", () => {
    expect(formatBytes(1024)).toBe("1.00 KB");
  });
  it("returns MB for values greater than or equal to 1024 * 1024", () => {
    expect(formatBytes(1024 * 1024)).toBe("1.00 MB");
  });
});
