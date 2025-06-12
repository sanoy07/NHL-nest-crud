{ pkgs ? import <nixpkgs> {} }:
let
  openssl = pkgs.openssl;
  #pkgconfig = pkgs.pkgconfig;
in pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs    # default Node in this channel
    pkgs.yarn
    openssl
    #pkgconfig
  ];
  shellHook = ''
    export LD_LIBRARY_PATH="${openssl.out}/lib:$LD_LIBRARY_PATH"
    export PRISMA_ENGINES_CHECKSUM_IGNORE_MISSING=1
    if [ -d "$(pwd)/prisma/engines" ]; then
      export PRISMA_QUERY_ENGINE_BINARY="$(pwd)/prisma/engines/query-engine-linux"
      export PRISMA_MIGRATION_ENGINE_BINARY="$(pwd)/prisma/engines/migration-engine-linux"
      export PRISMA_INTROSPECTION_ENGINE_BINARY="$(pwd)/prisma/engines/introspection-engine-linux"
      export PRISMA_SCHEMA_ENGINE_BINARY="$(pwd)/prisma/engines/schema-engine-linux"
      export PRISMA_QUERY_ENGINE_LIBRARY="$/home/sanoy/NightHack-Labs/week_2/my-nest-app/node_modules/@prisma/engines/libquery_engine-linux.so.node"
    fi
  '';
}
