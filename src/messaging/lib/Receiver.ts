export class Receiver {
  private readonly topic: string;

  constructor(topic: string) {
    this.topic = topic;
  }

  onMessage(listener: (...args: any[]) => void) {
    // ...
  }
}
