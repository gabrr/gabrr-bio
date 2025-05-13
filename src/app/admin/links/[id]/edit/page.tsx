import { ILinkCard } from '@/app/models/linksModel';
import LinkCardForm from '@/components/organisms/LinkCardForm';
import { LinkCardComponent } from '@/components/molecules/LinkCardComponent';
import { Flex, Text } from '@radix-ui/themes';

const mockVariant: ILinkCard = {
  id: 'link-edit-demo',
  title: 'Edit Link Title',
  subtitle: 'Edit link subtitle here',
  url: 'https://example.com/edit',
  buttonText: 'Edit Now',
  buttonColor: 'blue',
  backgroundColor: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
  typography: 'Poppins',
};

export default async function EditLink() {
  return (
    <Flex direction={'column'} gap={'6'}>
      <Flex gap={'2'} direction={'column'}>
        <Text as="p">Preview</Text>
        <LinkCardComponent linkCard={mockVariant} />
      </Flex>

      <LinkCardForm variant={mockVariant} />
    </Flex>
  );
}
