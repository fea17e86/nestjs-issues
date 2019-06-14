import { Receiver } from './Receiver';

export class Connection {
  private readonly url: string;

  constructor(url: string) {
    this.url = url;
  }

  openReceiver(topic: string) {
    return new Receiver(topic);
  }
}
