import sine from "./noises/sine";
import random from "./noises/random";
import { prisma } from "@repo/db";

export interface generator {
  generate: (type: string, t?: number) => number;

  random: () => number;
  sine: (t: number) => number;
}

export class NoiseGenerator implements generator {
  constructor() {}
  generate(type: string, t = Date.now()) {
    switch (type) {
      case "random":
        return this.random();
      case "sine":
        return this.sine(t);
      default:
        return Math.random();
    }
  }
  random() {
    return Math.random();
  }
  sine(t: number) {
    return Math.sin(t);
  }
}

export default new NoiseGenerator();
