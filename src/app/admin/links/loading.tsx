import { Card, Flex, Skeleton } from '@radix-ui/themes';

export default function Loading() {
  return (
    <div className="flex flex-col gap-4 pageIn" data-index={4}>
      {[...Array(4)].map((_, i) => (
        <Card key={i}>
          <Flex direction="column" gap="2" justify="between" mb="4">
            <Skeleton width="40%" height="24px" />
            <Skeleton width="60%" height="16px" />
          </Flex>
          <Flex justify="end" gap="6">
            <Skeleton width="24px" height="24px" />
            <Skeleton width="24px" height="24px" />
          </Flex>
        </Card>
      ))}
    </div>
  );
}
