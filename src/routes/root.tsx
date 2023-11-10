import {
  GoAAppFooter,
  GoAAppFooterMetaSection,
  GoAAppFooterNavSection,
  GoAAppHeader,
  GoAMicrositeHeader,
  GoAOneColumnLayout,
} from "@abgov/react-components";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

import "./root.css";

import { useLocation } from "react-router-dom";

export const MAX_CONTENT_WIDTH = "1500px";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function Root() {
  const [visible, setVisibility] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setVisibility(true);
    }, 50);
  });

  return (
    <div className="app" style={{ opacity: visible ? "1" : "0" }}>
      <ScrollToTop />
      <GoAOneColumnLayout>
        <section className="header" slot="header">
          <GoAMicrositeHeader
            type={"alpha"}
            feedbackUrl="https://github.com/GovAlta/ui-components/discussions"
            maxContentWidth={MAX_CONTENT_WIDTH}
          />
          <GoAAppHeader heading="Design system" maxContentWidth={MAX_CONTENT_WIDTH}>
            <Link to="/get-started">Get started</Link>
            <Link to="/patterns">Patterns and templates</Link>
            <Link to="/components">Components</Link>
            <Link to="/design-tokens">Styles</Link>
            <Link to="/content">Content</Link>
            <Link to="/support">Support</Link>
            <Link to="https://github.com/GovAlta/ui-components/issues/new/choose" target="_blank">
              Report a bug
            </Link>
          </GoAAppHeader>
        </section>

        <section>
          <Outlet />
        </section>

        <section slot="footer">
          <GoAAppFooter maxContentWidth={MAX_CONTENT_WIDTH}>
            <GoAAppFooterNavSection heading="Resources" maxColumnCount={2}>
              <Link to="/get-started">Get started</Link>
              <Link to="/patterns">Patterns and templates</Link>
              <Link to="/components">Components</Link>
              <Link to="/design-tokens">Styles</Link>
              <Link to="/ux-writing">UX writing</Link>
              <Link to="/contribute">Contribute</Link>
            </GoAAppFooterNavSection>
            <GoAAppFooterNavSection heading="Get support">
              <Link to="/submit-an-issue">Submit an issue</Link>
              <Link to="/support">#design-system-support</Link>
              <Link to="/drop-in-hours">Drop in hours</Link>
            </GoAAppFooterNavSection>
            <GoAAppFooterMetaSection>
              <Link to="/contribute-design-system">Contribute to the design system</Link>
              <Link to="/leave-feedback">Leave feedback</Link>
              <Link to="/release-notes">Release notes</Link>
            </GoAAppFooterMetaSection>
          </GoAAppFooter>
        </section>
      </GoAOneColumnLayout>
    </div>
  );
}