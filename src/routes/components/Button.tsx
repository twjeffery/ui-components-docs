import { useState, useEffect } from "react";
import { format } from "date-fns"; // <-- import date-fns
import {
  GoABlock,
  GoAButton,
  GoAButtonGroup, GoADivider,
  GoADropdown,
  GoADropdownItem,
  GoAFormItem,
  GoAInput,
  GoATab,
  GoATabs,
  GoAText,
  GoAGrid,
} from "@abgov/react-components";
import { DoDont } from "@components/do-dont/DoDont";
import { Sandbox, ComponentBinding } from "@components/sandbox";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet";
import { GoAModal } from "@components/mock-modal/Modal";
import { Category, ComponentHeader } from "@components/component-header/ComponentHeader";
import {
  ComponentProperties,
  ComponentProperty,
} from "@components/component-properties/ComponentProperties";
import ICONS from "@routes/components/icons.json";
import { ComponentContent } from "@components/component-content/ComponentContent";

export default function ButtonPage() {
  const [lastUpdateTime, setLastUpdateTime] = useState<Date | null>(null);

  const githubLink = "routes/components/Button.tsx";

  useEffect(() => {
    const fetchLastUpdateTime = async () => {
      try {
        const url = `https://api.github.com/repos/GovAlta/ui-components-docs/commits?path=src/${githubLink}`;
        const response = await fetch(url);

        if (!response.ok) return;

        const commits = await response.json();
        if (!commits.length) return;

        const lastCommit = commits[0];
        const dateStr = lastCommit.commit.committer.date;
        setLastUpdateTime(new Date(dateStr));
      } catch (error) {
        console.error("Error fetching last update time:", error);
      }
    };

    fetchLastUpdateTime();
  }, [githubLink]);

  const [buttonProps, setButtonProps] = useState({});
  const [buttonBindings, setButtonBindings] = useState<ComponentBinding[]>([
    {
      label: "Type",
      type: "list",
      name: "type",
      options: ["primary", "secondary", "tertiary", "start"],
      value: "",
      defaultValue: "primary",
    },
    {
      label: "Size",
      type: "list",
      name: "size",
      options: ["", "normal", "compact"],
      value: "",
    },
    {
      label: "Variant",
      type: "list",
      name: "variant",
      options: ["", "normal", "destructive"],
      value: "",
    },
    {
      label: "Leading icon",
      type: "combobox",
      name: "leadingIcon",
      options: [""].concat(ICONS),
      value: "",
    },
    {
      label: "Trailing Icon",
      type: "combobox",
      name: "trailingIcon",
      options: [""].concat(ICONS),
      value: "",
    },
    { label: "Disabled", type: "boolean", name: "disabled", value: false },
  ]);

  const componentProperties: ComponentProperty[] = [
    {
      name: "type",
      type: "primary | secondary | tertiary | start",
      description: "Sets the type of button.",
      defaultValue: "primary",
    },
    {
      name: "size",
      type: "normal | compact",
      defaultValue: "normal",
      description: "Sets the size of button.",
    },
    {
      name: "variant",
      type: "normal | destructive",
      defaultValue: "normal",
      description: "Styles the button to show a destructive action.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description: "Disables the button.",
    },
    {
      name: "leadingIcon",
      type: "GoAIconType",
      lang: "react",
      description: "Shows an icon to the left of the text.",
    },
    {
      name: "leadingicon",
      type: "GoAIconType",
      lang: "angular",
      description: "Shows an icon to the left of the text.",
    },
    {
      name: "trailingIcon",
      type: "GoAIconType",
      lang: "react",
      description: "Shows an icon to the right of the text.",
    },
    {
      name: "trailingicon",
      type: "GoAIconType",
      lang: "angular",
      description: "Shows an icon to the right of the text.",
    },
    {
      name: "_click",
      lang: "angular",
      type: "CustomEvent",
      description: "Callback function when button is clicked.",
    },
    {
      name: "onClick",
      lang: "react",
      type: "(e: any) => void",
      description: "Callback function when button is clicked.",
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

  const noop = () => {};

  function SandboxOnChange(bindings: ComponentBinding[], props: Record<string, unknown>) {
    setButtonBindings(bindings);
    setButtonProps(props);
  }

  return (
      <>

        <ComponentHeader
            name="Button"
            category={Category.INPUTS_AND_ACTIONS}
            description="Carry out an important action or navigate to another page."
            relatedComponents={[
              { link: "/components/button-group", name: "Button group" },
              { link: "/components/icon-button", name: "Icon button" },
            ]}
            githubLink="Button"
            figmaLink="https://www.figma.com/design/3pb2IK8s2QUqWieH79KdN7/%E2%9D%96-Component-library-%7C-DDD?node-id=420-6810"
        />

        <ComponentContent tocCssQuery="goa-tab[open=true] :is(h2[id], h3[id])">
          <GoATabs>
            <GoATab heading="Code">
              {/* Button Sandbox */}
              <h2 id="component" style={{ display: "none" }}>
                Component
              </h2>
              <Sandbox properties={buttonBindings} onChange={SandboxOnChange}>
                <CodeSnippet
                    lang="typescript"
                    tags="angular"
                    allowCopy={true}
                    code={`
                  export class SomeOtherComponent {
                    onClick(event: Event) {
                      console.log('clicked ', event);
                    }
                  }
                `}
                />
                <GoAButton {...buttonProps} onClick={noop}>
                  Button
                </GoAButton>
              </Sandbox>

              {/* Button Table Properties */}
              <ComponentProperties properties={componentProperties} />
            </GoATab>

            <GoATab heading="Examples">
              {/* Button Examples */}
              <h3 id="component-example-ask-address">Ask a user for an address</h3>
              <Sandbox flags={["reactive"]}>
                <GoABlock gap="xl" direction="column">
                  <GoAFormItem label="Street Address">
                    <GoAInput name="address" type="text" value="" onChange={noop} width="100%" />
                  </GoAFormItem>
                  <GoAFormItem label="Suite or unit #">
                    <GoAInput name="suite" type="text" value="" onChange={noop} width="100%" />
                  </GoAFormItem>
                  <GoAFormItem label="City/town">
                    <GoAInput name="city" type="text" value="" onChange={noop} width="100%" />
                  </GoAFormItem>

                  <GoABlock direction={"row"}>
                    <GoAFormItem label="Provice/territory">
                      <GoADropdown onChange={noop} name="province" value="alberta">
                        <GoADropdownItem label="Alberta" value="alberta" />
                        <GoADropdownItem label="BC" value="bc" />
                        <GoADropdownItem label="Manitoba" value="manitoba" />
                        <GoADropdownItem label="New Brunswick" value="new-brunswick" />
                        <GoADropdownItem label="Newfoundland and Labrador" value="newfoundland" />
                        <GoADropdownItem label="Nova Scotia" value="nova-scotia" />
                        <GoADropdownItem label="Ontario" value="ontario" />
                        <GoADropdownItem label="Prince Edward Island" value="prince-edward-island" />
                        <GoADropdownItem label="Quebec" value="quebec" />
                        <GoADropdownItem label="Saskatchewan" value="saskatchewan" />
                      </GoADropdown>
                    </GoAFormItem>

                    <GoAFormItem label="Postal Code">
                      <GoAInput name="postalCode" type="text" value="" onChange={noop} width="100%" />
                    </GoAFormItem>
                  </GoABlock>
                </GoABlock>

                <GoAButtonGroup alignment="start" mt="2xl">
                  <GoAButton type="primary" onClick={noop}>
                    Submit and continue
                  </GoAButton>
                  <GoAButton type="secondary" onClick={noop}>
                    Cancel
                  </GoAButton>
                </GoAButtonGroup>
              </Sandbox>

              <h3 id="component-example-confirm-action">Confirm a destructive action</h3>
              <Sandbox flags={["reactive"]}>
                <GoAModal heading="Are you sure you want to delete this record?">
                  <p>You cannot undo this action.</p>

                  <GoAButtonGroup alignment="end" mt="l">
                    <GoAButton type="secondary" onClick={noop}>
                      Cancel
                    </GoAButton>
                    <GoAButton type="primary" variant="destructive" onClick={noop}>
                      Delete record
                    </GoAButton>
                  </GoAButtonGroup>
                </GoAModal>
              </Sandbox>

              <h3 id="component-example-disabled-button">Disabled button with a required field</h3>
              <Sandbox flags={["reactive"]}>
                <GoAFormItem label="Name" requirement="required">
                  <GoAInput name="input" type="text" value="" onChange={noop} width="100%" />
                </GoAFormItem>

                <GoAButtonGroup alignment="start" mt="l">
                  <GoAButton disabled={true} onClick={noop}>
                    Confirm
                  </GoAButton>
                  <GoAButton type="secondary" onClick={noop}>
                    Cancel
                  </GoAButton>
                </GoAButtonGroup>
              </Sandbox>
            </GoATab>

            {/* Design documentation */}
            <GoATab heading="Design">
              <img
                  src="/images/components/button/button-cover.png"
                  alt="Button contextual example"
                  style={{maxWidth: "100%", height: "auto"}}
              />
              <GoADivider mt="2xl" mb="2xl"></GoADivider>

              <GoAText size="heading-l" mb="l"><b>Types</b></GoAText>

              <GoAText size="body-l" mb="m"> There are 5 types of buttons: Primary, Secondary, Tertiary, and
                Start, and Destructive. </GoAText>
              <GoAText size="body-m"> Use a different type of button depending on the user need. For example, use a
                primary button to save and submit a form. </GoAText>

              <GoAGrid gap="xl" mt="3xl" minChildWidth="320px">
                <GoABlock direction="column">
                  <GoAText size="heading-m" mb="xs"> Primary button </GoAText>
                  <GoAText size="body-m"> If there is only one button on a page, it should be a primary button. For
                    citizen facing applications, generally there should only be one primary button on a page. </GoAText>
                </GoABlock>
                <div className="documentation-container">
                  <GoAButton>
                    Submit
                  </GoAButton>
                </div>
              </GoAGrid>

              <GoAGrid gap="xl" mt="3xl" minChildWidth="320px">
                <GoABlock direction="column">
                  <GoAText size="heading-m" mb="xs"> Secondary button </GoAText>
                  <GoAText size="body-m">Use secondary buttons for less important actions on a page. Often paired with a
                    primary action as a secondary action. </GoAText>
                </GoABlock>
                <div className="documentation-container">
                  <GoAButton type="secondary">
                    Cancel
                  </GoAButton>
                </div>
              </GoAGrid>

              <GoAGrid gap="xl" mt="3xl" minChildWidth="320px">
                <GoABlock direction="column">
                  <GoAText size="heading-m" mb="xs"> Tertiary button </GoAText>
                  <GoAText size="body-m"> Use tertiary buttons for links that should function like a button, such as
                    “edit” or “cancel” in applications. It’s okay to use more than one tertiary button on a
                    page. </GoAText>
                </GoABlock>
                <div className="documentation-container">
                  <GoAButton type="tertiary">
                    View more
                  </GoAButton>
                </div>
              </GoAGrid>


              <GoAGrid gap="xl" mt="3xl" minChildWidth="320px">
                <GoABlock direction="column">
                  <GoAText size="heading-m" mb="xs"> Start button </GoAText>
                  <GoAText size="body-m"> Use a start button for the main call to action on your service’s start
                    page. </GoAText>
                </GoABlock>
                <div className="documentation-container">
                  <GoAButton type="start">
                    Get started
                  </GoAButton>
                </div>
              </GoAGrid>

              <GoAGrid gap="xl" mt="3xl" minChildWidth="320px">
                <GoABlock direction="column">
                  <GoAText size="heading-m" mb="xs"> Destructive button </GoAText>
                  <GoAText size="body-m"> Use a destructive button to inform the user that they are deleting
                    something. </GoAText>
                </GoABlock>
                <div className="documentation-container">
                  <GoAButton variant="destructive">
                    Delete record
                  </GoAButton>
                </div>
              </GoAGrid>

              <GoAGrid minChildWidth="320px" gap="xl" mt="4xl">
                <DoDont
                    type="do"
                    description="Use primary buttons for main actions and secondary buttons for less important actions.">
                  <img
                      src="/images/components/button/button-do-1.png"
                      alt="Button contextual example"
                      style={{maxWidth: "100%", height: "auto"}}
                  />
                </DoDont>
                <DoDont
                    type="dont"
                    description="Don’t use two primary buttons.">
                  <img
                      src="/images/components/button/button-dont-1.png"
                      alt="Button contextual example"
                      style={{maxWidth: "100%", height: "auto"}}
                  />
                </DoDont>
              </GoAGrid>

              <GoADivider mt="l" mb="2xl"></GoADivider>

              <GoAText size="heading-l" mb="l"><b>States</b></GoAText>


              <GoAText size="body-l" mb="l"> There are four main button states: Default, Hover, Focus & Active, and
                Disabled. </GoAText>

              <img className={"documentation-container"}
                   src="/images/components/button/button-states.png"
                   alt="Button contextual example"
                   style={{maxWidth: "100%", height: "auto"}}
              />

              <GoAGrid minChildWidth="320px" gap="xl" mt="3xl">
                <DoDont
                    type="do"
                    description="Remove an option if it’s unavailable. Show actions that are only relevant and useful to the user at a given time.">

                </DoDont>
                <DoDont
                    type="dont"
                    description="Don’t show a disabled option to the user unless research shows that it makes the interface easier to understand.">

                </DoDont>
              </GoAGrid>

              <GoAGrid minChildWidth="320px" gap="xl" mt="xl">
                <DoDont
                    type="do"
                    description="Use error handling to provide clear feedback about any missing fields or input errors when the user tries to submit the form.">

                </DoDont>
                <DoDont
                    type="dont"
                    description="Don’t disable a button on a form when a user has errors. Disabled states can confuse users if they don’t know how to enable them.">

                </DoDont>
              </GoAGrid>

              <GoADivider mt="l" mb="3xl"></GoADivider>

              <GoAText size="heading-l" mb="l"><b>Compact buttons</b></GoAText>
              <GoAText size="body-l" mb="2xl"> A smaller variant of the button to be used when space is
                limited.</GoAText>

              <div className="documentation-container">
                <GoAButtonGroup alignment="start" gap="compact">
                  <GoAButton size="compact">
                    Primary
                  </GoAButton>
                  <GoAButton type="secondary" size="compact">
                    Secondary
                  </GoAButton>
                  <GoAButton type="tertiary" size="compact">
                    Tertiary
                  </GoAButton>
                </GoAButtonGroup>
              </div>

              <GoAGrid minChildWidth="320px" gap="xl" mt="3xl">
                <DoDont
                    type="do"
                    description="Use the default button size for most situations.">

                </DoDont>
                <DoDont
                    type="dont"
                    description="Description.">

                </DoDont>
              </GoAGrid>

              <GoAGrid minChildWidth="320px" gap="xl">
                <DoDont
                    type="do"
                    description="Use the compact button size when using buttons in compact scenarios such as within a table.">
                  <img
                      src="/images/components/button/button-do-2.png"
                      alt="Button contextual example"
                      style={{maxWidth: "100%", height: "auto"}}
                  />
                </DoDont>
                <DoDont
                    type="dont"
                    description="Don’t use different button sizes in the same area as a way to emphasize hierarchy.">
                  <img
                      src="/images/components/button/button-dont-2.png"
                      alt="Button contextual example"
                      style={{maxWidth: "100%", height: "auto"}}
                  />
                </DoDont>
              </GoAGrid>

            </GoATab>

            {/* Accessibility documentation */}
            <GoATab heading="Accessibility">


            </GoATab>
            <GoADivider mt="3xl" mb="2xs"></GoADivider>

          </GoATabs>
        </ComponentContent>

        <GoABlock gap="xs" mt="xl">
          {/* Show date if we have it */}
          {lastUpdateTime && (
              <span style={{ fontSize: "0.9rem", color: "grey", marginBottom: "24px" }}>
            Last updated on {format(lastUpdateTime, "MMM dd, yyyy")}
          </span>
          )}
          <a
              style={{ fontSize: "0.9rem" }}
              href={`https://github.com/GovAlta/ui-components-docs/blob/main/src/${githubLink}`}
              target="_blank"
              rel="noopener noreferrer"
          >
            Edit this page
          </a>
        </GoABlock>
      </>
  );
}
