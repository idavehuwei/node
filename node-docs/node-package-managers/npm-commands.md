# npm commands

## npm list

Get list of globally installed packages

```
npm list

npm list -g --depth 0
```

## npm version

```
npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease [--preid=<prerelease-id>] | from-git]

'npm [-v | --version]' to print npm version
'npm view <pkg> version' to view a package's published version
'npm ls' to inspect current package/dependency versions
```

```
C:\_loggar\_workspace_tmp\npm-init-ex  (npm-init-ex@1.0.0)
λ npm version patch
v1.0.1

C:\_loggar\_workspace_tmp\npm-init-ex  (npm-init-ex@1.0.1)
λ npm version minor
v1.1.0

C:\_loggar\_workspace_tmp\npm-init-ex  (npm-init-ex@1.1.0)
λ npm version major
v2.0.0

C:\_loggar\_workspace_tmp\npm-init-ex  (npm-init-ex@2.0.0)
λ
```

## npm pack

Create a tarball from a package

## npm outdated

Checks for outdates packages

## npm prune

Remove extraneous packages

## npm dedupe

Reduce duplication
