import React from 'react';
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

export default props => <ThemeProvider><CSSReset />{props.children}</ThemeProvider>;;