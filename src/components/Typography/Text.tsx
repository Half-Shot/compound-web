/*
Copyright 2023 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React from "react";
import { Typography } from "./Typography";

/**
 * A text component. Underlying HTML element can be changed using the `as`
 * property. Will default to be a paragraph.
 */
export const Text: React.FC<
  Omit<React.ComponentProps<typeof Typography>, "type">
> = ({ as = "p", children, ...props }) => {
  return (
    <Typography as={as} type="body" {...props}>
      {children}
    </Typography>
  );
};
