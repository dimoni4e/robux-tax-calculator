// Translation system for multi-language support
export type Language =
  | "en"
  | "es"
  | "pt"
  | "fr"
  | "de"
  | "pl"
  | "it"
  | "tr"
  | "nl"
  | "uk";

export interface Translations {
  // Header
  title: string;
  subtitle: string;

  // Hero Features
  instantCalc: string;
  secure: string;
  global: string;
  startCalculating: string;

  // Calculator Section Titles
  afterTaxTitle: string;
  afterTaxSubtitle: string;
  preTaxTitle: string;
  preTaxSubtitle: string;

  // Form Labels and Placeholders
  sellingPriceLabel: string;
  sellingPricePlaceholder: string;
  sellingPriceHelp: string;
  desiredEarningsLabel: string;
  desiredEarningsPlaceholder: string;
  desiredEarningsHelp: string;

  // Results
  netEarningsLabel: string;
  requiredPriceLabel: string;
  calculationLabel: string;
  robuxUnit: string;

  // SEO Content
  aboutTitle: string;
  marketplaceTaxTitle: string;
  marketplaceTaxContent1: string;
  marketplaceTaxContent2: string;
  howToUseTitle: string;
  afterTaxUsage: string;
  preTaxUsage: string;
  realTimeUsage: string;
  mobileFriendlyUsage: string;
  perfectForTitle: string;
  perfectForContent: string;

  // New About Section Content
  howWeCalculateTitle: string;
  howWeCalculateContent: string;
  whatAreRobuxTitle: string;
  whatAreRobuxContent: string;
  robuxPricesTitle: string;
  robuxPricesContent: string;
  priceTableRobux: string;
  priceTableUSD: string;
  priceTableRate: string;

  // Footer
  footerTitle: string;
  footerContent: string;

  // Language Switcher
  languageLabel: string;

  // FAQ Section
  faqTitle: string;
  faqQuestion1: string;
  faqAnswer1: string;
  faqQuestion2: string;
  faqAnswer2: string;
  faqQuestion3: string;
  faqAnswer3: string;
  faqQuestion4: string;
  faqAnswer4: string;
  faqQuestion5: string;
  faqAnswer5: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    // Header
    title: "Robux Tax Calculator",
    subtitle:
      "Calculate your net earnings and required selling prices for Roblox marketplace items. Roblox takes a 30% marketplace tax on all sales.",

    // Hero Features
    instantCalc: "Instant",
    secure: "Secure",
    global: "Global",
    startCalculating: "Start Calculating",

    // Calculator Section Titles
    afterTaxTitle: "After-Tax Calculator",
    afterTaxSubtitle:
      "Enter your selling price to see net earnings after 30% tax",
    preTaxTitle: "Pre-Tax Calculator",
    preTaxSubtitle: "Enter your desired earnings to see required selling price",

    // Form Labels and Placeholders
    sellingPriceLabel: "Selling Price (Robux)",
    sellingPricePlaceholder: "100",
    sellingPriceHelp: "Enter the price you plan to sell for",
    desiredEarningsLabel: "Desired Net Earnings (Robux)",
    desiredEarningsPlaceholder: "70",
    desiredEarningsHelp: "Enter how much you want to earn after tax",

    // Results
    netEarningsLabel: "Net Earnings After Tax",
    requiredPriceLabel: "Required Selling Price",
    calculationLabel: "Calculation:",
    robuxUnit: "Robux",

    // SEO Content
    aboutTitle: "About Robux Tax Calculator",
    marketplaceTaxTitle: "What is the Roblox Marketplace Tax?",
    marketplaceTaxContent1:
      "The Roblox marketplace tax is a 30% fee charged by Roblox on all sales of items, game passes, and developer products. This means that when you sell an item for 100 Robux, you only receive 70 Robux as your net earnings. Understanding this tax is crucial for Roblox creators and traders who want to maximize their profits.",
    marketplaceTaxContent2:
      "Our Robux tax calculator helps you quickly determine your actual earnings after the marketplace fee, allowing you to make informed pricing decisions for your Roblox items.",
    howToUseTitle: "How to Use the Robux Calculator",
    afterTaxUsage:
      "After-Tax Calculator: Enter your selling price to see net Robux earnings after the 30% tax",
    preTaxUsage:
      "Pre-Tax Calculator: Enter your desired earnings to find the required selling price",
    realTimeUsage:
      "Real-time Results: Calculations update instantly as you type",
    mobileFriendlyUsage:
      "Mobile Friendly: Works perfectly on phones and tablets",
    perfectForTitle: "Perfect for Roblox Developers and Traders",
    perfectForContent:
      "Whether you're a Roblox game developer selling game passes, an artist creating UGC items, or a trader dealing with limited items, this Robux tax calculator is an essential tool for understanding your true profits and optimizing your pricing strategy in the Roblox marketplace.",

    // New About Section Content
    howWeCalculateTitle: "How We Calculate Robux",
    howWeCalculateContent:
      "Our calculator uses the exact 30% marketplace tax rate that Roblox applies to all transactions. When you sell an item, Roblox automatically deducts 30% as their platform fee, leaving you with 70% of the original selling price. This calculation is instant and precise, helping you understand your true earnings before listing items for sale.",
    whatAreRobuxTitle: "What Are Robux?",
    whatAreRobuxContent:
      "Robux is the virtual currency used in Roblox. Players use Robux to purchase in-game items, accessories, game passes, and developer products. As a creator or trader, you can earn Robux by selling items on the marketplace, and then convert them to real money through Roblox's Developer Exchange program (DevEx) once you meet the requirements.",
    robuxPricesTitle: "Robux Prices in 2025",
    robuxPricesContent:
      "Here are the current official Robux prices from Roblox. These rates help you understand the real-world value of your Robux earnings:",
    priceTableRobux: "Robux Amount",
    priceTableUSD: "USD Price",
    priceTableRate: "Rate (R$/USD)",

    // Footer
    footerTitle: "How Roblox Marketplace Tax Works",
    footerContent:
      "Roblox charges a 30% marketplace fee on all sales. This means you receive 70% of the selling price as your net earnings. Use this calculator to plan your pricing strategy and understand your actual profits.",

    // Language Switcher
    languageLabel: "Language",

