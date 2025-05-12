import LinkValidator, { LinkCard } from '../validators/linkValidation';

type LinkList = Record<string, LinkCard>;
type LinkStoreData = Record<string, LinkList>;

class LinkStore {
  private data: LinkStoreData = {};

  getLinks(userId: string): LinkList {
    return this.data[userId] || {};
  }

  addLink(userId: string, link: LinkCard): string {
    if (!this.data[userId]) {
      this.data[userId] = {};
    }
    this.data[userId][link.id] = link;
    return link.id;
  }

  /** It should receive the whole link (PUT) behavior */
  updateLink(userId: string, link: LinkCard): string {
    if (!this.data[userId] || !this.data[userId][link.id]) {
      return '';
    }
    this.data[userId][link.id] = link;
    return link.id;
  }

  deleteLink(userId: string, linkId: string): string {
    if (!this.data[userId] || !this.data[userId][linkId]) {
      return '';
    }
    delete this.data[userId][linkId];
    return linkId;
  }
}

export const linkStore = new LinkStore();
