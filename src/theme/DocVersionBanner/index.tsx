import React, { type ReactNode } from "react";
import Link from "@docusaurus/Link";
import {
  useActivePlugin,
  useDocsPreferredVersion,
  useDocsVersion,
  useDocVersionSuggestions,
} from "@docusaurus/plugin-content-docs/client";
import type { Props } from "@theme/DocVersionBanner";

export default function DocVersionBanner({ className }: Props): ReactNode {
  const version = useDocsVersion();
  const activePlugin = useActivePlugin({ failfast: true })!;
  const { savePreferredVersionName } = useDocsPreferredVersion(activePlugin.pluginId);
  const { latestDocSuggestion, latestVersionSuggestion } =
    useDocVersionSuggestions(activePlugin.pluginId);

  if (!version.banner) {
    return null;
  }

  const latestDoc =
    latestDocSuggestion ??
    latestVersionSuggestion.docs.find(
      ({ id }) => id === latestVersionSuggestion.mainDocId,
    )!;

  return (
    <div
      className={`${className ?? ""} theme-doc-version-banner alert alert--warning margin-bottom--md`}
      role="alert"
    >
      <strong>You are viewing the {version.label} curriculum.</strong>{" "}
      This snapshot is preserved for comparison and is no longer updated.
      <div className="margin-top--sm">
        <Link
          to={latestDoc.path}
          onClick={() => savePreferredVersionName(latestVersionSuggestion.name)}
        >
          View the current curriculum
        </Link>
      </div>
    </div>
  );
}
