# Publishing

This document is the release checklist for publishing Kairo 88 as `@alloysforge/kairo-88`.

## Package Target

- Registry: npm public registry.
- Package name: `@alloysforge/kairo-88`.
- Visibility: public.
- Current npm version before this release: `0.2.0`.
- Release model: semantic versioning with Git tags.
- Documentation: Storybook deployed to GitHub Pages.

## Release Gates

Every release must pass:

```bash
npm ci
npm run test:ci
npm run pack:dry-run
```

The package tarball should only contain:

- `dist/contracts`
- `src/icons`
- `src/styles`
- `tokens`
- `docs`
- `CHANGELOG.md`
- `LICENSE`
- `README.md`
- `package.json`

## Initial Manual Publish

The package already exists on npm. Releases from `v0.2.0` onward use the tag-triggered trusted-publishing workflow.

For a brand-new package, the first publish needs an npm account with 2FA enabled:

```bash
npm login
npm whoami
npm run test:ci
npm run pack:dry-run
npm publish --access public
```

Verify the published package:

```bash
npm view @alloysforge/kairo-88 version
npm install @alloysforge/kairo-88
```

## Trusted Publishing Setup

After the package exists on npm:

1. Open the package on npm.
2. Go to package settings.
3. Enable Trusted Publishing.
4. Choose GitHub Actions.
5. Use repository `ingredisilva/forge-design-system`.
6. Use workflow filename `release.yml`.
7. Leave Environment name empty.
8. Keep the workflow trigger on tags matching `v*`.

The release workflow already requests `id-token: write`, which is required for OIDC-based publishing.

## Tag Release Flow

For a patch release:

```bash
npm version patch
git push origin master --follow-tags
```

Never reuse an existing release tag. The package version, Git tag, and changelog version must match.

For minor or major releases:

```bash
npm version minor
npm version major
```

The tag push triggers the release workflow and publishes to npm.

## Storybook Pages

The Storybook workflow deploys `storybook-static` to GitHub Pages from `master`.

Repository setup required once:

1. Open GitHub repository settings.
2. Go to Pages.
3. Set source to GitHub Actions.
4. Run the `Storybook Pages` workflow or push to `master`.
