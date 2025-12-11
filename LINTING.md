# Linting and Local Commands

This project uses `stylelint` and `htmlhint` for local linting. The `stylelint` configuration extends `stylelint-config-standard` and includes a project-specific class name pattern.

Commands

```powershell
npm install
npm run lint
```

PowerShell workaround

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
npm install
npm run lint
```

Or use Command Prompt:

```cmd
npm install
npm run lint
```

Notes

- Update `.stylelintrc.json` for style changes; it currently extends `stylelint-config-standard` and enforces kebab-case class names.
- See `.github/workflows/lint.yml` for CI usage.
