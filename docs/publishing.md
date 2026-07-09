# Publishing

This document is the release checklist for publishing Kairo 88 as `@ingredisilva/kairo-88`.

## Package Target

- Registry: npm public registry.
- Package name: `@ingredisilva/kairo-88`.
- Visibility: public.
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

- `src/contracts`
- `src/icons`
- `src/styles`
- `tokens`
- `docs`
- `CHANGELOG.md`
- `LICENSE`
- `README.md`
- `package.json`

## First Manual Publish

The first publish needs an npm account with 2FA enabled.

```bash
npm login
npm whoami
npm run test:ci
npm run pack:dry-run
npm publish --access public
```

After the first publish, verify:

```bash
npm view @ingredisilva/kairo-88 version
npm install @ingredisilva/kairo-88
```

## Trusted Publishing Setup

After the package exists on npm:

1. Open the package on npm.
2. Go to package settings.
3. Enable Trusted Publishing.
4. Choose GitHub Actions.
5. Use repository `ingredisilva/forge-design-system`.
6. Use workflow `.github/workflows/release.yml`.
7. Keep the workflow trigger on tags matching `v*`.

The release workflow already requests `id-token: write`, which is required for OIDC-based publishing.

## Tag Release Flow

For a patch release:

```bash
npm version patch
git push origin master --follow-tags
```

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
