# Kurssisivupohja

* valikko vasemmalla
  
* tukee syntaksiväritystä
  
* LaTeX-tuki

## Paikallinen käännös

install gems
bundle exec jekyll serve --incremental

## `_config.yml`

Tiedostoon `_config.yml` laitetaan kurssin tiedot.

* Kenttään `title` tulee kurssin nimi. Käytä merkkiä `&shy;` määrittämään, mihin rivinvaihto ja tavuviiva tulee, kun kurssin nimi on pitkä.

* Kenttään `url` tulee osoite, jossa sivu julkaistaan. Linkin saa yleensä suoraan ghpages sivulta.

* Kenttään `baseurl` tulee osoitteen loppuosa eli hakemiston nimi.

## Erityyppiset sivut

Etusivu on erityisasemassa ja löytyy hakemiston juuresta tiedostona `index.md`.

Kurssisivulla on kahdenlaisia sivuja.

### `default`-sivu

`default`-sivut ovat tavallisia sivuja, jossa ei ole alihakemistoa. Tällaisia sivuja on esimerkiksi etusivu ja infosivu. `default`-sivujen `layout`-kenttä on arvoltaan `default`.

```liquid
---
layout: default
...
---
```

`default`-sivut ovat kansiossa `_pages` (pl. etusivu, joka on juuressa).

### Materiaalisivu

Materiaalisivut ovat tarkoitettu kurssimateriaalia varten. Ne ovat kansiossa `_content`. Jokaista osaa varten tehdään uusi kansio ja nimetään sopivalla tavalla (Esim. osa-1, osa-2...). Jokaisen osion kansioon lisätään tiedosto `index.md`. Tidoston `layout` on `chapter`.

```liquid
---
layout: chapter
title: Osan otsikko (vapaaehtoinen)
nav-title: Osan otsikko, joka näkyy hakemistossa
sub-sections:
    - link-url: mika-on-tietokanta
      sub-section-title: Mikä on tietokanta?
    - link-url: yksinkertainen-tietokanta
      sub-section-title: Yksinkertainen tietokanta
    - link-url: relaatiomalli
      sub-section-title: Relaatiomalli
---
```

Hakemistorakenne kirjoitetaan `sub-section`-kenttään. `link-url` on alaosion nimi ilman ääkkösiä tai väli- ja loppumerkkejä. `sub-section-title` kertoo alaosion nimen, joka näytetään hakemistoissa.

Osion alaosiot kirjoitetaan omiin markdowntiedostoihin ja ne liitetään pääsivulle (osion `index.md`) käyttämällä `{% include_relative osa-1-1.md %}`-komentoa jokaiselle alaosiolle.

## Syntaksi värityksen vaihtaminen

[täältä](https://spsarolkar.github.io/rouge-theme-preview/)rougify style base16.solarized.dark > css/syntax.css
