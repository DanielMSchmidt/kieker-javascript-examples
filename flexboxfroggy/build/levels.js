(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

(function(window) {
	var kieker = require('kieker-javascript-core');
	kieker.config({"serverUrl":"https://danielmschmidt.github.io/kieker-javascript-examples/flexboxfroggy","entryFile":"./js/levels.js","files":[{"cwd":"js","dest":"build","src":"**/*.js"}],"output":"./build/levels.js","workerOutput":"./worker.js","advices":[{"type":"method","implementation":{}},{"type":"environment","include":["os","version","name"],"implementation":{}}],"writer":[{"type":"console","logLevel":"info"}],"workerUrl":"https://danielmschmidt.github.io/kieker-javascript-examples/flexboxfroggy/worker.js"});
	
var adviceMethod = require('kieker-javascript-advice-method').default;
adviceMethod(kieker);


var adviceEnvironment = require('kieker-javascript-advice-environment').default;
adviceEnvironment(kieker);
kieker.sendEnvironment();

	window.kieker = kieker;
})(window);

window.levels = [window.kieker.instrumentMethod({
  name: 'justify-content 1',
  instructions: window.kieker.instrumentMethod({
    'en': '<p>Welcome to Flexbox Froggy, a game where you help Froggy and friends by writing CSS code! Guide this frog to the lilypad on the right by using the <code>justify-content</code> property, which aligns items horizontally and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the left side of the container.</li><li><code>flex-end</code>: Items align to the right side of the container.</li><li><code>center</code>: Items align at the center of the container.</li><li><code>space-between</code>: Items display with equal spacing between them.</li><li><code>space-around</code>: Items display with equal spacing around them.</li></ul><p>For example, <code>justify-content: flex-end;</code> will move the frog to the right.</p>',
    'de': '<p>Willkommen bei Flexbox Froggy, einem Spiel, in dem du Froggy und seinen Freunden hilfst, indem du CSS-Code schreibst! F&uuml;hre diesen Frosch zum Seerosenblatt auf der rechten Seite, indem du die <code>justify-content</code>-Eigenschaft verwendest, die Elemente horizontal ausrichtet, und die folgenden Werte akzeptiert:</p><ul><li><code>flex-start</code>: Elemente an der linken Seite des Containers ausrichten.</li><li><code>flex-end</code>: Elemente an der rechten Seite des Containers ausrichten.</li><li><code>center</code>: Elemente an der Mitte des Containers ausrichten.</li><li><code>space-between</code>: Elemente mit gleichem Innenabstand ausrichten.</li><li><code>space-around</code>: Elemente mit gleichem Au&szlig;enabstand ausrichten.</li></ul><p>Mit <code>justify-content: flex-end;</code> bewegst du den Frosch beispielsweise nach rechts.</p>',
    'es': '<p>Bienvenido a Flexbox Froggy, un juego donde ayudarás a Froggy y a sus amigos escribiendo código CSS. Guía a esta rana hacia la hoja de lirio en la derecha, usando la propiedad <code>justify-content</code>, la cual alinea elementos horizontalmente y acepta los siguientes valores:</p><ul><li><code>flex-start</code>: Alinea elementos al lado izquierdo del contenedor.</li><li><code>flex-end</code>: Alinea elementos al lado derecho del contenedor.</li><li><code>center</code>: Alinea elementos en el centro del contendor.</li><li><code>space-between</code>: Muestra elementos con la misma distancia entre ellos.</li><li><code>space-around</code>: Muestra elementos con la misma separación alrededor de ellos.</li></ul><p>Por ejemplo, <code>justify-content: flex-end;</code> moverá la rana a la derecha.</p>',
    'pt-br': '<p>Bem-vindo ao Flexbox Froggy, um jogo onde você pode ajudar Froggy e seus amigos ao escrever código CSS! Guie o sapo à vitória-régia na direita usando a propriedade <code>justify-content</code>, que alinha itens horizontalmente e aceita os seguintes valores:</p><ul><li><code>flex-start</code>: Itens se alinham à esquerda do container.</li><li><code>flex-end</code>: Itens se alinham à direita do container.</li><li><code>center</code>: Itens se alinham no centro do container.</li><li><code>space-between</code>: Itens se alinham com distância igual entre eles.</li><li><code>space-around</code>: Itens se alinham com distância igual em torno deles.</li></ul><p>Por exemplo, <code>justify-content: flex-end;</code> moverá o sapo para a direita.</p>',
    'fr': '<p>Bienvenue à Flexbox Froggy, un jeu où vous aidez Froggy la grenouille et ses amis en écrivant du code CSS! Guidez cette grenouille au nénuphar à la droite de l\'étang en utilisant la propriété <code>justify-content</code>, qui aligne les éléments horizontalement et accepte les valeurs suivantes&nbsp;:</p><ul><li><code>flex-start</code>&nbsp;: Les éléments s\'alignent au côté gauche du conteneur.</li><li><code>flex-end</code> : Les éléments s\'alignent au côté droit du conteneur.</li><li><code>center</code>&nbsp;: Les éléments s\'alignent au centre du conteneur.</li><li><code>space-between</code>&nbsp;: Les éléments s\'affichent avec un espace égal entre eux.</li><li><code>space-around</code>&nbsp;: Les éléments s\'affichent avec un espacement égal à l\'entour d\'eux.</li></ul><p>Par exemple,  <code>justify-content: flex-end;</code> bougera la grenouille vers la droite.</p>',
    'ru': '<p>Добро пожаловать в Flexbox Froggy. Игра, в которой тебе нужно помочь лягушонку Фроги и его друзьям написанием CSS кода! Направь этого лягушонка на лилию справа используя свойство <code>justify-content</code>, которое выравнивает элементы горизонтально и принимает следующие значения:</p><ul><li><code>flex-start</code>: Элементы выравниваются по левой стороне контейнера.</li><li><code>flex-end</code>: Элементы выравниваются по правой стороне контейнера.</li><li><code>center</code>: Элементы выравниваются по центру контейнера.</li><li><code>space-between</code>: Элементы отображаются с одинаковыми отступами между ними.</li><li><code>space-around</code>: Элементы отображаются с одинаковыми отступами вокруг них.</li></ul><p>Например, <code>justify-content: flex-end;</code> сдвинет лягушонка вправо.</p>',
    'fa': '<p>به آموزش فکس باکس  خوش آمدید, این قورباغه به شما کمک میکنه که بهتر فلکس باکس رو درک کنید! با استفاده از خصوصیت <code>justify-content</code> می‌تونید نحوه چیدمان آیتم‌ها بر روی محور اصلی را تعیین کنید, این خصوصیت مقادیر زیر را می پذیرد:</p><ul><li><code>flex-start</code>: آیتم‌ها از ابتدای <span class="en-font"><span class="en-font">flex-line</span></span> ها چیده می‌شوند.</li><li><code>flex-end</code>:  آیتم‌ها از انتهای <span class="en-font">flex-line</span> ها چیده می‌شوند.</li><li><code>center</code>: آیتم‌ها از وسط <span class="en-font">flex-line</span> ها چیده می‌شوند.</li><li><code>space-between</code>: آیتم اول در ابتدا و آیتم آخر در انتهای <span class="en-font">flex-line</span> قرار می گیرند و بقیه آیتم ها در بین آنها با یک فاصله ی برابر قرار می‌گیرند.</li><li><code>space-around</code>: آیتم ها با فضای برابر در کنار یکدیگر قرار می‌گیرند.</li></ul><p> برای مثال , <bdi><code style="direction:ltr;">justify-content: flex-end;</code></bdi> قورباغه رو به سمت راست جا به جا میکنه',
    'zh-cn': '<p>欢迎来到Flexbox Froggy。在游戏中你会靠写CSS代码来帮助青蛙和他的朋友们！请用<code>justify-content</code>属性指引青蛙到右边的荷叶上。这个属性可以水平对齐元素，并且接受以下几个参数：</p><ul><li><code>flex-start</code>: 元素和容器的左端对齐。</li><li><code>flex-end</code>: 元素和容器的右端对齐。</li><li><code>center</code>: 元素在容器里居中。</li><li><code>space-between</code>:元素之间保持相等的距离。</li><li><code>space-around</code>:元素周围保持相等的距离。</li></ul><p>举个例子，<code>justify-content: flex-end;</code>会将青蛙移到右边</p>',
    'zh-tw': '<p>歡迎來到Flexbox Froggy。在遊戲中你會靠寫CSS代碼來幫助青蛙和他的朋友們！請用<code>justify-content</code>屬性指引青蛙到右邊的荷葉上。這個屬性可以水平對齊元素，並且接受一下幾個參數: </p><ul><li><code>flex-start</code>: 元素和容器的左端對齊。</li><li><code>flex-end</code>: 元素和容器的右端對齊。</li><li><code>center</code>: 元素和容器裏居中。</li><li><code>space-between</code>: 元素之間保持相等的距離。</li><li><code>space-around</code>: 元素周圍保持相等的距離。</li></ul></p>舉個例子，<code>justify-content: flex-end;</code>會將青蛙移到右邊</p>',
    'tr': '<p>Flexbox Froggy\'ye, Froggy ve arkadaşlarına CSS kodu yazarak yardım edeceğiniz oyunumuza hoşgeldiniz! <code>justify-content</code> kuralını kullanarak bu kurbağayı sağ taraftaki nilüfer yaprağının üzerine zıplatın. Bu özellik öğeleri yatay olarak hizalar ve şu değerleri alır:</p><ul><li><code>flex-start</code>: Öğeleri flexbox container\'ın sol tarafına hizalar.</li><li><code>flex-end</code>: Öğeleri flexbox container\'ın sağ tarafına hizalar.</li><li><code>center</code>: Öğeleri flexbox container\'ın ortasına hizalar.</li><li><code>space-between</code>: Öğeler eşit aralıklarla yatay şekilde yayılır</li><li><code>space-around</code>: Öğeler etraflarında eşit aralıklar olacak şekilde yatay şekilde yayılır</li></ul><p>Örneğin, <code>justify-content: flex-end;</code> kurbağyı sağa taşır.</p>',
    'it': '<p>Benvenuto su Flexbox Froggy, un gioco in cui devi aiutare Froggy ed i suoi amici scrivendo codice CSS! Guida la rana verso la foglia di ninfea sulla destra usando la propieta\' <code>justify-content</code>, la quale allinea gli elementi orizzontalmente e accetta i seguenti valori:</p><ul><li><code>flex-start</code>: Allinea gli elementi alla sinistra del contenitore.</li><li><code>flex-end</code>: Allinea gli elementi alla destra del contenitore.</li><li><code>center</code>: Allinea gli elementi al centro del contenitore.</li><li><code>space-between</code>: Separa gli elementi con uguale spazio tra di loro.</li><li><code>space-around</code>: Separa gli elementi con uguale spazio attorno ad essi.</li></ul><p>Per esempio, <code>justify-content: flex-end;</code> muovera\' la rana sulla destra.</p>',
    'ko': '<p>Flexbox Froggy에 오신 것을 환영합니다! Flexbox Froggy는 Froggy와 친구들 돕는 CSS 코드 게임입니다. 오른쪽의 <code>justify-content</code> 속성을 용하여 개구리가 수련잎으로 이동할 수 있도록 도와주세요. 이 속성은 다음의 값들을 인자로 받아 요소들을 가로선 상에서 정렬합니다:</p><ul><li><code>flex-start</code>: 요소들을 컨테이너의 왼쪽으로 정렬합니다.</li><li><code>flex-end</code>: 요소들을 컨테이너의 오른쪽으로 정렬합니다.</li><li><code>center</code>: 요소들을 컨테이너의 가운데로 정렬합니다.</li><li><code>space-between</code>: 요소들 사이에 동일한 간격을 둡니다.</li><li><code>space-around</code>: 요소들 주위에 동일한 간격을 둡니다.</li></ul><p>예를 들어, <code>justify-content: flex-end;</code>는 개구리를 오른쪽으로 이동시킵니다.</p>',
    'lt': '<p>Sveiki atvykę į "Flexbox Froggy" - žaidimą, kuriame rašydami CSS kodą pagelbėsite varlytei ir jos draugams! Padėkite šiai varlytei nusigauti ant lelijos lapo dešinėje, naudodami komandą <code>justify-content</code>, kuri lygiuoja elementus horizontaliai ir reaguoja šias vertes:</p><ul><li><code>flex-start</code>: Elementai lygiuojami supančio elemento kairėje.</li><li><code>flex-end</code>: Elementai lygiuojami supančio elemento dešinėje.</li><li><code>center</code>: Elementai lygiuojami supančio elemento viduryje.</li><li><code>space-between</code>: Elementai atvaizduojami taip, kad tarpai tarp jų būtų vienodi.</li><li><code>space-around</code>: Elementai atvaizduojami su vienodais tarpais aplink juos.</li></ul><p>Pavyzdžiui, <code>justify-content: flex-end;</code> perstums varlytę į dešinę pusę.</p>',
    'vi': '<p>Chào mừng bạn đến Flexbox Froggy, một trò chơi để bạn giúp đỡ Froggy và bạn bè bằng cách viết mã CSS! Hướng dẫn chú ếch này đến lá súng bên phải bằng cách sử dụng từ <code>justify-content</code> để sắp xếp các hạng mục theo chiều ngang và chấp nhận các giá trị sau:</p><ul><li><code>flex-start</code>: Các hạng mục sẽ được sắp xếp về phía bên trái của hộp chứa.</li><li><code>flex-end</code>: Các hạng mục sẽ được sắp xếp về phía bên phải của hộp chứa.</li><li><code>center</code>: Các hạng mục sẽ được sắp xếp ở giữa chính của hộp chứa.</li><li><code>space-between</code>: Các hạng mục sẽ được trình bày với khoảng cách bằng nhau giữa chúng.</li><li><code>space-around</code>: Các hạng mục sẽ được trình bày với khoảng cách bằng nhau xung quanh chúng.</li></ul><p>Ví dụ như, <code>justify-content: flex-end;</code> sẽ di chuyển chú ếch qua bên phải.</p>',
    'pl': '<p>Witaj w grze Flexbox Froggy. Grze, w której pomagasz żabce Froggy i jej przyjaciołom pisząc kod CSS! Doprowadź żabki do odpowiednich listków przy pomocy <code>justify-content</code>, właściwości która wyrównuje elementy w poziomie i przyjmuje wartości:</p><ul><li><code>flex-start</code>: Elementy wyrównują się do lewej strony kontenera.</li><li><code>flex-end</code>: Elementy wyrównują się do prawej strony kontenera.</li><li><code>center</code>: Elementy wyrównują się do środka kontenera.</li><li><code>space-between</code>: Elementy wyświetlają się na całej szerokości kontenera z równymi odstępami.</li><li><code>space-around</code>: Każdy z elementów wyświetla się z taką samą ilością przestrzeni wokół.</li></ul><p>Na przykład: <code>justify-content: flex-end;</code> przesunie żabę do prawej strony.</p>',
    'cs': '<p>Vítejte ve hře Flexbox Froggy, kde pomáháte žabce a jejím kamarádům psaním CSS stylů! Pomozte žabce dostat se na leknín vpravo vlastností <code>justify-content</code>, která zarovnává prvky vodorovně a nabývá následujících hodnot:</p><ul><li><code>flex-start</code>: Zarovnat prvky vlevo.</li><li><code>flex-end</code>: Zarovnat prvky vpravo.</li><li><code>center</code>: Zarovnat prvky na střed.</li><li><code>space-between</code>: Rozmístit rovnoměrné mezery mezi prvky.</li><li><code>space-around</code>: Rozmístit rovnoměrné mezery kolem prvků.</li></ul><p>Například styl <code>justify-content: flex-end;</code> posune žabku doprava.</p>',
    'ja': '<p>Flexbox Froggyへようこそ！　これはカエルたちを、CSSコードを書いて助けてあげるゲームです。<code>justify-content</code>を使って、このカエルを右の蓮の葉まで連れていってあげましょう。このプロパティはアイテムを水平方向に並べるものです。以下の値を取ります。</p><ul><li><code>flex-start</code>: アイテムはコンテナーの左側に並びます。</li><li><code>flex-end</code>: アイテムはコンテナーの右側に並びます。</li><li><code>center</code>: アイテムはコンテナーの中央に並びます。</li><li><code>space-between</code>: アイテムはその間に等しい間隔を空けて表示されます。</li><li><code>space-around</code>: アイテムはその周囲に等しい間隔を空けて表示されます。</li></ul><p>例えば、<code>justify-content: flex-end;</code>はカエルを右側へ動かします。</p>',
    'hu': '<p>Üdvözlünk a Flexbox Froggy játékban, ahol segíthetsz Froggy-nak és barátainak egy kis CSS kód írásával! Vezesd ezt a békát a jobb oldali tündérrózsára a <code>justify-content</code> tulajdonság használatával, amely az elemek vízszintes igazítását teszi lehetővé a következő értékek segítségével:</p><ul><li><code>flex-start</code>: Az elemek a konténer bal oldalára igazodnak.</li><li><code>flex-end</code>: Az elemek a konténer jobb oldalára igazodnak.</li><li><code>center</code>: Az elemek a konténer közepére igazodnak.</li><li><code>space-between</code>: Az elemek úgy igazodnak, hogy köztük a hely egyenlő mértékben oszlik meg.</li><li><code>space-around</code>: Az elemek úgy igazodnak, hogy a körülöttük lévő hely egyenlő maradjon.</li></ul><p>Például a <code>justify-content: flex-end;</code> a békát a jobb oldalra mozgatja.</p>',
    'eo': '<p>Bonvenon al Flexbox Froggy, ludo en kiu necesas helpi Froggy-on kaj liajn amikojn skribante CSS-an kodon! Gvidu tiun ranon al la dekstra nimfeofolio uzante la <code>justify-content</code> trajton, kiu liniigas elementojn horizontale kaj akceptas la sekvajn valorojn:</p><ul><li><code>flex-start</code>: Elementoj linias maldekstraflanken de la ujo.</li><li><code>flex-end</code>: Elementoj linias dekstraflanken de la ujo.</li><li><code>center</code>: Elementoj linias je la centro de la ujo.</li><li><code>space-between</code>: Elementoj afiŝas kun samaj spacoj inter ili.</li><li><code>space-around</code>: Elementoj afiŝas kun samaj spacoj ĉirkaŭ ili.</li></ul><p>Ekzemple, <code>justify-content: flex-end;</code> movos ranon dekstren.</p>',
    'sv': '<p>Välkommen till  Flexbox Froggy, ett spel där du hjälper Froggy och vänner genom att skriva CSS-kod! Guida grodan till blombladen till höger genom att använda <code>justify-content</code> attributen, vilket justerar objekten horisontellt och accepterar följande värden:</p><ul><li><code>flex-start</code>: Objekt justeras till vänster i containern.</li><li><code>flex-end</code>: Objekt justeras till höger i containern.</li><li><code>center</code>: Objekt justeras i mitten av containern.</li><li><code>space-between</code>: Objekt justeras med lika utrymme mellan varandra.</li><li><code>space-around</code>: Objekt justeras med lika utrymme runt omkring varandra.</li></ul><p>Till exempel, <code>justify-content: flex-end;</code> flyttar grodan till höger.</p>'
  }),
  board: 'g',
  style: window.kieker.instrumentMethod({ 'justify-content': 'flex-end' }),
  before: "#pond {\n  display: flex;\n",
  after: "}"
}), window.kieker.instrumentMethod({
  name: 'justify-content 2',
  instructions: window.kieker.instrumentMethod({
    'en': '<p>Use <code>justify-content</code> again to help these frogs get to their lilypads. Remember that this CSS property aligns items horizontally and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the left side of the container.</li><li><code>flex-end</code>: Items align to the right side of the container.</li><li><code>center</code>: Items align at the center of the container.</li><li><code>space-between</code>: Items display with equal spacing between them.</li><li><code>space-around</code>: Items display with equal spacing around them.</li></ul>',
    'de': '<p>Benutze erneut <code>justify-content</code>, um diese Fr&ouml;sche zu ihren Seerosenbl&auml;ttern zu f&uuml;hren. Wie du wei&szlig;t richtet diese Eigenschaft die Elemente horizontal aus, und akzeptiert die folgenden Werte:</p><ul><li><code>flex-start</code>: Elemente an der linken Seite des Containers ausrichten.</li><li><code>flex-end</code>: Elemente an der rechten Seite des Containers ausrichten.</li><li><code>center</code>: Elemente an der Mitte des Containers ausrichten.</li><li><code>space-between</code>: Elemente mit gleichem Innenabstand ausrichten.</li><li><code>space-around</code>: Elemente mit gleichem Au&szlig;enabstand ausrichten.</li></ul>',
    'pt-br': '<p>Use <code>justify-content</code> de novo para levar os sapos às suas vitórias-régias. Lembre-se que essa propriedade CSS alinha os itens horizontalmente e  aceita os seguintes valores:</p><ul><li><code>flex-start</code>: Itens se alinham à esquerda do container.</li><li><code>flex-end</code>: Itens se alinham à direita do container.</li><li><code>center</code>: Itens se alinham no centro do container.</li><li><code>space-between</code>: Itens se alinham com distância igual entre eles.</li><li><code>space-around</code>: Itens se alinham com distância igual em torno deles.</li></ul>',
    'es': '<p>Nuevamente, utiliza <code>justify-content</code> para ayudar a esas ranas a llegar a sus hojas de lirio. Recuerda que esta propiedad CSS alinea elementos horizontalmente y acepta los siguientes valores:<ul><li><code>flex-start</code>: Alinea elementos al lado izquierdo del contenedor.</li><li><code>flex-end</code>: Alinea elementos al lado derecho del contenedor.</li><li><code>center</code>: Alinea elementos en el centro del contenedor.</li><li><code>space-between</code>: Muestra elementos con la misma distancia entre ellos.</li><li><code>space-around</code>: Muestra elementos con la misma separación alrededor de ellos.</li></ul>',
    'fr': '<p>Utilisez encore <code>justify-content</code> pour aider ces grenouilles à se rendre à leurs nénuphars. Souvenez-vous que cette propriété CSS aligne les éléments horizontalement et accepte les valeurs suivantes&nbsp;: </p><ul><li><code>flex-start</code>&nbsp;: Les éléments s\'alignent au côté gauche du conteneur.</li><li><code>flex-end</code> : Les éléments s\'alignent au côté droit du conteneur.</li><li><code>center</code>&nbsp;: Les éléments s\'alignent au centre du conteneur.</li><li><code>space-between</code>&nbsp;: Les éléments s\'affichent avec un espace égal entre eux.</li><li><code>space-around</code>&nbsp;: Les éléments s\'affichent avec un espacement égal à l\'entour d\'eux.</li></ul>',
    'ru': '<p>Используй <code>justify-content</code> еще раз, чтоб помочь этим лягушатам попасть на их лилии. Помни, что это свойство CSS выравнивает элементы горизонтально и принимает следующие значения:</p><ul><li><code>flex-start</code>: Элементы выравниваются по левой стороне контейнера.</li><li><code>flex-end</code>: Элементы выравниваются по правой стороне контейнера.</li><li><code>center</code>: Элементы выравниваются по центру контейнера.</li><li><code>space-between</code>: Элементы отображаются с одинаковыми отступами между ними.</li><li><code>space-around</code>: Элементы отображаются с одинаковыми отступами вокруг них.</li></ul>',
    'fa': '<p>با استفاده از خصوصیت <code>justify-content</code> به این قورباغه ها کمک کنید تا روی نیلفرهای آبی قرار بگیرند. فراموش نکنید که این خاصیت در محور افقی کار میکند.</p><ul><li><code>flex-start</code>:  آیتم‌ها از ابتدای <span class="en-font">flex-line</span> ها چیده می‌شوند.</li><li><code>flex-end</code>: آیتم‌ها از انتهای <span class="en-font">flex-line</span> ها چیده می‌شوند.</li><li><code>center</code>: آیتم‌ها از وسط <span class="en-font">flex-line</span> ها چیده می‌شوند.</li><li><code>space-between</code>: آیتم اول در ابتدا و آیتم آخر در انتهای <span class="en-font">flex line</span> قرار می گیرند و بقیه آیتم ها در بین آنها با یک فاصله ی برابر قرار می‌گیرند. </li><li><code>space-around</code>: آیتم ها با فضای برابر در کنار یکدیگر قرار می‌گیرند.</li></ul>',
    'zh-cn': '<p>再用<code>justify-content</code>一次来帮助这些青蛙到他们的荷叶上。记住这个CSS属性能水平对齐元素，并接受这些参数：</p><ul><li><code>flex-start</code>: 元素和容器的左端对齐。</li><li><code>flex-end</code>: 元素和容器的右端对齐。</li><li><code>center</code>: 元素在容器里居中。</li><li><code>space-between</code>:元素之间保持相等的距离。</li><li><code>space-around</code>:元素周围保持相等的距离。</li>',
    'zh-tw': '<p>再用<code>justify-content</code>一次來幫助這些青蛙到他們的荷葉上。記住這個CSS屬性能水平對齊元素，並接受這些參數: </p><ul><li><code>flex-start</code>: 元素和容器的左端對齊。</li><li><code>flex-end</code>: 元素和容器的右端對齊。</li><li><code>center</code>: 元素和容器裏居中。</li><li><code>space-between</code>: 元素之間保持相等的距離。</li><li><code>space-around</code>: 元素周圍保持相等的距離。</li>',
    'tr': '<p>Tekrar <code>justify-content</code> kullanarak bu kurbağaları nilüfer yapraklarının üzerine çıkartın. Bu CSS kuralının öğeleri yatay olarak hizaladığını ve şu değerleri aldığını unutmayın:</p><ul><li><code>flex-start</code>: Öğeleri flexbox container\'ın sol tarafına hizalar.</li><li><code>flex-end</code>: Öğeleri flexbox container\'ın sağ tarafına hizalar.</li><li><code>center</code>: Öğeleri flexbox container\'ın ortasına hizalar.</li><li><code>space-between</code>: Öğeler eşit aralıklarla yatay şekilde yayılır</li><li><code>space-around</code>: Öğeler etraflarında eşit aralıklar olacak şekilde yatay şekilde yayılır</li></ul>',
    'it': '<p>Usa ancora <code>justify-content</code> per aiutare le rane a raggiungere le ninfee. Ricorda che questa regola CSS allinea gli elementi orizzontalmente e accetta i seguenti valori:</p><ul><li><code>flex-start</code>: Allinea gli elementi alla sinistra del loro contenitore.</li><li><code>flex-end</code>: Allinea gli elementi alla destra del loro contenitore.</li><li><code>center</code>: Allinea gli elementi al centro del loro contenitore.</li><li><code>space-between</code>: Separa gli elementi con uguale spazio tra di loro.</li><li><code>space-around</code>: Separa gli elementi con uguale spazio attorno a loro.</li></ul>',
    'ko': '<p><code>justify-content</code>를 한 번 더 사용하여 개구리들이 수련잎으로 이동하는 것을 도와주세요. 이 CSS 속성은 요소들을 가로선 상에서 정렬하며 다음의 값들을 인자로 받는다는 것을 기억하세요:</p><ul><li><code>flex-start</code>: 요소들을 컨테이너의 왼쪽으로 정렬합니다.</li><li><code>flex-end</code>: 요소들을 컨테이너의 오른쪽으로 정렬합니다.</li><li><code>center</code>: 요소들을 컨테이너의 가운데로 정렬합니다.</li><li><code>space-between</code>: 요소들 사이에 동일한 간격을 둡니다.</li><li><code>space-around</code>: 요소들 주위에 동일한 간격을 둡니다.</li></ul>',
    'lt': '<p>Panaudokite <code>justify-content</code> dar kartą, kad padėtumėte varlytėms nusigauti ant lelijos lapų. Nepamirškite, kad ši CSS komanda lygiuoja elementus horizontaliai ir reaguoja į šias vertes:</p><ul><li><code>flex-start</code>: Elementai lygiuojami supančio elemento kairėje.</li><li><code>flex-end</code>: Elementai lygiuojami supančio elemento dešinėje.</li><li><code>center</code>: Elementai lygiuojami supančio elemento viduryje.</li><li><code>space-between</code>: Elementai atvaizduojami taip, kad tarpai tarp jų būtų vienodi.</li><li><code>space-around</code>: Elementai atvaizduojami su vienodais tarpais aplink juos.</li></ul>',
    'vi': '<p>Sử dụng <code>justify-content</code> một lần nữa để giúp đỡ những chú ếch này đến được để các lá súng. Hãy nhớ rằng CSS này dùng để sắp xếp các hạng mục theo chiều ngang và chấp nhận các giá trị sau:</p><ul><li><code>flex-start</code>: Các hạng mục sẽ được sắp xếp về phía bên trái của hộp chứa.</li><li><code>flex-end</code>: Các hạng mục sẽ được sắp xếp về phía bên phải của hộp chứa.</li><li><code>center</code>: Các hạng mục sẽ được sắp xếp ở giữa chính của hộp chứa.</li><li><code>space-between</code>: Các hạng mục sẽ được trình bày với khoảng cách bằng nhau giữa chúng.</li><li><code>space-around</code>: Các hạng mục sẽ được trình bày với khoảng cách bằng nhau xung quanh chúng.</li></ul>',
    'pl': '<p>Użyj <code>justify-content</code> ponownie, aby pomóc żabkom dotrzeć do swoich listków. Pamiętaj, że ta właściwość języka CSS wyrównuje elementy w poziomie i przyjmuje wartości:</p><ul><li><code>flex-start</code>: Elementy wyrównują się do lewej strony kontenera.</li><li><code>flex-end</code>: Elementy wyrównują się do prawej strony kontenera.</li><li><code>center</code>: Elementy wyrównują się do środka kontenera.</li><li><code>space-between</code>: Elementy wyświetlają się na całej szerokości kontenera z równymi odstępami.</li><li><code>space-around</code>: Każdy z elementów wyświetla się z taką samą ilością przestrzeni wokół.</li></ul>',
    'cs': '<p>Použijte teď <code>justify-content</code> tak, aby se žabky dostaly na své lekníny. Připomeňte si, že tato CSS vlastnost zarovnává prvky vodorovně a akceptuje následující hodnoty:</p><ul><li><code>flex-start</code>: Zarovnat prvky vlevo.</li><li><code>flex-end</code>: Zarovnat prvky vpravo.</li><li><code>center</code>: Zarovnat prvky na střed.</li><li><code>space-between</code>: Rozmístit rovnoměrné mezery mezi prvky.</li><li><code>space-around</code>: Rozmístit rovnoměrné mezery kolem prvků.</li></ul>',
    'ja': '<p>もう一度<code>justify-content</code>を使って、カエルたちを蓮の葉まで連れていきましょう。覚えていますか、このCSSプロパティはアイテムを水平に並べるもので、次の値を取ります。</p><ul><li><code>flex-start</code>: アイテムはコンテナーの左側に並びます。</li><li><code>flex-end</code>: アイテムはコンテナーの右側に並びます。</li><li><code>center</code>: アイテムはコンテナーの中央に並びます。</li><li><code>space-between</code>: アイテムはその間に等しい間隔を空けて表示されます。</li><li><code>space-around</code>: アイテムはその周囲に等しい間隔を空けて表示されます。</li></ul>',
    'hu': '<p>Használd ismét a <code>justify-content</code> tulajdonságot, hogy a békákat a tündérrózsáikhoz segíthesd. Ne feledd, hogy ez a CSS tulajdonság az elemeket vízszintesen igazítja és a következő értékeket kaphatja: </p><ul><li><code>flex-start</code>: Az elemek a konténer bal oldalára igazodnak .</li><li><code>flex-end</code>: Az elemek a konténer jobb oldalára igazodnak.</li><li><code>center</code>: Az elemek a konténer közepére igazodnak.</li><li><code>space-between</code>: Az elemek úgy igazodnak, hogy köztük a hely egyenlő mértékben oszlik meg.</li><li><code>space-around</code>: Az elemek úgy igazodnak, hogy a körülöttük lévő hely egyenlő maradjon.</li></ul>',
    'eo': '<p>Uzu <code>justify-content</code> de nove por helpi ĉiujn ranojn atingi iliajn akvolilifoliojn. Memoru ke ĉi tiu CSS-an trajton liniigas horizontale elementojn kaj akceptas la sekvajn valorojn:</p><ul><li><code>flex-start</code>: Elementoj linias maldekstraflanken de la ujo.</li><li><code>flex-end</code>: Elementoj linias dekstraflanken de la ujo.</li><li><code>center</code>: Elementoj linias je la centro de la ujo.</li><li><code>space-between</code>: Elementoj afiŝas kun samaj spacoj inter ili.</li><li><code>space-around</code>: Elementoj afiŝas kun samaj spacoj ĉirkaŭ ili.</li></ul>',
    'sv': '<p>Använd <code>justify-content</code> igen för att hjälpa grodorna till sina blomblad. Kom ihåg att denna CSS-attribut justerar objekten horisontellt och accepterar följande värden:</p><ul><li><code>flex-start</code>: Objekt justeras till vänster i containern.</li><li><code>flex-end</code>: Objekt justeras till höger i containern.</li><li><code>center</code>: Objekt justeras i mitten av containern.</li><li><code>space-between</code>: Objekt justeras med lika utrymme mellan varandra.</li><li><code>space-around</code>: Objekt justeras med lika utrymme runt omkring varandra.</li></ul><p>Till exempel, <code>justify-content: flex-end;</code> flyttar grodan till höger.</p>'
  }),
  board: 'gy',
  style: window.kieker.instrumentMethod({ 'justify-content': 'center' }),
  before: "#pond {\n  display: flex;\n",
  after: "}"
}), window.kieker.instrumentMethod({
  name: 'justify-content 3',
  instructions: window.kieker.instrumentMethod({
    'en': '<p>Help all three frogs find their lilypads just by using <code>justify-content</code>. This time, the lilypads have lots of space all around them.</p><p>If you find yourself forgetting the possible values for a property, you can hover over the property name to view them. Try hovering over <code>justify-content</code>.</p>',
    'de': '<p>Hilf den drei Fr&ouml;schen, ihre Seerosenbl&auml;tter zu finden, indem du <code>justify-content</code> verwendest. Dieses Mal haben die Seerosenbl&auml;tter einen gro&szlig;en Au&szlig;enabstand.</p><p>Falls du die m&ouml;glichen Werte einer Eigenschaft vergessen haben solltest, kannst du den Mauszeiger &uuml;ber den Namen einer Eigenschaft bewegen. Versuche es bei <code>justify-content</code>.</p>',
    'pt-br': '<p>Ajude todos os três sapos a encontrar suas vitórias-régias usando <code>justify-content</code>. Desta vez, as vitórias-régias têm muito espaço em torno delas.</p><p>Caso você esqueça os possíveis valores de uma propriedade, passe o cursor sobre a propriedade para visualizá-los. Tente passar o cursor sobre <code>justify-content</code>.</p>',
    'es': '<p>Ayuda a las tres ranas a encontrar sus hojas de lirio usando <code>justify-content</code>. En esta oportunidad, las hojas de lirio tienen mucho espacio a su alrededor.</p><p>Si no recuerdas los valores de una propiedad, puede pasar el cursor sobre el nombre de una e inmediatamente se mostraran. Prueba pasando el cursor sobre <code>justify-content</code>.</p>',
    'fr': '<p>Aidez les trois grenouilles à trouver leurs nénuphars en utilisant seulement <code>justify-content</code>. Cette fois-ci, les nénuphars ont beaucoup d\'espace tout autour d\'eux.</p><p>Si vous oubliez les valeurs possibles pour une propriété, vous pouvez survoler le nom de cette propriété pour les voir. Essayez de survoler <code>justify-content</code>.</p>',
    'ru': '<p>Помоги всем трем лягушатам найти их лилии, просто используя <code>justify-content</code>. В этот раз, у лилий много пространства вокруг.</p><p>Если ты чувствуешь, что забыл возможные значения свойства, ты можешь навести курсор на название свойства, чтоб посмотреть их. Попробуй навести курсор на <code>justify-content</code>.</p>',
    'fa': '<p>با استفاده از <code>justify-content</code> به این سه قورباغه کمک کنید تا نیلوفرهای آبی خود را پیدا کنند. حواستون به این نکته باشه که نیلوفرهای آبی با فاصبه برابر کنار هم قرار گرفتند.</p><p>اگر مقادیر این خاصیت را فراموش کردید, میتونید با قرار دادن ماوس روی خاصیت مقادیر را ببینید. <code>justify-content</code>.</p>',
    'zh-cn': '<p>仅靠<code>justify-content</code>来帮助全部三只青蛙找到他们的荷叶。这次荷叶周边都有很多的空地。</p><p>如果你忘了一个CSS属性可选的值的话，你可以将鼠标一移到参数名上面来查看。试试将鼠标移到<code>justify-content</code>。</p>',
    'zh-tw': '<p>僅靠<code>justify-content</code>來幫助全部三隻青蛙找到他們的荷葉。這次荷葉周邊都有很多的空地。</p><p>如果你忘了一個CSS屬性可選的值的話，你可以將鼠標移到參數名上面來查看。試試將鼠標移到<code>justify-content</code>。</p>',
    'tr': '<p><code>justify-content</code> kuralını kullanarak üç kurbağanın da kendi nilüfer yaprağını bulmasını sağlayın. Bu serfer, nilüfer yaprakları etrafında bolca boş alan var.</p><p> Olur da bir kuralın alabileceği değerleri unutursanız, o kuralın üzerine farenizi götürerek değerlerini görebilirsiniz. Farenizi <code>justify-content</code> üzerine götürmeyi deneyin.</p>',
    'it': '<p>Aiuta le tre rane a raggiungere le ninfee usando la propriera\' <code>justify-content</code>. Fai attenzione, questa volta le ninfee hanno molto spazio attorno a loro.</p><p>Se ti sei dimenticato alcuni valori per le proprieta\' CSS puoi portare il mouse sopra il nome della proprieta\' per visualizzare tutti i valori disponibili. Prova portando il cursore sopra <code>justify-content</code>.</p>',
    'ko': '<p><code>justify-content</code>를 사용하여 세마리의 개구리가 모두 수련잎으로 이동할 수 있도록 도와주세요. 이번에는 수련잎 주위에 많은 간격이 있습니다.</p><p>만약 이 속성에서 사용 가능한 인자들이 기억나지 않는다면, 포인터를 속성 이름 위로 이동시키세요. <code>justify-content</code> 위로 포인터를 이동시켜 보세.</p>',
    'lt': '<p>Padėkite visoms trims varlytėms pasiekti savo lelijos lapus naudodami <code>justify-content</code>. Šį kartą aplink lelijos lapus yra labai daug vietos.</p><p>Jei netikėtai pamiršote galimas šios komandos vertes, jas prisiminti galite užvedę žymeklį ant komandos pavadinimo. Pabandykite užvesti žymeklį ant <code>justify-content</code>.</p>',
    'vi': '<p>Giúp tất cả ba chú ếch tìm lá súng của họ bằng cách sử dụng <code>justify-content</code>. Lần này, những chiếc lá súng có rất nhiều không gian xung quanh chúng. </p><p>Nếu bạn thấy mình quên đi những giá trị có thể cho từ CSS, bạn có thể di chuột qua từ đó để xem chúng. Hãy thử di chuột qua từ <code>justify-content</code>.</p>',
    'pl': '<p>Pomóż wszystkim żabkom dotrzeć do ich listków przy pomocy tylko właściwości <code>justify-content</code>. Tym razem, listki mają dużo miejsca wokół.</p><p>Jeśli nie pamiętasz jakie wartości przyjmuje ta właściowość możesz najechać myszką na jej nazwę, aby je zobaczyć. Spróbuj przesunąć myszkę nad <code>justify-content</code>.</p>',
    'cs': '<p>Pomozte těmto třem žabkám na jejich lekníny vlastností <code>justify-content</code>. Tentokrát je mezi lekníny hodně místa.</p><p>Pokud zapomenete, jaké hodnoty lze pro kterou vlastnost použít, najeďte na ni myší. Zkuste najet na <code>justify-content</code>.</p>',
    'ja': '<p><code>justify-content</code>だけを使って三匹のカエルを全て蓮の葉に乗せてあげましょう。この蓮の葉は、それぞれの周囲にたくさんの隙間が空いています。</p><p>プロパティーが取り得る値を忘れてしまったら、プロパティー名にマウスカーソルを乗せると、それを見ることができます。試しにマウスカーソルを<code>justify-content</code>に乗せてみてください。</p>',
    'hu': '<p>Segíts mindhárom békának megtalálni a saját tündérrózsáját pusztán a <code>justify-content</code> használatával. Ezúttal a tündérrózsák körül meglehetősen sok hely van.</p><p>Ha úgy érzed, elfelejtetted a lehetséges értékeket ehhez a tulajdonsághoz, vidd az egérkurzort a tulajdonság neve fölé, hogy láthasd őket. Próbáld ki a <code>justify-content</code>-en.</p>',
    'eo': '<p>Helpu ĉi tiujn tri ranojn trovi iliajn nimfeofoliojn nur pere de <code>justify-content</code>. Ĉifoje, la nimfeofolioj havas multe da spaco ĉirkaŭ ili.</p><p>Se vi forgesas la eblan valoron por trajton, vi povas ŝvebi sur la nomon de la trajto por afiŝi ilin. Provu ŝvebi sur <code>justify-content</code>.</p>',
    'sv': '<p>Hjälp alla tre grodorna tillbaka till sina blombald genom att använda <code>justify-content</code>. Denna gången har blombladen mycket utrymme runt omkring varandra.</p><p>Om du glömmer bort de accepterade värdena för en attribut kan du föra musen över dem för att se dem. Testa att föra musen över <code>justify-content</code>.</p>'
  }),
  board: 'gyr',
  style: window.kieker.instrumentMethod({ 'justify-content': 'space-around' }),
  before: "#pond {\n  display: flex;\n",
  after: "}"
}), window.kieker.instrumentMethod({
  name: 'justify-content 4',
  instructions: window.kieker.instrumentMethod({
    'en': '<p>Now the lilypads on the edges have drifted to the shore, increasing the space between them. Use <code>justify-content</code>. This time, the lilypads have equal spacing between them.</p>',
    'de': '<p>Inzwischen sind die &auml;u&szlig;eren Seerosenbl&auml;tter weiter nach au&szlig;en getrieben und haben so den Abstand noch weiter vergr&ouml;&szlig;ert. Benutze <code>justify-content</code>. Dieses Mal haben die Seerosenbl&auml;tter einen gleichm&auml;&szlig;igen Innenabstand.</p>',
    'pt-br': '<p>Agora as vitórias-régias nos cantos desviaram-se para a costa, aumentando o espaço em torno delas. Use <code>justify-content</code>. Desta vez, as vitórias-régias têm espaço igual entre elas.</p>',
    'es': '<p>Ahora las hojas de lirio de los bordes se han desplazado a un costado, aumentando así el espacio entre ellas. Usa <code>justify-content</code>. En esta oportunidad, las hojas de lirio tienen el mismo espacio entre ellas.</p>',
    'fr': '<p>Maintenant, les nénuphars sur les côtés ont dérivé jusqu\'à la rive, augmentant l\'espace entre eux. Utilisez <code>justify-content</code>. Cette fois-ci, l\'espace entre chaque nénuphar est équivalent.</p>',
    'ru': '<p>Теперь лилии по краям уплыли к берегам, увеличив пространство между ними. Используй <code>justify-content</code>. В этот раз, у лилий одинаковое расстояние между ними.</p>',
    'fa': '<p>در حال حاضر نیلوفر های آبی به سمت لبه های ساحل حرکت کرده اند و فضای بین آنها افزایش پیدا کرده پس با استفاده از <code>justify-content</code> قورباغه ها رو کمک کنید. نیلوفرهای آبی دارای فضای مساوی هستن.</p>',
    'zh-cn': '<p>现在边上的荷叶都漂到了岸上，使得他们之间的间距变大了。使用<code>justify-content</code>。这次荷叶之间有相等的距离。</p>',
    'zh-tw': '<p>現在邊上的荷葉都漂到了岸上，使得他們之間的間距變大了。使用<code>justify-content</code>。這次荷葉之間有相等的距離。</p>',
    'tr': '<p>Şimdi, nilüfer yaprakları sürüklenerek kıyıya vurmuşlar. <code>justify-content</code> kuralını kullanın. Bu sefer, nilüfer yaprakları arasında eşit mesafe var.</p>',
    'it': '<p>Le ninfee sono andate alla deriva aumentando lo spazio tra di loro. Usa <code>justify-content</code>. Questa volta le ninfee sono equidistanti tra di loro.</p>',
    'ko': '<p>수련잎이 연못가로 떠내려가면서 수련잎 사이의 간격이 넓어졌습니다. <code>justify-content</code>를 사용하세요. 이번에는 수련잎 사이에 동일한 간격이 있습니다.</p>',
    'lt': '<p>Dabar kraštiniai lelijos lapai nuplaukė arčiau krantų, taip padidindami tarpus tarp vienas kito. Naudokite <code>justify-content</code>. Šį kartą tarpai tarp lelijos lapų yra vienodi.</p>',
    'vi': '<p>Bây giờ những chiếc lá súng đã trôi dạt vào bờ, tạo thêm không gian giữa chúng. Sử dụng <code>justify-content</code>. Lần này, những chiếc lá súng có khoảng cách bằng nhau giữa chúng.</p>',
    'pl': '<p>Tym razem skrajne listki odpłynęły do krańców kontenera, zwiększając odstępy. Uzyj <code>justify-content</code>. Tym razem listki mają tę samą odległość między sobą.</p>',
    'cs': '<p>Teď lekníny na stranách odpluly ke břehu, zvětšíly se mezery. Použijte <code>justify-content</code>. Tentokrát jsou mezi lekníny rovnoměrné rozestupy.</p>',
    'ja': '<p>蓮の葉は両岸まで流されてしまいました。間隔はさらに開いています。<code>justify-content</code>を使いましょう。蓮の葉は等間隔に並んでいます。</p>',
    'hu': '<p>Mostanra a tündérrózsák kisodródtak a tópart felé, megnövelve ezáltal a közöttük tátongó űrt. Használd a <code>justify-content</code> tulajdonságot. Ezúttal a tündérrózsák között egyenlő mértékű szabad terület van.</p>',
    'eo': '<p>Nun, la flankaj akvolilifolioj flosas al la bordo, grandigante la spacon inter ili. Uzu <code>justify-content</code>. Ĉifoje, la akvolilifolioj havas saman spacon inter ili.</p>',
    'sv': '<p>Nu har blombladen längs med kanterna drivit in till stranden och utökt utrymmet mellan dem. Använd <code>justify-content</code>. Denna gång är blombladen jämt fördelade.</p>'
  }),
  board: 'gyr',
  style: window.kieker.instrumentMethod({ 'justify-content': 'space-between' }),
  before: "#pond {\n  display: flex;\n",
  after: "}"
}), window.kieker.instrumentMethod({
  name: 'align-items 1',
  instructions: window.kieker.instrumentMethod({
    'en': '<p>Now use <code>align-items</code> to help the frogs get to the bottom of the pond. This CSS property aligns items vertically and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the top of the container.</li><li><code>flex-end</code>: Items align to the bottom of the container.</li><li><code>center</code>: Items align at the vertical center of the container.</li><li><code>baseline</code>: Items display at the baseline of the container.</li><li><code>stretch</code>: Items are stretched to fit the container.</li></ul>',
    'de': '<p>Verwende nun <code>align-items</code>, um den Fr&ouml;schen zu helfen, das untere Ende des Teichs zu erreichen. Diese CSS-Eigenschaft richtet die Elemente vertikal aus und akzeptiert die folgenden Werte:</p><ul><li><code>flex-start</code>: Elemente oben am Container ausrichten.</li><li><code>flex-end</code>: Elemente unten am Container ausrichten.</li><li><code>center</code>: Elemente mittig im Container ausrichten.</li><li><code>baseline</code>: Elemente an der Grundlinie des Containers ausrichten.</li><li><code>stretch</code>: Elemente strecken, um den Container auszuf&uuml;llen.</li></ul>',
    'pt-br': '<p>Agora use <code>align-items</code> para levar os sapos ao fundo da lagoa. Essa propriedade CSS alinha os itens verticalmente e aceita os seguintes valores:</p><ul><li><code>flex-start</code>: Itens se alinham na parte de cima do container.</li><li><code>flex-end</code>: Itens se alinham na parte de baixo do container.</li><li><code>center</code>: Itens se alinham no centro vertical do container.</li><li><code>baseline</code>: Items se alinham na linha da base do container.</li><li><code>stretch</code>: Itens se esticam para preencher o container.</li></ul>',
    'es': '<p>Ahora usa <code>align-items</code> para ayudar a las ranas a llegar al fondo del estanque. Esta propiedad CSS alinea elementos verticalmente y acepta los siguientes valores:</p><ul><li><code>flex-start</code>: Alinea elementos a la parte superior del contenedor.</li><li><code>flex-end</code>: Alinea elementos a la parte inferior del contenedor.</li><li><code>center</code>: Alinea elementos en el centro (verticalmente hablando) del contenedor.</li><li><code>baseline</code>: Muestra elementos en la línea base del contenedor</li><li><code>stretch</code>: Elementos se estirán para ajustarse al contenedor.</li></ul>',
    'fr': '<p>Maintenant, utilisez <code>align-items</code> pour aider les grenouilles à se rendre au bas de l\'étang. Cette propriété CSS aligne les éléments verticalement et accepte les valeurs suivantes&nbsp;:</p><ul><li><code>flex-start</code>&nbsp;: Les éléments s\'alignent au haut du conteneur.</li><li><code>flex-end</code>&nbsp;: Les éléments s\'alignent au bas du conteneur.</li><li><code>center</code>&nbsp;: Les éléments s\'alignent au centre vertical du conteneur.</li><li><code>baseline</code>&nbsp;: Les éléments s\'alignent à la ligne de base du conteneur.</li><li><code>stretch</code>&nbsp;: Les éléments sont étirés pour s\'adapter au conteneur.</li></ul>',
    'ru': '<p>Теперь используй <code>align-items</code> чтоб помочь лягушатам добратся к нижней части пруда. Это CSS свойство выравнивает элементы вертикально и принимает следующие значения:</p><ul><li><code>flex-start</code>: Элементы выравниваются по верхнему краю контейнера.</li><li><code>flex-end</code>: Элементы выравниваются по нижнему краю контейнера.</li><li><code>center</code>: Элементы выравниваются вертикально по центру контейнера.</li><li><code>baseline</code>: Элементы отображаются на базовой линии контейнера.</li><li><code>stretch</code>: Элементы растягиваются, чтоб заполнить контейнер.</li></ul>',
    'fa': '<p>در حال حاضر با استفاده از <code>align-items</code> به قورباغ ها کمک کنید تا به پایین برکه برسند.این خاصیت ایتم ها را در محور عمودی تراز بندی می کند و مقادیر آن عبارتند از :</p><ul><li><code>flex-start</code>: آیتم‌ها از نقطه ابتدایی محور عمودی چیده می‌شوند.</li><li><code>flex-end</code>: آیتم‌ها از نقطه انتهایی محور عمودی چیده می‌شوند.</li><li><code>center</code>: آیتم‌ها در وسط محور عمودی چیده می‌شوند.</li><li><code>baseline</code>: آیتم ها بر اساس <span class="en-font">Baseline</span>شان هم‌تراز می‌شوند</li><li><code>stretch</code>: در صورتی که ارتفاع آیتم‌ها مشخص نشده باشد، آیتم ها کشیده میشوند و Flex line را پر میکنند.</li></ul>',
    'zh-cn': '<p>现在用<code>align-items</code>来帮助青蛙们到池塘的底部。这个CSS属性纵向对齐元素并且可选以下几个值：</p><ul><li><code>flex-start</code>: 元素与容器的顶部对齐。</li><li><code>flex-end</code>: 元素与容器的底部对齐。</li><li><code>center</code>: 元素纵向居中。</li><li><code>baseline</code>: 元素在容器的基线位置显示。</li><li><code>stretch</code>: 元素被拉伸以填满整个容器。</li></ul>',
    'zh-tw': '<p>現在用<code>align-items</code>來幫助青蛙們到池塘的底部。這個CSS屬性縱向對齊元素並且可選一下一個值：</p><ul><li><code>flex-start</code>: 元素與容器的頂部對齊。</li><li><code>flex-end</code>: 元素與容器的底部對齊。</li><li><code>center</code>: 元素縱向居中。</li><li><code>baseline</code>: 元素在容器的基線位置表現。</li><li><code>stretch</code>: 元素被拉伸以填滿整個容器。</li></ul>',
    'tr': '<p>Şimdi, <code>align-items</code> kuralını kullanarak kurbağaların gölün aşağısına gitmesine yardımcı olun. Bu CSS kuralı öğeleri dikey olarak hizalar ve şu değerleri alır:</p><ul><li><code>flex-start</code>: Öğeleri flexbox container\'ın tepesine hizalar</li><li><code>flex-end</code>: Öğeleri flexbox container\'ın aşağısına hizalar</li><li><code>center</code>: Öğeleri flexbox container\'ın dikey ortasına hizalar</li><li><code>baseline</code>: Öğeleri flexbox container\'ın yazı referans çizgisine(baseline) hizalar</li><li><code>stretch</code>: Öğeler flexbox container boyunca uzarlar</li></ul>',
    'it': '<p>Adesso usa <code>align-items</code> per aiutare le rane ad arrivare alla fine dello stagno. Questa proprieta\' CSS allinea gli elementi verticalmente ed accetta i seguenti valori:</p><ul><li><code>flex-start</code>: Allinea gli elementi all\'inizio del loro contenitore.</li><li><code>flex-end</code>: Allinea gli elementi alla fine del loro contenitore.</li><li><code>center</code>: Centra gli elementi verticalmente.</li><li><code>baseline</code>: Gli elementi sono allineati in modo tale che le loro baselines siano allineate.</li><li><code>stretch</code>: Gli elementi sono allungati per occupare tutto il contenitore.</li></ul>',
    'ko': '<p>이제 <code>align-items</code>를 사용하여 개구리들이 연못의 아래쪽에 도착할 수 있도록 도와주세요. 이 CSS 속성은 다음의 값들을 인자로 받아 요소들을 세로선 상에서 정렬합니다:</p><ul><li><code>flex-start</code>: 요소들을 컨테이너의 꼭대기로 정렬합니다.</li><li><code>flex-end</code>: 요소들을 컨테이너의 바닥으로 정렬합니다.</li><li><code>center</code>: 요소들을 컨테이너의 세로선 상의 가운데로 정렬합니다.</li><li><code>baseline</code>: 요소들을 컨테이너의 시작 위치에 정렬합니다.</li><li><code>stretch</code>: 요소들을 컨테이너에 맞도록 늘립니다.</li></ul>',
    'lt': '<p>Dabar panaudokite <code>align-items</code>, kad padėtumėte varlytėms nusigauti į tvenkinio apačią. Ši CSS komanda lygiuoja elementus vertikaliai ir reguoja į šias vertes:</p><ul><li><code>flex-start</code>: Elementai lygiuojami supančio elemento viršuje.</li><li><code>flex-end</code>: Elementai lygiuojami supančio elemento apačioje.</li><li><code>center</code>: Elementai lygiuojami vertikaliai supančio elemento viduryje.</li><li><code>baseline</code>: Elementai atvaizduojami palei apatinę supančio elemento liniją.</li><li><code>stretch</code>: Elementai yra ištempiami, kad užpildytų supantį elementą.</li></ul>',
    'vi': '<p>Bây giờ sử dụng <code>align-items</code> để giúp những chú ếch đến đáy của ao. Từ CSS này sắp xếp những hạng mục flex theo chiều dọc và chấp nhận các giá trị sau:</p><ul><li><code>flex-start</code>: Các hạng mục sẽ được sắp xếp phía trên của hộp chứa.</li><li><code>flex-end</code>: Các hạng mục sẽ được sắp xếp phía dưới cùng của hộp chứa.</li><li><code>center</code>: Các hạng mục sẽ được sắp xếp ở giữa chính của hộp chứa.</li><li><code>baseline</code>: Các hạng mục sẽ được hiển thị ở đường cơ bản của hộp chứa.</li><li><code>stretch</code>: Các hạng mục sẽ được kéo dài để phù hợp với hộp chứa.</li></ul>',
    'pl': '<p>A teraz przy pomocy <code>align-items</code> zaprowadź żabki na spód stawu. Ta właściwość CSS wyrównuje elementy w pionie i przyjmuje wartości:</p><ul><li><code>flex-start</code>: Elementy wyrównują się górnej krawędzi kontenera.</li><li><code>flex-end</code>: Elementy wyrównują się do dolnej krawędzi kontenera.</li><li><code>center</code>: Elementy zostaną wyśrodkowane w pionie.</li><li><code>baseline</code>: Elementy zostaną wyświetlone na lini odniesienia kontenera.</li><li><code>stretch</code>: Elementy zostaną powiększone tak, aby wypelnić kontener.</li></ul>',
    'cs': '<p>Použijte <code>align-items</code> tak, aby se žabky dostaly na spodní stranu rybníka. Tato CSS vlastnost zarovnává prvky svisle a nabývá hodnot:</p><ul><li><code>flex-start</code>: Zarovná prvky nahoru.</li><li><code>flex-end</code>: Zarovná prvky dolů.</li><li><code>center</code>: Zarovná prvky na střed kontejneru.</li><li><code>baseline</code>: Zarovná prvky na účaří.</li><li><code>stretch</code>: Roztáhne prvky tak, aby vyplnily kontejner.</li></ul>',
    'ja': '<p>今度は<code>align-items</code>を使って池の下のほうへカエルを連れていきましょう。このCSSプロパティーはアイテムを垂直に並べ、以下の値をとります。</p><ul><li><code>flex-start</code>: アイテムはコンテナーの上部に並びます。</li><li><code>flex-end</code>: アイテムはコンテナーの下部に並びます。</li><li><code>center</code>: アイテムはコンテナーの垂直方向中央に並びます。</li><li><code>baseline</code>: アイテムはコンテナーのベースラインに表示されます。</li><li><code>stretch</code>: アイテムはコンテナーの大きさに合うよう広がります。</li></ul>',
    'hu': '<p>Most használd az <code>align-items</code> tulajdonságot, ezzel hozzásegítve a békákat ahhoz, hogy a tavacska aljához jussanak. Ez a CSS tulajdonság az elemeket függőlegesen igazítja és a következő értékeket kaphatja: </p><ul><li><code>flex-start</code>: Az elemek a konténer tetejére igazodnak.</li><li><code>flex-end</code>: Az elemek a konténer aljára igazodnak.</li><li><code>center</code>: Az elemek a konténeren belül függőlegesen középre igazodnak.</li><li><code>baseline</code>: Az elemek a konténerben a szöveg alapvonalához igazodnak.</li><li><code>stretch</code>: Az elemek széthúzódnak, kifeszülnek, hogy kitöltsék a konténert.</li></ul>',
    'eo': '<p>Nun uzu <code>align-items</code> por helpi la ranojn iri al la fundo de la lageto. Ĉi tiu CSS-a trajto vertikale vicigas elementojn kaj akceptas la sekvajn valorojn:</p><ul><li><code>flex-start</code>: Elementoj linias supren de la ujo.</li><li><code>flex-end</code>: Elementoj linias malsupren de la ujo.</li><li><code>center</code>: Elementoj linias je la vertikala centro de la ujo.</li><li><code>baseline</code>: Elementoj afiŝas je la bazlinio de la ujo.</li><li><code>stretch</code>: Elementoj streĉiĝas por ke ili laŭmezure kovru la ujon.</li></ul>',
    'sv': '<p>Använd <code>align-items</code> för att hjälpa grodorna att ta sig längst ner i dammen. Denna attributen justerar dem vertikalt och accepterar följande värden:</p><ul><li><code>flex-start</code>: Objekt justeras till toppen av containern.</li><li><code>flex-end</code>: Objekt justeras till botten av containern.</li><li><code>center</code>: Objekt justeras till mitten av containern vertikalt.</li><li><code>baseline</code>: Objekt justeras till baslinjen i containern</li><li><code>stretch</code>: Objekt sträcks ut för att fylla containern.</li></ul>'
  }),
  board: 'gyr',
  style: window.kieker.instrumentMethod({ 'align-items': 'flex-end' }),
  before: "#pond {\n  display: flex;\n",
  after: "}"
}), window.kieker.instrumentMethod({
  name: 'align-items 2',
  instructions: window.kieker.instrumentMethod({
    'en': '<p>Lead the frog to the center of the pond using a combination of <code>justify-content</code> and <code>align-items</code>.</p>',
    'de': '<p>F&uuml;hre den Frosch zur Mitte des Teichs, indem du <code>justify-content</code> und <code>align-items</code> in kombinierst.</p>',
    'pt-br': '<p>Leve o sapo ao cento da lagoa usando uma combinação de <code>justify-content</code> e <code>align-items</code>.</p>',
    'es': '<p>Mueve a la rana al centro del estanque, usando una combinación de <code>justify-content</code> y <code>align-items</code>.</p>',
    'fr': '<p>Dirigez la grenouille au centre de l\'étang en utilisant une combinaison de <code>justify-content</code> et <code>align-items</code>.</p>',
    'ru': '<p>Направь лягушонка в центр пруда, используя <code>justify-content</code> и <code>align-items</code> вместе.</p>',
    'fa': '<p>قورباغه را به وسط برکه هدایت کنید برای این کار از ترکیب خاصیت های <code>justify-content</code> و <code>align-items</code> استفاده کنید.</p>',
    'zh-cn': '<p>使用<code>justify-content</code>和<code>align-items</code>的组合来指引青蛙们到池塘中央。</p>',
    'zh-tw': '<p>使用<code>justify-content</code>和<code>align-items</code>的組合來指引親哇們到池塘中央。</p>',
    'tr': '<p>Kurbağayı <code>justify-content</code> ve <code>align-items</code> kurallarını kullanarak gölün ortasına yönlendirin.</p>',
    'it': '<p>Dirigi la rana al centro dello stagno usando entrambe <code>justify-content</code> e <code>align-items</code>.</p>',
    'ko': '<p><code>justify-content</code>와 <code>align-items</code>를 함께 사용하여 개구리가 연못의 중앙으로 이동할 수 있도록 도와주세요.</p>',
    'lt': '<p>Padėkite varlytei nusigauti į vidurį tvenkinio naudodami <code>justify-content</code> ir <code>align-items</code> kombinaciją.</p>',
    'vi': '<p>Dẫn chú ếch đến trung tâm của ao bằng cách kết hợp <code>justify-content</code> và <code>align-items</code>.</p>',
    'pl': '<p>Zaprowadź żabkę na środek stawu przy pomocy <code>justify-content</code> i <code>align-items</code>.</p>',
    'cs': '<p>Dostaňte žabku doprostřed rybníka kombinací <code>justify-content</code> a <code>align-items</code>.</p>',
    'ja': '<code>justify-content</code>と<code>align-items</code>の組み合わせを使って、カエルを池の中央へ連れていきましょう。',
    'hu': '<p>Vezesd a békát a tavacska közepére, kombináld a <code>justify-content</code> és az <code>align-items</code> tulajdonságokat.</p>',
    'eo': '<p>Konduku la ranon al la centro de la lageto uzante kombinon de <code>justify-content</code> kaj <code>align-items</code>.</p>',
    'sv': '<p>Hjälp grodan till mitten genom att använda en kombination av <code>justify-content</code> och <code>align-items</code>.</p>'
  }),
  board: 'g',
  style: window.kieker.instrumentMethod({ 'justify-content': 'center', 'align-items': 'center' }),
  before: "#pond {\n  display: flex;\n",
  after: "}"
}), window.kieker.instrumentMethod({
  name: 'align-items 3',
  instructions: window.kieker.instrumentMethod({
    'en': '<p>The frogs need to cross the pond again, this time for some lilypads with plenty of space around them. Using a combination of <code>justify-content</code> and <code>align-items</code>.</p>',
    'de': '<p>Die Fr&ouml;sche m&uuml;ssen den Teich erneut &uuml;berqueren. Dieses Mal haben die Seerosenbl&auml;tter eine ganze Menge Abstand zueinander. Kombiniere <code>justify-content</code> und <code>align-items</code>.</p>',
    'pt-br': '<p>Os sapos precisam atravessar a lagoa de novo, desta vez para algumas vitórias-régias com bastante espaço em torno delas. Use uma combinação de <code>justify-content</code> e <code>align-items</code>.</p>',
    'es': '<p>Nuevamente, las ranas necesitan cruzar el estanque. En esta oportunidad, las hojas de lirio tienen mucho espacio alrededor de ellas. Debes usar una combinación de <code>justify-content</code> y <code>align-items</code>.</p>',
    'fr': '<p>Les grenouilles doivent encore traverser l\'étang. Cette fois-ci, les nénuphars ont beaucoup d\'espace autour d\'eux. Utilisez une combinaison de <code>justify-content</code> et <code>align-items</code>.</p>',
    'ru': '<p>Лягушатам снова нужно пересечь пруд. В этот раз к лилиям, с достаточно большим пространством вокруг них. Используй комбинацию <code>justify-content</code> и <code>align-items</code>.</p>',
    'fa': '<p>قروباغه ها نیاز دارند که به انتهای برکه برسند, دقت داشته باشید که فضای خالی اطراف نیلوفر های آبی وجود دارد. برای این کار از خاصیت های <code>justify-content</code> و <code>align-items</code> استفاده کنید.</p>',
    'zh-cn': '<p>这些青蛙又需要穿过池塘了。这次有些荷叶周围有充足的距离。用<code>justify-content</code>和<code>align-items</code>的组合。</p>',
    'zh-tw': '<p>這些青蛙又需要穿過池塘了。這次有些荷葉周圍有充足的距離。用<code>justify-content</code>和<code>align-items</code>的組合。</p>',
    'tr': '<p>Kurbağaların, bu serfer etraflarında bolca boş alan olan nilüfer yapraklarına ulaşmaları için tekrar gölü geçmeleri gerekiyor. <code>justify-content</code> ve <code>align-items</code> kombinasyonunu kullanın.</p>',
    'it': '<p>Le rane devono di nuovo attraversare lo stagno. Questa volta le ninfee hanno parecchio spazio attorno ad esse. Usa entrambe <code>justify-content</code> e <code>align-items</code>.</p>',
    'ko': '<p>개구리들이 연못을 다시 건너려고 하는데, 수련잎 주위에 간격이 있습니다. <code>justify-content</code>와 <code>align-items</code>를 함께 사용하세요.</p>',
    'lt': '<p>Varlytėms vėl reikia persikelti į kitą tvenkinio vietą, šį kartą ant lelijos lapų, aplink kuriuos yra pakankamai vietos. Naudokite <code>justify-content</code> ir <code>align-items</code> kombinaciją.</p>',
    'vi': '<p>Những chú ếch cần phải qua ao một lần nữa, lần này các chiếc lá súng có nhiều không gian xung quanh chúng. Kết hợp <code>justify-content</code> và <code>align-items</code>.</p>',
    'pl': '<p>Żabki znowu muszą przejść na drugą stronę stawu. Tym razem muszą znaleźć się na listkach, które mają dużo miejca wokół siebie. Skorzystaj z kombinacji <code>justify-content</code> i <code>align-items</code>.</p>',
    'cs': '<p>Žabky znovu potřebují na spodek rybníka, teď jsou však mezi lekníny velké mezery. Použijte kombinaci vlastností <code>justify-content</code> a <code>align-items</code>.</p>',
    'ja': '<p>再びカエルが池を渡ろうとしています。今度の蓮の葉はずいぶん間隔が空いているようですね。<code>justify-content</code>と<code>align-items</code>の組み合わせを使いましょう。</p>',
    'hu': '<p>A békáknak ismét át kell szelniük a tavat, ezúttal néhány tündérrózsáért, melyek között meglehetősen sok az üres tér. Használd a <code>justify-content</code> és az <code>align-items</code> kombinációját.</p>',
    'eo': '<p>La ranoj bezonas de nove transiri la lageton, ĉifoje por atingi nimfeofoliojn kun sufiĉe da spaco ĉirkaŭ ili. Uzante kombinon de <code>justify-content</code> kaj <code>align-items</code>.</p>',
    'sv': '<p>Grodorna behöver korsa dammen igen och denna gång är blombladen långt ifrån varandra. Använd en kombination av <code>justify-content</code> och <code>align-items</code>.</p>'
  }),
  board: 'gyr',
  style: window.kieker.instrumentMethod({ 'justify-content': 'space-around', 'align-items': 'flex-end' }),
  before: "#pond {\n  display: flex;\n",
  after: "}"
}), window.kieker.instrumentMethod({
  name: 'flex-direction 1',
  instructions: window.kieker.instrumentMethod({
    'en': '<p>The frogs need to get in the same order as their lilypads using <code>flex-direction</code>. This CSS property defines the direction items are placed in the container, and accepts the following values:</p><ul><li><code>row</code>: Items are placed the same as the text direction.</li><li><code>row-reverse</code>: Items are placed opposite to the text direction.</li><li><code>column</code>: Items are placed top to bottom.</li><li><code>column-reverse</code>: Items are placed bottom to top.</li></ul>',
    'de': '<p>Die Fr&ouml;sche m&uuml;ssen mit Hilfe von <code>flex-direction</code> in die Reihenfolge der Seerosenbl&auml;tter gebracht werden. Diese CSS-Eigenschaft legt die Ausrichtung der Elemente in einem Container fest, und akzeptiert die folgenden Werte:</p><ul><li><code>row</code>: Elemente in Textrichtung ausrichten.</li><li><code>row-reverse</code>: Elemente entgegen der Textrichtung ausrichten.</li><li><code>column</code>: Elemente von oben nach unten ausrichten.</li><li><code>column-reverse</code>: Elemente von unten nach oben ausrichten.</li></ul>',
    'pt-br': '<p>Os sapos precisam ficar na mesma ordem das vitórias-régias usando <code>flex-direction</code>. Esta propriedade CSS define a direção em que os itens são posicionados no container e aceita os seguintes valores:</p><ul><li><code>row</code>: Itens são posicionados na mesma direção do texto.</li><li><code>row-reverse</code>: Itens são posicionados na direção oposta à do texto.</li><li><code>column</code>: Itens são posicionados de cima para baixo.</li><li><code>column-reverse</code>: Itens são posicionados de baixo para cima.</li></ul>',
    'es': '<p>Las ranas necesitan ponerse en el mismo orden que sus hojas de lirio usando <code>flex-direction</code>. Esta propiedad CSS define la dirección de los elementos en el contenedor, y acepta los siguientes valores:</p><ul><li><code>row</code>: Elementos son colocados en la misma dirección del texto.</li><li><code>row-reverse</code>: Elementos son colocados en la dirección opuesta al texto.</li><li><code>column</code>: Elementos se colocan de arriba hacia abajo.</li><li><code>column-reverse</code>: Elementos se colocan de abajo hacia arriba.</li></ul>',
    'fr': '<p>Les grenouilles doivent se rendre dans le même ordre que leurs nénuphars en utilisant <code>flex-direction</code>. Cette propriété CSS définit la direction dans laquelle les éléments sont placés dans le conteneur, et accepte les valeurs suivantes&nbsp;:</p><ul><li><code>row</code>&nbsp;: Les éléments sont disposés dans la même direction que le texte.</li><li><code>row-reverse</code>&nbsp;: Les éléments sont disposés dans la direction opposée au texte.</li><li><code>column</code>&nbsp;: Les éléments sont disposés de haut en bas.</li><li><code>column-reverse</code>&nbsp;: Les éléments sont disposés de bas en haut.</li></ul>',
    'ru': '<p>Лягушатам нужно выстроиться в порядке их лилий, используя <code>flex-direction</code>. Это CSS свойство задает направление, в котором будут расположены элементы в контейнере и принимает следующие значения:</p><ul><li><code>row</code>: Элементы размещаются по направлению текста.</li><li><code>row-reverse</code>: Элементы отображаются в обратном порядке к направлению текста.</li><li><code>column</code>: Элементы распологаются сверху вниз.</li><li><code>column-reverse</code>: Элементы распологаются снизу вверх.</li></ul>',
    'fa': '<p>قورباه ها نیاز دارند که روی نیلوفرهای آبی خود قرار بگیرند پس با استفاده از <code>flex-direction</code> این کار را انجام دهید. این خاصیت جهت ایتم ها را تعیین می کند و مقادیر زیر را می پذیرد:</p><ul><li><code>row</code>: این مقدار برای چیدمان افقی آیتم ها به کار میرود.</li><li><code>row-reverse</code>: این خاصیت مانند خاصیت قبل است با این تفاوت که مکان آیتم ها برعکس می شود.</li><li><code>column</code>: این مقدار برای چیدمان عمودی آیتم ها به کار میرود.</li><li><code>column-reverse</code>: این خاصیت مانند خاصیت قبل است با این تفاوت که مکان آیتم ها برعکس می شود.</li></ul>',
    'zh-cn': '<p>青蛙们需要和他们的荷叶保持对应的顺序。我们可以用<code>flex-direction</code>属性。这个CSS属性定义了元素在容器里摆放的方向，并且接受这些值：</p><ul><li><code>row</code>: 元素摆放的方向和文字方向一致。</li><li><code>row-reverse</code>: 元素摆放的方向和文字方向相反。</li><li><code>column</code>: 元素从上放到下。</li><li><code>column-reverse</code>: 元素从下放到上。</li></ul>',
    'zh-tw': '<p>青蛙們需要和他們的荷葉保持對應的順序。我們可以用<code>flex-direction</code>屬性。這個CSS屬性定義了元素在容器裏擺訪的方向，並且接受這些值：</p><ul><li><code>row</code>: 元素擺放的方向和文字方向一致。</li><li><code>row-reverse</code>: 元素擺放的方向和文字的方向相反。</li><li><code>column</code>: 元素從上放到下。</li><li><code>column-reverse</code>: 元素從下放到上。</li></ul>',
    'tr': '<p>Kurbağalar, kendi nilüfer yaprakları ile aynı sırada olmalılar. <code>flex-direction</code> kuralını kullanın. Bu CSS kuralı öğelerin hangi yönde yerleştireleceğini belirler ve şu değerleri alır:</p><ul><li><code>row</code>: Öğeler yazı yönü ile aynı yönde yerleştirilir.</li><li><code>row-reverse</code>: Öğeler yazı yönünün tersi yönünde yerleştirilir.</li><li><code>column</code>: Öğeler yukarıdan aşağıya doğru yerleştirilir.</li><li><code>column-reverse</code>: Öğeler aşağıdan yukarıya doğru yerleştirilir.</li></ul>',
    'it': '<p>Le rane devo posizionarsi nello stesso ordine delle ninfee usando la proprieta\' <code>flex-direction</code>. Questa proprieta\' definisce la direzione in cui gli elementi verranno posizionati nel contenitore e accetta i seguenti valori:</p><ul><li><code>row</code>: Gli elementi sono posizionati nella stessa direzione del testo.</li><li><code>row-reverse</code>: Gli elementi sono posizionati nella direzione opposta al testo.</li><li><code>column</code>: Gli elementi sono posizionati dall\'alto verso il basso.</li><li><code>column-reverse</code>: Gli elementi sono posizionati dal basso verso l\'alto.</li></ul>',
    'ko': '<p>개구리들이 자기 색깔과 같은 수련잎 위로 이동할 수 있도록 도와주세요. 이번에는 <code>flex-direction</code>을 사용하세요. 이 CSS 속성은 다음의 값들을 인자로 받아 컨테이너 안에서 요소들이 정렬해야 할 방향을 지정합니다:</p><ul><li><code>row</code>: 요소들을 텍스트의 방향과 동일하게 정렬합니다.</li><li><code>row-reverse</code>: 요소들을 텍스트의 반대 방향으로 정렬합니다.</li><li><code>column</code>: 요소들을 위에서 아래로 정렬합니다.</li><li><code>column-reverse</code>: 요소들을 아래에서 위로 정렬합니다.</li></ul>',
    'lt': '<p>Varlytėms, naudojant <code>flex-direction</code>, reikia išsirikiuoti lygiai taip, kaip išrikiuoti jų lelijos lapai. Ši CSS komanda nusako kryptį, pagal kurią elementai yra sudėliojami supančio elemento viduje ir reaguoja į šias vertes:</p><ul><li><code>row</code>: Elementai yra rikiuojami teksto skaitymo kryptimi.</li><li><code>row-reverse</code>: Elementai yra rikiuojami atvirkščiai teksto skaitymo krypties.</li><li><code>column</code>: Elementai yra rikiuojami iš viršaus į apačią.</li><li><code>column-reverse</code>: Elementai yra rikiuojami iš apačios į viršų.</li></ul>',
    'vi': '<p>Những chú ếch cần phải đến với chiếc lá súng cùng màu của chúng bằng cách sử dụng <code>flex-direction</code>. Từ CSS này xác định hướng hạng mục được đặt trong hộp chứa, và chấp nhận các giá trị sau:</p><ul><li><code>row</code>: Các hạng mục được đặt cùng hướng với hướng của từ trong văn bản.</li><li><code>row-reverse</code>: Các hạng mục được đặt ngược hướng với hướng của từ trong văn bản.</li><li><code>column</code>: Các hạng mục được đặt từ trên xuống dưới.</li><li><code>column-reverse</code>: Các hạng mục được đặt từ dưới lên trên.</li></ul>',
    'pl': '<p>Żabki muszą znaleźć się w tej samej kolejności co ich listki, pomoże im w tym właściwość <code>flex-direction</code>. Określa ona kierunek w jakim elementy są rozmieszczone w kontenerze i przyjmuje wartości:</p><ul><li><code>row</code>: Elementy zostaną rozmieszczone tak jak tekst.</li><li><code>row-reverse</code>: Elementy zostaną rozmieszczone odwrotnie do kierunku tekstu.</li><li><code>column</code>: Elementy zostaną rozmieszczone od góry do dołu.</li><li><code>column-reverse</code>: Elementy zostaną rozmieszczone od dołu do góry.</li></ul>',
    'cs': '<p>Žabky se potřebují dostat na lekníny své barvy, pomůže jim vlastnost <code>flex-direction</code>. Tato vlastnost určuje směr, kterým jsou prvky rozmístěny v kontejneru, a akceptuje následující hodnoty:</p><ul><li><code>row</code>: Řádky ve směru textu.</li><li><code>row-reverse</code>: Řádky proti směru textu.</li><li><code>column</code>: Sloupce shora dolů.</li><li><code>column-reverse</code>: Sloupce zdola nahoru.</li></ul>',
    'ja': '<p><code>flex-direction</code>を使って、カエルたちをそれぞれの蓮の葉に乗せましょう。このCSSプロパティーはコンテナー内でアイテムが配置される方向を決定します。また以下の値を取ります。</p><ul><li><code>row</code>: アイテムは文章と同じ方向に配置されます。</li><li><code>row-reverse</code>: アイテムは文章と逆の方向に配置されます。</li><li><code>column</code>: アイテムは上から下に向かって配置されます。</li><li><code>column-reverse</code>: アイテムは下から上に向かって配置されます。</li></ul>',
    'hu': '<p>A békáknak ugyanolyan sorrendbe kell rendeződniük, mint a tündérrózsáik, méghozzá a <code>flex-direction</code> tulajdonság használatával. Ez a CSS tulajdonság definiálja az irányzékot, amely mentén az elemek a konténerbe vannak helyezve, a következő értékek segítségével:</p><ul><li><code>row</code>: Az elemek a szöveg irányával megegyezően helyezkednek el.</li><li><code>row-reverse</code>: Az elemek a szöveg irányával ellentétes sorrendben helyezkednek el.</li><li><code>column</code>: Az elemek fentről lefelé rendeződnek.</li><li><code>column-reverse</code>: Az elemek lentről felfelé rendeződnek.</li></ul>',
    'eo': '<p>La ranoj bezonas esti en la sama ordo kiel iliaj avkolilifolioj pere de <code>flex-direction</code>. Tiu ĉi CSS-a trajto difinas la direkton ke elementoj estas metataj en la ujon, kaj akceptas la sekvajn valorojn:</p><ul><li><code>row</code>: Elementoj estas metataj samkiel la teksta direkto.</li><li><code>row-reverse</code>: Elementoj metiĝas male al la teksta direkto.</li><li><code>column</code>: Elementoj metatas supre malsupren.</li><li><code>column-reverse</code>: Elementoj metatas malsupre supren.</li></ul>',
    'sv': '<p>Grodorna behöver ställa sig i samma ordning som blombladen genom att använda <code>flex-direction</code>. Denna attribut definerar vilket håll objekten är placerade i inuti containern och accepterar följande värden:</p><ul><li><code>row</code>: Objekten är placerade åt samma håll som vanlig text.</li><li><code>row-reverse</code>: Objekten är placerade åt motsat håll som vanlig text.</li><li><code>column</code>: Objekten är placerade uppifrån och ner.</li><li><code>column-reverse</code>: Objekten är placerade nerifrån och upp.</li></ul>'
  }),
  board: 'gyr',
  style: window.kieker.instrumentMethod({ 'flex-direction': 'row-reverse' }),
  before: "#pond {\n  display: flex;\n",
  after: "}"
}), window.kieker.instrumentMethod({
  name: 'flex-direction 2',
  instructions: window.kieker.instrumentMethod({
    'en': '<p>Help the frogs find their column of lilypads using <code>flex-direction</code>. This CSS property defines the direction items are placed in the container, and accepts the following values:</p><ul><li><code>row</code>: Items are placed the same as the text direction.</li><li><code>row-reverse</code>: Items are placed opposite to the text direction.</li><li><code>column</code>: Items are placed top to bottom.</li><li><code>column-reverse</code>: Items are placed bottom to top.</li></ul>',
    'de': '<p>Hilf den Fr&ouml;schen dabei, die Seerosenbl&auml;tter zu erreichen, indem du <code>flex-direction</code> verwendest. Diese CSS-Eigenschaft legt die Richtung fest, in der die Elemente im Container platziert werden. Sie akzeptiert die folgenden Werte:</p><ul><li><code>row</code>: Elemente in Textrichtung ausrichten.</li><li><code>row-reverse</code>: Elemente entgegen der Textrichtung ausrichten.</li><li><code>column</code>: Elemente von oben nach unten ausrichten.</li><li><code>column-reverse</code>: Elemente von unten nach oben ausrichten.</li></ul>',
    'pt-br': '<p>Ajude os sapos a encontrar sua coluna de vitórias-régias usando <code>flex-direction</code>. Esta propriedade CSS define a direção em que os itens são posicionados no container e aceita os seguintes valores:</p><ul><li><code>row</code>: Itens são posicionados na mesma direção do texto.</li><li><code>row-reverse</code>: Itens são posicionados na direção oposta à do texto.</li><li><code>column</code>: Itens são posicionados de cima para baixo.</li><li><code>column-reverse</code>: Itens são posicionados de baixo para cima.</li></ul>',
    'es': '<p>Ayuda a las ranas a encontrar su hoja de lirio en la columna usando <code>flex-direction</code>. Esta propiedad CSS define la dirección de los elementos en el contenedor, y acepta los siguientes valores:</p><ul><li><code>row</code>: Elementos son colocados en la misma dirección del texto.</li><li><code>row-reverse</code>: Elementos son colocados en la dirección opuesta al texto.</li><li><code>column</code>: Elementos se colocan de arriba hacia abajo.</li><li><code>column-reverse</code>: Elementos se colocan de abajo hacia arriba.</li></ul>',
    'fr': '<p>Aidez les grenouilles à trouver leurs colonnes de nénuphars en utilisant <code>flex-direction</code>. Cette propriété CSS définit la direction dans laquelle les éléments sont placés dans le conteneur, et accepte les valeurs suivantes&nbsp;:</p><ul><li><code>row</code>&nbsp;: Les éléments sont disposés dans la même direction que le texte.</li><li><code>row-reverse</code>&nbsp;: Les éléments sont disposés dans la direction opposée au texte.</li><li><code>column</code>&nbsp;: Les éléments sont disposés de haut en bas.</li><li><code>column-reverse</code>&nbsp;: Les éléments sont disposés de bas en haut.</li></ul>',
    'ru': '<p>Помоги лягушатам расположиться на своих лилиях используя <code>flex-direction</code>. Это CSS свойство задает направление, в котором будут расположены элементы в контейнере и принимает следующие значения:</p><ul><li><code>row</code>: Элементы размещаются по направлению текста.</li><li><code>row-reverse</code>: Элементы отображаются в обратном порядке к направлению текста.</li><li><code>column</code>: Элементы распологаются сверху вниз.</li><li><code>column-reverse</code>: Элементы распологаются снизу вверх.</li></ul>',
    'fa': '<p>به قورباغه ها کمک کنید تا به صورت ستونی روی نیلوفرهای آبی قرار می گیرند با استفاده از <code>flex-direction</code> این کار را انجام دهید. این خاصیت جهت قرار گیری آیتم ها را مشخص می کند, مقادیر این خاصیت عبارتند از :</p><ul><li><code>row</code>: این مقدار برای چیدمان افقی آیتم ها به کار میرود.</li><li><code>row-reverse</code>: این خاصیت مانند خاصیت قبل است با این تفاوت که مکان آیتم ها برعکس می شود.</li><li><code>column</code>: این مقدار برای چیدمان عمودی آیتم ها به کار میرود.</li><li><code>column-reverse</code>: این خاصیت مانند خاصیت قبل است با این تفاوت که مکان آیتم ها برعکس می شود.</li></ul>',
    'zh-cn': '<p>使用<code>flex-direction</code>属性，帮助青蛙们找到它们该去的列。这个CSS属性定义了元素在容器里摆放的方向，并且接受这些值：</p><ul><li><code>row</code>: 元素摆放的方向和文字方向一致。</li><li><code>row-reverse</code>: 元素摆放的方向和文字方向相反。</li><li><code>column</code>: 元素从上放到下。</li><li><code>column-reverse</code>: 元素从下放到上。</li></ul>',
    'zh-tw': '<p>使用<code>flex-direction</code>屬性,幫助青蛙們找到它們該去的列。這個CSS屬性定義了元素在容器裏擺放的方向，並且接受這些值：</p><ul><li><code>row</code>: 元素擺放的方向和文字方向一致。</li><li><code>row-reverse</code>: 元素擺放的方向和文字的方向相反。</li><li><code>column</code>: 元素從上放到下。</li><li><code>column-reverse</code>: 元素從下放到上。</li></ul>',
    'tr': '<p><code>flex-direction</code> kuralını kullanarak, kurbağaların kendi nilüfer yapraklarını bulmasına yardımcı olun. Bu CSS kuralı öğelerin hangi yönde yerleştireleceğini belirler ve şu değerleri alır:</p><ul><li><code>row</code>: Öğeler yazı yönü ile aynı yönde yerleştirilir.</li><li><code>row-reverse</code>: Öğeler yazı yönünün tersi yönünde yerleştirilir.</li><li><code>column</code>: Öğeler yukarıdan aşağıya doğru yerleştirilir.</li><li><code>column-reverse</code>: Öğeler aşağıdan yukarıya doğru yerleştirilir.</li></ul>',
    'it': '<p>Aiuta le rane a trovare la loro ninfea usando <code>flex-direction</code>. Questa proprieta\' CSS definisce la direzione in cui gli elementi verranno sistemati nel contenitore ed accetta i seguenti valori:</p><ul><li><code>row</code>: Gli elementi sono posizionati seguendo la stessa direzione del testo.</li><li><code>row-reverse</code>: Gli elementi sono posizionati nella direzione opposta del testo.</li><li><code>column</code>: Gli elementi sono posizionati dall\'alto verso il basso.</li><li><code>column-reverse</code>: Gli elementi sono posizionati dal basso verso l\'alto.</li></ul>',
    'ko': '<p><code>flex-direction</code>을 사용하여 개구리들이 자기 색깔과 같은 수련잎 위로 이동할 수 있도록 도와주세요. 이 CSS 속성은 다음의 값들을 인자로 받아 컨테이너 안에서 요소들이 정렬해야 할 방향을 지정합니다:</p><ul><li><code>row</code>: 요소들을 텍스트의 방향과 동일하게 정렬합니다.</li><li><code>row-reverse</code>: 요소들을 텍스트의 반대 방향으로 정렬합니다.</li><li><code>column</code>: 요소들을 위에서 아래로 정렬합니다.</li><li><code>column-reverse</code>: 요소들을 아래에서 위로 정렬합니다.</li></ul>',
    'lt': '<p>Naudodami <code>flex-direction</code> padėkite varlytėms rasti stulpelį, kuriame yra jų lelijos lapai. Ši CSS komanda nusako kryptį, pagal kurią elementai yra sudėliojami supančio elemento viduje ir reaguoja į šias vertes:</p><ul><li><code>row</code>: Elementai yra rikiuojami teksto skaitymo kryptimi.</li><li><code>row-reverse</code>: Elementai yra rikiuojami atvirkščiai teksto skaitymo krypties.</li><li><code>column</code>: Elementai yra rikiuojami iš viršaus į apačią.</li><li><code>column-reverse</code>: Elementai yra rikiuojami iš apačios į viršų.</li></ul>',
    'vi': '<p>Giúp đỡ những chú ếch tìm thấy các chiếc lá súng được sắp xếp theo hàng dọc sử dụng <code>flex-direction</code>. Từ CSS này xác định hướng hạng mục được đặt trong hộp chứa, và chấp nhận các giá trị sau:</p><ul><li><code>row</code>: Các hạng mục được đặt cùng hướng với hướng của từ trong văn bản.</li><li><code>row-reverse</code>: Các hạng mục được đặt ngược hướng với hướng của từ trong văn bản.</li><li><code>column</code>: Các hạng mục được đặt từ trên xuống dưới.</li><li><code>column-reverse</code>: Các hạng mục được đặt từ dưới lên trên.</li></ul>',
    'pl': '<p>Pomóż żabkom odnaleźć ich kolumny przy pomocy <code>flex-direction</code>. Ta właściwość określa kierunek w jakim elementy w kontenerze są ustawione. Przyjmuje wartości:</p><ul><li><code>row</code>: Elementy są rozmieszczone w kierunku tekstu.</li><li><code>row-reverse</code>: Elementy są rozmieszczone w kierunku przeciwnym do tekstu.</li><li><code>column</code>: Elementy są rozmieszczone od góry do dołu.</li><li><code>column-reverse</code>: Elementy są rozmieszczone od dołu do góry.</li></ul>',
    'cs': '<p>Pomozte žabkám dostat se na sloupec leknínů pomocí <code>flex-direction</code>.  Tato vlastnost určuje směr, kterým jsou prvky rozmístěny v kontejneru, a akceptuje následující hodnoty:</p><ul><li><code>row</code>: Řádky ve směru textu.</li><li><code>row-reverse</code>: Řádky proti směru textu.</li><li><code>column</code>: Sloupce shora dolů.</li><li><code>column-reverse</code>: Sloupce zdola nahoru.</li></ul>',
    'ja': '<p><code>flex-direction</code>を使って、カエルたちが自分の蓮の葉を見つけるのを助けてあげましょう。このCSSプロパティーはコンテナー内でアイテムが配置される方向を決定します。また以下の値を取ります。</p><ul><li><code>row</code>: アイテムは文章と同じ方向に配置されます。</li><li><code>row-reverse</code>: アイテムは文章と逆の方向に配置されます。</li><li><code>column</code>: アイテムは上から下に向かって配置されます。</li><li><code>column-reverse</code>: アイテムは下から上に向かって配置されます。</li></ul>',
    'hu': '<p>Segíts a békáknak megtalálni a tündérrózsáikat a <code>flex-direction</code> használatával. Ez a CSS tulajdonság definiálja az irányzékot, amely mentén az elemek a konténerbe vannak helyezve, a következő értékek segítségével:</p><ul><li><code>row</code>: Az elemek a szöveg irányával megegyezően helyezkednek el.</li><li><code>row-reverse</code>: Az elemek a szöveg irányával ellentétes sorrendben helyezkednek el.</li><li><code>column</code>: Az elemek fentről lefelé rendeződnek.</li><li><code>column-reverse</code>: Az elemek lentről felfelé rendeződnek.</li></ul>',
    'eo': '<p>Helpu la ranojn trovi ilian kolumnon de avkolilifolioj pere de <code>flex-direction</code>. Tiu ĉi CSS-a trajto difinas la direkton ke elementoj estas metataj en la ujon, kaj akceptas la sekvajn valorojn:</p><ul><li><code>row</code>: Elementoj estas metataj samkiel la teksta direkto.</li><li><code>row-reverse</code>: Elementoj metiĝas male al la teksta direkto.</li><li><code>column</code>: Elementoj metatas supre malsupren.</li><li><code>column-reverse</code>: Elementoj metatas malsupre supren.</li></ul>',
    'sv': '<p>Hjälp grodorna att hitta sina blomblad genom att använda <code>flex-direction</code>. Denna attribut definerar vilket håll objekten är placerade i inuti containern och accepterar följande värden:</p><ul><li><code>row</code>: Objekten är placerade åt samma håll som vanlig text.</li><li><code>row-reverse</code>: Objekten är placerade åt motsat håll som vanlig text.</li><li><code>column</code>: Objekten är placerade uppifrån och ner.</li><li><code>column-reverse</code>: Objekten är placerade nerifrån och upp.</li></ul>'
  }),
  board: 'gyr',
  style: window.kieker.instrumentMethod({ 'flex-direction': 'column' }),
  before: "#pond {\n  display: flex;\n",
  after: "}"
}), window.kieker.instrumentMethod({
  name: 'flex-direction 3',
  instructions: window.kieker.instrumentMethod({
    'en': '<p>Help the frogs get to their own lilypads. Although they seem close, it will take both <code>flex-direction</code> and <code>justify-content</code> to get them there.</p><p>Notice that when you set the direction to a reversed row or column, start and end are also reversed.</p>',
    'de': '<p>Hilf den Fr&ouml;schen, ihr Seerosenblatt zu erreichen. Obwohl sie nah dran sind, ben&ouml;tigst du sowohl <code>flex-direction</code>, als auch <code>justify-content</code>, um sie ans Ziel zu f&uuml;hren.</p><p>Hinweis: Wenn du eine umgekehrte Ausrichtung verwendest, sind Start und Ende auch umgedreht.</p>',
    'pt-br': '<p>Ajude os sapos a encontrar suas próprias vitórias-régias. Elas parecem estar próximas, mas você precisará de ambas propriedades, <code>flex-direction</code> e <code>justify-content</code>, para levá-los lá.</p><p>Note que quando você define a direção para uma linha ou coluna reversa, start e end também são reversos.</p>',
    'es': '<p>Ayuda a las ranas a llegar a sus hojas de lirio. A pesar de que ellas parecen estar cerca, tomará <code>flex-direction</code> y <code>justify-content</code> para llegar hasta allí.</p><p>Nota que cuando estableces la dirección a una  fila invertida o columna, el inicio y el final también se invierten.</p>',
    'fr': '<p>Aidez les grenouilles à arriver à leur propre nénuphar. Bien qu\'elles semblent près, il faudra autant <code>flex-direction</code> que <code>justify-content</code> pour y arriver.</p><p>Remarquez que quand vous mettez la direction inversée, le début et la fin sont aussi inversés.</p>',
    'ru': '<p>Помоги лягушатам попасть на свои лилии. Хоть и кажется, что они почти на своих местах, все же придется применить и <code>flex-direction</code> и <code>justify-content</code>, чтоб поместить их на свои лилии.</p><p>Заметь, что когда ты устанавливаешь направление в обратном порядке для ряда или колонки, начало (start) и конец (end) тоже меняются местами.</p>',
    'fa': '<p>به قورباغه ها کمک کنید تا نیلوفرهای آبی خود را پیدا کنند. برای این کار از خاصیت های <code>flex-direction</code> و <code>justify-content</code> استفاده کنید.</p><p>توجه داشته باشید وقتی که <span class="en-font">flex-direction</span> مقادیر <span class="en-font">row-reverse</span> یا <span class="en-font">column-reverse</span> داشته باشد شروع و پایان معکوس می شود. </p>',
    'zh-cn': '<p>帮助青蛙们回到它们的荷叶上。尽管它们看上去离的很近，需要用<code>flex-direction</code>和<code>justify-content</code>来帮它们到那里。</p><p>注意当你调转行或列的方向后，flex-start和flex-end对应的方向也被调转了。</p>',
    'tr': '<p>Kurbağaların kendi nilüfer yapraklarını bulmalarına yardımcı olun. Yakında görünseler de, <code>flex-direction</code> ve <code>justify-content</code> kurallarını kullanarak onları yerlerine götürebilirsiniz.</p><p>Yerleştirme yönünü değiştirdiğini row-reverse ya da column-reverse yaptığınız zaman, başlangıç ve bitiş referanslarının da değiştiğini unutmayın.</p>',
    'it': '<p>Aiuta le rane a trovare la loro ninfea. Utilizza entrambe <code>flex-direction</code> e <code>justify-content</code> per dirigerle nella giusta posizione.</p><p>Nota che quando viene settata la direzione inversa per le righe o per le colonne, vengono invertite anche i punti di start e end.</p>',
    'ko': '<p>개구리들이 자기 색깔과 같은 수련잎 위로 이동할 수 있도록 도와주세요. <code>flex-direction</code>과 <code>justify-content</code>를 모두 사용해야 합니다.</p><p> column-reverse 또는 row-reverse를 사용하면 요소들의 start와 end의 순서도 뒤바뀝니다.</p>',
    'lt': '<p>Padekite varlytėms persikelti ant savo lelijos lapų. Nors jie ir yra arti, tačiau prireiks abiejų, <code>flex-direction</code> ir <code>justify-content</code> komandų, kad tai pasiektumėte.</p><p>Atkreipkite dėmesį, kad kai nustatote kryptį rikiuojančia atvirkščiai teksto skaitymo krypties arba iš apačios į viršų, elementų rikiavimo pradžia ir pabaiga taip pat apkeičiama pusėmis.</p>',
    'vi': '<p>Giúp đỡ những chú ếch tìm thấy các chiếc lá súng của chúng. Mặc dù các chiếc lá gần nhau, nhưng sẽ cần cả hai từ <code>flex-direction</code> và <code>justify-content</code> để đưa chúng đến nơi.</p><p>Chú ý rằng khi bạn thiết lập các chiều hướng của một hàng hoặc cột đảo ngược, điểm bắt đầu và kết thúc cũng được đảo ngược.</p>',
    'pl': '<p>Pomóż żabkom dotrzeć do swoich listków. Może i wydaje się, że są blisko ale potrzebne ci będą zarówno <code>flex-direction</code> jak i <code>justify-content</code>, aby wykonać to zadanie.</p><p>Zauważ, że ustawiając wartość z dopiskiem reverse, początek i koniec także się odwracają.</p>',
    'cs': '<p>Pomozte žabkám na své lekníny. Vypadá to snadně, ale budete potřebovat kombinaci <code>flex-direction</code> a <code>justify-content</code>.</p><p>Všiměte si, že když se otočí řádek, prohodí se i začátek a konec.</p>',
    'ja': '<p>カエルたちがそれぞれの蓮の葉に乗るのを助けてあげましょう。もうほとんど乗っているようにも見えますが、ちゃんと乗せるには<code>flex-direction</code>と<code>justify-content</code>の両方を使う必要があります。</p><p>方向としてrow-reverseやcolumnを指定した場合、始点と終点もまた逆になることに気を付けてください。</p>',
    'hu': '<p>Segíts a békáknak megtalálni saját tündérrózsáikat. Bár úgy tűnik, egész közel járunk, mégis szükség lesz mind a <code>flex-direction</code>, mind pedig a <code>justify-content</code> tulajdonságra, hogy odajuttassuk őket.</p><p>Vedd figyelembe, hogy ha az irányzékot ellentétesre (reversed) állítod, a \'start\' és az \'end\' értékek jelentése is megcserélődik.</p>',
    'eo': '<p>Helpu la ranojn alveni al iliaj akvolilifolioj. Kvankam ili ŝajnas proksimaj, lokigi la ranojn tien postulos ambaŭ <code>flex-direction</code> kaj <code>justify-content</code>.</p><p>Rimarku, kiam oni metas la direkton al inversita vico aŭ kolumno, tiam la komenco kaj la fino ankaŭ estus inversitaj.</p>',
    'sv': '<p>Hjälp grodorna att ta sig till sina blomblad. Även om dom ser ut att vara nära så kommer det krävas både <code>flex-direction</code> och <code>justify-content</code> för att ta sig dit.</p><p>Notera att när du ändra riktning till en motsat rad eller kolumn så är start och slut också åt motsat håll.</p>'
  }),
  board: 'gyr',
  style: window.kieker.instrumentMethod({ 'flex-direction': 'row-reverse', 'justify-content': 'flex-end' }),
  before: "#pond {\n  display: flex;\n",
  after: "}"
}), window.kieker.instrumentMethod({
  name: 'flex-direction 4',
  instructions: window.kieker.instrumentMethod({
    'en': '<p>Help the frogs find their lilypads using <code>flex-direction</code> and <code>justify-content</code>.</p><p>Notice that when the flex direction is a column, <code>justify-content</code> changes to the vertical and <code>align-items</code> to the horizontal.</p>',
    'de': '<p>Hilf den Fr&ouml;schen mit <code>flex-direction</code> und <code>justify-content</code>, ihr Seerosenblatt zu finden.</p><p>Hinweis: Wenn du eine vertikale Ausrichtung w&auml;hlst, beeinflusst <code>justify-content</code> die vertikale Ausrichtung, und <code>align-items</code> die horizontale.</p>',
    'pt-br': '<p>Ajude os sapos a encontrar suas vitórias-régias usando <code>flex-direction</code> e <code>justify-content</code>.</p><p>Note que quando a direção é em coluna, <code>justify-content</code> muda para a vertical e <code>align-items</code> para a horizontal.</p>',
    'es': '<p>Ayuda a las ranas a encontrar sus hojas de lirio usando <code>flex-direction</code> y <code>justify-content</code>.</p><p>Nota que cuando es una columna, <code>justify-content</code> cambia a vertical y <code>align-items</code> a horizontal.</p>',
    'fr': '<p>Aidez les grenouilles à trouver leurs nénuphars en utilisant <code>flex-direction</code> et <code>justify-content</code>.</p><p>Remarquez que quand la direction est en colonne, <code>justify-content</code> change pour la verticale et <code>align-items</code> pour l\'horizontale.</p>',
    'ru': '<p>Помоги лягушатам найти их лилии с помощью <code>flex-direction</code> и <code>justify-content</code>.</p><p>Заметь, когда в качестве направления выбрана колонка, то <code>justify-content</code> влияет на вертикальное выравнивание, а <code>align-items</code> на горизонтальное.</p>',
    'fa': '<p> به قورباغه ها کمک کنید تا بخ نیلوفرهای آبی خود برسند برای این کار از خاصیت های <code>flex-direction</code> و <code>justify-content</code> استفاده کنید.</p><p>توجه داشته باشید وقتی <span class="en-font">flex-direction</span> مقدار <span class="en-font">column</span> داشته باشد, محور <code>justify-content</code> عمودی و <code>align-items</code> افقی می شود.</p>',
    'zh-cn': '<p>用<code>flex-direction</code>和<code>justify-content</code>来帮助青蛙找到他们的方向</p><p>注意当flex以列为方向时，<code>justify-content</code>控制纵向对齐，<code>align-items</code>控制横向对齐。</p>',
    'zh-tw': '<p>用<code>flex-direction</code>和<code>justify-content</code>來幫助青蛙找到他們的方向</p><p>注意當flex一列爲方向時, <code>justify-content</code>控制縱向對齊, <code>align-items</code>控制橫向對齊。</p>',
    'tr': '<p><code>flex-direction</code> ve <code>justify-content</code> kurallarını kullanarak kurbağaların kendi nilüfer yapraklarını bulmalarına yardımcı olun.</p><p>flex direction kuralı column değerini aldığında, <code>justify-content</code> kuralı dikeyde ve <code>align-items</code> kuralı yatayda çalışır, unutmayın.</p>',
    'it': '<p>Aiuta le rane a raggiungere le ninfee utilizzando <code>flex-direction</code> e <code>justify-content</code>.</p><p>Nota che quando la direzione flex e\' una colonna,  <code>justify-content</code> cambia l\'allineamento verticale e <code>align-items</code> quello orizzontale.</p>',
    'ko': '<p>개구리들이 자기 색깔과 같은 수련잎 위로 이동할 수 있도록 도와주세요. <code>flex-direction</code>과 <code>justify-content</code>를 모두 사용해야 합니다.</p><p>Flex의 방향이 column일 경우 <code>justify-content</code>의 방향이 세로로, <code>align-items</code>의 뱡향이 가로로 바뀝니다.</p>',
    'lt': '<p>Naudodami <code>flex-direction</code> ir <code>justify-content</code> padėkite varlytėms rasti savo lelijos lapus.</p><p>Atkreipkite dėmesį, kad kai rikiavimo būdas yra stulpelis <code>justify-content</code> keičia elementų rikiavimą vertikaliai, o <code>align-items</code> horizontaliai.</p>',
    'vi': '<p>Giúp đỡ những chú ếch tìm thấy các chiếc lá súng của chúng bằng cách sử dụng <code>flex-direction</code> và <code>justify-content</code>.</p><p>Chú ý rằng khi hướng flex là hàng dọc, <code>justify-content</code> thay đổi thành chiều dọc và <code>align-items</code> to chiều ngang.</p>',
    'pl': '<p>Pomóż żabkom dotrzeć do listków używając <code>flex-direction</code> i <code>justify-content</code>.</p><p>Zauważ, że w przypadku gdy <code>flex direction</code> ma wartość column to <code>justify-content</code> wyrównuje element pionowo, a <code>align-items</code> poziomo.</p>',
    'cs': '<p>Pomozte žabkám najít své lekníny pomocí <code>flex-direction</code> a <code>justify-content</code>.</p><p>Všiměte si, že když je hlavní osa svislá, <code>justify-content</code> zarovnává prvky svisle a <code>align-items</code> vodorovně.</p>',
    'ja': '<p><code>flex-direction</code>と<code>justify-content</code>を使って、カエルたちがそれぞれの蓮の葉を見つけるのを助けてあげてください。</p><p>flexの方向がcolumnのとき、<code>justify-content</code>は垂直方向の、<code>align-items</code>は水平方向の並び方を変えるようになることに気を付けてください。</p>',
    'hu': '<p>Segíts a békáknak megtalálni a tündérrózsáikat a <code>flex-direction</code> és a <code>justify-content</code> használatával.</p><p>Vedd figyelembe, hogy ha a flex direction értéke column (oszlopos), akkor a <code>justify-content</code> már a függőleges, míg az <code>align-items</code> a vízszintes elrendezésre vonatkozik.</p>',
    'eo': '<p>Lokigu la ranojn al iliaj akvolilifolioj pere de <code>flex-direction</code> kaj <code>justify-content</code>.</p><p>Rimarku, kiam la flex-a direkto estas kolumno, tiam <code>justify-content</code> ŝanĝus al la vertikalo kaj <code>align-items</code> al la horizontalo.</p>',
    'sv': '<p>Hjälp grodorna att ta sig till sina blomblad genom att använda <code>flex-direction</code> och <code>justify-content</code>.</p><p>Notera att när flex-direction är en kolumn så ändras <code>justify-content</code> till vertikalt och <code>align-items</code> till horisontellt.</p>'
  }),
  board: 'gyr',
  style: window.kieker.instrumentMethod({ 'flex-direction': 'column', 'justify-content': 'flex-end' }),
  before: "#pond {\n  display: flex;\n",
  after: "}"
}), window.kieker.instrumentMethod({
  name: 'flex-direction 5',
  instructions: window.kieker.instrumentMethod({
    'en': '<p>Help the frogs find their lilypads using <code>flex-direction</code> and <code>justify-content</code>.</p>',
    'de': '<p>Hilf den Fr&ouml;schen mit <code>flex-direction</code> und <code>justify-content</code>, ihr Seerosenblatt zu finden.</p>',
    'pt-br': '<p>Ajude os sapos a encontrar suas vitórias-régias usando <code>flex-direction</code> e <code>justify-content</code>.</p>',
    'es': '<p>Ayuda a las ranas a encontrar sus hojas de lirio usando <code>flex-direction</code> y <code>justify-content</code>.</p>',
    'fr': '<p>Aidez les grenouilles à trouver leurs nénuphars en utilisant <code>flex-direction</code> et <code>justify-content</code>.</p>',
    'ru': '<p>Помоги лягушатам найти их лилии с помощью <code>flex-direction</code> и <code>justify-content</code>.</p>',
    'fa': '<p>به قورباغه ها کمک کنید تا نیلوفرهای آبی خود را پیدا کنند. با استفاده از <code>flex-direction</code> و <code>justify-content</code> این کار را انجام دهید.</p>',
    'zh-cn': '<p>用<code>flex-direction</code>和<code>justify-content</code>来帮助青蛙回到他们的荷叶上。</p>',
    'zh-tw': '<p>用<code>flex-direction</code>和<code>justify-content</code>來幫助青蛙回到他們的荷葉上。</p>',
    'tr': '<p><code>flex-direction</code> ve <code>justify-content</code> kurallarını kullanarak kurbağaların kendi nilüfer yapraklarını bulmalarına yardımcı olun.</p>',
    'it': '<p>Aiuta le rane a raggiungere la loro ninfea utilizzando <code>flex-direction</code> e <code>justify-content</code>.</p>',
    'ko': '<p><code>flex-direction</code>과 <code>justify-content</code>를 사용하여 개구리들이 자기 색깔과 같은 수련잎 위로 이동할 수 있도록 도와주세요.</p>',
    'lt': '<p>Padėkite varlytėms rasti savo lelijos lapus naudodami <code>flex-direction</code> ir <code>justify-content</code>.</p>',
    'vi': '<p>Giúp đỡ những chú ếch tìm lá súng của họ bằng cách sử dụng <code>flex-direction</code> và <code>justify-content</code>.</p>',
    'pl': '<p>Pomóż żabkom dotrzeć do swoich listków używając <code>flex-direction</code> i <code>justify-content</code>.</p>',
    'cs': '<p>Pomozte žabkám najít své lekníny pomocí <code>flex-direction</code> a <code>justify-content</code>.</p>',
    'ja': '<p><code>flex-direction</code>と<code>justify-content</code>を使って、カエルたちがそれぞれの蓮の葉を見つけるのを助けてあげてください。</p>',
    'hu': '<p>Segíts a békáknak megtalálni a tündérrózsáikat a <code>flex-direction</code> és a <code>justify-content</code> használatával.</p>',
    'eo': '<p>Alvenigu la ranojn al iliaj nimfeofolioj uzante <code>flex-direction</code> kaj <code>justify-content</code>.</p>',
    'sv': '<p>Hjälp grodorna till sina blomblad genom att använda <code>flex-direction</code> och <code>justify-content</code>.</p>'
  }),
  board: 'gyr',
  style: window.kieker.instrumentMethod({ 'flex-direction': 'column-reverse', 'justify-content': 'space-between' }),
  before: "#pond {\n  display: flex;\n",
  after: "}"
}), window.kieker.instrumentMethod({
  name: 'flex-direction 6',
  instructions: window.kieker.instrumentMethod({
    'en': '<p>Help the frogs find their lilypads using <code>flex-direction</code>, <code>justify-content</code>, and <code>align-items</code>.</p>',
    'de': '<p>Hilf den Fr&ouml;schen mit <code>flex-direction</code>, <code>justify-content</code> und <code>align-items</code>, ihr Seerosenblatt zu finden.</p>',
    'pt-br': '<p>Ajude os sapos a encontrar suas vitórias-régias usando <code>flex-direction</code>, <code>justify-content</code> e <code>align-items</code>.</p>',
    'es': '<p>Ayuda a las ranas a encontrar sus hojas de lirio usando <code>flex-direction</code>, <code>justify-content</code>, y <code>align-items</code>.</p>',
    'fr': '<p>Aidez les grenouilles à trouver leurs nénuphars en utilisant <code>flex-direction</code>, <code>justify-content</code>, et <code>align-items</code>.</p>',
    'ru': '<p>Помоги лягушатам найти их лилии с помощью <code>flex-direction</code>, <code>justify-content</code> и <code>align-items</code>.</p>',
    'fa': '<p>به قورباغه ها کمک کنید با استفاده از خاصیت های <code>flex-direction</code>, <code>justify-content</code> و <code>align-items</code> این کار را انجام دهید.</p>',
    'zh-cn': '<p>用<code>flex-direction</code>，<code>justify-content</code>，以及，<code>align-items</code>来帮助青蛙回到他们的荷叶上。</p>',
    'zh-tw': '<p>用<code>flex-direction</code>，<code>justify-content</code>，以及，<code>align-items</code>來幫助青蛙回到他們的荷葉上。</p>',
    'tr': '<p><code>flex-direction</code>, <code>justify-content</code> ve <code>align-items</code> kurallarını kullanarak kurbağaların kendi nilüfer yapraklarını bulmalarına yardımcı olun.</p>',
    'it': '<p>Aiuta le rane a raggiungere la loro ninfea utilizzando <code>flex-direction</code>, <code>justify-content</code>, e <code>align-items</code>.</p>',
    'ko': '<p><code>flex-direction</code>, <code>justify-content</code>, 그리고 <code>align-items</code>를 사용하여 개구리들이 자기 색깔과 같은 수련잎 위로 이동할 수 있도록 도와주세요.</p>',
    'lt': '<p>Padėkite varlytėms rasti savo lelijos lapus naudodami <code>flex-direction</code>, <code>justify-content</code>, ir <code>align-items</code>.</p>',
    'vi': '<p>Giúp đỡ những chú ếch tìm chiếc lá súng của họ bằng cách sử dụng <code>flex-direction</code>, <code>justify-content</code>, và <code>align-items</code>.</p>',
    'pl': '<p>Pomóż żabkom dotrzeć do swoich listków przy pomocy <code>flex-direction</code>, <code>justify-content</code> i <code>align-items</code>.</p>',
    'cs': '<p>Pomozte žabkám na lekníny vlastnostmi <code>flex-direction</code>, <code>justify-content</code> a <code>align-items</code>.</p>',
    'ja': '<p><code>flex-direction</code>と<code>justify-content</code>、<code>align-items</code>を使って、カエルたちがそれぞれの蓮の葉を見つけるのを助けてあげてください。</p>',
    'hu': '<p>Segíts a békáknak megtalálni a tündérrózsáikat a <code>flex-direction</code>, a <code>justify-content</code>, és az <code>align-items</code> használatával.</p>',
    'eo': '<p>Helpu la ranojn trovi iliajn akvolilifoliojn pere de <code>flex-direction</code>, <code>justify-content</code>, kaj <code>align-items</code>.</p>',
    'sv': '<p>Hjälp grodorna till sina blomblad genom att använda <code>flex-direction</code>, <code>justify-content</code> och <code>align-items</code>.</p>'
  }),
  board: 'gyr',
  style: window.kieker.instrumentMethod({ 'flex-direction': 'row-reverse', 'justify-content': 'center', 'align-items': 'flex-end' }),
  before: "#pond {\n  display: flex;\n",
  after: "}"
}), window.kieker.instrumentMethod({
  name: 'order 1',
  instructions: window.kieker.instrumentMethod({
    'en': '<p>Sometimes reversing the row or column order of a container is not enough. In these cases, we can apply the <code>order</code> property to individual items. By default, items have a value of 0, but we can use this property to set it to a positive or negative integer value.</p><p>Use the <code>order</code> property to reorder the frogs according to their lilypads.</p>',
    'de': '<p>Manchmal reicht es nicht aus, die horizontale oder vertikale Ausrichtung eines Containers umzukehren. In so einem Fall k&ouml;nnen wir die <code>order</code>-Eigenschaft f&uuml;r einzelne Elemente verwenden. Standardm&auml;&szlig;ig haben alle Element den Wert 0, aber wir k&ouml;nnen die Eigenschaft verwenden, um ihn auf eine positive oder negative ganze Zahl zu setzen.</p><p>Benutze die <code>order</code>-Eigenschaft, um die Fr&ouml;schen entsprechend ihrer Seerosenbl&auml;tter anzuordnen.</p>',
    'pt-br': '<p>Às vezes, reverter a ordem de uma coluna ou de um container não é suficiente. Nesses casos, podemos aplicar a propriedade <code>order</code> para itens individuais. Por padrão, itens tem um valor de 0, mas nós podemos usar essa propriedade para alterar para um valor inteiro positivo ou negativo.</p><p>Use a propriedade <code>order</code> para reordenar os sapos de acordo com suas vitórias-régias.</p>',
    'es': '<p>A veces, invertir el orden de una fila o columna de un contenedor no es suficiente. En esos casos, nosotros podemos aplicar la propiedad <code>order</code> para elementos individuales. Por defecto, los elementos tienen un valor 0, pero nosotros podemos usar esta propiedad para establecerlo a un número entero positivo o negativo.</p><p>Usa la propiedad <code>order</code> para reordenar las ranas de acuerdo a sus hojas de lirio.</p>',
    'fr': '<p>Parfois, inverser l\'ordre de la rangée ou la colonne ne suffit pas. Dans ces cas, on peut appliquer la propriété <code>order</code> à des éléments individuels. Par défaut, les éléments ont une valeur de 0, mais on peut utiliser cette propriété pour changer la valeur à un entier positif ou négatif.</p><p>Utilisez la propriété <code>order</code> pour réorganiser les grenouilles par rapport à leurs nénuphars.</p>',
    'ru': '<p>Иногда изменения порядка отображения элементов в контейнере недостаточно. В таких случаях мы можем применить свойство <code>order</code> для конкретных элементов. По умолчанию, значение этого свойства у элементов равно 0, но мы можем задать положительное или отрицательное целое число этому свойству.</p><p>Используй свойство <code>order</code>, чтоб разместить лягушат на своих лилиях.</p>',
    'fa': '<p>گاهی اوقات ما نیاز داریم فقط ایتم ها را جابه جا کنیم. برای این کار خاصیت <code>order</code> استفاده می کنیم. به صورت پیشفرض آیتم ها مقدار <span class="en-font">0</span> دارند, اما با استفاده از این خاصیت شما می توانید مقدار مثبت و منفی برای آیتم ها تعیین کنید. <p>با استفاده از خاصیت <code>order</code> می توانید ترتیب نشستن قورباغه ها روی نیلوفرهای آبی خود را تعیین کنید.</p>',
    'zh-cn': '<p>有时候仅仅调转行或列的方向是不够的。在这些情况，我们可以设置单个元素的<code>order</code>属性。元素的属性默认值为0，但是我们设置这个属性为正数或负数。</p><p>用<code>order</code>来调整青蛙的顺序。</p>',
    'zh-tw': '<p>有時候僅僅調轉行或列的方向是不夠的。在這些情況，我們可以設置單個元素的<code>order</code>屬性。元素的屬性默認值爲0,但是我們設置這個屬性爲整數或負數。</p><p>用<code>order</code>來調整青蛙的順序。</p>',
    'tr': '<p>Bazen row ya da column yerleşimini tersine çevirmek yeterli olmaz. Bu gibi durumlarda <code>order</code> kuralı ile öğeleri tek tek sıralandırabiliriz. Öğelerin başlangıç sıra değeri 0\'dır, ama biz bu değeri pozitif ya da negatif bir değere eşitleyebiliriz.</p><p><code>order</code> kuralını kullanarak kurbağaları nilüfer yapraklarına göre sıralayın.</p>',
    'it': '<p>A volte invertire l\'ordine di visualizzazione delle righe o delle colonne non e\' sufficiente. In questi casi possiamo applicare la proprieta\' <code>order</code> sui singoli elementi. Ogni elemento ha assegnato il valore 0 di default ma e\' possibile utilizzare questa proprieta\' per assegnare un valore intero positivo o negativo.</p><p>Utilizza <code>order</code> per muovere le rane sulla loro ninfea.</p>',
    'ko': '<p>때때로 컨테이너의 row나 column의 순서를 역으로 바꾸는 것만으로는 충분하지 않습니다. 이러한 경우에는 <code>order</code> 속성을 각 요소에 적용할 수 있습니다. order의 기본 값은 0이며, 양수나 음수로 바꿀 수 있습니다.</p><p><code>order</code> 속성을 이용하여 개구리들의 순서를 수련잎의 순서에 맞게 바꿔주세요.</p>',
    'lt': '<p>Kartais sukeisti supančio elemento eilutes su stulpeliais vietomis negana. Tokiais atvejais galima pritaikyti komandą <code>order</code> pavieniams elementams. Pagal nutylėjimą elementų eilės tvarką nusakanti vertė yra 0, bet galima naudoti šią komandą, kad vertę prilygintume teigiamam arba neigiamam skaičiui.</p><p>Panaudokite komandą <code>order</code>, kad apkeistumėte varlytes vietomis, pagal jų lelijų lapus.</p>',
    'vi': '<p>Đôi khi đảo chiều của hộp chứa theo hàng ngang hay hàng dọc là không đủ. Trong những trường hợp này, chúng ta có thể áp dụng <code>order</code> cho từng hạng mục. Theo mặc định, các hạng mục có giá trị là 0, nhưng chúng ta có thể thay đổi nó với một giá trị số nguyên dương hoặc âm khác.</p><p>Sử dụng <code>order</code> để sắp xếp lại những chú ếch theo chiếc lá súng của chúng.</p>',
    'pl': '<p>Czasami odwracanie wierszy i kolumn kontenera nie wystarcza. W takich przypadkach, możemy zastosować własność <code>order</code> do pojedynczego elementu. Domyślnie elementy mają wartość 0, ale przy pomocy tej własności możemy ustalić kolejność na dowolną dodatnią lub ujemną wartość.</p><p>Przy pomocy własności <code>order</code> zmień kolejność żabek tak, aby każda była na swoim listku.</p>',
    'cs': '<p>Samotná změna směru někdy nestačí. V těchto případech lze zvolit pořadí pomocí vlastnosti <code>order</code> jednotlivých prvků. Výchozí hodnota je 0, ale můžete použít libovolné kladné či záporné celé číslo.</p><p>Použijte vlastnost <code>order</code> tak, aby se žabky ocitly na správných leknínech.</p>',
    'ja': '<p>コンテナーの行や列の順序を逆にするだけでは足りないこともままあります。そういった場合、個別のアイテムに<code>order</code>プロパティーを適用することができます。アイテムはデフォルトでは0の値を取りますが、正や負の整数値を設定することもできます。</p><p><code>order</code>プロパティーを使って、蓮の葉に合うようカエルたちを並び替えてください。</p>',
    'hu': '<p>Időnként a sorok vagy az oszlopok irányának megfordítása nem elégséges. Ilyen esetekben alkalmazhatjuk az <code>order</code> tulajdonságot az egyes elemekre. Alapértelmezettként az elemek a 0 értéket kapják, de lehetőségünk van negatív vagy pozitív egész számot megadni értékként.</p><p>Használd az <code>order</code> tulajdonságot, hogy átrendezd a békákat a tündérrózsáiknak megfelelően.</p>',
    'eo': '<p>Kelkfoje, inversante la vican aŭ kolumnan ordonon de ujo ne sufiĉas. Tiaokaze, ni povas apliki la <code>order</code> trajton al individuaj elementoj. Defaŭlte, elemento havas nulan valoron, sed oni povas uzi ĉi tiun trajton por ĝin igi pozitiva aŭ negativa entjera valoro.</p><p>Uzu la <code>order</code> trajton por reordigi la ranojn laŭ iliaj nimfeofolioj.</p>',
    'sv': '<p>Ibland räcker det inte med att ändra ordningen på en rad eller kolumn. I så fall kan man lägga till <code>order</code> på ett individuellt objekt. Från början har alla objekt värdet 0, men vi kan använda denna attribut till att sätta ett positivt eller negativt heltalsvärde.</p><p>Använd <code>order</code> till att ändra ordningen på grodorna så att de hamnar på rätt blomblad.</p>'
  }),
  board: 'gyr',
  selector: '> :nth-child(2)',
  classes: window.kieker.instrumentMethod({ '#pond, #background': 'wrap' }),
  style: window.kieker.instrumentMethod({ 'order': '2' }),
  before: "#pond {\n  display: flex;\n}\n\n.yellow {\n",
  after: "}"
}), window.kieker.instrumentMethod({
  name: 'order 2',
  instructions: window.kieker.instrumentMethod({
    'en': '<p>Use the <code>order</code> property to send the red frog to his lilypad.</p>',
    'de': '<p>Benutze die <code>order</code>-Eigenschaft, um den roten Frosch zu seinem Seerosenblatt zu f&uuml;hren.</p>',
    'pt-br': '<p>Use a propriedade <code>order</code> para levar o sapo vermelho à sua vitória-régia.</p>',
    'es': '<p>Usa la propiedad <code>order</code> para enviar la rana de color rojo a su hoja de lirio.</p>',
    'fr': '<p>Utilisez la propriété <code>order</code> pour envoyer la grenouille rouge à son nénuphar.</p>',
    'ru': '<p>Используй свойство <code>order</code>, чтоб отправить красного лягушонка на его лилию.</p>',
    'fa': '<p>با استفاده از خاصیت <code>order</code> قورباغه قرمز را به نیلوفر آبی خود بفرستید.</p>',
    'zh-cn': '<p>用<code>order</code>属性来把红青蛙送回它的荷叶去。</p>',
    'zh-tw': '<p>用<code>order</code>屬性來把紅青蛙送回它的荷葉去。',
    'tr': '<p><code>order</code> kuralını kullanarak kırmızı kurbağayı kendi nilüfer yaprağına gönderin.</p>',
    'it': '<p>Utilizza la proprieta\' <code>order</code> per muovere le rane sul sla loro ninfea.</p>',
    'ko': '<p><code>order</code> 속성을 사용하여 빨간색 개구리를 빨간색 수련잎으로 보내주세요.</p>',
    'lt': '<p>Panaudokite komandą <code>order</code>, kad nukeltumėte raudoną varlytę ant jos lelijos lapo.</p>',
    'vi': '<p>Sử dụng <code>order</code> để đưa chú ếch màu đỏ đến với chiếc lá súng của mình.</p>',
    'pl': '<p>Użyj własności <code>order</code>, aby posłać czerwoną żabkę na jej listek.</p>',
    'cs': '<p>Použijte vlastnost <code>order</code> tak, aby se červená žabka dostala na svůj leknín.</p>',
    'ja': '<p><code>order</code>プロパティーを使って、赤いカエルを彼の蓮の葉へ送ってください。</p>',
    'hu': '<p>Használd az <code>order</code> tualjdonságot hogy a vörös békát a tündérrózsájához küldhesd.</p>',
    'eo': '<p>Uzu la <code>order</code> trajton por alvenigi la ruĝan ranon al ĝia nimfeofolio.</p>',
    'sv': '<p>Använd <code>order</code> till att flytta den röda grodan till dess blomblad.</p>'
  }),
  board: 'gggrg',
  selector: '> :nth-child(4)',
  classes: window.kieker.instrumentMethod({ '#pond, #background': 'wrap' }),
  style: window.kieker.instrumentMethod({ 'order': '-1' }),
  before: "#pond {\n  display: flex;\n}\n\n.red {\n",
  after: "}"
}), window.kieker.instrumentMethod({
  name: 'align-self 1',
  instructions: window.kieker.instrumentMethod({
    'en': '<p>Another property you can apply to individual items is <code>align-self</code>. This property accepts the same values as <code>align-items</code> and its value for the specific item.</p>',
    'de': '<p><code>align-self</code> ist eine weitere Eigenschaft f&uuml;r einzelne Elemente. Sie akzeptiert die gleichen Werte wie <code>align-items</code>.</p>',
    'pt-br': '<p>Outra propriedade que você pode aplicar para itens individuais é <code>align-self</code>. Esta propriedade aceita os mesmos valores que <code>align-items</code> e seus valores são usados para o item específico.</p>',
    'es': '<p>Otra propiedad que puedes aplicar a elementos individuales es <code>align-self</code>. Esta propiedad acepta los mismos valores de <code>align-items</code> y sus valores son usados para un elemento específico</p>',
    'fr': '<p>Une autre propriété que vous pouvez appliquer sur des éléments individuels est <code>align-self</code>. Cette propriété accepte les mêmes valeurs que <code>align-items</code>, mais s\'applique seulement à l\'élément ciblé.</p>',
    'ru': '<p>Еще одно свойство, которое ты можешь применить к определенному элементу это <code>align-self</code>. Это свойство принимает те же значения, что и <code>align-items</code>.</p>',
    'fa': '<p>خاصیت دیگری وجود دارد که به شما امکان تراز بندی فردی (یک ایتم) را می دهد، این خاصت <code>align-self</code> نام دارد. مقادیر این خاصیت دقیقا هما مقادیر خاصیت <code>align-items</code> است.</p>',
    'zh-cn': '<p>另一个你可以使用的控制单个元素的属性是<code>align-self</code>。这个属性接受和<code>align-items</code>一样的那些值。</p>',
    'zh-tw': '<p>另一個你可以使用的控制單個元素的屬性是<code>align-self</code>。這個屬性接受和<code>align-items</code>一樣的那些值。',
    'tr': '<p>Öğe başına uygulayabileceğiniz bir başka kural ise <code>align-self</code>\'tir. Bu kural <code>align-items</code> kuralı ile aynı değerleri alır ve bu değeri o öğe için uygular.</p>',
    'it': '<p>Un\'altra proprieta\' che e\' possibile applicare ai singoli elementi e\' <code>align-self</code>. Essa accetta gli stessi valori di <code>align-items</code>.</p>',
    'ko': '<p><code>align-self</code>는 개별 요소에 적용할 수 있는 또 다른 속성입니다. 이 속성은 <code>align-items</code>가 사용하는 값들을 인자로 받으며, 그 값들은 지정한 요소에만 적용됩니다.</p>',
    'lt': '<p>Kita komanda, kurią galima pritaikyti pavieniams elementams yra <code>align-self</code>. Ši komanda reaguoja į tas pačias vertes, kaip ir <code>align-items</code>.</p>',
    'vi': '<p>Một từ CSS khác mà bạn có thể áp dụng cho hạng mục flex riêng biệt là <code>align-self</code>. Từ CSS chấp nhận các giá trị tương tự như <code>align-items</code> và giá trị của nó đối với một hạng mục riêng biệt.</p>',
    'pl': '<p>Następną własnością stosowaną wobec każdego elementu z osobna jest <code>align-self</code>. Przyjmuje ona wartości takie same jak <code>align-items</code>, ale ma zastosowanie tylko wobec konkretnego elementu.</p>',
    'cs': '<p>Další vlastností, kterou lze nastavit jednotlivým prvkům, je <code>align-self</code>. Tato vlastnost nabývá stejných hodnot jako <code>align-items</code>, ale ovlivňuje jen vybraný prvek.</p>',
    'ja': '<p>他にも、個別のアイテムへ設定できるプロパティーとして<code>align-self</code>があります。このプロパティーは<code>align-items</code>と同じ値を受け付け、指定のアイテムの状態だけを変更します。</p>',
    'hu': '<p>Egy másik, szintén az egyes elemekre alkalmazható tulajdonság az <code>align-self</code>. Ez a tulajdonság ugyanazon értékeket veheti fel, mint az <code>align-items</code> és a beállított érték az adott elemre specifikus lesz.</p>',
    'eo': '<p>Alia trajto ke oni povas apliki al individuaj elementoj estas <code>align-self</code>. Tiu trajto permesas la samajn valorojn ol <code>align-items</code> kaj ĝia valoro por la specifa elemento.</p>',
    'sv': '<p>En annan attribut man kan använda på individuella objekt är <code>align-self</code>. Denna attribut accepterar samma värden som <code>align-items</code> och dess värde är specifikt för objektet.</p>'
  }),
  board: 'ggygg',
  selector: '> :nth-child(3)',
  style: window.kieker.instrumentMethod({ 'align-self': 'flex-end' }),
  before: "#pond {\n  display: flex;\n  align-items: flex-start;\n}\n\n.yellow {\n",
  after: "}"
}), window.kieker.instrumentMethod({
  name: 'align-self 2',
  instructions: window.kieker.instrumentMethod({
    'en': '<p>Combine <code>order</code> with <code>align-self</code> to help the frogs to their destinations.</p>',
    'de': '<p>Kombiniere <code>order</code> mit <code>align-self</code>, um die Fr&ouml;sche zum Ziel zu bringen.</p>',
    'pt-br': '<p>Combine <code>order</code> e <code>align-self</code> para levar os sapos aos seus destinos.</p>',
    'es': '<p>Combina <code>order</code> con <code>align-self</code> para ayudar a las ranas a llegar a sus destinos</p>',
    'fr': '<p>Combinez <code>order</code> et <code>align-self</code> pour aider les grenouilles à arriver à destination.</p>',
    'ru': '<p>Используй <code>order</code> и <code>align-self</code> вместе, чтоб помочь лягушатам добраться к своим целям.</p>',
    'fa': '<p>با استفاده از خاصیت های <code>order</code> و <code>align-self</code> به قورباغه ها کمک کنید به نیلوفر آبی خود برسند.</p>',
    'zh-cn': '<p>用<code>order</code>和<code>align-self</code>的组合来帮助青蛙们到他们的目的地。</p>',
    'zh-tw': '<p>用<code>order</code>和<code>align-self</code>的組合來幫助青蛙們到他們的目的地。</p>',
    'tr': '<p><code>order</code> kuralını <code>align-self</code> kuralı ile birleştirerek kurbağaları varacakları yere gitmelerine yardımcı olun</p>',
    'it': '<p>Combina <code>order</code> con <code>align-self</code> per aiutare le rane ad arrivare a destinazione.</p>',
    'ko': '<p><code>order</code>와 <code>align-self</code>를 사용하여 개구리들을 자기 색깔과 같은 수련잎 위로 보내주세요.</p>',
    'lt': '<p>Panaudokite <code>order</code> ir <code>align-self</code> kombinaciją, kad padėtumėte varlytėms pasiekti savo lelijų lapus.</p>',
    'vi': '<p>Kết hợp <code>order</code> với <code>align-self</code> giúp các chú ếch đến đúng địa điểm của chúng.</p>',
    'pl': '<p>Pomóż żabkom dotrzeć do listków przy pomocy kombinacji własności <code>order</code> i <code>align-self</code>.</p>',
    'cs': '<p>Pomozte žabkám na lekníny kombinací vlastností <code>order</code> a <code>align-self</code>.</p>',
    'ja': '<p><code>order</code>を<code>align-self</code>を組み合わせて、カエルたちを目的地へ連れて行ってあげましょう。</p>',
    'hu': '<p>Ötvözd az <code>order</code> és az <code>align-self</code> tulajdonságok erejét, hogy a békák elérjék úticéljukat.</p>',
    'eo': '<p>Kombinu <code>order</code> kun <code>align-self</code> por helpi la ranojn iri al iliaj cellokoj.</p>',
    'sv': '<p>Kombinera <code>order</code> och <code>align-self</code> för att hjälpa grodorna till sina blomblad.</p>'
  }),
  board: 'ygygg',
  selector: '> .yellow',
  style: window.kieker.instrumentMethod({ 'align-self': 'flex-end', 'order': '2' }),
  before: "#pond {\n  display: flex;\n  align-items: flex-start;\n}\n\n.yellow {\n",
  after: "}"
}), window.kieker.instrumentMethod({
  name: 'flex-wrap 1',
  instructions: window.kieker.instrumentMethod({
    'en': '<p>Oh no! The frogs are all squeezed onto a single row of lilypads. Spread them out using the <code>flex-wrap</code> property, which accepts the following values:</p><ul><li><code>nowrap</code>: Every item is fit to a single line.</li><li><code>wrap</code>: Items wrap around to additional lines.</li><li><code>wrap-reverse</code>: Items wrap around to additional lines in reverse.</li></ul>',
    'de': '<p>Oh nein! Alle Fr&ouml;sche sind in eine Zeile Seerosenbl&auml;tter gequetscht. Verteile sie mit der <code>flex-wrap</code>-Eigenschaft, welche die folgenden Werte akzeptiert:</p><ul><li><code>nowrap</code>: Jedes Element in einer eigenen Zeile platzieren.</li><li><code>wrap</code>: Elemente auf zus&auml;tzliche Zeilen umbrechen.</li><li><code>wrap-reverse</code>: Elemente in umgekehrter Reihenfolge auf zus&auml;tzliche Zeilen umbrechen.</li></ul>',
    'pt-br': '<p>Ah, não! Os sapos estão todos apertados em uma única linha de vitórias-régias. Espalhe-os usando a propriedade <code>flex-wrap</code>, que aceita os seguintes valores:</p><ul><li><code>nowrap</code>: Todos os itens são apertados em uma única linha.</li><li><code>wrap</code>: Itens se separam em linhas adicionais.</li><li><code>wrap-reverse</code>: Itens se separam em linhas adicionais em reverso.</li></ul>',
    'es': '<p>¡Oh, no! Todas las ranas están apretadas en una sola fila de hojas de lirio. Manos a la obra, vamos a distribuirlas correctamente usando la propiedad <code>flex-wrap</code>, la cual acepta los siguientes valores:</p><ul><li><code>nowrap</code>: Cada elemento se ajusta en una sola línea.</li><li><code>wrap</code>: los elementos se envuelven alrededor de líneas adicionales.</li><li><code>wrap-reverse</code>: Los elementos se envuelven alrededor de líneas adicionales en reversa.</li></ul>',
    'fr': '<p>Oh non! Les grenouilles sont écrasées dans une seule rangée de nénuphars. Distribuez-les en utilisant la propriété <code>flex-wrap</code>, qui accepte les valeurs suivantes&nbsp;:</p><ul><li><code>nowrap</code>&nbsp;: Tous les éléments sont tenus sur une seule ligne.</li><li><code>wrap</code>&nbsp;: Les éléments s\'enveloppent sur plusieurs lignes au besoin.</li><li><code>wrap-reverse</code>&nbsp;: Les éléments s\'enveloppent sur plusieurs lignes dans l\'ordre inversé.</li></ul>',
    'ru': '<p>О нет! Лягушат сплющило на одном ряду лилий. Раздвинь их с помощью свойства <code>flex-wrap</code>, которое принимает следующие значения:</p><ul><li><code>nowrap</code>: Размеры элементов устанавливаются автоматически, чтоб они поместились в один ряд.</li><li><code>wrap</code>: Элементы автоматически переносятся на новую строку.</li><li><code>wrap-reverse</code>: Элементы автоматически переносятся на новую строку, но строки расположены в обратном порядке.</li></ul>',
    'fa': '<p>همه قورباغه ها بر روی یک سطر از نیلوفر های آبی به صورت فشرده نشسته اند . با استفاده از خاصیت <code>flex-wrap</code> با آنها کمک کنید, این خاصیت مقادیر ریر را می پذیرد:</p><ul><li><code>nowrap</code>:  این مقدار پیشفرض است و تمامی آیتم ها در یک خط و در کنار هم قرار می‌گیرند.</li><li><code>wrap</code>:  با استفاده از این مقدار آیتم ها در چند خط قرار میگیرند.</li><li><code>wrap-reverse</code>: ین مقدار شبیه به wrap است اما به جای اینکه چیدمان آیتم ها از بالا به پایین باشد از پایین به بالا است.</li></ul>',
    'zh-cn': '<p>哦不！这些青蛙都挤到一行了。用<code>flex-wrap</code>属性把他们分散看。这个属性接受这些值：</p><ul><li><code>nowrap</code>: 所有的元素都在一行。</li><li><code>wrap</code>: 元素自动换成多行。</li><li><code>wrap-reverse</code>: 元素自动换成逆序的多行</li></ul>',
    'zh-tw': '<p>哦不！這些青蛙都擠到一行了。用<code>flex-wrap</code>屬性把他們分散看。這個屬性接受這些值：</p><ul><li><code>nowrap</code>: 所有的元素都在一行。</li><li><code>wrap</code>: 元素自動換成多行。</li><li><code>wrap-reverse</code>: 元素自動換成逆序的多行</li></ul>',
    'tr': '<p>Olamaz! Tüm kurbağalar tek sıra nilüfer yapraklarına sıkıştılar. <code>flex-wrap</code> kuralını kullanarak onları dağıtın. Bu kural şu değerleri alır:</p><ul><li><code>nowrap</code>: Tüm öğeler tek satıra sığar.</li><li><code>wrap</code>: Öğeler satırlara bölünür.</li><li><code>wrap-reverse</code>: Öğeler satırlara ters sırada bölünür.</li></ul>',
    'it': '<p>Oh no! Le rane sono ora tutte schiacciate in una sola riga di ninfee. Dirigile al loro posto utilizzando <code>flex-wrap</code>, la quale accetta i seguenti valori:</p><ul><li><code>nowrap</code>: Ogni elemento viene sistemato nella stessa riga.</li><li><code>wrap</code>: Gli elementi vengono sistemati su piu\' righe se non ci stanno in una sola.</li><li><code>wrap-reverse</code>: Gli elementi vengono disposti su piu\' linee in ordine inverso.</li></ul>',
    'ko': '<p>오 이런! 개구리들이 한 줄 위에 비좁게 앉아있네요. 다음의 값들을 인자로 받는 <code>flex-wrap</code> 속성을 사용하여 개구리들이 넓게 앉을 수 있도록 해주세요:</p><ul><li><code>nowrap</code>: 모든 요소들을 한 줄에 정렬합니다.</li><li><code>wrap</code>: 요소들을 여러 줄에 걸쳐 정렬합니다.</li><li><code>wrap-reverse</code>: 요소들을 여러 줄에 걸쳐 반대로 정렬합니다.</li></ul>',
    'lt': '<p>O ne! Varlytės susispaudė vienoje lelijų lapų eilėje. Paskirstykite jas taip, kad kiekviena turėtų savo lelijos lapą. Naudokite komandą <code>flex-wrap</code>, kuri reaguoja į šias vertes:</p><ul><li><code>nowrap</code>: Visi elementai sutalpinami vienoje eilutėje.</li><li><code>wrap</code>: Elementai talpinami keliose eilutėse.</li><li><code>wrap-reverse</code>: Elementai talpinami keliose eilutėse atvirkštine tvarka.</li></ul>',
    'vi': '<p>Ồ không! Những chú ếch đều được dồn vào một hàng duy nhất theo các chiếc lá súng. Tách rời chúng ra bằng cách sử dụng <code>flex-wrap</code>, mà chấp nhận các giá trị sau:</p><ul><li><code>nowrap</code>: Mỗi hạng mục được dồn vào một hàng duy nhất.</li><li><code>wrap</code>: Các hạng mục quấn xung quanh để tạo thêm dòng.</li><li><code>wrap-reverse</code>: Các hạng mục quấn xung quanh để tạo thêm dòng ngược lại.</li></ul>',
    'pl': '<p>O, nie! Żabki są ściśnięte w jednym wierszu. Rozprosz je przy pomocy własności <code>flex-wrap</code>, która przyjmue wartości:</p><ul><li><code>nowrap</code>: Każdy element dopasowuje się do pojedynczego wiersza.</li><li><code>wrap</code>: Elementy wystające przechodzą do kolejnych linii.</li><li><code>wrap-reverse</code>: Elementy wystające do kolejnych linii w odwrotnej kolejności.</li></ul>',
    'cs': '<p>Ale ne! Všechny žabky se tísní na jednom řádku. Rozprostřete je vlastností <code>flex-wrap</code>, která nabývá následujících hodnot:</p><ul><li><code>nowrap</code>: Všechny prvky na jednen řádek.</li><li><code>wrap</code>: Umožňuje zalomení na více řádků.</li><li><code>wrap-reverse</code>: Umožňuje zalomení, ale v opačném směru.</li></ul>',
    'ja': '<p>おやおや、カエルたちが一列の蓮の葉の上で窮屈そうにしていますね。<code>flex-wrap</code>プロパティーを使って、彼らを広げてあげてください。このプロパティーは以下の値を取ります。</p><ul><li><code>nowrap</code>: 全てのアイテムは、ひとつの行にフィットします。</li><li><code>wrap</code>: アイテムは他の行へ折り返します。</li><li><code>wrap-reverse</code>: アイテムは逆順になって他の行へ折り返します。</li></ul>',
    'hu': '<p>Jajj, ne! A békák mind rápréselődtek egyetlen sor tündérrózsára. Oszlasd el őket a <code>flex-wrap</code> tulajdonság használatával, amely a következő értékeket veheti fel:</p><ul><li><code>nowrap</code>: Minden elem egyetlen sorba tömörödik.</li><li><code>wrap</code>: Az elemek további sorokba törnek.</li><li><code>wrap-reverse</code>: Az elemek további sorokba törnek fordított irányban.</li></ul>',
    'eo': '<p>Ve! Ĉiuj ranoj estas premitaj sur nuran vicon de akvolilifolioj. Sternu ilin pere de la <code>flex-wrap</code> trajto, kiu akceptas la sekvajn valorojn:</p><ul><li><code>nowrap</code>: Ĉiuj elementoj laŭmezuras al unuopa linio.</li><li><code>wrap</code>: Elementoj faldas ĉirkaŭe al pluaj linioj.</li><li><code>wrap-reverse</code>: Elementoj faldas ĉirkaŭe al pluaj linioj je inversa ordo.</li></ul>',
    'sv': '<p>Åh nej! Alla grodorna är ihopklämnda på en och samma rad. Sprid ut dom genom att använda <code>flex-wrap</code>, vilket accepterar följande värden:</p><ul><li><code>nowrap</code>: Alla objekt är placerade på en enkel rad.</li><li><code>wrap</code>: Objekten spiller över till flera rader.</li><li><code>wrap-reverse</code>: Objekten splller över till flera rader i omvänd ordning.</li></ul>'
  }),
  board: 'ygggggr',
  style: window.kieker.instrumentMethod({ 'flex-wrap': 'wrap' }),
  before: "#pond {\n  display: flex;\n",
  after: "}"
}), window.kieker.instrumentMethod({
  name: 'flex-wrap 2',
  instructions: window.kieker.instrumentMethod({
    'en': '<p>Help this army of frogs form three orderly columns using a combination of <code>flex-direction</code> and <code>flex-wrap</code>.</p>',
    'de': '<p>Hilf dieser Frosch-Armee, mit <code>flex-direction</code> und <code>flex-wrap</code> drei ordentliche Spalten zu formen.</p>',
    'pt-br': '<p>Ajude esse exército de sapos a formar três colunas ordenadas usando uma combinação de <code>flex-direction</code> e <code>flex-wrap</code>.</p>',
    'es': '<p>Ayuda a este ejercito de ranas a ordenarse en tres columnas usando una combinación de <code>flex-direction</code> y <code>flex-wrap</code>.</p>',
    'fr': '<p>Aidez cette armée de grenouille à former trois belles colonnes en utilisant une combinaison de <code>flex-direction</code> et <code>flex-wrap</code>.</p>',
    'ru': '<p>Помоги этой армии лягушат выстроиться в три колонки с помощью комбинации <code>flex-direction</code> и <code>flex-wrap</code>.</p>',
    'fa': '<p>به ارتش قورباغه ها کمک کنید تا به صورت منظم در ستون های خود قرار بگیرند با استفاده از خاصیت های <code>flex-direction</code> و <code>flex-wrap</code> این کار را انجام دهید.</p>',
    'zh-cn': '<p>帮这些青蛙们排成整齐的三列。使用<code>flex-direction</code>和<code>flex-wrap</code>的组合。</p>',
    'zh-tw': '<p>幫這些青蛙們排成整齊的三列。使用<code>flex-direction</code>和<code>flex-wrap</code>的組合。</p>',
    'tr': '<p><code>flex-direction</code> ve <code>flex-wrap</code> kombinasyonunu kullanarak bu kurbağa ordusunun üçlü sıralı düzene girmesine yardımcı olun.</p>',
    'it': '<p>Aiuta questo gruppo di rane a disporsi in tre colonne ordinate usando una combinazione di <code>flex-direction</code> e <code>flex-wrap</code>.</p>',
    'ko': '<p><code>flex-direction</code>과 <code>flex-wrap</code>을 사용하여 개구리들이 세 column에 정렬할 수 있도록 도와주세요.</p>',
    'lt': '<p>Padėkite šiai varlyčių armijai išsirikiuoti trimis tvarkingais stulpeliais naudodami <code>flex-direction</code> ir <code>flex-wrap</code> komandų kombinaciją.</p>',
    'vi': '<p>Giúp đội quân ếch xếp thành ba hàng trật tự bằng cách kết hợp <code>flex-direction</code> và <code>flex-wrap</code>.</p>',
    'pl': '<p>Pomóż tej zgrai żabek utworzyć trzy uporządkowane kolumny używając własności <code>flex-direction</code> oraz <code>flex-wrap</code>.</p>',
    'cs': '<p>Pomozte žabkám utvořiy tři zástupy pomocí <code>flex-direction</code> a <code>flex-wrap</code>.</p>',
    'ja': '<p><code>flex-direction</code>と<code>flex-wrap</code>を使って、このカエルの大群がきちんと三列に並ぶようにしてあげてください。</p>',
    'hu': '<p>Segíts ezt a békahadsereget, hogy három szabályos oszlop alakzatba rendeződjenek a <code>flex-direction</code> és a <code>flex-wrap</code> használatának ötvözésével.</p>',
    'eo': '<p>Helpu tiun ĉi aron da ranoj formi tri ordigotajn kolumojn uzante kombinon de <code>flex-direction</code> kaj <code>flex-wrap</code>.</p>',
    'sv': '<p>Hjälp en hel drös av grodor att ställa sig i tre raka kolumner genom att använda en kombination av <code>flex-direction</code> och <code>flex-wrap</code>.</p>'
  }),
  board: 'gggggrrrrryyyyy',
  style: window.kieker.instrumentMethod({ 'flex-direction': 'column', 'flex-wrap': 'wrap' }),
  before: "#pond {\n  display: flex;\n",
  after: "}"
}), window.kieker.instrumentMethod({
  name: 'flex-flow 1',
  instructions: window.kieker.instrumentMethod({
    'en': '<p>The two properties <code>flex-direction</code> and <code>flex-wrap</code> are used so often together that the shorthand property <code>flex-flow</code> was created to combine them. This shorthand property accepts the value of one of the two properties separated by a space.</p><p>For example, you can use <code>flex-flow: row wrap</code> to set rows and wrap them.</p><p>Try using <code>flex-flow</code> to repeat the previous level.</p>',
    'de': '<p>Die beiden Eigenschaften <code>flex-direction</code> und <code>flex-wrap</code> werden so oft gemeinsam verwendet, dass sie &uuml;ber die Kurzschreibweise <code>flex-flow</code> kombiniert werden k&ouml;nnen. Diese akzeptiert, durch ein Leerzeichen getrennt, die Werte beider Eigenschaften.</p><p>Du kannst zum Beispiel <code>flex-flow: row wrap</code> benutzen, um umbrechende Zeilen zu verwenden.</p><p>Versuche das vorige Level einmal mit <code>flex-flow</code>.</p>',
    'pt-br': '<p>As duas propriedades <code>flex-direction</code> e <code>flex-wrap</code> são usadas tão frequentemente juntas que uma propriedade abreviada <code>flex-flow</code> foi criada para combiná-las. Essa propriedade aceita o valor das duas propriedades separados por um espaço.</p><p>Por examplo, você pode usar <code>flex-flow: row wrap</code> para aplicar a direção de linha e quebrar em múltiplas linhas.</p><p>Tente usar <code>flex-flow</code> para refazer o nível anterior.</p>',
    'es': '<p>Las dos propiedades <code>flex-direction</code> y <code>flex-wrap</code> son usadas a menudo en conjunto con la propiedad abreviada <code>flex-flow</code>, la cual fue creada para combinarlas. Esta propiedad abreviada, acepta un valor de cada una separada por un espacio</p><p>Por ejemplo, puedes usar <code>flex-flow</code> para establecer filas y envolverlas.</p><p>Trata de usar <code>flex-flow</code> para volver a realizar el nivel anterior.</p>',
    'fr': '<p>Les deux propriétés <code>flex-direction</code> et <code>flex-wrap</code> sont utilisées tellement souvent ensembles que le raccourci <code>flex-flow</code> a été créé pour les combiner. Ce raccourci accepte les valeurs des deux propriétés séparées par un espace.</p><p>Par exemple, vous pouvez utiliser <code>flex-flow: row wrap</code> pour configurer les colonnes et les faire s\'envelopper.</p><p>Essayez d\'utiliser <code>flex-flow</code> pour répéter le niveau précédent.</p>',
    'ru': '<p>Два свойства <code>flex-direction</code> и <code>flex-wrap</code> используются так часто вместе, что было создано свойство <code>flex-flow</code> для их комбинирования. Это свойство принимает значения двух этих свойств, разделеные пробелом.</p><p>Например, ты можешь использовать <code>flex-flow: row wrap</code>, чтоб элементы располагались в ряд и автоматически переносились на новую строку.</p><p>Попробуй использовать <code>flex-flow</code>, чтоб повторить предыдущий уровень.</p>',
    'fa': '<p>مطمئنا با قابیل مختصر نویسی در <span class="en-font">css</span> آشنا هستید شما می تواندی خاصیت های <code>flex-direction</code> و <code>flex-wrap</code> را در خاصیت <code>flex-flow</code> بنویسید.</p><p>برای مثال, شما می توانید برای این خاصیت به این صورت <code>flex-flow: row wrap</code> مقدار دهید.</p><p>دوباره برای مرحله قبل از خاصیت <code>flex-flow</code> استفاده کنید.</p>',
    'zh-cn': '<p><code>flex-direction</code>和<code>flex-wrap</code>两个属性经常会一起使用。所以有缩写属性<code>flex-flow</code>。这个缩写属性接受两个属性的值，两个值中间以空格隔开。</p><p>举个例子，你可以用<code>flex-flow: row wrap</code>。</p><p>试着用<code>flex-flow</code>来重复上一关的任务</p>',
    'zh-tw': '<p><code>flex-direction</code>和<code>flex-wrap</code>兩個屬性經常會一起使用。所以有縮寫屬性<code>flex-flow</code>。這個縮寫屬性接受兩個屬性的值，兩個值中間一空格隔開。</p><p>舉個例子，你可以用<code>flex-flow: row wrap</code>。</p><p>試着用<code>flex-flow</code>來重復上一關的任務</p>',
    'tr': '<p><code>flex-direction</code> ve <code>flex-wrap</code> kuralları, <code>flex-flow</code> kısa yazım kuralı ile birlikte yazılabilirler. Bu kısa yazım kuralı, iki kuralın değerlerini aralarında boşluk ile birlikte alır.</p><p>Örneğin, <code>flex-flow: row wrap</code> kuralı ile row ve wrap değerlerini aynı anda verebilirsiniz.</p><p><code>flex-flow</code> kuralını kullanarak bir önceki seviyeyi tekrar edin.</p>',
    'it': '<p>Le due proprieta\' <code>flex-direction</code> e <code>flex-wrap</code> sono usate cosi\' di frequente che e\' stata creata la proprieta\' <code>flex-flow</code> la quale combina le due assieme. Questa proprieta\' accetta un valore per ognuna delle due, separati da uno spazio.</p><p>Per esempio puoi utilizzare <code>flex-flow: row wrap</code> per impostare righe e wrap.</p><p>Ripeti il livello precedente utilizzando <code>flex-flow</code>.</p>',
    'ko': '<p><code>flex-direction</code>과 <code>flex-wrap</code>이 자주 같이 사용되기 때문에, <code>flex-flow</code>가 이를 대신할 수 있습니다. 이 속성은 공백문자를 이용하여 두 속성의 값들을 인자로 받습니다.</p><p>예를 들어, 요소들을 가로선 상의 여러줄에 걸쳐 정렬하기 위해 <code>flex-flow: row wrap</code>을 사용할 수 있습니다.</p><p><code>flex-flow</code>를 사용하여 이전 단계를 반복해보세요.</p>',
    'lt': '<p>Dvi komandos, <code>flex-direction</code> ir <code>flex-wrap</code>, kartu yra naudojamos taip dažnai, kad buvo sukurta sutrumpinta komanda <code>flex-flow</code>, kuri apjungė jas abi. Ši sutrumpinta komanda reaguoja į dvi atskirų komandų vertes atskirtas tarpu.</p><p>Pavyzdžiui, galite naudoti <code>flex-flow: row wrap</code>, kad nustatytumėte eilučių rikiavimo būdą ir talpintumėte elementus daugiau nei vienoje eilutėje.</p><p>Pabandykite naudoti <code>flex-flow</code>, kad pasiektumėte ankstesnio lygio rezultatą.</p>',
    'vi': '<p>Cả hai từ <code>flex-direction</code> và <code>flex-wrap</code> thường được sử dụng với nhau vì thế từ viết tắt <code>flex-flow</code> được tạo ra để kết hợp chúng. Từ viết tắt này chấp nhận giá trị của một trong hai thuộc tính ngăn cách bởi một không gian.</p><p>Ví dụ, bạn có thể sử dụng <code>flex-flow: row wrap</code> để thiết lập hàng ngang và quấn xung quanh chúng.</p><p>Thử sử dụng <code>flex-flow</code> để lặp lại cấp độ trước đó.</p>',
    'pl': '<p>Jednoczesne zastosowanie własności <code>flex-direction</code> i <code>flex-wrap</code> występuje bardzo często, dlatego też utworzono własność skrótową <code>flex-flow</code>. Przyjmuje ona dwie wartości rozdzielone spacją.</p><p>Na przykład: wpisując <code>flex-flow: row wrap</code> uzyskamy efekt ułożenia elementów w wierszu i zawijanie ich do kolejnych linii w przypadku gdy któryś wystawałby poza kontener.</p><p>Spróbuj powtórzyć efekt z poprzedniego zadania przy pomocy <code>flex-flow</code>.</p>',
    'cs': '<p>Protože vlastnosti <code>flex-direction</code> a <code>flex-wrap</code> se často používají najednou, byla přidána vlastnost <code>flex-flow</code>, která je kombinuje. Tato vlastnost akceptuje hodnoty obou, oddělené mezerou.</p><p>Například můžete napsat <code>flex-flow: row wrap</code> pro zalamování ve sloupcích.</p><p>Zkuste nyní předchozí úkol vyřešit pomocí <code>flex-flow</code>.</p>',
    'ja': '<p><code>flex-direction</code>と<code>flex-wrap</code>の二つのプロパティーはよく一緒に使われます。そこで、これらを統合するショートハンドプロパティー<code>flex-flow</code>が作られました。このショートハンドプロパティーは空白文字で分割した二つのプロパティーの値を受け付けます。</p><p>例えば、<code>flex-flow: row wrap</code>とすることで、並び方と折り返し方を指定することができます。</p><p>試しに、<code>flex-flow</code>を使ってさっきの問題をやり直してみましょう。</p>',
    'hu': '<p>A <code>flex-direction</code> és a <code>flex-wrap</code> tulajdonságok olyan gyakran használatosak együtt, hogy létrejött a rövidítésükként és ötvözésükként szolgáló <code>flex-flow</code> tulajdonság. Ez az egyszerűsített tulajdonság a két másik tulajdonság értékei közül kaphat értékeket, melyeket egymástól space (szóköz) választ el.</p><p>Például használhatod a <code>flex-flow: row wrap</code> kódot, hogy betördelt sorokat kapj.</p><p>Próbáld ki a <code>flex-flow</code> használatát az előző feladvány megoldására.</p>',
    'eo': '<p>La du trajtoj <code>flex-direction</code> kaj <code>flex-wrap</code> kune uzatas tiom frekvente kiom la mallongiga trajto <code>flex-flow</code> estis kreata por unuigi ilin. Tiu mallongiga trajto permesas la valoron de unu el la du trajtoj apartigataj per spaco.</p><p>Ekzemple, oni povuzas <code>flex-flow: row wrap</code> por meti viciojn kaj faldi ilin.</p><p>Provu uzi <code>flex-flow</code> por ripeti la antaŭan nivelon.</p>',
    'sv': '<p>De två attributen <code>flex-direction</code> och <code>flex-wrap</code> används så ofta tillsammans att en kort version kallad <code>flex-flow</code> skapades för att kombinera dem. Denna korta version accepterar värdena från de två attributen separerade med ett blanksteg.</p><p>Till exempel kan du använda <code>flex-flow: row wrap</code> för att sätta rader och få dom att flöda över.</p><p>Testa att använda <code>flex-flow</code> för att repetera den föregående nivån.</p>'
  }),
  board: 'gggggrrrrryyyyy',
  style: window.kieker.instrumentMethod({ 'flex-flow': 'column wrap' }),
  before: "#pond {\n  display: flex;\n",
  after: "}"
}), window.kieker.instrumentMethod({
  name: 'align-content 1',
  instructions: window.kieker.instrumentMethod({
    'en': '<p>The frogs are spread all over the pond, but the lilypads are bunched at the top. You can use <code>align-content</code> to set how multiple lines are spaced apart from each other. This property takes the following values:</p><ul><li><code>flex-start</code>: Lines are packed at the top of the container.</li><li><code>flex-end</code>: Lines are packed at the bottom of the container.</li><li><code>center</code>: Lines are packed at the vertical center of the container.</li><li><code>space-between</code>: Lines display with equal spacing between them.</li><li><code>space-around</code>: Lines display with equal spacing around them.</li><li><code>stretch</code>: Lines are stretched to fit the container.</li></ul><p>This can be confusing, but <code>align-content</code> determines the spacing between lines, while <code>align-items</code> determines how the items as a whole are aligned within the container. When there is only one line, <code>align-content</code> has no effect.</p>',
    'de': '<p>Die Fr&ouml;sche sind &uuml;ber den gesamten Teich verteilt, aber die Seerosenbl&auml;tter befinden sich alle am oberen Ende. Du kannst <code>align-content</code> verwenden, um festzulegen, wie der Abstand zwischen mehreren Zeilen aussehen soll. Diese Eigenschaft akzeptiert die folgenden Werte:</p><ul><li><code>flex-start</code>: Zeilen oben im Container ausrichten.</li><li><code>flex-end</code>: Zeilen unten im Container ausrichten.</li><li><code>center</code>: Zeilen in der Mitte des Containers ausrichten.</li><li><code>space-between</code>: Zeilen mit gleichm&auml;&szlig;igem Innenabstand anordnen.</li><li><code>space-around</code>: Zeilen mit gleichm&auml;&szlig;igem Au&szlig;enabstand anordnen.</li><li><code>stretch</code>: Zeilen strecken, um den Container auszuf&uuml;llen.</li></ul><p>Das kann etwas verwirrend sein, aber <code>align-content</code> beeinflusst den Abstand zwischen den Zeilen, wobei <code>align-items</code> festlegt, wie alle Elemente als Ganzes im Container angeordnet werden. Gibt es nur eine Zeile, so hat <code>align-content</code> keine Auswirkung.</p>',
    'pt-br': '<p>Os sapos estão espalhados por toda a lagoa, mas as vitórias-régias estão agrupadas no topo. Você pode usar <code>align-content</code> para definir como múltiplas linhas devem ser espaçadas uma das outras. Essa propriedade recebe os seguintes valores:</p><ul><li><code>flex-start</code>: Linhas são agrupadas no topo do container.</li><li><code>flex-end</code>: Linhas são agrupadas no fundo do container.</li><li><code>center</code>:Linhas são agrupadas no centro vertical do container.</li><li><code>space-between</code>: Linhas são posicionadas com espaço igual entre elas.</li><li><code>space-around</code>: Linhas são posicionadas com espaço igual em torno delas.</li><li><code>stretch</code>: Linhas se esticam para preencher o container.</li></ul><p>Isso pode ser confuso, mas <code>align-content</code> determina o espaçamento entre linhas, enquanto <code>align-items</code> determina como as linhas como um todo são alinhadas dentro do container. Quando há só uma linha, <code>align-content</code> não tem nenhum efeito.</p>',
    'es': '<p>Las ranas están repartidas por todo el estanque, pero las hojas de lirio estan agrupadas en la parte superior. Puedes usar <code>align-content</code> para establecer como multiples líneas están separadas una de otra. Esta propiedad acepta los siguientes valores:</p><ul><li><code>flex-start</code>: Las líneas se posicionan en la parte superior del contenedor.</li><li><code>flex-end</code>: Las líneas se posicionan en la parte inferior del contenedor.</li><li><code>center</code>: Las líneas se posicionan en el centro (verticalmente hablando) del contenedor.</li><li><code>space-between</code>: Las líneas se muestran con la misma distancia entre ellas.</li><li><code>space-around</code>: Las líneas se muestran con la misma separación alrededor de ellas.</li><li><code>stretch</code>: Las líneas se estiran para ajustarse al contenedor.</li></ul><p>Esto puede ser confuso, pero <code>align-content</code> determina el espacio entre las líneas, mientras que <code>align-items</code> determina como los elementos en su conjunto están alineados dentro del contenedor. Cuando hay solo una línea, <code>align-content</code> no tiene efecto.</p>',
    'fr': '<p>Les grenouilles sont éparpillées partout dans l\'étang, mais les nénuphars sont amassés dans le haut. Vous pouvez utiliser <code>align-content</code> pour définir comment plusieurs lignes sont espacées de l\'une à l\'autre. Cette propriété prend les valeurs suivantes&nbsp;:</p><ul><li><code>flex-start</code>&nbsp;: Les lignes sont amassées dans le haut du conteneur.</li><li><code>flex-end</code>: Les lignes sont amassées dans le bas du conteneur.</li><li><code>center</code>&nbsp;: Les lignes sont amassées dans le centre vertical du conteneur.</li><li><code>space-between</code>&nbsp;: Les lignes s\'affichent avec un espace égal entre eux.</li><li><code>space-around</code>&nbsp;: Les lignes s\'affichent avec un espace égal autour d\'eux.</li><li><code>stretch</code>&nbsp;: Les lignes sont étirées pour s\'adapter au conteneur.</li></ul><p>Ceci peut être mélangeant, mais <code>align-content</code> détermine l\'espace entre les lignes, alors que <code>align-items</code> détermine comment les éléments dans leur ensemble sont alignées à l\'intérieur du conteneur. Quand il n\'y a qu\'une seule ligne, <code>align-content</code> n\'a aucun effet.</p>',
    'ru': '<p>Лягушат раскидало по всему пруду, но лилии сгруппированы в верхней части. Ты можешь использовать <code>align-content</code>, чтобы указать, как несколько рядов должны отделяться друг от друга. Данное свойство принимает следующие значения:</p><ul><li><code>flex-start</code>: Ряды группируются в верхней части контейнера.</li><li><code>flex-end</code>: Ряды группируются в нижней части контейнера.</li><li><code>center</code>: Ряды группируются вертикально по центру контейнера.</li><li><code>space-between</code>: Ряды отображаются с одинаковыми расстояниями между ними.</li><li><code>space-around</code>: Ряды отображаются с одинаковыми расстояниями вокруг них.</li><li><code>stretch</code>: Ряды растягиваются, чтоб заполнить контейнер равномерно.</li></ul><p>Это может запутатать, но <code>align-content</code> отвечает за расстояние между рядами, в то время как <code>align-items</code> отвечает за то, как элементы в целом будут выровнены в контейнере. Когда только один ряд, <code>align-content</code> ни на что не влияет.</p>',
    'fa': '<p>قورباغه ها در سراسر برکه پخش شده اند, اما نیلوفر های آبی در بالای برکه هستند. شما با استفاده از <code>align-content</code> آن ها را به صورت ردیفی به بالا هدایت کنید. این خاصیت مقادیر زیر را می پذیرد:</p><ul><li><code>flex-start</code>: با این مقدار <span class="en-font">flex-line</span> ها در ابتدای <span class="en-font">flex-container</span> جمع می‌شوند.</li><li><code>flex-end</code>: با این مقدار <span class="en-font">flex-line</span> ها در انتهای <span class="en-font">flex-container</span> جمع می‌شوند.</li><li><code>center</code>: با این مقدار <span class="en-font">flex-line</span> ها در وسط <span class="en-font">flex-container</span> جمع میشوند.</li><li><code>space-between</code>: با این مقدار فضای خالی به طور مساوی بین <span class="en-font">flex line</span> ها توزیع میشود. خط اول در ابتدا و خط آخر در انتهای <span class="en-font">flex container</span> قرار می‌گیرند و بقیه خطوط در بین این ۲ خطر قرار می‌گیرند.</li><li><code>space-around</code>: فضای خالی به طور مساوی بین <span class="en-font">flex-line</span> ها تقسیم می‌شود.</li><li><code>stretch</code>:  با این مقدار <span class="en-font">flex-line</span> ها کشیده می‌شوند و فضای خالی را پر می کنند (این مقدار پیشفرض است).</li></ul>',
    'zh-cn': '<p>青蛙们在池塘里到处都是，然而荷叶都在顶部。你可以使用<code>align-content</code>来决定行与行之间隔多远。这个属性接受这些值：</p><ul><li><code>flex-start</code>: 多行都集中在顶部。</li><li><code>flex-end</code>: 多行都集中在底部。</li><li><code>center</code>: 多行居中。</li><li><code>space-between</code>: 行与行之间保持相等距离。</li><li><code>space-around</code>: 每行的周围保持相等距离。</li><li><code>stretch</code>: 每一行都被拉伸以填满容器。</li></ul><p>这可能有些容易混淆，但<code>align-content</code>决定行之间的间隔，而<code>align-items</code>决定元素整体在容器的什么围着。只有一行的时候<code>align-content</code>没有任何效果。</p>',
    'zh-tw': '青蛙們在池塘裏到處都是，然而荷葉都在頂部。你可以使用<code>align-content</code>來決定行與行之間隔多遠。這個屬性接受這些值:</p><ul><li><code>flex-start</code>: 多行都集中在頂部。</li><li><code>space-between</code>: 行與行之間保持相等距離。</li><li><code>space-around</code>: 每行的周圍保持相等距離。</li><li><code>stretch</code>: 每一行都被拉伸以填滿容器。</li></ul><p>這可能有些容易混淆，但<code>align-content</code>決定行之間的間隔，而<code>align-items</code>決定元素整體在容器的什麼圍着。只有一行的時候<code>align-content</code>沒有任何效果。</p>',
    'tr': '<p>Kurbağalar göle dağılmışlar ama nilüfer yaprakları tepede toplanmışlar. <code>align-content</code> kuralı ile satırları birbirinden ayırabilirsiniz. Bu kural şu değerleri alır:</p><ul><li><code>flex-start</code>: Satırlar flex container\'ın tepesinde toplanır.</li><li><code>flex-end</code>: Satırlar flex container\'ın aşağısında toplanır.</li><li><code>center</code>: Satırlar flex container\'ın dikey ortasında toplanır.</li><li><code>space-between</code>: Satırlar aralarında eşit boşluk kalacak şekilde yayılırlar.</li><li><code>space-around</code>: Satırlar etraflarında eşit boşluk kalacak şekilde yayılırlar.</li><li><code>stretch</code>: Satırlar flex container\'ı kaplamak için uzarlar.</li></ul><p>Bu kafa karıştırıcı olabilir, ama <code>align-content</code> satırlar için aralıkları belirlerken, <code>align-items</code> öğlerin flex container içerisinde beraberce nasıl hizalanacağını belirler. Eğer tek satır varsa, <code>align-content</code> kuralının bir etkisi yoktur.</p>',
    'it': '<p>Le rane sono sparse per tutto il lago mentre le ninfee sono tutte ragruppate in alto. Puoi utilizzare <code>align-content</code> per decidere come le linee verranno distanziate tra di loro. Questa proprieta\' accetta i seguenti valori:</p><ul><li><code>flex-start</code>: Le linee sono raggruppate all\'inizio del contenitore.</li><li><code>flex-end</code>: Le linee sono raggruppate alla fine del contenitore.</li><li><code>center</code>: Le linee vengono centrate verticalmente nel contenitore.</li><li><code>space-between</code>: Le linee occupano tutto lo spazio del contenitore, separate da uguale quantita\' di spazio tra di loro.</li><li><code>space-around</code>: Le linee occupano tutto lo spazio disponibile e vengono separate da uguale quantita\' di spazio attorno a loro.</li><li><code>stretch</code>: Le linee vengono allungate per occupare tutto lo spazio disponibile.</li></ul><p>Questo puo\' confondere ma <code>align-content</code> determina lo spazio tra le linee mentre <code>align-items</code> determina come gli elementi nell\'insieme vengono disposti nel contenitore. Se esiste solo una linea <code>align-content</code> non ha alcun effetto.</p>',
    'ko': '<p>개구리들이 연못의 사방에 퍼져있고, 수련잎은 연못의 위쪽에 모여있습니다. <code>align-content</code>를 사용하여 여러 줄 사이의 간격을 지정할 수 있습니다. 이 속성은 다음의 값들을 인자로 받습니다:</p><ul><li><code>flex-start</code>: 여러 줄들을 컨테이너의 꼭대기에 정렬합니다.</li><li><code>flex-end</code>: 여러 줄들을 컨테이너의 바닥에 정렬합니다.</li><li><code>center</code>: 여러 줄들을 세로선 상의 가운데에 정렬합니다.</li><li><code>space-between</code>: 여러 줄들 사이에 동일한 간격을 둡니다.</li><li><code>space-around</code>: 여러 줄들 주위에 동일한 간격을 둡니다.</li><li><code>stretch</code>: 여러 줄들을 컨테이너에 맞도록 늘립니다.</li></ul><p>이 속성을 사용하는 방법이 어려울 수 있습니다. <code>align-content</code>는 여러 줄들 사이의 간격을 지정하며, <code>align-items</code>는 컨테이너 안에서 어떻게 모든 요소들이 정렬하는지를 지정합니다. 한 줄만 있는 경우, <code>align-content</code>는 효과를 보이지 않습니다.</p>',
    'lt': '<p>Varlytės pasiskirsčiusios po visą tvenkinį, bet lelijų lapai plūduriuoja tvenkinio viršuje. Galite nauoti <code>align-content</code>, kad nustatytumėte kokiais tarpais viena nuo kitos bus atskirtos kelios eilutės. Ši komanda reaguoja į šias vertes:</p><ul><li><code>flex-start</code>: Eilutės yra susitelkusios viršuje.</li><li><code>flex-end</code>: Eilutės yra susitelkusios apačioje.</li><li><code>center</code>: Eilutės yra vertikaliai susitelkusios viduryje.</li><li><code>space-between</code>: Eilutės yra paskirstomos taip, kad tarpai tarp jų būtų vienodi.</li><li><code>space-around</code>: Eilutės paskirstomos taip, kad tarpai aplink jas būtų vienodi.</li><li><code>stretch</code>: Eilutės yra ištempiamos, kad užpildytų supantį elementą.</li></ul><p>Tai gali būti painoka, bet <code>align-content</code> nustato tarpus tarp eilučių, o tuo tarpu <code>align-items</code> nustato kaip elementai kaip visuma yra lygiuojami juos supančiame elemente. Kai atvaizduojama tik viena eilutė, <code>align-content</code> neturi jokio poveikio.</p>',
    'vi': '<p>Những chú ếch đang lan rộng trên cả ao, nhưng các lá súng đang chụm lại ở phía trên. Bạn có thể dùng <code>align-content</code> để thiết lập cách các dòng có khoảng cách xa nhau như thế nào. Từ này có giá trị như sau:</p><ul><li><code>flex-start</code>: Các dòng được dồn về phía trên cùng của hộp chứa.</li><li><code>flex-end</code>: Các dòng được dồn về phía dưới cùng của hộp chứa.</li><li><code>center</code>: Các dòng được dồn về trung tâm của hộp chứa.</li><li><code>space-between</code>: Các dòng được trình bày với khoảng cách bằng nhau giữa chúng.</li><li><code>space-around</code>: Các dòng sẽ được trình bày với khoảng cách bằng nhau xung quanh chúng.</li><li><code>stretch</code>: Các dòng sẽ được kéo dài để phù hợp với hộp chứa.</li></ul><p>Điều này có thể gây nhầm lẫn, nhưng <code>align-content</code> xác định khoảng cách giữa các dòng, trong khi <code>align-items</code> xác định cách các hạng mục như một toàn thể được xếp trong hộp chứa. Khi chỉ có một dòng, <code>align-content</code> không có hiệu lực.</p>',
    'pl': '<p>Żabki rozproszyły się po całym stawie ale listki upchnęły się u góry. Własność <code>align-content</code> pomoże ci ustalić odległość wierszy kontenera od siebie. Własność ta przyjmuje takie wartości:</p><ul><li><code>flex-start</code>: Wiersze upychają u góry kontenera.</li><li><code>flex-end</code>: Wiersze upychają się w dolnej części kontenera.</li><li><code>center</code>: Wiersze upychane są pośrodku kontenera.</li><li><code>space-between</code>: Wiersze wyświetlane są z równymi odstępami.</li><li><code>space-around</code>: Wiersze wyświetlane są z równymi odstępami dookoła.</li><li><code>stretch</code>: Wiersze rozszerzają się tak, aby dopasować się do kontenera.</li></ul><p>Może to być trochę pogmatwane ale <code>align-content</code> określa odstępy między wierszami podczas, gdy <code>align-items</code> określa jak elementy, jako całość, wyrównują się względem kontenera. W przypadku, gdy jest tylko jedna linia, <code>align-content</code> nie przynosi żadnego efektu.</p>',
    'cs': '<p>Žabky se rozprostřely přes celý rybník, ale lekníny jsou všechny nahoře. K nastavení rozmístění řádků v kontejneru slouží <code>align-content</code>. Tato vlastnost má následující hodnoty:</p><ul><li><code>flex-start</code>: Hromadí řádky na horní straně kontejneru.</li><li><code>flex-end</code>: Hromadí řádky na spodní straně kontejneru.</li><li><code>center</code>: Hromadí řádky na svislém středu kontejneru.</li><li><code>space-between</code>: Rozmístí rovnoměrné mezery mezi řádky.</li><li><code>space-around</code>: Rozmístí rovnoměrné mezery kolem řádků.</li><li><code>stretch</code>: Roztáhne řádky, aby vyplnily kontejner.</li></ul><p>Může to být trochu matoucí, ale <code>align-content</code> určuje mezery mezi řádky, zatímco <code>align-items</code> určuje, jak jsou prvky jako celek zarovnány v kontejneru. Pokud je v kontejneru jen jeden řádek, <code>align-content</code> se neuplatní.</p>',
    'ja': '<p>カエルたちが池いっぱいに広がっていますが、蓮の葉は上方に集まっています。複数の行が他の行とどう距離を取り広がるのかを指定するのに、<code>align-content</code>を使うことができます。このプロパティーは以下の値を取ります。</p><ul><li><code>flex-start</code>: 行はコンテナーの上側に詰められます。</li><li><code>flex-end</code>: 行はコンテナーの下側に詰められます。</li><li><code>center</code>: 行はコンテナーの中央に詰められます。</li><li><code>space-between</code>: 行はその間に等しい間隔を空けて表示されます。</li><li><code>space-around</code>: 行はその周囲に等しい間隔を空けて表示されます。</li><li><code>stretch</code>: 行はコンテナーに合うよう引き延ばされます。</li></ul><p>混乱したかもしれませんが、<code>align-content</code>は行間の余白を決めるもので、<code>align-items</code>はコンテナーに含まれるアイテム全体としての配置を決めるものです。一行だけの場合は<code>align-content</code>は何も効果がありません。</p>',
    'hu': '<p>A békák szétszóródtak mindenfelé a tavon, míg a tündérrózsák a tó tetején gyülekeznek. Az <code>align-content</code> használatával beállíthatod, hogy több sor esetén a sorok milyen távolságokra legyenek egymástól. Ez a tulajdonság a következő értékeket veheti fel:</p><ul><li><code>flex-start</code>: A sorok a konténer tetejére rendeződnek.</li><li><code>flex-end</code>: A sorok a konténer aljához rendeződnek.</li><li><code>center</code>: A sorok a konténeren belül függőlegesen középre rendeződnek.</li><li><code>space-between</code>: A sorok közötti tér kiegyenlítetten oszlik el.</li><li><code>space-around</code>: A sorok körülötti tér egyenlően oszlik el.</li><li><code>stretch</code>: A sorok széthúzódnak, hogy kitöltsék a konténerüket.</li></ul><p>Talán kicsit megtévesztő, de az <code>align-content</code> a sorok közötti teret befolyásolja, míg az <code>align-items</code> meghatározza hogy az elemek összessége miképp igazodjon a konténeren belül. Amennyiben csak egyetlen sor van, az <code>align-content</code> nem fejt ki semmilyen hatást.</p>',
    'eo': '<p>La ranoj disvastigas ĉien en la lageto, tamen la akvolilifolioj supren amasiĝas. Vi povas uzi <code>align-content</code> por precizigi kiel multoblaj linioj malproksimigatas unuajn la aliajn. Ĉi tiu trajto prenas la sekvajn valorojn:</p><ul><li><code>flex-start</code>: Linioj aranĝiĝas supren de la ujo.</li><li><code>flex-end</code>: Linioj aranĝiĝas malsupren de la ujo.</li><li><code>center</code>: Linioj aranĝiĝas al la vertikala centro de la ujo.</li><li><code>space-between</code>: Linioj afiŝas kun samaspacoj inter ili.</li><li><code>space-around</code>: Linioj afiŝas kun samaspacoj ĉirkaŭ ili.</li><li><code>stretch</code>: Linioj sterniĝas por ke ili laŭmezure taŭgu la ujon.</li></ul><p>Tiu ago povas esti konfuziganta, sed <code>align-content</code> determinas la spacojn inter linioj, dum <code>align-items</code> determinas kiel la tutaj elementoj kune liniiĝas interne de la ujo. Kiam estas nur unu linio, <code>align-content</code> nenion farus.</p>',
    'sv': '<p>Grodorna är helt utspridda över dammen men blombladen är samlade i toppen. Man kan använda <code>align-content</code> för att sätta hur multipla rader placeras i förhållande till varandra. Denna attribut accepterar följande värden:</p><ul><li><code>flex-start</code>: Rader placeras i toppen av containern.</li><li><code>flex-end</code>: Rader placeras i bottena av containern.</li><li><code>center</code>: Rader placeras vertikalt i mitten av containern.</li><li><code>space-between</code>: Raderna får jämn fördelning av utrymmet mellan dem.</li><li><code>space-around</code>: Raderna får jämn fördelning av utrymmet runt dem.</li><li><code>stretch</code>: Raderna sträcks ut för att fylla containern.</li></ul><p>Detta kan vara förvirrande, men <code>align-content</code> definierar utrymmet mellan raderna medan <code>align-items</code> definerar hur objekt i sin helhet är placerade i själva containern. När det bara finns en rad har <code>align-content</code> ingen effekt.</p>'
  }),
  board: 'ggggggggggggggg',
  classes: window.kieker.instrumentMethod({ '#pond, #background': 'wrap' }),
  style: window.kieker.instrumentMethod({ 'align-content': 'flex-start' }),
  before: "#pond {\n  display: flex;\n  flex-wrap: wrap;\n",
  after: "}"
}), window.kieker.instrumentMethod({
  name: 'align-content 2',
  instructions: window.kieker.instrumentMethod({
    'en': '<p>Now the current has bunched the lilypads at the bottom. Use <code>align-content</code> to guide the frogs there.</p>',
    'de': '<p>Der Strom hat die Seerosenbl&auml;tter nach unten getrieben. Benutze <code>align-content</code>, um die Fr&ouml;sche dorthin zu f&uuml;hren.</p>',
    'pt-br': '<p>Agora a correnteza agrupou as vitórias-régias no fundo. Use <code>align-content</code> para guiar os sapos até lá.</p>',
    'es': '<p>Ahora, la corriente ha agrupado las hojas de lirio en la parte inferior. Usa <code>align-content</code> para guiar las ranas hasta allí.</p>',
    'fr': '<p>Maintenant, le courant a amassé tous les nénuphars dans le bas de l\'étang. Utilisez <code>align-content</code> pour guider les grenouilles vers le bas.</p>',
    'ru': '<p>Теперь течение сгруппировало лилии в нижней части. Используй <code>align-content</code>, чтоб направить лягушат туда.</p>',
    'fa': '<p>در حال حاضر نیلوفر های آبی به پایین برکه حرکت کرده اند. با استفاده از <code>align-content</code> قورباغه ها را هدایت کنید.</p>',
    'zh-cn': '<p>现在水流把荷叶都推到底部了。用<code>align-content</code>来指引青蛙到那里。</p>',
    'zh-tw': '<p>現在水流把荷葉都推到地部了。用<code>align-content</code>來指引青蛙到那裏。</p>',
    'tr': '<p>Bu gölde nilüfer yaprakları aşağıda toplanmışlar. <code>align-content</code>kuralını kullanarak kurbağaları oraya yönlendirin.</p>',
    'it': '<p>Ora la corrente ha trasportato le ninfee alla fine dello stagno. Guida li\' le rane utilizzando <code>align-content</code>.</p>',
    'ko': '<p>이제 연못의 조류에 의해 수련잎들이 연못의 아래쪽으로 떠내려 갔습니다. <code>align-content</code>를 사용하여 개구리들이 수련잎 위로 이동할 수 있도록 도와주세요.</p>',
    'lt': '<p>Dabar srovė nunešė lelijos lapus į tvenkinio apačią. Naudodami <code>align-content</code> padėkite varlytėms pasiekti lelijas.</p>',
    'vi': '<p>Hiện tại những chiếc lá súng ở phía dưới. Sử dụng <code>align-content</code> để hướng dẫn các chú ếch đến chỗ đó.</p>',
    'pl': '<p>Tym razem listki odpłynęły na dół stawu. Przy pomocy <code>align-content</code> pomóż żabkom do nich dotrzeć.</p>',
    'cs': '<p>Teď proud zanesl lekníny dolů. Pomozte žabkám vlastností <code>align-content</code>.</p>',
    'ja': '<p>さて今回は蓮の葉は下へ詰められています。<code>align-content</code>を使って、カエルたちをそこまで導いてください。</p>',
    'hu': '<p>Jelen esetben a tündérrózsák a tó alján csoportosulnak. Használd az <code>align-content</code> tulajdonságot, hogy a békákat odavezesd hozzájuk.</p>',
    'eo': '<p>Nun la akvofluo amasigas la nimfeofoliojn je la fundo. Uzu <code>align-content</code> por gvidi la ranojn tien.</p>',
    'sv': '<p>Nu har blombladen flyttat sig till botten. Använd <code>align-content</code> för att flytta grodorna dit.</p>'
  }),
  board: 'ggggggggggggggg',
  classes: window.kieker.instrumentMethod({ '#pond, #background': 'wrap' }),
  style: window.kieker.instrumentMethod({ 'align-content': 'flex-end' }),
  before: "#pond {\n  display: flex;\n  flex-wrap: wrap;\n",
  after: "}"
}), window.kieker.instrumentMethod({
  name: 'align-content 3',
  instructions: window.kieker.instrumentMethod({
    'en': '<p>The frogs have had a party, but it is time to go home. Use a combination of <code>flex-direction</code> and <code>align-content</code> to get them to their lilypads.</p>',
    'de': '<p>Die Fr&ouml;sche haben eine Party gefeiert, aber nun ist es Zeit, nach Hause zu gehen. Benutze eine Kombination von <code>flex-direction</code> und <code>align-content</code>, um sie zu ihren Seerosenbl&auml;ttern zu f&uuml;hren.</p>',
    'pt-br': '<p>Os sapos fizeram uma festa, mas é hora de ir para casa. Use uma combinação de <code>flex-direction</code> e <code>align-content</code> para levá-los até suas vitórias-régias.</p>',
    'es': '<p>Las ranas han tenido una fiesta, pero es momento de volver a casa. Usa una combinación de <code>flex-direction</code> y <code>align-content</code> para llevarlas a sus hojas de lirio.</p>',
    'fr': '<p>Les grenouilles ont fait la fête, mais elles doivent maintenant retourner à la maison. Utilisez une combinaison de <code>flex-direction</code> et <code>align-content</code> pour les ramener à leurs nénuphars.</p>',
    'ru': '<p>Лягушата были на вечеринке, но уже пора возвращаться домой. Используй комбинацию <code>flex-direction</code> и <code>align-content</code>, чтоб отправить их к своим лилиям.</p>',
    'fa': '<p>قورباغه ها یک مهمونی داشتند, اما الان دیگه زمان رفتن به خانه است. با استفاده از خاصیت های <code>flex-direction</code> و <code>align-content</code> کمک کنید به نیلوفر های آبی خود برسند.</p>',
    'zh-cn': '<p>青蛙们开完了派对，现在该回家了。用<code>flex-direction</code>和<code>align-content</code>的组合来把他们带回各自的家</p>',
    'zh-tw': '<p>青蛙們開完了派對，現在該回家了。用<code>flex-direction</code>和<code>align-content</code>的組合來把他們帶會各自的家</p>',
    'tr': '<p>Kurbağalar partideler, ama eve dönme vakti geldi. <code>flex-direction</code> ve <code>align-content</code> kombinasyonunu kullanarak kurbağaları kendi nilüfer yapraklarına götürün.</p>',
    'it': '<p>Le rane hanno fatto una grande festa ma adesso e\' ora di tornare a casa. Usa  <code>flex-direction</code> e <code>align-content</code> per riportarle verso le ninfee.</p>',
    'ko': '<p>개구리들이 신나는 파티를 가졌습니다. 이제는 집으로 돌아가야할 시간입니다. <code>flex-direction</code>과 <code>align-content</code>를 사용하여 개구리들이 자기 색깔과 같은 수련잎으로 돌아갈 수 있도록 도와주세요.</p>',
    'lt': '<p>Varlytės surengė vakarėlį, tačiau jau laikas keliauti namo. Panaudokite <code>flex-direction</code> ir <code>align-content</code> kombinaciją, kad padėtumėte joms pasiekti savo lelijos lapus.</p>',
    'vi': '<p>Những chú ếch đã có một bữa tiệc, nhưng đã đến lúc để về nhà. Kết hợp từ <code>flex-direction</code> và <code>align-content</code> để đưa chúng về với những chiếc lá súng.</p>',
    'pl': '<p>Żabki zrobiły sobie imprezkę, nadszedł jednak czas na powrót do domu. Przy pomocy własności <code>flex-direction</code> oraz <code>align-content</code> pomóż im dotrzeć do ich listków.</p>',
    'cs': '<p>Žabky oslavovaly, teď je však čas jít domů. Pomozte jim vlastnostmi <code>flex-direction</code> a <code>align-content</code>.</p>',
    'ja': '<p>カエルたちはパーティーを開いていましたが、もう家に帰る時間です。<code>flex-direction</code>と<code>align-content</code>の組み合わせを使って、彼らの蓮の葉まで連れて行ってあげましょう。</p>',
    'hu': '<p>A békák jót buliztak, de ideje hazamenniük. Használd együttesen a <code>flex-direction</code> és az <code>align-content</code> tulajdonságokat, hogy visszajuttasd őket a saját tündérrózsáikra.</p>',
    'eo': '<p>La ranoj havis feston, sed nune ili devu reveni hejmen. Uzu kombinon de <code>flex-direction</code> kaj <code>align-content</code> por ke ili revenu al ilaj akvolilifolioj.</p>',
    'sv': '<p>Det har varit grodfest men nu är det dags att gå hem. Använd en kombination av <code>flex-direction</code> och <code>align-content</code> för att flytta hem dom till sina blomblad.</p>'
  }),
  board: 'rgggyrgggyrgggy',
  classes: window.kieker.instrumentMethod({ '#pond, #background': 'wrap' }),
  style: window.kieker.instrumentMethod({ 'flex-direction': 'column-reverse', 'align-content': 'center' }),
  before: "#pond {\n  display: flex;\n  flex-wrap: wrap;\n",
  after: "}"
}), window.kieker.instrumentMethod({
  name: 'align-content 4',
  instructions: window.kieker.instrumentMethod({
    'en': '<p>Bring the frogs home one last time by using the CSS properties you\'ve learned:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
    'de': '<p>Bringe die Fr&ouml;sche ein letztes Mal mit allen gelernten CSS-Eigenschaften nach Hause:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
    'pt-br': '<p>Leve os sapos para casa uma última vez utilizando as propriedades CSS que você aprendeu:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
    'es': '<p>Trae a las ranas a su casa una vez más usando las propiedades CSS que aprendiste:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
    'fr': '<p>Ramenez les grenouilles à la maison une dernière fois en utilisant les propriétés CSS que vous avez apprises&nbsp;:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
    'ru': '<p>Доставь лягушат по домам в последний раз, используя CSS свойства, которые ты выучил:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
    'fa': '<p>برای آخرین بار با استفاده از <span class="en-font">Css</span> به قورباغه ها کمک کنید تا به مقصد خود برسند. برای انجام این کار از خاصیت های زیر استفاده کنید :</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
    'zh-cn': '<p>用这些你所学的CSS属性，最后一次把青蛙们带回家:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
    'zh-tw': '<p>用這些你所學的CSS屬性，最後一次把青蛙們帶回家:</p></p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
    'tr': '<p>Öğrendiğiniz tüm CSS kurallarını kullanarak kurbağaları son kez evlerine götürün:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
    'it': '<p>Riporta a casa le rane un\'ultima volta utilizzando le proprieta\' CSS che hai imparato:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
    'ko': '<p>지금까지 배운 CSS 속성들을 사용하여 개구리들이 집으로 돌아갈 수 있도록 한번 더 도와주세요:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
    'lt': '<p>Parveskite varlytes namo paskutinį kartą, naudojant CSS komandas, kurias išmokote:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
    'vi': '<p>Đưa những chú ếch về nhà một lần cuối cùng bằng cách sử dụng các từ CSS bạn đã học:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
    'pl': '<p>Zaprowadź żabki do domu ten ostatni raz używając własności CSS, które właśnie poznałeś:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
    'cs': '<p>Ještě jednou pomozte žabkám najít své lekníny CSS vlastnostmi, které jste se naučili:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
    'ja': '<p>これまでに習ったCSSプロパティーを使って、もう一度だけカエルたちを家まで連れていってあげてください。</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
    'hu': '<p>Vidd haza a békákat még egyszer utoljára azon CSS tulajdonságok segítségével, amelyeket eddig tanultál:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
    'eo': '<p>Revenigu la ranojn hejmen por lasta fojo uzante la CSS-ajn trajtojn kiujn vi lernis:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>',
    'sv': '<p>Hjälp grodorna en sista gång genom att använda alla attribut du har lärt dig:</p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code></li></ul>'
  }),
  board: 'rggggyy',
  style: window.kieker.instrumentMethod({ 'flex-direction': 'column-reverse', 'flex-wrap': 'wrap-reverse', 'align-content': 'space-between', 'justify-content': 'center' }),
  before: "#pond {\n  display: flex;\n",
  after: "}"
})]
window.levelWin = window.kieker.instrumentMethod({
  name: 'win',
  instructions: window.kieker.instrumentMethod({
    'en': '<p>You win! Thanks to your mastery of flexbox, you were able to help all of the frogs to their lilypads. Just look how hoppy they are!</p><p>If you found this ribbeting, check out my other projects on my <a href="http://thomaspark.co">blog</a> or <a href="http://twitter.com/thomashpark">Twitter</a>, and be sure to share Flexbox Froggy with your friends!</p>',
    'de': '<p>Gewonnen! Dank deines flexbox-K&ouml;nnens warst du in der Lage, alle Fr&ouml;sche zu ihrem Seerosenblatt zu f&uuml;hren. Sieh dir an wie gl&uuml;cklich sie sind!</p><p>Wenn dir das gefallen hat, schau dir meine anderen Projekte auf meinem <a href="http://thomaspark.co">Blog</a> oder <a href="http://twitter.com/thomashpark">Twitter</a> an, und teile Flexbox Froggy mit deinen Freunden!</p>',
    'pt-br': '<p>Você venceu! Graças à sua maestria de flexbox, você foi capaz de ajudar todos os sapos a chegar até suas vitórias-régias. Veja como eles estão felizes!</p><p>Se você achou isso coaxante, confira meus outros projetos no meu <a href="http://thomaspark.co">blog</a> ou <a href="http://twitter.com/thomashpark">Twitter</a>, e compartilhe Flexbox Froggy com seus amigos!</p>',
    'es': '<p>¡Tú ganas! gracias a tu dominio de flexbox, fuiste capaz de ayudar a todas las ranas a ir a sus hojas de lirio. ¡Basta mirar lo felices que son!</p><p>Si te pareció divertido, revisa otros proyectos en mi <a href="http://thomaspark.co">blog</a> o <a href="http://twitter.com/thomashpark">Twitter</a> y asegurate de compartir Flexbox Froggy con tus amigos.</p>',
    'fr': '<p>Vous avez gagné! Grâce à votre maîtrise des flexbox, vous avez été capable d\'aider toutes les grenouilles à trouver leurs nénuphars. Regardez comment elles sautent de joie!</p><p>Si vous avez trouvé cela amusant, regardez mes autres projets sur mon <a href="http://thomaspark.co">blog</a> ou mon <a href="http://twitter.com/thomashpark">Twitter</a>, et assurez-vous de partager Flexbox Froggy avec vos amis!</p>',
    'ru': '<p>Ты выиграл! Благодарим тебя за мастерство flexbox, ты смог помочь всем лягушатам добраться до их лилий. Просто взгляни, как они счастливы!</p><p>Если тебе понравилось, зацени мои другие проекты в моем <a href="http://thomaspark.co">блоге</a> или <a href="http://twitter.com/thomashpark">твитере</a>, и не забудь поделится этой игрой со своими друзьями!</p>',
    'fa': '<p>شما برنده شدید! به همه قورباغه ها کمک کردید تا به نیلوفر های آبی خود برسند. آن ها خیلی خوشحال هستن و از شما تشکر می کنن!</p><p>برای مشاهده پروژه های دیگر از طریق <a href="http://thomaspark.co">وبلاگ</a> یا <a href="http://twitter.com/thomashpark">تویتتر</a> مرا دنبال کنید, و حتما بازی آموزش فلکس باکس توسط قورباغه را با دوستان خود به اشتراک بگذارید !</p>',
    'zh-cn': '<p>你赢了!正因为你对flexbox的了解，你帮助所有的青蛙回到了他们的荷叶上！看看他们跳得多开心！</p><p>如果你觉得这个网站很有趣，也来看看我<a href="http://thomaspark.co">博客</a>或<a href="http://twitter.com/thomashpark">Twitter</a>上的其他项目，而且记得和朋友分享Flexbox Froggy哦!</p>',
    'zh-tw': '<p>你贏了！正因爲你對flexbox的了解，你幫助所以的青蛙回到了他們的荷葉上！看看他們跳得多開心！</p><p>如果你覺得這個網站有趣，也來看看我<a href="http://thomaspark.co">博客</a>或<a href="http://twitter.com/thomashpark">Twitter</a>上的其他項目，而且記得和朋友分享Flexbox Froggy哦!</p>',
    'tr': '<p>Kazandınız! Flexbox ustalığınız sayesinde bütün kurbağaları nilüfer yapraklarına götürebildik. Bakın, nekadar da mutlular!</p><p>Eğer bunu beğendiyseniz, diğer projelerime <a href="http://thomaspark.co">blog</a> ya da <a href="http://twitter.com/thomashpark">Twitter</a> adreslerinden göz gezdirin, ve Flexbox Froggy oyununu arkadaşlarınızla paylaşın!</p>',
    'it': '<p>Hai vinto! Grazie alla tua conoscenza di flexbox sei riuscito ad aiutare tutte le rane a trovare la loro ninfea. Guarda come sono felici ora!</p><p>Se hai trovato questo gioco interessante, visita il mio <a href="http://thomaspark.co">blog</a> o il profilo  <a href="http://twitter.com/thomashpark">Twitter</a> per aggiornamenti sugli altri miei progetti. Non dimenticare di condividere Flexbox Froggy con i tuoi amici!</p>',
    'ko': '<p>해냈습니다! 당신의 능숙한 Flexbox 솜씨 덕분에 모든 개구리들이 수련잎 위로 돌아가는 것을 도울 수 있었습니다. Froggy와 친구들이 기뻐하고 있군요!</p><p>이 게임이 마음에 드셨다면 이곳에서 제 다른 프로젝트들을 확인해보세요: <a href="http://thomaspark.co">blog</a> or <a href="http://twitter.com/thomashpark">Twitter</a> 친구들과 함께 Flexbox Froggy를 즐기는 것도 잊지 마시고요!</p>',
    'lt': '<p>Jūs laimėjote! Jūsų įvaldyto "flexbox" metodo dėka, sėkmingai pagelbėjote visoms varlytems pasiekti savo lelijos lapus. Tik pažiūrėkite kaip jos šokinėja iš džiaugsmo!</p><p>Jei manote, kad šios pamokos Jums buvo naudingos, užmeskite akį į kitus mano projektus mano <a href="http://thomaspark.co">dienoraštyje</a> ar <a href="http://twitter.com/thomashpark">Twitter</a> paskyroje ir būtinai pasidalinkite "Flexbox Froggy" su draugais!</p>',
    'vi': '<p>Chiến thắng! Nhờ sự thành thạo flexbox của bạn, bạn đã giúp tất cả các chú ếch trở về với những chiếc lá súng của chúng. Nhìn xem chúng hạnh phúc biết bao nhiêu!</p><p>Nếu bạn thấy dự án này lôi cuốn, hãy xem các dự án khác của tôi trên <a href="http://thomaspark.co">blog</a> hoặc là <a href="http://twitter.com/thomashpark">Twitter</a>, và hãy chia sẻ Flexbox Froggy với bạn bè!</p>',
    'pl': '<p>Wygrałeś! Dzięki twemu mistrzostwu w obsłudze flexboxa mogłeś pomóc wszystkim żabkom dotrzeć do swoich listków. Popatrz tylko jakie są szczęśliwe!</p><p>Jeśli spodobała ci się gra obczaj inne moje projekty na moim <a href="http://thomaspark.co">blogu</a> lub koncie <a href="http://twitter.com/thomashpark">Twittera</a>, a także podziel się Flexbox Froggy z przyjaciółmi!</p>',
    'cs': '<p>Vyhráli jste! Svým mistrovským použitím flexboxu jste pomohli všem žabkám najít své lekníny. Podívejte, jak jsou šťastné!</p><p>Jestli se vám hra líbila, podívejte se i na mé další projekty na mém <a href="http://thomaspark.co">blogu</a> nebo na <a href="http://twitter.com/thomashpark">Twitteru</a>, a podělte se o radost z Flexbox Froggy s kamarády!</p>',
    'ja': '<p>やりました！　flexboxを使いこなしてくれてありがとう。カエルたちをちゃんと蓮の葉まで連れて行ってくれました。ほら、すごく嬉しそうにしてますよ！</p><p>楽しんでくれたのなら、<a href="http://thomaspark.co">ブログ</a>や<a href="http://twitter.com/thomashpark">Twitter</a>で私の他のプロジェクトも探してみてください。Flexbox Froggyをお友達にシェアするのもお忘れなく！</p>',
    'hu': '<p>Nyertél! A flexbox szakértelmednek köszönhetően minden békát sikeresen hazajuttattál a tündérrózsájára. Nézd csak, hogy ugrálnak örömükben!</p><p>Ha eljutottál eddig a brekegésig, nézz rá további munkáimra a <a href="http://thomaspark.co">blogomon</a> vagy a <a href="http://twitter.com/thomashpark">Twitteren</a>, és feltétlenül oszd meg a Flexbox Froggy-t a barátaiddal!</p>',
    'eo': '<p>Vi gajnas! Dank\'al via majstreco de flexbox, vi ja kapablis helpi ĉiujn ranojn reveni al iliaj akvolilifolioj. Rigardu kiel ili saltas pro ĝojeco!</p><p>Se vi trovis amuzanta tiun ludon, bonvolu rigardi aliajn projektojn miajn je mia <a href="http://thomaspark.co">blogo</a> aŭ <a href="http://twitter.com/thomashpark">Twitter</a>, kaj bonvolu disdoni Flexbox Froggy-on al tutaj amikoj viaj!</p>',
    'sv': '<p>Grattis, du vann! Tack vare dina mästarkunskaper kring flexbox lyckades du hjälpa alla grodorna till sina blomblad. Se bara hur glada dom är!</p><p>Om du tyckte detta var spännande, spana in mina övriga projekt på min <a href="http://thomaspark.co">blogg</a> eller <a href="http://twitter.com/thomashpark">Twitter</a> och dela gärna Flexbox Froggy med dina vänner!</p>'
  }),
  board: 'gyrgyrgyrgyrgyrgyrgyrgyrg',
  classes: window.kieker.instrumentMethod({ '#pond, #background': 'wrap' }),
  style: window.kieker.instrumentMethod({}),
  before: "#pond {\n  display: flex;\n",
  after: "}"
})
},{"kieker-javascript-advice-environment":2,"kieker-javascript-advice-method":3,"kieker-javascript-core":5}],2:[function(require,module,exports){
'use strict';
var platform = require('platform');
var ENVIRONMENT_TYPE = 'KiekerBrowserEnvironmentRecord';

// Polyfill for Date.now
Date.now = (Date.now || function () {  // thanks IE8
	return new Date().getTime();
});

var currentTime = function () {
	return Date.now().toString();
};

var environment = function (kieker) {
	kieker.sendEnvironment = function () {
		kieker.sendRecord({
			name: platform.name,
			operatingSystemName: platform.os.family,
			operatingSystemVersion: platform.os.version,
			timestamp: currentTime(),
			type: ENVIRONMENT_TYPE,
			version: platform.version
		});
	};

	return kieker;
};

module.exports = {
	default: environment
};

},{"platform":6}],3:[function(require,module,exports){
'use strict';
var main = require('./src/main');

module.exports = {
	default: main
};

},{"./src/main":4}],4:[function(require,module,exports){
var FUNCTION_END_TYPE = 'OperationExecutionRecord';

// Polyfill for Date.now
Date.now = (Date.now || function () {  // thanks IE8
	return new Date().getTime();
});

function isFunction(obj) {
	return Boolean(obj && obj.constructor && obj.call && obj.apply);
}

var currentTime = function () {
	return Date.now().toString();
};

module.exports = function (kieker) {
	var handle = {
		get: function (target, propKey) {
			var originalMethod = target[propKey];
			if (!isFunction(originalMethod)) {
				return originalMethod;
			}

			var methodName = target[propKey].name === '' ? `anonymous<${propKey}>` : target[propKey].name;

			var proxyFunction = function () {
				var args = Array.prototype.slice.call(arguments);

				var tin = currentTime();
				var result = originalMethod.apply(this, args);

				kieker.sendRecord({
					args: args.map(function (item) {
						try {
							return item && String(item);
						} catch (e) {
							return 'unknown';
						}
					}),
					operationSignature: methodName,
					result: result,
					tin: tin,
					tout: currentTime(),
					timestamp: currentTime(),
					type: FUNCTION_END_TYPE
				});

				return result;
			};

			proxyFunction.displayName = methodName;
			return proxyFunction;
		}
	};

	kieker.instrumentMethod = function (target) {
		if (!target) {
			return;
		}

		return new Proxy(target, handle);
	};

	return kieker;
};

},{}],5:[function(require,module,exports){
/* globals window, JSON, Worker */
'use strict';
function assign(target) {
	if (target === null) {
		throw new TypeError('Cannot convert undefined or null to object');
	}

	target = Object(target);
	for (var index = 1; index < arguments.length; index++) {
		var source = arguments[index];
		if (source !== null) {
			for (var key in source) {
				if (Object.prototype.hasOwnProperty.call(source, key)) {
					target[key] = source[key];
				}
			}
		}
	}

	return target;
}

function Kieker() {
	var that = this;
	var worker;

	var initializeWorker = function (config) {
		worker = new Worker(config.workerUrl);
	};

	var initializeClient = function (config) {
		config.aspects.forEach(function (item) {
			item.aspect(that);
		});
	};

	this.config = function (config) {
		var configObj = assign({}, config, {
			aspects: [],
			writers: []
		});

		initializeWorker(configObj);
		initializeClient(configObj);
	};

	this.sendRecord = function (probe) {
		worker.postMessage(['probe', JSON.stringify(probe)]);
	};

	return this;
}

// Singleton
var kieker = new Kieker();

(function () {
	if (window) {
		window.kieker = kieker;
	}
})();
module.exports = kieker;

},{}],6:[function(require,module,exports){
(function (global){
/*!
 * Platform.js <https://mths.be/platform>
 * Copyright 2014-2016 Benjamin Tan <https://demoneaux.github.io/>
 * Copyright 2011-2013 John-David Dalton <http://allyoucanleet.com/>
 * Available under MIT license <https://mths.be/mit>
 */
;(function() {
  'use strict';

  /** Used to determine if values are of the language type `Object`. */
  var objectTypes = {
    'function': true,
    'object': true
  };

  /** Used as a reference to the global object. */
  var root = (objectTypes[typeof window] && window) || this;

  /** Backup possible global object. */
  var oldRoot = root;

  /** Detect free variable `exports`. */
  var freeExports = objectTypes[typeof exports] && exports;

  /** Detect free variable `module`. */
  var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;

  /** Detect free variable `global` from Node.js or Browserified code and use it as `root`. */
  var freeGlobal = freeExports && freeModule && typeof global == 'object' && global;
  if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal)) {
    root = freeGlobal;
  }

  /**
   * Used as the maximum length of an array-like object.
   * See the [ES6 spec](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength)
   * for more details.
   */
  var maxSafeInteger = Math.pow(2, 53) - 1;

  /** Regular expression to detect Opera. */
  var reOpera = /\bOpera/;

  /** Possible global object. */
  var thisBinding = this;

  /** Used for native method references. */
  var objectProto = Object.prototype;

  /** Used to check for own properties of an object. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /** Used to resolve the internal `[[Class]]` of values. */
  var toString = objectProto.toString;

  /*--------------------------------------------------------------------------*/

  /**
   * Capitalizes a string value.
   *
   * @private
   * @param {string} string The string to capitalize.
   * @returns {string} The capitalized string.
   */
  function capitalize(string) {
    string = String(string);
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  /**
   * A utility function to clean up the OS name.
   *
   * @private
   * @param {string} os The OS name to clean up.
   * @param {string} [pattern] A `RegExp` pattern matching the OS name.
   * @param {string} [label] A label for the OS.
   */
  function cleanupOS(os, pattern, label) {
    // Platform tokens are defined at:
    // http://msdn.microsoft.com/en-us/library/ms537503(VS.85).aspx
    // http://web.archive.org/web/20081122053950/http://msdn.microsoft.com/en-us/library/ms537503(VS.85).aspx
    var data = {
      '10.0': '10',
      '6.4':  '10 Technical Preview',
      '6.3':  '8.1',
      '6.2':  '8',
      '6.1':  '7 / Server 2008 R2',
      '6.0':  'Vista / Server 2008',
      '5.2':  'XP 64-bit / Server 2003',
      '5.1':  'XP',
      '5.01': '2000 SP1',
      '5.0':  '2000',
      '4.0':  'NT',
      '4.90': 'ME'
    };
    // Detect Windows version from platform tokens.
    if (pattern && label && /^Win/i.test(os) && !/^Windows Phone /i.test(os) &&
        (data = data[/[\d.]+$/.exec(os)])) {
      os = 'Windows ' + data;
    }
    // Correct character case and cleanup string.
    os = String(os);

    if (pattern && label) {
      os = os.replace(RegExp(pattern, 'i'), label);
    }

    os = format(
      os.replace(/ ce$/i, ' CE')
        .replace(/\bhpw/i, 'web')
        .replace(/\bMacintosh\b/, 'Mac OS')
        .replace(/_PowerPC\b/i, ' OS')
        .replace(/\b(OS X) [^ \d]+/i, '$1')
        .replace(/\bMac (OS X)\b/, '$1')
        .replace(/\/(\d)/, ' $1')
        .replace(/_/g, '.')
        .replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, '')
        .replace(/\bx86\.64\b/gi, 'x86_64')
        .replace(/\b(Windows Phone) OS\b/, '$1')
        .replace(/\b(Chrome OS \w+) [\d.]+\b/, '$1')
        .split(' on ')[0]
    );

    return os;
  }

  /**
   * An iteration utility for arrays and objects.
   *
   * @private
   * @param {Array|Object} object The object to iterate over.
   * @param {Function} callback The function called per iteration.
   */
  function each(object, callback) {
    var index = -1,
        length = object ? object.length : 0;

    if (typeof length == 'number' && length > -1 && length <= maxSafeInteger) {
      while (++index < length) {
        callback(object[index], index, object);
      }
    } else {
      forOwn(object, callback);
    }
  }

  /**
   * Trim and conditionally capitalize string values.
   *
   * @private
   * @param {string} string The string to format.
   * @returns {string} The formatted string.
   */
  function format(string) {
    string = trim(string);
    return /^(?:webOS|i(?:OS|P))/.test(string)
      ? string
      : capitalize(string);
  }

  /**
   * Iterates over an object's own properties, executing the `callback` for each.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} callback The function executed per own property.
   */
  function forOwn(object, callback) {
    for (var key in object) {
      if (hasOwnProperty.call(object, key)) {
        callback(object[key], key, object);
      }
    }
  }

  /**
   * Gets the internal `[[Class]]` of a value.
   *
   * @private
   * @param {*} value The value.
   * @returns {string} The `[[Class]]`.
   */
  function getClassOf(value) {
    return value == null
      ? capitalize(value)
      : toString.call(value).slice(8, -1);
  }

  /**
   * Host objects can return type values that are different from their actual
   * data type. The objects we are concerned with usually return non-primitive
   * types of "object", "function", or "unknown".
   *
   * @private
   * @param {*} object The owner of the property.
   * @param {string} property The property to check.
   * @returns {boolean} Returns `true` if the property value is a non-primitive, else `false`.
   */
  function isHostType(object, property) {
    var type = object != null ? typeof object[property] : 'number';
    return !/^(?:boolean|number|string|undefined)$/.test(type) &&
      (type == 'object' ? !!object[property] : true);
  }

  /**
   * Prepares a string for use in a `RegExp` by making hyphens and spaces optional.
   *
   * @private
   * @param {string} string The string to qualify.
   * @returns {string} The qualified string.
   */
  function qualify(string) {
    return String(string).replace(/([ -])(?!$)/g, '$1?');
  }

  /**
   * A bare-bones `Array#reduce` like utility function.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} callback The function called per iteration.
   * @returns {*} The accumulated result.
   */
  function reduce(array, callback) {
    var accumulator = null;
    each(array, function(value, index) {
      accumulator = callback(accumulator, value, index, array);
    });
    return accumulator;
  }

  /**
   * Removes leading and trailing whitespace from a string.
   *
   * @private
   * @param {string} string The string to trim.
   * @returns {string} The trimmed string.
   */
  function trim(string) {
    return String(string).replace(/^ +| +$/g, '');
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Creates a new platform object.
   *
   * @memberOf platform
   * @param {Object|string} [ua=navigator.userAgent] The user agent string or
   *  context object.
   * @returns {Object} A platform object.
   */
  function parse(ua) {

    /** The environment context object. */
    var context = root;

    /** Used to flag when a custom context is provided. */
    var isCustomContext = ua && typeof ua == 'object' && getClassOf(ua) != 'String';

    // Juggle arguments.
    if (isCustomContext) {
      context = ua;
      ua = null;
    }

    /** Browser navigator object. */
    var nav = context.navigator || {};

    /** Browser user agent string. */
    var userAgent = nav.userAgent || '';

    ua || (ua = userAgent);

    /** Used to flag when `thisBinding` is the [ModuleScope]. */
    var isModuleScope = isCustomContext || thisBinding == oldRoot;

    /** Used to detect if browser is like Chrome. */
    var likeChrome = isCustomContext
      ? !!nav.likeChrome
      : /\bChrome\b/.test(ua) && !/internal|\n/i.test(toString.toString());

    /** Internal `[[Class]]` value shortcuts. */
    var objectClass = 'Object',
        airRuntimeClass = isCustomContext ? objectClass : 'ScriptBridgingProxyObject',
        enviroClass = isCustomContext ? objectClass : 'Environment',
        javaClass = (isCustomContext && context.java) ? 'JavaPackage' : getClassOf(context.java),
        phantomClass = isCustomContext ? objectClass : 'RuntimeObject';

    /** Detect Java environments. */
    var java = /\bJava/.test(javaClass) && context.java;

    /** Detect Rhino. */
    var rhino = java && getClassOf(context.environment) == enviroClass;

    /** A character to represent alpha. */
    var alpha = java ? 'a' : '\u03b1';

    /** A character to represent beta. */
    var beta = java ? 'b' : '\u03b2';

    /** Browser document object. */
    var doc = context.document || {};

    /**
     * Detect Opera browser (Presto-based).
     * http://www.howtocreate.co.uk/operaStuff/operaObject.html
     * http://dev.opera.com/articles/view/opera-mini-web-content-authoring-guidelines/#operamini
     */
    var opera = context.operamini || context.opera;

    /** Opera `[[Class]]`. */
    var operaClass = reOpera.test(operaClass = (isCustomContext && opera) ? opera['[[Class]]'] : getClassOf(opera))
      ? operaClass
      : (opera = null);

    /*------------------------------------------------------------------------*/

    /** Temporary variable used over the script's lifetime. */
    var data;

    /** The CPU architecture. */
    var arch = ua;

    /** Platform description array. */
    var description = [];

    /** Platform alpha/beta indicator. */
    var prerelease = null;

    /** A flag to indicate that environment features should be used to resolve the platform. */
    var useFeatures = ua == userAgent;

    /** The browser/environment version. */
    var version = useFeatures && opera && typeof opera.version == 'function' && opera.version();

    /** A flag to indicate if the OS begins with "Name Version /". */
    var isSpecialCasedOS;

    /* Detectable layout engines (order is important). */
    var layout = getLayout([
      { 'label': 'EdgeHTML', 'pattern': 'Edge' },
      'Trident',
      { 'label': 'WebKit', 'pattern': 'AppleWebKit' },
      'iCab',
      'Presto',
      'NetFront',
      'Tasman',
      'KHTML',
      'Gecko'
    ]);

    /* Detectable browser names (order is important). */
    var name = getName([
      'Adobe AIR',
      'Arora',
      'Avant Browser',
      'Breach',
      'Camino',
      'Epiphany',
      'Fennec',
      'Flock',
      'Galeon',
      'GreenBrowser',
      'iCab',
      'Iceweasel',
      'K-Meleon',
      'Konqueror',
      'Lunascape',
      'Maxthon',
      { 'label': 'Microsoft Edge', 'pattern': 'Edge' },
      'Midori',
      'Nook Browser',
      'PaleMoon',
      'PhantomJS',
      'Raven',
      'Rekonq',
      'RockMelt',
      'SeaMonkey',
      { 'label': 'Silk', 'pattern': '(?:Cloud9|Silk-Accelerated)' },
      'Sleipnir',
      'SlimBrowser',
      { 'label': 'SRWare Iron', 'pattern': 'Iron' },
      'Sunrise',
      'Swiftfox',
      'WebPositive',
      'Opera Mini',
      { 'label': 'Opera Mini', 'pattern': 'OPiOS' },
      'Opera',
      { 'label': 'Opera', 'pattern': 'OPR' },
      'Chrome',
      { 'label': 'Chrome Mobile', 'pattern': '(?:CriOS|CrMo)' },
      { 'label': 'Firefox', 'pattern': '(?:Firefox|Minefield)' },
      { 'label': 'Firefox for iOS', 'pattern': 'FxiOS' },
      { 'label': 'IE', 'pattern': 'IEMobile' },
      { 'label': 'IE', 'pattern': 'MSIE' },
      'Safari'
    ]);

    /* Detectable products (order is important). */
    var product = getProduct([
      { 'label': 'BlackBerry', 'pattern': 'BB10' },
      'BlackBerry',
      { 'label': 'Galaxy S', 'pattern': 'GT-I9000' },
      { 'label': 'Galaxy S2', 'pattern': 'GT-I9100' },
      { 'label': 'Galaxy S3', 'pattern': 'GT-I9300' },
      { 'label': 'Galaxy S4', 'pattern': 'GT-I9500' },
      'Google TV',
      'Lumia',
      'iPad',
      'iPod',
      'iPhone',
      'Kindle',
      { 'label': 'Kindle Fire', 'pattern': '(?:Cloud9|Silk-Accelerated)' },
      'Nexus',
      'Nook',
      'PlayBook',
      'PlayStation 3',
      'PlayStation 4',
      'PlayStation Vita',
      'TouchPad',
      'Transformer',
      { 'label': 'Wii U', 'pattern': 'WiiU' },
      'Wii',
      'Xbox One',
      { 'label': 'Xbox 360', 'pattern': 'Xbox' },
      'Xoom'
    ]);

    /* Detectable manufacturers. */
    var manufacturer = getManufacturer({
      'Apple': { 'iPad': 1, 'iPhone': 1, 'iPod': 1 },
      'Archos': {},
      'Amazon': { 'Kindle': 1, 'Kindle Fire': 1 },
      'Asus': { 'Transformer': 1 },
      'Barnes & Noble': { 'Nook': 1 },
      'BlackBerry': { 'PlayBook': 1 },
      'Google': { 'Google TV': 1, 'Nexus': 1 },
      'HP': { 'TouchPad': 1 },
      'HTC': {},
      'LG': {},
      'Microsoft': { 'Xbox': 1, 'Xbox One': 1 },
      'Motorola': { 'Xoom': 1 },
      'Nintendo': { 'Wii U': 1,  'Wii': 1 },
      'Nokia': { 'Lumia': 1 },
      'Samsung': { 'Galaxy S': 1, 'Galaxy S2': 1, 'Galaxy S3': 1, 'Galaxy S4': 1 },
      'Sony': { 'PlayStation 4': 1, 'PlayStation 3': 1, 'PlayStation Vita': 1 }
    });

    /* Detectable operating systems (order is important). */
    var os = getOS([
      'Windows Phone',
      'Android',
      'CentOS',
      { 'label': 'Chrome OS', 'pattern': 'CrOS' },
      'Debian',
      'Fedora',
      'FreeBSD',
      'Gentoo',
      'Haiku',
      'Kubuntu',
      'Linux Mint',
      'OpenBSD',
      'Red Hat',
      'SuSE',
      'Ubuntu',
      'Xubuntu',
      'Cygwin',
      'Symbian OS',
      'hpwOS',
      'webOS ',
      'webOS',
      'Tablet OS',
      'Linux',
      'Mac OS X',
      'Macintosh',
      'Mac',
      'Windows 98;',
      'Windows '
    ]);

    /*------------------------------------------------------------------------*/

    /**
     * Picks the layout engine from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected layout engine.
     */
    function getLayout(guesses) {
      return reduce(guesses, function(result, guess) {
        return result || RegExp('\\b' + (
          guess.pattern || qualify(guess)
        ) + '\\b', 'i').exec(ua) && (guess.label || guess);
      });
    }

    /**
     * Picks the manufacturer from an array of guesses.
     *
     * @private
     * @param {Array} guesses An object of guesses.
     * @returns {null|string} The detected manufacturer.
     */
    function getManufacturer(guesses) {
      return reduce(guesses, function(result, value, key) {
        // Lookup the manufacturer by product or scan the UA for the manufacturer.
        return result || (
          value[product] ||
          value[/^[a-z]+(?: +[a-z]+\b)*/i.exec(product)] ||
          RegExp('\\b' + qualify(key) + '(?:\\b|\\w*\\d)', 'i').exec(ua)
        ) && key;
      });
    }

    /**
     * Picks the browser name from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected browser name.
     */
    function getName(guesses) {
      return reduce(guesses, function(result, guess) {
        return result || RegExp('\\b' + (
          guess.pattern || qualify(guess)
        ) + '\\b', 'i').exec(ua) && (guess.label || guess);
      });
    }

    /**
     * Picks the OS name from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected OS name.
     */
    function getOS(guesses) {
      return reduce(guesses, function(result, guess) {
        var pattern = guess.pattern || qualify(guess);
        if (!result && (result =
              RegExp('\\b' + pattern + '(?:/[\\d.]+|[ \\w.]*)', 'i').exec(ua)
            )) {
          result = cleanupOS(result, pattern, guess.label || guess);
        }
        return result;
      });
    }

    /**
     * Picks the product name from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected product name.
     */
    function getProduct(guesses) {
      return reduce(guesses, function(result, guess) {
        var pattern = guess.pattern || qualify(guess);
        if (!result && (result =
              RegExp('\\b' + pattern + ' *\\d+[.\\w_]*', 'i').exec(ua) ||
              RegExp('\\b' + pattern + '(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)', 'i').exec(ua)
            )) {
          // Split by forward slash and append product version if needed.
          if ((result = String((guess.label && !RegExp(pattern, 'i').test(guess.label)) ? guess.label : result).split('/'))[1] && !/[\d.]+/.test(result[0])) {
            result[0] += ' ' + result[1];
          }
          // Correct character case and cleanup string.
          guess = guess.label || guess;
          result = format(result[0]
            .replace(RegExp(pattern, 'i'), guess)
            .replace(RegExp('; *(?:' + guess + '[_-])?', 'i'), ' ')
            .replace(RegExp('(' + guess + ')[-_.]?(\\w)', 'i'), '$1 $2'));
        }
        return result;
      });
    }

    /**
     * Resolves the version using an array of UA patterns.
     *
     * @private
     * @param {Array} patterns An array of UA patterns.
     * @returns {null|string} The detected version.
     */
    function getVersion(patterns) {
      return reduce(patterns, function(result, pattern) {
        return result || (RegExp(pattern +
          '(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)', 'i').exec(ua) || 0)[1] || null;
      });
    }

    /**
     * Returns `platform.description` when the platform object is coerced to a string.
     *
     * @name toString
     * @memberOf platform
     * @returns {string} Returns `platform.description` if available, else an empty string.
     */
    function toStringPlatform() {
      return this.description || '';
    }

    /*------------------------------------------------------------------------*/

    // Convert layout to an array so we can add extra details.
    layout && (layout = [layout]);

    // Detect product names that contain their manufacturer's name.
    if (manufacturer && !product) {
      product = getProduct([manufacturer]);
    }
    // Clean up Google TV.
    if ((data = /\bGoogle TV\b/.exec(product))) {
      product = data[0];
    }
    // Detect simulators.
    if (/\bSimulator\b/i.test(ua)) {
      product = (product ? product + ' ' : '') + 'Simulator';
    }
    // Detect Opera Mini 8+ running in Turbo/Uncompressed mode on iOS.
    if (name == 'Opera Mini' && /\bOPiOS\b/.test(ua)) {
      description.push('running in Turbo/Uncompressed mode');
    }
    // Detect IE Mobile 11.
    if (name == 'IE' && /\blike iPhone OS\b/.test(ua)) {
      data = parse(ua.replace(/like iPhone OS/, ''));
      manufacturer = data.manufacturer;
      product = data.product;
    }
    // Detect iOS.
    else if (/^iP/.test(product)) {
      name || (name = 'Safari');
      os = 'iOS' + ((data = / OS ([\d_]+)/i.exec(ua))
        ? ' ' + data[1].replace(/_/g, '.')
        : '');
    }
    // Detect Kubuntu.
    else if (name == 'Konqueror' && !/buntu/i.test(os)) {
      os = 'Kubuntu';
    }
    // Detect Android browsers.
    else if ((manufacturer && manufacturer != 'Google' &&
        ((/Chrome/.test(name) && !/\bMobile Safari\b/i.test(ua)) || /\bVita\b/.test(product))) ||
        (/\bAndroid\b/.test(os) && /^Chrome/.test(name) && /\bVersion\//i.test(ua))) {
      name = 'Android Browser';
      os = /\bAndroid\b/.test(os) ? os : 'Android';
    }
    // Detect Silk desktop/accelerated modes.
    else if (name == 'Silk') {
      if (!/\bMobi/i.test(ua)) {
        os = 'Android';
        description.unshift('desktop mode');
      }
      if (/Accelerated *= *true/i.test(ua)) {
        description.unshift('accelerated');
      }
    }
    // Detect PaleMoon identifying as Firefox.
    else if (name == 'PaleMoon' && (data = /\bFirefox\/([\d.]+)\b/.exec(ua))) {
      description.push('identifying as Firefox ' + data[1]);
    }
    // Detect Firefox OS and products running Firefox.
    else if (name == 'Firefox' && (data = /\b(Mobile|Tablet|TV)\b/i.exec(ua))) {
      os || (os = 'Firefox OS');
      product || (product = data[1]);
    }
    // Detect false positives for Firefox/Safari.
    else if (!name || (data = !/\bMinefield\b/i.test(ua) && /\b(?:Firefox|Safari)\b/.exec(name))) {
      // Escape the `/` for Firefox 1.
      if (name && !product && /[\/,]|^[^(]+?\)/.test(ua.slice(ua.indexOf(data + '/') + 8))) {
        // Clear name of false positives.
        name = null;
      }
      // Reassign a generic name.
      if ((data = product || manufacturer || os) &&
          (product || manufacturer || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(os))) {
        name = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(os) ? os : data) + ' Browser';
      }
    }
    // Detect non-Opera (Presto-based) versions (order is important).
    if (!version) {
      version = getVersion([
        '(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|Silk(?!/[\\d.]+$))',
        'Version',
        qualify(name),
        '(?:Firefox|Minefield|NetFront)'
      ]);
    }
    // Detect stubborn layout engines.
    if ((data =
          layout == 'iCab' && parseFloat(version) > 3 && 'WebKit' ||
          /\bOpera\b/.test(name) && (/\bOPR\b/.test(ua) ? 'Blink' : 'Presto') ||
          /\b(?:Midori|Nook|Safari)\b/i.test(ua) && !/^(?:Trident|EdgeHTML)$/.test(layout) && 'WebKit' ||
          !layout && /\bMSIE\b/i.test(ua) && (os == 'Mac OS' ? 'Tasman' : 'Trident') ||
          layout == 'WebKit' && /\bPlayStation\b(?! Vita\b)/i.test(name) && 'NetFront'
        )) {
      layout = [data];
    }
    // Detect Windows Phone 7 desktop mode.
    if (name == 'IE' && (data = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(ua) || 0)[1])) {
      name += ' Mobile';
      os = 'Windows Phone ' + (/\+$/.test(data) ? data : data + '.x');
      description.unshift('desktop mode');
    }
    // Detect Windows Phone 8.x desktop mode.
    else if (/\bWPDesktop\b/i.test(ua)) {
      name = 'IE Mobile';
      os = 'Windows Phone 8.x';
      description.unshift('desktop mode');
      version || (version = (/\brv:([\d.]+)/.exec(ua) || 0)[1]);
    }
    // Detect IE 11.
    else if (name != 'IE' && layout == 'Trident' && (data = /\brv:([\d.]+)/.exec(ua))) {
      if (name) {
        description.push('identifying as ' + name + (version ? ' ' + version : ''));
      }
      name = 'IE';
      version = data[1];
    }
    // Leverage environment features.
    if (useFeatures) {
      // Detect server-side environments.
      // Rhino has a global function while others have a global object.
      if (isHostType(context, 'global')) {
        if (java) {
          data = java.lang.System;
          arch = data.getProperty('os.arch');
          os = os || data.getProperty('os.name') + ' ' + data.getProperty('os.version');
        }
        if (isModuleScope && isHostType(context, 'system') && (data = [context.system])[0]) {
          os || (os = data[0].os || null);
          try {
            data[1] = context.require('ringo/engine').version;
            version = data[1].join('.');
            name = 'RingoJS';
          } catch(e) {
            if (data[0].global.system == context.system) {
              name = 'Narwhal';
            }
          }
        }
        else if (
          typeof context.process == 'object' && !context.process.browser &&
          (data = context.process)
        ) {
          name = 'Node.js';
          arch = data.arch;
          os = data.platform;
          version = /[\d.]+/.exec(data.version)[0];
        }
        else if (rhino) {
          name = 'Rhino';
        }
      }
      // Detect Adobe AIR.
      else if (getClassOf((data = context.runtime)) == airRuntimeClass) {
        name = 'Adobe AIR';
        os = data.flash.system.Capabilities.os;
      }
      // Detect PhantomJS.
      else if (getClassOf((data = context.phantom)) == phantomClass) {
        name = 'PhantomJS';
        version = (data = data.version || null) && (data.major + '.' + data.minor + '.' + data.patch);
      }
      // Detect IE compatibility modes.
      else if (typeof doc.documentMode == 'number' && (data = /\bTrident\/(\d+)/i.exec(ua))) {
        // We're in compatibility mode when the Trident version + 4 doesn't
        // equal the document mode.
        version = [version, doc.documentMode];
        if ((data = +data[1] + 4) != version[1]) {
          description.push('IE ' + version[1] + ' mode');
          layout && (layout[1] = '');
          version[1] = data;
        }
        version = name == 'IE' ? String(version[1].toFixed(1)) : version[0];
      }
      os = os && format(os);
    }
    // Detect prerelease phases.
    if (version && (data =
          /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(version) ||
          /(?:alpha|beta)(?: ?\d)?/i.exec(ua + ';' + (useFeatures && nav.appMinorVersion)) ||
          /\bMinefield\b/i.test(ua) && 'a'
        )) {
      prerelease = /b/i.test(data) ? 'beta' : 'alpha';
      version = version.replace(RegExp(data + '\\+?$'), '') +
        (prerelease == 'beta' ? beta : alpha) + (/\d+\+?/.exec(data) || '');
    }
    // Detect Firefox Mobile.
    if (name == 'Fennec' || name == 'Firefox' && /\b(?:Android|Firefox OS)\b/.test(os)) {
      name = 'Firefox Mobile';
    }
    // Obscure Maxthon's unreliable version.
    else if (name == 'Maxthon' && version) {
      version = version.replace(/\.[\d.]+/, '.x');
    }
    // Detect Xbox 360 and Xbox One.
    else if (/\bXbox\b/i.test(product)) {
      os = null;
      if (product == 'Xbox 360' && /\bIEMobile\b/.test(ua)) {
        description.unshift('mobile mode');
      }
    }
    // Add mobile postfix.
    else if ((/^(?:Chrome|IE|Opera)$/.test(name) || name && !product && !/Browser|Mobi/.test(name)) &&
        (os == 'Windows CE' || /Mobi/i.test(ua))) {
      name += ' Mobile';
    }
    // Detect IE platform preview.
    else if (name == 'IE' && useFeatures && context.external === null) {
      description.unshift('platform preview');
    }
    // Detect BlackBerry OS version.
    // http://docs.blackberry.com/en/developers/deliverables/18169/HTTP_headers_sent_by_BB_Browser_1234911_11.jsp
    else if ((/\bBlackBerry\b/.test(product) || /\bBB10\b/.test(ua)) && (data =
          (RegExp(product.replace(/ +/g, ' *') + '/([.\\d]+)', 'i').exec(ua) || 0)[1] ||
          version
        )) {
      data = [data, /BB10/.test(ua)];
      os = (data[1] ? (product = null, manufacturer = 'BlackBerry') : 'Device Software') + ' ' + data[0];
      version = null;
    }
    // Detect Opera identifying/masking itself as another browser.
    // http://www.opera.com/support/kb/view/843/
    else if (this != forOwn && product != 'Wii' && (
          (useFeatures && opera) ||
          (/Opera/.test(name) && /\b(?:MSIE|Firefox)\b/i.test(ua)) ||
          (name == 'Firefox' && /\bOS X (?:\d+\.){2,}/.test(os)) ||
          (name == 'IE' && (
            (os && !/^Win/.test(os) && version > 5.5) ||
            /\bWindows XP\b/.test(os) && version > 8 ||
            version == 8 && !/\bTrident\b/.test(ua)
          ))
        ) && !reOpera.test((data = parse.call(forOwn, ua.replace(reOpera, '') + ';'))) && data.name) {
      // When "identifying", the UA contains both Opera and the other browser's name.
      data = 'ing as ' + data.name + ((data = data.version) ? ' ' + data : '');
      if (reOpera.test(name)) {
        if (/\bIE\b/.test(data) && os == 'Mac OS') {
          os = null;
        }
        data = 'identify' + data;
      }
      // When "masking", the UA contains only the other browser's name.
      else {
        data = 'mask' + data;
        if (operaClass) {
          name = format(operaClass.replace(/([a-z])([A-Z])/g, '$1 $2'));
        } else {
          name = 'Opera';
        }
        if (/\bIE\b/.test(data)) {
          os = null;
        }
        if (!useFeatures) {
          version = null;
        }
      }
      layout = ['Presto'];
      description.push(data);
    }
    // Detect WebKit Nightly and approximate Chrome/Safari versions.
    if ((data = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(ua) || 0)[1])) {
      // Correct build number for numeric comparison.
      // (e.g. "532.5" becomes "532.05")
      data = [parseFloat(data.replace(/\.(\d)$/, '.0$1')), data];
      // Nightly builds are postfixed with a "+".
      if (name == 'Safari' && data[1].slice(-1) == '+') {
        name = 'WebKit Nightly';
        prerelease = 'alpha';
        version = data[1].slice(0, -1);
      }
      // Clear incorrect browser versions.
      else if (version == data[1] ||
          version == (data[2] = (/\bSafari\/([\d.]+\+?)/i.exec(ua) || 0)[1])) {
        version = null;
      }
      // Use the full Chrome version when available.
      data[1] = (/\bChrome\/([\d.]+)/i.exec(ua) || 0)[1];
      // Detect Blink layout engine.
      if (data[0] == 537.36 && data[2] == 537.36 && parseFloat(data[1]) >= 28 && layout == 'WebKit') {
        layout = ['Blink'];
      }
      // Detect JavaScriptCore.
      // http://stackoverflow.com/questions/6768474/how-can-i-detect-which-javascript-engine-v8-or-jsc-is-used-at-runtime-in-androi
      if (!useFeatures || (!likeChrome && !data[1])) {
        layout && (layout[1] = 'like Safari');
        data = (data = data[0], data < 400 ? 1 : data < 500 ? 2 : data < 526 ? 3 : data < 533 ? 4 : data < 534 ? '4+' : data < 535 ? 5 : data < 537 ? 6 : data < 538 ? 7 : data < 601 ? 8 : '8');
      } else {
        layout && (layout[1] = 'like Chrome');
        data = data[1] || (data = data[0], data < 530 ? 1 : data < 532 ? 2 : data < 532.05 ? 3 : data < 533 ? 4 : data < 534.03 ? 5 : data < 534.07 ? 6 : data < 534.10 ? 7 : data < 534.13 ? 8 : data < 534.16 ? 9 : data < 534.24 ? 10 : data < 534.30 ? 11 : data < 535.01 ? 12 : data < 535.02 ? '13+' : data < 535.07 ? 15 : data < 535.11 ? 16 : data < 535.19 ? 17 : data < 536.05 ? 18 : data < 536.10 ? 19 : data < 537.01 ? 20 : data < 537.11 ? '21+' : data < 537.13 ? 23 : data < 537.18 ? 24 : data < 537.24 ? 25 : data < 537.36 ? 26 : layout != 'Blink' ? '27' : '28');
      }
      // Add the postfix of ".x" or "+" for approximate versions.
      layout && (layout[1] += ' ' + (data += typeof data == 'number' ? '.x' : /[.+]/.test(data) ? '' : '+'));
      // Obscure version for some Safari 1-2 releases.
      if (name == 'Safari' && (!version || parseInt(version) > 45)) {
        version = data;
      }
    }
    // Detect Opera desktop modes.
    if (name == 'Opera' &&  (data = /\bzbov|zvav$/.exec(os))) {
      name += ' ';
      description.unshift('desktop mode');
      if (data == 'zvav') {
        name += 'Mini';
        version = null;
      } else {
        name += 'Mobile';
      }
      os = os.replace(RegExp(' *' + data + '$'), '');
    }
    // Detect Chrome desktop mode.
    else if (name == 'Safari' && /\bChrome\b/.exec(layout && layout[1])) {
      description.unshift('desktop mode');
      name = 'Chrome Mobile';
      version = null;

      if (/\bOS X\b/.test(os)) {
        manufacturer = 'Apple';
        os = 'iOS 4.3+';
      } else {
        os = null;
      }
    }
    // Strip incorrect OS versions.
    if (version && version.indexOf((data = /[\d.]+$/.exec(os))) == 0 &&
        ua.indexOf('/' + data + '-') > -1) {
      os = trim(os.replace(data, ''));
    }
    // Add layout engine.
    if (layout && !/\b(?:Avant|Nook)\b/.test(name) && (
        /Browser|Lunascape|Maxthon/.test(name) ||
        name != 'Safari' && /^iOS/.test(os) && /\bSafari\b/.test(layout[1]) ||
        /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Sleipnir|Web)/.test(name) && layout[1])) {
      // Don't add layout details to description if they are falsey.
      (data = layout[layout.length - 1]) && description.push(data);
    }
    // Combine contextual information.
    if (description.length) {
      description = ['(' + description.join('; ') + ')'];
    }
    // Append manufacturer to description.
    if (manufacturer && product && product.indexOf(manufacturer) < 0) {
      description.push('on ' + manufacturer);
    }
    // Append product to description.
    if (product) {
      description.push((/^on /.test(description[description.length - 1]) ? '' : 'on ') + product);
    }
    // Parse the OS into an object.
    if (os) {
      data =
        / ([\d.+]+)$/.exec(os) ||
        (isSpecialCasedOS = /^[a-z]+ ([\d.+]+) \//i.exec(os));
      os = {
        'architecture': 32,
        'family': (data && !isSpecialCasedOS) ? os.replace(data[0], '') : os,
        'version': data ? data[1] : null,
        'toString': function() {
          var version = this.version;
          return this.family + ((version && !isSpecialCasedOS) ? ' ' + version : '') + (this.architecture == 64 ? ' 64-bit' : '');
        }
      };
    }
    // Add browser/OS architecture.
    if ((data = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(arch)) && !/\bi686\b/i.test(arch)) {
      if (os) {
        os.architecture = 64;
        os.family = os.family.replace(RegExp(' *' + data), '');
      }
      if (
          name && (/\bWOW64\b/i.test(ua) ||
          (useFeatures && /\w(?:86|32)$/.test(nav.cpuClass || nav.platform) && !/\bWin64; x64\b/i.test(ua)))
      ) {
        description.unshift('32-bit');
      }
    }
    // Chrome 39 and above on OS X is always 64-bit.
    else if (
        os && /^OS X/.test(os.family) &&
        name == 'Chrome' && parseFloat(version) >= 39
    ) {
      os.architecture = 64;
    }

    ua || (ua = null);

    /*------------------------------------------------------------------------*/

    /**
     * The platform object.
     *
     * @name platform
     * @type Object
     */
    var platform = {};

    /**
     * The platform description.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.description = ua;

    /**
     * The name of the browser's layout engine.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.layout = layout && layout[0];

    /**
     * The name of the product's manufacturer.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.manufacturer = manufacturer;

    /**
     * The name of the browser/environment.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.name = name;

    /**
     * The alpha/beta release indicator.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.prerelease = prerelease;

    /**
     * The name of the product hosting the browser.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.product = product;

    /**
     * The browser's user agent string.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.ua = ua;

    /**
     * The browser/environment version.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.version = name && version;

    /**
     * The name of the operating system.
     *
     * @memberOf platform
     * @type Object
     */
    platform.os = os || {

      /**
       * The CPU architecture the OS is built for.
       *
       * @memberOf platform.os
       * @type number|null
       */
      'architecture': null,

      /**
       * The family of the OS.
       *
       * Common values include:
       * "Windows", "Windows 7 / Server 2008 R2", "Windows Vista / Server 2008",
       * "Windows XP", "OS X", "Ubuntu", "Debian", "Fedora", "Red Hat", "SuSE",
       * "Android", "iOS" and "Windows Phone"
       *
       * @memberOf platform.os
       * @type string|null
       */
      'family': null,

      /**
       * The version of the OS.
       *
       * @memberOf platform.os
       * @type string|null
       */
      'version': null,

      /**
       * Returns the OS string.
       *
       * @memberOf platform.os
       * @returns {string} The OS string.
       */
      'toString': function() { return 'null'; }
    };

    platform.parse = parse;
    platform.toString = toStringPlatform;

    if (platform.version) {
      description.unshift(version);
    }
    if (platform.name) {
      description.unshift(name);
    }
    if (os && name && !(os == String(os).split(' ')[0] && (os == name.split(' ')[0] || product))) {
      description.push(product ? '(' + os + ')' : 'on ' + os);
    }
    if (description.length) {
      platform.description = description.join(' ');
    }
    return platform;
  }

  /*--------------------------------------------------------------------------*/

  // Export platform.
  var platform = parse();

  // Some AMD build optimizers, like r.js, check for condition patterns like the following:
  if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
    // Expose platform on the global object to prevent errors when platform is
    // loaded by a script tag in the presence of an AMD loader.
    // See http://requirejs.org/docs/errors.html#mismatch for more details.
    root.platform = platform;

    // Define as an anonymous module so platform can be aliased through path mapping.
    define(function() {
      return platform;
    });
  }
  // Check for `exports` after `define` in case a build optimizer adds an `exports` object.
  else if (freeExports && freeModule) {
    // Export for CommonJS support.
    forOwn(platform, function(value, key) {
      freeExports[key] = value;
    });
  }
  else {
    // Export to the global object.
    root.platform = platform;
  }
}.call(this));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1]);
