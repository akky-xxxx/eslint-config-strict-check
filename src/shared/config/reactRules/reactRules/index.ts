import { booleanPropNaming } from "./options/booleanPropNaming"
import { functionComponentDefinition } from "./options/functionComponentDefinition"
import { jsxNoLeakedRender } from "./options/jsxNoLeakedRender"
import { jsxSortProps } from "./options/jsxSortProps"
import { Severity } from "../../../const/Severity"

export const reactRules = {
  rules: {
    "react/boolean-prop-naming": booleanPropNaming,
    "react/function-component-definition": functionComponentDefinition,
    "react/iframe-missing-sandbox": Severity.ERROR,
    "react/jsx-filename-extension": [
      Severity.ERROR,
      { extensions: [".ts", ".tsx"] },
    ],
    "react/jsx-fragments": [Severity.ERROR, "element"],
    "react/jsx-no-leaked-render": jsxNoLeakedRender,
    "react/jsx-sort-props": jsxSortProps,

    // prerequisites for using typescript
    "react/jsx-props-no-spreading": Severity.OFF,
    "react/prop-types": Severity.OFF,
    "react/require-default-props": Severity.OFF,

    // prerequisites for using react 17 over
    "react/react-in-jsx-scope": Severity.OFF,
  },
} as const
