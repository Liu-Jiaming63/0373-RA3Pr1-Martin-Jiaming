# Bateria de preguntes obertes sobre Git i GitHub

## 1. Reconeix la utilitat de les aplicacions d’ofimàtica web

### Explica per què GitHub es pot considerar una aplicació web de treball col·laboratiu
GitHub es considera una aplicació web col·laborativa perquè permet que diverses persones treballin en un mateix projecte des de diferents llocs, compartint codi i canvis en temps real, com ara el treball grupal que estem realitzant mitjançant, pushes, etc...

### Quins avantatges té utilitzar GitHub en lloc de guardar els fitxers d’un projecte només en un ordinador local
Permet accedir al projecte des de qualsevol lloc, treballar amb altres persones i recuperar versions anteriors del projecte amb els commits.

### Com pot ajudar GitHub a gestionar versions d’un projecte web o d’una aplicació
GitHub guarda l’historial de canvis amb commits, amb un texte identificatiu que tu mateix li assignas al fer un commit, permet tornar a versions anteriors i veure qui ha fet cada modificació.

### En quins tipus de projectes és especialment útil utilitzar Git i GitHub
És útil en projectes de programació, aplicacions web, treballs en grup i qualsevol projecte on hi hagi diversas persones, com ve a ser el nostre cas de fer un joc amb codi, amb un company.

### Quines diferències hi ha entre un sistema de control de versions com Git i un sistema tradicional d’emmagatzematge de fitxers
Un sistema tradicional guarda els fitxers, mentre que Git guarda un l’historial de canvis, amb textes indicatius de que es aquesta canvi o el que volguis posar com a text en aquell canvi.


## 2. Classifica segons la funcionalitat i prestacions específiques

### Explica quina és la diferència entre Git i GitHub
Git és un sistema de control de versions que funciona en local, mentre que GitHub és la plataforma web on es poden guardar els repositoris Git, amb el compte de gmail.

### Quines funcionalitats ofereix GitHub a més del control de versions del codi
Ofereix pull requests, issues, GitHub Pages, revisió de codi, gestió d’usuaris i documentació, tambe desde la web tambe pots modificar el codi sense nececssitat dedl visual estudio code.

### Repositoris
Són com carpetes on es guarda el projecte amb el seu codi, historial de canvis i documentació.

### Issues
Serveixen per gestionar errors o tasques.

### Pull requests
Permeten proposar canvis i revisar-los abans d’afegir-los a la branca principal.

### GitHub Pages
Permet publicar pàgines web directament des d’un repositori.

### Quina funció tenen les branques (branches) en Git
Permeten treballar en parts diferents del projecte sense afectar la versió principal, com per exemple en el nostre cas tenim feature-ui-logic i feature-game-engine.

### Per a què serveixen les pull requests en un projecte col·laboratiu
Serveixen per revisar el codi abans de fusionar-lo amb la branca principal.


## 3. Gestiona els comptes d’usuari

### Què és un compte d’usuari a GitHub i per què és necessari per treballar amb repositoris remots
És el perfil de l’usuari i permet pujar canvis, crear repositoris i treaballar amb altres persones.

### Quina diferència hi ha entre un repositori públic i un privat a GitHub
Un repositori públic és visible per tothom, mentre que un privat només és accessible per usuaris autoritzats per tu, es a dir els que tu volguis donar permisos.

### Com es pot afegir un col·laborador a un repositori de GitHub
Des de la configuració del repositori, afegint el nom d’usuari del col·laborador / company amb el que vols col·laborar.

### Quins rols o permisos pot tenir un usuari dins d’un repositori
Pot tenir permisos de lectura, escriptura o admin.

### Per què és important gestionar correctament els permisos dels usuaris en un projecte col·laboratiu
Per evitar problemes en el proyecte, o que l'altre part faci coses no autorizades per tu.


## 4. Aplica criteris de seguretat en l’accés dels usuaris

### Quins riscos pot tenir compartir un repositori amb massa permisos per a tots els usuaris
Algú podria esborrar fitxers, modificar el projecte o fer malve el codi...

### Per què és recomanable utilitzar autenticació segura (com tokens o SSH) per accedir a GitHub
Per protegir el compte i evitar accessos no autoritzats a aquest.

### Què passaria si es publiquen contrasenyes o claus privades dins d’un repositori
Podrien ser utilitzades per accedir a comptes.

### Quines bones pràctiques de seguretat s’han de seguir quan es treballa amb GitHub
No compartir contrasenyes, utilitzar autenticació en dos passos i no pujar dades sensibles.

### Per què és important controlar qui pot fer push directament a la branca principal (main)
Per evitar que es trenqui la versió final del projecte.


## 5. Utilitza les aplicacions de forma cooperativa

### Explica com poden treballar diverses persones al mateix projecte utilitzant GitHub
Cada persona treballa en la seva branca, fa commits i després s’uneixen els canvis amb merges o pull requests.

### Per què és útil treballar amb branques en lloc de modificar directament la branca principal
Perquè permet fer codi i prova, sense trencar el treball principal


## 6. Elabora documentació relativa a l’ús i la gestió de les aplicacions

### Per què és important incloure un fitxer README.md en un repositori de GitHub
Per explicar el funcionament del projecte / codi i ajudar altres persones a entendre’l, o tranmetre el missatge que tu volguis.

### Quins avantatges té utilitzar Markdown per escriure documentació a GitHub
És fàcil d’utilitzar, i t'ayuda a saber de que va el proyecte en cas de tenir-ne molts.

### Com pot ajudar la documentació a altres desenvolupadors que volen utilitzar o modificar el projecte
Els permet entendre de que va el codi / proyecte i els ayuda a, utilitzar-lo i modificar-lo.