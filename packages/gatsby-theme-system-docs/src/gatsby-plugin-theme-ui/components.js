import { 
  CodeBlock, 
  SystemPropsTable, 
  PropsTable 
} from '../components-system';

import customComponents from '../live-code-scope'

export default {
  ...customComponents,
  code: CodeBlock,
  // components
  SystemProps: SystemPropsTable,
  PropsTable: PropsTable,
}