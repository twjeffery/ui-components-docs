import { GoAContainer, GoAGrid, GoATable } from "@abgov/react-components";
import { TokenSnippet } from "@components/token-snippet/TokenSnippet";
import "./Spacing.css";
import SPACING_TOKENS from "./spacing.json";
import { getTokenGroups } from "../getTokenGroups";
import { DeviceWidthContext } from "../../../contexts/DeviceWidthContext";
import { useContext } from "react";
import { getCssVarValue } from "../../../utils/styling";

interface Token {
  tokenName: string;
  rem: string;
  px: string;
  figmaUsage: string;
}

export default function SpacingPage() {
  const tokens: Token[] = SPACING_TOKENS;
  const { isDesktop } = useContext(DeviceWidthContext);

  const renderDesktop = () => {
    return (
      <GoATable variant="normal" width="100%">
        <thead>
          <tr>
            <th></th>
            <th>Token name</th>
            <th>rem</th>
            <th>px</th>
            <th>Figma variable</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((token, index) => (
            <tr key={index}>
              <td>
                <div className="represent">
                  <div className="grey-circle"></div>
                  <div
                    className={`space-rect ${token.tokenName}`}
                    style={{
                      width: getCssVarValue(`--${token.tokenName}`),
                    }}
                  ></div>
                  <div className="grey-circle"></div>
                </div>
              </td>
              <td>
                <TokenSnippet code={token.tokenName} />
              </td>
              <td>{token.rem}</td>
              <td>{token.px}</td>
              <td>{token.figmaUsage}</td>
            </tr>
          ))}
        </tbody>
      </GoATable>
    );
  };

  const renderMobile = () => {
    return (
      <GoAGrid minChildWidth="22rem" gap="xl">
        {getTokenGroups(tokens).map(group =>
          group.map((token: Token, idx: number) => (
            <GoAContainer key={idx}>
              <div className="represent">
                <div className="grey-circle"></div>
                <div
                  className={`space-rect ${token.tokenName}`}
                  style={{
                    width: getCssVarValue(`--${token.tokenName}`),
                  }}
                ></div>
                <div className="grey-circle"></div>
              </div>
              <TokenSnippet code={token.tokenName} />
              <dl>
                <dt>REM</dt> <dd>{token.rem}</dd>
                <dt>PX</dt> <dd>{token.px}</dd>
                <dt>Figma usage</dt> <dd>{token.figmaUsage}</dd>
              </dl>
            </GoAContainer>
          ))
        )}
      </GoAGrid>
    );
  };

  return (
    <div className="spacing-page">
      <h1>Spacing</h1>
      {isDesktop ? renderDesktop() : renderMobile()}
    </div>
  );
}
