# Thème de Rennes Ville et Métropole

## Inclure le module

```bash
git submodule add https://gitlab.ecedi.fr/rennes-ville-metropole/osuny/rennes-theme.git themes/rennes-hugo-theme
```

Dans /assets/sass/main.sass
```sass
@import "rennes-hugo/theme"
```

Dans /config/_default/config.yaml
```yaml
theme: rennes-hugo-theme
```

## Mise à jour du submodule sur les projets

Pour mettre à jour le submodule sur les projets concernés il faut renseigner les IDs des projets dans la variable `PROJECT_ID`.

A la création d'un tag un job sera déclenché sur chacun des projets.

Sur les projets concernés il faut inclure le composant Gitlab `update-submodule` :

```yaml
include:
  - component: $CI_SERVER_FQDN/rennes-ville-metropole/osuny/ops/components/submodule-update@main
```
