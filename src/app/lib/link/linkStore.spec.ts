import { LinkCard } from '@/app/validators/linkValidation';
import { linkStore } from './linkStore';

describe('LinkStore', () => {
  const userId = 'user1';
  const link1: LinkCard = {
    id: '1',
    url: 'https://a.com',
    title: 'A',
    subtitle: 'SubA',
    buttonText: 'Go',
    backgroundColor: '#fff',
    buttonColor: 'blue',
  };
  const link2: LinkCard = {
    id: '2',
    url: 'https://b.com',
    title: 'B',
    subtitle: 'SubB',
    buttonText: 'Go',
    backgroundColor: '#eee',
    buttonColor: 'red',
  };

  beforeEach(() => {
    // @ts-ignore: reset private data for test isolation
    linkStore.data = {};
  });

  it('should return empty object if no links for user', () => {
    expect(linkStore.getLinks(userId)).toEqual({});
  });

  it('should add a link for a user', () => {
    linkStore.addLink(userId, link1);
    expect(linkStore.getLinks(userId)).toEqual({ [link1.id]: link1 });
  });

  it('should update a link for a user (PUT)', () => {
    linkStore.addLink(userId, link1);
    const updatedLink = { ...link1, title: 'Updated' };
    linkStore.updateLink(userId, updatedLink);
    expect(linkStore.getLinks(userId)[link1.id].title).toBe('Updated');
  });

  it('should delete a link for a user', () => {
    linkStore.addLink(userId, link1);
    linkStore.addLink(userId, link2);
    linkStore.deleteLink(userId, link1.id);
    expect(linkStore.getLinks(userId)).toEqual({ [link2.id]: link2 });
  });

  it("should return '' when deleting non-existent link", () => {
    expect(linkStore.deleteLink(userId, 'nonexistent')).toBe('');
  });

  it("should return '' when updating non-existent link", () => {
    expect(linkStore.updateLink(userId, link1)).toBe('');
  });
});
