/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Box, Table, Tr, Tbody, Td, Code, Text, Heading } from '@modulz/radix';

export function SystemPropsTable({ props }) {
  return (
    <Box mt={8} mb={7}>
      <Heading as="h3" fontWeight={500} size={2} mt={8} mb={4}>
        System props
      </Heading>
      <Box my={4}>
        <Table>
          <Tbody>
            {props.sort().map(prop => (
              <Tr key={prop}>
                <Td>
                  <Text textColor="gray700">
                    <Code>{prop}</Code>
                  </Text>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
}
