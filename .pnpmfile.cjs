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
