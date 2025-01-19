import {
  GoABadge,
  GoABlock,
  GoAIconButton,
  GoAIconButtonProps,
  GoAIconType,
  GoATab,
  GoATable,
  GoATabs,
  GoACallout,
} from "@abgov/react-components";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader.tsx";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties.tsx";
import { ComponentBinding, Sandbox } from "@components/sandbox";
import { useState } from "react";
import ICONS from "./icons.json";
import { ComponentContent } from "@components/component-content/ComponentContent";
import "./AllComponents.css";

// == Page props ==

const FIGMA_LINK =
  "https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=27301-302107";
const componentName = "Icon button";
const description = "A compact button with an icon and no text.";
const componentCategory = Category.INPUTS_AND_ACTIONS;
const relatedComponents = [
  { link: "/components/icons", name: "Icons" },
  { link: "/components/button", name: "Button" },
  { link: "/components/tooltip", name: "Tooltip" },
];
type ComponentPropsType = GoAIconButtonProps;
type CastingType = {
  // add any required props here
  icon: GoAIconType;
  [key: string]: unknown;
};

export default function IconButtonPage() {
  const [iconButtonProps, setIconButtonProps] = useState<ComponentPropsType>({
    icon: "refresh",
    ariaLabel: "Refresh icon",
  });
  const [iconButtonBindings, setIconButtonBindings] = useState<ComponentBinding[]>([
    {
      label: "Variant",
      type: "radio",
      name: "variant",
      options: ["color", "light", "dark", "destructive"],
      value: "color",
    },
    {
      label: "Size",
      type: "radio",
      name: "size",
      options: ["small", "medium", "large"],
      value: "medium",
    },
    {
      label: "Icon",
      type: "combobox",
      name: "icon",
      options: [""].concat(ICONS),
      value: "refresh",
    },
    {
      label: "Disabled",
      type: "boolean",
      name: "disabled",
      value: false,
    },
    {
      label: "Title",
      type: "string",
      name: "title",
      value: "",
    },
    {
      label: "ARIA label",
      type: "string",
      name: "ariaLabel",
      value: "Refresh icon",
    },
  ]);

  const componentProperties: ComponentProperty[] = [
    {
      name: "icon",
      type: "GoAIconType",
      required: true,
      description: "Sets the icon.",
    },
    {
      name: "variant",
      type: "color | light | dark | destructive",
      description: "Styles the button to show color, light, dark or destructive action.",
      defaultValue: "color",
    },
    {
      name: "size",
      type: "small | medium | large",
      description: "Sets the size of button.",
      defaultValue: "medium",
    },
    {
      name: "title",
      type: "string",
      description: "Sets the title of the button.",
      defaultValue: "",
    },
    {
      name: "disabled",
      type: "boolean",
      description: "Disables the button.",
      defaultValue: "false",
    },
    {
      name: "arialabel",
      type: "string",
      lang: "angular",
      description: "Sets the aria-label of the button.",
    },
    {
      name: "ariaLabel",
      type: "string",
      lang: "react",
      description: "Sets the aria-label of the button.",
    },
    {
      name: "_click",
      type: "CustomEvent",
      description: "Callback function when button is clicked.",
      lang: "angular",
    },
    {
      name: "_click",
      type: "(e: any) => void",
      description: "Callback function when button is clicked.",
      lang: "react",
    },
    {
      name: "testId",
      type: "string",
      lang: "react",
      description: "Sets the data-testid attribute. Used with ByTestId queries in tests.",
    },
    {
      name: "testid",
      type: "string",
      lang: "angular",
      description: "Sets the data-testid attribute. Used with ByTestId queries in tests.",
    },
    {
      name: "mt,mr,mb,ml",
      type: "none | 3xs | 2xs | xs | s | m | l | xl | 2xl | 3xl | 4xl",
      description: "Apply margin to the top, right, bottom, and/or left of the component.",
    },
  ];

  function onSandboxChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setIconButtonProps(props as CastingType);
    setIconButtonBindings(bindings);
  }
  return (
    <>
      <ComponentHeader
        name={componentName}
        category={componentCategory}
        description={description}
        relatedComponents={relatedComponents}
        githubLink={componentName}
        figmaLink={FIGMA_LINK}
      />

      <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
        <GoATabs>
          <GoATab heading="Code playground">
            <h2 id="component" style={{display: "none"}}>Component</h2>
            <Sandbox properties={iconButtonBindings} onChange={onSandboxChange}>
              <GoAIconButton {...iconButtonProps} />
            </Sandbox>

            {/* Component properties */}
            <ComponentProperties properties={componentProperties} />
          </GoATab>

          <GoATab heading={<>Examples<GoABadge type="information" content="1" /></>}>

            {/* Example 1 */}
            <h3 id="component-example-multiple-actions-table">Show multiple actions in a compact table</h3>
            <Sandbox fullWidth>
              <GoATable width="100%">
                <thead>
                  <tr>
                    <th>Status</th>
                    <th>Name</th>
                    <th style={{ textAlign: "right" }}>Id Number</th>
                    <th>Edit | Flag | Send</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <GoABadge type="information" content="In progress"></GoABadge>
                    </td>
                    <td>Darlene Robertson</td>
                    <td className="goa-table-number-column">45904</td>
                    <td>
                      <GoABlock>
                        <GoAIconButton size="small" icon="pencil" ariaLabel="Edit"></GoAIconButton>
                        <GoAIconButton size="small" icon="flag" ariaLabel="Flag"></GoAIconButton>
                        <GoAIconButton size="small" icon="mail" ariaLabel="Send"></GoAIconButton>
                      </GoABlock>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <GoABadge type="dark" content="Inactive"></GoABadge>
                    </td>
                    <td>Floyd Miles</td>
                    <td className="goa-table-number-column">47838</td>
                    <td>
                      <GoABlock>
                        <GoAIconButton size="small" icon="pencil" ariaLabel="Edit"></GoAIconButton>
                        <GoAIconButton size="small" icon="flag" ariaLabel="Flag"></GoAIconButton>
                        <GoAIconButton size="small" icon="mail" ariaLabel="Send"></GoAIconButton>
                      </GoABlock>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <GoABadge type="success" content="Active"></GoABadge>
                    </td>
                    <td>Kathryn Murphy</td>
                    <td className="goa-table-number-column">34343</td>
                    <td>
                      <GoABlock>
                        <GoAIconButton size="small" icon="pencil" ariaLabel="Edit"></GoAIconButton>
                        <GoAIconButton size="small" icon="flag" ariaLabel="Flag"></GoAIconButton>
                        <GoAIconButton size="small" icon="mail" ariaLabel="Send"></GoAIconButton>
                      </GoABlock>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <GoABadge type="important" content="Recent"></GoABadge>
                    </td>
                    <td>Annette Black</td>
                    <td className="goa-table-number-column">89897</td>
                    <td>
                      <GoABlock>
                        <GoAIconButton size="small" icon="pencil" ariaLabel="Edit"></GoAIconButton>
                        <GoAIconButton size="small" icon="flag" ariaLabel="Flag"></GoAIconButton>
                        <GoAIconButton size="small" icon="mail" ariaLabel="Send"></GoAIconButton>
                      </GoABlock>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <GoABadge type="success" content="Active"></GoABadge>
                    </td>
                    <td>Esther Howard</td>
                    <td className="goa-table-number-column">12323</td>
                    <td>
                      <GoABlock>
                        <GoAIconButton size="small" icon="pencil" ariaLabel="Edit"></GoAIconButton>
                        <GoAIconButton size="small" icon="flag" ariaLabel="Flag"></GoAIconButton>
                        <GoAIconButton size="small" icon="mail" ariaLabel="Send"></GoAIconButton>
                      </GoABlock>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <GoABadge type="success" content="Active"></GoABadge>
                    </td>
                    <td>Jane Cooper</td>
                    <td className="goa-table-number-column">56565</td>
                    <td>
                      <GoABlock>
                        <GoAIconButton size="small" icon="pencil" ariaLabel="Edit"></GoAIconButton>
                        <GoAIconButton size="small" icon="flag" ariaLabel="Flag"></GoAIconButton>
                        <GoAIconButton size="small" icon="mail" ariaLabel="Send"></GoAIconButton>
                      </GoABlock>
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </GoATable>
            </Sandbox>
          </GoATab>

          <GoATab heading="Design">
            <GoACallout
              heading="Design documentation in Figma"
              type="important"
              size="medium"
              maxWidth="540px"
            >
              Detailed design documentation for this component can be found on the associated{" "}
              <a href={FIGMA_LINK} target="_blank" rel="noreferrer">
                component page
              </a>{" "}
              in the Component library in Figma.
            </GoACallout>
          </GoATab>

          <GoATab heading="Accessibility">
            <GoACallout
              heading="Accessibility documentation in Figma"
              type="important"
              size="medium"
              maxWidth="550px"
            >
              Detailed accessibility documentation for this component can be found on the associated{" "}
              <a href={FIGMA_LINK} target="_blank" rel="noreferrer">
                component page
              </a>{" "}
              in the Component library in Figma.
            </GoACallout>
          </GoATab>
        </GoATabs>
      </ComponentContent>
    </>
  );
}