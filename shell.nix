{ pkgs ? import <nixpkgs> {} }:
  pkgs.mkShell {
    buildInputs = [
      pkgs.nodejs_latest
      pkgs.fish
      pkgs.sqlite
      pkgs.entr
    ];
}
