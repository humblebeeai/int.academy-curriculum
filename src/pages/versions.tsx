import React, { type ReactNode } from "react";
import Layout from "@theme/Layout";
import curriculumVersions from "@site/curriculum-versions.json";

export default function CurriculumVersionHistory(): ReactNode {
  return (
    <Layout
      title="Curriculum Version History"
      description="Historical curriculum snapshots available for comparison."
    >
      <main className="container margin-vert--lg">
        <h1>Curriculum Version History</h1>
        <p>
          The curriculum changes as modules, learning resources, prerequisites,
          and project requirements are revised. Historical snapshots remain
          available for one year after publication.
        </p>
        <p>
          Use the <strong>Curriculum version</strong> dropdown in the top
          navigation bar to switch versions. When the same page exists in
          another version, the selector opens that page.
          Otherwise, it opens the selected version&apos;s curriculum home page.
        </p>

        <h2>Available snapshots</h2>
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Curriculum version</th>
                <th>Published</th>
                <th>Source commit</th>
              </tr>
            </thead>
            <tbody>
              {curriculumVersions.map((version) => (
                <tr key={version.name}>
                  <td>
                    <a href={version.path}>{version.label}</a>
                  </td>
                  <td>{version.publishedAt}</td>
                  <td>
                    <code>{version.sourceRef}</code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>Snapshots older than 365 days are removed automatically.</p>
      </main>
    </Layout>
  );
}
