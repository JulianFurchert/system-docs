/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Box, Table, Thead, Tr, Th, Tbody, Td, Code, Text, Heading } from '@modulz/radix';

export function PropsTable({ data, title = "Props" }) {
  const hasProps = Object.keys(data).length > 0;

  return (
    <Box
      mt={8}
      mb={7}
      overflow={['scroll', 'visible']}
      style={{ WebkitOverflowScrolling: 'touch' }}
    >
      <Heading as="h3" fontWeight={500} size={2} mt={8} mb={4}>
        {title}
      </Heading>
      {hasProps ? (
        <Box minWidth={['540px', '0']}>
          <Table>
            <Thead>
              <Tr>
                <Th>Prop</Th>
                <Th>Type</Th>
                <Th>Default</Th>
                <Th>Description</Th>
              </Tr>
            </Thead>
            <Tbody>
              {Object.entries(data).map(([key, value]) => {
                return (
                  <Tr key={key}>
                    <Td>
                      <Code>{key}</Code>
                    </Td>
                    <Td>
                      <Text textColor="gray700">
                        <Code variant="fade">{value.type}</Code>
                      </Text>
                    </Td>
                    <Td>
                      {value.default && (
                        <Text textColor="gray700">
                          <Code variant="fade">{value.default}</Code>
                        </Text>
                      )}
                    </Td>
                    <Td>
                      <Text textColor="gray700">{value.description}</Text>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </Box>
      ) : (
        <Text as="p">No props</Text>
      )}
    </Box>
  );
}
