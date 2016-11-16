Orientações de uso para as pastas pré existentes

- app 
  * Para uso basedo na especificação do w3c "appmanifest" https://www.w3.org/TR/appmanifest/, nessa
  pasta deve conter dos os arquivos auxiliares referenciados no manifest.json

- fonts
  * fonts externas usadas para aplicação

- images
  * imagens e icons que serão staticos que serão referenciados no html ou css

- languages
  * Internacionalização estatica usando arquivos .json, "implementado utilizando o angular-translate", arquivos
  automatizados utilizando o gulp, ver gulp/task/languages.js

- styles
  * arquivos .css ou preprocessadores como .styl, .less, .sass etc, para preprocessadores é necessário criar automatizações
  para conversão para css. recomendado criar sub pastas ex. "styles/css, styles/sass"