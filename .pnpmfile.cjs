// Dual-major Effect: keep effect@3.22.0 nested under @effect/schema.
// Keep this version in sync with pnpm-workspace.yaml overrides and typed-openapi's effect3 devDep.
function readPackage(pkg) {
  if (pkg.name === "@effect/schema") {
    pkg.dependencies = {
      ...(pkg.dependencies ?? {}),
      effect: "3.22.0",
    };
    // Keep effect@3 nested; do not accept the workspace effect@4 peer.
    delete pkg.peerDependencies?.effect;
    if (pkg.peerDependenciesMeta) delete pkg.peerDependenciesMeta.effect;
  }
  return pkg;
}

module.exports = {
  hooks: {
    readPackage,
  },
};
