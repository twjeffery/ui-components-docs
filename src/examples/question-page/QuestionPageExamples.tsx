import { Sandbox } from "@components/sandbox";
import {
  GoAButton,
  GoADetails, GoADropdown, GoADropdownItem,
  GoAFormItem, GoAInput,
  GoARadioGroup,
  GoARadioItem
} from "@abgov/react-components";
import "./question-page-example.css";
import { CodeSnippet } from "@components/code-snippet/CodeSnippet.tsx";

export default function QuestionPageExamples() {

  return (
    <div className="question-page-example">
      <div className="component-example-header">
        <h3 id="component-example-1">One question</h3>
        <a
          href="https://www.figma.com/file/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?type=design&node-id=101-4108&mode=design"
          target="_blank"
          rel="noreferrer">
          View in Figma
        </a>
      </div>
      <Sandbox fullWidth allow={["a"]}>
        {/*CSS Code Snippet*/}
        <CodeSnippet
          lang="css"
          allowCopy={true}
          code={`
            a.back-link::before {
              content: "";
              display: inline-block;
              width: 42px;
              height: 24px;
              vertical-align: middle;
              background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 2 22 22" fill="none" stroke="%230070C4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>') center center no-repeat;
            }

            a.back-link:visited::before,
            a.back-link:hover::before {
              background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 2 22 22" fill="none" stroke="%23004f84" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>') center center no-repeat;
            }
            
            a.back-link {
             margin-top: var(--goa-space-m);
            }
        `}
        />

        <a href="#" className="back-link">
          Back
        </a>
        <GoAFormItem
          mt="2xl"
          label="Are you currently in school?"
          labelSize="large"
          helpText="School includes foundational, skills and employment training, micro-credentials, post-secondary and continuing education.">
          <GoARadioGroup name="school" ariaLabel="are you currently in school?" onChange={() => {}}>
            <GoARadioItem value="yes" label="Yes"></GoARadioItem>
            <GoARadioItem value="no" label="No">
              No
            </GoARadioItem>
          </GoARadioGroup>
        </GoAFormItem>
        <GoAButton type="submit" mt="2xl">
          Save and continue
        </GoAButton>
      </Sandbox>

      <div className="component-example-header">
        <h3 id="component-example-2">Additional background information</h3>
        <a
          href="https://www.figma.com/file/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?type=design&node-id=101-4108&mode=design"
          target="_blank"
          rel="noreferrer">
          View in Figma
        </a>
      </div>
      <Sandbox fullWidth allow={["h2", "p", "a"]}>
        {/*CSS Code Snippet*/}
        <CodeSnippet
          lang="css"
          allowCopy={true}
          code={`
            h2.section-title {
              margin-bottom: var(--goa-space-l);
            }
            
            a.back-link::before {
              content: "";
              display: inline-block;
              width: 42px;
              height: 24px;
              vertical-align: middle;
              background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 2 22 22" fill="none" stroke="%230070C4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>') center center no-repeat;
            }

            a.back-link:visited::before,
            a.back-link:hover::before {
              background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 2 22 22" fill="none" stroke="%23004f84" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>') center center no-repeat;
            }
            
            a.back-link {
             margin-top: var(--goa-space-m);
            }
            
            a.back-link + h2 {
              margin-top: var(--goa-space-2xl);
            }
          `}
        />
        <a href="#" className="back-link">
          Back
        </a>
        <h2 className="section-title">Current school status</h2>
        <p>
          School can encompass foundational programs that help individuals gain basic skills for
          further learning and living, such as literacy and numeracy courses. It also includes
          skills and employment training programs, designed to equip you with specific skills for
          the job market.
        </p>
        <p>
          Post-secondary education, such as Bachelor's, Master's, or Doctoral degrees, and
          continuing education courses for professional or personal development, are also
          categorized under 'school'.
        </p>
        <p>Contact your provider if you’re concerned about your school status.</p>
        <GoAFormItem label="Are you currently in school?" mt="xl">
          <GoARadioGroup name="school" ariaLabel="are you currently in school?" onChange={() => {}}>
            <GoARadioItem value="yes" label="Yes"></GoARadioItem>
            <GoARadioItem value="no" label="No"></GoARadioItem>
          </GoARadioGroup>
        </GoAFormItem>
        <GoAButton type="submit" mt="2xl">
          Save and continue
        </GoAButton>
      </Sandbox>

      <div className="component-example-header">
        <h3 id="component-example-3">Progressive disclosure</h3>
        <a
          href="https://www.figma.com/file/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?type=design&node-id=101-4108&mode=design"
          target="_blank"
          rel="noreferrer">
          View in Figma
        </a>
      </div>
      <Sandbox fullWidth allow={["a"]}>
        {/*
        CSS Code Snippet*/}
        <CodeSnippet
          lang="css"
          allowCopy={true}
          code={`
            a.back-link::before {
              content: "";
              display: inline-block;
              width: 42px;
              height: 24px;
              vertical-align: middle;
              background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 2 22 22" fill="none" stroke="%230070C4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>') center center no-repeat;
            }

            a.back-link:visited::before,
            a.back-link:hover::before {
              background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 2 22 22" fill="none" stroke="%23004f84" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>') center center no-repeat;
            }
            
            a.back-link {
             margin-top: var(--goa-space-m);
            }
        `}
        />

        <a href="#" className="back-link">
          Back
        </a>
        <GoAFormItem
          mt="2xl"
          label="Do you pay for child care?"
          labelSize="large"
          helpText="Examples of child care are daycares, day homes and baby-sisters.">
          <GoARadioGroup
            name="child-care"
            ariaLabel="Do you pay for child care?"
            onChange={() => {}}>
            <GoARadioItem value="yes" label="Yes"></GoARadioItem>
            <GoARadioItem value="no" label="No"></GoARadioItem>
          </GoARadioGroup>
        </GoAFormItem>

        <GoADetails heading="Why are we asking this question?" mt="xl">
          <p>We ask this question to determine if you are eligible for child care benefits.</p>
        </GoADetails>
        <GoAButton type="submit" mt="2xl">
          Save and continue
        </GoAButton>
      </Sandbox>

      <div className="component-example-header">
        <h3 id="component-example-4">Section title</h3>
        <a
          href="https://www.figma.com/file/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?type=design&node-id=101-4108&mode=design"
          target="_blank"
          rel="noreferrer">
          View in Figma
        </a>
      </div>
      <Sandbox fullWidth allow={["h3", "a"]}>
        {/*CSS Code Snippet*/}
        <CodeSnippet
          lang="css"
          allowCopy={true}
          code={` 
            a.back-link::before {
              content: "";
              display: inline-block;
              width: 42px;
              height: 24px;
              vertical-align: middle;
              background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 2 22 22" fill="none" stroke="%230070C4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>') center center no-repeat;
            }

            a.back-link:visited::before,
            a.back-link:hover::before {
              background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 2 22 22" fill="none" stroke="%23004f84" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>') center center no-repeat;
            }
            
            a.back-link {
             margin-top: var(--goa-space-m);
            }
            
            h3.section-title {
              margin-bottom: 0;
              color: var(--goa-color-text-secondary);
            }
            
            a.back-link + h3 {
              margin-top: var(--goa-space-2xl);
            }
        `}
        />

        <a href="#" className="back-link">
          Back
        </a>
        <h3 className="section-title">Personal information</h3>
        <GoAFormItem mt="xs" label="Do you currently live in Canada?" labelSize="large">
          <GoARadioGroup
            name="canada"
            ariaLabel="Do you currently live in Canada?"
            onChange={() => {}}>
            <GoARadioItem value="yes" label="Yes"></GoARadioItem>
            <GoARadioItem value="no" label="No"></GoARadioItem>
          </GoARadioGroup>
        </GoAFormItem>
        <GoAButton type="submit" mt="2xl">
          Save and continue
        </GoAButton>
      </Sandbox>

      <div className="component-example-header">
        <h3 id="component-example-5">Simple progress indicator</h3>
        <a
          href="https://www.figma.com/file/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?type=design&node-id=101-4108&mode=design"
          target="_blank"
          rel="noreferrer">
          View in Figma
        </a>
      </div>
      <Sandbox fullWidth allow={["h3", "a"]}>
        {/*CSS Code Snippet*/}
        <CodeSnippet
          lang="css"
          allowCopy={true}
          code={`
            h3.section-title {
              margin-bottom: 0;
              color: var(--goa-color-text-secondary);
            }
            
            a.back-link::before {
              content: "";
              display: inline-block;
              width: 42px;
              height: 24px;
              vertical-align: middle;
              background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 2 22 22" fill="none" stroke="%230070C4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>') center center no-repeat;
            }

            a.back-link:visited::before,
            a.back-link:hover::before {
              background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 2 22 22" fill="none" stroke="%23004f84" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>') center center no-repeat;
            }
            
            a.back-link {
             margin-top: var(--goa-space-m);
            }
            
            a.back-link + h3 {
              margin-top: var(--goa-space-2xl);
            }
          `}
        />
        <a href="#" className="back-link">
          Back
        </a>
        <h3 className="section-title">Question 3 of 9</h3>
        <GoAFormItem mt="xs" label="Do you currently live in Canada?" labelSize="large">
          <GoARadioGroup
            name="canada"
            ariaLabel="Do you currently live in Canada?"
            onChange={() => {}}>
            <GoARadioItem value="yes" label="Yes"></GoARadioItem>
            <GoARadioItem value="no" label="No"></GoARadioItem>
          </GoARadioGroup>
        </GoAFormItem>
        <GoAButton type="submit" mt="2xl">
          Save and continue
        </GoAButton>
      </Sandbox>

      <div className="component-example-header">
        <h3 id="component-example-6">Multiple questions</h3>
        <a
          href="https://www.figma.com/file/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?type=design&node-id=101-4108&mode=design"
          target="_blank"
          rel="noreferrer">
          View in Figma
        </a>
      </div>
      <Sandbox fullWidth allow={["h2", "h3", "a"]}>
        {/*CSS Code Snippet*/}
        <CodeSnippet
          lang="css"
          allowCopy={true}
          code={`
            a.back-link::before {
              content: "";
              display: inline-block;
              width: 42px;
              height: 24px;
              vertical-align: middle;
              background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 2 22 22" fill="none" stroke="%230070C4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>') center center no-repeat;
            }

            a.back-link:visited::before,
            a.back-link:hover::before {
              background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 2 22 22" fill="none" stroke="%23004f84" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>') center center no-repeat;
            }
            
            a.back-link {
             margin-top: var(--goa-space-m);
            }
            
            a.back-link + h2 {
              margin-top: var(--goa-space-2xl);
            }
            
            h2.section-title {
              margin-bottom: 0;
            }
            
            h2.section-title + h3 {
              margin-top: var(--goa-space-xs);
            }
          `}
        />

        <a href="#" className="back-link">
          Back
        </a>
        <h2 className="section-title">Your address</h2>
        <h3>This is the home address of the person applying</h3>
        <GoAFormItem label="Address line 1" mt="l">
          <GoAInput
            onChange={() => {}}
            name="address-line-1"
            ariaLabel="Address line 1"
            width="100%"
          />
        </GoAFormItem>
        <GoAFormItem label="Address line 2" mt="xl">
          <GoAInput
            onChange={() => {}}
            name="address-line-2"
            ariaLabel="Address line 2"
            width="100%"
          />
        </GoAFormItem>
        <GoAFormItem label="Town or city" mt="xl">
          <GoAInput
            onChange={() => {}}
            name="town-city"
            ariaLabel="Town or city name"
            width={"460px"}
          />
        </GoAFormItem>
        <GoAFormItem label="Province or territory" mt="xl" id="provinceLabel">
          <GoADropdown onChange={() => {}} name="province-territory" ariaLabelledBy="provinceLabel">
            <GoADropdownItem value="AB" label="Alberta" />
            <GoADropdownItem value="BC" label="British Columbia" />
            <GoADropdownItem value="MB" label="Manitoba" />
            <GoADropdownItem value="NB" label="New Brunswick" />
            <GoADropdownItem value="NL" label="Newfoundland and Labrador" />
            <GoADropdownItem value="NS" label="Nova Scotia" />
            <GoADropdownItem value="ON" label="Ontario" />
            <GoADropdownItem value="PE" label="Prince Edward Island" />
            <GoADropdownItem value="QC" label="Quebec" />
            <GoADropdownItem value="SK" label="Saskatchewan" />
            <GoADropdownItem value="NT" label="Northwest Territories" />
            <GoADropdownItem value="NU" label="Nunavut" />
            <GoADropdownItem value="YT" label="Yukon" />
          </GoADropdown>
        </GoAFormItem>
        <GoAFormItem label="Postal code" mt="xl">
          <GoAInput onChange={() => {}} name="postal-code" width={"105px"} />
        </GoAFormItem>
        <GoAButton type="submit" mt="2xl">
          Save and continue
        </GoAButton>
      </Sandbox>

      <div className="component-example-header">
        <h3 id="component-example-7">Multiple questions and a simple progress indicator</h3>
        <a
          href="https://www.figma.com/file/aIRjvBzpIUH0GbkffjbL04/%E2%9D%96-Patterns-library-%7C-DDD?type=design&node-id=101-4108&mode=design"
          target="_blank"
          rel="noreferrer">
          View in Figma
        </a>
      </div>
      <Sandbox fullWidth allow={["h2", "h3", "a"]} skipRender>
        {/*CSS Code Snippet*/}
        <CodeSnippet
          lang="css"
          allowCopy={true}
          code={`
            a.back-link::before {
              content: "";
              display: inline-block;
              width: 42px;
              height: 24px;
              vertical-align: middle;
              background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 2 22 22" fill="none" stroke="%230070C4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>') center center no-repeat;
            }

            a.back-link:visited::before,
            a.back-link:hover::before {
              background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 2 22 22" fill="none" stroke="%23004f84" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>') center center no-repeat;
            }
            
            a.back-link {
             margin-top: var(--goa-space-m);
            }
            
            h3.section-title {
              margin-bottom: 0;
              color: var(--goa-color-text-secondary);
            }
            
            a.back-link + h3 {
              margin-top: var(--goa-space-2xl);
            }
            
            h3.section-title + h2 {
              margin-top: var(--goa-space-xs);
            }
          `}
        />

        {/*Angular Code Snippet - need for leadingContent slot*/}
        <CodeSnippet
          lang="typescript"
          tags="angular"
          allowCopy={true}
          code={`
            <a href="#" class="back-link">
              Back
            </a>
            <h3 class="section-title text-secondary">
              Step 1 of 5
            </h3>
            <h2>
              Personal information
            </h2>
            <goa-form-item label="What is your name?" mt="xl">
              <goa-input (_change)="onChange($event)" name="name" arialabel="what is your name?" width="50ch"></goa-input>
            </goa-form-item>
            <goa-form-item label="What is your phone number?" mt="xl">
              <goa-input (_change)="onChange($event)" name="phone-number" arialabel="what is your phone number?">
                <div slot="leadingContent">+1</div>
              </goa-input>
            </goa-form-item>
            <goa-form-item label="What is your home postal code?" mt="xl">
              <goa-input (_change)="onChange($event)" name="postal-code" width="14ch" arialabel="what is your home postal code"></goa-input>
            </goa-form-item>
            <goa-button type="submit" mt="2xl">
              Save and continue
            </goa-button>
          `}
        />

        {/*React Code Snippet - need for leadingContent slot*/}
        <CodeSnippet
          lang="typescript"
          tags="react"
          allowCopy={true}
          code={`
            <a href="#" className="back-link">
              Back
            </a>
            <h3 className="section-title text-secondary">Step 1 of 5</h3>
            <h2>Personal information</h2>
            <GoAFormItem label="What is your name?" mt="xl">
              <GoAInput onChange={() => {}} name="name" ariaLabel="what is your name?" width="50ch" />
            </GoAFormItem>
            <GoAFormItem label="What is your phone number?" mt="xl">
              <GoAInput
                onChange={() => {}}
                name="phone-number"
                ariaLabel="what is your phone number?"
                leadingContent="+1"
              />
            </GoAFormItem>
            <GoAFormItem label="What is your home postal code?" mt="xl">
              <GoAInput
              onChange={() => {}}
              name="postal-code"
              width="14ch"
              ariaLabel="what is your home postal code"></GoAInput>
            </GoAFormItem>
            <GoAButton type="submit" mt="2xl">
              Save and continue
            </GoAButton>
          `}
        />

        <a href="#" className="back-link">
          Back
        </a>
        <h3 className="section-title text-secondary">Step 1 of 5</h3>
        <h2>Personal information</h2>

        <GoAFormItem label="What is your name?" mt="xl">
          <GoAInput onChange={() => {}} name="name" ariaLabel="what is your name?" width="50ch" />
        </GoAFormItem>
        <GoAFormItem label="What is your phone number?" mt="xl">
          <GoAInput
            onChange={() => {}}
            name="phone-number"
            ariaLabel="what is your phone number?"
            leadingContent="+1"
          />
        </GoAFormItem>
        <GoAFormItem label="What is your home postal code?" mt="xl">
          <GoAInput
            onChange={() => {}}
            name="postal-code"
            width="14ch"
            ariaLabel="what is your home postal code"></GoAInput>
        </GoAFormItem>
        <GoAButton type="submit" mt="2xl">
          Save and continue
        </GoAButton>
      </Sandbox>
    </div>
  );
}