    // FAQ Section
    faqTitle: "Frequently Asked Questions",
    faqQuestion1: "What is the Roblox marketplace tax rate?",
    faqAnswer1:
      "Roblox charges a 30% marketplace tax on all sales of items, game passes, and developer products. This means you receive 70% of the selling price as your net earnings.",
    faqQuestion2: "How do I calculate my net earnings after tax?",
    faqAnswer2:
      "To calculate your net earnings, multiply your selling price by 0.7 (70%). For example, if you sell an item for 100 Robux, you'll receive 70 Robux after the 30% tax.",
    faqQuestion3: "What selling price do I need to earn a specific amount?",
    faqAnswer3:
      "To find the required selling price, divide your desired net earnings by 0.7. For example, to earn 70 Robux, you need to set your selling price at 100 Robux.",
    faqQuestion4: "Does the tax apply to all Roblox marketplace transactions?",
    faqAnswer4:
      "Yes, the 30% marketplace tax applies to all sales including items, clothing, game passes, developer products, and limited items traded on the Roblox platform.",
    faqQuestion5: "Is this calculator accurate for all Robux amounts?",
    faqAnswer5:
      "Yes, this calculator uses the exact 30% tax rate applied by Roblox and provides accurate calculations for any amount, with results displayed to two decimal places.",
  },

  es: {
    // Header
    title: "Calculadora de Impuestos de Robux",
    subtitle:
      "Calcula tus ganancias netas y precios de venta requeridos para artículos del mercado de Roblox. Roblox toma un impuesto del 30% en todas las ventas.",

    // Hero Features
    instantCalc: "Instantáneo",
    secure: "Seguro",
    global: "Global",
    startCalculating: "Comenzar a Calcular",

    // Calculator Section Titles
    afterTaxTitle: "Calculadora Post-Impuestos",
    afterTaxSubtitle:
      "Ingresa tu precio de venta para ver las ganancias netas después del impuesto del 30%",
    preTaxTitle: "Calculadora Pre-Impuestos",
    preTaxSubtitle:
      "Ingresa tus ganancias deseadas para ver el precio de venta requerido",

    // Form Labels and Placeholders
    sellingPriceLabel: "Precio de Venta (Robux)",
    sellingPricePlaceholder: "100",
    sellingPriceHelp: "Ingresa el precio al que planeas vender",
    desiredEarningsLabel: "Ganancias Netas Deseadas (Robux)",
    desiredEarningsPlaceholder: "70",
    desiredEarningsHelp: "Ingresa cuánto quieres ganar después del impuesto",

    // Results
    netEarningsLabel: "Ganancias Netas Después del Impuesto",
    requiredPriceLabel: "Precio de Venta Requerido",
    calculationLabel: "Cálculo:",
    robuxUnit: "Robux",

    // SEO Content
    aboutTitle: "Acerca de la Calculadora de Impuestos de Robux",
    marketplaceTaxTitle: "¿Qué es el Impuesto del Mercado de Roblox?",
    marketplaceTaxContent1:
      "El impuesto del mercado de Roblox es una tarifa del 30% que cobra Roblox en todas las ventas de artículos, pases de juego y productos de desarrollador. Esto significa que cuando vendes un artículo por 100 Robux, solo recibes 70 Robux como ganancias netas. Entender este impuesto es crucial para creadores y comerciantes de Roblox que quieren maximizar sus ganancias.",
    marketplaceTaxContent2:
      "Nuestra calculadora de impuestos de Robux te ayuda a determinar rápidamente tus ganancias reales después de la tarifa del mercado, permitiéndote tomar decisiones informadas sobre precios para tus artículos de Roblox.",
    howToUseTitle: "Cómo Usar la Calculadora de Robux",
    afterTaxUsage:
      "Calculadora Post-Impuestos: Ingresa tu precio de venta para ver las ganancias netas de Robux después del impuesto del 30%",
    preTaxUsage:
      "Calculadora Pre-Impuestos: Ingresa tus ganancias deseadas para encontrar el precio de venta requerido",
    realTimeUsage:
      "Resultados en Tiempo Real: Los cálculos se actualizan instantáneamente mientras escribes",
    mobileFriendlyUsage:
      "Compatible con Móviles: Funciona perfectamente en teléfonos y tabletas",
    perfectForTitle: "Perfecto para Desarrolladores y Comerciantes de Roblox",
    perfectForContent:
      "Ya seas un desarrollador de juegos de Roblox vendiendo pases de juego, un artista creando artículos UGC, o un comerciante trabajando con artículos limitados, esta calculadora de impuestos de Robux es una herramienta esencial para entender tus ganancias reales y optimizar tu estrategia de precios en el mercado de Roblox.",

    // New About Section Content
    howWeCalculateTitle: "Cómo Calculamos los Robux",
    howWeCalculateContent:
      "Nuestra calculadora utiliza la tasa exacta de impuesto del mercado del 30% que Roblox aplica a todas las transacciones. Cuando vendes un artículo, Roblox automáticamente deduce el 30% como su tarifa de plataforma, dejándote con el 70% del precio de venta original. Este cálculo es instantáneo y preciso, ayudándote a entender tus ganancias reales antes de listar artículos para la venta.",
    whatAreRobuxTitle: "¿Qué son los Robux?",
    whatAreRobuxContent:
      "Los Robux son la moneda virtual utilizada en Roblox. Los jugadores usan Robux para comprar artículos del juego, accesorios, pases de juego y productos de desarrollador. Como creador o comerciante, puedes ganar Robux vendiendo artículos en el mercado, y luego convertirlos a dinero real a través del programa de Intercambio de Desarrolladores (DevEx) de Roblox una vez que cumplas los requisitos.",
    robuxPricesTitle: "Precios de Robux en 2025",
    robuxPricesContent:
      "Aquí están los precios oficiales actuales de Robux de Roblox. Estas tarifas te ayudan a entender el valor del mundo real de tus ganancias en Robux:",
    priceTableRobux: "Cantidad de Robux",
    priceTableUSD: "Precio USD",
    priceTableRate: "Tasa (R$/USD)",

    // Footer
    footerTitle: "Cómo Funciona el Impuesto del Mercado de Roblox",
    footerContent:
      "Roblox cobra una tarifa del mercado del 30% en todas las ventas. Esto significa que recibes el 70% del precio de venta como tus ganancias netas. Usa esta calculadora para planificar tu estrategia de precios y entender tus ganancias reales.",

    // Language Switcher
    languageLabel: "Idioma",

    // FAQ Section
    faqTitle: "Preguntas Frecuentes",
    faqQuestion1: "¿Cuál es la tasa de impuesto del mercado de Roblox?",
    faqAnswer1:
      "Roblox cobra un impuesto del mercado del 30% en todas las ventas de artículos, pases de juego y productos de desarrollador. Esto significa que recibes el 70% del precio de venta como ganancias netas.",
    faqQuestion2: "¿Cómo calculo mis ganancias netas después del impuesto?",
    faqAnswer2:
      "Para calcular tus ganancias netas, multiplica tu precio de venta por 0.7 (70%). Por ejemplo, si vendes un artículo por 100 Robux, recibirás 70 Robux después del impuesto del 30%.",
    faqQuestion3:
      "¿Qué precio de venta necesito para ganar una cantidad específica?",
    faqAnswer3:
      "Para encontrar el precio de venta requerido, divide tus ganancias netas deseadas por 0.7. Por ejemplo, para ganar 70 Robux, necesitas establecer tu precio de venta en 100 Robux.",
    faqQuestion4:
      "¿El impuesto se aplica a todas las transacciones del mercado de Roblox?",
    faqAnswer4:
      "Sí, el impuesto del mercado del 30% se aplica a todas las ventas incluyendo artículos, ropa, pases de juego, productos de desarrollador y artículos limitados comercializados en la plataforma de Roblox.",
    faqQuestion5:
      "¿Es precisa esta calculadora para todas las cantidades de Robux?",
    faqAnswer5:
      "Sí, esta calculadora usa la tasa exacta de impuesto del 30% aplicada por Roblox y proporciona cálculos precisos para cualquier cantidad, con resultados mostrados a dos decimales.",
  },

  pt: {
    // Header
    title: "Calculadora de Robux",
    subtitle:
      "Calcule seus ganhos líquidos e preços de venda necessários para itens do marketplace do Roblox. O Roblox cobra um imposto de 30% em todas as vendas.",

    // Hero Features
    instantCalc: "Instantâneo",
    secure: "Seguro",
    global: "Global",
    startCalculating: "Começar a Calcular",

    // Calculator Section Titles
    afterTaxTitle: "Calculadora Pós-Imposto",
    afterTaxSubtitle:
      "Digite seu preço de venda para ver os ganhos líquidos após o imposto de 30%",
    preTaxTitle: "Calculadora Pré-Imposto",
    preTaxSubtitle:
      "Digite seus ganhos desejados para ver o preço de venda necessário",

    // Form Labels and Placeholders
    sellingPriceLabel: "Preço de Venda (Robux)",
    sellingPricePlaceholder: "100",
    sellingPriceHelp: "Digite o preço que você planeja vender",
    desiredEarningsLabel: "Ganhos Líquidos Desejados (Robux)",
    desiredEarningsPlaceholder: "70",
    desiredEarningsHelp: "Digite quanto você quer ganhar após o imposto",

    // Results
    netEarningsLabel: "Ganhos Líquidos Após Imposto",
    requiredPriceLabel: "Preço de Venda Necessário",
    calculationLabel: "Cálculo:",
    robuxUnit: "Robux",

    // SEO Content
    aboutTitle: "Sobre a Calculadora de Robux",
    marketplaceTaxTitle: "O que é o Imposto do Marketplace do Roblox?",
    marketplaceTaxContent1:
      "O imposto do marketplace do Roblox é uma taxa de 30% cobrada pelo Roblox em todas as vendas de itens, passes de jogo e produtos de desenvolvedor. Isso significa que quando você vende um item por 100 Robux, você recebe apenas 70 Robux como ganhos líquidos. Entender esse imposto é crucial para criadores e comerciantes do Roblox que querem maximizar seus lucros.",
    marketplaceTaxContent2:
      "Nossa calculadora de imposto do Robux ajuda você a determinar rapidamente seus ganhos reais após a taxa do marketplace, permitindo que você tome decisões informadas sobre preços para seus itens do Roblox.",
    howToUseTitle: "Como Usar a Calculadora de Robux",
    afterTaxUsage:
      "Calculadora Pós-Imposto: Digite seu preço de venda para ver os ganhos líquidos de Robux após o imposto de 30%",
    preTaxUsage:
      "Calculadora Pré-Imposto: Digite seus ganhos desejados para encontrar o preço de venda necessário",
    realTimeUsage:
      "Resultados em Tempo Real: Os cálculos são atualizados instantaneamente enquanto você digita",
    mobileFriendlyUsage:
      "Compatível com Mobile: Funciona perfeitamente em telefones e tablets",
    perfectForTitle: "Perfeito para Desenvolvedores e Comerciantes do Roblox",
    perfectForContent:
      "Seja você um desenvolvedor de jogos do Roblox vendendo passes de jogo, um artista criando itens UGC, ou um comerciante trabalhando com itens limitados, esta calculadora de imposto do Robux é uma ferramenta essencial para entender seus lucros reais e otimizar sua estratégia de preços no marketplace do Roblox.",

    // New About Section Content
    howWeCalculateTitle: "Como Calculamos os Robux",
    howWeCalculateContent:
      "Nossa calculadora usa a taxa exata de imposto do marketplace de 30% que o Roblox aplica a todas as transações. Quando você vende um item, o Roblox automaticamente deduz 30% como sua taxa de plataforma, deixando você com 70% do preço de venda original. Este cálculo é instantâneo e preciso, ajudando você a entender seus ganhos reais antes de listar itens para venda.",
    whatAreRobuxTitle: "O que são Robux?",
    whatAreRobuxContent:
      "Robux é a moeda virtual usada no Roblox. Os jogadores usam Robux para comprar itens do jogo, acessórios, passes de jogo e produtos de desenvolvedor. Como criador ou comerciante, você pode ganhar Robux vendendo itens no marketplace, e então convertê-los em dinheiro real através do programa Developer Exchange (DevEx) do Roblox uma vez que você atenda aos requisitos.",
    robuxPricesTitle: "Preços do Robux em 2025",
    robuxPricesContent:
      "Aqui estão os preços oficiais atuais do Robux do Roblox. Essas taxas ajudam você a entender o valor do mundo real dos seus ganhos em Robux:",
    priceTableRobux: "Quantidade de Robux",
    priceTableUSD: "Preço USD",
    priceTableRate: "Taxa (R$/USD)",

    // Footer
    footerTitle: "Como Funciona o Imposto do Marketplace do Roblox",
    footerContent:
      "O Roblox cobra uma taxa de marketplace de 30% em todas as vendas. Isso significa que você recebe 70% do preço de venda como seus ganhos líquidos. Use esta calculadora para planejar sua estratégia de preços e entender seus lucros reais.",

    // Language Switcher
    languageLabel: "Idioma",

    // FAQ Section
    faqTitle: "Perguntas Frequentes",
    faqQuestion1: "Qual é a taxa de imposto do marketplace do Roblox?",
    faqAnswer1:
      "O Roblox cobra um imposto de marketplace de 30% em todas as vendas de itens, passes de jogo e produtos de desenvolvedor. Isso significa que você recebe 70% do preço de venda como ganhos líquidos.",
    faqQuestion2: "Como calculo meus ganhos líquidos após o imposto?",
    faqAnswer2:
      "Para calcular seus ganhos líquidos, multiplique seu preço de venda por 0,7 (70%). Por exemplo, se você vender um item por 100 Robux, receberá 70 Robux após o imposto de 30%.",
    faqQuestion3:
      "Que preço de venda preciso para ganhar uma quantia específica?",
    faqAnswer3:
      "Para encontrar o preço de venda necessário, divida seus ganhos líquidos desejados por 0,7. Por exemplo, para ganhar 70 Robux, você precisa definir seu preço de venda em 100 Robux.",
    faqQuestion4:
      "O imposto se aplica a todas as transações do marketplace do Roblox?",
    faqAnswer4:
      "Sim, o imposto de marketplace de 30% se aplica a todas as vendas incluindo itens, roupas, passes de jogo, produtos de desenvolvedor e itens limitados negociados na plataforma Roblox.",
    faqQuestion5: "Esta calculadora é precisa para todas as quantias de Robux?",
    faqAnswer5:
      "Sim, esta calculadora usa a taxa exata de imposto de 30% aplicada pelo Roblox e fornece cálculos precisos para qualquer quantia, com resultados exibidos em duas casas decimais.",
  },

  fr: {
    // Header
    title: "Calculateur de Robux",
    subtitle:
      "Calculez vos gains nets et les prix de vente requis pour les articles du marketplace Roblox. Roblox prélève une taxe de 30% sur toutes les ventes.",

    // Hero Features
    instantCalc: "Instantané",
    secure: "Sécurisé",
    global: "Global",
    startCalculating: "Commencer le Calcul",

    // Calculator Section Titles
    afterTaxTitle: "Calculateur Après Taxes",
    afterTaxSubtitle:
      "Entrez votre prix de vente pour voir les gains nets après la taxe de 30%",
    preTaxTitle: "Calculateur Avant Taxes",
    preTaxSubtitle:
      "Entrez vos gains souhaités pour voir le prix de vente requis",

    // Form Labels and Placeholders
    sellingPriceLabel: "Prix de Vente (Robux)",
    sellingPricePlaceholder: "100",
    sellingPriceHelp: "Entrez le prix auquel vous prévoyez de vendre",
    desiredEarningsLabel: "Gains Nets Souhaités (Robux)",
    desiredEarningsPlaceholder: "70",
    desiredEarningsHelp: "Entrez combien vous voulez gagner après taxes",

    // Results
    netEarningsLabel: "Gains Nets Après Taxes",
    requiredPriceLabel: "Prix de Vente Requis",
    calculationLabel: "Calcul:",
    robuxUnit: "Robux",

    // SEO Content
    aboutTitle: "À Propos du Calculateur de Robux",
    marketplaceTaxTitle: "Qu'est-ce que la Taxe du Marketplace Roblox?",
    marketplaceTaxContent1:
      "La taxe du marketplace Roblox est un frais de 30% prélevé par Roblox sur toutes les ventes d'articles, de passes de jeu et de produits de développeur. Cela signifie que lorsque vous vendez un article pour 100 Robux, vous ne recevez que 70 Robux comme gains nets. Comprendre cette taxe est crucial pour les créateurs et commerçants Roblox qui veulent maximiser leurs profits.",
    marketplaceTaxContent2:
      "Notre calculateur de taxe Robux vous aide à déterminer rapidement vos gains réels après les frais du marketplace, vous permettant de prendre des décisions éclairées sur les prix pour vos articles Roblox.",
    howToUseTitle: "Comment Utiliser le Calculateur de Robux",
    afterTaxUsage:
      "Calculateur Après Taxes: Entrez votre prix de vente pour voir les gains nets en Robux après la taxe de 30%",
    preTaxUsage:
      "Calculateur Avant Taxes: Entrez vos gains souhaités pour trouver le prix de vente requis",
    realTimeUsage:
      "Résultats en Temps Réel: Les calculs se mettent à jour instantanément pendant que vous tapez",
    mobileFriendlyUsage:
      "Compatible Mobile: Fonctionne parfaitement sur téléphones et tablettes",
    perfectForTitle: "Parfait pour les Développeurs et Commerçants Roblox",
    perfectForContent:
      "Que vous soyez un développeur de jeux Roblox vendant des passes de jeu, un artiste créant des articles UGC, ou un commerçant travaillant avec des articles limités, ce calculateur de taxe Robux est un outil essentiel pour comprendre vos profits réels et optimiser votre stratégie de prix sur le marketplace Roblox.",

    // New About Section Content
    howWeCalculateTitle: "Comment Nous Calculons les Robux",
    howWeCalculateContent:
      "Notre calculateur utilise le taux exact de taxe du marketplace de 30% que Roblox applique à toutes les transactions. Lorsque vous vendez un article, Roblox déduit automatiquement 30% comme frais de plateforme, vous laissant avec 70% du prix de vente original. Ce calcul est instantané et précis, vous aidant à comprendre vos gains réels avant de lister des articles à la vente.",
    whatAreRobuxTitle: "Qu'est-ce que les Robux?",
    whatAreRobuxContent:
      "Les Robux sont la monnaie virtuelle utilisée dans Roblox. Les joueurs utilisent les Robux pour acheter des articles de jeu, des accessoires, des passes de jeu et des produits de développeur. En tant que créateur ou commerçant, vous pouvez gagner des Robux en vendant des articles sur le marketplace, puis les convertir en argent réel grâce au programme Developer Exchange (DevEx) de Roblox une fois que vous remplissez les conditions.",
    robuxPricesTitle: "Prix des Robux en 2025",
    robuxPricesContent:
      "Voici les prix officiels actuels des Robux de Roblox. Ces taux vous aident à comprendre la valeur réelle de vos gains en Robux:",
    priceTableRobux: "Montant de Robux",
    priceTableUSD: "Prix USD",
    priceTableRate: "Taux (R$/USD)",

    // Footer
    footerTitle: "Comment Fonctionne la Taxe du Marketplace Roblox",
    footerContent:
      "Roblox prélève une taxe de marketplace de 30% sur toutes les ventes. Cela signifie que vous recevez 70% du prix de vente comme gains nets. Utilisez ce calculateur pour planifier votre stratégie de prix et comprendre vos profits réels.",

    // Language Switcher
    languageLabel: "Langue",

    // FAQ Section
    faqTitle: "Questions Fréquemment Posées",
    faqQuestion1: "Quel est le taux de taxe du marketplace Roblox?",
    faqAnswer1:
      "Roblox prélève une taxe de marketplace de 30% sur toutes les ventes d'articles, de passes de jeu et de produits de développeur. Cela signifie que vous recevez 70% du prix de vente comme gains nets.",
    faqQuestion2: "Comment calculer mes gains nets après taxes?",
    faqAnswer2:
      "Pour calculer vos gains nets, multipliez votre prix de vente par 0,7 (70%). Par exemple, si vous vendez un article pour 100 Robux, vous recevrez 70 Robux après la taxe de 30%.",
    faqQuestion3:
      "Quel prix de vente ai-je besoin pour gagner un montant spécifique?",
    faqAnswer3:
      "Pour trouver le prix de vente requis, divisez vos gains nets souhaités par 0,7. Par exemple, pour gagner 70 Robux, vous devez fixer votre prix de vente à 100 Robux.",
    faqQuestion4:
      "La taxe s'applique-t-elle à toutes les transactions du marketplace Roblox?",
    faqAnswer4:
      "Oui, la taxe de marketplace de 30% s'applique à toutes les ventes incluant les articles, vêtements, passes de jeu, produits de développeur et articles limités échangés sur la plateforme Roblox.",
    faqQuestion5:
      "Ce calculateur est-il précis pour tous les montants de Robux?",
    faqAnswer5:
      "Oui, ce calculateur utilise le taux exact de taxe de 30% appliqué par Roblox et fournit des calculs précis pour tout montant, avec des résultats affichés à deux décimales.",
  },

  de: {
    // Header
    title: "Robux Steuerrechner",
    subtitle:
      "Berechnen Sie Ihre Nettoeinnahmen und erforderlichen Verkaufspreise für Roblox-Marktplatz-Artikel. Roblox erhebt eine 30%ige Marktplatzsteuer auf alle Verkäufe.",

    // Hero Features
    instantCalc: "Sofort",
    secure: "Sicher",
    global: "Global",
    startCalculating: "Berechnung Starten",

    // Calculator Section Titles
    afterTaxTitle: "Nach-Steuer-Rechner",
    afterTaxSubtitle:
      "Geben Sie Ihren Verkaufspreis ein, um die Nettoeinnahmen nach 30% Steuer zu sehen",
    preTaxTitle: "Vor-Steuer-Rechner",
    preTaxSubtitle:
      "Geben Sie Ihre gewünschten Einnahmen ein, um den erforderlichen Verkaufspreis zu sehen",

    // Form Labels and Placeholders
    sellingPriceLabel: "Verkaufspreis (Robux)",
    sellingPricePlaceholder: "100",
    sellingPriceHelp: "Geben Sie den Preis ein, für den Sie verkaufen möchten",
    desiredEarningsLabel: "Gewünschte Nettoeinnahmen (Robux)",
    desiredEarningsPlaceholder: "70",
    desiredEarningsHelp:
      "Geben Sie ein, wie viel Sie nach Steuern verdienen möchten",

    // Results
    netEarningsLabel: "Nettoeinnahmen Nach Steuern",
    requiredPriceLabel: "Erforderlicher Verkaufspreis",
    calculationLabel: "Berechnung:",
    robuxUnit: "Robux",

    // SEO Content
    aboutTitle: "Über den Robux Steuerrechner",
    marketplaceTaxTitle: "Was ist die Roblox-Marktplatzsteuer?",
    marketplaceTaxContent1:
      "Die Roblox-Marktplatzsteuer ist eine 30%ige Gebühr, die Roblox auf alle Verkäufe von Artikeln, Spielpässen und Entwicklerprodukten erhebt. Das bedeutet, wenn Sie einen Artikel für 100 Robux verkaufen, erhalten Sie nur 70 Robux als Nettoeinnahmen. Das Verständnis dieser Steuer ist entscheidend für Roblox-Ersteller und -Händler, die ihre Gewinne maximieren möchten.",
    marketplaceTaxContent2:
      "Unser Robux-Steuerrechner hilft Ihnen, schnell Ihre tatsächlichen Einnahmen nach der Marktplatzgebühr zu bestimmen, sodass Sie fundierte Preisentscheidungen für Ihre Roblox-Artikel treffen können.",
    howToUseTitle: "So verwenden Sie den Robux-Rechner",
    afterTaxUsage:
      "Nach-Steuer-Rechner: Geben Sie Ihren Verkaufspreis ein, um die Netto-Robux-Einnahmen nach der 30%igen Steuer zu sehen",
    preTaxUsage:
      "Vor-Steuer-Rechner: Geben Sie Ihre gewünschten Einnahmen ein, um den erforderlichen Verkaufspreis zu finden",
    realTimeUsage:
      "Echtzeitresultate: Berechnungen werden sofort aktualisiert, während Sie tippen",
    mobileFriendlyUsage:
      "Mobilfreundlich: Funktioniert perfekt auf Telefonen und Tablets",
    perfectForTitle: "Perfekt für Roblox-Entwickler und -Händler",
    perfectForContent:
      "Egal, ob Sie ein Roblox-Spielentwickler sind, der Spielpässe verkauft, ein Künstler, der UGC-Artikel erstellt, oder ein Händler, der mit limitierten Artikeln handelt, dieser Robux-Steuerrechner ist ein unverzichtbares Werkzeug, um Ihre wahren Gewinne zu verstehen und Ihre Preisstrategie auf dem Roblox-Marktplatz zu optimieren.",

    // New About Section Content
    howWeCalculateTitle: "Wie wir Robux berechnen",
    howWeCalculateContent:
      "Unser Rechner verwendet den exakten 30%igen Marktplatzsteuersatz, den Roblox auf alle Transaktionen anwendet. Wenn Sie einen Artikel verkaufen, zieht Roblox automatisch 30% als Plattformgebühr ab und lässt Sie mit 70% des ursprünglichen Verkaufspreises zurück. Diese Berechnung ist sofort und präzise und hilft Ihnen, Ihre wahren Einnahmen zu verstehen, bevor Sie Artikel zum Verkauf auflisten.",
    whatAreRobuxTitle: "Was sind Robux?",
    whatAreRobuxContent:
      "Robux ist die virtuelle Währung, die in Roblox verwendet wird. Spieler verwenden Robux, um Spielgegenstände, Accessoires, Spielpässe und Entwicklerprodukte zu kaufen. Als Ersteller oder Händler können Sie Robux verdienen, indem Sie Artikel auf dem Marktplatz verkaufen, und sie dann über das Developer Exchange-Programm (DevEx) von Roblox in echtes Geld umwandeln, sobald Sie die Anforderungen erfüllen.",
    robuxPricesTitle: "Robux-Preise 2025",
    robuxPricesContent:
      "Hier sind die aktuellen offiziellen Robux-Preise von Roblox. Diese Tarife helfen Ihnen, den realen Wert Ihrer Robux-Einnahmen zu verstehen:",
    priceTableRobux: "Robux-Menge",
    priceTableUSD: "USD-Preis",
    priceTableRate: "Rate (R$/USD)",

    // Footer
    footerTitle: "Wie die Roblox-Marktplatzsteuer funktioniert",
    footerContent:
      "Roblox erhebt eine 30%ige Marktplatzgebühr auf alle Verkäufe. Das bedeutet, Sie erhalten 70% des Verkaufspreises als Nettoeinnahmen. Verwenden Sie diesen Rechner, um Ihre Preisstrategie zu planen und Ihre tatsächlichen Gewinne zu verstehen.",

    // Language Switcher
    languageLabel: "Sprache",

    // FAQ Section
    faqTitle: "Häufig gestellte Fragen",
    faqQuestion1: "Wie hoch ist der Roblox-Marktplatzsteuersatz?",
    faqAnswer1:
      "Roblox erhebt eine 30%ige Marktplatzsteuer auf alle Verkäufe von Artikeln, Spielpässen und Entwicklerprodukten. Das bedeutet, Sie erhalten 70% des Verkaufspreises als Nettoeinnahmen.",
    faqQuestion2: "Wie berechne ich meine Nettoeinnahmen nach Steuern?",
    faqAnswer2:
      "Um Ihre Nettoeinnahmen zu berechnen, multiplizieren Sie Ihren Verkaufspreis mit 0,7 (70%). Wenn Sie beispielsweise einen Artikel für 100 Robux verkaufen, erhalten Sie 70 Robux nach der 30%igen Steuer.",
    faqQuestion3:
      "Welchen Verkaufspreis brauche ich, um einen bestimmten Betrag zu verdienen?",
    faqAnswer3:
      "Um den erforderlichen Verkaufspreis zu finden, teilen Sie Ihre gewünschten Nettoeinnahmen durch 0,7. Um beispielsweise 70 Robux zu verdienen, müssen Sie Ihren Verkaufspreis auf 100 Robux festlegen.",
    faqQuestion4: "Gilt die Steuer für alle Roblox-Marktplatztransaktionen?",
    faqAnswer4:
      "Ja, die 30%ige Marktplatzsteuer gilt für alle Verkäufe einschließlich Artikel, Kleidung, Spielpässe, Entwicklerprodukte und limitierte Artikel, die auf der Roblox-Plattform gehandelt werden.",
    faqQuestion5: "Ist dieser Rechner für alle Robux-Beträge genau?",
    faqAnswer5:
      "Ja, dieser Rechner verwendet den exakten 30%igen Steuersatz, der von Roblox angewendet wird, und liefert genaue Berechnungen für jeden Betrag, mit Ergebnissen, die auf zwei Dezimalstellen angezeigt werden.",
  },

  pl: {
    // Header
    title: "Kalkulator Podatku Robux",
    subtitle:
      "Oblicz swoje zarobki netto i wymagane ceny sprzedaży dla przedmiotów z marketplace Roblox. Roblox pobiera 30% podatku od wszystkich sprzedaży.",

    // Hero Features
    instantCalc: "Natychmiastowe",
    secure: "Bezpieczne",
    global: "Globalne",
    startCalculating: "Rozpocznij Obliczenia",

    // Calculator Section Titles
    afterTaxTitle: "Kalkulator Po Podatku",
    afterTaxSubtitle:
      "Wprowadź cenę sprzedaży, aby zobaczyć zarobki netto po 30% podatku",
    preTaxTitle: "Kalkulator Przed Podatkiem",
    preTaxSubtitle:
      "Wprowadź pożądane zarobki, aby zobaczyć wymaganą cenę sprzedaży",

    // Form Labels and Placeholders
    sellingPriceLabel: "Cena Sprzedaży (Robux)",
    sellingPricePlaceholder: "100",
    sellingPriceHelp: "Wprowadź cenę, za którą planujesz sprzedać",
    desiredEarningsLabel: "Pożądane Zarobki Netto (Robux)",
    desiredEarningsPlaceholder: "70",
    desiredEarningsHelp: "Wprowadź ile chcesz zarobić po podatku",

    // Results
    netEarningsLabel: "Zarobki Netto Po Podatku",
    requiredPriceLabel: "Wymagana Cena Sprzedaży",
    calculationLabel: "Obliczenie:",
    robuxUnit: "Robux",

    // SEO Content
    aboutTitle: "O Kalkulatorze Podatku Robux",
    marketplaceTaxTitle: "Co to jest podatek marketplace Roblox?",
    marketplaceTaxContent1:
      "Podatek marketplace Roblox to 30% opłata pobierana przez Roblox od wszystkich sprzedaży przedmiotów, przepustek do gry i produktów deweloperskich. Oznacza to, że gdy sprzedajesz przedmiot za 100 Robux, otrzymujesz tylko 70 Robux jako zarobki netto. Zrozumienie tego podatku jest kluczowe dla twórców i handlowców Roblox, którzy chcą zmaksymalizować swoje zyski.",
    marketplaceTaxContent2:
      "Nasz kalkulator podatku Robux pomaga szybko określić twoje rzeczywiste zarobki po opłacie marketplace, pozwalając na podejmowanie świadomych decyzji cenowych dla twoich przedmiotów Roblox.",
    howToUseTitle: "Jak używać kalkulatora Robux",
    afterTaxUsage:
      "Kalkulator Po Podatku: Wprowadź cenę sprzedaży, aby zobaczyć zarobki netto w Robux po 30% podatku",
    preTaxUsage:
      "Kalkulator Przed Podatkiem: Wprowadź pożądane zarobki, aby znaleźć wymaganą cenę sprzedaży",
    realTimeUsage:
      "Wyniki w czasie rzeczywistym: Obliczenia aktualizują się natychmiast podczas pisania",
    mobileFriendlyUsage:
      "Przyjazny dla urządzeń mobilnych: Działa doskonale na telefonach i tabletach",
    perfectForTitle: "Idealny dla deweloperów i handlowców Roblox",
    perfectForContent:
      "Niezależnie od tego, czy jesteś deweloperem gier Roblox sprzedającym przepustki do gry, artystą tworzącym przedmioty UGC, czy handlowcem pracującym z limitowanymi przedmiotami, ten kalkulator podatku Robux jest niezbędnym narzędziem do zrozumienia twoich prawdziwych zysków i optymalizacji strategii cenowej na marketplace Roblox.",

    // New About Section Content
    howWeCalculateTitle: "Jak obliczamy Robux",
    howWeCalculateContent:
      "Nasz kalkulator używa dokładnej 30% stawki podatku marketplace, którą Roblox stosuje do wszystkich transakcji. Gdy sprzedajesz przedmiot, Roblox automatycznie odejmuje 30% jako opłatę platformy, pozostawiając ci 70% pierwotnej ceny sprzedaży. To obliczenie jest natychmiastowe i precyzyjne, pomagając zrozumieć twoje prawdziwe zarobki przed wystawieniem przedmiotów na sprzedaż.",
    whatAreRobuxTitle: "Czym są Robux?",
    whatAreRobuxContent:
      "Robux to wirtualna waluta używana w Roblox. Gracze używają Robux do kupowania przedmiotów w grze, akcesoriów, przepustek do gry i produktów deweloperskich. Jako twórca lub handlowiec możesz zarabiać Robux sprzedając przedmioty na marketplace, a następnie wymieniać je na prawdziwe pieniądze przez program Developer Exchange (DevEx) Roblox, gdy spełnisz wymagania.",
    robuxPricesTitle: "Ceny Robux w 2025",
    robuxPricesContent:
      "Oto aktualne oficjalne ceny Robux od Roblox. Te stawki pomagają zrozumieć rzeczywistą wartość twoich zarobków w Robux:",
    priceTableRobux: "Ilość Robux",
    priceTableUSD: "Cena USD",
    priceTableRate: "Stawka (R$/USD)",

    // Footer
    footerTitle: "Jak działa podatek marketplace Roblox",
    footerContent:
      "Roblox pobiera 30% opłatę marketplace od wszystkich sprzedaży. Oznacza to, że otrzymujesz 70% ceny sprzedaży jako zarobki netto. Użyj tego kalkulatora, aby zaplanować strategię cenową i zrozumieć swoje rzeczywiste zyski.",

    // Language Switcher
    languageLabel: "Język",

    // FAQ Section
    faqTitle: "Często zadawane pytania",
    faqQuestion1: "Jaka jest stawka podatku marketplace Roblox?",
    faqAnswer1:
      "Roblox pobiera 30% podatek marketplace od wszystkich sprzedaży przedmiotów, przepustek do gry i produktów deweloperskich. Oznacza to, że otrzymujesz 70% ceny sprzedaży jako zarobki netto.",
    faqQuestion2: "Jak obliczyć zarobki netto po podatku?",
    faqAnswer2:
      "Aby obliczyć zarobki netto, pomnóż cenę sprzedaży przez 0,7 (70%). Na przykład, jeśli sprzedajesz przedmiot za 100 Robux, otrzymasz 70 Robux po 30% podatku.",
    faqQuestion3:
      "Jaką cenę sprzedaży potrzebuję, aby zarobić określoną kwotę?",
    faqAnswer3:
      "Aby znaleźć wymaganą cenę sprzedaży, podziel pożądane zarobki netto przez 0,7. Na przykład, aby zarobić 70 Robux, musisz ustawić cenę sprzedaży na 100 Robux.",
    faqQuestion4:
      "Czy podatek dotyczy wszystkich transakcji marketplace Roblox?",
    faqAnswer4:
      "Tak, 30% podatek marketplace dotyczy wszystkich sprzedaży, w tym przedmiotów, ubrań, przepustek do gry, produktów deweloperskich i limitowanych przedmiotów handlowanych na platformie Roblox.",
    faqQuestion5: "Czy ten kalkulator jest dokładny dla wszystkich kwot Robux?",
    faqAnswer5:
      "Tak, ten kalkulator używa dokładnej 30% stawki podatku stosowanej przez Roblox i zapewnia dokładne obliczenia dla każdej kwoty, z wynikami wyświetlanymi do dwóch miejsc po przecinku.",
  },

  it: {
    // Header
    title: "Calcolatore Tasse Robux",
    subtitle:
      "Calcola i tuoi guadagni netti e i prezzi di vendita richiesti per gli oggetti del marketplace di Roblox. Roblox applica una tassa del 30% su tutte le vendite.",

    // Hero Features
    instantCalc: "Istantaneo",
    secure: "Sicuro",
    global: "Globale",
    startCalculating: "Inizia a Calcolare",

    // Calculator Section Titles
    afterTaxTitle: "Calcolatore Post-Tasse",
    afterTaxSubtitle:
      "Inserisci il prezzo di vendita per vedere i guadagni netti dopo la tassa del 30%",
    preTaxTitle: "Calcolatore Pre-Tasse",
    preTaxSubtitle:
      "Inserisci i guadagni desiderati per vedere il prezzo di vendita richiesto",

    // Form Labels and Placeholders
    sellingPriceLabel: "Prezzo di Vendita (Robux)",
    sellingPricePlaceholder: "100",
    sellingPriceHelp: "Inserisci il prezzo al quale pianifichi di vendere",
    desiredEarningsLabel: "Guadagni Netti Desiderati (Robux)",
    desiredEarningsPlaceholder: "70",
    desiredEarningsHelp: "Inserisci quanto vuoi guadagnare dopo le tasse",

    // Results
    netEarningsLabel: "Guadagni Netti Dopo Tasse",
    requiredPriceLabel: "Prezzo di Vendita Richiesto",
    calculationLabel: "Calcolo:",
    robuxUnit: "Robux",

    // SEO Content
    aboutTitle: "Informazioni sul Calcolatore Tasse Robux",
    marketplaceTaxTitle: "Cos'è la tassa del marketplace di Roblox?",
    marketplaceTaxContent1:
      "La tassa del marketplace di Roblox è una commissione del 30% applicata da Roblox su tutte le vendite di oggetti, pass di gioco e prodotti per sviluppatori. Questo significa che quando vendi un oggetto per 100 Robux, ricevi solo 70 Robux come guadagni netti. Comprendere questa tassa è cruciale per i creatori e commercianti di Roblox che vogliono massimizzare i loro profitti.",
    marketplaceTaxContent2:
      "Il nostro calcolatore di tasse Robux ti aiuta a determinare rapidamente i tuoi guadagni reali dopo la commissione del marketplace, permettendoti di prendere decisioni informate sui prezzi per i tuoi oggetti Roblox.",
    howToUseTitle: "Come utilizzare il calcolatore Robux",
    afterTaxUsage:
      "Calcolatore Post-Tasse: Inserisci il prezzo di vendita per vedere i guadagni netti in Robux dopo la tassa del 30%",
    preTaxUsage:
      "Calcolatore Pre-Tasse: Inserisci i guadagni desiderati per trovare il prezzo di vendita richiesto",
    realTimeUsage:
      "Risultati in tempo reale: I calcoli si aggiornano istantaneamente mentre digiti",
    mobileFriendlyUsage:
      "Compatibile con mobile: Funziona perfettamente su telefoni e tablet",
    perfectForTitle: "Perfetto per sviluppatori e commercianti Roblox",
    perfectForContent:
      "Che tu sia uno sviluppatore di giochi Roblox che vende pass di gioco, un artista che crea oggetti UGC, o un commerciante che lavora con oggetti limitati, questo calcolatore di tasse Robux è uno strumento essenziale per comprendere i tuoi profitti reali e ottimizzare la tua strategia di prezzo nel marketplace di Roblox.",

    // New About Section Content
    howWeCalculateTitle: "Come calcoliamo i Robux",
    howWeCalculateContent:
      "Il nostro calcolatore utilizza l'esatta aliquota di tassa del marketplace del 30% che Roblox applica a tutte le transazioni. Quando vendi un oggetto, Roblox deduce automaticamente il 30% come commissione della piattaforma, lasciandoti con il 70% del prezzo di vendita originale. Questo calcolo è istantaneo e preciso, aiutandoti a comprendere i tuoi guadagni reali prima di elencare oggetti in vendita.",
    whatAreRobuxTitle: "Cosa sono i Robux?",
    whatAreRobuxContent:
      "I Robux sono la valuta virtuale utilizzata in Roblox. I giocatori usano i Robux per acquistare oggetti di gioco, accessori, pass di gioco e prodotti per sviluppatori. Come creatore o commerciante, puoi guadagnare Robux vendendo oggetti nel marketplace, e poi convertirli in denaro reale attraverso il programma Developer Exchange (DevEx) di Roblox una volta che soddisfi i requisiti.",
    robuxPricesTitle: "Prezzi Robux nel 2025",
    robuxPricesContent:
      "Ecco i prezzi ufficiali attuali dei Robux da Roblox. Queste tariffe ti aiutano a comprendere il valore nel mondo reale dei tuoi guadagni in Robux:",
    priceTableRobux: "Quantità di Robux",
    priceTableUSD: "Prezzo USD",
    priceTableRate: "Tasso (R$/USD)",

    // Footer
    footerTitle: "Come funziona la tassa del marketplace di Roblox",
    footerContent:
      "Roblox applica una commissione del marketplace del 30% su tutte le vendite. Questo significa che ricevi il 70% del prezzo di vendita come guadagni netti. Usa questo calcolatore per pianificare la tua strategia di prezzo e comprendere i tuoi profitti reali.",

    // Language Switcher
    languageLabel: "Lingua",

    // FAQ Section
    faqTitle: "Domande frequenti",
    faqQuestion1: "Qual è l'aliquota della tassa del marketplace di Roblox?",
    faqAnswer1:
      "Roblox applica una tassa del marketplace del 30% su tutte le vendite di oggetti, pass di gioco e prodotti per sviluppatori. Questo significa che ricevi il 70% del prezzo di vendita come guadagni netti.",
    faqQuestion2: "Come calcolo i miei guadagni netti dopo le tasse?",
    faqAnswer2:
      "Per calcolare i tuoi guadagni netti, moltiplica il prezzo di vendita per 0,7 (70%). Ad esempio, se vendi un oggetto per 100 Robux, riceverai 70 Robux dopo la tassa del 30%.",
    faqQuestion3:
      "Quale prezzo di vendita mi serve per guadagnare un importo specifico?",
    faqAnswer3:
      "Per trovare il prezzo di vendita richiesto, dividi i tuoi guadagni netti desiderati per 0,7. Ad esempio, per guadagnare 70 Robux, devi impostare il prezzo di vendita a 100 Robux.",
    faqQuestion4:
      "La tassa si applica a tutte le transazioni del marketplace di Roblox?",
    faqAnswer4:
      "Sì, la tassa del marketplace del 30% si applica a tutte le vendite inclusi oggetti, abbigliamento, pass di gioco, prodotti per sviluppatori e oggetti limitati scambiati sulla piattaforma Roblox.",
    faqQuestion5:
      "Questo calcolatore è accurato per tutti gli importi di Robux?",
    faqAnswer5:
      "Sì, questo calcolatore utilizza l'esatta aliquota di tassa del 30% applicata da Roblox e fornisce calcoli accurati per qualsiasi importo, con risultati visualizzati a due decimali.",
  },

  tr: {
    // Header
    title: "Robux Vergi Hesaplayıcısı",
    subtitle:
      "Roblox pazaryeri öğeleri için net kazançlarınızı ve gerekli satış fiyatlarını hesaplayın. Roblox tüm satışlardan %30 pazaryeri vergisi alır.",

    // Hero Features
    instantCalc: "Anında",
    secure: "Güvenli",
    global: "Küresel",
    startCalculating: "Hesaplamaya Başla",

    // Calculator Section Titles
    afterTaxTitle: "Vergi Sonrası Hesaplayıcı",
    afterTaxSubtitle:
      "Satış fiyatınızı girin ve %30 vergi sonrası net kazançları görün",
    preTaxTitle: "Vergi Öncesi Hesaplayıcı",
    preTaxSubtitle:
      "İstediğiniz kazançları girin ve gerekli satış fiyatını görün",

    // Form Labels and Placeholders
    sellingPriceLabel: "Satış Fiyatı (Robux)",
    sellingPricePlaceholder: "100",
    sellingPriceHelp: "Satmayı planladığınız fiyatı girin",
    desiredEarningsLabel: "İstenen Net Kazanç (Robux)",
    desiredEarningsPlaceholder: "70",
    desiredEarningsHelp: "Vergi sonrası ne kadar kazanmak istediğinizi girin",

    // Results
    netEarningsLabel: "Vergi Sonrası Net Kazanç",
    requiredPriceLabel: "Gerekli Satış Fiyatı",
    calculationLabel: "Hesaplama:",
    robuxUnit: "Robux",

    // SEO Content
    aboutTitle: "Robux Vergi Hesaplayıcısı Hakkında",
    marketplaceTaxTitle: "Roblox Pazaryeri Vergisi Nedir?",
    marketplaceTaxContent1:
      "Roblox pazaryeri vergisi, Roblox tarafından tüm öğe, oyun geçidi ve geliştirici ürün satışlarından alınan %30'luk bir ücrettir. Bu, 100 Robux'a bir öğe sattığınızda, net kazanç olarak sadece 70 Robux aldığınız anlamına gelir. Bu vergiyi anlamak, karlarını maksimize etmek isteyen Roblox yaratıcıları ve tüccarları için çok önemlidir.",
    marketplaceTaxContent2:
      "Robux vergi hesaplayıcımız, pazaryeri ücreti sonrası gerçek kazançlarınızı hızlıca belirlemenize yardımcı olur ve Roblox öğeleriniz için bilinçli fiyatlandırma kararları vermenizi sağlar.",
    howToUseTitle: "Robux Hesaplayıcısı Nasıl Kullanılır",
    afterTaxUsage:
      "Vergi Sonrası Hesaplayıcı: Satış fiyatınızı girin ve %30 vergi sonrası net Robux kazançlarını görün",
    preTaxUsage:
      "Vergi Öncesi Hesaplayıcı: İstediğiniz kazançları girin ve gerekli satış fiyatını bulun",
    realTimeUsage:
      "Gerçek Zamanlı Sonuçlar: Yazdıkça hesaplamalar anında güncellenir",
    mobileFriendlyUsage:
      "Mobil Dostu: Telefonlarda ve tabletlerde mükemmel çalışır",
    perfectForTitle: "Roblox Geliştiricileri ve Tüccarları İçin Mükemmel",
    perfectForContent:
      "Oyun geçitleri satan bir Roblox oyun geliştiricisi, UGC öğeler oluşturan bir sanatçı veya sınırlı öğelerle uğraşan bir tüccar olun, bu Robux vergi hesaplayıcısı gerçek karlarınızı anlamak ve Roblox pazaryerinde fiyatlandırma stratejinizi optimize etmek için temel bir araçtır.",

    // New About Section Content
    howWeCalculateTitle: "Robux'u Nasıl Hesaplıyoruz",
    howWeCalculateContent:
      "Hesaplayıcımız Roblox'un tüm işlemlere uyguladığı tam %30 pazaryeri vergi oranını kullanır. Bir öğe sattığınızda, Roblox otomatik olarak platform ücreti olarak %30'u düşer ve size orijinal satış fiyatının %70'ini bırakır. Bu hesaplama anında ve kesindir, satış için öğe listelemeden önce gerçek kazançlarınızı anlamanıza yardımcı olur.",
    whatAreRobuxTitle: "Robux Nedir?",
    whatAreRobuxContent:
      "Robux, Roblox'ta kullanılan sanal para birimidir. Oyuncular oyun içi öğeler, aksesuarlar, oyun geçitleri ve geliştirici ürünleri satın almak için Robux kullanır. Yaratıcı veya tüccar olarak, pazaryerde öğe satarak Robux kazanabilir ve ardından gereksinimleri karşıladığınızda Roblox'un Developer Exchange programı (DevEx) aracılığıyla bunları gerçek paraya çevirebilirsiniz.",
    robuxPricesTitle: "2025'te Robux Fiyatları",
    robuxPricesContent:
      "İşte Roblox'tan güncel resmi Robux fiyatları. Bu oranlar Robux kazançlarınızın gerçek dünya değerini anlamanıza yardımcı olur:",
    priceTableRobux: "Robux Miktarı",
    priceTableUSD: "USD Fiyat",
    priceTableRate: "Oran (R$/USD)",

    // Footer
    footerTitle: "Roblox Pazaryeri Vergisi Nasıl Çalışır",
    footerContent:
      "Roblox tüm satışlardan %30 pazaryeri ücreti alır. Bu, satış fiyatının %70'ini net kazanç olarak aldığınız anlamına gelir. Fiyatlandırma stratejinizi planlamak ve gerçek karlarınızı anlamak için bu hesaplayıcıyı kullanın.",

    // Language Switcher
    languageLabel: "Dil",

    // FAQ Section
    faqTitle: "Sık Sorulan Sorular",
    faqQuestion1: "Roblox pazaryeri vergi oranı nedir?",
    faqAnswer1:
      "Roblox tüm öğe, oyun geçidi ve geliştirici ürün satışlarından %30 pazaryeri vergisi alır. Bu, satış fiyatının %70'ini net kazanç olarak aldığınız anlamına gelir.",
    faqQuestion2: "Vergi sonrası net kazançlarımı nasıl hesaplarım?",
    faqAnswer2:
      "Net kazançlarınızı hesaplamak için satış fiyatınızı 0,7 (%70) ile çarpın. Örneğin, 100 Robux'a bir öğe satarsanız, %30 vergi sonrası 70 Robux alırsınız.",
    faqQuestion3:
      "Belirli bir miktar kazanmak için hangi satış fiyatına ihtiyacım var?",
    faqAnswer3:
      "Gerekli satış fiyatını bulmak için istediğiniz net kazancı 0,7'ye bölün. Örneğin, 70 Robux kazanmak için satış fiyatınızı 100 Robux'a ayarlamanız gerekir.",
    faqQuestion4: "Vergi tüm Roblox pazaryeri işlemlerine uygulanır mı?",
    faqAnswer4:
      "Evet, %30 pazaryeri vergisi Roblox platformunda işlem gören öğeler, giysiler, oyun geçitleri, geliştirici ürünleri ve sınırlı öğeler dahil tüm satışlara uygulanır.",
    faqQuestion5: "Bu hesaplayıcı tüm Robux miktarları için doğru mu?",
    faqAnswer5:
      "Evet, bu hesaplayıcı Roblox tarafından uygulanan tam %30 vergi oranını kullanır ve herhangi bir miktar için doğru hesaplamalar sağlar, sonuçlar iki ondalık basamakla gösterilir.",
  },

  nl: {
    // Header
    title: "Robux Belasting Rekenmachine",
    subtitle:
      "Bereken je netto-inkomsten en vereiste verkoopprijzen voor Roblox marktplaats items. Roblox neemt 30% marktplaatsbelasting op alle verkopen.",

    // Hero Features
    instantCalc: "Direct",
    secure: "Veilig",
    global: "Wereldwijd",
    startCalculating: "Begin met Berekenen",

    // Calculator Section Titles
    afterTaxTitle: "Na-Belasting Rekenmachine",
    afterTaxSubtitle:
      "Voer je verkoopprijs in om netto-inkomsten na 30% belasting te zien",
    preTaxTitle: "Voor-Belasting Rekenmachine",
    preTaxSubtitle:
      "Voer je gewenste inkomsten in om de vereiste verkoopprijs te zien",

    // Form Labels and Placeholders
    sellingPriceLabel: "Verkoopprijs (Robux)",
    sellingPricePlaceholder: "100",
    sellingPriceHelp: "Voer de prijs in waarvoor je wilt verkopen",
    desiredEarningsLabel: "Gewenste Netto-inkomsten (Robux)",
    desiredEarningsPlaceholder: "70",
    desiredEarningsHelp: "Voer in hoeveel je wilt verdienen na belasting",

    // Results
    netEarningsLabel: "Netto-inkomsten Na Belasting",
    requiredPriceLabel: "Vereiste Verkoopprijs",
    calculationLabel: "Berekening:",
    robuxUnit: "Robux",

    // SEO Content
    aboutTitle: "Over de Robux Belasting Rekenmachine",
    marketplaceTaxTitle: "Wat is de Roblox Marktplaatsbelasting?",
    marketplaceTaxContent1:
      "De Roblox marktplaatsbelasting is een vergoeding van 30% die door Roblox wordt geheven op alle verkopen van items, gamepassen en ontwikkelaarsproducten. Dit betekent dat wanneer je een item verkoopt voor 100 Robux, je slechts 70 Robux ontvangt als netto-inkomsten. Het begrijpen van deze belasting is cruciaal voor Roblox-makers en handelaren die hun winst willen maximaliseren.",
    marketplaceTaxContent2:
      "Onze Robux belasting rekenmachine helpt je snel je werkelijke inkomsten na de marktplaatsvergoeding te bepalen, zodat je weloverwogen prijsbeslissingen kunt nemen voor je Roblox items.",
    howToUseTitle: "Hoe de Robux Rekenmachine te Gebruiken",
    afterTaxUsage:
      "Na-Belasting Rekenmachine: Voer je verkoopprijs in om netto Robux-inkomsten na 30% belasting te zien",
    preTaxUsage:
      "Voor-Belasting Rekenmachine: Voer je gewenste inkomsten in om de vereiste verkoopprijs te vinden",
    realTimeUsage:
      "Realtime Resultaten: Berekeningen worden direct bijgewerkt terwijl je typt",
    mobileFriendlyUsage:
      "Mobiel Vriendelijk: Werkt perfect op telefoons en tablets",
    perfectForTitle: "Perfect voor Roblox Ontwikkelaars en Handelaren",
    perfectForContent:
      "Of je nu een Roblox game-ontwikkelaar bent die gamepassen verkoopt, een kunstenaar die UGC items maakt, of een handelaar die werkt met gelimiteerde items, deze Robux belasting rekenmachine is een essentieel hulpmiddel om je werkelijke winst te begrijpen en je prijsstrategie in de Roblox marktplaats te optimaliseren.",

    // New About Section Content
    howWeCalculateTitle: "Hoe Wij Robux Berekenen",
    howWeCalculateContent:
      "Onze rekenmachine gebruikt het exacte 30% marktplaatsbelastingtarief dat Roblox toepast op alle transacties. Wanneer je een item verkoopt, trekt Roblox automatisch 30% af als platformvergoeding, waardoor je 70% van de oorspronkelijke verkoopprijs overhoudt. Deze berekening is direct en nauwkeurig, en helpt je je werkelijke inkomsten te begrijpen voordat je items te koop aanbiedt.",
    whatAreRobuxTitle: "Wat zijn Robux?",
    whatAreRobuxContent:
      "Robux is de virtuele valuta die in Roblox wordt gebruikt. Spelers gebruiken Robux om in-game items, accessoires, gamepassen en ontwikkelaarsproducten te kopen. Als maker of handelaar kun je Robux verdienen door items te verkopen op de marktplaats, en ze vervolgens omzetten naar echt geld via Roblox's Developer Exchange programma (DevEx) zodra je aan de vereisten voldoet.",
    robuxPricesTitle: "Robux Prijzen in 2025",
    robuxPricesContent:
      "Hier zijn de huidige officiële Robux prijzen van Roblox. Deze tarieven helpen je de echte waarde van je Robux-inkomsten te begrijpen:",
    priceTableRobux: "Robux Hoeveelheid",
    priceTableUSD: "USD Prijs",
    priceTableRate: "Tarief (R$/USD)",

    // Footer
    footerTitle: "Hoe Roblox Marktplaatsbelasting Werkt",
    footerContent:
      "Roblox heft een marktplaatsvergoeding van 30% op alle verkopen. Dit betekent dat je 70% van de verkoopprijs ontvangt als netto-inkomsten. Gebruik deze rekenmachine om je prijsstrategie te plannen en je werkelijke winst te begrijpen.",

    // Language Switcher
    languageLabel: "Taal",

    // FAQ Section
    faqTitle: "Veelgestelde Vragen",
    faqQuestion1: "Wat is het Roblox marktplaatsbelastingtarief?",
    faqAnswer1:
      "Roblox heft een marktplaatsbelasting van 30% op alle verkopen van items, gamepassen en ontwikkelaarsproducten. Dit betekent dat je 70% van de verkoopprijs ontvangt als netto-inkomsten.",
    faqQuestion2: "Hoe bereken ik mijn netto-inkomsten na belasting?",
    faqAnswer2:
      "Om je netto-inkomsten te berekenen, vermenigvuldig je je verkoopprijs met 0,7 (70%). Bijvoorbeeld, als je een item verkoopt voor 100 Robux, ontvang je 70 Robux na de 30% belasting.",
    faqQuestion3:
      "Welke verkoopprijs heb ik nodig om een specifiek bedrag te verdienen?",
    faqAnswer3:
      "Om de vereiste verkoopprijs te vinden, deel je je gewenste netto-inkomsten door 0,7. Bijvoorbeeld, om 70 Robux te verdienen, moet je je verkoopprijs instellen op 100 Robux.",
    faqQuestion4:
      "Geldt de belasting voor alle Roblox marktplaats transacties?",
    faqAnswer4:
      "Ja, de 30% marktplaatsbelasting geldt voor alle verkopen inclusief items, kleding, gamepassen, ontwikkelaarsproducten en gelimiteerde items die worden verhandeld op het Roblox platform.",
    faqQuestion5: "Is deze rekenmachine nauwkeurig voor alle Robux bedragen?",
    faqAnswer5:
      "Ja, deze rekenmachine gebruikt het exacte 30% belastingtarief dat door Roblox wordt toegepast en biedt nauwkeurige berekeningen voor elk bedrag, met resultaten weergegeven tot twee decimalen.",
  },

  uk: {
    // Header
    title: "Калькулятор Податку Robux",
    subtitle:
      "Розрахуйте свої чисті доходи та необхідні ціни продажу для предметів торгового майданчика Roblox. Roblox стягує 30% податку з усіх продажів.",

    // Hero Features
    instantCalc: "Миттєво",
    secure: "Безпечно",
    global: "Глобально",
    startCalculating: "Почати Розрахунки",

    // Calculator Section Titles
    afterTaxTitle: "Калькулятор Після Податку",
    afterTaxSubtitle:
      "Введіть ціну продажу, щоб побачити чисті доходи після 30% податку",
    preTaxTitle: "Калькулятор До Податку",
    preTaxSubtitle:
      "Введіть бажані доходи, щоб побачити необхідну ціну продажу",

    // Form Labels and Placeholders
    sellingPriceLabel: "Ціна Продажу (Robux)",
    sellingPricePlaceholder: "100",
    sellingPriceHelp: "Введіть ціну, за якою плануєте продавати",
    desiredEarningsLabel: "Бажані Чисті Доходи (Robux)",
    desiredEarningsPlaceholder: "70",
    desiredEarningsHelp: "Введіть, скільки хочете заробити після податку",

    // Results
    netEarningsLabel: "Чисті Доходи Після Податку",
    requiredPriceLabel: "Необхідна Ціна Продажу",
    calculationLabel: "Розрахунок:",
    robuxUnit: "Robux",

    // SEO Content
    aboutTitle: "Про Калькулятор Податку Robux",
    marketplaceTaxTitle: "Що таке податок торгового майданчика Roblox?",
    marketplaceTaxContent1:
      "Податок торгового майданчика Roblox - це комісія в розмірі 30%, яку Roblox стягує з усіх продажів предметів, ігрових пропусків та продуктів розробників. Це означає, що коли ви продаєте предмет за 100 Robux, ви отримуєте лише 70 Robux як чистий дохід. Розуміння цього податку є важливим для творців та торговців Roblox, які хочуть максимізувати свої прибутки.",
    marketplaceTaxContent2:
      "Наш калькулятор податку Robux допомагає швидко визначити ваші справжні доходи після комісії торгового майданчика, дозволяючи приймати обґрунтовані рішення щодо ціноутворення для ваших предметів Roblox.",
    howToUseTitle: "Як Використовувати Калькулятор Robux",
    afterTaxUsage:
      "Калькулятор Після Податку: Введіть ціну продажу, щоб побачити чисті доходи в Robux після 30% податку",
    preTaxUsage:
      "Калькулятор До Податку: Введіть бажані доходи, щоб знайти необхідну ціну продажу",
    realTimeUsage:
      "Результати в Реальному Часі: Розрахунки оновлюються миттєво під час набору",
    mobileFriendlyUsage:
      "Зручний для Мобільних: Ідеально працює на телефонах та планшетах",
    perfectForTitle: "Ідеальний для Розробників та Торговців Roblox",
    perfectForContent:
      "Чи ви розробник ігор Roblox, що продає ігрові пропуски, художник, що створює UGC предмети, або торговець, що працює з обмеженими предметами, цей калькулятор податку Robux є важливим інструментом для розуміння ваших справжніх прибутків та оптимізації стратегії ціноутворення на торговому майданчику Roblox.",

    // New About Section Content
    howWeCalculateTitle: "Як Ми Розраховуємо Robux",
    howWeCalculateContent:
      "Наш калькулятор використовує точну ставку податку торгового майданчика 30%, яку Roblox застосовує до всіх транзакцій. Коли ви продаєте предмет, Roblox автоматично відраховує 30% як комісію платформи, залишаючи вам 70% від первісної ціни продажу. Цей розрахунок є миттєвим та точним, допомагаючи вам зрозуміти свої справжні доходи перед розміщенням предметів на продаж.",
    whatAreRobuxTitle: "Що таке Robux?",
    whatAreRobuxContent:
      "Robux - це віртуальна валюта, що використовується в Roblox. Гравці використовують Robux для купівлі ігрових предметів, аксесуарів, ігрових пропусків та продуктів розробників. Як творець або торговець, ви можете заробляти Robux, продаючи предмети на торговому майданчику, а потім конвертувати їх у справжні гроші через програму Developer Exchange (DevEx) Roblox, коли ви відповідаєте вимогам.",
    robuxPricesTitle: "Ціни на Robux в 2025",
    robuxPricesContent:
      "Ось поточні офіційні ціни на Robux від Roblox. Ці тарифи допомагають вам зрозуміти реальну вартість ваших доходів у Robux:",
    priceTableRobux: "Кількість Robux",
    priceTableUSD: "Ціна USD",
    priceTableRate: "Курс (R$/USD)",

    // Footer
    footerTitle: "Як Працює Податок Торгового Майданчика Roblox",
    footerContent:
      "Roblox стягує комісію торгового майданчика 30% з усіх продажів. Це означає, що ви отримуєте 70% від ціни продажу як чистий дохід. Використовуйте цей калькулятор для планування стратегії ціноутворення та розуміння ваших справжніх прибутків.",

    // Language Switcher
    languageLabel: "Мова",

    // FAQ Section
    faqTitle: "Часті Запитання",
    faqQuestion1: "Яка ставка податку торгового майданчика Roblox?",
    faqAnswer1:
      "Roblox стягує податок торгового майданчика 30% з усіх продажів предметів, ігрових пропусків та продуктів розробників. Це означає, що ви отримуєте 70% від ціни продажу як чистий дохід.",
    faqQuestion2: "Як розрахувати мої чисті доходи після податку?",
    faqAnswer2:
      "Щоб розрахувати чисті доходи, помножте ціну продажу на 0,7 (70%). Наприклад, якщо ви продаєте предмет за 100 Robux, ви отримаєте 70 Robux після 30% податку.",
    faqQuestion3: "Яка ціна продажу мені потрібна, щоб заробити певну суму?",
    faqAnswer3:
      "Щоб знайти необхідну ціну продажу, розділіть бажані чисті доходи на 0,7. Наприклад, щоб заробити 70 Robux, вам потрібно встановити ціну продажу 100 Robux.",
    faqQuestion4:
      "Чи застосовується податок до всіх транзакцій торгового майданчика Roblox?",
    faqAnswer4:
      "Так, 30% податок торгового майданчика застосовується до всіх продажів, включаючи предмети, одяг, ігрові пропуски, продукти розробників та обмежені предмети, що торгуються на платформі Roblox.",
    faqQuestion5: "Чи точний цей калькулятор для всіх сум Robux?",
    faqAnswer5:
      "Так, цей калькулятор використовує точну ставку податку 30%, що застосовується Roblox, та забезпечує точні розрахунки для будь-якої суми, з результатами, відображеними до двох десяткових знаків.",
  },
};
