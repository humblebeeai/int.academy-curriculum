# Curriculum Versioning Guide

This guide explains how to publish a historical curriculum snapshot that users
can select from the website's **Curriculum** dropdown.

Curriculum snapshots represent meaningful changes to learning content. They are
separate from package releases, Git tags, dependency versions, and application
deployments.

## When to create a snapshot

Create a snapshot after a meaningful curriculum update, such as:

- adding, removing, or restructuring a learning module;
- changing the order of topics or prerequisites;
- making substantial changes to learning resources;
- changing capstone requirements or expected outcomes;
- publishing a reviewed curriculum milestone.

Do not create a snapshot for:

- dependency or package updates;
- CSS-only or UI-only changes;
- CI/CD, Docker, or infrastructure changes;
- typo, formatting, or minor broken-link fixes.

## Publish a snapshot with GitHub Actions

### 1. Merge the curriculum update

Review and merge the curriculum changes into `main` before creating the
snapshot. The workflow copies the `docs/` content from the branch selected when
the workflow is started.

Do not run the publication workflow from a feature branch. A snapshot created
there will remain on that branch and will not be deployed by the normal
production workflow.

### 2. Open the workflow

In the GitHub repository:

1. Open **Actions**.
2. Select **Publish Curriculum Version**.
3. Select **Run workflow**.
4. Select the `main` branch.

### 3. Enter the publication date

Enter the snapshot date using this format:

```text
YYYY-MM-DD
```

Example:

```text
2026-08-14
```

The date becomes the permanent version identifier and URL:

```text
/docs/2026-08-14/
```

The dropdown label is generated automatically:

```text
August 14, 2026
```

The field can be left empty to use the current UTC date. Entering the date
explicitly is safer because it makes the intended publication date clear.

A date that already exists cannot be reused.

### 4. Run and monitor the workflow

Select **Run workflow** and wait for **Publish Curriculum Version** to finish.
The workflow will:

1. install dependencies;
2. copy the current curriculum into a date-based snapshot;
3. create the versioned sidebar;
4. preserve required curriculum assets;
5. add the version to the website dropdown and version history;
6. remove snapshots older than 365 days;
7. run a production build;
8. commit and push the generated snapshot to `main`.

The generated commit uses this message:

```text
docs: update curriculum version archive
```

The commit triggers the separate **Publish Docs** workflow. Both workflows must
complete successfully:

```text
Publish Curriculum Version — passed
Publish Docs — passed
```

### 5. Verify the website

Verify all of the following:

1. The new date appears in the top navigation curriculum dropdown.
2. The snapshot opens at `/docs/YYYY-MM-DD/`.
3. The version is listed on `/versions`.
4. Switching versions keeps the user on the same document when that document
   exists in both versions.
5. Old-version pages display the historical-version banner.

## Automatic retention

The workflow runs on a daily schedule to remove snapshots older than 365 days.
It removes the corresponding:

- version metadata;
- versioned documentation;
- versioned sidebar;
- archived static assets.

Snapshots exactly 365 days old remain available. They are removed after they
become older than 365 days.

## Local commands

GitHub Actions is the normal publication method. For local testing:

```bash
npm run curriculum:version -- --date YYYY-MM-DD
npm run curriculum:prune
```

The first command modifies the working tree. Use a new date and review all
generated files before committing.

## Generated files

The workflow manages these paths:

```text
curriculum-versions.json
versions.json
versioned_docs/
versioned_sidebars/
static/curriculum-versions/
```

Do not manually edit generated snapshots after publication. Correct the current
curriculum and publish another snapshot when a meaningful update is ready.

## Failure cases

### Version already exists

```text
Curriculum version YYYY-MM-DD already exists.
```

The selected date has already been published. Do not overwrite it. Use the
correct publication date for the new snapshot.

### Build fails

The snapshot contains a broken link, missing asset, or incompatible MDX import.
Fix the current curriculum on a branch, merge the fix into `main`, then run the
workflow again with the intended date.

### Workflow cannot push

The repository or branch protection rules are blocking the workflow's generated
commit. The workflow requires `contents: write` permission and permission to
push its archive commit to `main`.

### Snapshot does not appear publicly

Confirm that:

1. the workflow ran from `main`;
2. **Publish Curriculum Version** passed;
3. its generated commit exists on `main`;
4. **Publish Docs** ran after that commit and passed.
